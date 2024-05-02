## Binding Form trong Angular Forms

**Khái niệm:**

**Binding Form** là quá trình kết nối dữ liệu giữa component và template trong Angular Forms. Có hai loại binding form chính:

- **One-way binding:** Dữ liệu chỉ chảy từ component sang template.
- **Two-way binding:** Dữ liệu chảy từ component sang template và ngược lại.

**Ngữ cảnh:**

**Binding Form** được sử dụng trong các trường hợp sau:

- **Hiển thị dữ liệu form:** Dữ liệu từ component được hiển thị trong template.
- **Cập nhật dữ liệu form:** Dữ liệu được nhập vào form trong template được cập nhật vào component.
- **Validate dữ liệu form:** Dữ liệu được nhập vào form trong template được validate trong component.

**Cách sử dụng:**

**1. One-way binding:**

Sử dụng directive **ngModel** để thực hiện one-way binding.

**Ví dụ:**

**app.component.html:**

```html
<h1>{{ name }}</h1>
<input type="text" [(ngModel)]="name" />
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

**2. Two-way binding:**

Sử dụng directive **[(ngModel)]** để thực hiện two-way binding.

**Ví dụ:**

**app.component.html:**

```html
<h1>{{ name }}</h1>
<input type="text" [(ngModel)]="name" />
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

**3. Ví dụ chi tiết:**

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
<form (submit)="onSubmit()">
  <input type="text" [(ngModel)]="name" required />
  <button type="submit">Submit</button>
</form>
```

**app.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

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

  onSubmit() {
    if (this.name === "") {
      alert("Tên không được để trống.");
    } else {
      alert("Tên hợp lệ.");
    }
  }
}
```

**3. Khởi chạy ứng dụng:**

```
ng serve
```

**4. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**5. Kết quả:**

- Nhập tên vào input field.
- Nhấp vào nút "Submit".
- Lỗi validation sẽ được hiển thị nếu tên không hợp lệ.

**6. Giải thích:**

- Directive **ngModel** được sử dụng để thực hiện one-way binding giữa component và template.
- Directive **[(ngModel)]** được sử dụng để thực hiện two-way binding giữa component và template.
- Method **onSubmit()** được gọi khi người dùng submit form.
- Method **onSubmit()** kiểm tra xem dữ liệu hợp lệ hay không và hiển thị thông báo cho người dùng.

**Hỏi đáp:**

**Câu hỏi:** Làm thế nào để sử dụng directive **ngModel** với FormControl?

**Trả lời:** Sử dụng directive **formControlName** thay vì **ngModel**.

**Câu hỏi:** Làm thế nào để sử dụng directive **[(ngModel)]** với FormGroup?

**Trả lời:** Sử dụng directive **formGroup** thay vì **ngModel**.
