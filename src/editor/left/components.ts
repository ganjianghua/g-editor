import { AndroidOutlined, AppleOutlined } from '@ant-design/icons'
import ButtonConver from '@/assets/cover/button.png'

export interface Layout {
  menu: string
  menuName: string
  icon: unknown
  children: Component[]
}

export interface Component {
  type: string
  cover: string
  name: string
}

export const COMPONENTS_LAYOUT: Layout[] = [
  {
    menu: 'base',
    menuName: '基础组件',
    icon: AndroidOutlined,
    children: [
      {
        type: 'button',
        name: '按钮',
        cover: ButtonConver
      }
    ]
  },
  {
    menu: 'medium',
    menuName: '媒体组件',
    icon: AppleOutlined,
    children: [
      {
        type: 'image',
        name: '图片',
        cover: ButtonConver
      }
    ]
  }
]
