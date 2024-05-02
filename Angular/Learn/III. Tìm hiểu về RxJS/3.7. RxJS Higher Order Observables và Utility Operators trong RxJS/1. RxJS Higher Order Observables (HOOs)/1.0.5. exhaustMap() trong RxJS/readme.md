## Toán tử exhaustMap() trong RxJS

**Khái niệm:**

Toán tử `exhaustMap` là một **Higher Order Observable (HOO)** trong RxJS dùng để **phát ra các giá trị từ Observable mới nhất** được **phát ra từ Observable đầu tiên**.

**Ngữ cảnh:**

Toán tử `exhaustMap` thường được sử dụng trong Angular để:

* **Xử lý các luồng dữ liệu liên tục**
* **Chỉ xử lý một luồng dữ liệu tại một thời điểm**
* **Hủy các luồng dữ liệu cũ khi luồng dữ liệu mới được phát ra**

**Cách sử dụng:**

Toán tử `exhaustMap` nhận một tham số:

* **Hàm dự toán**: Hàm này nhận giá trị được phát ra từ Observable đầu tiên làm tham số và trả về một Observable mới.

Toán tử sẽ **hủy** Observable hiện tại và **phát ra** Observable mới được trả về bởi hàm dự toán. Observable mới sẽ được **phát ra** cho đến khi nó hoàn tất hoặc **Observable đầu tiên phát ra giá trị tiếp theo**.

**Ví dụ:**

```typescript
import { of, fromEvent, exhaustMap } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Chỉ xử lý một Observable tại một thời điểm
const observableWithExhaustMap = observable1.pipe(
  exhaustMap((value) => {
    if (value === 'A') {
      return observable2;
    } else if (value === 'B') {
      return observable3;
    } else {
      return of([]);
    }
  }),
);

observableWithExhaustMap.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// X
// Y
// Z
```

**Lưu ý:**

* Toán tử `exhaustMap` **hủy** Observable hiện tại khi Observable mới được phát ra.
* Toán tử `exhaustMap` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS exhaustMap(): [https://rxjs.dev/api/operators/exhaustMap](https://rxjs.dev/api/operators/exhaustMap)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `exhaustMap` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, fromEvent, exhaustMap, map, filter } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Chỉ xử lý một Observable tại một thời điểm, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observableWithExhaustMap = observable1.pipe(
  exhaustMap((value) => {
    if (value === 'A') {
      return observable2;
    } else if (value === 'B') {
      return observable3;
    } else {
      return of([]);
    }
  }),
  map((value) => value * value),
  filter((value) => value > 10),
);

observableWithExhaustMap.subscribe(console.log);

// In ra:
// 16
// 36
```

## Kết luận

Toán tử `exhaustMap` là một HOO mạnh mẽ để xử lý các luồng dữ liệu liên tục, chỉ xử lý một luồng dữ liệu tại một thời điểm và hủy các luồng dữ liệu cũ khi luồng dữ liệu mới được phát ra trong Angular. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.