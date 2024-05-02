## Tích hợp Angular Forms

**Khái niệm:**

**Angular Forms** là một module trong Angular giúp tạo và quản lý các form trong ứng dụng web. Angular Forms cung cấp hai cách chính để tạo form:

- **Template-driven forms:** Sử dụng directive **ngModel** và **ngClass** để validate dữ liệu trực tiếp trong template.
- **Reactive forms:** Sử dụng FormGroup, FormControl và Validators để validate dữ liệu trong component.

**Ngữ cảnh:**

**Angular Forms** được sử dụng trong các trường hợp sau:

- **Tạo form đơn giản:** Thích hợp cho các form nhỏ gọn với ít field và logic validate đơn giản.
- **Tạo form phức tạp:** Phù hợp cho các form với nhiều field, nested forms, logic validate phức tạp.
- **Tách biệt logic và giao diện:** Giúp code dễ đọc, dễ bảo trì hơn.
- **Kiểm soát dữ liệu tốt hơn:** Cho phép truy cập và cập nhật dữ liệu form dễ dàng.

**Cách sử dụng:**

**1. Template-driven forms:**

- Sử dụng directive **ngModel** để bind dữ liệu giữa component và template.
- Sử dụng directive **required** để validate dữ liệu không được để trống.
- Sử dụng directive **ngClass** để hiển thị lỗi validation.

**Ví dụ:**

```html
<h1>{{ name }}</h1>
<form (submit)="onSubmit()">
  <input type="text" name="name" [(ngModel)]="name" required />
  <button type="submit">Submit</button>
</form>
```

**2. Reactive forms:**

- Sử dụng **FormBuilder** để tạo các object model cho form.
- Sử dụng **FormGroup** để biểu diễn một nhóm các field trong form.
- Sử dụng **FormControl** để biểu diễn một field trong form.
- Sử dụng **Validators** để validate dữ liệu của field.

**Ví dụ:**

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
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Submit form
    }
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
  <input type="text" name="name" [(ngModel)]="name" required />
  <button type="submit">Submit</button>
</form>
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

  ngOnInit() {}

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

- Directive **ngModel** được sử dụng để bind dữ liệu giữa component và template.
- Directive **required** được sử dụng để validate dữ liệu không được để trống.
- Method **onSubmit()** được gọi khi người dùng submit form.
- Method **onSubmit()** kiểm tra xem dữ liệu hợp lệ hay không và hiển thị thông báo cho người dùng.
