import { useContext } from 'react';
import { EditorContext } from '../context/editorContext';
import type { EditorModel } from '../model/editorModel';

export const useEditorModel = (): EditorModel => {
  const context = useContext(EditorContext)
  return context.editorModel as EditorModel;
};
