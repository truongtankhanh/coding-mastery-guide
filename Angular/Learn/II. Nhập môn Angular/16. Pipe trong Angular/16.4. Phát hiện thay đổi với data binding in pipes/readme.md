## Phát hiện thay đổi với Data Binding trong Pipes

**Khái niệm:**

Data binding trong pipes cho phép bạn cập nhật giao diện khi giá trị của một thuộc tính hoặc biến thay đổi. Tuy nhiên, mặc định các pipe chỉ cập nhật giao diện khi giá trị đầu vào thay đổi (ví dụ: `primitive type` thay đổi giá trị, `reference` của `object` thay đổi).

**Ngữ cảnh:**

Phát hiện thay đổi với data binding trong pipes được sử dụng trong nhiều trường hợp, ví dụ như:

- **Cập nhật giao diện khi giá trị của một thuộc tính trong một object thay đổi.**
- **Cập nhật giao diện khi một phần tử trong một array thay đổi.**
- **Cập nhật giao diện khi dữ liệu được cập nhật từ server.**

**Cách sử dụng:**

Có hai cách để phát hiện thay đổi với data binding trong pipes:

**1. Sử dụng `ChangeDetectorRef`:**

```typescript
import { Pipe, PipeTransform, ChangeDetectorRef } from "@angular/core";

@Pipe({
  name: "pipeName",
})
export class PipeName implements PipeTransform {
  constructor(private cdr: ChangeDetectorRef) {}

  transform(value: any, args?: any): any {
    // ...

    this.cdr.detectChanges();
  }
}
```

**2. Sử dụng `Subject`:**

```typescript
import { Pipe, PipeTransform, Subject } from "@angular/core";

@Pipe({
  name: "pipeName",
})
export class PipeName implements PipeTransform {
  private readonly value$: Subject<any> = new Subject();

  constructor() {}

  transform(value: any, args?: any): any {
    // ...

    this.value$.next(value);
  }
}
```

**Ví dụ:**

```html
<p>{{ object.value | pipeName }}</p>
```

```typescript
export class MyComponent {
  object = {
    value: 1,
  };

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.object.value++;
    }, 1000);
  }
}
```

**Output:**

Giá trị của `p` sẽ được cập nhật mỗi giây.

**Lưu ý:**

- Cần sử dụng `ChangeDetectorRef` hoặc `Subject` một cách cẩn thận để tránh các vấn đề về hiệu suất.
- Có thể sử dụng các cách khác nhau để phát hiện thay đổi với data binding trong pipes.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/lifecycle-hooks](https://angular.io/guide/lifecycle-hooks)

**Một số ví dụ nâng cao về sử dụng phát hiện thay đổi với data binding trong pipes:**

- **Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.**
- **Tạo ra một layout phức tạp với header, sidebar và content area.**
- **Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về cách phát hiện thay đổi với data binding trong pipes.**
