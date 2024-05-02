## Toán tử iif() trong RxJS

**Khái niệm:**

Toán tử `iif` là một **Error Conditional Operator** trong RxJS dùng để **phát ra Observable dựa trên một điều kiện**.

**Ngữ cảnh:**

Toán tử `iif` thường được sử dụng trong Angular để:

* **Hiển thị nội dung khác nhau dựa trên một điều kiện**
* **Thực hiện các tác vụ khác nhau dựa trên một điều kiện**
* **Chuyển hướng người dùng đến một trang khác dựa trên một điều kiện**

**Cách sử dụng:**

Toán tử `iif` nhận ba tham số:

* **Điều kiện**: Biểu thức Boolean dùng để xác định Observable nào được phát ra.
* **Observable then**: Observable được phát ra nếu điều kiện `true`.
* **Observable else**: Observable được phát ra nếu điều kiện `false`.

Toán tử sẽ **phát ra Observable then** nếu điều kiện `true`, **phát ra Observable else** nếu điều kiện `false`.

**Ví dụ:**

```typescript
import { of, iif } from 'rxjs';

// Biến điều kiện
const isLoggedIn = true;

// Observable phát ra giá trị "Welcome, user!" nếu người dùng đã đăng nhập
const observableWithIif = iif(
  isLoggedIn,
  of('Welcome, user!'),
  of('Please login'),
);

observableWithIif.subscribe(console.log);

// In ra:
// Welcome, user!
```

**Lưu ý:**

* Toán tử `iif` chỉ **phát ra một Observable** trong hai Observable được truyền vào.
* Toán tử `iif` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS iif(): [https://rxjs.dev/api/index/function/iif](https://rxjs.dev/api/index/function/iif)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `iif` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, iif, map, filter } from 'rxjs';

// Biến điều kiện
const isLoggedIn = true;

// Observable phát ra giá trị "Welcome, user!" nếu người dùng đã đăng nhập, sau đó lấy độ dài của chuỗi và chỉ lấy giá trị lớn hơn 10
const observableWithIif = iif(
  isLoggedIn,
  of('Welcome, user!'),
  of('Please login'),
).pipe(
  map((value) => value.length),
  filter((value) => value > 10),
);

observableWithIif.subscribe(console.log);

// In ra:
// 14
```

**Kết luận:**

Toán tử `iif` là một công cụ mạnh mẽ để phát ra Observable dựa trên một điều kiện. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu phức tạp** trong ứng dụng.
