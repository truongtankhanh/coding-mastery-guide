## Angular Forms: Sync Validators (Đồng bộ)

**Khái niệm:**

Sync validators (Đồng bộ) là các hàm kiểm tra giá trị đầu vào của form control (kiểm soát biểu mẫu) **ngay lập tức**, đồng thời với việc người dùng nhập liệu.

**Ngữ cảnh:**

Sync validators được sử dụng trong các trường hợp sau:

- Kiểm tra tính hợp lệ của dữ liệu đầu vào (ví dụ: email hợp lệ, số điện thoại hợp lệ)
- Cung cấp phản hồi tức thì cho người dùng về lỗi nhập liệu
- Ngăn chặn việc submit form với dữ liệu không hợp lệ

**Cách sử dụng:**

Có hai cách để sử dụng sync validators:

1. **Sử dụng directive `required`:**

Directive `required` là một sync validator cơ bản được sử dụng để kiểm tra xem trường form có được nhập hay không.

Ví dụ:

```html
<input type="text" name="name" required [(ngModel)]="name" />
```

2. **Sử dụng custom validators:**

Bạn có thể tạo custom validators để thực hiện các logic kiểm tra phức tạp hơn.

Ví dụ:

```typescript
import { FormControl, Validators } from '@angular/forms';

export class MyValidators {
  static emailValidator(control: FormControl) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(control.value) ? null : { email: true };
  }
}

...

<input type="email" name="email" [(ngModel)]="email" [formControl]="emailControl">

this.emailControl = new FormControl('', [Validators.required, MyValidators.emailValidator]);
```

**Ví dụ:**

Dưới đây là một ví dụ về cách sử dụng sync validators để kiểm tra tính hợp lệ của email:

```html
<form [formGroup]="myForm">
  <input type="email" name="email" formControlName="email" required />
  <button type="submit">Submit</button>
</form>

... this.myForm = new FormGroup({ email: new FormControl('',
[Validators.required, Validators.email]), });
```

**Lưu ý:**

- Sync validators chỉ được thực hiện khi người dùng nhập liệu hoặc giá trị của form control thay đổi.
- Để thực hiện kiểm tra giá trị form control theo chu kỳ (ví dụ: sau mỗi 5 giây), bạn có thể sử dụng async validators.

**Tham khảo thêm:**

- Angular Forms documentation: [https://angular.io/guide/forms-overview](https://angular.io/guide/forms-overview)
