import { createContext } from 'react';
import type { EditorModel } from '../model/editorModel';

interface EditorContextModel {
  editorModel: EditorModel | null;
}

export const EditorContext = createContext<EditorContextModel>({
  editorModel: null,
});
