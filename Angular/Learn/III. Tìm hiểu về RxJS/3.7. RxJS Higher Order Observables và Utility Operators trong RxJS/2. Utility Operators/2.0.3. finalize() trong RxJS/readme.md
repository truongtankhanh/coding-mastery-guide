## Toán tử finalize() trong RxJS

**Khái niệm:**

Toán tử `finalize` là một **Utility Operator** trong RxJS dùng để **thực hiện một hành động bất kể Observable kết thúc như thế nào (hoàn tất hay lỗi)**.

**Ngữ cảnh:**

Toán tử `finalize` thường được sử dụng trong Angular để:

- **Dọn dẹp tài nguyên**
- **Hủy đăng ký**
- **Thực hiện các thao tác cuối cùng**

**Cách sử dụng:**

Toán tử `finalize` nhận một tham số:

- **Callback function**: Hàm này được thực hiện bất kể Observable kết thúc như thế nào.

**Ví dụ:**

```typescript
import { of, finalize } from "rxjs";

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// In ra "Hoàn tất" bất kể Observable kết thúc như thế nào
observable1.pipe(finalize(() => console.log("Hoàn tất"))).subscribe();

// In ra:
// 1
// 2
// 3
// Hoàn tất
```

**Lưu ý:**

- Toán tử `finalize` **luôn** được thực hiện, bất kể Observable kết thúc như thế nào.
- Toán tử `finalize` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

- RxJS finalize: [https://rxjs.dev/api/operators/finalize](https://rxjs.dev/api/operators/finalize)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `finalize` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ:**

```typescript
import { of, finalize, map, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// In ra "Hoàn tất" bất kể Observable kết thúc như thế nào, sau đó lấy bình phương của các giá trị chẵn và chỉ lấy các giá trị lớn hơn 10
observable1
  .pipe(
    finalize(() => console.log("Hoàn tất")),
    map((value) => value * value),
    filter((value) => value > 10)
  )
  .subscribe();

// In ra:
// 1
// 2
// 3
// Hoàn tất
// 16
// 36
```

## Kết luận

Toán tử `finalize` là một Utility Operator mạnh mẽ để thực hiện các thao tác cuối cùng bất kể Observable kết thúc như thế nào trong Angular. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.

**Lựa chọn toán tử nào sử dụng:**

- Sử dụng `finalize` khi bạn muốn **thực hiện một hành động bất kể Observable kết thúc như thế nào**.

**Lưu ý:**

- Toán tử `finalize` **luôn** được thực hiện, bất kể Observable kết thúc như thế nào.
- Toán tử `finalize` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ thực tế:**

- **Dọn dẹp tài nguyên**: Sử dụng `finalize` để giải phóng bộ nhớ sau khi Observable hoàn tất.
- **Hủy đăng ký**: Sử dụng `finalize` để hủy đăng ký subscription sau khi Observable hoàn tất.
- **Thực hiện các thao tác cuối cùng**: Sử dụng `finalize` để thực hiện các thao tác như ghi log sau khi Observable hoàn
