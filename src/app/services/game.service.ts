import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "../interfaces/Game";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

  constructor(private http: HttpClient) {}

  getGames(category: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.url}?category=${category}`, {
      headers: {
        "X-RapidAPI-Key": "5a6bcf0938msh31a5cfd1dc7adabp15ce5ajsnd9c2c7a00701",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    });
  }
}
