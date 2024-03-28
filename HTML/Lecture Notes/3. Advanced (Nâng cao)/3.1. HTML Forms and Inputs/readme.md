## Sử dụng các loại input đặc biệt như email, number, date, v.v.

### Khái Niệm:

Trong HTML, các loại input đặc biệt như email, number, date, và các loại khác được sử dụng để thu thập thông tin từ người dùng một cách chính xác và thuận tiện hơn. Các loại input này đặc trưng bởi kiểu dữ liệu mà chúng chấp nhận và cung cấp các tính năng hỗ trợ nhập liệu phù hợp với loại dữ liệu đó.

### Ngữ Cảnh:

Sử dụng các loại input đặc biệt như email, number, date và các loại khác rất phổ biến trong việc xây dựng các biểu mẫu trên web. Các loại này giúp kiểm soát dữ liệu nhập vào, đảm bảo rằng người dùng cung cấp thông tin đúng đắn và theo định dạng mong muốn. Điều này cực kỳ hữu ích khi bạn muốn thu thập thông tin cụ thể như địa chỉ email, số lượng, ngày tháng, và các loại dữ liệu tương tự.

### Cách Sử Dụng:

1. **Input Email**:

   - Được sử dụng để thu thập địa chỉ email từ người dùng.
   - Ví dụ:

   ```html
   <label for="email">Email:</label>
   <input type="email" id="email" name="email" />
   ```

2. **Input Number**:

   - Sử dụng để nhận các giá trị số từ người dùng.
   - Có thể chỉ định giá trị tối thiểu và tối đa cho input.
   - Ví dụ:

   ```html
   <label for="quantity">Quantity (between 1 and 5):</label>
   <input type="number" id="quantity" name="quantity" min="1" max="5" />
   ```

3. **Input Date**:

   - Cho phép người dùng chọn ngày từ một lịch.
   - Ví dụ:

   ```html
   <label for="birthday">Birthday:</label>
   <input type="date" id="birthday" name="birthday" />
   ```

4. **Input Time**:

   - Dùng để chọn thời gian.
   - Ví dụ:

   ```html
   <label for="meeting-time">Meeting time:</label>
   <input type="time" id="meeting-time" name="meeting-time" />
   ```

5. **Input Color**:

   - Cho phép người dùng chọn một màu sắc từ bảng màu.
   - Ví dụ:

   ```html
   <label for="color">Choose your favorite color:</label>
   <input type="color" id="color" name="color" />
   ```

6. **Input Range**:

   - Sử dụng thanh trượt để chọn một giá trị trong một phạm vi nhất định.
   - Ví dụ:

   ```html
   <label for="volume">Volume (between 0 and 100):</label>
   <input type="range" id="volume" name="volume" min="0" max="100" />
   ```

7. **Input Checkbox**:

   - Dùng để chọn một hoặc nhiều tùy chọn.
   - Ví dụ:

   ```html
   <label for="vehicle1">I have a bike</label>
   <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
   ```

8. **Input Radio**:

   - Dùng để chọn một trong các tùy chọn.
   - Ví dụ:

   ```html
   <label for="gender1">Male</label>
   <input type="radio" id="gender1" name="gender" value="male" />
   ```

### Ví Dụ Toàn Bộ:

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" /><br />

  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5" /><br />

  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday" /><br />

  <label for="meeting-time">Meeting time:</label>
  <input type="time" id="meeting-time" name="meeting-time" /><br />

  <label for="color">Choose your favorite color:</label>
  <input type="color" id="color" name="color" /><br />

  <label for="volume">Volume (between 0 and 100):</label>
  <input type="range" id="volume" name="volume" min="0" max="100" /><br />

  <label for="vehicle1">I have a bike</label>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /><br />

  <label for="gender1">Male</label>
  <input type="radio" id="gender1" name="gender" value="male" /><br />
</form>
```

---

---

## Sử dụng các thuộc tính như `required`, `placeholder`, `min`, `max`, `pattern`, v.v.

### Khái Niệm:

Trong HTML, các thuộc tính như `required`, `placeholder`, `min`, `max`, `pattern` và các thuộc tính khác được sử dụng để điều chỉnh và kiểm soát hành vi của các phần tử trên trang web, đặc biệt là các trường nhập liệu trong các biểu mẫu. Các thuộc tính này cung cấp các chức năng phong phú để đảm bảo tính chính xác và thuận tiện khi người dùng tương tác với trang web.

### Ngữ Cảnh:

Sử dụng các thuộc tính như `required`, `placeholder`, `min`, `max`, `pattern` và các thuộc tính khác rất quan trọng khi bạn muốn kiểm soát và hướng dẫn người dùng khi nhập liệu vào các trường trên trang web. Các thuộc tính này giúp đảm bảo rằng dữ liệu được nhập vào là hợp lệ và phù hợp với yêu cầu của ứng dụng.

### Cách Sử Dụng và Ví Dụ:

1. **Thuộc tính `required`**:

   - Sử dụng để đánh dấu một trường nhập liệu là bắt buộc.
   - Ví dụ:

   ```html
   <input type="text" name="username" required />
   ```

2. **Thuộc tính `placeholder`**:

   - Sử dụng để hiển thị một gợi ý trong trường nhập liệu khi trống.
   - Ví dụ:

   ```html
   <input type="text" name="search" placeholder="Search here..." />
   ```

3. **Thuộc tính `min` và `max`**:

   - Sử dụng để xác định giá trị tối thiểu (`min`) và tối đa (`max`) của một trường nhập liệu số.
   - Ví dụ:

   ```html
   <input type="number" name="quantity" min="1" max="10" />
   ```

4. **Thuộc tính `pattern`**:

   - Sử dụng để chỉ định một biểu thức chính quy mà giá trị của trường nhập liệu phải phù hợp.
   - Ví dụ:

   ```html
   <input
     type="text"
     name="phone"
     pattern="[0-9]{10}"
     title="Please enter a 10-digit phone number"
   />
   ```

5. **Ví dụ Toàn Bộ:**

   ```html
   <form>
     <label for="username">Username:</label>
     <input type="text" id="username" name="username" required />
     <br />

     <label for="age">Age:</label>
     <input type="number" id="age" name="age" min="18" max="100" />
     <br />

     <label for="email">Email:</label>
     <input type="email" id="email" name="email" required />
     <br />

     <label for="password">Password:</label>
     <input
       type="password"
       id="password"
       name="password"
       pattern=".{6,}"
       title="Password must be at least 6 characters"
     />
     <br />

     <label for="phone">Phone Number:</label>
     <input
       type="text"
       id="phone"
       name="phone"
       pattern="[0-9]{10}"
       title="Please enter a 10-digit phone number"
     />
     <br />

     <label for="search">Search:</label>
     <input
       type="text"
       id="search"
       name="search"
       placeholder="Search here..."
     />
     <br />

     <button type="submit">Submit</button>
   </form>
   ```

---

---

## Sử dụng các phần tử `<label>`, `<fieldset>`, `<legend>` để tạo biểu mẫu phức tạp hơn.

### Khái Niệm:

Trong HTML, phần tử `<label>`, `<fieldset>`, và `<legend>` được sử dụng để tạo ra các biểu mẫu phức tạp và cung cấp một cách tổ chức hợp lý cho các trường và nhóm trường nhập liệu.

- `<label>`: Được sử dụng để xác định nhãn cho một trường nhập liệu. Nhãn này giúp người dùng hiểu rõ ý nghĩa của trường nhập liệu tương ứng.
- `<fieldset>`: Sử dụng để nhóm các trường nhập liệu liên quan với nhau. Nó giúp tạo ra một cấu trúc tổ chức cho biểu mẫu, giúp người dùng dễ dàng nhận biết và điền thông tin.
- `<legend>`: Được sử dụng trong phần tử `<fieldset>` để xác định tiêu đề cho nhóm các trường nhập liệu liên quan.

### Ngữ Cảnh:

Khi bạn muốn tạo ra một biểu mẫu phức tạp, có nhiều trường nhập liệu cần được nhóm lại và có nhãn rõ ràng để người dùng dễ dàng hiểu và điền thông tin. Sử dụng các phần tử như `<label>`, `<fieldset>`, và `<legend>` giúp tạo ra một cấu trúc tổ chức hợp lý và dễ dàng quản lý các trường nhập liệu trong biểu mẫu.

### Cách Sử Dụng và Ví Dụ:

1. **Sử Dụng `<label>` để Xác Định Nhãn cho Trường Nhập Liệu**:

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

2. **Sử Dụng `<fieldset>` và `<legend>` để Nhóm và Xác Định Tiêu Đề cho Các Trường Nhập Liệu Liên Quan**:

```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="fullname">Full Name:</label>
  <input type="text" id="fullname" name="fullname" /><br />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" /><br />
</fieldset>

<fieldset>
  <legend>Address Information</legend>
  <label for="address">Address:</label>
  <input type="text" id="address" name="address" /><br />
  <label for="city">City:</label>
  <input type="text" id="city" name="city" /><br />
</fieldset>
```

Trong ví dụ trên, `<fieldset>` được sử dụng để nhóm các trường nhập liệu liên quan về thông tin cá nhân và địa chỉ. `<legend>` được sử dụng để xác định tiêu đề cho mỗi nhóm trường nhập liệu. Các trường nhập liệu được bao bọc trong các phần tử `<label>` để đảm bảo rằng mỗi trường có một nhãn rõ ràng.

---

---
