## Angular EventEmitter

**Khái niệm:**

`EventEmitter` là một lớp trong Angular giúp **phát ra các sự kiện** từ component con đến component cha. Nó là một công cụ mạnh mẽ để **tạo giao tiếp giữa các component** trong Angular.

**Ngữ cảnh:**

`EventEmitter` thường được sử dụng trong Angular để:

- **Truyền dữ liệu từ component con đến component cha**
- **Thông báo cho component cha về các thay đổi trong component con**
- **Kích hoạt các hành động trong component cha**

**Cách sử dụng:**

Để sử dụng `EventEmitter`, bạn cần thực hiện các bước sau:

**1. Khai báo EventEmitter trong component con:**

```typescript
import { EventEmitter } from "@angular/core";

export class MyComponent {
  public myEvent = new EventEmitter<string>();

  // ...
}
```

**2. Gửi sự kiện từ component con:**

```typescript
import { EventEmitter } from "@angular/core";

export class MyComponent {
  public myEvent = new EventEmitter<string>();

  public emitEvent() {
    this.myEvent.emit("Đây là sự kiện!");
  }
}
```

**3. Lắng nghe sự kiện trong component cha:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-parent",
  templateUrl: "./parent.component.html",
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Lắng nghe sự kiện từ component con
    this.myComponent.myEvent.subscribe((data) => {
      console.log("Sự kiện được nhận:", data);
    });
  }
}
```

**Ví dụ:**

```html
<button (click)="emitEvent()">Gửi sự kiện</button>

<my-component (myEvent)="onEventReceived($event)"></my-component>

<p>Sự kiện được nhận: {{ event }}</p>
```

**Lưu ý:**

- `EventEmitter` là một **loại generic**. Bạn có thể chỉ định kiểu dữ liệu của sự kiện được phát ra.
- `EventEmitter` có thể được sử dụng để phát ra **nhiều loại sự kiện khác nhau**.
- `EventEmitter` là một công cụ mạnh mẽ, nhưng bạn nên sử dụng nó một cách **thận trọng** để tránh tạo ra code phức tạp và khó bảo trì.

**Ngoài ra:**

- **@Output**: Directive được sử dụng để khai báo một property là một EventEmitter.
- **@Input**: Directive được sử dụng để nhận dữ liệu từ component cha.
- **Data binding**: Cách thức truyền dữ liệu giữa các component trong Angular.

**Hỗ trợ thêm:**

- Tài liệu Angular về EventEmitter: [https://angular.io/api/core/EventEmitter](https://angular.io/api/core/EventEmitter)
- Hướng dẫn sử dụng EventEmitter: [đã xoá URL không hợp lệ]

**Kết luận:**

`EventEmitter` là một công cụ mạnh mẽ để tạo giao tiếp giữa các component trong Angular. Hiểu rõ cách sử dụng `EventEmitter` có thể giúp bạn viết code hiệu quả và dễ bảo trì hơn.

**Bạn có thể tìm hiểu thêm về Angular và RxJS tại:**

- Trang web Angular: [https://angular.io/](https://angular.io/)
- Tài liệu RxJS: [https://rxjs.dev/](https://rxjs.dev/)
