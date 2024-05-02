## Toán tử merge() trong RxJS

**Khái niệm:**

Toán tử `merge` là một **Combination Operator** trong RxJS dùng để **hợp nhất các giá trị được phát ra bởi nhiều Observables** thành một Observable duy nhất **bất đồng bộ**.

**Ngữ cảnh:**

Toán tử `merge` thường được sử dụng trong Angular để:

* **Hợp nhất dữ liệu từ nhiều nguồn** thành một Observable duy nhất **bất đồng bộ**.
* **Tạo ra một luồng dữ liệu** từ nhiều luồng dữ liệu khác nhau **bất đồng bộ**.
* **Xử lý các luồng dữ liệu** **song song**.

**Cách sử dụng:**

Toán tử `merge` nhận một **mảng Observables** làm tham số. Toán tử sẽ phát ra các giá trị từ tất cả các Observables trong mảng **bất đồng bộ**, không theo thứ tự cụ thể.

**Ví dụ:**

```typescript
import { of, merge } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị "a", "b", "c"
const observable2 = of("a", "b", "c");

// Hợp nhất hai Observables thành một Observable duy nhất
const observable = merge(observable1, observable2);

observable.subscribe(console.log);

// In ra:
// 1
// a
// 2
// b
// 3
// c
```

**Lưu ý:**

* Toán tử `merge` sẽ **hoàn tất** khi **tất cả các Observables** trong mảng **hoàn tất**.
* Toán tử `merge` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS merge(): [https://rxjs.dev/api/operators/merge](https://rxjs.dev/api/operators/merge)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `merge` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, merge, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị "a", "b", "c"
const observable2 = of("a", "b", "c");

// Hợp nhất hai Observables thành một Observable duy nhất, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observable = merge(observable1, observable2).pipe(
  map((value) => value * value),
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `merge` để hợp nhất hai Observables thành một Observable duy nhất, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10.

## Kết luận

Toán tử `merge` là một công cụ mạnh mẽ để hợp nhất dữ liệu từ nhiều nguồn thành một Observable duy nhất **bất đồng bộ**. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu song song** trong ứng dụng.
