import { Tile } from "../models/tile";

export abstract class BaseMovement {
    protected coordX: number = 0; // Initialization doesn't have sense
    protected coordY: number = 0; // Initialization doesn't have sense

    protected abstract isReverseMovement: boolean;

    protected abstract minCoordX: number; // Rename it
    protected abstract minCoordY: number; // Rename it

    protected abstract maxCoordX: number; // Rename it
    protected abstract maxCoordY: number; // Rename it

    protected abstract getDestinationTileCoordX(): number;
    protected abstract getDestinationTileCoordY(): number;

    protected abstract recursionEdgeDetector(): boolean; // Rename it
    protected abstract recursionCoordIterator(): void;

    private isSomethingMoved: boolean = false; // Initialization doesn't have sense

    // Possible code duplication
    tryMove(tiles: Array<Array<Tile>>): boolean {
        this.isSomethingMoved = false;

        if (!this.isReverseMovement) {
            for (let i = this.minCoordX; i <= this.maxCoordX; i++) {
                for (let j = this.minCoordY; j <= this.maxCoordY; j++) {
                    this.performLoopCycle(tiles, i, j);
                }
            }
        } else {
            for (let i = this.maxCoordX; i >= this.minCoordX; i--) {
                for (let j = this.maxCoordY; j >= this.minCoordY; j--) {
                    this.performLoopCycle(tiles, i, j);
                }
            }
        }

        return this.isSomethingMoved;
    }

    private performLoopCycle(tiles: Array<Array<Tile>>, i: number, j: number): void {
        this.coordX = i;
        this.coordY = j;

        const getSourceTile = () => tiles[this.coordY][this.coordX];
        const getDestinationTile = () => tiles[this.getDestinationTileCoordY()][this.getDestinationTileCoordX()];

        if (!getSourceTile().isEmpty()) {
            while (this.recursionEdgeDetector() &&
                getSourceTile().canBeMovedOn(getDestinationTile())) {
                let isCombined: boolean = false;

                if (getDestinationTile().isEmpty()) {
                    getDestinationTile().value = getSourceTile().value;
                } else {
                    getDestinationTile().value = getDestinationTile().value! * 2;
                    isCombined = true;
                }

                this.isSomethingMoved = true;

                getSourceTile().empty();

                this.recursionCoordIterator();

                if (isCombined) {
                    break;
                }
            }
        }
    }
}