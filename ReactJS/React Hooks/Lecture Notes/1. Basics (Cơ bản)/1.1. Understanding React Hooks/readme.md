Chúng ta sẽ bắt đầu với hiểu cơ bản về `useState` trong React và cách sử dụng nó với TypeScript.

### Khái Niệm:

`useState` là một trong những React Hook cơ bản nhất, được sử dụng để quản lý state trong functional components của React. Nó cho phép chúng ta có state trong functional components mà không cần sử dụng class components.

### Ngữ Cảnh:

Trước khi sử dụng `useState`, bạn cần import nó từ thư viện React:

```typescript
import React, { useState } from 'react';
```

### Cách Sử Dụng và Ví Dụ:

Ví dụ dưới đây minh họa cách sử dụng `useState` với TypeScript:

```typescript
import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Sử dụng useState để tạo state có giá trị ban đầu là 0
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Sử dụng setCount để cập nhật giá trị của count */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```

Trong ví dụ này:

- `useState(0)` khởi tạo một state có tên là `count` và giá trị ban đầu là `0`.
- `setCount` là một hàm được trả về bởi `useState`, dùng để cập nhật giá trị của `count`.
- Khi nút "Increase" được click, `setCount(count + 1)` được gọi để tăng giá trị của `count` lên 1.

Khi `useState` được sử dụng với TypeScript, ta có thể chỉ định kiểu dữ liệu của state (trong ví dụ này là `number`) để TypeScript có thể kiểm tra kiểu dữ liệu và đảm bảo rằng các giá trị được gán cho state phải phù hợp với kiểu được xác định.

`useState` là một công cụ mạnh mẽ để quản lý state trong functional components của React và khi kết hợp với TypeScript, nó giúp kiểm tra kiểu dữ liệu một cách an toàn hơn trong quá trình phát triển ứng dụng.