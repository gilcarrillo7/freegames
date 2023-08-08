import { Component, Input } from "@angular/core";
import { Game } from "src/app/interfaces/Game";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
})
export class GameComponent {
  @Input() game: Game | null = null;
}
