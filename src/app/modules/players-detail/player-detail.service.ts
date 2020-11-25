import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Player} from "../../shared/models/player";
type FilesArrayResponseType = HttpResponse<Player[]>;
@Injectable({
  providedIn: 'root'
})
export class PlayerDetailService {

  constructor(private http: HttpClient) { }

  getPlayerDetail(): Observable<FilesArrayResponseType> {
    const urlDataFiles = `https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json`;
    return this.http.get<FilesArrayResponseType>(urlDataFiles);
  }
}
