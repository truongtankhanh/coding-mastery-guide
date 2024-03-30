### 1. Sử dụng Interpolation và Property Binding

- **Interpolation:** Để hiển thị dữ liệu từ component vào template, bạn có thể sử dụng cú pháp `{{ data }}`.

  ```html
  <h1>{{ title }}</h1>
  ```

- **Property Binding:** Để gán giá trị cho thuộc tính của một phần tử trong template, bạn có thể sử dụng cú pháp `[property]="expression"`.

  ```html
  <img [src]="imageUrl" />
  ```

### 2. Event Binding

- Sử dụng sự kiện `(event)="handler"` để lắng nghe và xử lý các sự kiện từ các phần tử trong template.

  ```html
  <button (click)="onClick()">Click me!</button>
  ```

### 3. Two-Way Data Binding

- Angular cung cấp cú pháp `[(ngModel)]` để thực hiện two-way data binding cho các trường input.

  ```html
  <input [(ngModel)]="name" />
  ```

- Để sử dụng two-way binding, bạn cần import `FormsModule` từ `@angular/forms` vào module của ứng dụng.

### 4. Sử Dụng *ngIf và *ngFor

- **ngIf:** Để hiển thị hoặc ẩn một phần tử dựa trên điều kiện.

  ```html
  <div *ngIf="isVisible">Content</div>
  ```

- **ngFor:** Để lặp qua một mảng và hiển thị các phần tử.

  ```html
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
  ```

### 5. Component Communication

- Sử dụng `@Input()` và `@Output()` để truyền dữ liệu giữa các component.

  ```typescript
  // ChildComponent
  @Input() data: any;
  @Output() event = new EventEmitter<any>();

  // ParentComponent
  <app-child [data]="parentData" (event)="handleEvent($event)"></app-child>
  ```

### 6. Dependency Injection

- Sử dụng Dependency Injection để inject các dependency vào các component và service.

  ```typescript
  constructor(private userService: UserService) { }
  ```

### 7. Sử Dụng Angular CLI

- Sử dụng Angular CLI để tạo và quản lý các thành phần của ứng dụng Angular một cách nhanh chóng và dễ dàng.

  ```bash
  ng generate component my-component
  ng generate service my-service
  ```

### 8. Sử dụng ViewChild và ViewChildren

- **ViewChild:** Để truy cập và tương tác với các phần tử con của component.

  ```typescript
  @ViewChild('myChild') childComponent: ChildComponent;
  ```

- **ViewChildren:** Để truy cập và tương tác với các phần tử con của component được lặp lại.

  ```typescript
  @ViewChildren('myChildren') childrenComponents: QueryList<ChildComponent>;
  ```

### 9. Lifecycle Hooks

- Sử dụng các lifecycle hooks như `ngOnInit`, `ngOnChanges`, `ngOnDestroy`, vv. để thực hiện các hành động trong quá trình lifecycle của một component.

  ```typescript
  ngOnInit() {
    // Initialize component
  }

  ngOnDestroy() {
    // Cleanup tasks
  }
  ```

### 10. Sử Dụng Pipes

- Sử dụng pipes để chuyển đổi và định dạng dữ liệu trước khi hiển thị trong template.

  ```html
  <p>{{ birthday | date }}</p>
  ```

### 11. Module và Lazy Loading

- Tổ chức ứng dụng thành các module để quản lý code dễ dàng hơn.

- Sử dụng lazy loading để tải các module chỉ khi cần thiết, giúp cải thiện thời gian tải trang và hiệu suất của ứng dụng.

### 12. RxJS và Observables

- Sử dụng RxJS và observables để xử lý các luồng dữ liệu và sự kiện trong ứng dụng.

  ```typescript
  import { Observable } from "rxjs";
  ```
