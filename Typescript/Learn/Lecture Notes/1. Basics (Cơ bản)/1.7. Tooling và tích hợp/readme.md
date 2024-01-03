## Cấu hình TypeScript Compiler (tsconfig).

Cấu hình TypeScript Compiler (tsconfig) là cách để thiết lập và tùy chỉnh cách compiler (trình biên dịch) TypeScript hoạt động trong dự án của bạn.

### Khái niệm

File `tsconfig.json` chứa các cài đặt và tùy chọn để chỉ định cách mà TypeScript Compiler sẽ biên dịch mã nguồn TypeScript của bạn.

### Ngữ cảnh

Cấu hình `tsconfig.json` cho phép bạn điều chỉnh cách TypeScript Compiler xử lý mã nguồn TypeScript, bao gồm các thiết lập như kiểu module, target ECMAScript, cách xử lý source maps, và nhiều thiết lập khác.

### Cách sử dụng và ví dụ

#### Tạo một file tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### Chi tiết một số tùy chọn thông dụng:

- `"target"`: Xác định phiên bản ECMAScript mà mã sẽ được biên dịch đến. Ví dụ: "es5", "es6", "es2015", "esnext".
- `"module"`: Xác định loại module sẽ được sử dụng trong mã biên dịch. Ví dụ: "commonjs", "amd", "es6", "system", "umd".
- `"strict"`: Bật hoặc tắt chế độ kiểm tra nghiêm ngặt. Ví dụ: kiểm tra kiểu dữ liệu chặt chẽ, kiểm tra null hoặc undefined, v.v.
- `"outDir"`: Đường dẫn đến thư mục sẽ lưu trữ mã JavaScript sau khi biên dịch.
- `"include"`: Đường dẫn hoặc patterns của các file TypeScript sẽ được compiler xử lý.
- `"exclude"`: Đường dẫn hoặc patterns của các file hoặc thư mục không muốn compiler xử lý.

### Tóm tắt

`tsconfig.json` là một cách để cấu hình TypeScript Compiler trong dự án của bạn. Nó cho phép bạn xác định các tùy chọn biên dịch như phiên bản ECMAScript, loại module, cách kiểm tra nghiêm ngặt, và cài đặt khác. Bằng cách tùy chỉnh `tsconfig.json`, bạn có thể quản lý cách mã TypeScript của mình được biên dịch và xử lý.

---

## Sử dụng TypeScript với các framework phổ biến như Angular, React hoặc Node.js.

Sử dụng TypeScript với các framework như Angular, React hoặc Node.js là cách tuyệt vời để tận dụng tính linh hoạt và tính năng mạnh mẽ của TypeScript trong phát triển ứng dụng web hoặc back-end.

### Khái niệm

#### TypeScript với Angular:

Angular đã tích hợp TypeScript như là ngôn ngữ chính để phát triển ứng dụng web. TypeScript cung cấp kiểu dữ liệu tĩnh, gợi ý code và tính năng mạnh mẽ khác phù hợp với việc phát triển ứng dụng Angular.

#### TypeScript với React:

React không yêu cầu việc sử dụng TypeScript, nhưng TypeScript được sử dụng rộng rãi để cải thiện sự rõ ràng của mã nguồn, bảo trì và quản lý state trong ứng dụng React.

#### TypeScript với Node.js:

Node.js cho phép bạn sử dụng TypeScript trong phát triển back-end. Sử dụng TypeScript trong Node.js giúp kiểm soát rõ ràng hơn về kiểu dữ liệu và tận dụng tính năng mạnh mẽ của TypeScript trong phát triển server-side.

### Ngữ cảnh

Sử dụng TypeScript cùng với các framework như Angular, React hoặc Node.js giúp tăng tính rõ ràng, bảo trì mã nguồn dễ dàng hơn, và hỗ trợ tính tái sử dụng code tốt hơn.

### Cách sử dụng và ví dụ

#### Angular với TypeScript:

Angular cung cấp môi trường tốt để sử dụng TypeScript. Dưới đây là một ví dụ cơ bản:

```typescript
// app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "My Angular App";
}
```

#### React với TypeScript:

React không yêu cầu TypeScript, nhưng bạn có thể sử dụng TypeScript để phát triển ứng dụng React:

```typescript
// HelloWorld.tsx
import React from "react";

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default HelloWorld;
```

#### Node.js với TypeScript:

Sử dụng TypeScript trong Node.js giúp kiểm soát kiểu dữ liệu và tính linh hoạt của code back-end:

```typescript
// index.ts
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello TypeScript with Node.js!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

### Tóm tắt

Sử dụng TypeScript cùng với các framework như Angular, React hoặc Node.js giúp tận dụng các tính năng mạnh mẽ của TypeScript trong việc phát triển ứng dụng web hoặc back-end. TypeScript cung cấp kiểm soát rõ ràng hơn về kiểu dữ liệu và tính linh hoạt, giúp tăng tính rõ ràng và dễ bảo trì trong mã nguồn của bạn.

---
