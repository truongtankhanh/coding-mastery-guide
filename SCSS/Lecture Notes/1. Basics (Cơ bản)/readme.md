1. **Biến (Variables)**:

   - Khái niệm: Cho phép bạn đặt tên cho một giá trị và sử dụng lại giá trị đó nhiều lần trong mã SCSS của bạn.
   - Cú pháp: `$ten_bien: gia_tri;`

2. **Nested Rules**:

   - Khái niệm: Cho phép bạn nhóm các quy tắc CSS bên trong nhau, giúp mã CSS trở nên cấu trúc hơn và dễ đọc hơn.
   - Cú pháp:

     ```scss
     selector {
       property: value;

       nested_selector {
         property: value;
       }
     }
     ```

3. **Mixins**:

   - Khái niệm: Các khối mã có thể tái sử dụng, giúp tránh việc lặp lại mã và tăng cường tính tái sử dụng.
   - Cú pháp:

     ```scss
     @mixin ten_mixin {
       property: value;
     }

     .selector {
       @include ten_mixin;
     }
     ```

4. **Import**:

   - Khái niệm: Cho phép bạn nhúng nội dung của một tập tin SCSS vào một tập tin khác, giúp phân chia mã thành các phần nhỏ và dễ quản lý hơn.
   - Cú pháp: `@import 'ten_file';`

5. **Operators**:

   - Khái niệm: Cho phép bạn thực hiện các phép toán trong SCSS, như cộng, trừ, nhân, chia.
   - Cú pháp:
     ```scss
     .selector {
       width: 100% - 20px;
     }
     ```

6. **Functions**:

   - Khái niệm: Cung cấp các hàm tính toán và chức năng xử lý chuỗi trong SCSS.
   - Cú pháp: `function_name(argument);`

7. **Điều kiện và Vòng lặp**:

   - Khái niệm: Cho phép bạn sử dụng các điều kiện và vòng lặp trong mã SCSS của bạn.
   - Cú pháp:

     ```scss
     @if condition {
       // code
     } @else {
       // code
     }

     @for $i from 1 through 5 {
       // code
     }
     ```

8. **Tiền tố và Truyền tham số**:

   - Khái niệm: Cho phép bạn đặt tiền tố cho tên class và truyền tham số vào các mixins và functions.
   - Cú pháp:

     ```scss
     $prefix: "prefix-";

     @mixin ten_mixin($param) {
       // code
     }
     ```

9. **Chú thích**:
   - Khái niệm: Cho phép bạn thêm chú thích vào mã SCSS của bạn để giải thích và làm rõ mã.
   - Cú pháp: `// Chú thích`
