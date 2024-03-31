## Biến local trong NgForOf

**Khái niệm:**

Biến local trong NgForOf là biến được khai báo trong vòng lặp `ngFor` và chỉ có giá trị trong phạm vi lặp đó.

**Ngữ cảnh:**

Biến local được sử dụng để:

- Truy cập giá trị của phần tử hiện tại trong vòng lặp.
- Thay đổi giá trị của phần tử hiện tại trong vòng lặp.
- Tạo giao diện người dùng động và tương tác.

**Cách sử dụng:**

Có hai cách để khai báo biến local trong NgForOf:

**1. Sử dụng `let`:**

```html
<ul>
  <li *ngFor="let item of items">
    <h1>{{ item.name }}</h1>
    <p>{{ item.age }}</p>
  </li>
</ul>
```

Trong ví dụ này, biến `item` là biến local được khai báo bằng `let`. Biến `item` có giá trị của phần tử hiện tại trong vòng lặp `ngFor`.

**2. Sử dụng `as`:**

```html
<ul>
  <li *ngFor="let item of items as itemsList">
    <h1>{{ item.name }}</h1>
    <p>{{ item.age }}</p>
  </li>
</ul>
```

Trong ví dụ này, biến `item` là biến local được khai báo bằng `as`. Biến `item` có giá trị của phần tử hiện tại trong vòng lặp `ngFor`, và biến `itemsList` là một alias cho danh sách `items`.

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng động và tương tác.
- Tăng hiệu quả phát triển ứng dụng.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Biến local chỉ có giá trị trong phạm vi vòng lặp `ngFor`.
- Không thể sử dụng biến local bên ngoài vòng lặp `ngFor`.

**Tài liệu tham khảo:**

- Sử dụng biến local trong NgFor: [https://levunguyen.com/laptrinhweb/2021/06/14/su-dung-directive-ngFor-trong-angular/](https://levunguyen.com/laptrinhweb/2021/06/14/su-dung-directive-ngFor-trong-angular/)

### Một số ví dụ nâng cao về biến local trong NgForOf:

- **Sử dụng biến local để truy cập giá trị của phần tử con:**

```html
<ul>
  <li *ngFor="let item of items">
    <h1>{{ item.name }}</h1>
    <ul>
      <li *ngFor="let subItem of item.subItems">
        <p>{{ subItem.name }}</p>
      </li>
    </ul>
  </li>
</ul>
```

- **Sử dụng biến local để thay đổi giá trị của phần tử hiện tại:**

```html
<ul>
  <li *ngFor="let item of items">
    <h1>{{ item.name }}</h1>
    <input type="text" [(ngModel)]="item.name" />
  </li>
</ul>
```

- **Sử dụng biến local để tạo giao diện người dùng động:**

```html
<ul>
  <li *ngFor="let item of items">
    <h1 *ngIf="item.condition">{{ item.name }}</h1>
  </li>
</ul>
```

### Một số best practices khi sử dụng biến local trong NgForOf:

- Sử dụng biến local cho các trường hợp cần truy cập hoặc thay đổi giá trị của phần tử hiện tại trong vòng lặp.
- Sử dụng directive `*ngIf` và `*ngSwitch` để hiển thị nội dung động.
- Sử dụng pipe để format dữ liệu trước khi hiển thị trên giao diện người dùng.

**Kết luận:**

Biến local là một công cụ hữu ích trong NgForOf giúp bạn tạo giao diện người dùng động và tương tác. Sử dụng biến local một cách hiệu quả sẽ giúp bạn phát triển ứng dụng Angular nhanh chóng và hiệu quả hơn.
