## Toán tử defaultIfEmpty/throwIfEmpty trong RxJS

**Khái niệm:**

* **defaultIfEmpty**: Toán tử `defaultIfEmpty` là một **Error Conditional Operator** trong RxJS dùng để **phát ra một giá trị mặc định** nếu Observable không phát ra bất kỳ giá trị nào.
* **throwIfEmpty**: Toán tử `throwIfEmpty` là một **Error Conditional Operator** trong RxJS dùng để **phát ra lỗi** nếu Observable không phát ra bất kỳ giá trị nào.

**Ngữ cảnh:**

* **defaultIfEmpty**: Toán tử `defaultIfEmpty` thường được sử dụng trong Angular để:
    * Hiển thị giá trị mặc định khi dữ liệu không được tải.
    * Cung cấp giá trị mặc định cho các thuộc tính trong các thành phần.
    * Tránh lỗi null hoặc undefined.
* **throwIfEmpty**: Toán tử `throwIfEmpty` thường được sử dụng trong Angular để:
    * Xử lý trường hợp dữ liệu không được tải.
    * Hiển thị thông báo lỗi cho người dùng khi dữ liệu không được tìm thấy.
    * Chuyển hướng người dùng đến một trang khác khi dữ liệu không được tìm thấy.

**Cách sử dụng:**

* **defaultIfEmpty**: Toán tử `defaultIfEmpty` nhận một tham số:
    * **Giá trị mặc định**: Giá trị được phát ra nếu Observable không phát ra bất kỳ giá trị nào.

Toán tử sẽ **phát ra tất cả các giá trị từ Observable**. Nếu Observable không phát ra bất kỳ giá trị nào, toán tử sẽ **phát ra giá trị mặc định**.

* **throwIfEmpty**: Toán tử `throwIfEmpty` không nhận tham số.

Toán tử sẽ **phát ra tất cả các giá trị từ Observable**. Nếu Observable không phát ra bất kỳ giá trị nào, toán tử sẽ **phát ra lỗi**.

**Ví dụ:**

**defaultIfEmpty:**

```typescript
import { of, defaultIfEmpty } from 'rxjs';

// Observable không phát ra bất kỳ giá trị nào
const observable = of();

// Phát ra giá trị mặc định "No data" nếu Observable không phát ra bất kỳ giá trị nào
const observableWithDefaultIfEmpty = observable.pipe(
  defaultIfEmpty('No data'),
);

observableWithDefaultIfEmpty.subscribe(console.log);

// In ra:
// No data
```

**throwIfEmpty:**

```typescript
import { of, throwIfEmpty } from 'rxjs';

// Observable không phát ra bất kỳ giá trị nào
const observable = of();

// Phát ra lỗi nếu Observable không phát ra bất kỳ giá trị nào
const observableWithThrowIfEmpty = observable.pipe(
  throwIfEmpty(),
);

observableWithThrowIfEmpty.subscribe(
  console.log,
  (error) => console.log('Lỗi:', error.message),
);

// In ra:
// Lỗi: Observable không phát ra bất kỳ giá trị nào
```

**Lưu ý:**

* Toán tử `defaultIfEmpty` và `throwIfEmpty` chỉ **phát ra giá trị hoặc lỗi** sau khi Observable hoàn tất.
* Toán tử `defaultIfEmpty` và `throwIfEmpty` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS defaultIfEmpty(): [https://rxjs.dev/api/operators/defaultIfEmpty](https://rxjs.dev/api/operators/defaultIfEmpty)
* RxJS throwIfEmpty(): [https://rxjs.dev/api/operators/throwIfEmpty](https://rxjs.dev/api/operators/throwIfEmpty)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `defaultIfEmpty` và `throwIfEmpty` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, defaultIfEmpty, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Phát ra giá trị mặc định "No data" nếu Observable không phát ra bất kỳ giá trị nào, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observableWithDefaultIfEmpty = observable.pipe(
  defaultIfEmpty('No data'),
  map((value) => value * value),
  