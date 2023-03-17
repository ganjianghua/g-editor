import './style.less';
import { ButtonEdit } from '../bricks';
import { useEditorModel } from '../hooks/useEditorModel';
import { useUpdate } from '../hooks/useUpdate';
import { useEffect } from 'react';

export const RightSider = () => {
  const model = useEditorModel();
  const update = useUpdate();

  useEffect(() => {
    model.addListener('selectedBrick', update);
    return () => {
      model.removeListener('selectedBrick', update);
    };
  }, []);

  return (
    <div className="right-sider">
      <ButtonEdit />
    </div>
  );
};
