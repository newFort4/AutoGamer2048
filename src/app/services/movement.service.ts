import { Injectable } from '@angular/core';
import { Movement } from '../enums/movement';
import { Tile } from '../models/tile';
import { BaseMovement } from '../movement_definitions/base.movement';
import { DownMovement } from '../movement_definitions/down.movement';
import { LeftMovement } from '../movement_definitions/left.movements';
import { RightMovement } from '../movement_definitions/right.movement';
import { UpMovement } from '../movement_definitions/up.movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  movementsDefinitions: Map<Movement, BaseMovement>;

  constructor() {
    this.movementsDefinitions = new Map<Movement, BaseMovement>(
      [
        [Movement.Up, new UpMovement()],
        [Movement.Left, new LeftMovement()],
        [Movement.Right, new RightMovement()],
        [Movement.Down, new DownMovement()]
      ]
    );
  }

  tryMove(tiles: Array<Array<Tile>>, movement: Movement): boolean {
    return this.movementsDefinitions.get(movement)!.tryMove(tiles);
  }
}
