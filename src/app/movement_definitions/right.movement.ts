import { BaseMovement } from "./base.movement";

export class RightMovement extends BaseMovement {
    protected isReverseMovement: boolean = true;

    protected minCoordX: number = 0;
    protected minCoordY: number = 0;

    protected maxCoordX: number = 3; // ToDo generic length
    protected maxCoordY: number = 2; // ToDo generic length

    protected getDestinationTileCoordX(): number {
        return this.coordX;
    }

    protected getDestinationTileCoordY(): number {
        return this.coordY + 1;
    }

    protected recursionEdgeDetector(): boolean {
        return this.coordY < 3;
    }

    protected recursionCoordIterator(): void {
        this.coordY++;
    }
}