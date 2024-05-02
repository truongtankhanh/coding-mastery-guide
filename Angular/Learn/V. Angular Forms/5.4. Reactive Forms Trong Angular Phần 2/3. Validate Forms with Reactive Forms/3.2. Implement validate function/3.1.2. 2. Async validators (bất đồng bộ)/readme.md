## Angular Forms: Async Validators (Bất đồng bộ)

**Khái niệm:**

Async validators (Bất đồng bộ) là các hàm kiểm tra giá trị đầu vào của form control (kiểm soát biểu mẫu) **không đồng bộ**, nghĩa là kết quả kiểm tra sẽ được trả về sau một khoảng thời gian nhất định.

**Ngữ cảnh:**

Async validators được sử dụng trong các trường hợp sau:

- Kiểm tra tính hợp lệ của dữ liệu đầu vào cần thực hiện truy vấn đến server (ví dụ: kiểm tra email đã được đăng ký hay chưa)
- Cung cấp phản hồi cho người dùng sau khi dữ liệu được kiểm tra
- Cho phép người dùng tiếp tục nhập liệu trong khi chờ kết quả kiểm tra

**Cách sử dụng:**

Có hai cách để sử dụng async validators:

1. **Sử dụng `AsyncValidatorFn`:**

`AsyncValidatorFn` là một kiểu dữ liệu được sử dụng để định nghĩa một hàm async validator. Hàm này nhận đầu vào là một form control và trả về một Promise hoặc Observable.

Ví dụ:

```typescript
import { FormControl, Validators, AsyncValidatorFn } from '@angular/forms';

export class MyValidators {
  static emailExistsValidator(control: FormControl): Promise<any> {
    return new Promise((resolve) => {
      // Gọi API để kiểm tra email đã được đăng ký hay chưa
      setTimeout(() => {
        resolve(emailExists ? { emailExists: true } : null);
      }, 1000);
    });
  }
}

...

this.emailControl = new FormControl('', [Validators.required, MyValidators.emailExistsValidator]);
```

2. **Sử dụng `AbstractControl.setAsyncValidators`:**

Bạn có thể sử dụng phương thức `setAsyncValidators` để thêm hoặc thay đổi async validators cho một form control.

Ví dụ:

```typescript
this.emailControl.setAsyncValidators([MyValidators.emailExistsValidator]);
```

**Ví dụ:**

Dưới đây là một ví dụ về cách sử dụng async validators để kiểm tra xem email đã được đăng ký hay chưa:

```html
<form [formGroup]="myForm">
  <input type="email" name="email" formControlName="email" required />
  <button type="submit">Submit</button>
</form>

... this.myForm = new FormGroup({ email: new FormControl('',
[Validators.required, MyValidators.emailExistsValidator]), });
```

**Lưu ý:**

- Async validators được thực hiện sau khi sync validators được thực hiện.
- Khi sử dụng async validators, bạn nên hiển thị thông báo cho người dùng biết rằng dữ liệu đang được kiểm tra.

**Tham khảo thêm:**

- Angular Forms documentation: [https://angular.io/guide/forms-overview](https://angular.io/guide/forms-overview)
