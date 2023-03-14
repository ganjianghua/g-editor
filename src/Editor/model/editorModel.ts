import { Emitter } from '../../utils/Emitter'

interface Events {
  add: []
}

export class EditorModel extends Emitter<Events> {
  private readonly modules: any[] = []

  constructor() {
    super()
    this.modules = []
  }

  public addBrick() {
    this.modules.push({
      type: 'image',
      name: '图片',
      config: {
        src: '',
        width: -1,
        height: -1
      }
    })
    this.emit('add')
  }

  public getModules() {
    return this.modules
  }
}
