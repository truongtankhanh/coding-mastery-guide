## Toán tử retry() trong RxJS

**Khái niệm:**

Toán tử `retry` là một **Error Handling Operator** trong RxJS dùng để **thử lại** phát ra Observable khi xảy ra lỗi.

**Ngữ cảnh:**

Toán tử `retry` thường được sử dụng trong Angular để:

* **Xử lý lỗi** xảy ra trong các tác vụ bất đồng bộ.
* **Tự động thử lại** một tác vụ khi xảy ra lỗi tạm thời.
* **Cung cấp khả năng tự phục hồi** cho các ứng dụng.

**Cách sử dụng:**

Toán tử `retry` nhận một tham số:

* **Số lần thử lại**: Số lần tối đa mà toán tử sẽ thử lại phát ra Observable khi xảy ra lỗi.

Toán tử sẽ **thử lại** phát ra Observable khi xảy ra lỗi. Nếu số lần thử lại vượt quá số lượng được chỉ định, toán tử sẽ **phát ra lỗi**.

**Ví dụ:**

```typescript
import { of, fromEvent, retry } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Observable phát ra lỗi khi giá trị nhập không phải là số
const observableWithRetry = observable.pipe(
  retry(3),
);

observableWithRetry.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// Lỗi: Giá trị nhập không phải là số
// Thử lại...
// Lỗi: Giá trị nhập không phải là số
// Thử lại...
// Lỗi: Giá trị nhập không phải là số
// Lỗi: Thử lại quá nhiều lần
```

**Lưu ý:**

* Toán tử `retry` **không thể** ngăn chặn lỗi xảy ra.
* Toán tử `retry` chỉ có thể **thử lại** phát ra Observable khi xảy ra lỗi.
* Toán tử `retry` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS retry(): [https://rxjs.dev/api/operators/retry](https://rxjs.dev/api/operators/retry)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `retry` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, fromEvent, retry, delay } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Observable phát ra lỗi khi giá trị nhập không phải là số
const observableWithRetry = observable.pipe(
  retry(3),
  delay(1000), // Chờ 1 giây trước khi thử lại
);

observableWithRetry.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// Lỗi: Giá trị nhập không phải là số
// Thử lại sau 1 giây...
// Lỗi: Giá trị nhập không phải là số
// Thử lại sau 1 giây...
// Lỗi: Giá trị nhập không phải là số
// Lỗi: Thử lại quá nhiều lần
```

Trong ví dụ trên, chúng ta sử dụng toán tử `retry` để **thử lại** phát ra Observable 3 lần khi xảy ra lỗi, đồng thời **chờ 1 giây** trước khi thử lại.

## Kết luận

Toán tử `retry` là một công cụ mạnh mẽ để xử lý lỗi xảy ra trong các tác vụ bất đồng bộ, tự động thử lại một tác vụ khi xảy ra lỗi tạm thời và cung cấp khả năng tự phục hồi cho các ứng dụng. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu phức tạp** trong ứng dụng.