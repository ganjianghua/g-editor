import { useMemo } from 'react';
import { EditorModel } from './model/editorModel';
import { useSingleton } from './hooks/useSingleton';
import { Header } from './header';
import { LeftSider } from './left/leftSider';
import { Canvas } from './canvas';
import { RightSider } from './right/rightSider';
import { EditorContext } from './context/editorContext';
import './style.less';

export const Editor = (): JSX.Element => {
  const editorModel = useSingleton(() => new EditorModel());

  const editorContext = useMemo(() => ({
    editorModel,
  }), [editorModel])

  return (
    <div className="editor-page">
      <EditorContext.Provider value={editorContext}>
        <Header />
        <div className="editor-container">
          <LeftSider />
          <Canvas />
          <RightSider />
        </div>
      </EditorContext.Provider>
    </div>
  );
};
