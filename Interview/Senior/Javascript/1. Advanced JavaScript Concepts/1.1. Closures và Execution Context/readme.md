## Closures là gì? Điều gì xảy ra khi một function được return từ một function khác và closures được tạo ra như thế nào?

Closures là một khái niệm trong lập trình được sử dụng trong nhiều ngôn ngữ, bao gồm cả JavaScript. Nó xuất hiện khi một function được tạo ra trong một phạm vi (scope) và có khả năng truy cập vào các biến của phạm vi đó, ngay cả khi function đã hoàn thành việc thực thi.

Khi một function được return từ một function khác, closures có thể được tạo ra khi function bên trong (function con) vẫn giữ được một tham chiếu đến các biến trong phạm vi của function bên ngoài (function cha). Điều này xảy ra khi function con được trả về và lưu trữ bên ngoài function cha, giữ cho các biến trong phạm vi của function cha không bị hủy khi function cha đã thực thi xong.

Ví dụ minh họa:

```javascript
function outerFunction() {
  let outerVar = "Hello";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const closureExample = outerFunction(); // Gán innerFunction cho closureExample
closureExample(); // Kết quả: 'Hello'
```

Trong ví dụ trên, khi `outerFunction` thực thi và trả về `innerFunction`, `closureExample` giữ tham chiếu đến `innerFunction`. Mặc dù `outerFunction` đã hoàn thành thực thi, `closureExample` vẫn có thể truy cập và sử dụng biến `outerVar` bên trong `outerFunction`. Điều này là do closures giữ cho biến `outerVar` sống sót và có thể được sử dụng bởi `innerFunction`.

Khi trả lời câu hỏi này trong phỏng vấn, bạn có thể nhấn mạnh về việc closures cho phép function con tiếp tục truy cập và sử dụng các biến trong phạm vi của function cha sau khi function cha đã kết thúc thực thi. Bạn cũng có thể sử dụng ví dụ tương tự như trên để minh họa cách closures hoạt động trong JavaScript.

---

## Execution context trong JavaScript đề cập đến những gì? Sự khác biệt giữa global execution context và functional execution context là gì?

Trong JavaScript, execution context đề cập đến môi trường thực thi trong đó code được thực thi. Mỗi khi JavaScript thực thi code, nó tạo ra một execution context. Execution context bao gồm thông tin về biến, hàm, và scope cũng như các tham số được truyền vào trong quá trình thực thi code.

Global execution context là execution context mặc định được tạo khi chương trình JavaScript bắt đầu chạy. Nó đại diện cho phạm vi toàn cục của chương trình, nơi các biến và hàm được khai báo sẽ thuộc về global scope.

Functional execution context xuất hiện khi một function được gọi. Mỗi khi một function được gọi, một functional execution context mới được tạo ra. Functional execution context bao gồm thông tin về biến cục bộ của function, tham số được truyền vào function, cũng như tham chiếu đến scope cha của function đó.

Sự khác biệt chính giữa global execution context và functional execution context là phạm vi của chúng. Global execution context đại diện cho phạm vi toàn cục của chương trình, trong khi functional execution context chỉ tồn tại khi function được gọi và đại diện cho phạm vi của function đó cùng với scope của nó.

Ví dụ minh họa:

```javascript
const globalVar = "Global Variable";

function outerFunction() {
  const outerVar = "Outer Variable";

  function innerFunction() {
    const innerVar = "Inner Variable";
    console.log(globalVar); // Có thể truy cập globalVar từ global execution context
    console.log(outerVar); // Có thể truy cập outerVar từ functional execution context của outerFunction
    console.log(innerVar); // Có thể truy cập innerVar từ functional execution context của innerFunction
  }

  innerFunction();
}

outerFunction();
```

Khi `outerFunction` được gọi, nó tạo ra functional execution context của chính nó. Khi `innerFunction` được gọi bên trong `outerFunction`, nó tạo ra functional execution context của mình. Mỗi functional execution context sẽ chứa các biến cục bộ của nó và có thể truy cập các biến trong scope của các function cha của nó.

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể nhấn mạnh về sự khác biệt về phạm vi giữa global execution context và functional execution context, cùng với việc mô tả cách mà mỗi context này được tạo ra và chứa thông tin gì trong quá trình thực thi code JavaScript.

---

## Sự tương tác giữa closures và execution context trong quá trình thực thi mã JavaScript.

Khi nói về sự tương tác giữa closures và execution context trong JavaScript, điều quan trọng là hiểu rõ cả hai khái niệm và cách chúng liên kết với nhau trong quá trình thực thi mã.

**Execution Context** là môi trường thực thi trong JavaScript, chứa thông tin về biến, hàm, scope và các tham số trong quá trình thực thi code. Mỗi khi một function được gọi, một execution context mới được tạo ra. Nó lưu trữ các biến cục bộ, tham số và thông tin về scope của function đó.

**Closures** là cơ chế trong JavaScript cho phép function bên trong (function con) vẫn có thể truy cập và sử dụng các biến của phạm vi bên ngoài (function cha), ngay cả khi function cha đã hoàn thành thực thi.

Sự tương tác giữa closures và execution context xảy ra khi một function con (nằm bên trong một function khác) được trả về hoặc được gán cho một biến bên ngoài phạm vi của function cha. Trong trường hợp này, closures giữ tham chiếu đến các biến của function cha, ngăn chúng khỏi việc bị hủy khi function cha kết thúc thực thi.

Ví dụ minh họa:

```javascript
function outerFunction() {
  let outerVar = "Outer Variable";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const closureExample = outerFunction(); // Gán innerFunction cho closureExample
closureExample(); // Kết quả: 'Outer Variable'
```

Trong ví dụ này, khi `outerFunction` được gọi và `innerFunction` được trả về, `closureExample` giữ tham chiếu đến `innerFunction`. Ngay cả khi `outerFunction` đã hoàn thành thực thi, `closureExample` vẫn có thể truy cập biến `outerVar` từ execution context của `outerFunction`, nhờ vào closures.

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể mô tả cách mà closures giữ cho các biến của function cha sống sót và có thể được truy cập bởi function con ngay cả sau khi function cha đã hoàn thành thực thi. Đồng thời, bạn cũng có thể sử dụng ví dụ như trên để minh họa cách sự tương tác này xảy ra trong JavaScript.

---
