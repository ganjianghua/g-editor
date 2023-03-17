import { Emitter } from '../../utils/Emitter';
import { uuid } from '@/utils/uuid';

interface BrickEvents {
  change: [];
}

export class BrickModel extends Emitter<BrickEvents> {
  private type: string = '';
  private id: string = '';
  private config: Record<string, any> = {};

  constructor(brick: { type: string; config: Record<string, any> }) {
    super();
    const { type, config } = brick;
    this.type = type;
    this.config = config;
    this.id = `${type}-${uuid()}`;
  }

  public getId() {
    return this.id;
  }

  public getType() {
    return this.type;
  }

  public getConfig() {
    return this.config;
  }

  public setConfig<T>(key: string, value: T) {
    this.config = {
      ...this.config,
      [key]: value
    }
    this.emit('change')
  }
}
