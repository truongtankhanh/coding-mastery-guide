## BehaviorSubject trong RxJS

**Khái niệm:**

BehaviorSubject là một **biến thể đặc biệt của Subject** trong RxJS có khả năng lưu trữ giá trị mới nhất được phát ra và phát ra giá trị đó cho các subscriber mới.

**Ngữ cảnh:**

BehaviorSubject thường được sử dụng trong Angular để:

- **Chia sẻ dữ liệu giữa các component**
- **Cung cấp giá trị khởi tạo cho các subscriber mới**
- **Tạo các luồng dữ liệu động**
- **Cải thiện hiệu suất bằng cách tránh thực thi nhiều lần cùng một Observable**

**Cách sử dụng:**

1. **Tạo một BehaviorSubject mới:**

```typescript
import { BehaviorSubject } from "rxjs";

const behaviorSubject = new BehaviorSubject(0); // Giá trị khởi tạo là 0
```

2. **Gửi dữ liệu vào BehaviorSubject:**

```typescript
behaviorSubject.next(1);
behaviorSubject.next(2);
behaviorSubject.next(3);
```

3. **Subscribe vào BehaviorSubject:**

```typescript
behaviorSubject.subscribe(console.log);

// In ra:
// 0 // Giá trị khởi tạo
// 1
// 2
// 3
```

**Lưu ý:**

- BehaviorSubject là một Observable **hot**, nghĩa là nó bắt đầu phát ra dữ liệu ngay khi được tạo và phát ra giá trị khởi tạo cho các subscriber mới.
- BehaviorSubject có thể **giảm thiểu mã code** so với Subject khi bạn cần truy cập giá trị mới nhất.

**Ví dụ nâng cao:**

```typescript
import { BehaviorSubject, of } from "rxjs";
import { delay } from "rxjs/operators";

const behaviorSubject = new BehaviorSubject(0);

// Observable phát ra giá trị sau 2 giây
const observable = of(1).pipe(delay(2000));

// Subscribe vào Observable và cập nhật BehaviorSubject
observable.subscribe((value) => behaviorSubject.next(value));

// Subscribe vào BehaviorSubject để nhận dữ liệu, bao gồm cả giá trị khởi tạo
behaviorSubject.subscribe(console.log);

// In ra:
// 0 // Giá trị khởi tạo
// 1 // Giá trị từ Observable sau 2 giây
```

**Kết luận:**

BehaviorSubject là một công cụ mạnh mẽ để chia sẻ dữ liệu, cung cấp giá trị khởi tạo và cải thiện hiệu suất trong Angular. Hiểu rõ cách sử dụng BehaviorSubject có thể giúp bạn viết code hiệu quả và dễ bảo trì hơn.

**Ngoài ra:**

- **Subject**: Loại Subject cơ bản không lưu trữ giá trị mới nhất.
- **ReplaySubject**: Subject đặc biệt có thể lưu trữ một số giá trị cuối cùng và phát lại cho các subscriber mới.
- **AsyncSubject**: Subject đặc biệt chỉ phát ra giá trị cuối cùng được phát ra và hoàn tất.
