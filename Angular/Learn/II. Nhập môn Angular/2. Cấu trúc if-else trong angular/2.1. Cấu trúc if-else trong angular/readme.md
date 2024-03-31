## Cấu trúc if-else trong Angular

**Khái niệm:**

Cấu trúc `if-else` trong Angular là một directive cho phép hiển thị hoặc ẩn một phần tử HTML dựa trên điều kiện được đưa ra.

**Ngữ cảnh:**

Cấu trúc `if-else` được sử dụng để:

- Hiển thị nội dung khác nhau dựa trên giá trị của một biến.
- Hiển thị hoặc ẩn các phần tử HTML tùy thuộc vào hành động của người dùng.
- Tạo giao diện người dùng động và tương tác.

**Cách sử dụng:**

Cấu trúc `if-else` được sử dụng bằng cách sử dụng directive `*ngIf` trong template HTML. Directive `*ngIf` nhận một expression làm đầu vào và chỉ hiển thị phần tử HTML nếu expression trả về giá trị `true`.

**Ví dụ:**

```html
<div *ngIf="condition">
  <h1>Đây là nội dung được hiển thị nếu condition là true</h1>
</div>
<div *ngIf="!condition">
  <h1>Đây là nội dung được hiển thị nếu condition là false</h1>
</div>
```

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng động và tương tác.
- Tăng hiệu quả phát triển ứng dụng.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Directive `*ngIf` chỉ có thể được sử dụng với một phần tử HTML duy nhất.
- Để sử dụng `if-else` với nhiều phần tử HTML, bạn cần sử dụng directive `*ngSwitch`.

**Tài liệu tham khảo:**

- Sử dụng If-Else trong Angular: [https://levunguyen.com/laptrinhweb/2021/06/05/su-dung-data-binding-trong-angular/](https://levunguyen.com/laptrinhweb/2021/06/05/su-dung-data-binding-trong-angular/)

### Một số ví dụ nâng cao về cấu trúc if-else:

- **Sử dụng `else if`:**

```html
<div *ngIf="condition1">
  <h1>Đây là nội dung được hiển thị nếu condition1 là true</h1>
</div>
<div *ngIf="condition2">
  <h1>Đây là nội dung được hiển thị nếu condition2 là true</h1>
</div>
<div *ngIf="!condition1 && !condition2">
  <h1>
    Đây là nội dung được hiển thị nếu cả condition1 và condition2 đều là false
  </h1>
</div>
```

- **Sử dụng `ngSwitch`:**

```html
<div [ngSwitch]="variable">
  <div *ngSwitchCase="value1">
    <h1>Đây là nội dung được hiển thị nếu variable bằng value1</h1>
  </div>
  <div *ngSwitchCase="value2">
    <h1>Đây là nội dung được hiển thị nếu variable bằng value2</h1>
  </div>
  <div *ngSwitchDefault>
    <h1>
      Đây là nội dung được hiển thị nếu variable không bằng value1 hoặc value2
    </h1>
  </div>
</div>
```

### Một số best practices khi sử dụng cấu trúc if-else:

- Sử dụng cấu trúc `if-else` cho các trường hợp cần thiết.
- Sử dụng directive `*ngIf` để hiển thị hoặc ẩn các phần tử HTML.
- Sử dụng directive `*ngSwitch` để hiển thị nội dung khác nhau dựa trên giá trị của một biến.
- Sử dụng pipe để format dữ liệu trước khi hiển thị trên giao diện người dùng.

**Kết luận:**

Cấu trúc `if-else` là một directive quan trọng trong Angular giúp bạn tạo giao diện người dùng động và tương tác. Sử dụng cấu trúc `if-else` một cách hiệu quả sẽ giúp bạn phát triển ứng dụng Angular nhanh chóng và hiệu quả hơn.
