## Event trong component trong Angular

**Khái niệm:**

Event là một sự kiện xảy ra trong component, ví dụ như click chuột, di chuột, keypress, v.v.

**Ngữ cảnh:**

Event được sử dụng trong các trường hợp sau:

- Xử lý các hành động của người dùng trên giao diện.
- Giao tiếp giữa các component.
- Thay đổi dữ liệu hiển thị trên giao diện.

**Cách sử dụng:**

Có hai cách để sử dụng event trong component:

**1. Event binding:**

Bạn có thể sử dụng event binding để lắng nghe một sự kiện xảy ra trên element HTML và thực hiện một hành động nào đó khi sự kiện đó xảy ra.

**Ví dụ:**

```html
<button (click)="handleClick()">Click vào đây</button>
```

```typescript
export class MyComponent {
  constructor() {}

  ngOnInit() {}

  handleClick() {
    // Thực hiện một hành động nào đó khi người dùng click vào nút button
  }
}
```

**2. Directive `@Output`:**

Bạn có thể sử dụng directive `@Output` để tạo ra một custom event có thể được lắng nghe bởi các component khác.

**Ví dụ:**

```typescript
export class MyComponent {
  @Output() public myEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitEvent() {
    this.myEvent.emit("Đây là dữ liệu được emit");
  }
}
```

```html
<app-my-component (myEvent)="onMyEvent($event)"></app-my-component>
```

```typescript
export class MyOtherComponent {
  constructor() {}

  ngOnInit() {}

  onMyEvent(data: string) {
    // Xử lý dữ liệu được emit từ component MyComponent
  }
}
```

**Kết luận:**

Event là một phần quan trọng trong Angular giúp bạn tạo ra giao diện người dùng tương tác và xử lý các hành động của người dùng.

**Chúc bạn thành công!**

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)
