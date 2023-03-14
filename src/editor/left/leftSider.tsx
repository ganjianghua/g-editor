import './style.less'
import { Tabs } from 'antd'
import { type Component, COMPONENTS_LAYOUT } from './components'

const { TabPane } = Tabs

export const LeftSider: React.FC = () => {
  return (
    <div className="left-sider">
      <Tabs defaultActiveKey="2" tabPosition="left" className="left-tab">
        {COMPONENTS_LAYOUT.map((item) => {
          const Icon: any = item.icon
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
          )
        })}
      </Tabs>
    </div>
  )
}

export const ChildCard = (props: { componentList: Component[] }) => {
  return (
    <div className="child-card">
      {props.componentList.map((item) => (
        <div className="child-card-wrapper" key={item.type}>
          <img src={item.cover} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}
