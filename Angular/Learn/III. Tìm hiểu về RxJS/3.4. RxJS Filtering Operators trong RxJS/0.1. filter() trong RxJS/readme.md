## Toán tử filter() trong RxJS

**Khái niệm:**

Toán tử `filter` là một **Filtering Operator** trong RxJS dùng để **lọc** các giá trị được phát ra bởi Observable dựa trên một **điều kiện** cụ thể.

**Ngữ cảnh:**

Toán tử `filter` thường được sử dụng trong Angular để:

- Lọc các giá trị không mong muốn khỏi Observable.
- Chỉ lấy các giá trị đáp ứng một điều kiện nhất định.
- Tạo các luồng dữ liệu chỉ chứa các giá trị quan trọng.

**Cách sử dụng:**

Toán tử `filter` nhận một **hàm predicate** làm tham số. Hàm predicate này nhận mỗi giá trị được phát ra bởi Observable và trả về `true` nếu giá trị đó được chọn, hoặc `false` nếu giá trị đó bị bỏ qua.

**Ví dụ:**

```typescript
import { of, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lọc các giá trị chẵn
const evenObservable = observable.pipe(filter((value) => value % 2 === 0));

evenObservable.subscribe(console.log); // In ra: 2, 4
```

**Lưu ý:**

- Toán tử `filter` **không thay đổi** Observable gốc.
- Toán tử `filter` chỉ phát ra các giá trị **được chọn** bởi hàm predicate.

**Tài liệu tham khảo:**

- RxJS filter(): [https://rxjs.dev/api/operators/filter](https://rxjs.dev/api/operators/filter)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `filter` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, filter, map } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy bình phương của các giá trị chẵn
const evenSquaredObservable = observable.pipe(
  filter((value) => value % 2 === 0),
  map((value) => value * value)
);

evenSquaredObservable.subscribe(console.log); // In ra: 4, 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `filter` để lọc các giá trị lẻ trước khi sử dụng toán tử `map` để lấy bình phương của các giá trị chẵn.

## Kết luận

Toán tử `filter` là một công cụ mạnh mẽ để lọc các giá trị được phát ra bởi Observable dựa trên một điều kiện cụ thể. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.
