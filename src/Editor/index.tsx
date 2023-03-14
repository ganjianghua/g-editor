import { useEffect } from 'react';
import { EditorModel } from './model/editorModel';
import { useUpdate } from './hooks/useUpdate';
import { useSingleton } from './hooks/useSingleton';
import { Header } from './header';
import { LeftSider } from './left/leftSider';
import { Canvas } from './canvas';
import { RightSider } from './right/rightSider';
import './style.less';

export const Editor = (): JSX.Element => {
  const update = useUpdate();
  const editorModel = useSingleton(() => new EditorModel());

  useEffect(() => {
    editorModel.addListener('add', update);
    return () => {
      editorModel.removeListener('add', update);
    };
  }, []);

  return (
    <div className="editor-page">
      <Header />
      <div className="editor-container">
        <LeftSider />
        <Canvas />
        <RightSider />
      </div>
    </div>
  );
};
