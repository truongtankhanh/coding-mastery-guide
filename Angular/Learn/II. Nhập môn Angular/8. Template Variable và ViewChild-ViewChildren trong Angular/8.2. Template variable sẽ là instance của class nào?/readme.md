## Template variable trong Angular là instance của class nào?

**Template variable:**

**Khái niệm:**

Template variable là một biến được khai báo trong template của một component và được sử dụng để truy cập đến element HTML hoặc directive trong component đó.

**Instance:**

Template variable là instance của class **ElementRef** hoặc **Directive** tùy thuộc vào loại element hoặc directive được sử dụng.

**Ví dụ:**

**1. Template variable cho element HTML:**

```html
<input type="text" #myInput />

<button (click)="onButtonClick()">Click</button>
```

```typescript
export class MyComponent {
  constructor(private readonly myInput: ElementRef) {}

  ngOnInit() {}

  onButtonClick() {
    // Truy cập giá trị của input
    const value = this.myInput.nativeElement.value;
  }
}
```

Trong ví dụ này, `myInput` là template variable được sử dụng để truy cập đến element input HTML. Template variable này là instance của class `ElementRef`.

**2. Template variable cho directive:**

```html
<app-child-component #myChild></app-child-component>

<button (click)="onButtonClick()">Click</button>
```

```typescript
export class MyComponent {
  constructor(private readonly myChild: ChildComponent) {}

  ngOnInit() {}

  onButtonClick() {
    // Gọi method của child component
    this.myChild.myMethod();
  }
}

export class ChildComponent {
  public myMethod() {
    // Do something
  }
}
```

Trong ví dụ này, `myChild` là template variable được sử dụng để truy cập đến directive `ChildComponent`. Template variable này là instance của class `ChildComponent`.

**Kết luận:**

Template variable có thể là instance của class `ElementRef` hoặc `Directive` tùy thuộc vào loại element hoặc directive được sử dụng. Việc sử dụng template variable giúp bạn truy cập và thao tác với element HTML hoặc directive một cách dễ dàng hơn.

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)
