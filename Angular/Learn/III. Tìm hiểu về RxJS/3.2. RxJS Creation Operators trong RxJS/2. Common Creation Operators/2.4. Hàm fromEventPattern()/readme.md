## Hàm fromEventPattern() trong RxJS

**Khái niệm:**

Hàm `fromEventPattern()` là một **Creation Operator** trong RxJS dùng để tạo một Observable từ một hàm đăng ký sự kiện.

**Ngữ cảnh:**

Hàm `fromEventPattern()` thường được sử dụng trong Angular để:

- Lắng nghe các sự kiện không được hỗ trợ bởi hàm `fromEvent()`.
- Tạo các Observable từ các API không cung cấp phương thức đăng ký sự kiện tiêu chuẩn.
- Có nhiều kiểm soát hơn cách thức đăng ký và hủy đăng ký các sự kiện.

**Cách sử dụng:**

Hàm `fromEventPattern()` nhận ba tham số:

- **AddHandler:** Hàm được gọi để đăng ký sự kiện.
- **RemoveHandler:** Hàm được gọi để hủy đăng ký sự kiện.
- **Mapper:** Hàm (tùy chọn) được gọi để chuyển đổi giá trị được phát ra bởi Observable.

Hàm `fromEventPattern()` trả về một Observable. Observable này sẽ phát ra một giá trị mỗi khi sự kiện được kích hoạt. Giá trị được phát ra là giá trị trả về bởi hàm `Mapper`.

**Ví dụ:**

```typescript
import { fromEventPattern } from "rxjs";

// Lắng nghe sự kiện scroll trên window
const observable = fromEventPattern(
  (addHandler) => window.addEventListener("scroll", addHandler),
  (removeHandler) => window.removeEventListener("scroll", removeHandler)
);

// Subscribe vào Observable để nhận dữ liệu
observable.subscribe(console.log); // In ra thông tin về sự kiện scroll

// Lắng nghe sự kiện resize trên window
const observable = fromEventPattern(
  (addHandler) => window.addEventListener("resize", addHandler),
  (removeHandler) => window.removeEventListener("resize", removeHandler),
  (event) => ({
    width: event.target.innerWidth,
    height: event.target.innerHeight,
  })
);

observable.subscribe((size) => {
  // Xử lý kích thước cửa sổ
  console.log(size.width, size.height);
});
```

**Lưu ý:**

- Hàm `fromEventPattern()` có thể sử dụng với bất kỳ hàm đăng ký sự kiện nào.
- Hàm `fromEventPattern()` sẽ tiếp tục phát ra các giá trị cho đến khi bạn unsubscribe khỏi Observable.
- Bạn nên unsubscribe khỏi Observable khi bạn không còn cần sử dụng nó nữa để tránh rò rỉ bộ nhớ.

**Tài liệu tham khảo:**

- RxJS fromEventPattern(): [https://rxjs.dev/api/index/function/fromEventPattern](https://rxjs.dev/api/index/function/fromEventPattern)

## Ví dụ nâng cao

Hàm `fromEventPattern()` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { fromEventPattern, map, throttleTime } from "rxjs";

const observable = fromEventPattern(
  (addHandler) => window.addEventListener("mousemove", addHandler),
  (removeHandler) => window.removeEventListener("mousemove", removeHandler)
).pipe(
  throttleTime(100),
  map((event) => {
    // Lấy tọa độ chuột
    const x = event.clientX;
    const y = event.clientY;

    // Trả về một đối tượng với tọa độ chuột
    return { x, y };
  })
);

observable.subscribe((position) => {
  // Xử lý vị trí chuột
  console.log(position.x, position.y);
});
```

Trong ví dụ trên, chúng ta sử dụng toán tử `throttleTime()` để giới hạn số lượng giá trị được phát ra bởi Observable xuống 10 giá trị mỗi giây. Chúng ta cũng sử dụng hàm `map()` để lấy tọa độ chuột từ đối tượng Event và trả về một đối tượng mới với hai thuộc tính `x` và `y`.

## Kết luận

Hàm `fromEventPattern()` là một Creation Operator mạnh mẽ có thể được sử dụng để tạo các Observable từ các API không cung cấp phương thức đăng ký sự kiện tiêu chuẩn. Hàm này có thể được sử dụng để tạo các luồng dữ liệu đơn giản hoặc phức tạp tùy thuộc vào nhu cầu của bạn.
