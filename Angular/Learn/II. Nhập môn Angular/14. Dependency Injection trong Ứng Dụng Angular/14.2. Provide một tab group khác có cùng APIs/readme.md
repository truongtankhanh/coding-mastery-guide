## Cung cấp một tab group khác có cùng APIs trong Angular

**Khái niệm:**

Cung cấp một tab group khác có cùng APIs trong Angular là kỹ thuật cho phép tạo ra nhiều tab group với cùng chức năng nhưng có thể sử dụng các component khác nhau.

**Ngữ cảnh:**

Kỹ thuật này được sử dụng trong nhiều trường hợp, ví dụ như:

- **Tạo ra các tab group có giao diện khác nhau:** Có thể sử dụng các component khác nhau để tạo ra các tab group có giao diện khác nhau.
- **Tạo ra các tab group có chức năng khác nhau:** Có thể sử dụng các component khác nhau để tạo ra các tab group có chức năng khác nhau.
- **Tái sử dụng code:** Có thể sử dụng cùng một component để tạo ra nhiều tab group khác nhau.

**Cách sử dụng:**

Có hai cách để cung cấp một tab group khác có cùng APIs:

**1. Sử dụng directive `@ContentChildren`:**

- **Component cha:**

```typescript
export class ParentComponent {
  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;

  constructor() {}

  selectTab(tab: TabComponent) {
    this.tabComponents.forEach((t) => (t.selected = false));
    tab.selected = true;
  }
}
```

- **Component con:**

```typescript
export class TabComponent {
  @Input() selected: boolean;

  constructor() {}

  ngOnInit() {
    this.selected = false;
  }
}
```

**2. Sử dụng service:**

- **Component cha:**

```typescript
export class ParentComponent {
  constructor(private tabService: TabService) {}

  selectTab(tab: TabComponent) {
    this.tabService.selectTab(tab);
  }
}
```

- **Component con:**

```typescript
export class TabComponent {
  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabService.selectTab(this);
  }
}
```

**Lưu ý:**

- Có thể sử dụng nhiều cách khác nhau để cung cấp một tab group khác có cùng APIs.
- Cần chú ý đến việc quản lý vòng đời của các component khi sử dụng kỹ thuật này.

**Ngoài ra, bạn có thể tham khảo thêm:**

- Angular documentation: [https://angular.io/guide/component-interaction](https://angular.io/guide/component-interaction)

**Một số ví dụ nâng cao về sử dụng cung cấp một tab group khác có cùng APIs:**

- **Tạo ra một modal dialog chung có thể được sử dụng với nhiều loại nội dung khác nhau.**
- **Tạo ra một layout phức tạp với header, sidebar và content area.**
- **Tái sử dụng code bằng cách tạo ra một component chung có thể được sử dụng với nhiều loại dữ liệu khác nhau.**
- **Hiển thị nội dung động dựa trên dữ liệu từ API.**

**Hy vọng những thông tin trên giúp bạn hiểu rõ hơn về việc cung cấp một tab group khác có cùng APIs trong Angular.**
