## Hoàn tất Subject trong RxJS

**Khái niệm:**

Hoàn tất Subject là hành động **kết thúc luồng dữ liệu** của Subject trong RxJS. Khi một Subject được hoàn tất, nó sẽ không phát ra thêm bất kỳ giá trị nào nữa.

**Ngữ cảnh:**

Hoàn tất Subject thường được sử dụng trong Angular để:

- **Chỉ ra rằng luồng dữ liệu đã kết thúc**
- **Giải phóng tài nguyên**
- **Ngăn chặn các subscriber nhận dữ liệu không mong muốn**

**Cách sử dụng:**

Có hai cách để hoàn tất Subject:

1. **Gọi phương thức `complete()`:**

```typescript
import { Subject } from "rxjs";

const subject = new Subject();

// Gửi dữ liệu vào Subject
subject.next(1);
subject.next(2);
subject.next(3);

// Hoàn tất Subject
subject.complete();
```

2. **Gọi phương thức `error()`:**

```typescript
import { Subject } from "rxjs";

const subject = new Subject();

// Gửi dữ liệu vào Subject
subject.next(1);
subject.next(2);
subject.next(3);

// Gây lỗi và hoàn tất Subject
subject.error("Lỗi");
```

**Lưu ý:**

- Khi một Subject được hoàn tất, nó sẽ không thể phát ra thêm bất kỳ giá trị nào nữa, kể cả giá trị lỗi.
- Việc hoàn tất Subject sẽ **giải phóng tài nguyên** được sử dụng bởi Subject.

**Ví dụ nâng cao:**

```typescript
import { Subject, of, interval } from "rxjs";
import { take } from "rxjs/operators";

const subject = new Subject();

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị mỗi 1 giây
const observable2 = interval(1000);

// Subscribe vào Observable1 và cập nhật Subject
observable1.subscribe((value) => subject.next(value));

// Subscribe vào Observable2 và hoàn tất Subject sau 5 giây
observable2.pipe(take(5)).subscribe(() => subject.complete());

// Subscribe vào Subject để nhận dữ liệu
subject.subscribe(console.log);

// In ra:
// 1
// 2
// 3
```

**Kết luận:**

Hoàn tất Subject là một kỹ thuật quan trọng để quản lý luồng dữ liệu trong RxJS. Hiểu rõ cách sử dụng Subject Completion có thể giúp bạn viết code hiệu quả và dễ bảo trì hơn.

**Ngoài ra:**

- **Subject**: Loại Subject cơ bản phát ra tất cả giá trị được phát ra.
- **BehaviorSubject**: Subject đặc biệt lưu trữ giá trị mới nhất và phát ra cho các subscriber mới.
- **ReplaySubject**: Subject đặc biệt lưu trữ một số giá trị cuối cùng và phát lại cho các subscriber mới.
- **AsyncSubject**: Subject đặc biệt chỉ phát ra giá trị cuối cùng được phát ra và chỉ khi Observable hoàn tất.
