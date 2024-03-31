## Gọi Observable trong Angular

**Khái niệm:**

Gọi Observable là hành động kích hoạt Observable để phát ra các giá trị. Khi bạn gọi một Observable, nó sẽ bắt đầu phát ra các giá trị cho đến khi nó hoàn tất hoặc bị hủy.

**Cách gọi Observable:**

Có hai cách chính để gọi Observable:

- **Sử dụng phương thức `subscribe`:**

```typescript
const observable = Observable.ajax("/api/users");

observable.subscribe((data) => {
  // Xử lý dữ liệu
});
```

- **Sử dụng toán tử `pipe`:**

```typescript
const observable = Observable.ajax("/api/users");

const transformedObservable = observable.pipe(
  map((data) => data.map((user) => user.name))
);

transformedObservable.subscribe((data) => {
  // Xử lý dữ liệu đã được biến đổi
});
```

**Lợi ích:**

- Cung cấp một cách đơn giản để kích hoạt Observable phát ra các giá trị.
- Cho phép xử lý dữ liệu được phát ra từ Observable.
- Cho phép hủy Observable khi không còn cần thiết.

**Hạn chế:**

- Có thể khó hiểu đối với người mới bắt đầu.
- Có thể gây ra lỗi nếu không được sử dụng đúng cách.

**Tài liệu tham khảo:**

- RxJS documentation on subscribing to Observables: [https://rxjs.dev/guide/observable](https://rxjs.dev/guide/observable)

**Lưu ý:**

- Khi bạn gọi một Observable, nó sẽ bắt đầu phát ra các giá trị ngay lập tức.
- Bạn có thể sử dụng toán tử `take` để giới hạn số lượng giá trị được phát ra từ Observable.
- Bạn có thể sử dụng toán tử `filter` để chỉ lấy những giá trị mà bạn quan tâm.

**Kết luận:**

Gọi Observable là một bước quan trọng để sử dụng RxJS trong Angular. Có hai cách chính để gọi Observable, bạn nên sử dụng cách phù hợp nhất với nhu cầu của mình.

**Ví dụ thêm:**

- **Sử dụng toán tử `takeUntil` để hủy Observable sau một khoảng thời gian nhất định:**

```typescript
const observable = Observable.interval(1000);

const subscription = observable
  .pipe(takeUntil(Observable.timer(5000)))
  .subscribe((data) => {
    // Xử lý dữ liệu sau mỗi giây
  });

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
```

- **Sử dụng toán tử `retry` để thử lại việc lấy dữ liệu từ API nếu xảy ra lỗi:**

```typescript
const observable = Observable.ajax("/api/users");

const retriedObservable = observable.pipe(retry(3));

retriedObservable.subscribe((data) => {
  // Xử lý dữ liệu từ API
});
```
