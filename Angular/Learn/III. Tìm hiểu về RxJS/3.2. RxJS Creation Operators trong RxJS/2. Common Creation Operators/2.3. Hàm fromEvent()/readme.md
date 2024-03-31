## Hàm fromEvent() trong RxJS

**Khái niệm:**

Hàm `fromEvent()` là một **Creation Operator** trong RxJS dùng để tạo một Observable từ một sự kiện DOM.

**Ngữ cảnh:**

Hàm `fromEvent()` thường được sử dụng trong Angular để:

- Lắng nghe các sự kiện DOM như click chuột, nhập liệu, ...
- Xử lý các sự kiện DOM một cách reactive.
- Tạo các luồng dữ liệu dựa trên các sự kiện DOM.

**Cách sử dụng:**

Hàm `fromEvent()` nhận hai tham số:

- **Target:** Đối tượng DOM mà bạn muốn lắng nghe sự kiện.
- **EventName:** Tên của sự kiện mà bạn muốn lắng nghe.

Hàm `fromEvent()` trả về một Observable. Observable này sẽ phát ra một giá trị mỗi khi sự kiện được kích hoạt. Giá trị được phát ra là một đối tượng Event chứa thông tin về sự kiện.

**Ví dụ:**

```typescript
import { fromEvent } from "rxjs";

// Lắng nghe sự kiện click chuột trên document
const observable = fromEvent(document, "click");

// Subscribe vào Observable để nhận dữ liệu
observable.subscribe(console.log); // In ra thông tin về sự kiện click

// Lắng nghe sự kiện nhập liệu trên input
const observable = fromEvent(inputElement, "input");

observable.subscribe((event) => {
  // Xử lý giá trị được nhập vào
  console.log(event.target.value);
});
```

**Lưu ý:**

- Hàm `fromEvent()` chỉ có thể sử dụng với các sự kiện DOM.
- Hàm `fromEvent()` sẽ tiếp tục phát ra các giá trị cho đến khi bạn unsubscribe khỏi Observable.
- Bạn nên unsubscribe khỏi Observable khi bạn không còn cần sử dụng nó nữa để tránh rò rỉ bộ nhớ.

**Tài liệu tham khảo:**

- RxJS fromEvent(): [https://rxjs.dev/api/index/function/fromEvent](https://rxjs.dev/api/index/function/fromEvent)

## Ví dụ nâng cao

Hàm `fromEvent()` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { fromEvent, map } from "rxjs";

const observable = fromEvent(document, "mousemove").pipe(
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

Trong ví dụ trên, chúng ta sử dụng hàm `map()` để lấy tọa độ chuột từ đối tượng Event và trả về một đối tượng mới với hai thuộc tính `x` và `y`.

## Kết luận

Hàm `fromEvent()` là một Creation Operator mạnh mẽ có thể được sử dụng để tạo các Observable từ các sự kiện DOM. Hàm này có thể được sử dụng để tạo các luồng dữ liệu đơn giản hoặc phức tạp tùy thuộc vào nhu cầu của bạn.
