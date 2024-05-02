## Angular Forms - ngModel, [ngModel] và [(ngModel)]

**Khái niệm:**

**ngModel**, **[ngModel]** và **[(ngModel)]** là ba directive Angular được sử dụng để liên kết dữ liệu giữa component và template trong Angular Forms.

**NgModel:**

- Là directive Angular giúp liên kết dữ liệu một chiều từ component sang template.
- Cho phép cập nhật giá trị của element HTML trong template dựa trên giá trị của property trong component.

**[ngModel]:**

- Là directive Angular giúp liên kết dữ liệu một chiều từ template sang component.
- Cho phép cập nhật giá trị của property trong component dựa trên giá trị của element HTML trong template.

**[(ngModel)]:**

- Là directive Angular giúp liên kết dữ liệu hai chiều giữa component và template.
- Cho phép cập nhật giá trị của element HTML trong template và property trong component cùng lúc.

**Ngữ cảnh:**

**ngModel**, **[ngModel]** và **[(ngModel)]** được sử dụng trong các trường hợp sau:

- Tạo các form đơn giản với một vài input fields.
- Tạo các form phức tạp với nhiều input fields, nested forms và validation.
- Thu thập dữ liệu từ người dùng.
- Cập nhật dữ liệu trong ứng dụng dựa trên input của người dùng.

**Cách sử dụng:**

**1. ngModel:**

Sử dụng directive **ngModel** để liên kết dữ liệu một chiều từ component sang template:

```html
<input type="text" name="name" [(ngModel)]="name" />
```

**2. [ngModel]:**

Sử dụng directive **[ngModel]** để liên kết dữ liệu một chiều từ template sang component:

```html
<input type="text" name="name" [(ngModel)]="name" />
```

**3. [(ngModel)]:**

Sử dụng directive **[(ngModel)]** để liên kết dữ liệu hai chiều giữa component và template:

```html
<input type="text" name="name" [(ngModel)]="name" />
```

**4. Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
└── app.module.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<h1>{{ name }}</h1>
<input type="text" name="name" [(ngModel)]="name" />
```

**app.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  name: string;

  constructor() {}

  ngOnInit() {
    this.name = "John Doe";
  }
}
```

**5. Khởi chạy ứng dụng:**

```
ng serve
```

**6. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**7. Kết quả:**

- Nhập tên mới vào input field.
- Tên mới sẽ được hiển thị trên heading.

**8. Giải thích:**

- Directive **[(ngModel)]** được sử dụng để liên kết dữ liệu hai chiều giữa component và template.
- Khi người dùng thay đổi giá trị của input field, giá trị của property **name** trong component cũng được cập nhật.
- Khi giá trị của property **name** trong component được cập nhật, giá trị của input field cũng được cập nhật.

**9. Hỏi đáp:**

**Câu hỏi:** Làm thế nào để tôi sử dụng **ngModel** với các element HTML khác?

**Trả lời:** **ngModel** có thể được sử dụng với nhiều element HTML khác như textarea, select, checkbox, radio button, etc.

**Câu hỏi:** Làm thế nào để tôi validate dữ liệu trong form?

**Trả lời:** Bạn có thể sử dụng Angular Validators để validate dữ liệu trong form.

**Kết luận:**

**ngModel**, **[ngModel]** và **[(ngModel)]** là ba directive Angular quan trọng được sử dụng để liên kết dữ liệu giữa component và template trong Angular Forms. Bạn có thể sử dụng **ngModel**, **[ngModel]** và **[(ngModel)]** để tạo các form đơn giản hoặc phức tạp, thu thập dữ liệu từ người dùng và cập nhật dữ liệu trong ứng dụng dựa trên input của người dùng.
