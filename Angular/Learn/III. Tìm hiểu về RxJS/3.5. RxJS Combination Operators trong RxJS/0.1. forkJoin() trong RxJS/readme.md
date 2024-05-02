## Toán tử forkJoin() trong RxJS

**Khái niệm:**

Toán tử `forkJoin` là một **Combination Operator** trong RxJS dùng để **hợp nhất các giá trị được phát ra bởi nhiều Observables** thành một mảng duy nhất.

**Ngữ cảnh:**

Toán tử `forkJoin` thường được sử dụng trong Angular để:

* **Hợp nhất dữ liệu từ nhiều nguồn** thành một mảng duy nhất.
* **Chờ cho tất cả các Observables hoàn tất** trước khi phát ra giá trị.
* **Thực hiện các tác vụ bất đồng bộ** song song.

**Cách sử dụng:**

Toán tử `forkJoin` nhận một **mảng Observables** làm tham số. Toán tử sẽ phát ra một mảng duy nhất chứa giá trị được phát ra bởi mỗi Observable trong mảng.

**Ví dụ:**

```typescript
import { of, forkJoin } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị "a", "b", "c"
const observable2 = of("a", "b", "c");

// Hợp nhất giá trị từ hai Observables thành một mảng duy nhất
const observable = forkJoin(observable1, observable2);

observable.subscribe(console.log);

// In ra:
// [1, "a"]
// [2, "b"]
// [3, "c"]
```

**Lưu ý:**

* Toán tử `forkJoin` sẽ **chờ cho tất cả các Observables hoàn tất** trước khi phát ra giá trị.
* Toán tử `forkJoin` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS forkJoin(): [https://rxjs.dev/api/index/function/forkJoin](https://rxjs.dev/api/index/function/forkJoin)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `forkJoin` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, forkJoin, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị "a", "b", "c"
const observable2 = of("a", "b", "c");

// Hợp nhất giá trị từ hai Observables thành một mảng duy nhất, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observable = forkJoin(observable1, observable2).pipe(
  map((values) => values[0] * values[1]),
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `forkJoin` để hợp nhất giá trị từ hai Observables thành một mảng duy nhất, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10.

## Kết luận

Toán tử `forkJoin` là một công cụ mạnh mẽ để hợp nhất dữ liệu từ nhiều nguồn thành một mảng duy nhất. Toán tử này giúp **giảm thiểu mã code** và **tăng hiệu quả** của ứng dụng.
