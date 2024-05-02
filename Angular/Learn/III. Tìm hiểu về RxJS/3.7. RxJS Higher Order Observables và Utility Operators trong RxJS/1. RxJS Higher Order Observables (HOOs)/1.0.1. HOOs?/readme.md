## Nguồn gốc của Higher Order Observables

**Khái niệm:**

**Higher Order Observables (HOOs)** là một loại Observable đặc biệt trong RxJS, **phát ra Observable khác** thay vì giá trị đơn lẻ.

**Ngữ cảnh:**

HOOs thường được sử dụng trong Angular để:

* **Tạo ra các luồng dữ liệu phức tạp**
* **Kết hợp các Observable khác nhau**
* **Xử lý các luồng dữ liệu theo cách linh hoạt**

**Cách sử dụng:**

Có nhiều HOOs khác nhau trong RxJS, mỗi HOO có chức năng riêng biệt. Một số HOO phổ biến bao gồm:

* **`map`**: Biến đổi giá trị được phát ra từ Observable.
* **`filter`**: Lọc các giá trị được phát ra từ Observable.
* **`merge`**: Kết hợp nhiều Observable thành một Observable duy nhất.
* **`switch`**: Chuyển đổi giữa các Observable dựa trên một Observable khác.
* **`concat`**: Phát ra các giá trị từ Observable theo thứ tự.

**Ví dụ:**

**`map`**:

```typescript
import { of, map } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Biến đổi giá trị thành bình phương của giá trị
const observableWithMap = observable.pipe(
  map((value) => value * value),
);

observableWithMap.subscribe(console.log);

// In ra:
// 1
// 4
// 9
```

**Lưu ý:**

* HOOs là một công cụ mạnh mẽ, nhưng có thể **khiến mã code trở nên khó hiểu** nếu sử dụng quá nhiều.
* Nên sử dụng HOOs một cách **cẩn thận** và **tận dụng** các chức năng của HOOs để **giảm thiểu mã code** và **tăng hiệu quả** xử lý luồng dữ liệu.

**Tài liệu tham khảo:**

* Higher Order Observables in RxJS: [https://gianttoast.gitbooks.io/rxjs-observables/content/higher-order-observables.html](https://gianttoast.gitbooks.io/rxjs-observables/content/higher-order-observables.html)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Nguồn gốc

HOOs được giới thiệu trong RxJS v5.0. HOOs được lấy cảm hứng từ các **hàm bậc cao** trong lập trình chức năng, cho phép **truyền các hàm vào các hàm khác** và **trả về các hàm mới**.

## Ví dụ nâng cao

HOOs có thể được sử dụng kết hợp với nhau để tạo ra các luồng dữ liệu phức tạp. Ví dụ:

```typescript
import { of, map, filter, merge, switch, concat } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Observable phát ra giá trị 4, 5, 6
const observable2 = of(4, 5, 6);

// Observable phát ra giá trị "A", "B", "C"
const observable3 = of('A', 'B', 'C');

// Kết hợp các Observable
const observableWithMerge = merge(observable1, observable2);

// Chuyển đổi giữa các Observable
const observableWithSwitch = observable3.pipe(
  switch((value) => {
    if (value === 'A') {
      return observable1;
    } else if (value === 'B') {
      return observable2;
    } else {
      return of([]);
    }
  }),
);

// Phát ra các giá trị từ Observable theo thứ tự
const observableWithConcat = concat(observable1, observable2);

observableWithMerge.subscribe(console.log);
observableWithSwitch.subscribe(console.log);
observableWithConcat.subscribe(console.log);

// In ra:
// 1
// 4
// 2
// 5
// 3
// 6
// A
// 1
// 2
// 3
// B
// 4
// 5
// 6
```

## Kết luận

HOOs là một công cụ mạnh mẽ để tạo ra các luồng dữ liệu phức tạp trong Angular. HOOs giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.
