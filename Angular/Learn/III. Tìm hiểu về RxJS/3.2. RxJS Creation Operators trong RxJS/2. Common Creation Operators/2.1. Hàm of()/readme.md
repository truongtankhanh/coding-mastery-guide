## Hàm of() trong RxJS

**Khái niệm:**

Hàm `of()` là một **Creation Operator** trong RxJS dùng để tạo một Observable từ một hoặc nhiều giá trị.

**Ngữ cảnh:**

Hàm `of()` thường được sử dụng trong Angular để:

- Gửi một giá trị đơn lẻ hoặc một tập hợp các giá trị đến một Observable.
- Tạo một Observable đơn giản để kiểm tra hoặc minh họa code.
- Kết hợp với các toán tử RxJS khác để tạo các luồng dữ liệu phức tạp hơn.

**Cách sử dụng:**

Hàm `of()` nhận một hoặc nhiều giá trị làm đầu vào và trả về một Observable. Observable này sẽ phát ra từng giá trị được truyền vào theo thứ tự, sau đó hoàn thành.

**Ví dụ:**

```typescript
import { of } from "rxjs";

// Tạo Observable từ một giá trị
const observable = of("Hello, world!");

// Subscribe vào Observable để nhận dữ liệu
observable.subscribe(console.log); // In ra: Hello, world!

// Tạo Observable từ một tập hợp các giá trị
const observable = of(1, 2, 3);

observable.subscribe(console.log); // In ra: 1, 2, 3
```

**Lưu ý:**

- Hàm `of()` chỉ có thể sử dụng với các giá trị đơn lẻ hoặc các tập hợp các giá trị. Nếu bạn muốn tạo một Observable từ một nguồn dữ liệu bất đồng bộ như API, DOM, ..., hãy sử dụng các Creation Operator khác như `from()`, `fromEvent()`, ...
- Hàm `of()` luôn hoàn thành sau khi phát ra tất cả các giá trị được truyền vào. Nếu bạn muốn tạo một Observable không bao giờ hoàn thành, hãy sử dụng `interval()`, `timer()`, ...

**Tài liệu tham khảo:**

- RxJS of(): [https://rxjs.dev/api/index/function/of](https://rxjs.dev/api/index/function/of)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

**Ngoài ra:**

Hàm `of()` có thể được sử dụng để tạo một Observable từ một Promise. Ví dụ:

```typescript
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Hello, world!"), 1000);
});

const observable = of(promise);

observable.subscribe(console.log); // In ra: Hello, world! sau 1 giây
```

Hàm `of()` cũng có thể được sử dụng để tạo một Observable từ một Observable khác. Ví dụ:

```typescript
const observable1 = of("Hello, world!");

const observable2 = of(observable1);

observable2.subscribe(console.log); // In ra: Hello, world!
```

## Ví dụ nâng cao

Hàm `of()` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, map } from "rxjs";

const observable = of(1, 2, 3).pipe(map((x) => x * 2));

observable.subscribe(console.log); // In ra: 2, 4, 6
```

Trong ví dụ trên, chúng ta sử dụng hàm `map()` để nhân đôi mỗi giá trị được phát ra bởi Observable.

## Kết luận

Hàm `of()` là một Creation Operator đơn giản nhưng mạnh mẽ có thể được sử dụng để tạo các Observable từ nhiều nguồn dữ liệu khác nhau. Hàm này có thể được sử dụng để tạo các luồng dữ liệu đơn giản hoặc phức tạp tùy thuộc vào nhu cầu của bạn.
