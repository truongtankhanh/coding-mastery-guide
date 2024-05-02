## Cập nhật giá trị cho Reactive Forms qua patchValue hoặc setValue

**Khái niệm:**

**patchValue** và **setValue** là hai phương thức được sử dụng để cập nhật giá trị cho các **FormControl** trong **Reactive Forms**.

**Ngữ cảnh:**

**patchValue** và **setValue** được sử dụng trong các trường hợp sau:

- **Cập nhật một phần giá trị của form:** Sử dụng **patchValue** để cập nhật một phần giá trị của form mà không ảnh hưởng đến các phần còn lại.
- **Cập nhật toàn bộ giá trị của form:** Sử dụng **setValue** để cập nhật toàn bộ giá trị của form, bao gồm cả các giá trị mặc định.
- **Cập nhật giá trị động:** Sử dụng **patchValue** hoặc **setValue** để cập nhật giá trị form dựa trên dữ liệu từ API hoặc từ các nguồn khác.

**Cách sử dụng:**

**1. patchValue:**

Sử dụng **patchValue** để cập nhật một phần giá trị của form.

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
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Submit form
      console.log(this.myForm.value);
    }
  }

  updateName() {
    this.myForm.patchValue({
      name: "John Doe",
    });
  }
}
```

**2. setValue:**

Sử dụng **setValue** để cập nhật toàn bộ giá trị của form.

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
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Submit form
      console.log(this.myForm.value);
    }
  }

  resetForm() {
    this.myForm.setValue({
      name: "",
      email: "",
    });
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
<form [formGroup]="myForm" (submit)="onSubmit()">
  <input type="text" formControlName="name" />
  <input type="email" formControlName="email" />
  <button type="submit">Submit</button>
  <button type="button" (click)="updateName()">Cập nhật tên</button>
  <button type="button" (click)="resetForm()">Reset form</button>
</form>
```

**app.component.ts:**

```typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Submit form
      console.log(this.myForm.value);
    }
  }

    updateName() {
    this.myForm.patchValue({
        name: 'John Doe',
    });
    }
```

**Giải thích:**

- `this.myForm.patchValue` - Sử dụng method `patchValue` trên FormGroup `myForm`.
- `{ name: 'John Doe' }` - Đây là một object chứa các thuộc tính cần cập nhật. Trong trường hợp này, chúng ta chỉ cập nhật thuộc tính `name` với giá trị mới là `'John Doe'`.

**Khi bạn gọi phương thức `updateName()`, giá trị của trường `name` trong form group sẽ được cập nhật thành `'John Doe'` mà không ảnh hưởng đến giá trị của trường `email`.**

**Ngoài ra, bạn có thể mở rộng phương thức `updateName()` để nhận tham số là tên mới cho trường `name`:**

```typescript
updateName(newName: string) {
  this.myForm.patchValue({
    name: newName,
  });
}
```

**Trong trường hợp này, bạn có thể gọi phương thức `updateName()` với tên mới mong muốn như sau:**

```html
<button type="button" (click)="updateName('Jane Doe')">Cập nhật tên</button>
```

## Các bước tiếp theo

Bây giờ bạn đã thấy cách sử dụng `patchValue` để cập nhật một phần giá trị của form. Bạn có thể tìm hiểu thêm về:

- **setValue:** Sử dụng `setValue` để cập nhật toàn bộ giá trị của form.
- **Validators:** Tìm hiểu về các Validators có sẵn trong Angular Forms để validate dữ liệu nhập vào form.
- **Submit form:** Xử lý dữ liệu form sau khi submit và hiển thị lỗi validation cho người dùng.
