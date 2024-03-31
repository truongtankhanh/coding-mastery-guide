## Các phần tử cha tương tác với phần tử con thông qua biến cục bộ trong Angular

**Khái niệm:**

**Biến cục bộ:** Biến được khai báo trong template của một component và chỉ có thể truy cập được trong component đó.

**Tương tác:**

Các phần tử cha có thể tương tác với phần tử con thông qua biến cục bộ bằng cách sử dụng các kỹ thuật sau:

- **Interpolation:**
- **Property binding:**
- **Event binding:**
- **Two-way binding:**

**Ví dụ:**

**1. Interpolation:**

```html
<h1>{{ childData }}</h1>

<p>Giá trị của biến cục bộ: {{ data }}</p>
```

**2. Property binding:**

```html
<app-child-component [data]="parentData"></app-child-component>

<p>Giá trị của biến được truyền từ component cha: {{ data }}</p>
```

**3. Event binding:**

```html
<app-child-component
  (onDataChange)="onDataChange($event)"
></app-child-component>

<button (click)="emitData()">Gửi dữ liệu</button>
```

**4. Two-way binding:**

```html
<app-child-component [(data)]="parentData"></app-child-component>

<input type="text" [(ngModel)]="data" />
```

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng tương tác.
- Giảm thiểu code cần viết.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Khi sử dụng biến cục bộ, cần đảm bảo tên của biến được khai báo trong template của component con.
- Nên sử dụng biến cục bộ một cách hợp lý để tránh ảnh hưởng đến hiệu suất của ứng dụng.

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)
