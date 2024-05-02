## Angular Forms - Submit Event vs NgSubmit

**Khái niệm:**

**Submit event** là sự kiện HTML được kích hoạt khi người dùng nhấp vào nút submit trong form. **NgSubmit** là directive Angular được sử dụng để lắng nghe submit event của form.

**Ngữ cảnh:**

**Submit event** và **NgSubmit** được sử dụng để:

- Xử lý dữ liệu form khi người dùng submit form.
- Hiển thị lỗi validation.
- Chuyển hướng người dùng đến trang khác sau khi submit form.

**Cách sử dụng:**

**1. Submit event:**

Sử dụng event handler HTML để xử lý submit event của form:

```html
<form (submit)="onSubmit()">
  <button type="submit">Submit</button>
</form>
```

**2. NgSubmit:**

Sử dụng directive **ngSubmit** trong template HTML để lắng nghe submit event của form:

```html
<form [ngSubmit]="onSubmit()">
  <button type="submit">Submit</button>
</form>
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
<form (submit)="onSubmit()">
  <input type="text" name="name" [(ngModel)]="name" />
  <button type="submit">Submit</button>
</form>

<h1>{{ name }}</h1>
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
    this.name = this.name.toUpperCase();
  }
}
```

**4. Khởi chạy ứng dụng:**

```
ng serve
```

**5. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**6. Kết quả:**

- Nhập tên vào input field.
- Nhấp vào nút "Submit".
- Tên người dùng sẽ được hiển thị với chữ hoa dưới form.

**7. Giải thích:**

- **Submit event** được kích hoạt khi người dùng nhấp vào nút "Submit".
- **onSubmit()** method được gọi khi submit event được kích hoạt.
- Tên người dùng được chuyển đổi thành chữ hoa và hiển thị dưới form.

**8. Hỏi đáp:**

**Câu hỏi:** Làm thế nào để tôi sử dụng **NgSubmit** với **ngModel**?

**Trả lời:** Bạn có thể sử dụng **NgSubmit** với **ngModel** để validate dữ liệu form trước khi submit.

**Câu hỏi:** Làm thế nào để tôi ngăn chặn submit event của form?

**Trả lời:** Bạn có thể sử dụng method **preventDefault()** trong event handler của **submit event** để ngăn chặn submit event.

**Kết luận:**

**Submit event** và **NgSubmit** là hai cách để xử lý submit event của form. **NgSubmit** là directive Angular cung cấp nhiều tính năng hơn so với submit event HTML.

**Ngoài ra:**

- Bạn có thể sử dụng directive **ngSubmit** để hiển thị lỗi validation.
- Bạn có thể sử dụng directive **ngSubmit** để chuyển hướng người dùng đến trang khác sau khi submit form.
- Bạn có thể tham khảo tài liệu chính thức của Angular Forms để biết thêm thông tin chi tiết: [https://angular.io/guide/forms-overview](https://angular.io/guide/forms-overview).

**Hỗ trợ:**

Nếu bạn có bất kỳ câu hỏi nào khác về Angular Forms, **submit event**, **NgSubmit**, hoặc Angular Validators, bạn có thể hỏi tôi hoặc tham gia cộng đồng Angular trên GitHub: [https://github.com/angular/angular](https://github.com/angular/angular).

**Lợi ích của việc sử dụng NgSubmit:**

- **NgSubmit** là directive Angular, do đó nó có thể được sử dụng với các tính năng khác của Angular như **ngModel** và **ngClass**.
- **NgSubmit** giúp bạn dễ dàng kiểm soát submit event của form.
- **NgSubmit** giúp bạn dễ dàng hiển thị lỗi validation.
- **NgSubmit** giúp bạn dễ dàng chuyển hướng người dùng đến trang khác sau khi submit form.
