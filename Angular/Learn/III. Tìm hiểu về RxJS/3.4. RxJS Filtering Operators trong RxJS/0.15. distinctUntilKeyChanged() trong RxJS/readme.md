## Toán tử distinctUntilKeyChanged() trong RxJS

**Khái niệm:**

Toán tử `distinctUntilKeyChanged` là một **Filtering Operator** trong RxJS dùng để **phát ra một giá trị chỉ khi giá trị của một thuộc tính cụ thể (key) thay đổi**.

**Ngữ cảnh:**

Toán tử `distinctUntilKeyChanged` thường được sử dụng trong Angular để:

* Loại bỏ các giá trị liên tiếp trùng lặp dựa trên giá trị của một thuộc tính cụ thể.
* Chỉ phát ra các giá trị thay đổi của một thuộc tính cụ thể.
* Giảm kích thước của Observable.

**Cách sử dụng:**

Toán tử `distinctUntilKeyChanged` nhận một **hàm key selector** làm tham số. Hàm key selector được sử dụng để lấy giá trị của thuộc tính cụ thể từ mỗi giá trị được phát ra bởi Observable.

**Ví dụ:**

```typescript
import { of, distinctUntilKeyChanged } from 'rxjs';

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
  { id: 2, name: "Mary" },
];

// Observable phát ra các đối tượng User
const observable = of(...users);

// Phát ra giá trị chỉ khi giá trị của thuộc tính "name" thay đổi
const distinctUntilKeyChangedObservable = observable.pipe(
  distinctUntilKeyChanged((user) => user.name),
);

distinctUntilKeyChangedObservable.subscribe(console.log);

// In ra:
// { id: 1, name: "John" }
// { id: 2, name: "Jane" }
// { id: 2, name: "Mary" }
```

**Lưu ý:**

* Toán tử `distinctUntilKeyChanged` chỉ so sánh **giá trị của thuộc tính được chọn** (key) của **hai giá trị liên tiếp** được phát ra.
* Toán tử `distinctUntilKeyChanged` **không so sánh** các giá trị của thuộc tính được chọn trong quá khứ.
* Hàm key selector có thể được sử dụng để lấy giá trị của bất kỳ thuộc tính nào.

**Tài liệu tham khảo:**

* RxJS distinctUntilKeyChanged(): [https://rxjs.dev/api/operators/distinctUntilKeyChanged](https://rxjs.dev/api/operators/distinctUntilKeyChanged)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `distinctUntilKeyChanged` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, distinctUntilKeyChanged, map, filter } from 'rxjs';

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 21 },
  { id: 1, name: "John", age: 22 },
  { id: 2, name: "Mary", age: 21 },
];

// Observable phát ra các đối tượng User
const observable = of(...users);

// Lấy tên và tuổi của User, chỉ phát ra các giá trị thay đổi của thuộc tính "name" và chỉ lấy các User có tuổi lớn hơn 20
const distinctUntilKeyChangedObservable = observable.pipe(
  map((user) => ({ name: user.name, age: user.age })),
  distinctUntilKeyChanged((user) => user.name),
  filter((user) => user.age > 20),
);

distinctUntilKeyChangedObservable.subscribe(console.log);

// In ra:
// { name: "John", age: 22 }
// { name: "Mary", age: 21 }
```

Trong ví dụ trên, chúng ta sử dụng toán tử `distinctUntilKeyChanged` để chỉ phát ra các giá trị thay đổi của thuộc tính "name" sau khi lấy tên và tuổi của User và lọc các User có tuổi nhỏ hơn 20.

## Kết luận

Toán tử `distinctUntilKeyChanged` là một công cụ mạnh mẽ để loại bỏ các giá trị liên tiếp trùng lặp dựa trên giá trị của một thuộc tính cụ thể. Toán tử này giúp **giảm kích thước của Observable**,