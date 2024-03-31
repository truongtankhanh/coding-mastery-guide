## Hàm defer() trong RxJS

**Khái niệm:**

Hàm `defer()` là một **Creation Operator** trong RxJS dùng để tạo một Observable dựa trên một hàm được cung cấp. Hàm này sẽ **chỉ được gọi** khi có **subscriber** đăng ký vào Observable.

**Ngữ cảnh:**

Hàm `defer()` thường được sử dụng trong Angular để:

- Tạo Observable dựa trên giá trị **tính toán** hoặc **lấy từ bên ngoài**.
- Tránh tạo Observable **không cần thiết** cho đến khi có subscriber đăng ký.
- **Tái tạo** Observable mới mỗi khi có subscriber đăng ký.

**Cách sử dụng:**

Hàm `defer()` nhận một tham số là **hàm** trả về một **ObservableInput**.

Hàm `defer()` trả về một Observable. Observable này sẽ **chỉ được tạo** khi có subscriber đăng ký. Khi đó, **hàm** được cung cấp sẽ được gọi và **ObservableInput** được trả về sẽ được sử dụng để tạo Observable mới cho subscriber.

**Ví dụ:**

```typescript
import { defer, from } from "rxjs";

// Tạo Observable dựa trên giá trị thời gian hiện tại
const observable = defer(() => from([Date.now()]));

observable.subscribe(console.log); // In ra thời gian hiện tại

// Tạo Observable dựa trên dữ liệu được lấy từ API
const observable = defer(() => {
  const url = "https://api.example.com/data";
  return fetch(url).then((response) => response.json());
});

observable.subscribe(console.log); // In ra dữ liệu được lấy từ API

// Tạo Observable mới mỗi khi có subscriber đăng ký
const observable = defer(() => {
  console.log("Tạo Observable mới!");
  return of("Hello, world!");
});

observable.subscribe(console.log); // In ra: "Tạo Observable mới!" và "Hello, world!"

observable.subscribe(console.log); // In ra: "Tạo Observable mới!" và "Hello, world!"
```

**Lưu ý:**

- Hàm `defer()` **chỉ được gọi** khi có subscriber **đăng ký** vào Observable.
- Observable được tạo bởi `defer()` **hoàn toàn mới** mỗi khi có subscriber đăng ký.
- Bạn nên sử dụng `defer()` khi bạn muốn **tránh tạo Observable không cần thiết** hoặc khi bạn muốn **tái tạo** Observable mới mỗi khi có subscriber đăng ký.

**Tài liệu tham khảo:**

- RxJS defer(): [https://rxjs.dev/api/index/function/defer](https://rxjs.dev/api/index/function/defer)

## Ví dụ nâng cao

Hàm `defer()` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { defer, map, retry } from "rxjs";

// Tạo Observable dựa trên giá trị thời gian hiện tại, retry 3 lần nếu gặp lỗi
const observable = defer(() =>
  from([Date.now()]).pipe(
    map((value) => {
      if (value % 2 === 0) {
        throw new Error("Lỗi!");
      }
      return value;
    }),
    retry(3)
  )
);

observable.subscribe(
  // In ra giá trị thời gian hiện tại nếu không gặp lỗi
  console.log,
  // Gọi nếu gặp lỗi và không được giải quyết sau 3 lần retry
  (error) => console.log(error)
);
```

Trong ví dụ trên, chúng ta sử dụng toán tử `map()` để chuyển đổi giá trị thời gian hiện tại và `retry()` để thử lại 3 lần nếu gặp lỗi.

## Kết luận

Hàm `defer()` là một Creation Operator mạnh mẽ có thể được sử dụng để tạo Observable dựa trên giá trị **tính toán** hoặc **lấy từ bên ngoài**. Hàm này giúp **tránh tạo Observable không cần thiết** và **tái tạo** Observable mới mỗi khi có subscriber đăng ký.
