## Viết Custom Pipe trong Angular

**Khái niệm:**

Custom pipe là một hàm được viết riêng để định dạng dữ liệu theo nhu cầu cụ thể.

**Ngữ cảnh:**

Custom pipe được sử dụng trong nhiều trường hợp, ví dụ như:

- **Định dạng dữ liệu theo yêu cầu nghiệp vụ:** Có thể sử dụng custom pipe để định dạng dữ liệu theo yêu cầu nghiệp vụ cụ thể, ví dụ như định dạng số điện thoại theo quốc gia, định dạng ngày tháng theo format riêng, v.v.
- **Tái sử dụng code:** Có thể sử dụng custom pipe để tái sử dụng code định dạng dữ liệu trong nhiều component khác nhau.

**Cách sử dụng:**

Để viết custom pipe, cần thực hiện các bước sau:

1. **Tạo file TypeScript mới.**
2. **Import các thư viện cần thiết:**

```typescript
import { Pipe, PipeTransform } from "@angular/core";
```

3. **Khai báo pipe:**

```typescript
@Pipe({
  name: "pipeName",
})
export class PipeName implements PipeTransform {
  // ...
}
```

4. **Viết hàm transform:**

```typescript
transform(value: any, args?: any): any {
  // ...
}
```

5. **Sử dụng pipe trong template:**

```html
{{ value | pipeName }}
```

**Ví dụ:**

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phone",
})
export class PhonePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    if (!value) {
      return "";
    }

    const countryCode = args[0] || "+84";
    return `${countryCode} ${value}`;
  }
}
```

**Sử dụng:**

```html
{{ phoneNumber | phone:'+1' }}
```

**Output:**

```html
+1 1234567890
```

**Lưu ý:**

- Có thể sử dụng nhiều custom pipe cùng lúc.
- Có thể sử dụng pipe built-in kết hợp với custom pipe.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/pipes-custom-data-trans](https://angular.io/guide/pipes-custom-data-trans)

**Một số ví dụ nâng cao về sử dụng custom pipe:**

- **Tạo ra một filter để lọc dữ liệu dựa trên nhiều tiêu chí.**
- **Tạo ra một directive để hiển thị dữ liệu theo nhiều cách khác nhau.**
- **Tái sử dụng code bằng cách tạo ra một pipe chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về cách viết custom pipe trong Angular.**
