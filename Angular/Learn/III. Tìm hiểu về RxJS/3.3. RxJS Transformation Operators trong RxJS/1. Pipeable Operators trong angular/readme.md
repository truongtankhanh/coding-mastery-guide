## Pipeable Operators trong Angular

**Khái niệm:**

**Pipeable Operators** là các **hàm** được sử dụng để **chuyển đổi** và **bổ sung chức năng** cho Observable trong RxJS. Các toán tử này có thể được **liên kết** với nhau (pipe) để tạo ra các luồng dữ liệu phức tạp.

**Ngữ cảnh:**

Pipeable Operators được sử dụng trong Angular để:

- **Lọc** dữ liệu từ Observable.
- **Chuyển đổi** dữ liệu từ Observable.
- **Kết hợp** nhiều Observable.
- **Xử lý** lỗi trong Observable.
- **Hủy đăng ký** khỏi Observable.

**Cách sử dụng:**

Pipeable Operators được sử dụng bằng cách **liên kết** với Observable sử dụng **toán tử pipe** (`|`). Ví dụ:

```typescript
import { of, map, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lọc các giá trị chẵn
const filteredObservable = observable.pipe(filter((value) => value % 2 === 0));

// Chuyển đổi các giá trị còn lại sang chuỗi
const mappedObservable = filteredObservable.pipe(
  map((value) => value.toString())
);

mappedObservable.subscribe(console.log); // In ra: "2", "4"
```

Trong ví dụ trên, chúng ta sử dụng hai toán tử:

- `filter`: Lọc các giá trị chẵn.
- `map`: Chuyển đổi các giá trị còn lại sang chuỗi.

**Danh sách các Pipeable Operators:**

RxJS cung cấp nhiều Pipeable Operators để thực hiện các chức năng khác nhau. Một số ví dụ:

- **Lọc:** `filter`, `take`, `skip`, `debounceTime`, `throttleTime`
- **Chuyển đổi:** `map`, `pluck`, `switchMap`, `concatMap`, `mergeMap`
- **Kết hợp:** `merge`, `combineLatest`, `forkJoin`
- **Xử lý lỗi:** `catchError`, `retry`, `retryWhen`
- **Hủy đăng ký:** `unsubscribeOn`, `finalize`

**Tài liệu tham khảo:**

- RxJS Pipeable Operators: [https://rxjs.dev/guide/operators](https://rxjs.dev/guide/operators)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Pipeable Operators có thể được **liên kết** với nhau để tạo ra các luồng dữ liệu phức tạp. Ví dụ:

```typescript
import { of, interval, map, filter, merge } from "rxjs";

// Observable phát ra giá trị "Hello" sau 1 giây
const helloObservable = timer(1000).pipe(map(() => "Hello"));

// Observable phát ra giá trị "World" sau 2 giây
const worldObservable = timer(2000).pipe(map(() => "World"));

// Kết hợp hai Observable
const mergedObservable = helloObservable.pipe(merge(worldObservable));

mergedObservable.subscribe(console.log); // In ra: "Hello", "World"
```

Trong ví dụ trên, chúng ta sử dụng toán tử `merge` để kết hợp hai Observable.

## Kết luận

Pipeable Operators là một công cụ mạnh mẽ để **chuyển đổi** và **bổ sung chức năng** cho Observable trong RxJS. Các toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.
