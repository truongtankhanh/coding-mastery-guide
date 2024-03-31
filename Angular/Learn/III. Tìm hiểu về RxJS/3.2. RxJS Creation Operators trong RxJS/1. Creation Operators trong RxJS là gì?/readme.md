## Creation Operators trong RxJS

**Khái niệm:** Creation Operators là các toán tử dùng để tạo mới một Observable từ các nguồn khác nhau.

**Ngữ cảnh:** Creation Operators thường được sử dụng trong Angular để:

- Lấy dữ liệu từ các nguồn bất đồng bộ như API, DOM, ...
- Xử lý các sự kiện như click chuột, nhập liệu, ...
- Tạo các luồng dữ liệu theo thời gian.

**Cách sử dụng:** Creation Operators được sử dụng bằng cách kết nối chúng với một nguồn dữ liệu. Ví dụ:

```typescript
import { of, fromEvent } from "rxjs";

// Tạo Observable từ một giá trị
const observable1 = of("Hello, world!");

// Tạo Observable từ một sự kiện
const observable2 = fromEvent(document, "click");

// Subscribe vào Observable để nhận dữ liệu
observable1.subscribe(console.log);
observable2.subscribe(console.log);
```

**Ví dụ:**

- **of():** Tạo Observable từ một giá trị. Ví dụ:

```typescript
const observable = of(1, 2, 3);

observable.subscribe(console.log); // In ra: 1, 2, 3
```

- **from():** Tạo Observable từ một mảng, Promise hoặc iterable. Ví dụ:

```typescript
const observable = from([1, 2, 3]);

observable.subscribe(console.log); // In ra: 1, 2, 3

const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Hello, world!"), 1000);
});

const observable = from(promise);

observable.subscribe(console.log); // In ra: Hello, world!
```

- **fromEvent():** Tạo Observable từ một sự kiện DOM. Ví dụ:

```typescript
const observable = fromEvent(document, "click");

observable.subscribe(console.log); // In ra thông tin về sự kiện click
```

- **interval():** Tạo Observable phát ra giá trị liên tục theo khoảng thời gian nhất định. Ví dụ:

```typescript
const observable = interval(1000);

observable.subscribe(console.log); // In ra 0, 1, 2, 3, ... sau mỗi 1 giây
```

- **timer():** Tạo Observable phát ra giá trị sau một khoảng thời gian nhất định. Ví dụ:

```typescript
const observable = timer(1000);

observable.subscribe(console.log); // In ra 0 sau 1 giây
```

- **throwError():** Tạo Observable phát ra lỗi. Ví dụ:

```typescript
const observable = throwError("An error occurred!");

observable.subscribe(console.log, (error) => console.error(error)); // In ra lỗi: An error occurred!
```

- **defer():** Tạo Observable từ một hàm được gọi mỗi khi có subscriber mới. Ví dụ:

```typescript
const observable = defer(() => {
  const date = new Date();
  return of(date.toLocaleDateString());
});

observable.subscribe(console.log); // In ra ngày tháng hiện tại

observable.subscribe(console.log); // In ra ngày tháng hiện tại
```

**Lời kết:** Creation Operators là một phần quan trọng của RxJS và được sử dụng rộng rãi trong Angular để tạo các luồng dữ liệu từ các nguồn khác nhau.

**Tài liệu tham khảo:**

- RxJS Creation Operators: [https://rxjs.dev/guide/operators#creation-operators-1](https://rxjs.dev/guide/operators#creation-operators-1)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)
