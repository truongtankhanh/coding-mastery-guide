## Toán tử combineLatest() trong RxJS

**Khái niệm:**

Toán tử `combineLatest` là một **Combination Operator** trong RxJS dùng để **hợp nhất các giá trị mới nhất được phát ra bởi nhiều Observables** thành một mảng duy nhất.

**Ngữ cảnh:**

Toán tử `combineLatest` thường được sử dụng trong Angular để:

* **Hợp nhất dữ liệu từ nhiều nguồn** thành một mảng duy nhất **liên tục**.
* **Cập nhật giao diện người dùng** dựa trên giá trị mới nhất của nhiều Observables.
* **Thực hiện các tác vụ bất đồng bộ** song song.

**Cách sử dụng:**

Toán tử `combineLatest` nhận một **mảng Observables** làm tham số. Toán tử sẽ phát ra một mảng duy nhất chứa giá trị mới nhất được phát ra bởi mỗi Observable trong mảng.

**Ví dụ:**

```typescript
import { of, combineLatest } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị "a", "b", "c"
const observable2 = of("a", "b", "c");

// Hợp nhất giá trị mới nhất từ hai Observables thành một mảng duy nhất liên tục
const observable = combineLatest(observable1, observable2);

observable.subscribe(console.log);

// In ra:
// [1, "a"]
// [2, "a"]
// [2, "b"]
// [3, "b"]
// [3, "c"]
```

**Lưu ý:**

* Toán tử `combineLatest` sẽ **phát ra một giá trị mới mỗi khi có một giá trị mới được phát ra bởi bất kỳ Observable nào** trong mảng.
* Toán tử `combineLatest` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS combineLatest(): [https://rxjs.dev/api/index/function/combineLatest](https://rxjs.dev/api/index/function/combineLatest)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `combineLatest` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, combineLatest, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị "a", "b", "c"
const observable2 = of("a", "b", "c");

// Hợp nhất giá trị mới nhất từ hai Observables thành một mảng duy nhất, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observable = combineLatest(observable1, observable2).pipe(
  map((values) => values[0] * values[1]),
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `combineLatest` để hợp nhất giá trị mới nhất từ hai Observables thành một mảng duy nhất, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10.

## Kết luận

Toán tử `combineLatest` là một công cụ mạnh mẽ để hợp nhất dữ liệu từ nhiều nguồn thành một mảng duy nhất liên tục. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **cải thiện trải nghiệm người dùng** của ứng dụng.
