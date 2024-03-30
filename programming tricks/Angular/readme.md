# Bí quyết Lập Trình Angular: Tối Ưu Hóa Hiệu Suất và Cải Thiện Trải Nghiệm Phát Triển

Angular là một framework phát triển ứng dụng web front-end mạnh mẽ, nhưng để thực sự tận dụng được toàn bộ tiềm năng của nó, bạn cần hiểu rõ các kỹ thuật và mẹo lập trình. Dưới đây là một số bí quyết quan trọng để bạn có thể áp dụng khi làm việc với Angular:

## 1. Sử dụng TrackBy trong `*ngFor`

Khi sử dụng `*ngFor` để lặp qua một mảng trong Angular, luôn sử dụng `trackBy` để cải thiện hiệu suất. `trackBy` giúp Angular xác định các phần tử đã thay đổi và chỉ render lại những phần tử đó, giảm bớt việc render không cần thiết.

```typescript
@Component({
  selector: "app-item-list",
  template: `
    <div *ngFor="let item of items; trackBy: trackByFn">
      {{ item.id }} - {{ item.name }}
    </div>
  `,
})
export class ItemListComponent {
  items: Item[];

  trackByFn(index: number, item: Item): number {
    return item.id; // hoặc return unique identifier của item
  }
}
```

## 2. Sử dụng Lazy Loading cho các Module

Sử dụng lazy loading để tải các module chỉ khi cần thiết. Điều này giúp giảm thời gian tải ứng dụng ban đầu và cải thiện hiệu suất.

```typescript
const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
];
```

## 3. Sử dụng RxJS Operators

RxJS cung cấp nhiều operators hữu ích cho việc xử lý dữ liệu và các sự kiện trong Angular. Sử dụng chúng để giảm thiểu việc sử dụng nested subscribe và tối ưu hóa mã nguồn.

```typescript
import { from } from "rxjs";
import { filter, map } from "rxjs/operators";

const source$ = from([1, 2, 3, 4, 5]);

source$
  .pipe(
    filter((num) => num % 2 === 0),
    map((num) => num * 2)
  )
  .subscribe(console.log); // Output: 4, 8
```

## 4. Sử dụng Angular CLI để Tạo Component, Directive, Service, vv.

Angular CLI cung cấp các lệnh mạnh mẽ để tạo nhanh các thành phần khác nhau của ứng dụng Angular. Sử dụng chúng để tiết kiệm thời gian và giảm bớt sai sót.

```bash
ng generate component my-component
ng generate directive my-directive
ng generate service my-service
```

## 5. Sử Dụng Cơ Chế Dependency Injection (DI) của Angular

Sử dụng Dependency Injection để quản lý các phụ thuộc và tạo các ứng dụng dễ bảo trì và kiểm thử.

```typescript
@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}
}
```
