## `share` trong RxJS

**Khái niệm:**

`share` là một toán tử trong RxJS giúp **biến đổi Observable thành một Observable multicast** và **tự động hủy đăng ký** khi không còn subscriber nào. Observable multicast là Observable chỉ thực thi một lần và phát ra giá trị cho tất cả các subscriber.

**Ngữ cảnh:**

`share` thường được sử dụng trong Angular để:

- **Cải thiện hiệu suất** bằng cách tránh thực thi nhiều lần cùng một Observable
- **Chia sẻ dữ liệu giữa các component**
- **Tạo các luồng dữ liệu động**
- **Giải phóng tài nguyên** khi không còn subscriber nào sử dụng Observable

**Cách sử dụng:**

Sử dụng toán tử `share` rất đơn giản:

```typescript
import { Observable, of, share } from "rxjs";

const observable = of(1, 2, 3).pipe(share());

// Subscribe vào Observable
observable.subscribe(console.log);

// Subscribe vào Observable một lần nữa
observable.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// 1
// 2
// 3
```

**Lưu ý:**

- `share` chỉ hoạt động với **Observable "cold"**. Observable "cold" là Observable không thực thi cho đến khi có subscriber subscribe.
- `share` là một tiện ích kết hợp `publish` và `refCount`.

**Ví dụ nâng cao:**

```typescript
import { Observable, interval, share, take } from "rxjs";

const observable = interval(1000).pipe(share());

// Subscribe vào Observable và nhận dữ liệu trong 5 giây
observable.pipe(take(5)).subscribe(console.log);

// Subscribe vào Observable một lần nữa sau 3 giây
setTimeout(() => {
  observable.subscribe(console.log);
}, 3000);

// In ra:
// 0
// 1
// 2
// 3
// 4
// 3 // Giá trị mới nhất được phát ra từ Observable thứ hai
// 4
// 5
```

**Kết luận:**

`share` là một toán tử mạnh mẽ để biến đổi Observable thành Observable multicast và tự động hủy đăng ký khi không còn subscriber nào, giúp cải thiện hiệu suất, chia sẻ dữ liệu, tạo các luồng dữ liệu động và giải phóng tài nguyên trong Angular. Hiểu rõ cách sử dụng `share` có thể giúp bạn viết code hiệu quả và dễ bảo trì hơn.

**Ngoài ra:**

- **Subject**: Loại Subject đặc biệt có thể multicast luồng dữ liệu.
- **BehaviorSubject**: Subject đặc biệt lưu trữ giá trị mới nhất và phát ra cho các subscriber mới.
- **ReplaySubject**: Subject đặc biệt lưu trữ một số giá trị cuối cùng và phát lại cho các subscriber mới.
- **AsyncSubject**: Subject đặc biệt chỉ phát ra giá trị cuối cùng được phát ra và chỉ khi Observable hoàn tất.
