## Error Handling

---

### 1. Làm thế nào để xử lý lỗi trong Express?

Câu hỏi này rất phổ biến trong phỏng vấn về ExpressJS, vì việc xử lý lỗi là một phần quan trọng của việc phát triển ứng dụng web. Dưới đây là cách bạn có thể phân tích và trình bày câu trả lời:

1. **Phân tích:**

   - **Express Middleware:** Express cho phép sử dụng middleware để xử lý các yêu cầu HTTP. Middleware này có thể được sử dụng để xử lý lỗi.
   - **Error Handling Middleware:** Bạn có thể tạo ra một middleware riêng để xử lý các lỗi trong Express. Middleware này sẽ được gọi khi một lỗi xảy ra trong quá trình xử lý yêu cầu.

2. **Cách trình bày câu trả lời:**

   - Bắt đầu bằng việc giới thiệu về sự quan trọng của việc xử lý lỗi trong ứng dụng web để đảm bảo tính ổn định và trải nghiệm người dùng tốt nhất.
   - Nói về việc sử dụng middleware trong Express để xử lý lỗi.
   - Trình bày về cách tạo Error Handling Middleware riêng để xử lý các loại lỗi cụ thể và trả về các phản hồi thích hợp cho người dùng.
   - Nêu ví dụ về cách sử dụng middleware để xử lý lỗi trong Express. Ví dụ:

     ```javascript
     // Error Handling Middleware
     app.use(function (err, req, res, next) {
       console.error(err.stack);
       res.status(500).send("Something broke!");
     });
     ```

3. **Câu trả lời:**
   "Để xử lý lỗi trong Express, chúng ta có thể sử dụng middleware. Express cho phép chúng ta tạo Error Handling Middleware riêng để xử lý các loại lỗi cụ thể. Ví dụ, chúng ta có thể tạo một middleware như sau:

   ```javascript
   // Error Handling Middleware
   app.use(function (err, req, res, next) {
     console.error(err.stack);
     res.status(500).send("Something broke!");
   });
   ```

   Middleware này sẽ được gọi khi một lỗi xảy ra trong quá trình xử lý yêu cầu và sẽ log lỗi và trả về một phản hồi lỗi cho người dùng. Điều này giúp chúng ta duy trì tính ổn định của ứng dụng và cung cấp trải nghiệm người dùng tốt nhất có thể."

---

### 2. Middleware error handling là gì và làm thế nào để sử dụng nó trong Express?

Câu hỏi này yêu cầu bạn phân tích và trình bày về middleware error handling trong ExpressJS. Dưới đây là cách bạn có thể phân tích và trả lời câu hỏi này:

1. **Phân tích:**

   - **Middleware Error Handling:** Là cách tiếp cận trong Express để xử lý các lỗi xảy ra trong quá trình xử lý yêu cầu HTTP.
   - **Cơ chế hoạt động:** Khi một lỗi xảy ra trong quá trình xử lý yêu cầu, Express chuyển quyền điều khiển sang middleware được cấu hình đặc biệt để xử lý lỗi.
   - **Sử dụng trong Express:** Để sử dụng middleware error handling trong Express, bạn có thể tạo một middleware riêng để xử lý các lỗi và đăng ký nó trong ứng dụng của bạn.

2. **Cách trình bày câu trả lời:**

   - Bắt đầu bằng việc giải thích rõ ràng về khái niệm của middleware error handling và tại sao nó quan trọng trong việc phát triển ứng dụng ExpressJS.
   - Trình bày về cơ chế hoạt động của middleware error handling, đặc biệt là cách Express chuyển quyền điều khiển khi một lỗi xảy ra.
   - Mô tả cách sử dụng middleware error handling trong Express bằng cách tạo một middleware riêng để xử lý các loại lỗi cụ thể và trả về các phản hồi phù hợp cho người dùng.
   - Cung cấp ví dụ cụ thể để minh họa cách sử dụng middleware error handling trong Express.

3. **Câu trả lời:**
   "Middleware error handling là một cách tiếp cận quan trọng trong ExpressJS để xử lý các lỗi xảy ra trong quá trình xử lý yêu cầu HTTP. Khi một lỗi xảy ra, Express sẽ chuyển quyền điều khiển sang middleware được cấu hình đặc biệt để xử lý lỗi đó.

   Để sử dụng middleware error handling trong Express, chúng ta có thể tạo một middleware riêng để xử lý các loại lỗi cụ thể và trả về các phản hồi phù hợp cho người dùng. Ví dụ, chúng ta có thể tạo một middleware như sau:

   ```javascript
   // Middleware Error Handling
   app.use(function (err, req, res, next) {
     console.error(err.stack);
     res.status(500).send("Something broke!");
   });
   ```

   Middleware này sẽ được gọi khi một lỗi xảy ra trong quá trình xử lý yêu cầu và sẽ log lỗi và trả về một phản hồi lỗi cho người dùng. Điều này giúp chúng ta duy trì tính ổn định của ứng dụng và cung cấp trải nghiệm người dùng tốt nhất có thể."

---

### 3. Có những phương pháp nào để tùy chỉnh việc xử lý lỗi trong Express?

Câu hỏi này tập trung vào việc tùy chỉnh xử lý lỗi trong ExpressJS, đòi hỏi bạn phân tích và trình bày về các phương pháp khác nhau mà ExpressJS cung cấp để làm điều này. Dưới đây là cách bạn có thể phân tích và trả lời câu hỏi này:

1. **Phân tích:**

   - **Middleware Error Handling:** Express cho phép bạn tạo các middleware riêng để xử lý các loại lỗi cụ thể hoặc xử lý các lỗi tổng quát.
   - **Built-in Error Handling Middleware:** Express cũng cung cấp middleware mặc định để xử lý các loại lỗi như lỗi 404 (không tìm thấy) hoặc lỗi 500 (lỗi server).
   - **Custom Error Objects:** Bạn có thể tạo các đối tượng lỗi tùy chỉnh để đại diện cho các loại lỗi cụ thể và xử lý chúng theo cách phù hợp.

2. **Cách trình bày câu trả lời:**

   - Bắt đầu bằng việc giải thích rõ ràng về mục đích của việc tùy chỉnh xử lý lỗi trong Express và tại sao điều này quan trọng trong phát triển ứng dụng web.
   - Trình bày các phương pháp khác nhau để tùy chỉnh việc xử lý lỗi trong Express, bao gồm sử dụng middleware error handling, built-in error handling middleware và tạo custom error objects.
   - Nêu ví dụ cụ thể về cách sử dụng mỗi phương pháp để xử lý lỗi trong Express, tùy thuộc vào yêu cầu cụ thể của ứng dụng.

3. **Câu trả lời:**
   "Để tùy chỉnh việc xử lý lỗi trong ExpressJS, chúng ta có một số phương pháp khác nhau. Đầu tiên, chúng ta có thể sử dụng middleware error handling để tạo các middleware riêng để xử lý các loại lỗi cụ thể hoặc tổng quát. Ví dụ, chúng ta có thể tạo một middleware như sau để xử lý lỗi 404 (không tìm thấy):

   ```javascript
   app.use(function (req, res, next) {
     res.status(404).send("Sorry, page not found!");
   });
   ```

   Tiếp theo, Express cung cấp các middleware mặc định để xử lý các loại lỗi phổ biến như lỗi 404 hoặc lỗi 500. Cuối cùng, chúng ta có thể tạo custom error objects để đại diện cho các loại lỗi cụ thể và xử lý chúng theo cách phù hợp với ứng dụng của chúng ta. Ví dụ, chúng ta có thể tạo một custom error object như sau:

   ```javascript
   class MyCustomError extends Error {
     constructor(message, statusCode) {
       super(message);
       this.statusCode = statusCode;
     }
   }
   ```

   Bằng cách này, chúng ta có thể tạo và sử dụng các đối tượng lỗi tùy chỉnh trong ứng dụng của mình và xử lý chúng theo cách phù hợp với yêu cầu cụ thể của dự án."

---

### 4. Làm thế nào để tránh việc lặp lại mã xử lý lỗi trong các endpoint khác nhau?

Câu hỏi này tập trung vào cách tránh việc lặp lại mã xử lý lỗi trong các endpoint khác nhau trong ExpressJS, đòi hỏi bạn phân tích và trình bày về các phương pháp để làm điều này. Dưới đây là cách bạn có thể phân tích và trả lời câu hỏi này:

1. **Phân tích:**

   - **Middleware:** Express cho phép chúng ta sử dụng middleware để xử lý các yêu cầu HTTP. Middleware này có thể được sử dụng để xử lý lỗi cho tất cả các endpoint trong ứng dụng của chúng ta.
   - **Global Error Handling Middleware:** Bằng cách sử dụng một middleware toàn cục, chúng ta có thể xử lý các lỗi một cách chung chung và tránh việc lặp lại mã xử lý lỗi trong từng endpoint riêng lẻ.

2. **Cách trình bày câu trả lời:**

   - Giới thiệu về cách middleware có thể giúp chúng ta tránh việc lặp lại mã xử lý lỗi trong các endpoint khác nhau.
   - Trình bày về cách sử dụng một global error handling middleware để xử lý các loại lỗi chung chung và áp dụng nó cho tất cả các endpoint trong ứng dụng.
   - Nêu ví dụ cụ thể về cách triển khai global error handling middleware trong ExpressJS.

3. **Câu trả lời:**
   "Để tránh việc lặp lại mã xử lý lỗi trong các endpoint khác nhau trong ExpressJS, chúng ta có thể sử dụng một global error handling middleware. Middleware này sẽ được gọi khi một lỗi xảy ra trong quá trình xử lý yêu cầu, không phụ thuộc vào endpoint nào đang được gọi.

   Ví dụ, chúng ta có thể tạo một global error handling middleware như sau:

   ```javascript
   // Global Error Handling Middleware
   app.use(function (err, req, res, next) {
     console.error(err.stack);
     res.status(500).send("Something broke!");
   });
   ```

   Middleware này sẽ được gọi khi bất kỳ endpoint nào trong ứng dụng gặp phải một lỗi. Chúng ta có thể xử lý lỗi ở đây một cách chung chung và tránh việc phải lặp lại mã xử lý lỗi trong từng endpoint riêng lẻ. Điều này giúp mã của chúng ta trở nên gọn gàng và dễ bảo trì hơn."

---
