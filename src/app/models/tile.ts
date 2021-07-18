export class Tile {
    value: string;

    static readonly emptyValue = ' ';

    constructor(value: string) {
        this.value = value;
    }

    isEmpty(): boolean {
        return this.value === Tile.emptyValue;
    }

    toString(): string {
        return this.value;
    }

    canBeMovedOn(tile: Tile): boolean {
        return tile.isEmpty() || this.value === tile.value;
    }

    static empty(): Tile {
        return new Tile(this.emptyValue);
    }
}