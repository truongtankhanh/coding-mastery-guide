## Hàm throwError() trong RxJS

**Khái niệm:**

Hàm `throwError()` là một **Creation Operator** trong RxJS dùng để tạo một Observable phát ra lỗi.

**Ngữ cảnh:**

Hàm `throwError()` thường được sử dụng trong Angular để:

- Xử lý các lỗi trong luồng dữ liệu.
- Hiển thị thông báo lỗi cho người dùng.
- Ngừng luồng dữ liệu khi gặp lỗi.

**Cách sử dụng:**

Hàm `throwError()` nhận một tham số là lỗi mà bạn muốn phát ra.

Hàm `throwError()` trả về một Observable. Observable này sẽ phát ra lỗi được chỉ định và sau đó hoàn thành.

**Ví dụ:**

```typescript
import { throwError } from "rxjs";

// Observable phát ra lỗi
const observable = throwError("Lỗi!");

observable.subscribe(
  // Không được gọi
  console.log,
  // Gọi với lỗi
  (error) => console.log(error)
);

// Observable phát ra lỗi sau 2 giây
const observable = timer(2000).pipe(switchMap(() => throwError("Lỗi!")));

observable.subscribe(
  // Không được gọi
  console.log,
  // Gọi với lỗi
  (error) => console.log(error)
);
```

**Lưu ý:**

- Hàm `throwError()` sẽ luôn phát ra lỗi và hoàn thành Observable.
- Bạn có thể sử dụng toán tử `catchError()` để xử lý lỗi và tiếp tục luồng dữ liệu.

**Tài liệu tham khảo:**

- RxJS throwError(): [https://rxjs.dev/api/index/function/throwError](https://rxjs.dev/api/index/function/throwError)

## Ví dụ nâng cao

Hàm `throwError()` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { throwError, retry } from "rxjs";

// Observable phát ra lỗi, nhưng thử lại 3 lần
const observable = throwError("Lỗi!").pipe(retry(3));

observable.subscribe(
  // Có thể được gọi
  console.log,
  // Gọi nếu lỗi không được giải quyết sau 3 lần thử lại
  (error) => console.log(error)
);
```

Trong ví dụ trên, chúng ta sử dụng toán tử `retry()` để thử lại việc phát ra giá trị 3 lần nếu gặp lỗi.

## Kết luận

Hàm `throwError()` là một Creation Operator đơn giản nhưng mạnh mẽ có thể được sử dụng để phát ra lỗi trong luồng dữ liệu. Hàm này có thể được sử dụng để xử lý các lỗi và tạo các luồng dữ liệu phức tạp hơn.
