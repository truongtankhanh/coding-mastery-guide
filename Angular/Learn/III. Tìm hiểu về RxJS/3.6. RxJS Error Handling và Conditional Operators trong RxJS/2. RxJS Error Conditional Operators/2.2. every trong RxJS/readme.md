## Toán tử every() trong RxJS

**Khái niệm:**

Toán tử `every` là một **Error Conditional Operator** trong RxJS dùng để **kiểm tra xem tất cả các giá trị từ Observable có thỏa mãn một điều kiện hay không**.

**Ngữ cảnh:**

Toán tử `every` thường được sử dụng trong Angular để:

* **Xác thực dữ liệu nhập**
* **Kiểm tra tính hợp lệ của một tập dữ liệu**
* **Lọc các giá trị không thỏa mãn điều kiện**

**Cách sử dụng:**

Toán tử `every` nhận một tham số:

* **Hàm điều kiện**: Hàm này nhận giá trị được phát ra từ Observable làm tham số và trả về `true` nếu giá trị thỏa mãn điều kiện, `false` nếu không.

Toán tử sẽ **phát ra `true`** nếu tất cả các giá trị từ Observable thỏa mãn điều kiện được truyền vào. Nếu có bất kỳ giá trị nào không thỏa mãn điều kiện, toán tử sẽ **phát ra `false`**.

**Ví dụ:**

```typescript
import { of, every } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Kiểm tra xem tất cả các giá trị đều lớn hơn 0
const observableWithEvery = observable.pipe(
  every((value) => value > 0),
);

observableWithEvery.subscribe(console.log);

// In ra:
// true
```

**Lưu ý:**

* Toán tử `every` chỉ **phát ra `true` hoặc `false`** sau khi Observable hoàn tất.
* Toán tử `every` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS every(): [https://rxjs.dev/api/operators/every](https://rxjs.dev/api/operators/every)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `every` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, every, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Kiểm tra xem tất cả các giá trị đều lớn hơn 0, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observableWithEvery = observable.pipe(
  every((value) => value > 0),
  map((value) => value * value),
  filter((value) => value > 10),
);

observableWithEvery.subscribe(console.log);

// In ra:
// 16
```

**Kết luận:**

Toán tử `every` là một công cụ mạnh mẽ để kiểm tra xem tất cả các giá trị từ Observable có thỏa mãn một điều kiện hay không. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu phức tạp** trong ứng dụng.