## Toán tử map trong RxJS

**Khái niệm:**

Toán tử `map` là một **Transformation Operator** trong RxJS dùng để **chuyển đổi** dữ liệu được phát ra bởi Observable.

**Ngữ cảnh:**

Toán tử `map` thường được sử dụng trong Angular để:

- Chuyển đổi kiểu dữ liệu của giá trị được phát ra.
- Lọc giá trị dựa trên điều kiện.
- Trích xuất một phần dữ liệu từ giá trị được phát ra.
- Thêm thông tin mới vào giá trị được phát ra.

**Cách sử dụng:**

Toán tử `map` nhận một **hàm** làm tham số. Hàm này được gọi với mỗi giá trị được phát ra bởi Observable và **trả về giá trị mới** sẽ được phát ra bởi Observable sau khi được chuyển đổi.

**Ví dụ:**

```typescript
import { of, map } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Chuyển đổi các giá trị sang chuỗi
const mappedObservable = observable.pipe(map((value) => value.toString()));

mappedObservable.subscribe(console.log); // In ra: "1", "2", "3", "4", "5"

// Lọc các giá trị chẵn
const filteredObservable = observable.pipe(map((value) => value * 2));

filteredObservable.subscribe(console.log); // In ra: 2, 4, 6, 8, 10
```

**Lưu ý:**

- Hàm được truyền vào `map` có thể **trả về bất kỳ giá trị nào**.
- Toán tử `map` **không thay đổi** Observable gốc.
- Bạn có thể sử dụng nhiều toán tử `map` liên tiếp để thực hiện nhiều chuyển đổi.

**Tài liệu tham khảo:**

- RxJS map(): [https://rxjs.dev/api/operators/map](https://rxjs.dev/api/operators/map)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `map` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, map, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lọc các giá trị chẵn và nhân đôi giá trị
const filteredObservable = observable.pipe(
  map((value) => value * 2),
  filter((value) => value % 2 === 0)
);

filteredObservable.subscribe(console.log); // In ra: 4, 8
```

Trong ví dụ trên, chúng ta sử dụng toán tử `filter` để lọc các giá trị chẵn sau khi đã nhân đôi giá trị bằng toán tử `map`.

## Kết luận

Toán tử `map` là một công cụ mạnh mẽ để **chuyển đổi** dữ liệu được phát ra bởi Observable. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.
