## Sử dụng `throttle` trong Angular

**Khái niệm:**

`throttle` là một toán tử RxJS giúp giới hạn tốc độ phát ra các giá trị từ một Observable. Nó hoạt động bằng cách bỏ qua các giá trị được phát ra trong một khoảng thời gian nhất định sau khi giá trị gần đây nhất được phát ra.

**Ngữ cảnh:**

`throttle` thường được sử dụng trong các trường hợp sau:

- Hạn chế số lượng yêu cầu API được thực hiện trong một khoảng thời gian nhất định.
- Giảm thiểu số lượng sự kiện được xử lý trong một khoảng thời gian nhất định.
- Cải thiện hiệu suất bằng cách tránh xử lý các giá trị không cần thiết.

**Cách sử dụng:**

Để sử dụng `throttle` trong Angular, bạn cần import toán tử `throttle` từ RxJS:

```typescript
import { Observable, throttle } from "rxjs";
```

**Ví dụ:**

**1. Hạn chế số lượng yêu cầu API:**

```typescript
const observable = Observable.ajax("/api/users").pipe(
  throttle(() => Observable.interval(1000))
); // Giới hạn 1 yêu cầu mỗi giây

observable.subscribe((data) => {
  // Xử lý dữ liệu
});
```

**2. Giảm thiểu số lượng sự kiện click:**

```typescript
const button = document.getElementById("button");

const observable = Observable.fromEvent(button, "click").pipe(
  throttle(() => Observable.interval(500))
); // Giới hạn 2 sự kiện click mỗi giây

observable.subscribe(() => {
  // Xử lý sự kiện click
});
```

**Tham số:**

`throttle` nhận một tham số là một Observable, được gọi là `durationSelector`. `durationSelector` được sử dụng để xác định khoảng thời gian mà các giá trị sẽ bị bỏ qua.

**Ví dụ:**

- `throttle(() => Observable.interval(1000))`: Bỏ qua các giá trị được phát ra trong 1 giây sau khi giá trị gần đây nhất được phát ra.
- `throttle(() => Observable.fromEvent(document, 'mousemove'))`: Bỏ qua các giá trị được phát ra khi chuột di chuyển trong 100 mili giây.

**Lợi ích:**

- Giảm thiểu tải trên hệ thống
- Cải thiện hiệu suất ứng dụng
- Tránh xử lý các giá trị không cần thiết

**Hạn chế:**

- Có thể gây ra độ trễ trong việc xử lý dữ liệu
- Có thể không phù hợp với tất cả các trường hợp

**Kết luận:**

`throttle` là một toán tử RxJS hữu ích để giới hạn tốc độ phát ra các giá trị từ một Observable. Tuy nhiên, bạn cần sử dụng nó một cách cẩn thận để tránh gặp vấn đề về độ trễ.

**Tài liệu tham khảo:**

- RxJS documentation on throttle: [https://rxjs.dev/api/operators/throttle](https://rxjs.dev/api/operators/throttle)

**Lưu ý:**

- Có nhiều toán tử RxJS khác có chức năng tương tự như `throttle`, ví dụ như `debounceTime`, `sampleTime`.
- Bạn nên chọn toán tử phù hợp nhất với nhu cầu của mình.
