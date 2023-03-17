import { useEffect } from 'react';
import { ButtonView } from '../bricks';
import { useEditorModel } from '../hooks/useEditorModel';
import { useUpdate } from '../hooks/useUpdate';
import './style.less';

export const Canvas = () => {
  const model = useEditorModel();
  const update = useUpdate();
  const bircks = model.getBricks();

  useEffect(() => {
    model.addListener('addBrick', update);
    return () => {
      model.removeListener('addBrick', update);
    };
  }, []);

  return (
    <div className="canvas">
      <div className="brick-container">
        {bircks.map((model) => (
          <div className='brick-container-wrapper' key={model.getId()}>
            <ButtonView model={model} />
          </div>
        ))}
      </div>
    </div>
  );
};
