## Toán tử switchMap() trong RxJS

**Khái niệm:**

Toán tử `switchMap` là một **Higher Order Observable (HOO)** trong RxJS dùng để **chuyển đổi một Observable thành một Observable khác** dựa trên giá trị được phát ra từ Observable đầu tiên.

**Ngữ cảnh:**

Toán tử `switchMap` thường được sử dụng trong Angular để:

* **Xử lý các luồng dữ liệu liên tục**
* **Hủy các Observable cũ khi Observable mới được phát ra**
* **Tạo ra các luồng dữ liệu phức tạp**

**Cách sử dụng:**

Toán tử `switchMap` nhận một tham số:

* **Hàm dự toán**: Hàm này nhận giá trị được phát ra từ Observable đầu tiên làm tham số và trả về một Observable mới.

Toán tử sẽ **hủy** Observable hiện tại và **phát ra Observable mới** được trả về bởi hàm dự toán. Observable mới sẽ được **phát ra** cho đến khi nó hoàn tất hoặc **Observable đầu tiên phát ra giá trị tiếp theo**.

**Ví dụ:**

```typescript
import { of, fromEvent, switchMap } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Chuyển đổi Observable dựa trên giá trị được phát ra
const observableWithSwitchMap = observable1.pipe(
  switchMap((value) => {
    if (value === 'A') {
      return observable2;
    } else if (value === 'B') {
      return observable3;
    } else {
      return of([]);
    }
  }),
);

observableWithSwitchMap.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// X
// Y
// Z
```

**Lưu ý:**

* Toán tử `switchMap` **hủy** Observable hiện tại khi Observable mới được phát ra.
* Toán tử `switchMap` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS switchMap(): [https://rxjs.dev/api/operators/switchMap](https://rxjs.dev/api/operators/switchMap)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `switchMap` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, fromEvent, switchMap, map, filter } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Chuyển đổi Observable dựa trên giá trị được phát ra, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observableWithSwitchMap = observable1.pipe(
  switchMap((value) => {
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

observableWithSwitchMap.subscribe(console.log);

// In ra:
// 16
// 36
```

## Kết luận

Toán tử `switchMap` là một HOO mạnh mẽ để xử lý các luồng dữ liệu liên tục, hủy các Observable cũ khi Observable mới được phát ra và tạo ra các luồng dữ liệu phức tạp trong Angular. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.