## Type Alias trong TypeScript

**Khái niệm:**

Type Alias là một tính năng của TypeScript cho phép bạn tạo ra một tên mới cho một kiểu dữ liệu hiện có. Ví dụ, bạn có thể tạo ra một type alias tên là `MyNumber` cho kiểu dữ liệu `number`.

**Ngữ cảnh:**

Type Alias được sử dụng trong nhiều trường hợp khác nhau, ví dụ như:

- Đặt tên cho các kiểu dữ liệu phức tạp để dễ đọc và dễ nhớ hơn. Ví dụ, bạn có thể tạo ra một type alias tên là `User` cho một kiểu dữ liệu là một đối tượng có tên, email và số điện thoại.
- Tái sử dụng các kiểu dữ liệu trong nhiều nơi trong code. Ví dụ, bạn có thể tạo ra một type alias tên là `Color` cho kiểu dữ liệu `string` và sử dụng type alias này trong nhiều component khác nhau của Angular.
- Giúp code dễ bảo trì hơn. Ví dụ, nếu bạn thay đổi kiểu dữ liệu của `User`, bạn chỉ cần thay đổi định nghĩa của type alias `User` và tất cả các component sử dụng type alias này sẽ tự động được cập nhật.

**Cách sử dụng:**

Để tạo ra một type alias, bạn sử dụng cú pháp sau:

```typescript
type TypeAliasName = ExistingType;
```

Trong đó:

- `TypeAliasName` là tên của type alias.
- `ExistingType` là kiểu dữ liệu hiện có.

**Ví dụ:**

```typescript
type MyNumber = number;

let age: MyNumber = 123; // OK

type User = {
  name: string;
  email: string;
  phone: number;
};

let user: User = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: 1234567890,
};
```

**Lợi ích:**

- Type Alias giúp code dễ đọc và dễ hiểu hơn.
- Type Alias giúp code ngắn gọn hơn.
- Type Alias giúp code dễ bảo trì hơn.

**Kết luận:**

Type Alias là một tính năng hữu ích của TypeScript giúp bạn viết code dễ đọc, dễ hiểu, ngắn gọn và dễ bảo trì.

**Lưu ý:**

- Type Alias chỉ được hỗ trợ bởi TypeScript, không được hỗ trợ bởi JavaScript.
