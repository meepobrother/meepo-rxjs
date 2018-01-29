import { Component } from '@angular/core';
import { map, Subject, do } from 'meepo-rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const sub$ = new Subject();
    sub$.pipe(
      map((res: any) => ({ id: res.id }))
    );
    sub$.subscribe(res => {
      // 2,3,4
      console.log(res);
    });
    sub$.next({ id: 2 });
    sub$.next({ id: 3 });
    sub$.next({ id: 4 });
  }
}

