import { Component } from "@angular/core";
import { Game } from "./interfaces/Game";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  games: Game[] = [];

  setGames($event: Game[]) {
    this.games = $event;
  }
}
