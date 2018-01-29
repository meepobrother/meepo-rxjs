
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
``

- add

```ts
// add to ovservable
import './add/observable/bindCallback';
import './add/observable/bindNodeCallback';
import './add/observable/combineLatest';
import './add/observable/concat';
import './add/observable/defer';
import './add/observable/empty';
import './add/observable/forkJoin';
import './add/observable/from';
import './add/observable/fromEvent';
import './add/observable/fromEventPattern';
import './add/observable/fromPromise';
import './add/observable/generate';
import './add/observable/if';
import './add/observable/interval';
import './add/observable/merge';
import './add/observable/race';
import './add/observable/never';
import './add/observable/of';
import './add/observable/onErrorResumeNext';
import './add/observable/pairs';
import './add/observable/range';
import './add/observable/using';
import './add/observable/throw';
import './add/observable/timer';
import './add/observable/zip';

//dom
import './add/observable/dom/ajax';
import './add/observable/dom/webSocket';

//internal/operators
import './add/operator/buffer';
import './add/operator/bufferCount';
import './add/operator/bufferTime';
import './add/operator/bufferToggle';
import './add/operator/bufferWhen';
import './add/operator/catch';
import './add/operator/combineAll';
import './add/operator/combineLatest';
import './add/operator/concat';
import './add/operator/concatAll';
import './add/operator/concatMap';
import './add/operator/concatMapTo';
import './add/operator/count';
import './add/operator/dematerialize';
import './add/operator/debounce';
import './add/operator/debounceTime';
import './add/operator/defaultIfEmpty';
import './add/operator/delay';
import './add/operator/delayWhen';
import './add/operator/distinct';
import './add/operator/distinctUntilChanged';
import './add/operator/distinctUntilKeyChanged';
import './add/operator/do';
import './add/operator/exhaust';
import './add/operator/exhaustMap';
import './add/operator/expand';
import './add/operator/elementAt';
import './add/operator/filter';
import './add/operator/finally';
import './add/operator/find';
import './add/operator/findIndex';
import './add/operator/first';
import './add/operator/groupBy';
import './add/operator/ignoreElements';
import './add/operator/isEmpty';
import './add/operator/audit';
import './add/operator/auditTime';
import './add/operator/last';
import './add/operator/let';
import './add/operator/every';
import './add/operator/map';
import './add/operator/mapTo';
import './add/operator/materialize';
import './add/operator/max';
import './add/operator/merge';
import './add/operator/mergeAll';
import './add/operator/mergeMap';
import './add/operator/mergeMapTo';
import './add/operator/mergeScan';
import './add/operator/min';
import './add/operator/multicast';
import './add/operator/observeOn';
import './add/operator/onErrorResumeNext';
import './add/operator/pairwise';
import './add/operator/partition';
import './add/operator/pluck';
import './add/operator/publish';
import './add/operator/publishBehavior';
import './add/operator/publishReplay';
import './add/operator/publishLast';
import './add/operator/race';
import './add/operator/reduce';
import './add/operator/repeat';
import './add/operator/repeatWhen';
import './add/operator/retry';
import './add/operator/retryWhen';
import './add/operator/sample';
import './add/operator/sampleTime';
import './add/operator/scan';
import './add/operator/sequenceEqual';
import './add/operator/share';
import './add/operator/shareReplay';
import './add/operator/single';
import './add/operator/skip';
import './add/operator/skipLast';
import './add/operator/skipUntil';
import './add/operator/skipWhile';
import './add/operator/startWith';
import './add/operator/subscribeOn';
import './add/operator/switch';
import './add/operator/switchMap';
import './add/operator/switchMapTo';
import './add/operator/take';
import './add/operator/takeLast';
import './add/operator/takeUntil';
import './add/operator/takeWhile';
import './add/operator/throttle';
import './add/operator/throttleTime';
import './add/operator/timeInterval';
import './add/operator/timeout';
import './add/operator/timeoutWith';
import './add/operator/timestamp';
import './add/operator/toArray';
import './add/operator/toPromise';
import './add/operator/window';
import './add/operator/windowCount';
import './add/operator/windowTime';
import './add/operator/windowToggle';
import './add/operator/windowWhen';
import './add/operator/withLatestFrom';
import './add/operator/zip';
import './add/operator/zipAll';
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