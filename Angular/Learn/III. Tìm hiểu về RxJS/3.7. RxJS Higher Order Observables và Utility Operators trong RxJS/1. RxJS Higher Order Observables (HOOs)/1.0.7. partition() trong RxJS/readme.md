## Toán tử partition() trong RxJS

**Khái niệm:**

Toán tử `partition` là một **Higher Order Observable (HOO)** trong RxJS dùng để **chia một Observable thành hai Observable mới** dựa trên một **predicate function**.

**Ngữ cảnh:**

Toán tử `partition` thường được sử dụng trong Angular để:

* **Lọc các giá trị dựa trên một điều kiện**
* **Tạo hai luồng dữ liệu riêng biệt từ một Observable**

**Cách sử dụng:**

Toán tử `partition` nhận hai tham số:

* **Observable**: Observable mà bạn muốn chia.
* **Predicate function**: Hàm này nhận giá trị được phát ra từ Observable đầu tiên làm tham số và trả về `true` hoặc `false`.

Toán tử sẽ trả về **hai Observable mới**:

* **Observable thứ nhất**: Phát ra các giá trị mà predicate function trả về `true`.
* **Observable thứ hai**: Phát ra các giá trị mà predicate function trả về `false`.

**Ví dụ:**

```typescript
import { of, partition } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable1 = of(1, 2, 3, 4, 5);

// Chia Observable thành hai Observable dựa trên predicate function
const [evenNumbers, oddNumbers] = partition(observable1, (value) => value % 2 === 0);

// In ra các giá trị chẵn
evenNumbers.subscribe(console.log);

// In ra các giá trị lẻ
oddNumbers.subscribe(console.log);

// In ra:
// 2
// 4
// 1
// 3
// 5
```

**Lưu ý:**

* Predicate function có thể được sử dụng để lọc các giá trị dựa trên bất kỳ điều kiện nào.
* Toán tử `partition` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS partition: [https://rxjs.dev/api/operators/partition](https://rxjs.dev/api/operators/partition)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `partition` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ:**

```typescript
import { of, partition, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable1 = of(1, 2, 3, 4, 5);

// Chia Observable thành hai Observable dựa trên predicate function
const [evenNumbers, oddNumbers] = partition(observable1, (value) => value % 2 === 0);

// Lấy bình phương của các giá trị chẵn
const evenNumbersSquared = evenNumbers.pipe(
  map((value) => value * value),
);

// Lấy bình phương của các giá trị lẻ và chỉ lấy các giá trị lớn hơn 10
const oddNumbersSquaredAndFiltered = oddNumbers.pipe(
  map((value) => value * value),
  filter((value) => value > 10),
);

// In ra các giá trị chẵn sau khi được lấy bình phương
evenNumbersSquared.subscribe(console.log);

// In ra các giá trị lẻ sau khi được lấy bình phương và chỉ lấy các giá trị lớn hơn 10
oddNumbersSquaredAndFiltered.subscribe(console.log);

// In ra:
// 4
// 16
// 36
```

## Kết luận

Toán tử `partition` là một HOO mạnh mẽ để chia một Observable thành hai Observable mới dựa trên một predicate function trong Angular. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.

**Lựa chọn toán tử nào sử dụng:**

* Sử dụng `partition` khi bạn muốn **chia một Observable thành hai Observable riêng biệt** dựa trên một điều kiện.

**Lưu ý:**

* Toán tử `partition` có thể được sử dụng kết hợp với các HOOs khác để tạo ra các luồng dữ liệu phức tạp hơn.
