import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../../shared/models/player";
type FilesArrayResponseType = HttpResponse<Player[]>;
@Injectable({
  providedIn: 'root'
})
export class ListPlayersService {

  constructor(private http: HttpClient) {}

  getPlayersList(): Observable<FilesArrayResponseType> {
    const urlDataFiles = `https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json`;
    return this.http.get<FilesArrayResponseType>(urlDataFiles);
  }
}
