## Lắng nghe sự kiện thay đổi trong Angular

**Khái niệm:**

Lắng nghe sự kiện thay đổi trong Angular là kỹ thuật cho phép bạn thực hiện một hành động khi giá trị của một thuộc tính hoặc biến thay đổi.

**Ngữ cảnh:**

Kỹ thuật này được sử dụng trong nhiều trường hợp, ví dụ như:

- **Xác thực dữ liệu nhập vào:** Có thể sử dụng lắng nghe sự kiện thay đổi để xác thực dữ liệu nhập vào của người dùng.
- **Cập nhật giao diện:** Có thể sử dụng lắng nghe sự kiện thay đổi để cập nhật giao diện khi giá trị của một thuộc tính hoặc biến thay đổi.
- **Gửi dữ liệu đến server:** Có thể sử dụng lắng nghe sự kiện thay đổi để gửi dữ liệu đến server khi giá trị của một thuộc tính hoặc biến thay đổi.

**Cách sử dụng:**

Có hai cách để lắng nghe sự kiện thay đổi:

**1. Sử dụng directive `@Input`:**

```typescript
export class MyComponent {
  @Input() myValue: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["myValue"]) {
      // ...
    }
  }
}
```

**2. Sử dụng service:**

```typescript
export class MyComponent {
  constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.myValue$.subscribe((value) => {
      // ...
    });
  }
}

@Injectable()
export class MyService {
  myValue$: Subject<string> = new Subject();

  constructor() {}

  setValue(value: string) {
    this.myValue$.next(value);
  }
}
```

**Lưu ý:**

- Cần chú ý đến việc sử dụng lắng nghe sự kiện thay đổi một cách cẩn thận để tránh các vấn đề về hiệu suất.
- Có thể sử dụng các cách khác nhau để giải quyết các vấn đề tương tự như lắng nghe sự kiện thay đổi.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/lifecycle-hooks](https://angular.io/guide/lifecycle-hooks)

**Một số ví dụ nâng cao về sử dụng lắng nghe sự kiện thay đổi:**

- **Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.**
- **Tạo ra một layout phức tạp với header, sidebar và content area.**
- **Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về việc lắng nghe sự kiện thay đổi trong Angular.**
