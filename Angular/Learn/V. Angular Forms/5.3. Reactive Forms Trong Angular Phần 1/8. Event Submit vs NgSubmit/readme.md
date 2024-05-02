## Event Submit trong Angular Forms

**Khái niệm:**

**Event Submit** là một sự kiện xảy ra khi người dùng submit form.

**Ngữ cảnh:**

**Event Submit** được sử dụng trong các trường hợp sau:

- **Xử lý dữ liệu form sau khi submit:** Gửi dữ liệu form đến server, lưu trữ dữ liệu vào database, v.v.
- **Hiển thị lỗi validation cho người dùng:** Hiển thị thông báo lỗi nếu dữ liệu nhập vào không hợp lệ.
- **Điều hướng đến trang khác:** Chuyển hướng người dùng đến trang khác sau khi submit form thành công.

**Cách sử dụng:**

**1. Bắt event submit:**

Sử dụng directive **(submit)** để bắt event submit trong template.

**Ví dụ:**

```html
<form (submit)="onSubmit()">
  <button type="submit">Submit</button>
</form>
```

**2. Xử lý dữ liệu form:**

Sử dụng method **onSubmit()** trong component để xử lý dữ liệu form sau khi submit.

**Ví dụ:**

```typescript
onSubmit() {
  if (this.myForm.valid) {
    // Gửi dữ liệu form đến server
    // Lưu trữ dữ liệu form vào database
    // ...
  } else {
    // Hiển thị lỗi validation cho người dùng
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
  <input type="text" formControlName="name" />
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
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Gửi dữ liệu form đến server
      // Lưu trữ dữ liệu form vào database
      // ...
      console.log(this.myForm.value);
    } else {
      // Hiển thị lỗi validation cho người dùng
      alert("Tên không được để trống.");
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
- Dữ liệu form sẽ được log ra console nếu dữ liệu hợp lệ.

**6. Giải thích:**

- Directive **(submit)** được sử dụng để bắt event submit trong template.
- Method **onSubmit()** được sử dụng để xử lý dữ liệu form sau khi submit.
- Trong method **onSubmit()**, chúng ta kiểm tra xem dữ liệu form có hợp lệ hay không.
- Nếu dữ liệu hợp lệ, chúng ta có thể gửi dữ liệu đến server, lưu trữ dữ liệu vào database, v.v.
- Nếu dữ liệu không hợp lệ, chúng ta hiển thị thông báo lỗi cho người dùng.

**Hỏi đáp:**

**Câu hỏi:** Làm thế nào để hiển thị lỗi validation cho người dùng?

**Trả lời:** Sử dụng directive **ngIf** để hiển thị thông báo lỗi khi dữ liệu không hợp lệ.

**Câu hỏi:** Làm thế nào để chuyển hướng đến trang khác sau khi submit form thành công?

**Trả lời:** Sử dụng service `Router` để chuyển hướng đến trang khác.

**Kết luận:**

**Event Submit** là một sự kiện quan trọng trong Angular Forms. Hiểu rõ cách sử dụng event submit giúp bạn xử lý dữ liệu form sau khi submit một cách hiệu quả.

---

---

## NgSubmit trong Angular Forms

**Khái niệm:**

**NgSubmit** là một directive được sử dụng để bắt event submit trong Angular Forms.

**Ngữ cảnh:**

**NgSubmit** được sử dụng trong các trường hợp sau:

- **Xử lý dữ liệu form sau khi submit:** Gửi dữ liệu form đến server, lưu trữ dữ liệu vào database, v.v.
- **Hiển thị lỗi validation cho người dùng:** Hiển thị thông báo lỗi nếu dữ liệu nhập vào không hợp lệ.
- **Điều hướng đến trang khác:** Chuyển hướng người dùng đến trang khác sau khi submit form thành công.

**Cách sử dụng:**

**1. Bắt event submit:**

Sử dụng directive **(ngSubmit)** trong template để bắt event submit.

**Ví dụ:**

```html
<form (ngSubmit)="onSubmit()">
  <button type="submit">Submit</button>
</form>
```

**2. Xử lý dữ liệu form:**

Sử dụng method **onSubmit()** trong component để xử lý dữ liệu form sau khi submit.

**Ví dụ:**

```typescript
onSubmit() {
  if (this.myForm.valid) {
    // Gửi dữ liệu form đến server
    // Lưu trữ dữ liệu form vào database
    // ...
    console.log(this.myForm.value);
  } else {
    // Hiển thị lỗi validation cho người dùng
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
<form (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" />
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
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Gửi dữ liệu form đến server
      // Lưu trữ dữ liệu form vào database
      // ...
      console.log(this.myForm.value);
    } else {
      // Hiển thị lỗi validation cho người dùng
      alert("Tên không được để trống.");
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
- Dữ liệu form sẽ được log ra console nếu dữ liệu hợp lệ.

**6. Giải thích:**

- Directive **(ngSubmit)** được sử dụng để bắt event submit trong template.
- Method **onSubmit()** được sử dụng để xử lý dữ liệu form sau khi submit.
- Trong method **onSubmit()**, chúng ta kiểm tra xem dữ liệu form có hợp lệ hay không.
- Nếu dữ liệu hợp lệ, chúng ta có thể gửi dữ liệu đến server, lưu trữ dữ liệu vào database, v.v.
- Nếu dữ liệu không hợp lệ, chúng ta hiển thị thông báo lỗi cho người dùng.

**Hỏi đáp:**

**Câu hỏi:** Làm thế nào để hiển thị lỗi validation cho người dùng?

**Trả lời:** Sử dụng directive **ngIf** để hiển thị thông báo lỗi khi dữ liệu không hợp lệ.

**Câu hỏi:** Làm thế nào để chuyển hướng đến trang khác sau khi submit form thành công?

**Trả lời:** Sử dụng service `Router` để chuyển hướng đến trang khác.

**Kết luận:**

**NgSubmit** là một directive đơn giản và hiệu quả để bắt event submit trong Angular Forms. Sử dụng **NgSubmit** giúp bạn dễ dàng xử lý dữ liệu form sau khi submit.
