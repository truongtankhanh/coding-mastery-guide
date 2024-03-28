## Pixels (px).

**Khái Niệm:**
Trong CSS, "px" là viết tắt của "pixels" (điểm ảnh). Đây là đơn vị đo chiều dài hoặc kích thước trong CSS và thường được sử dụng để xác định kích thước của các phần tử, độ rộng, chiều cao, độ dày của đường viền, v.v.

**Ngữ Cảnh:**
Pixels là một đơn vị đo không đổi, vì nó đề cập đến một điểm ảnh trên màn hình. Trong môi trường web, sử dụng pixels giúp bạn định rõ kích thước của các phần tử trên màn hình.

**Cách Sử Dụng và Ví Dụ:**
Khi sử dụng pixels trong CSS, bạn chỉ cần ghi số lượng pixels sau giá trị bạn muốn định nghĩa.

1. **Kích Thước Phần Tử:**

   ```css
   .box {
     width: 200px;
     height: 100px;
   }
   ```

   Trong đoạn mã này, `.box` sẽ có chiều rộng là 200 pixels và chiều cao là 100 pixels.

2. **Độ Rộng của Border:**

   ```css
   .box {
     border: 2px solid #000;
   }
   ```

   Trong ví dụ này, `.box` sẽ có đường viền rộng 2 pixels và màu đen.

3. **Kích Thước Font:**

   ```css
   .text {
     font-size: 16px;
   }
   ```

   Trong đoạn mã này, văn bản trong phần tử có class là "text" sẽ có kích thước font là 16 pixels.

4. **Khoảng Cách:**
   ```css
   .container {
     margin: 10px;
     padding: 20px;
   }
   ```
   Trong đoạn mã này, phần tử có class là "container" sẽ có khoảng cách bên ngoài là 10 pixels và khoảng cách bên trong là 20 pixels.

Pixels là một đơn vị đo phổ biến trong CSS, đặc biệt trong việc xác định kích thước và vị trí của các phần tử trên trang web. Sử dụng pixels giúp xác định kích thước một cách cụ thể và chính xác trên màn hình.

---

---

## Percentages (%).

**Khái Niệm:**
Trong CSS, "percentages" (phần trăm) là một đơn vị đo được sử dụng để xác định kích thước, vị trí hoặc các thuộc tính khác của một phần tử dựa trên một phần trăm của một giá trị tham chiếu.

**Ngữ Cảnh:**
Phần trăm là một cách linh hoạt và thích hợp để thiết lập các thuộc tính trong CSS, đặc biệt khi bạn muốn các phần tử phản ánh kích thước hoặc vị trí của phần tử mẹ hoặc phần tử liền kề.

**Cách Sử Dụng và Ví Dụ:**

1. **Kích Thước Phần Tử:**

   ```css
   .box {
     width: 50%;
     height: 50%;
   }
   ```

   Trong đoạn mã này, `.box` sẽ có chiều rộng và chiều cao là 50% so với kích thước của phần tử mẹ của nó.

2. **Vị Trí Tương Đối:**

   ```css
   .child {
     position: relative;
     top: 25%;
     left: 25%;
   }
   ```

   Trong ví dụ này, phần tử có class "child" sẽ được dịch chuyển 25% về phía trên và 25% về phía trái so với vị trí ban đầu của nó trong phần tử mẹ.

3. **Kích Thước Font:**

   ```css
   .text {
     font-size: 120%;
   }
   ```

   Trong đoạn mã này, kích thước font của phần tử có class "text" sẽ là 120% so với kích thước font của phần tử mẹ.

4. **Khoảng Cách:**
   ```css
   .container {
     margin-top: 10%;
     padding-left: 5%;
   }
   ```
   Trong ví dụ này, phần tử có class "container" sẽ có margin-top là 10% của chiều cao của phần tử mẹ và padding-left là 5% của chiều rộng của phần tử mẹ.

Phần trăm là một đơn vị đo linh hoạt trong CSS, cho phép bạn thiết lập kích thước, vị trí và các thuộc tính khác của các phần tử dựa trên kích thước của phần tử mẹ hoặc phần tử liền kề. Điều này giúp tạo ra giao diện linh hoạt và dễ thay đổi trên các thiết bị và màn hình khác nhau.

---

---

## EM và REM.

**Khái Niệm:**
Trong CSS, "em" và "rem" là hai đơn vị đo được sử dụng để xác định kích thước và khoảng cách.

- **EM:** Đơn vị "em" đo kích thước hoặc khoảng cách dựa trên kích thước font của phần tử cha.
- **REM:** "rem" cũng đo kích thước hoặc khoảng cách dựa trên kích thước font, nhưng nó tham chiếu đến kích thước font của phần tử gốc (root) của trang.

**Ngữ Cảnh:**
Sử dụng "em" và "rem" cho phép thiết lập kích thước và khoảng cách dựa trên font-size của phần tử mẹ hoặc phần tử gốc, giúp tạo ra giao diện linh hoạt và dễ bảo trì.

**Cách Sử Dụng và Ví Dụ:**

1. **EM:**

   ```css
   .box {
     font-size: 1.5em; /* Kích thước font là 1.5 lần kích thước font của phần tử cha */
     padding: 1em; /* Khoảng cách bên trong là 1 lần kích thước font của phần tử cha */
   }
   ```

   Trong ví dụ này, kích thước font và khoảng cách bên trong của phần tử `.box` sẽ được xác định dựa trên kích thước font của phần tử cha.

2. **REM:**

   ```css
   body {
     font-size: 16px; /* Thiết lập kích thước font cho phần tử gốc là 16px */
   }

   .container {
     font-size: 1.2rem; /* Kích thước font là 1.2 lần kích thước font của phần tử gốc */
     padding: 2rem; /* Khoảng cách bên trong là 2 lần kích thước font của phần tử gốc */
   }
   ```

   Trong ví dụ này, kích thước font và khoảng cách bên trong của phần tử `.container` sẽ được xác định dựa trên kích thước font của phần tử gốc (root) của trang.

Việc sử dụng "em" và "rem" trong CSS giúp tạo ra giao diện linh hoạt và dễ bảo trì, vì chúng dựa trên kích thước font của phần tử mẹ hoặc phần tử gốc thay vì giá trị tuyệt đối như pixels. Điều này giúp các phần tử phản ánh kích thước và khoảng cách một cách tự nhiên và linh hoạt trên các thiết bị và màn hình khác nhau.

---

---
