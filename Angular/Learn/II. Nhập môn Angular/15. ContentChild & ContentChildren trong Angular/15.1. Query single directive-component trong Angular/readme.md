## Truy vấn một directive/component đơn lẻ trong Angular

**Khái niệm:**

Truy vấn một directive/component đơn lẻ trong Angular là kỹ thuật cho phép bạn lấy một instance của một directive/component cụ thể từ DOM.

**Ngữ cảnh:**

Kỹ thuật này được sử dụng trong nhiều trường hợp, ví dụ như:

- **Thay đổi giao diện của một directive/component:** Có thể sử dụng truy vấn để thay đổi giao diện của một directive/component.
- **Truy cập vào các thuộc tính và phương thức của một directive/component:** Có thể sử dụng truy vấn để truy cập vào các thuộc tính và phương thức của một directive/component.
- **Tái sử dụng code:** Có thể sử dụng truy vấn để tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.

**Cách sử dụng:**

Có hai cách để truy vấn một directive/component đơn lẻ:

**1. Sử dụng directive `@ViewChild`:**

```typescript
export class MyComponent {
  @ViewChild(MyDirective) myDirective: MyDirective;

  constructor() {}

  ngOnInit() {
    this.myDirective.doSomething();
  }
}

export class MyDirective {
  doSomething() {
    // ...
  }
}
```

**2. Sử dụng service:**

```typescript
export class MyComponent {
  constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.getDirective().doSomething();
  }
}

export class MyDirective {
  doSomething() {
    // ...
  }
}

@Injectable()
export class MyService {
  constructor(private injector: Injector) {}

  getDirective(): MyDirective {
    return this.injector.get(MyDirective);
  }
}
```

**Lưu ý:**

- Cần chú ý đến việc sử dụng truy vấn một cách cẩn thận để tránh các vấn đề về hiệu suất.
- Có thể sử dụng các cách khác nhau để giải quyết các vấn đề tương tự như truy vấn.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/component-interaction](https://angular.io/guide/component-interaction)

**Một số ví dụ nâng cao về sử dụng truy vấn một directive/component đơn lẻ:**

- **Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.**
- **Tạo ra một layout phức tạp với header, sidebar và content area.**
- **Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về việc truy vấn một directive/component đơn lẻ trong Angular.**
