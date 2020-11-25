import {Component, OnInit} from '@angular/core';
import {Player} from "../../shared/models/player";
import {PlayerDetailService} from "./player-detail.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.scss']
})
export class DetailPlayerComponent implements OnInit {
  players: Player[];
  player: Player;
  errorMessage;
  private routeSub: Subscription;

  constructor(private playerDetailService: PlayerDetailService, private route: ActivatedRoute) {
    this.getPlayerList();
  }

  ngOnInit(): void {
  }

  protected getPlayerList() {
    this.playerDetailService.getPlayerDetail().subscribe(
      (players: any) => {
        this.players = players.players;
        this.routeSub = this.route.params.subscribe(params => {
          this.player = this.findPlayer(this.players, 'id', Number(params['id']));
          console.log(`player : `, this.player);
        });
      },
      error => {
        this.errorMessage = error;
        const theError = error.message ? error.message : error;
      }
    );
  }

  findPlayer(array, key, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }
}
