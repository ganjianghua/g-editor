import { useEditorModel } from '@/editor/hooks/useEditorModel';
import { useUpdate } from '@/editor/hooks/useUpdate';
import { Input } from 'antd';
import { useEffect } from 'react';

export const ButtonEdit = () => {
  const model = useEditorModel();
  const brick = model.getSelected();
  const update = useUpdate();

  useEffect(() => {
    if (!brick) {
      return
    }
    brick.addListener('change', update);
    return () => {
      brick?.removeListener('change', update);
    };
  }, [brick]);

  const onChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(_e.target.value);
    const value = _e.target.value;
    brick.setConfig<string>('text', value);
  };

  if (!brick) {
    return null;
  }
  const { text } = brick.getConfig();

  return (
    <div className="button-edit">
      <label>按钮文案：</label>
      <Input value={text} onChange={onChange} />
    </div>
  );
};
