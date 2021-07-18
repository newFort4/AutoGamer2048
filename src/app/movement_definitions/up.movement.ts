import { BaseMovement } from "./base.movement";

export class UpMovement extends BaseMovement {
    protected minCoordX: number = 1;
    protected minCoordY: number = 0;
    protected maxCoordX: number = 3; // ToDo generic length
    protected maxCoordY: number = 3; // ToDo generic length

    protected getDestinationTileCoordX(): number {
        return this.coordX - 1;
    }

    protected getDestinationTileCoordY(): number {
        return this.coordY;
    }

    protected recursionEdgeDetector(): boolean {
        return this.coordX > 0;
    }

    protected recursionCoordIterator(): void {
        this.coordX--;
    }
}