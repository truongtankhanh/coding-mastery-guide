## Thay đổi giá trị của input trong Angular

**1. Thay đổi giá trị trực tiếp:**

Bạn có thể thay đổi giá trị của input trực tiếp bằng cách sử dụng thuộc tính `value` của element HTML.

**Ví dụ:**

```html
<input type="text" [(ngModel)]="myData" />
```

```typescript
export class MyComponent {
  public myData = "Đây là dữ liệu ban đầu";

  constructor() {}

  ngOnInit() {}
}
```

Khi người dùng thay đổi giá trị của input, giá trị của biến `myData` cũng sẽ thay đổi tương ứng.

**2. Thay đổi giá trị bằng event binding:**

Bạn có thể sử dụng event binding để thay đổi giá trị của input khi xảy ra một sự kiện nào đó, ví dụ như khi người dùng click vào nút button.

**Ví dụ:**

```html
<input type="text" [(ngModel)]="myData" />
<button (click)="changeData()">Thay đổi giá trị</button>
```

```typescript
export class MyComponent {
  public myData = "Đây là dữ liệu ban đầu";

  constructor() {}

  ngOnInit() {}

  changeData() {
    this.myData = "Đây là dữ liệu mới";
  }
}
```

Khi người dùng click vào nút button, giá trị của biến `myData` sẽ được thay đổi thành "Đây là dữ liệu mới".

**3. Thay đổi giá trị bằng directive `ngModel`:**

Bạn có thể sử dụng directive `ngModel` để thay đổi giá trị của input một cách programmatically.

**Ví dụ:**

```html
<input type="text" [(ngModel)]="myData" />
```

```typescript
export class MyComponent {
  public myData = "Đây là dữ liệu ban đầu";

  constructor() {}

  ngOnInit() {
    this.myData = "Đây là dữ liệu mới"; // Thay đổi giá trị của myData programmatically
  }
}
```

Khi bạn thay đổi giá trị của biến `myData`, giá trị của input cũng sẽ thay đổi tương ứng.

**Kết luận:**

Có nhiều cách để thay đổi giá trị của input trong Angular. Bạn có thể sử dụng cách phù hợp nhất với nhu cầu của mình.

**Chúc bạn thành công!**

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)
