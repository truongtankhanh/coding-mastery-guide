## Toán tử sample() và sampleTime() trong RxJS

**Khái niệm:**

Toán tử `sample` và `sampleTime` là hai **Filtering Operators** trong RxJS dùng để **phát ra giá trị mới nhất được phát ra bởi một Observable tại một thời điểm cụ thể**.

**Ngữ cảnh:**

Toán tử `sample` và `sampleTime` thường được sử dụng trong Angular để:

* **Lấy mẫu dữ liệu** từ một Observable theo một khoảng thời gian nhất định.
* **Chỉ lấy giá trị mới nhất** được phát ra bởi một Observable tại một thời điểm cụ thể.
* **Kết hợp hai Observables** bằng cách lấy mẫu dữ liệu từ một Observable và phát ra giá trị mới nhất của Observable kia tại thời điểm lấy mẫu.

**Cách sử dụng:**

**Toán tử sample:**

* Toán tử `sample` nhận một **observable** làm tham số. Observable này được sử dụng để xác định thời điểm lấy mẫu dữ liệu.
* Khi observable được phát ra một giá trị, toán tử `sample` sẽ phát ra giá trị mới nhất được phát ra bởi Observable nguồn tại thời điểm đó.

**Ví dụ:**

```typescript
import { of, sample } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const sourceObservable = of(1, 2, 3, 4, 5);

// Observable phát ra giá trị "a", "b", "c" liên tục
const sampleObservable = of("a", "b", "c");

// Lấy mẫu dữ liệu từ sourceObservable tại thời điểm sampleObservable phát ra một giá trị
const observable = sourceObservable.pipe(
  sample(sampleObservable),
);

observable.subscribe(console.log);

// In ra:
// 1
// 3
// 5
```

**Toán tử sampleTime:**

* Toán tử `sampleTime` nhận một **khoảng thời gian** làm tham số.
* Toán tử `sampleTime` sẽ phát ra giá trị mới nhất được phát ra bởi Observable nguồn tại mỗi khoảng thời gian được chỉ định.

**Ví dụ:**

```typescript
import { of, sampleTime } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const observable = of(1, 2, 3, 4, 5).pipe(
  // Lấy mẫu dữ liệu sau mỗi 500ms
  sampleTime(500),
);

observable.subscribe(console.log);

// In ra:
// 1
// 3
// 5
```

**Lưu ý:**

* Toán tử `sample` và `sampleTime` chỉ **phát ra giá trị mới nhất** được phát ra bởi Observable nguồn tại thời điểm lấy mẫu.
* Toán tử `sample` và `sampleTime` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS sample(): [https://rxjs.dev/api/operators/sample](https://rxjs.dev/api/operators/sample)
* RxJS sampleTime(): [https://rxjs.dev/api/operators/sampleTime](https://rxjs.dev/api/operators/sampleTime)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `sample` và `sampleTime` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, sample, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const sourceObservable = of(1, 2, 3, 4, 5);

// Observable phát ra giá trị "a", "b", "c" liên tục
const sampleObservable = of("a", "b", "c");

// Lấy mẫu dữ liệu từ sourceObservable tại thời điểm sampleObservable phát ra một giá trị, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observable = sourceObservable.pipe(
  sample(sampleObservable),
  map((value) => value * value),
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta