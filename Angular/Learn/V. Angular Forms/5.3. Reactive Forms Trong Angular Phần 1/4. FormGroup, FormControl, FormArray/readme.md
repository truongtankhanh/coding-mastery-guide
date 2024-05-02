## FormGroup trong Angular Forms

**Khái niệm:**

**FormGroup** là một class trong Angular Forms được sử dụng để biểu diễn một nhóm các field trong form. FormGroup có thể chứa các FormControl, FormGroup khác và các giá trị đơn lẻ.

**Ngữ cảnh:**

**FormGroup** được sử dụng trong các trường hợp sau:

- **Tạo form phức tạp:** Phù hợp cho các form với nhiều field, nested forms, logic validate phức tạp.
- **Tổ chức các field:** Giúp code dễ đọc, dễ bảo trì hơn.
- **Kiểm soát dữ liệu tốt hơn:** Cho phép truy cập và cập nhật dữ liệu form dễ dàng.

**Cách sử dụng:**

**1. Tạo FormGroup:**

Sử dụng **FormBuilder** hoặc constructor của FormGroup để tạo một FormGroup.

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
}
```

**2. Truy cập các field:**

Sử dụng **get()** method để truy cập các field trong FormGroup.

**Ví dụ:**

```typescript
const name = this.myForm.get("name").value;
const email = this.myForm.get("email").value;
```

**3. Validate dữ liệu:**

Sử dụng **Validators** để validate dữ liệu của các field trong FormGroup.

**Ví dụ:**

```typescript
this.myForm = this.fb.group({
  name: ["", Validators.required],
  email: ["", [Validators.required, Validators.email]],
});
```

**4. Submit form:**

Kiểm tra **myForm.valid** trước khi submit form để đảm bảo dữ liệu hợp lệ.

**Ví dụ:**

```typescript
onSubmit() {
  if (this.myForm.valid) {
    // Submit form
  }
}
```

**5. Ví dụ chi tiết:**

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
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Submit form
      console.log(this.myForm.value);
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

- Nhập tên và email vào form.
- Nhấp vào nút "Submit".
- Dữ liệu form sẽ được log ra console nếu dữ liệu hợp lệ.

**6. Giải thích:**

- **FormBuilder** được sử dụng để tạo FormGroup.
- **FormGroup** được sử dụng để biểu diễn một nhóm các field trong form.
- **get()** method được sử dụng để truy cập các field trong FormGroup.
- **Validators** được sử dụng để validate dữ liệu của các field trong FormGroup.
- **Directive formGroup** được sử dụng để bind FormGroup với template.
- **Method onSubmit()** được gọi khi người dùng

---

---

## FormControl trong Angular Forms

**Khái niệm:**

**FormControl** là một class trong Angular Forms được sử dụng để biểu diễn một field trong form. FormControl có thể chứa giá trị đơn lẻ, validator và các async validator.

**Ngữ cảnh:**

**FormControl** được sử dụng trong các trường hợp sau:

- **Tạo form đơn giản:** Thích hợp cho các form nhỏ gọn với ít field và logic validate đơn giản.
- **Tạo form phức tạp:** Có thể sử dụng FormControl kết hợp với FormGroup để tạo form phức tạp với nhiều field, nested forms, logic validate phức tạp.
- **Kiểm soát dữ liệu tốt hơn:** Cho phép truy cập và cập nhật dữ liệu form dễ dàng.

**Cách sử dụng:**

**1. Tạo FormControl:**

Sử dụng constructor của FormControl để tạo một FormControl.

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
  name: FormControl;

  constructor() {}

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
  }
}
```

**2. Truy cập giá trị:**

Sử dụng **value** property để truy cập giá trị của FormControl.

**Ví dụ:**

```typescript
const name = this.name.value;
```

**3. Validate dữ liệu:**

Sử dụng **Validators** để validate dữ liệu của FormControl.

**Ví dụ:**

```typescript
this.name = new FormControl("", Validators.required);
```

**4. Submit form:**

Kiểm tra **name.valid** trước khi submit form để đảm bảo dữ liệu hợp lệ.

**Ví dụ:**

```typescript
onSubmit() {
  if (this.name.valid) {
    // Submit form
  }
}
```

**5. Ví dụ chi tiết:**

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
  <input type="text" [(ngModel)]="name" />
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
  name: FormControl;

  constructor() {}

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
  }

  onSubmit() {
    if (this.name.valid) {
      // Submit form
      console.log(this.name.value);
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

- **FormControl** được sử dụng để biểu diễn một field trong form.
- **value** property được sử dụng để truy cập giá trị của FormControl.
- **Validators** được sử dụng để validate dữ liệu của FormControl.
- **Directive ngModel** được sử dụng để bind giá trị của FormControl với template.
- **Method onSubmit()** được gọi khi người dùng submit form.

---

---

## FormArray trong Angular Forms

**Khái niệm:**

**FormArray** là một class trong Angular Forms được sử dụng để biểu diễn một tập hợp các FormControl có cùng kiểu dữ liệu. FormArray có thể chứa các FormControl, FormArray khác và các giá trị đơn lẻ.

**Ngữ cảnh:**

**FormArray** được sử dụng trong các trường hợp sau:

- **Tạo form động:** Phù hợp cho các form với số lượng field không xác định trước, ví dụ: danh sách sản phẩm, danh sách người dùng.
- **Tạo form lặp lại:** Phù hợp cho các form với các field lặp lại, ví dụ: form đăng ký nhiều người tham gia.
- **Kiểm soát dữ liệu tốt hơn:** Cho phép truy cập và cập nhật dữ liệu form dễ dàng.

**Cách sử dụng:**

**1. Tạo FormArray:**

Sử dụng **FormBuilder** hoặc constructor của FormArray để tạo một FormArray.

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
      products: this.fb.array([this.fb.control(""), this.fb.control("")]),
    });
  }
}
```

**2. Truy cập các field:**

Sử dụng **at()** method để truy cập các FormControl trong FormArray.

**Ví dụ:**

```typescript
const firstProduct = this.myForm.get("products").at(0).value;
const secondProduct = this.myForm.get("products").at(1).value;
```

**3. Thêm field:**

Sử dụng **push()** method để thêm field vào FormArray.

**Ví dụ:**

```typescript
this.myForm.get("products").push(this.fb.control(""));
```

**4. Xóa field:**

Sử dụng **removeAt()** method để xóa field khỏi FormArray.

**Ví dụ:**

```typescript
this.myForm.get("products").removeAt(1);
```

**5. Ví dụ chi tiết:**

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
<h1>Danh sách sản phẩm</h1>
<form [formGroup]="myForm">
  <div formArrayName="products">
    <div *ngFor="let product of myForm.get('products').controls; let i = index">
      <input type="text" [(ngModel)]="product.value" />
      <button type="button" (click)="removeProduct(i)">Xóa</button>
    </div>
  </div>
  <button type="button" (click)="addProduct()">Thêm sản phẩm</button>
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
      products: this.fb.array([this.fb.control(""), this.fb.control("")]),
    });
  }

  addProduct() {
    this.myForm.get("products").push(this.fb.control(""));
  }

  removeProduct(i: number) {
    this.myForm.get("products").removeAt(i);
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

- Nhập tên sản phẩm vào các input field.
- Nhấp vào nút "Thêm sản phẩm" để thêm field mới.
- Nhấp vào nút "Xóa" để xóa field
