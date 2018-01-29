import { Component } from '@angular/core';
import { map, Subject, tap , of, Observable } from 'meepo-rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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

