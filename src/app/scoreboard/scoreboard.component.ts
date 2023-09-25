import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  @Input() player1Score: number = 0;
  @Input() player2Score: number = 0;

  getScoreLabel(score: number): string {
    switch (score) {
      case 0:
        return 'Love';
      case 15:
        return '15';
      case 30:
        return '30';
      case 40:
        return '40';
      case 45:
        return 'Advantage';
      default:
        return '';
    }
  }
}
