import { BaseMovement } from "./base.movement";

export class DownMovement extends BaseMovement {
    protected isReverseMovement: boolean = true;

    protected minCoordX: number = 0;
    protected minCoordY: number = 0;
    
    protected maxCoordX: number = 2; // ToDo generic length
    protected maxCoordY: number = 3; // ToDo generic length

    protected getDestinationTileCoordX(): number {
        return this.coordX + 1;
    }

    protected getDestinationTileCoordY(): number {
        return this.coordY;
    }

    protected recursionEdgeDetector(): boolean {
        return this.coordX < 3;
    }

    protected recursionCoordIterator(): void {
        this.coordX++;
    }
}