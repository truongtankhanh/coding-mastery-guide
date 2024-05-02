## Toán tử delay() và delayWhen() trong RxJS

**Khái niệm:**

- **Toán tử `delay`:** Dùng để **trì hoãn** việc phát ra các giá trị từ Observable trong một khoảng thời gian nhất định.
- **Toán tử `delayWhen`:** Dùng để **trì hoãn** việc phát ra các giá trị từ Observable dựa trên một Observable khác.

**Ngữ cảnh:**

- **Toán tử `delay`:** Thường được sử dụng để:
  - **Tạo hiệu ứng loading**
  - **Giảm thiểu số lượng request**
  - **Hẹn giờ**
- **Toán tử `delayWhen`:** Thường được sử dụng để:
  - **Trì hoãn việc phát ra các giá trị** dựa trên một điều kiện
  - **Đồng bộ hóa các luồng dữ liệu**

**Cách sử dụng:**

**Toán tử `delay`:**

- Nhận một tham số:
  - `delay`: Khoảng thời gian trì hoãn (mili giây)

**Ví dụ:**

```typescript
import { of, delay } from "rxjs";

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Trì hoãn việc phát ra các giá trị trong 2 giây
observable1.pipe(delay(2000)).subscribe(console.log);

// In ra sau 2 giây:
// 1
// 2
// 3
```

**Toán tử `delayWhen`:**

- Nhận một tham số:
  - `delayDurationSelector`: Hàm này nhận giá trị được phát ra từ Observable đầu tiên làm tham số và trả về một Observable. Observable này sẽ được sử dụng để xác định thời gian trì hoãn.

**Ví dụ:**

```typescript
import { of, delayWhen, map } from "rxjs";

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Trì hoãn việc phát ra các giá trị dựa trên giá trị
observable1.pipe(delayWhen((value) => of(value * 1000))).subscribe(console.log);

// In ra sau 1, 2, 3 giây:
// 1
// 2
// 3
```

**Lưu ý:**

- Toán tử `delay` **không** thay đổi giá trị được phát ra từ Observable.
- Toán tử `delayWhen` có thể được sử dụng để **trì hoãn** việc phát ra các giá trị **theo cách linh hoạt**.
- Cả hai toán tử `delay` và `delayWhen` đều có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

- RxJS delay: [https://rxjs.dev/api/operators/delay](https://rxjs.dev/api/operators/delay)
- RxJS delayWhen: [https://rxjs.dev/api/operators/delayWhen](https://rxjs.dev/api/operators/delayWhen)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `delay` và `delayWhen` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ:**

```typescript
import { of, delay, delayWhen, map, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Trì hoãn việc phát ra các giá trị trong 2 giây, sau đó lấy bình phương của các giá trị chẵn và chỉ lấy các giá trị lớn hơn 10
observable1
  .pipe(
    delay(2000),
    map((value) => value * value),
    filter((value) => value > 10)
  )
  .subscribe(console.log);

// In ra sau 2 giây:
// 16
// 36
```

## Kết luận

Toán tử `delay` và `delayWhen` là hai Utility Operators mạnh mẽ để trì hoãn việc phát ra các giá trị từ Observable trong Angular. Các toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.

## Lựa chọn toán tử nào sử dụng:

- **Sử dụng `delay`:** Khi bạn muốn **trì hoãn** việc phát ra các giá trị từ Observable trong một khoảng thời gian nhất định.
- **Sử dụng `delayWhen`:** Khi bạn muốn **trì hoãn** việc phát ra các giá trị dựa trên một điều kiện hoặc một Observable khác.

**Lưu ý:**

- Cả hai toán tử `delay` và `delayWhen` đều **không** thay đổi giá trị được phát ra từ Observable.
- Cả hai toán tử này có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ thực tế:**

- **Hiệu ứng loading:** Sử dụng `delay` để hiển thị spinner trong 2 giây trước khi hiển thị dữ liệu.
- **Giảm thiểu số lượng request:** Sử dụng `delay` để giới hạn số lượng request gửi đến server trong một khoảng thời gian nhất định.
- **Hẹn giờ:** Sử dụng `delay` để thực hiện một hành động sau một khoảng thời gian nhất định.
- **Đồng bộ hóa các luồng dữ liệu:** Sử dụng `delayWhen` để đảm bảo rằng các luồng dữ liệu được phát ra theo đúng thứ tự.

**Kết luận:**

Toán tử `delay` và `delayWhen` là hai công cụ mạnh mẽ để thao tác với thời gian trong RxJS. Việc lựa chọn toán tử nào sử dụng phụ thuộc vào ngữ cảnh và yêu cầu cụ thể của ứng dụng.
