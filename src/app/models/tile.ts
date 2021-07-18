export class Tile {
    value: number | null;

    private static readonly emptyValue = null;

    constructor(value: number | null) {
        this.value = value;
    }

    isEmpty(): boolean {
        return this.value === Tile.emptyValue;
    }

    canBeMovedOn(tile: Tile): boolean {
        return tile.isEmpty() || this.value === tile.value;
    }

    empty(): void {
        this.value = Tile.emptyValue;
    }

    toString(): string {
        return this.value?.toString() ?? ' ';
    }

    static empty(): Tile {
        return new Tile(this.emptyValue);
    }
}