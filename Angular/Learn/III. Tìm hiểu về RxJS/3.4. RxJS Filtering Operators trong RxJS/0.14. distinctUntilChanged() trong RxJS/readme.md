## Toán tử distinctUntilChanged() trong RxJS

**Khái niệm:**

Toán tử `distinctUntilChanged` là một **Filtering Operator** trong RxJS dùng để **phát ra một giá trị chỉ khi nó khác với giá trị đã phát ra trước đó**.

**Ngữ cảnh:**

Toán tử `distinctUntilChanged` thường được sử dụng trong Angular để:

* Loại bỏ các giá trị liên tiếp trùng lặp được phát ra bởi Observable.
* Chỉ phát ra các giá trị thay đổi.
* Giảm kích thước của Observable.

**Cách sử dụng:**

Toán tử `distinctUntilChanged` có thể được sử dụng với hoặc không có **hàm comparer**. Hàm comparer được sử dụng để so sánh hai giá trị và xác định xem chúng có trùng lặp hay không.

**Ví dụ:**

```typescript
import { of, distinctUntilChanged } from 'rxjs';

// Observable phát ra giá trị 1, 2, 1, 3, 2, 4
const observable = of(1, 2, 1, 3, 2, 4);

// Phát ra giá trị chỉ khi nó khác với giá trị đã phát ra trước đó
const distinctUntilChangedObservable = observable.pipe(
  distinctUntilChanged(),
);

distinctUntilChangedObservable.subscribe(console.log); // In ra: 1, 2, 3, 2, 4
```

**Ví dụ sử dụng hàm comparer:**

```typescript
import { of, distinctUntilChanged, map } from 'rxjs';

// Observable phát ra giá trị "a", "b", "A", "B", "a", "b"
const observable = of("a", "b", "A", "B", "a", "b");

// So sánh hai giá trị sau khi chuyển đổi sang chữ hoa
const distinctUntilChangedObservable = observable.pipe(
  distinctUntilChanged((value) => value.toUpperCase()),
);

distinctUntilChangedObservable.subscribe(console.log); // In ra: a, b, A, B
```

**Lưu ý:**

* Toán tử `distinctUntilChanged` chỉ so sánh **hai giá trị liên tiếp** được phát ra.
* Toán tử `distinctUntilChanged` **không so sánh** các giá trị được phát ra **trong quá khứ**.
* Hàm comparer có thể được sử dụng để so sánh các giá trị theo bất kỳ cách nào.

**Tài liệu tham khảo:**

* RxJS distinctUntilChanged(): [https://rxjs.dev/api/operators/distinctUntilChanged](https://rxjs.dev/api/operators/distinctUntilChanged)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `distinctUntilChanged` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, distinctUntilChanged, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 1, 3, 2, 4
const observable = of(1, 2, 1, 3, 2, 4);

// Lấy bình phương của các giá trị, chỉ phát ra các giá trị thay đổi và chỉ lấy các giá trị lớn hơn 2
const distinctUntilChangedSquaredObservable = observable.pipe(
  map((value) => value * value),
  distinctUntilChanged(),
  filter((value) => value > 2),
);

distinctUntilChangedSquaredObservable.subscribe(console.log); // In ra: 9, 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `distinctUntilChanged` để chỉ phát ra các giá trị thay đổi sau khi lấy bình phương của các giá trị và lọc các giá trị nhỏ hơn 2.

## Kết luận

Toán tử `distinctUntilChanged` là một công cụ mạnh mẽ để loại bỏ các giá trị liên tiếp trùng lặp được phát ra bởi Observable. Toán tử này giúp **giảm kích thước của Observable**, **tăng hiệu suất của ứng dụng** và **giảm thiểu mã code**.

**Ngoài ra:**

* Toán tử `distinctUntilChanged` có thể được sử dụng với hoặc không có hàm comparer.
* Hàm comparer có thể được sử dụng để so sánh các giá trị theo bất kỳ cách nào.

## Lưu ý

* Các ví dụ được cung cấp trong bài viết này chỉ là ví dụ minh họa. Bạn có thể áp dụng các toán tử RxJS theo nhiều cách khác nhau để đáp ứng nhu cầu cụ thể của mình.
* Tham khảo tài liệu RxJS chính thức để biết thêm thông tin chi tiết về các toán tử