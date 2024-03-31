## Hàm from() trong RxJS

**Khái niệm:**

Hàm `from()` là một **Creation Operator** trong RxJS dùng để tạo một Observable từ một nguồn dữ liệu iterable.

**Ngữ cảnh:**

Hàm `from()` thường được sử dụng trong Angular để:

- Lấy dữ liệu từ các nguồn dữ liệu iterable như mảng, Promise, Observable, ...
- Xử lý các sự kiện DOM.
- Tạo các luồng dữ liệu từ các nguồn dữ liệu bất đồng bộ.

**Cách sử dụng:**

Hàm `from()` nhận một nguồn dữ liệu iterable làm đầu vào và trả về một Observable. Observable này sẽ phát ra từng giá trị trong nguồn dữ liệu iterable theo thứ tự, sau đó hoàn thành.

**Ví dụ:**

```typescript
import { from } from "rxjs";

// Tạo Observable từ một mảng
const observable = from([1, 2, 3]);

// Subscribe vào Observable để nhận dữ liệu
observable.subscribe(console.log); // In ra: 1, 2, 3

// Tạo Observable từ một Promise
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Hello, world!"), 1000);
});

const observable = from(promise);

observable.subscribe(console.log); // In ra: Hello, world! sau 1 giây

// Tạo Observable từ một Observable khác
const observable1 = of("Hello, world!");

const observable2 = from(observable1);

observable2.subscribe(console.log); // In ra: Hello, world!
```

**Lưu ý:**

- Hàm `from()` có thể sử dụng với bất kỳ nguồn dữ liệu iterable nào.
- Hàm `from()` luôn hoàn thành sau khi phát ra tất cả các giá trị trong nguồn dữ liệu iterable. Nếu bạn muốn tạo một Observable không bao giờ hoàn thành, hãy sử dụng `interval()`, `timer()`, ...

**Tài liệu tham khảo:**

- RxJS from(): [https://rxjs.dev/api/index/function/from](https://rxjs.dev/api/index/function/from)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

**Ngoài ra:**

Hàm `from()` có thể được sử dụng để tạo một Observable từ một sự kiện DOM. Ví dụ:

```typescript
import { fromEvent } from "rxjs";

const observable = fromEvent(document, "click");

observable.subscribe(console.log); // In ra thông tin về sự kiện click
```

## Ví dụ nâng cao

Hàm `from()` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { from, map } from "rxjs";

const observable = from([1, 2, 3]).pipe(map((x) => x * 2));

observable.subscribe(console.log); // In ra: 2, 4, 6
```

Trong ví dụ trên, chúng ta sử dụng hàm `map()` để nhân đôi mỗi giá trị được phát ra bởi Observable.

## Kết luận

Hàm `from()` là một Creation Operator mạnh mẽ có thể được sử dụng để tạo các Observable từ nhiều nguồn dữ liệu iterable khác nhau. Hàm này có thể được sử dụng để tạo các luồng dữ liệu đơn giản hoặc phức tạp tùy thuộc vào nhu cầu của bạn.
