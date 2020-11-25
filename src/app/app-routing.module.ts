import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPlayersComponent} from "./modules/players-list/list-players.component";
import {DetailPlayerComponent} from "./modules/players-detail/detail-player.component";

const routes: Routes = [
  { path: '', component: ListPlayersComponent, },
  { path: 'player-detail/:id', component: DetailPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
