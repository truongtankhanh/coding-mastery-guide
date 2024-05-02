## Toán tử pairwise() trong RxJS

**Khái niệm:**

Toán tử `pairwise` là một **Combination Operator** trong RxJS dùng để **phát ra các giá trị liên tiếp** dưới dạng **mảng** từ Observable.

**Ngữ cảnh:**

Toán tử `pairwise` thường được sử dụng trong Angular để:

* **So sánh các giá trị liên tiếp** trong một Observable.
* **Tính toán sự thay đổi** giữa các giá trị liên tiếp.
* **Lọc các giá trị liên tiếp** dựa trên một điều kiện.

**Cách sử dụng:**

Toán tử `pairwise` không nhận tham số nào.

Toán tử sẽ phát ra một mảng gồm hai giá trị liên tiếp từ Observable. Mảng đầu tiên sẽ chứa hai giá trị đầu tiên, mảng thứ hai sẽ chứa hai giá trị tiếp theo, v.v.

**Ví dụ:**

```typescript
import { of, pairwise } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4
const observable = of(1, 2, 3, 4);

// Phát ra các giá trị liên tiếp dưới dạng mảng
const observableWithPairwise = observable.pipe(
  pairwise(),
);

observableWithPairwise.subscribe(console.log);

// In ra:
// [1, 2]
// [2, 3]
// [3, 4]
```

**Lưu ý:**

* Toán tử `pairwise` **bỏ qua** giá trị đầu tiên của Observable.
* Toán tử `pairwise` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS pairwise(): [https://rxjs.dev/api/operators/pairwise](https://rxjs.dev/api/operators/pairwise)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `pairwise` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, pairwise, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4
const observable = of(1, 2, 3, 4);

// Phát ra các giá trị liên tiếp dưới dạng mảng, sau đó lấy hiệu số giữa hai giá trị và chỉ lấy các giá trị lớn hơn 0
const observableWithPairwise = observable.pipe(
  pairwise(),
  map(([prev, curr]) => curr - prev),
  filter((value) => value > 0),
);

observableWithPairwise.subscribe(console.log);

// In ra:
// 1
// 1
```

Trong ví dụ trên, chúng ta sử dụng toán tử `pairwise` để phát ra các giá trị liên tiếp dưới dạng mảng, sau đó lấy hiệu số giữa hai giá trị và chỉ lấy các giá trị lớn hơn 0.

## Kết luận

Toán tử `pairwise` là một công cụ mạnh mẽ để so sánh các giá trị liên tiếp trong một Observable, tính toán sự thay đổi giữa các giá trị liên tiếp hoặc lọc các giá trị liên tiếp dựa trên một điều kiện. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu phức tạp** trong ứng dụng.