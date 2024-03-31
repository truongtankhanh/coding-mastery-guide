## Inject component cha đến component con trong Angular

**Khái niệm:**

Inject component cha đến component con là kỹ thuật cho phép component con truy cập vào các thuộc tính và phương thức của component cha.

**Ngữ cảnh:**

Kỹ thuật này được sử dụng trong nhiều trường hợp, ví dụ như:

- **Truyền dữ liệu từ component cha sang component con:** Component cha có thể truyền dữ liệu cho component con thông qua các thuộc tính.
- **Gọi phương thức của component cha từ component con:** Component con có thể gọi phương thức của component cha để thực hiện một hành động nào đó.
- **Thay đổi giao diện của component cha từ component con:** Component con có thể thay đổi giao diện của component cha bằng cách gọi phương thức của component cha.

**Cách sử dụng:**

Có hai cách để inject component cha đến component con:

**1. Sử dụng directive `@ViewChild`:**

- **Component cha:**

```typescript
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent: ChildComponent;

  constructor() {}

  getData() {
    return this.childComponent.data;
  }
}
```

- **Component con:**

```typescript
export class ChildComponent {
  data = "This is some data";

  constructor() {}
}
```

**2. Sử dụng service:**

- **Component cha:**

```typescript
export class ParentComponent {
  data = "This is some data";

  constructor() {}

  getData() {
    return this.data;
  }
}
```

- **Component con:**

```typescript
export class ChildComponent {
  constructor(private parentService: ParentService) {}

  ngOnInit() {
    this.data = this.parentService.getData();
  }
}
```

**Lưu ý:**

- Có thể sử dụng nhiều cách khác nhau để inject component cha đến component con.
- Cần chú ý đến việc quản lý vòng đời của các component khi sử dụng kỹ thuật này.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/component-interaction](https://angular.io/guide/component-interaction)

**Một số ví dụ nâng cao về sử dụng inject component cha đến component con:**

- **Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.**
- **Tạo ra một layout phức tạp với header, sidebar và content area.**
- **Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về việc inject component cha đến component con trong Angular.**
