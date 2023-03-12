import { component } from "./bricks";
import { EditorModel } from "./model/editorModel";
import { useUpdate } from "./hooks/useUpdate";
import { useSingleton } from "./hooks/useSingleton";
import { useEffect } from "react";

export const Editor = () => {
  const update = useUpdate();
  const editorModel = useSingleton(() => new EditorModel());
  const moduels = editorModel.getModules();

  useEffect(() => {
    editorModel.addListener("add", update);
    return () => {
      editorModel.removeListener("add", update);
    };
  }, []);

  return (
    <div>
      {component.map((item) => (
        <div onClick={() => editorModel.addBrick()} key={item.type}>
          {item.name}
        </div>
      ))}
      <div>{JSON.stringify(moduels)}</div>
    </div>
  );
};
