## Toán tử switch/concat/mergeMapTo trong RxJS

**Khái niệm:**

**1. switchMapTo:**

Toán tử `switchMapTo` là một **Higher Order Observable (HOO)** trong RxJS dùng để **chuyển đổi Observable hiện tại thành một Observable mới** được **phát ra bởi một hàm dự toán**.

**2. concatMapTo:**

Toán tử `concatMapTo` là một HOO trong RxJS dùng để **phát ra các giá trị từ Observable mới** được **phát ra bởi một hàm dự toán**, **sau khi hoàn tất Observable hiện tại**.

**3. mergeMapTo:**

Toán tử `mergeMapTo` là một HOO trong RxJS dùng để **phát ra các giá trị từ Observable mới** được **phát ra bởi một hàm dự toán**, **đồng thời với Observable hiện tại**.

**Ngữ cảnh:**

**1. switchMapTo:**

Toán tử `switchMapTo` thường được sử dụng trong Angular để:

* **Chuyển đổi giữa các luồng dữ liệu dựa trên một điều kiện**
* **Hủy luồng dữ liệu hiện tại khi luồng dữ liệu mới được phát ra**

**2. concatMapTo:**

Toán tử `concatMapTo` thường được sử dụng trong Angular để:

* **Kết hợp các luồng dữ liệu theo thứ tự**
* **Xử lý luồng dữ liệu mới sau khi luồng dữ liệu hiện tại hoàn tất**

**3. mergeMapTo:**

Toán tử `mergeMapTo` thường được sử dụng trong Angular để:

* **Kết hợp các luồng dữ liệu đồng thời**
* **Xử lý luồng dữ liệu mới song song với luồng dữ liệu hiện tại**

**Cách sử dụng:**

**1. switchMapTo:**

Toán tử `switchMapTo` nhận một tham số:

* **Hàm dự toán**: Hàm này **không** nhận giá trị được phát ra từ Observable đầu tiên làm tham số và **trả về một Observable mới**.

Toán tử sẽ **hủy** Observable hiện tại và **phát ra** Observable mới được trả về bởi hàm dự toán. Observable mới sẽ được **phát ra** cho đến khi nó hoàn tất hoặc **Observable đầu tiên phát ra giá trị tiếp theo**.

**Ví dụ:**

```typescript
import { of, fromEvent, switchMapTo } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Chuyển đổi giữa các luồng dữ liệu dựa trên giá trị
const observableWithSwitchMapTo = observable1.pipe(
  switchMapTo(() => {
    if (value === 'A') {
      return observable2;
    } else if (value === 'B') {
      return observable3;
    } else {
      return of([]);
    }
  }),
);

observableWithSwitchMapTo.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// X
// Y
// Z
```

**2. concatMapTo:**

Toán tử `concatMapTo` nhận một tham số:

* **Hàm dự toán**: Hàm này **không** nhận giá trị được phát ra từ Observable đầu tiên làm tham số và **trả về một Observable mới**.

Toán tử sẽ **hoàn tất** Observable hiện tại và **phát ra** Observable mới được trả về bởi hàm dự toán. Observable mới sẽ được **phát ra** sau khi Observable hiện tại hoàn tất.

**Ví dụ:**

```typescript
import { of, fromEvent, concatMapTo } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Kết hợp các luồng dữ liệu theo thứ tự
const observableWithConcatMapTo = observable1.pipe(
  concatMapTo(() => {
    if (value === 'A') {
      return observable2;
    } else if (value === 'B') {
      return observable3;
    } else {
      return of([]);
    }
  }),
);

observableWithConcatMapTo.subscribe(console.log);

// In ra:
// A
// B
// C
// 1
// 2
// 3
// X
// Y
// Z
```

**3. mergeMapTo:**

Toán tử `mergeMapTo` nhận một tham số:

* **Hàm dự toán**: Hàm này **không** nhận giá trị được phát ra từ Observable đầu tiên làm tham số và **trả về một Observable mới**.

Toán tử sẽ **phát ra** Observable hiện tại và Observable mới được trả về bởi hàm dự toán **đồng thời**.

**Ví dụ:**

```typescript
import { of, fromEvent, mergeMapTo } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Kết hợp các luồng dữ liệu đồng thời
const observableWithMergeMapTo = observable1.pipe(
  mergeMapTo(() => {
    if (value === 'A') {
      return observable2;
    } else if (value === 'B') {
      return observable3;
    } else {
      return of([]);
    }
  }),
);

observableWithMergeMapTo.subscribe(console.log);

// In ra:
// A
// 1
// B
// 2
// C
// 3
// X
// Y
// Z
```

**Lưu ý:**

* Toán tử `switchMapTo` **hủy** Observable hiện tại khi Observable mới được phát ra.
* Toán tử `concatMapTo` **hoàn tất** Observable hiện tại trước khi phát ra Observable mới.
* Toán tử `mergeMapTo` **phát ra** Observable hiện tại và Observable mới **đồng thời**.

**Tài liệu tham khảo:**

* RxJS switchMapTo: [https://rxjs.dev/api/operators/switchMapTo](https://rxjs.dev/api/operators/switchMapTo)
* RxJS concatMapTo: [https://rxjs.dev/api/operators/concatMapTo](https://rxjs.dev/api/operators/concatMapTo)
* RxJS mergeMapTo: [https://rxjs.dev/api/operators/mergeMapTo](https://rxjs.dev/api/operators/mergeMapTo)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `switchMapTo`, `concatMapTo` và `mergeMapTo` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ:**

```typescript
import { of, fromEvent, switchMapTo, concatMapTo, mergeMapTo, map, filter } from 'rxjs';

// Observable phát ra giá trị "A", "B", "C"
const observable1 = of('A', 'B', 'C');

// Observable phát ra giá trị 1, 2, 3
const observable2 = of(1, 2, 3);

// Observable phát ra giá trị "X", "Y", "Z"
const observable3 = of('X', 'Y', 'Z');

// Chuyển đổi giữa các luồng dữ liệu, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observableWithSwitchMapTo = observable1.pipe(
  switchMapTo(() => {
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

// Kết hợp các luồng dữ liệu theo thứ tự, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 1
observableWithMergeMapTo.subscribe(console.log);

// In ra:
// 16
// 36
```

**Kết luận:**

Toán tử `switchMapTo`, `concatMapTo` và `mergeMapTo` là các HOO mạnh mẽ để chuyển đổi, kết hợp và phát ra các luồng dữ liệu trong Angular. Các toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.

**Lựa chọn toán tử nào sử dụng:**

* `switchMapTo`: Sử dụng khi bạn muốn **chuyển đổi giữa các luồng dữ liệu** dựa trên một điều kiện.
* `concatMapTo`: Sử dụng khi bạn muốn **kết hợp các luồng dữ liệu theo thứ tự**.
* `mergeMapTo`: Sử dụng khi bạn muốn **kết hợp các luồng dữ liệu đồng thời**.

**Lưu ý:**

* Lựa chọn toán tử nào sử dụng phụ thuộc vào ngữ cảnh và yêu cầu cụ thể của ứng dụng.
* Các toán tử này có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn.

