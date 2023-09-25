import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  player1Score: number = 0;
  player2Score: number = 0;
  winner: string | null = null;

  updateScore({ player, score }: { player: string, score: string }) {
    if (this.winner) return; // Game is over

    if (score === 'Advantage') {
      // Handle advantage and deuce
      if (player === 'player1' && this.player2Score === 45) {
        this.player2Score = 40;
      } else if (player === 'player2' && this.player1Score === 45) {
        this.player1Score = 40;
      } else {
        this.winner = player;
      }
    } else if (score === 'Game') {
      // Handle game won
      this.winner = player;
    } else {
      // Update regular scores
      if (player === 'player1') {
        this.player1Score = this.getScoreValue(score);
      } else if (player === 'player2') {
        this.player2Score = this.getScoreValue(score);
      }
    }
  }

  private getScoreValue(score: string): number {
    switch (score) {
      case 'Love':
        return 0;
      case '15':
        return 15;
      case '30':
        return 30;
      case '40':
        return 40;
      default:
        return 0;
    }
  }
}
