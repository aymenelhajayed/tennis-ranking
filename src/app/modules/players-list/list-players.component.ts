import {Component, OnInit} from '@angular/core';
import {ListPlayersService} from "./list-players.service";
import {Player} from "../../shared/models/player";

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent implements OnInit {
  players: Player[];
  errorMessage;

  constructor(private listPlayersService: ListPlayersService) {
  }

  ngOnInit(): void {
    this.getPlayersList();
  }

  protected getPlayersList() {
    this.listPlayersService.getPlayersList().subscribe(
      (players: any) => {
        this.players = players.players;
        this.players.sort(this.compare);
        localStorage.setItem('players', this.players.toString());
      },
      error => {
        this.errorMessage = error;
        const theError = error.message ? error.message : error;
      }
    );
  }

  compare(a, b) {
    const rankA = a.data.rank;
    const rankB = b.data.rank;

    let comparison = 0;
    if (rankA > rankB) {
      comparison = 1;
    } else if (rankA < rankB) {
      comparison = -1;
    }
    return comparison;
  }

}
