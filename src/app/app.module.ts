import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {ListPlayersComponent} from "./modules/players-list/list-players.component";
import {DetailPlayerComponent} from "./modules/players-detail/detail-player.component";

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    DetailPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
