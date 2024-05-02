## Toán tử endWith() trong RxJS

**Khái niệm:**

Toán tử `endWith` là một **Combination Operator** trong RxJS dùng để **phát ra một giá trị hoặc một mảng giá trị** sau khi tất cả các giá trị từ Observable được phát ra.

**Ngữ cảnh:**

Toán tử `endWith` thường được sử dụng trong Angular để:

* **Thêm giá trị bổ sung** vào cuối luồng dữ liệu.
* **Hiển thị thông báo** sau khi một tác vụ hoàn tất.
* **Cung cấp giá trị mặc định** cho Observable nếu không có giá trị nào được phát ra.

**Cách sử dụng:**

Toán tử `endWith` nhận một tham số:

* **Giá trị hoặc mảng giá trị**: Giá trị hoặc mảng giá trị được phát ra sau khi tất cả các giá trị từ Observable được phát ra.

Toán tử sẽ phát ra tất cả các giá trị từ Observable, sau đó phát ra giá trị hoặc mảng giá trị được truyền vào.

**Ví dụ:**

```typescript
import { of, endWith } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Phát ra giá trị 4 sau khi tất cả các giá trị từ Observable được phát ra
const observableWithEndWith = observable.pipe(
  endWith(4),
);

observableWithEndWith.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// 4
```

**Lưu ý:**

* Toán tử `endWith` sẽ **chờ** cho đến khi **tất cả các giá trị từ Observable được phát ra** trước khi phát ra giá trị hoặc mảng giá trị được truyền vào.
* Toán tử `endWith` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS endWith(): [https://rxjs.dev/api/operators/endWith](https://rxjs.dev/api/operators/endWith)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `endWith` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, endWith, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Phát ra giá trị 4 sau khi tất cả các giá trị từ Observable được phát ra, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observableWithEndWith = observable.pipe(
  endWith(4),
  map((value) => value * value),
  filter((value) => value > 10),
);

observableWithEndWith.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `endWith` để phát ra giá trị 4 sau khi tất cả các giá trị từ Observable được phát ra, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10.

## Kết luận

Toán tử `endWith` là một công cụ mạnh mẽ để thêm giá trị bổ sung vào cuối luồng dữ liệu, hiển thị thông báo sau khi một tác vụ hoàn tất hoặc cung cấp giá trị mặc định cho Observable nếu không có giá trị nào được phát ra. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu phức tạp** trong ứng dụng.
