import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game } from 'src/app/models/models';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-world-cup-statistics',
  templateUrl: 'world-cup-statistics.component.html',
  styleUrls: ['world-cup-statistics.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WorldCupStatisticsComponent implements OnChanges {
  @Input()
  country: string;
  games$: Observable<Game[]>;
  games: Game[];

  constructor(private gameService: GameService, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['country']) {
      console.log('ngOnChanges', this.country);

      // not the best idea
      this.games$ = this.gameService
        .getGamesByCountry(this.country)
        .pipe(tap(val => console.log(val)));

      this.gameService.getGamesByCountry(this.country).subscribe(list => {
        this.games = list;
        this.cdr.detectChanges();
      });
    }
  }
}
