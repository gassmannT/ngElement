import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Game } from 'src/app/models/models';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-world-cup-statistics',
  templateUrl: 'world-cup-statistics.component.html',
  styleUrls: ['world-cup-statistics.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WorldCupStatisticsComponent implements OnChanges {
  @Input()
  country: string;
  public games$: Observable<Game[]>;

  constructor(private gameService: GameService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['country']) {
      console.log('ngOnChanges', this.country);

      // not the best idea
      this.games$ = this.gameService.getGamesByCountry(this.country).pipe(
        tap(val => console.log(val)),
        first()
      );
      //   this.matches = [];

      //   this.matchService.getMatchesByCountry(this.country).subscribe(list => {
      //     this.matches = list;
      //     this.cdr.detectChanges();
      //   });
    }
  }
}
