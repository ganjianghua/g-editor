import { Emitter } from '../../utils/Emitter';
import type { BrickModel } from './brickModel';

interface Events {
  addBrick: [];
  selectedBrick: [];
}

export class EditorModel extends Emitter<Events> {
  private bricks: BrickModel[] = [];
  private selectedBirck: BrickModel | null = null

  constructor() {
    super();
    this.bricks = [];
  }

  public addBrick(brick: BrickModel) {
    this.bricks.push(brick)
    this.selectBrick(brick);
    this.emit('addBrick');
  }

  public getBricks() {
    return this.bricks;
  }

  public selectBrick(brick: BrickModel) {
    this.selectedBirck = brick;
    this.emit('selectedBrick');
  }

  public getSelected(): BrickModel {
    return this.selectedBirck as BrickModel;
  }
}
