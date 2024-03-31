## Hàm timer() trong RxJS

**Khái niệm:**

Hàm `timer()` là một **Creation Operator** trong RxJS dùng để tạo một Observable phát ra giá trị sau một khoảng thời gian nhất định.

**Ngữ cảnh:**

Hàm `timer()` thường được sử dụng trong Angular để:

- Gọi một hàm sau một khoảng thời gian nhất định.
- Hiển thị thông báo sau một khoảng thời gian nhất định.
- Thực hiện các tác vụ chỉ sau một lần.

**Cách sử dụng:**

Hàm `timer()` nhận hai tham số:

- **dueTime:** Khoảng thời gian (tính bằng mili giây) trước khi phát ra giá trị.
- **scheduler:** (Tùy chọn) Scheduler được sử dụng để điều chỉnh thời gian.

Hàm `timer()` trả về một Observable. Observable này sẽ phát ra một giá trị duy nhất sau khoảng thời gian được chỉ định. Observable này sẽ hoàn thành sau khi phát ra giá trị.

**Ví dụ:**

```typescript
import { timer } from "rxjs";

// Hiển thị thông báo sau 3 giây
const observable = timer(3000);

observable.subscribe(() => {
  console.log("Thông báo!");
});

// Gọi hàm sau 5 giây
const observable = timer(5000);

observable.subscribe(() => {
  // Gọi hàm
  myFunction();
});
```

**Lưu ý:**

- Hàm `timer()` chỉ phát ra một giá trị duy nhất.
- Sau khi phát ra giá trị, Observable sẽ hoàn thành.
- Bạn nên unsubscribe khỏi Observable sau khi nó hoàn thành để tránh rò rỉ bộ nhớ.

**Tài liệu tham khảo:**

- RxJS timer(): [https://rxjs.dev/api/index/function/timer](https://rxjs.dev/api/index/function/timer)

## Ví dụ nâng cao

Hàm `timer()` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { timer, repeat } from "rxjs";

// Observable phát ra giá trị sau mỗi 2 giây, lặp lại 5 lần
const observable = timer(2000).pipe(repeat(5));

observable.subscribe(console.log); // In ra: 0, 1, 2, 3, 4
```

Trong ví dụ trên, chúng ta sử dụng toán tử `repeat()` để lặp lại việc phát ra giá trị 5 lần.

## Kết luận

Hàm `timer()` là một Creation Operator đơn giản nhưng mạnh mẽ có thể được sử dụng để thực hiện các tác vụ sau một khoảng thời gian nhất định. Hàm này có thể được sử dụng để tạo các luồng dữ liệu đơn giản hoặc phức tạp tùy thuộc vào nhu cầu của bạn.
