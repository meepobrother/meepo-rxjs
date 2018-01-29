#rxjs 5.5.6

- install
```sh
yarn add meepo-rxjs
```

- use

```
import { map, Subject } from 'meepo-rxjs';
let sub$ = new Subject();
sub$.pipe(
    map((res)=>({id: res.id}))
)

sub$.subscribe(res=>{
    // 2, 3, 4
    console.log(res);
});

sub$.next({id: 2});
sub$.next({id: 3});
sub$.next({id: 4});
```

> 注意：do是关键字，请使用tap

- 导出
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
export {
    audit, auditTime, buffer, bufferCount, bufferTime,
    bufferToggle, bufferWhen, catchError,
    combineAll, combineLatest, concat,
    concatAll, concatMap, concatMapTo,
    count, debounce, debounceTime,
    defaultIfEmpty, delay, delayWhen,
    dematerialize, distinct,
    distinctUntilChanged, distinctUntilKeyChanged,
    elementAt, every, exhaust, exhaustMap,
    expand, filter, finalize, find,
    findIndex, first, flatMap, groupBy,
    ignoreElements, isEmpty, last,
    map, mapTo, materialize, max, merge, mergeAll,
    mergeMap, mergeMapTo, mergeScan, min, multicast, observeOn,
    onErrorResumeNext, pairwise, partition,
    pluck, publish, publishBehavior,
    publishLast, publishReplay, race,
    reduce, refCount, repeat,
    repeatWhen, retry, retryWhen, sample,
    sampleTime, scan, sequenceEqual, share,
    shareReplay, single, skip, skipLast, skipUntil,
    skipWhile, startWith, switchAll,
    switchMap, switchMapTo, take, takeLast, takeUntil,
    takeWhile, tap, throttle, throttleTime,
    timeInterval, timeout, timeoutWith,
    timestamp, toArray, window, windowCount, windowTime,
    windowToggle, windowWhen, withLatestFrom
} from 'rxjs/operators';
export { zip } from 'rxjs/operators/zip';
export { zipAll } from 'rxjs/operators/zipAll';

// rxjs
export { Observable } from 'rxjs/Observable';
export { Subject } from 'rxjs/Subject';
export { BehaviorSubject } from 'rxjs/BehaviorSubject';
export { ReplaySubject } from 'rxjs/ReplaySubject';
export { Subscription } from 'rxjs/Subscription';
export { Notification } from 'rxjs/Notification';

// scheduler
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

// util


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
