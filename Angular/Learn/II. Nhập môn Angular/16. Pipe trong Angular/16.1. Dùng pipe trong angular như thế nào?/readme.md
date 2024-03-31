## Sử dụng Pipe trong Angular

**Khái niệm:**

Pipe là một hàm được sử dụng để định dạng dữ liệu trước khi hiển thị trên giao diện.

**Ngữ cảnh:**

Pipe được sử dụng trong nhiều trường hợp, ví dụ như:

- **Định dạng số:** Có thể sử dụng pipe để định dạng số như tiền tệ, phần trăm, v.v.
- **Định dạng ngày tháng:** Có thể sử dụng pipe để định dạng ngày tháng như ngày tháng dài, ngày tháng ngắn, v.v.
- **Định dạng chuỗi:** Có thể sử dụng pipe để định dạng chuỗi như viết hoa chữ cái đầu tiên, viết hoa tất cả các chữ cái, v.v.

**Cách sử dụng:**

Có hai cách để sử dụng pipe:

**1. Sử dụng pipe trong template:**

```html
{{ value | pipeName }}
```

**2. Sử dụng pipe trong component:**

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipeName",
})
export class PipeName implements PipeTransform {
  transform(value: any, args?: any): any {
    // ...
  }
}
```

**Ví dụ:**

```html
{{ 123456789 | currency }}
```

**Output:**

```html
$123,456,789.00
```

**Lưu ý:**

- Có thể sử dụng nhiều pipe cùng lúc.
- Có thể tạo ra pipe của riêng bạn.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/pipes](https://angular.io/guide/pipes)

**Một số ví dụ nâng cao về sử dụng pipe:**

- **Tạo ra một filter để lọc dữ liệu dựa trên nhiều tiêu chí.**
- **Tạo ra một directive để hiển thị dữ liệu theo nhiều cách khác nhau.**
- **Tái sử dụng code bằng cách tạo ra một pipe chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về cách sử dụng pipe trong Angular.**
