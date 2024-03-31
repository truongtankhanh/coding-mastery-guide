## Toán tử audit() và auditTime() trong RxJS

**Khái niệm:**

Toán tử `audit` và `auditTime` là hai **Filtering Operators** trong RxJS dùng để **chỉ phát ra giá trị mới nhất được phát ra sau một khoảng thời gian nhất định**.

**Ngữ cảnh:**

Toán tử `audit` và `auditTime` thường được sử dụng trong Angular để:

* **Loại bỏ các giá trị nhiễu (noise)** trong Observable.
* **Chỉ xử lý giá trị mới nhất được phát ra** sau một khoảng thời gian nhất định.
* **Tăng hiệu suất ứng dụng** bằng cách chỉ xử lý các giá trị quan trọng.

**Cách sử dụng:**

**Toán tử audit:**

* Toán tử `audit` nhận một **observable** làm tham số. Observable này được sử dụng để xác định thời điểm phát ra giá trị mới nhất.
* Khi observable được phát ra một giá trị, toán tử `audit` sẽ chỉ phát ra giá trị mới nhất được phát ra bởi Observable nguồn sau khi khoảng thời gian được chỉ định trôi qua.

**Ví dụ:**

```typescript
import { of, audit } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const sourceObservable = of(1, 2, 3, 4, 5);

// Observable phát ra giá trị "a", "b", "c" liên tục
const auditObservable = of("a", "b", "c");

// Chỉ phát ra giá trị mới nhất của sourceObservable sau khi auditObservable phát ra một giá trị
const observable = sourceObservable.pipe(
  audit(auditObservable),
);

observable.subscribe(console.log);

// In ra:
// 1
// 3
// 5
```

**Toán tử auditTime:**

* Toán tử `auditTime` nhận một **khoảng thời gian** làm tham số.
* Toán tử `auditTime` chỉ phát ra giá trị mới nhất được phát ra sau khi khoảng thời gian được chỉ định trôi qua.

**Ví dụ:**

```typescript
import { of, auditTime } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const observable = of(1, 2, 3, 4, 5).pipe(
  // Chỉ phát ra giá trị mới nhất sau mỗi 500ms
  auditTime(500),
);

observable.subscribe(console.log);

// In ra:
// 1
// 3
// 5
```

**Lưu ý:**

* Toán tử `audit` và `auditTime` chỉ **bỏ qua các giá trị** được phát ra trong một khoảng thời gian nhất định, **không bỏ qua giá trị đầu tiên**.
* Toán tử `audit` và `auditTime` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS audit(): [https://rxjs.dev/api/operators/audit](https://rxjs.dev/api/operators/audit)
* RxJS auditTime(): [https://rxjs.dev/api/operators/auditTime](https://rxjs.dev/api/operators/auditTime)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `audit` và `auditTime` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, audit, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const sourceObservable = of(1, 2, 3, 4, 5);

// Observable phát ra giá trị "a", "b", "c" liên tục
const auditObservable = of("a", "b", "c");

// Chỉ phát ra giá trị mới nhất của sourceObservable sau khi auditObservable phát ra một giá trị, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observable = sourceObservable.pipe(
  audit(auditObservable),
  map((value) => value * value),
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `audit` để chỉ phát ra giá trị mới nhất của sourceObservable sau khi auditObservable phát ra một giá trị,