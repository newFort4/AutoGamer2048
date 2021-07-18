import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/enums/movement';
import { Tile } from 'src/app/models/tile';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	width: number = 4;
	height: number = 4;

	tiles: Array<Array<Tile>>;
	movement = Movement;

	constructor() {
		this.tiles = new Array<Array<Tile>>();

		for (let i = 0; i < this.height; i++) {
			this.tiles.push(new Array<Tile>());

			for (let j = 0; j < this.width; j++) {
				this.tiles[i].push(Tile.empty());
			}
		}
	}

	ngOnInit(): void {
		this.tryAddValueToBoard();
	}

	onMoveButtonClicked(movement: Movement): void {
		this.tryMove(movement);
		this.tryAddValueToBoard();
	}

	private tryMove(movement: Movement): boolean {
		switch (movement) {
			case Movement.Left:
				
				break;
		
			default:
				break;
		}

		return true;
	}

	private tryAddValueToBoard() {
		let linesWithEmptyTile = this.tiles.map(x => x.filter(y => y.isEmpty()));

		var emptyTiles = new Array<Tile>();
		for (let i = 0; i < linesWithEmptyTile.length; i++) {
			emptyTiles = emptyTiles.concat(linesWithEmptyTile[i]);
		}

		if (emptyTiles.length !== 0) {
			let randomTileIndex = Math.floor(Math.random() * emptyTiles.length);
			console.log(randomTileIndex);
	
			let number = this.generateTwoOrFour();
	
			emptyTiles[randomTileIndex].value = number.toString();
		} else {
			this.endGame();
		}
	}

	private generateTwoOrFour(): number {
		return (Math.floor(Math.random() * 2) + 1) * 2;
	}

	private endGame(): void {
	}
}
