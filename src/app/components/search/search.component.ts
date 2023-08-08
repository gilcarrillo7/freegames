import { Component, EventEmitter, Output } from "@angular/core";
import { GameService } from "../../services/game.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Game } from "../../interfaces/Game";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent {
  @Output() games = new EventEmitter<Game[]>();

  search = "";
  error = "";
  loading = false;

  constructor(private gameService: GameService) {}

  onSubmit() {
    this.loading = true;
    this.games.emit([]);
    if (this.search.trim() === "") {
      this.error = "Enter a category";
      this.loading = false;
    } else {
      this.error = "";
      this.gameService.getGames(this.search).subscribe({
        next: (response) => {
          this.games.emit(response);
          this.loading = false;
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.error.status_message;
          this.loading = false;
        },
      });
    }
  }
}
