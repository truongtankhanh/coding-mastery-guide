1. [Tối ưu hóa TypeScript](#1-tối-ưu-hóa-typescript)
   - [Tối ưu hóa hiệu suất](#a-tối-ưu-hóa-hiệu-suất)
   - [Sử dụng TypeScript hiệu quả trong các dự án lớn](#b-sử-dụng-typescript-hiệu-quả-trong-các-dự-án-lớn)
2. [Integrate with Frameworks](#2-integrate-with-frameworks)
   - [Áp dụng TypeScript vào các framework phổ biến](#áp-dụng-typescript-vào-các-framework-phổ-biến)

---

### 1. **Tối ưu hóa TypeScript:**

#### a. Tối ưu hóa hiệu suất:

- **Tree shaking:** Loại bỏ mã không sử dụng trong quá trình biên dịch để giảm kích thước bundle.
- **Module Resolution và Aliases:** Sử dụng cấu hình module resolution và aliases để quản lý cấu trúc thư mục và giảm thời gian tìm kiếm file.

#### _Ví dụ:_

```typescript
// Sử dụng module alias
import * as MyModule from "@myModule/utils";

// Config module resolution trong tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@myModule/*": ["src/myModule/*"]
    }
  }
}
```

---

#### b. Sử dụng TypeScript hiệu quả trong các dự án lớn:

- **Generics và Advanced Types:** Sử dụng generics và các loại kiểu nâng cao để tạo mã linh hoạt và dễ bảo trì.
- **Module System:** Tận dụng tính năng module trong TypeScript để phân chia mã nguồn và tạo cấu trúc rõ ràng.

#### _Ví dụ:_

```typescript
// Sử dụng generics
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");
```

---

### 2. **Integrate with Frameworks:**

#### Áp dụng TypeScript vào các framework phổ biến:

- **Angular:** Tận dụng tính năng strong typing của TypeScript trong việc phát triển ứng dụng Angular.
- **React:** Sử dụng TypeScript với React để có kiểm soát tốt hơn về kiểu dữ liệu và tránh các lỗi runtime.

#### _Ví dụ (Angular):_

```typescript
// Component với TypeScript trong Angular
import { Component } from "@angular/core";

@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.css"],
})
export class ExampleComponent {
  title: string = "Hello Angular!";
}
```

#### _Ví dụ (React):_

```typescript
// Sử dụng TypeScript với React
import React, { FC } from "react";

interface Props {
  name: string;
}

const Greet: FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greet;
```

---

Tối ưu hóa TypeScript cho hiệu suất tốt hơn và triển khai trong các framework phổ biến như Angular và React có thể giúp bạn xây dựng ứng dụng chất lượng cao với kiểm soát tốt hơn về kiểu dữ liệu và hiệu suất.

---
