import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score-buttons',
  templateUrl: './score-buttons.component.html',
  styleUrls: ['./score-buttons.component.css']
})
export class ScoreButtonsComponent {
getScoreLabel(arg0: number) {
throw new Error('Method not implemented.');
}
  @Output() scoreUpdate = new EventEmitter<{ player: string, score: number }>();

  player1Score: number = 0;
  player2Score: number = 0;

  updateScore(player: string) {
    if (player === 'player1') {
      this.player1Score += 15;
      this.scoreUpdate.emit({ player, score: this.player1Score });
    } else if (player === 'player2') {
      this.player2Score += 15;
      this.scoreUpdate.emit({ player, score: this.player2Score });
    }
  }
}
