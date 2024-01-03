## Async/Await: sử dụng `async` và `await` để xử lý các hàm bất đồng bộ.

Async/Await là một tính năng của TypeScript (và JavaScript) giúp quản lý và xử lý hàm bất đồng bộ một cách đồng bộ, làm cho việc viết code và xử lý các tác vụ không đồng bộ trở nên dễ dàng và rõ ràng hơn.

### Khái niệm:

Async/Await là cách để viết và xử lý các hàm bất đồng bộ trong JavaScript/TypeScript một cách đồng bộ. `async` được sử dụng để khai báo một hàm là bất đồng bộ, trong khi `await` được sử dụng để đợi một Promise được giải quyết và trả về kết quả.

### Ngữ cảnh:

Async/Await thường được sử dụng khi cần thực hiện các tác vụ không đồng bộ như gọi API, đọc/ghi file, truy vấn cơ sở dữ liệu mà không làm chậm việc thực thi code.

### Cách sử dụng:

Sử dụng từ khóa `async` trước một hàm để chỉ định rằng hàm đó sẽ chứa các tác vụ bất đồng bộ. Sử dụng `await` trong hàm async để đợi và nhận kết quả từ một Promise.

Ví dụ:

```typescript
// Hàm bất đồng bộ trả về một Promise sau một khoảng thời gian nhất định
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Sử dụng async/await để xử lý hàm bất đồng bộ
async function processData() {
  console.log("Start");
  try {
    await delay(2000); // Chờ 2 giây
    console.log("After 2 seconds");
    await delay(1500); // Chờ thêm 1.5 giây
    console.log("After another 1.5 seconds");
  } catch (error) {
    console.error("Error:", error);
  }
  console.log("End");
}

// Gọi hàm processData
processData();
```

Trong ví dụ trên, hàm `delay` trả về một Promise sau một khoảng thời gian được chỉ định. Hàm `processData` được đánh dấu là `async`, cho phép sử dụng `await` trong nó. Khi gọi `processData`, các lệnh `await` sẽ đợi cho đến khi Promise được giải quyết trước khi thực hiện tiếp các lệnh tiếp theo trong hàm. Điều này giúp đảm bảo các tác vụ bất đồng bộ được xử lý theo thứ tự và dễ quản lý hơn.

---

## Promises và callback functions.

Callback functions và Promises đều được sử dụng để xử lý các tác vụ bất đồng bộ trong JavaScript/TypeScript, nhưng cách tiếp cận và cú pháp của chúng có khác nhau.

### Callback Functions:

- **Khái niệm:** Callback functions là hàm được truyền vào như một đối số và sẽ được gọi lại sau khi một tác vụ bất đồng bộ hoàn thành.
- **Ngữ cảnh:** Callback functions thường được sử dụng trước khi Promises được giới thiệu. Chúng được sử dụng để xử lý các tác vụ bất đồng bộ như gọi API, đọc/ghi file, v.v.
- **Cách sử dụng:**

```typescript
// Ví dụ sử dụng callback function để xử lý kết quả sau khi đợi 2 giây
function delayWithCallback(callback: () => void) {
  setTimeout(() => {
    console.log("Delayed execution");
    callback();
  }, 2000);
}

// Gọi hàm delayWithCallback với một callback function
delayWithCallback(() => {
  console.log("Callback function executed");
});
```

### Promises:

- **Khái niệm:** Promises là một cơ chế để xử lý các tác vụ bất đồng bộ trong JavaScript/TypeScript. Promise có thể ở trạng thái "pending", "fulfilled", hoặc "rejected".
- **Ngữ cảnh:** Promises cung cấp một cách tiếp cận linh hoạt hơn để xử lý các tác vụ bất đồng bộ, giúp tránh callback hell và làm cho code dễ đọc hơn.
- **Cách sử dụng:**

```typescript
// Ví dụ sử dụng Promise để đợi 2 giây rồi trả về kết quả
function delayWithPromise(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delayed execution");
      resolve();
    }, 2000);
  });
}

// Gọi hàm delayWithPromise và sử dụng Promise
delayWithPromise()
  .then(() => {
    console.log("Promise resolved");
  })
  .catch((error) => {
    console.error("Promise rejected", error);
  });
```

Trong ví dụ trên, callback function được sử dụng trong `delayWithCallback` để xử lý kết quả sau khi đợi 2 giây. Trong khi đó, Promise được sử dụng trong `delayWithPromise`, cho phép bạn gọi `.then()` để xử lý khi Promise được giải quyết thành công hoặc `.catch()` để xử lý khi Promise bị reject. Promises cung cấp cách tiếp cận linh hoạt và dễ quản lý hơn trong việc xử lý tác vụ bất đồng bộ.

---
