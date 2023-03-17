import { useUpdate } from '@/editor/hooks/useUpdate';
import type { BrickModel } from '@/editor/model/brickModel';
import { useEffect } from 'react';
import './style.less';

export const ButtonView = (props: { model: BrickModel }) => {
  const config: Record<string, any> = props.model.getConfig();
  const update = useUpdate();

  useEffect(() => {
    props.model.addListener('change', update);
    return () => {
      props.model.removeListener('change', update);
    };
  }, [props.model]);

  return (
    <div className="view-button" style={config.style}>
      {config.text}
    </div>
  );
};
