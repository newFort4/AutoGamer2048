import { Tile } from "../models/tile";

export abstract class BaseMovement {
    protected coordX: number = 0; // Cannot be defined
    protected coordY: number = 0; // Cannot be defined

    protected abstract minCoordX: number; // Rename it
    protected abstract minCoordY: number; // Rename it

    protected abstract maxCoordX: number; // Rename it
    protected abstract maxCoordY: number; // Rename it

    protected abstract getDestinationTileCoordX(): number;
    protected abstract getDestinationTileCoordY(): number;

    protected abstract recursionEdgeDetector(): boolean; // Rename it
    protected abstract recursionCoordIterator(): void;

    tryMove(tiles: Array<Array<Tile>>): boolean {
        const width = tiles.length;
        const height = tiles.length;

        let isSomethingMoved = false;

        for (let i = this.minCoordX; i <= this.maxCoordX; i++) {
            for (let j = this.minCoordY; j <= this.maxCoordY; j++) {
                this.coordX = i;
                this.coordY = j;

                const getSourceTile = () => tiles[this.coordY][this.coordX];
                const getDestinationTile = () => tiles[this.getDestinationTileCoordY()][this.getDestinationTileCoordX()];

                if (getSourceTile().isEmpty()) {
                    continue;
                }

                while (this.recursionEdgeDetector() &&
                    getSourceTile().canBeMovedOn(getDestinationTile())) {
                    if (getDestinationTile().isEmpty()) {
                        getDestinationTile().value = getSourceTile().value;
                    } else {
                        getDestinationTile().value = getDestinationTile().value! * 2;
                    }

                    isSomethingMoved = true;

                    getSourceTile().empty();

                    this.recursionCoordIterator();
                }
            }
        }

        return isSomethingMoved;
    }
}