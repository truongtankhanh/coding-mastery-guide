## Data Binding trong Angular

**Khái niệm:**

Data binding là kỹ thuật đồng bộ dữ liệu giữa component và view (template file html) trong Angular.

**Ngữ cảnh:**

Data binding được sử dụng để:

- Hiển thị dữ liệu từ component lên view.
- Cập nhật dữ liệu từ view vào component.
- Tạo giao diện người dùng động và tương tác.

**Cách sử dụng:**

Có 3 loại data binding trong Angular:

**1. One-way binding:**

- Dữ liệu chỉ chảy từ component sang view.
- Có 2 kiểu:
  - **Interpolation:** Sử dụng {{ }} để hiển thị giá trị của một biến trong component. Ví dụ:
    ```html
    <h1>{{ title }}</h1>
    ```
  - **Property binding:** Sử dụng [] để bind giá trị của một biến vào thuộc tính của một element HTML. Ví dụ:
    ```html
    <input type="text" [(ngModel)]="name" />
    ```

**2. Two-way binding:**

- Dữ liệu tự động đồng bộ giữa component và view.
- Sử dụng [(ngModel)] để bind giá trị của một biến vào thuộc tính của một element HTML. Ví dụ:
  ```html
  <input type="text" [(ngModel)]="name" />
  ```

**3. Event binding:**

- Gắn một sự kiện HTML với một phương thức trong component.
- Sử dụng ( ) để bind một sự kiện HTML với một phương thức trong component. Ví dụ:
  ```html
  <button (click)="onClick()">Click me</button>
  ```

**Ví dụ:**

- **One-way binding:**

  ```html
  <h1>{{ title }}</h1>
  <input type="text" [(ngModel)]="name" />
  ```

- **Two-way binding:**

  ```html
  <input type="text" [(ngModel)]="name" />
  ```

- **Event binding:**
  ```html
  <button (click)="onClick()">Click me</button>
  ```

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng động và tương tác.
- Tăng hiệu quả phát triển ứng dụng.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Tài liệu tham khảo:**

- Angular Data Binding: [https://angular.io/guide/binding-overview](https://angular.io/guide/binding-overview)
- W3Schools Angular Data Binding: [https://www.w3schools.com/angular/angular_databinding.asp](https://www.w3schools.com/angular/angular_databinding.asp)
- Sử dụng Data binding trong Angular: [https://levunguyen.com/laptrinhweb/2021/06/05/su-dung-data-binding-trong-angular/](https://levunguyen.com/laptrinhweb/2021/06/05/su-dung-data-binding-trong-angular/)
