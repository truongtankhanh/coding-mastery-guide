## Toán tử race() trong RxJS

**Khái niệm:**

Toán tử `race` là một **Combination Operator** trong RxJS dùng để **lấy giá trị đầu tiên được phát ra bởi một trong nhiều Observables**.

**Ngữ cảnh:**

Toán tử `race` thường được sử dụng trong Angular để:

* **Lấy giá trị đầu tiên** được trả về từ một API bất đồng bộ.
* **Hủy các tác vụ bất đồng bộ** không cần thiết.
* **Tạo ra một luồng dữ liệu** từ nhiều luồng dữ liệu khác nhau, **lấy giá trị đầu tiên** được phát ra.

**Cách sử dụng:**

Toán tử `race` nhận một **mảng Observables** làm tham số. Toán tử sẽ phát ra giá trị đầu tiên được phát ra bởi bất kỳ Observable nào trong mảng và **hoàn tất** ngay lập tức.

**Ví dụ:**

```typescript
import { of, race } from 'rxjs';

// Observable phát ra giá trị 1 sau 2 giây
const observable1 = of(1).pipe(delay(2000));

// Observable phát ra giá trị "a" sau 1 giây
const observable2 = of("a").pipe(delay(1000));

// Lấy giá trị đầu tiên được phát ra bởi hai Observables
const observable = race(observable1, observable2);

observable.subscribe(console.log);

// In ra:
// a
```

**Lưu ý:**

* Toán tử `race` sẽ **hoàn tất** ngay khi **giá trị đầu tiên** được phát ra.
* Toán tử `race` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS race(): [https://rxjs.dev/api/operators/race](https://rxjs.dev/api/operators/race)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `race` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, race, map, filter } from 'rxjs';

// Observable phát ra giá trị 1 sau 2 giây
const observable1 = of(1).pipe(delay(2000));

// Observable phát ra giá trị "a" sau 1 giây
const observable2 = of("a").pipe(delay(1000));

// Lấy giá trị đầu tiên được phát ra bởi hai Observables, sau đó lấy bình phương của giá trị và chỉ lấy giá trị lớn hơn 10
const observable = race(observable1, observable2).pipe(
  map((value) => value * value),
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `race` để lấy giá trị đầu tiên được phát ra bởi hai Observables, sau đó lấy bình phương của giá trị và chỉ lấy giá trị lớn hơn 10.

## Kết luận

Toán tử `race` là một công cụ mạnh mẽ để lấy giá trị đầu tiên được phát ra bởi một trong nhiều Observables. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu bất đồng bộ** trong ứng dụng.