## Truy vấn nhiều nội dung với ContentChildren trong Angular

**Khái niệm:**

Truy vấn nhiều nội dung với ContentChildren trong Angular là kỹ thuật cho phép bạn lấy một danh sách các instance của một directive cụ thể từ DOM.

**Ngữ cảnh:**

Kỹ thuật này được sử dụng trong nhiều trường hợp, ví dụ như:

- **Thay đổi giao diện của nhiều directive:** Có thể sử dụng truy vấn để thay đổi giao diện của nhiều directive cùng lúc.
- **Truy cập vào các thuộc tính và phương thức của nhiều directive:** Có thể sử dụng truy vấn để truy cập vào các thuộc tính và phương thức của nhiều directive cùng lúc.
- **Tái sử dụng code:** Có thể sử dụng truy vấn để tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.

**Cách sử dụng:**

Có hai cách để truy vấn nhiều nội dung với ContentChildren:

**1. Sử dụng directive `@ContentChildren`:**

```typescript
export class MyComponent {
  @ContentChildren(MyDirective) myDirectives: QueryList<MyDirective>;

  constructor() {}

  ngOnInit() {
    this.myDirectives.forEach((d) => d.doSomething());
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
    this.myService.getDirectives().forEach((d) => d.doSomething());
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

  getDirectives(): MyDirective[] {
    return this.injector.get(MyDirective, { multiple: true });
  }
}
```

**Lưu ý:**

- Cần chú ý đến việc sử dụng truy vấn một cách cẩn thận để tránh các vấn đề về hiệu suất.
- Có thể sử dụng các cách khác nhau để giải quyết các vấn đề tương tự như truy vấn.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/component-interaction](https://angular.io/guide/component-interaction)

**Một số ví dụ nâng cao về sử dụng truy vấn nhiều nội dung với ContentChildren:**

- **Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.**
- **Tạo ra một layout phức tạp với header, sidebar và content area.**
- **Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về việc truy vấn nhiều nội dung với ContentChildren trong Angular.**
