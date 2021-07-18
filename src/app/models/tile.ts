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

    static empty(): Tile {
        return new Tile(this.emptyValue);
    }
}