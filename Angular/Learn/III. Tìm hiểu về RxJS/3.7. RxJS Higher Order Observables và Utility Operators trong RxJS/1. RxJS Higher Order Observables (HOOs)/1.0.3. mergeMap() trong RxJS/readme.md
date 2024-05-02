## Toán tử mergeMap() trong RxJS

**Khái niệm:**

Toán tử `mergeMap` (hay còn gọi là `flatMap`) là một **Higher Order Observable (HOO)** trong RxJS dùng để **phát ra các giá trị từ nhiều Observable** được **phát ra đồng thời**.

**Ngữ cảnh:**

Toán tử `mergeMap` thường được sử dụng trong Angular để:

* **Kết hợp các luồng dữ liệu**
* **Xử lý các luồng dữ liệu song song**
* **Tạo ra các luồng dữ liệu phức tạp**

**Cách sử dụng:**

Toán tử `mergeMap` nhận một tham số:

* **Hàm dự toán**: Hàm này nhận giá trị được phát ra từ Observable đầu tiên làm tham số và trả về một Observable mới.

Toán tử sẽ **phát ra** tất cả các giá trị từ tất cả các Observable được trả về bởi hàm dự toán. Các Observable này được **phát ra đồng thời** và **không theo thứ tự cụ thể**.

**Ví dụ:**

```typescript
import { of, fromEvent, mergeMap } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Kết hợp các Observable và phát ra các giá trị đồng thời
const observableWithMergeMap = observable1.pipe(
  mergeMap((value) => {
    if (value === 'A') {
      return observable2;
    } else if (value === 'B') {
      return observable3;
    } else {
      return of([]);
    }
  }),
);

observableWithMergeMap.subscribe(console.log);

// In ra:
// 1
// A
// 2
// X
// 3
// Y
// Z
// B
```

**Lưu ý:**

* Toán tử `mergeMap` **không đảm bảo thứ tự** của các giá trị được phát ra.
* Toán tử `mergeMap` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS mergeMap(): [https://rxjs.dev/api/operators/mergeMap](https://rxjs.dev/api/operators/mergeMap)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `mergeMap` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, fromEvent, mergeMap, map, filter } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Kết hợp các Observable, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observableWithMergeMap = observable1.pipe(
  mergeMap((value) => {
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

observableWithMergeMap.subscribe(console.log);

// In ra:
// 16
// 36
```

## Kết luận

Toán tử `mergeMap` là một HOO mạnh mẽ để kết hợp các luồng dữ liệu, xử lý các luồng dữ liệu song song và tạo ra các luồng dữ liệu phức tạp trong Angular. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.
