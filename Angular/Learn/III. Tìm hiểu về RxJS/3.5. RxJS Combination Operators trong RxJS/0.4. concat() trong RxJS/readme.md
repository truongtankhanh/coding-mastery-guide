## Toán tử concat() trong RxJS

**Khái niệm:**

Toán tử `concat` là một **Combination Operator** trong RxJS dùng để **hợp nhất các Observables** thành một Observable duy nhất.

**Ngữ cảnh:**

Toán tử `concat` thường được sử dụng trong Angular để:

* **Hợp nhất dữ liệu từ nhiều nguồn** thành một Observable duy nhất.
* **Tạo ra một luồng dữ liệu** từ nhiều luồng dữ liệu khác nhau.
* **Xử lý các luồng dữ liệu** theo thứ tự.

**Cách sử dụng:**

Toán tử `concat` nhận một **mảng Observables** làm tham số. Toán tử sẽ phát ra các giá trị từ Observable đầu tiên, sau đó là các giá trị từ Observable thứ hai, v.v.

**Ví dụ:**

```typescript
import { of, concat } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị "a", "b", "c"
const observable2 = of("a", "b", "c");

// Hợp nhất hai Observables thành một Observable duy nhất
const observable = concat(observable1, observable2);

observable.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// a
// b
// c
```

**Lưu ý:**

* Toán tử `concat` sẽ **hoàn tất** khi **tất cả các Observables** trong mảng **hoàn tất**.
* Toán tử `concat` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS concat(): [https://rxjs.dev/api/operators/concat](https://rxjs.dev/api/operators/concat)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `concat` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, concat, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị "a", "b", "c"
const observable2 = of("a", "b", "c");

// Hợp nhất hai Observables thành một Observable duy nhất, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observable = concat(observable1, observable2).pipe(
  map((value) => value * value),
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `concat` để hợp nhất hai Observables thành một Observable duy nhất, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10.

## Kết luận

Toán tử `concat` là một công cụ mạnh mẽ để hợp nhất dữ liệu từ nhiều nguồn thành một Observable duy nhất. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo thứ tự** trong ứng dụng.