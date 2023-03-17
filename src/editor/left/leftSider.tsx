import './style.less';
import { Tabs } from 'antd';
import { type Component, COMPONENTS_LAYOUT } from './components';
import { useCallback } from 'react';
import { BrickModel } from '../model/brickModel';
import { useEditorModel } from '../hooks/useEditorModel';
import { defaultData } from '../bricks';

const { TabPane } = Tabs;

export const LeftSider: React.FC = () => {
  return (
    <div className="left-sider">
      <Tabs defaultActiveKey="2" tabPosition="left" className="left-tab">
        {COMPONENTS_LAYOUT.map((item) => {
          const Icon: any = item.icon;
          return (
            <TabPane
              key={item.menu}
              tabKey={item.menu}
              tab={
                <span>
                  <Icon />
                  {item.menuName}
                </span>
              }
            >
              <ChildCard componentList={item.children} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export const ChildCard = (props: { componentList: Component[] }) => {
  const model = useEditorModel();
  const addComponent = useCallback((type: string) => {
    const brick = new BrickModel({
      config: defaultData,
      type,
    });
    model.addBrick(brick);
  }, []);

  return (
    <div className="child-card">
      {props.componentList.map((item) => (
        <div
          className="child-card-wrapper"
          key={item.type}
          onClick={() => addComponent(item.type)}
        >
          <img src={item.cover} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};
