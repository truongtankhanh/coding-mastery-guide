## Constructor và ngOnInit trong Angular

**1. Constructor:**

**Khái niệm:**

Constructor là một phương thức đặc biệt được gọi khi một instance của một class được tạo ra.

**Ngữ cảnh:**

Constructor được sử dụng trong các trường hợp sau:

- Khởi tạo các biến thành viên của class.
- Dependency Injection (DI) để inject các dependency vào class.
- Thực hiện các thao tác khởi tạo ban đầu cho class.

**Cách sử dụng:**

Để sử dụng constructor, bạn cần khai báo nó trong class với từ khóa `constructor`. Ví dụ:

```typescript
export class MyClass {
  constructor(private readonly myDependency: MyDependency) {}
}
```

**2. ngOnInit:**

**Khái niệm:**

`ngOnInit` là một lifecycle hook trong Angular được gọi sau khi component được khởi tạo và sau khi các input của component được binding.

**Ngữ cảnh:**

`ngOnInit` được sử dụng trong các trường hợp sau:

- Thực hiện các thao tác khởi tạo sau khi component được khởi tạo.
- Lấy dữ liệu từ API.
- Khởi tạo các biến và các thành phần khác của component.

**Cách sử dụng:**

Để sử dụng `ngOnInit`, bạn cần implement lifecycle hook `OnInit` trong component và khai báo phương thức `ngOnInit`. Ví dụ:

```typescript
export class MyComponent implements OnInit {
  ngOnInit() {
    // Thực hiện các thao tác khởi tạo sau khi component được khởi tạo.
  }
}
```

**So sánh Constructor và ngOnInit:**

| Tính năng        | Constructor                                                               | ngOnInit                                                                                                               |
| ---------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Thời điểm gọi    | Khi instance của class được tạo ra                                        | Sau khi component được khởi tạo và sau khi các input được binding                                                      |
| Mục đích sử dụng | Khởi tạo các biến thành viên, DI, thực hiện các thao tác khởi tạo ban đầu | Thực hiện các thao tác khởi tạo sau khi component được khởi tạo, lấy dữ liệu, khởi tạo các biến và các thành phần khác |
| Truy cập input   | Không thể truy cập                                                        | Có thể truy cập                                                                                                        |

**Ví dụ:**

```typescript
export class MyComponent implements OnInit {
  public myData: string;

  constructor(private readonly myDependency: MyDependency) {}

  ngOnInit() {
    console.log(this.myData); // Truy cập được giá trị của myData
  }
}
```

**Kết luận:**

Constructor và `ngOnInit` là hai lifecycle hook quan trọng trong Angular được sử dụng để thực hiện các thao tác khởi tạo cho class và component. Sử dụng hai lifecycle hook này một cách hiệu quả sẽ giúp bạn phát triển ứng dụng Angular nhanh chóng và hiệu quả hơn.

**Chúc bạn thành công!**

**Lưu ý:**

- Nên sử dụng constructor để DI và thực hiện các thao tác khởi tạo ban đầu cho class.
- Nên sử dụng `ngOnInit` để thực hiện các thao tác khởi tạo sau khi component được khởi tạo, lấy dữ liệu, khởi tạo các biến và các thành phần khác.
- Có thể sử dụng cả constructor và `ngOnInit` để thực hiện các thao tác khởi tạo cho class và component.

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)
