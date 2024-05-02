## Toán tử tap() trong RxJS

**Khái niệm:**

Toán tử `tap` là một **Utility Operator** trong RxJS dùng để **thực hiện các hiệu ứng phụ** cho các giá trị được phát ra từ Observable.

**Ngữ cảnh:**

Toán tử `tap` thường được sử dụng trong Angular để:

* **In ra các giá trị được phát ra từ Observable**
* **Thực hiện các thao tác với các giá trị trước khi phát ra**
* **Kiểm tra lỗi**

**Cách sử dụng:**

Toán tử `tap` nhận một tham số:

* **Callback function**: Hàm này nhận giá trị được phát ra từ Observable đầu tiên làm tham số và có thể thực hiện bất kỳ thao tác nào với giá trị đó.

Toán tử `tap` **không** thay đổi giá trị được phát ra từ Observable. Nó chỉ thực hiện các hiệu ứng phụ được xác định trong callback function.

**Ví dụ:**

```typescript
import { of, tap } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable1 = of(1, 2, 3, 4, 5);

// In ra các giá trị được phát ra từ Observable
observable1.pipe(
  tap((value) => console.log(`Giá trị được phát ra: ${value}`)),
).subscribe();

// In ra:
// Giá trị được phát ra: 1
// Giá trị được phát ra: 2
// Giá trị được phát ra: 3
// Giá trị được phát ra: 4
// Giá trị được phát ra: 5
```

**Lưu ý:**

* Toán tử `tap` có thể được sử dụng để thực hiện bất kỳ thao tác nào với các giá trị được phát ra từ Observable.
* Toán tử `tap` **không** thay đổi giá trị được phát ra từ Observable.
* Toán tử `tap` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS tap: [https://rxjs.dev/api/operators/tap](https://rxjs.dev/api/operators/tap)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `tap` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ:**

```typescript
import { of, tap, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable1 = of(1, 2, 3, 4, 5);

// In ra các giá trị được phát ra từ Observable, sau đó lấy bình phương của các giá trị chẵn và chỉ lấy các giá trị lớn hơn 10
observable1.pipe(
  tap((value) => console.log(`Giá trị được phát ra: ${value}`)),
  map((value) => value * value),
  filter((value) => value > 10),
).subscribe();

// In ra:
// Giá trị được phát ra: 1
// Giá trị được phát ra: 2
// Giá trị được phát ra: 3
// Giá trị được phát ra: 4
// Giá trị được phát ra: 5
// 16
// 36
```

## Kết luận

Toán tử `tap` là một Utility Operator mạnh mẽ để thực hiện các hiệu ứng phụ cho các giá trị được phát ra từ Observable trong Angular. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.

**Lựa chọn toán tử nào sử dụng:**

* Sử dụng `tap` khi bạn muốn **thực hiện các hiệu ứng phụ** cho các giá trị được phát ra từ Observable.

**Lưu ý:**

* Toán tử `tap` **không** thay đổi giá trị được phát ra từ Observable.
* Toán tử `tap` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.
