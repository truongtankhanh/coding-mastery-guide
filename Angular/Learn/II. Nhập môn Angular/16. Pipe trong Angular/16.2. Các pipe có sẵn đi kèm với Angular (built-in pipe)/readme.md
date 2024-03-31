## Các Pipe có sẵn đi kèm với Angular (Built-in Pipe)

**Khái niệm:**

Pipe là một hàm được sử dụng để định dạng dữ liệu trước khi hiển thị trên giao diện. Angular cung cấp sẵn một số pipe built-in để sử dụng cho các mục đích phổ biến.

**Ngữ cảnh:**

Pipe built-in được sử dụng trong nhiều trường hợp, ví dụ như:

- **Định dạng số:** Có thể sử dụng pipe built-in để định dạng số như tiền tệ, phần trăm, v.v.
- **Định dạng ngày tháng:** Có thể sử dụng pipe built-in để định dạng ngày tháng như ngày tháng dài, ngày tháng ngắn, v.v.
- **Định dạng chuỗi:** Có thể sử dụng pipe built-in để định dạng chuỗi như viết hoa chữ cái đầu tiên, viết hoa tất cả các chữ cái, v.v.

**Cách sử dụng:**

Có hai cách để sử dụng pipe built-in:

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

**Danh sách các pipe built-in:**

- **AsyncPipe:** Chuyển đổi Observable hoặc Promise thành giá trị có thể hiển thị.
- **CurrencyPipe:** Định dạng số thành định dạng tiền tệ.
- **DatePipe:** Định dạng ngày tháng thành chuỗi.
- **DecimalPipe:** Định dạng số thập phân.
- **JsonPipe:** Chuyển đổi một object thành JSON string.
- **LowerCasePipe:** Chuyển đổi chuỗi sang chữ thường.
- **UpperCasePipe:** Chuyển đổi chuỗi sang chữ hoa.
- **PercentPipe:** Định dạng số thành phần trăm.

**Ví dụ:**

```html
{{ 123456789 | currency }}
```

**Output:**

```html
$123,456,789.00
```

**Lưu ý:**

- Có thể sử dụng nhiều pipe built-in cùng lúc.
- Có thể tạo ra pipe của riêng bạn.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/pipes](https://angular.io/guide/pipes)

**Một số ví dụ nâng cao về sử dụng pipe built-in:**

- **Tạo ra một filter để lọc dữ liệu dựa trên nhiều tiêu chí.**
- **Tạo ra một directive để hiển thị dữ liệu theo nhiều cách khác nhau.**
- **Tái sử dụng code bằng cách tạo ra một pipe chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về các pipe built-in đi kèm với Angular.**
