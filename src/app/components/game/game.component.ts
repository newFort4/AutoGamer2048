import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/enums/movement';
import { Tile } from 'src/app/models/tile';
import { BaseMovement } from 'src/app/movement_definitions/base.movement';
import { MovementService } from 'src/app/services/movement.service';

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

	constructor(private movementService: MovementService) {
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
		if (this.tryMove(movement)) {
			this.tryAddValueToBoard();
		}
	}

	private tryMove(movement: Movement): boolean {
		return this.movementService.tryMove(this.tiles, movement);
	}

	private tryAddValueToBoard() {
		let linesWithEmptyTile = this.tiles.map(x => x.filter(y => y.isEmpty()));

		var emptyTiles = new Array<Tile>();
		for (let i = 0; i < linesWithEmptyTile.length; i++) {
			emptyTiles = emptyTiles.concat(linesWithEmptyTile[i]);
		}

		if (emptyTiles.length !== 0) {
			let randomTileIndex = Math.floor(Math.random() * emptyTiles.length);

			emptyTiles[randomTileIndex].value = this.generateTwoOrFour();
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
