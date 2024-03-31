## Giới thiệu Dependency Injection trong Angular

**Khái niệm:**

Dependency Injection (DI) là một kỹ thuật lập trình cho phép cung cấp các phụ thuộc (dependency) cho một class mà không cần class đó tự tạo ra.

**Ngữ cảnh:**

DI được sử dụng trong Angular để:

- **Tạo ra các component độc lập và dễ kiểm thử:** Các component không cần phải biết cách tạo ra các phụ thuộc của nó, mà chỉ cần khai báo các phụ thuộc mà nó cần.
- **Thay đổi cách thức hoạt động của component:** Có thể thay đổi cách thức hoạt động của component bằng cách cung cấp các phụ thuộc khác nhau cho nó.
- **Tái sử dụng code:** Có thể tái sử dụng code bằng cách cung cấp các phụ thuộc giống nhau cho các component khác nhau.

**Cách sử dụng:**

DI trong Angular được thực hiện thông qua:

- **Injector:** Là một object có chứa các API để tạo ra các instance của các phụ thuộc.
- **Provider:** Là một object cung cấp thông tin về cách thức tạo ra một instance của một phụ thuộc.
- **Dependency:** Là một object (có thể là function, một value thông thường) của một kiểu dữ liệu cần phải khởi tạo.

**Ví dụ:**

Giả sử chúng ta có một component `ProductComponent` cần sử dụng một service `ProductService`.

**1. Khai báo dependency:**

```typescript
export class ProductComponent {
  constructor(private productService: ProductService) {}
}
```

**2. Cung cấp provider:**

```typescript
@NgModule({
  declarations: [ProductComponent],
  providers: [ProductService],
})
export class AppModule {}
```

**3. Sử dụng dependency:**

```typescript
export class ProductComponent {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
```

**Lưu ý:**

- Có thể sử dụng nhiều cách khác nhau để thực hiện DI trong Angular.
- Có thể sử dụng các framework DI khác với Angular.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/dependency-injection](https://angular.io/guide/dependency-injection)
- Bài viết về DI trên trang web của Angular: [https://angular.io/guide/dependency-injection-overview](https://angular.io/guide/dependency-injection-overview)

**Một số ví dụ nâng cao về sử dụng DI:**

- **Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.**
- **Tạo ra một layout phức tạp với header, sidebar và content area.**
- **Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về Dependency Injection trong Angular.**
