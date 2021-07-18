import { BaseMovement } from "./base.movement";

export class LeftMovement extends BaseMovement {
    protected minCoordX: number = 0;
    protected minCoordY: number = 1;
    protected maxCoordX: number = 3; // ToDo generic length
    protected maxCoordY: number = 3; // ToDo generic length

    protected getDestinationTileCoordX(): number {
        return this.coordX;
    }

    protected getDestinationTileCoordY(): number {
        return this.coordY - 1;
    }

    protected recursionEdgeDetector(): boolean {
        return this.coordY > 0;
    }

    protected recursionCoordIterator(): void {
        this.coordY--;
    }
}