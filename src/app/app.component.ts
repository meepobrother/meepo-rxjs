import { Component } from '@angular/core';
// rxjs
// import { tap, map } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';

// meepo-rxjs
import { tap, map, of, Subject, Observable } from 'meepo-rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sub: Subject<any> = new Subject();
  constructor() {
    let sub$: Observable<any> = of(1, 2, 3, 4);
    sub$ = sub$.pipe(
      tap(() => {
        console.log('next');
      }),
      map((res: any) => ({ id: res }))
    );
    sub$.subscribe(res => {
      // 2,3,4
      console.log(res);
    });
  }
}

