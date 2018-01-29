
> rxjs统一导出, 也可以当字典查询

- [rxjs导入说明](https://rxjs-cn.github.io/learn-rxjs-operators/concepts/operator-imports.html)

```sh
git submodule add https://github.com/meepobrother/meepo-rxjs.git src/app/rx
```

- app.component.ts

```ts
import { map, of tap } from './rx';

of(1,2,3,4,5,6).pipe(
    tap(res=>{
        console.log(res);
    }),
    map(res=>({id: res}))
).subscribe(res=>{
    console.log(res);
})
```

- 自定义操作符

```ts
function mySimpleOperator(someCallback) {
  // 注意这里返回的是函数
  return function mySimpleOperatorImplementation(source) {
    return Observable.create(subscriber => {
      var subscription = source.subscribe(value => {
        try {
          subscriber.next(someCallback(value));
        } catch(err) {
          subscriber.error(err);
        }
      },
      err => subscriber.error(err),
      () => subscriber.complete());
      return subscription;
   });
  }
}

const obs = someObservable.pipe(mySimpleOperator(x => x + '!'));

```

- export 

```ts
// observable
export { ArrayLikeObservable } from 'rxjs/observable/ArrayLikeObservable';
export { ArrayObservable } from 'rxjs/observable/ArrayObservable';
export { bindCallback } from 'rxjs/observable/bindCallback';
export { BoundCallbackObservable } from 'rxjs/observable/BoundCallbackObservable';
export { BoundNodeCallbackObservable } from 'rxjs/observable/BoundNodeCallbackObservable';
export { combineLatest as combineLatestPbservable } from 'rxjs/observable/combineLatest';
export { concat as concatObservable } from 'rxjs/observable/concat';
export { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
export { defer } from 'rxjs/observable/defer';
export { DeferObservable } from 'rxjs/observable/DeferObservable';
export { empty } from 'rxjs/observable/empty';
export { EmptyObservable } from 'rxjs/observable/EmptyObservable';
export { ErrorObservable } from 'rxjs/observable/ErrorObservable';
export { forkJoin } from 'rxjs/observable/forkJoin';
export { ForkJoinObservable } from 'rxjs/observable/ForkJoinObservable';
export { from } from 'rxjs/observable/from';
export { fromEvent } from 'rxjs/observable/fromEvent';
export { FromEventObservable } from 'rxjs/observable/FromEventObservable';
export { fromEventPattern } from 'rxjs/observable/fromEventPattern';
export { FromEventPatternObservable } from 'rxjs/observable/FromEventPatternObservable';
export { FromObservable } from 'rxjs/observable/FromObservable';
export { fromPromise } from 'rxjs/observable/fromPromise';
export { generate } from 'rxjs/observable/generate';
export { GenerateObservable } from 'rxjs/observable/GenerateObservable';
export { _if as iif } from 'rxjs/observable/if';
export { IfObservable } from 'rxjs/observable/IfObservable';
export { interval } from 'rxjs/observable/interval';
export { IntervalObservable } from 'rxjs/observable/IntervalObservable';
export { IteratorObservable } from 'rxjs/observable/IteratorObservable';
export { merge as mergePbservable } from 'rxjs/observable/merge';
export { never } from 'rxjs/observable/never';
export { NeverObservable } from 'rxjs/observable/NeverObservable';
export { of } from 'rxjs/observable/of';
export { onErrorResumeNext as onErrorResumeNextObservable } from 'rxjs/observable/onErrorResumeNext';
export { pairs } from 'rxjs/observable/pairs';
export { PairsObservable } from 'rxjs/observable/PairsObservable';
export { PromiseObservable } from 'rxjs/observable/PromiseObservable';
export { race as raceObservable } from 'rxjs/observable/race';
export { range } from 'rxjs/observable/range';
export { RangeObservable } from 'rxjs/observable/RangeObservable';
export { ScalarObservable } from 'rxjs/observable/ScalarObservable';
export { SubscribeOnObservable } from 'rxjs/observable/SubscribeOnObservable';
export { _throw as throwError } from 'rxjs/observable/throw';
export { timer } from 'rxjs/observable/timer';
export { TimerObservable } from 'rxjs/observable/TimerObservable';
export { using } from 'rxjs/observable/using';
export { UsingObservable } from 'rxjs/observable/UsingObservable';

// operators
export { zip } from 'rxjs/operators/zip';
export { audit } from 'rxjs/operators/audit';
export { auditTime } from 'rxjs/operators/auditTime';
export { buffer } from 'rxjs/operators/buffer';
export { bufferCount } from 'rxjs/operators/bufferCount';
export { bufferTime, } from 'rxjs/operators/bufferTime';
export { bufferToggle } from 'rxjs/operators/bufferToggle';
export { bufferWhen } from 'rxjs/operators/bufferWhen';
export { catchError } from 'rxjs/operators/catchError';
export { combineAll } from 'rxjs/operators/combineAll';
export { combineLatest } from 'rxjs/operators/combineLatest';
export { concat } from 'rxjs/operators/concat';
export { concatAll } from 'rxjs/operators/concatAll';
export { concatMap } from 'rxjs/operators/concatMap';
export { concatMapTo } from 'rxjs/operators/concatMapTo';
export { count } from 'rxjs/operators/count';
export { debounce } from 'rxjs/operators/debounce';
export { debounceTime } from 'rxjs/operators/debounceTime';
export { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
export { distinctUntilKeyChanged } from 'rxjs/operators/distinctUntilKeyChanged';
export { elementAt } from 'rxjs/operators/elementAt';
export { every } from 'rxjs/operators/every';
export { exhaust } from 'rxjs/operators/exhaust';
export { exhaustMap } from 'rxjs/operators/exhaustMap';
export { defaultIfEmpty } from 'rxjs/operators/defaultIfEmpty';
export { delay } from 'rxjs/operators/delay';
export { delayWhen } from 'rxjs/operators/delayWhen';
export { dematerialize } from 'rxjs/operators/dematerialize';
export { distinct } from 'rxjs/operators/distinct';
export { expand } from 'rxjs/operators/expand';
export { filter } from 'rxjs/operators/filter';
export { finalize } from 'rxjs/operators/finalize';
export { find } from 'rxjs/operators/find';
export { findIndex } from 'rxjs/operators/findIndex';
export { first } from 'rxjs/operators/first';
export { groupBy } from 'rxjs/operators/groupBy';
export { ignoreElements, } from 'rxjs/operators/ignoreElements';
export { isEmpty } from 'rxjs/operators/isEmpty';
export { last } from 'rxjs/operators/last';
export { map } from 'rxjs/operators/map';
export { mapTo } from 'rxjs/operators/mapTo';
export { materialize } from 'rxjs/operators/materialize';
export { max } from 'rxjs/operators/max';
export { merge } from 'rxjs/operators/merge';
export { mergeAll } from 'rxjs/operators/mergeAll';
export { mergeMap } from 'rxjs/operators/mergeMap';
export { mergeMapTo } from 'rxjs/operators/mergeMapTo';
export { mergeScan } from 'rxjs/operators/mergeScan';
export { min } from 'rxjs/operators/min';
export { multicast } from 'rxjs/operators/multicast';
export { observeOn } from 'rxjs/operators/observeOn';
export { onErrorResumeNext } from 'rxjs/operators/onErrorResumeNext';
export { pairwise } from 'rxjs/operators/pairwise';
export { partition } from 'rxjs/operators/partition';
export { pluck } from 'rxjs/operators/pluck';
export { publish } from 'rxjs/operators/publish';
export { publishBehavior } from 'rxjs/operators/publishBehavior';
export { publishLast, } from 'rxjs/operators/publishLast';
export { publishReplay, } from 'rxjs/operators/publishReplay';
export { race, } from 'rxjs/operators/race';
export { reduce, } from 'rxjs/operators/reduce';
export { refCount, } from 'rxjs/operators/refCount';
export { repeat, } from 'rxjs/operators/repeat';
export { repeatWhen, } from 'rxjs/operators/repeatWhen';
export { retry, } from 'rxjs/operators/retry';
export { retryWhen, } from 'rxjs/operators/retryWhen';
export { sample, } from 'rxjs/operators/sample';
export { sampleTime } from 'rxjs/operators/sampleTime';
export { scan } from 'rxjs/operators/scan';
export { sequenceEqual } from 'rxjs/operators/sequenceEqual';
export { share } from 'rxjs/operators/share';
export { shareReplay } from 'rxjs/operators/shareReplay';
export { single } from 'rxjs/operators/single';
export { skip } from 'rxjs/operators/skip';
export { skipLast } from 'rxjs/operators/skipLast';
export { skipUntil } from 'rxjs/operators/skipUntil';
export { skipWhile } from 'rxjs/operators/skipWhile';
export { startWith } from 'rxjs/operators/startWith';
export { switchAll } from 'rxjs/operators/switchAll';
export { switchMap } from 'rxjs/operators/switchMap';
export { switchMapTo } from 'rxjs/operators/switchMapTo';
export { take } from 'rxjs/operators/take';
export { takeLast } from 'rxjs/operators/takeLast';
export { takeUntil } from 'rxjs/operators/takeUntil';
export { takeWhile } from 'rxjs/operators/takeWhile';
export { tap } from 'rxjs/operators/tap';
export { throttleTime } from 'rxjs/operators/throttleTime';
export { timeInterval } from 'rxjs/operators/timeInterval';
export { timeout } from 'rxjs/operators/timeout';
export { timeoutWith } from 'rxjs/operators/timeoutWith';
export { throttle } from 'rxjs/operators/throttle';
export { timestamp } from 'rxjs/operators/timestamp';
export { toArray } from 'rxjs/operators/toArray';
export { window } from 'rxjs/operators/window';
export { windowCount } from 'rxjs/operators/windowCount';
export { windowTime } from 'rxjs/operators/windowTime';
export { windowToggle } from 'rxjs/operators/windowToggle';
export { windowWhen } from 'rxjs/operators/windowWhen';
export { withLatestFrom } from 'rxjs/operators/withLatestFrom';
export { zipAll } from 'rxjs/operators/zipAll';
export { tap as do } from 'rxjs/operators/tap';
export { mergeMap as flatMap } from 'rxjs/operators/mergeMap';

/* Observable */
export { Observable } from 'rxjs/Observable';
/* Subjects */
export { Subject } from 'rxjs/Subject';
export { BehaviorSubject } from 'rxjs/BehaviorSubject';
export { ReplaySubject } from 'rxjs/ReplaySubject';
/* Subscription */
export { Subscription } from 'rxjs/Subscription';
/* Notification */
export { Notification } from 'rxjs/Notification';

export { Action } from 'rxjs/scheduler/Action';
export { animationFrame as animationFrameScheduler } from 'rxjs/scheduler/animationFrame';
export { AnimationFrameAction } from 'rxjs/scheduler/AnimationFrameAction';
export { AnimationFrameScheduler } from 'rxjs/scheduler/AnimationFrameScheduler';
export { asap as asapScheduler } from 'rxjs/scheduler/asap';
export { AsapAction } from 'rxjs/scheduler/AsapAction';
export { AsapScheduler } from 'rxjs/scheduler/AsapScheduler';
export { async as asyncScheduler } from 'rxjs/scheduler/async';
export { AsyncAction } from 'rxjs/scheduler/AsyncAction';
export { AsyncScheduler } from 'rxjs/scheduler/AsyncScheduler';
export { queue as queueScheduler } from 'rxjs/scheduler/queue';
export { QueueAction } from 'rxjs/scheduler/QueueAction';
export { QueueScheduler } from 'rxjs/scheduler/QueueScheduler';
export { VirtualTimeScheduler } from 'rxjs/scheduler/VirtualTimeScheduler';



export { AnimationFrame } from 'rxjs/util/AnimationFrame';
export { applyMixins } from 'rxjs/util/applyMixins';
export { ArgumentOutOfRangeError } from 'rxjs/util/ArgumentOutOfRangeError';
export { assign } from 'rxjs/util/assign';
export { EmptyError } from 'rxjs/util/EmptyError';
export { errorObject } from 'rxjs/util/errorObject';
export { FastMap } from 'rxjs/util/FastMap';
export { identity } from 'rxjs/util/identity';
export { Immediate } from 'rxjs/util/Immediate';
export { isArray } from 'rxjs/util/isArray';
export { isArrayLike } from 'rxjs/util/isArrayLike';
export { isDate } from 'rxjs/util/isDate';
export { isFunction } from 'rxjs/util/isFunction';
export { isNumeric } from 'rxjs/util/isNumeric';
export { isObject } from 'rxjs/util/isObject';
export { isPromise } from 'rxjs/util/isPromise';
export { isScheduler } from 'rxjs/util/isScheduler';
export { Map } from 'rxjs/util/Map';
export { MapPolyfill } from 'rxjs/util/MapPolyfill';
export { noop } from 'rxjs/util/noop';
export { not } from 'rxjs/util/not';
export { ObjectUnsubscribedError } from 'rxjs/util/ObjectUnsubscribedError';
export { pipe } from 'rxjs/util/pipe';
export { root } from 'rxjs/util/root';
export { Set } from 'rxjs/util/Set';
export { subscribeToResult } from 'rxjs/util/subscribeToResult';
export { TimeoutError } from 'rxjs/util/TimeoutError';
export { toSubscriber } from 'rxjs/util/toSubscriber';
export { tryCatch } from 'rxjs/util/tryCatch';
export { UnsubscriptionError } from 'rxjs/util/UnsubscriptionError';
```


- add

```ts
import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromEventPattern';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/generate';
import 'rxjs/add/observable/if';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/race';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/onErrorResumeNext';
import 'rxjs/add/observable/pairs';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/using';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/zip';

//dom
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/dom/webSocket';

//internal/operators
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/bufferToggle';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/concatMapTo';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/dematerialize';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/distinctUntilKeyChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaust';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/elementAt';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/findIndex';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/isEmpty';
import 'rxjs/add/operator/audit';
import 'rxjs/add/operator/auditTime';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/every';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/max';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/mergeScan';
import 'rxjs/add/operator/min';
import 'rxjs/add/operator/multicast';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/onErrorResumeNext';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/publishBehavior';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/race';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/repeatWhen';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/sampleTime';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/sequenceEqual';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/timestamp';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/window';
import 'rxjs/add/operator/windowCount';
import 'rxjs/add/operator/windowTime';
import 'rxjs/add/operator/windowToggle';
import 'rxjs/add/operator/windowWhen';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/zipAll';
```
