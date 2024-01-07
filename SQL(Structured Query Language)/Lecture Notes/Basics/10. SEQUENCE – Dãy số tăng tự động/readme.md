# Cách tạo Sequence trong SQL

Trong SQL, Sequence là một đối tượng được sử dụng để tạo ra các chuỗi giá trị số tăng dần hoặc giảm dần một cách tự động. Sequence thường được sử dụng để tạo các giá trị duy nhất, chẳng hạn như khóa chính trong bảng, mà không bị ảnh hưởng bởi các thao tác khác trên cơ sở dữ liệu.

### Khái niệm:

Sequence trong SQL là một đối tượng cơ sở dữ liệu giúp tạo ra các giá trị số duy nhất và liên tục, thường được sử dụng để tạo khóa chính tự động cho bảng hoặc các trường số thứ tự.

### Ngữ cảnh và cách sử dụng:

Sequence thường được sử dụng khi bạn cần tạo một trường số duy nhất và không bị trùng lặp cho các bảng trong cơ sở dữ liệu. Chúng hữu ích trong việc tạo khóa chính tự động mà không cần phải quan tâm đến các giá trị trùng lặp.

### Ví dụ:

Dưới đây là cách tạo Sequence trong SQL:

#### Tạo Sequence:

```sql
CREATE SEQUENCE ten_sequence
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 1000
    CYCLE;
```

#### Sử dụng Sequence để tạo giá trị mới:

```sql
INSERT INTO TenBang (id, name)
VALUES (NEXT VALUE FOR ten_sequence, 'Example');
```

### Giải thích:

- `CREATE SEQUENCE` dùng để tạo một Sequence với tên là `ten_sequence`.
- `START WITH` chỉ định giá trị bắt đầu của Sequence.
- `INCREMENT BY` xác định bước nhảy giữa các giá trị liên tiếp trong Sequence.
- `MINVALUE` và `MAXVALUE` định nghĩa giá trị tối thiểu và tối đa của Sequence.
- `CYCLE` cho phép Sequence lặp lại khi đạt đến giá trị tối đa.
- `NEXT VALUE FOR` được sử dụng để lấy giá trị tiếp theo từ Sequence và sử dụng trong truy vấn INSERT để tạo giá trị mới cho cột có Sequence.

---

# Sử dụng AUTO_INCREMENT

## Thay đổi số thứ tự một SEQUENCE đang tồn tại

Để thay đổi số thứ tự của một Sequence đang tồn tại trong SQL, bạn có thể sử dụng lệnh ALTER SEQUENCE để điều chỉnh các thuộc tính như giá trị bắt đầu, bước nhảy, giá trị tối thiểu, giá trị tối đa, hoặc vô hiệu hóa tính năng lặp lại (CYCLE). Việc thay đổi này có thể hữu ích khi bạn muốn điều chỉnh hoặc điều hướng chuỗi số theo yêu cầu của ứng dụng hoặc cấu trúc dữ liệu.

### Khái niệm:

ALTER SEQUENCE là lệnh SQL dùng để thay đổi các thuộc tính của Sequence đã tồn tại, cho phép bạn điều chỉnh bắt đầu, kích thước bước nhảy, giá trị tối thiểu, giá trị tối đa hoặc tính năng lặp lại của Sequence.

### Ngữ cảnh và cách sử dụng:

Khi bạn cần thay đổi cách Sequence sinh ra các giá trị số thứ tự, bạn có thể sử dụng ALTER SEQUENCE để điều chỉnh các thuộc tính của Sequence mà không ảnh hưởng đến dữ liệu đã tồn tại.

### Ví dụ:

Dưới đây là cách sử dụng lệnh ALTER SEQUENCE để thay đổi các thuộc tính của Sequence:

#### Thay đổi giá trị bắt đầu của Sequence:

```sql
ALTER SEQUENCE ten_sequence RESTART WITH 100;
```

#### Thay đổi bước nhảy của Sequence:

```sql
ALTER SEQUENCE ten_sequence INCREMENT BY 2;
```

#### Thay đổi giá trị tối đa của Sequence:

```sql
ALTER SEQUENCE ten_sequence MAXVALUE 1000;
```

### Giải thích:

- `ALTER SEQUENCE` là lệnh được sử dụng để thay đổi các thuộc tính của Sequence.
- `RESTART WITH` thay đổi giá trị bắt đầu của Sequence.
- `INCREMENT BY` điều chỉnh bước nhảy giữa các giá trị liên tiếp trong Sequence.
- `MAXVALUE` xác định giá trị tối đa của Sequence.

Việc sử dụng ALTER SEQUENCE giúp điều chỉnh cách Sequence sinh ra các giá trị số thứ tự mà không làm thay đổi dữ liệu đã tồn tại, đồng thời cung cấp linh hoạt trong việc quản lý và sử dụng Sequence trong cơ sở dữ liệu.

---

## Bắt đầu SEQUENCE tại một giá trị cụ thể

Trong SQL, khi bạn tạo một Sequence, có thể muốn bắt đầu chuỗi số tại một giá trị cụ thể, không phải từ giá trị mặc định. Điều này hữu ích khi bạn cần bắt đầu tạo các số thứ tự từ một giá trị đã tồn tại trong cơ sở dữ liệu hoặc cần điều chỉnh giá trị ban đầu theo yêu cầu cụ thể của ứng dụng.

### Khái niệm:

Khi tạo Sequence trong SQL, bạn có thể sử dụng `START WITH` để xác định giá trị ban đầu của chuỗi số.

### Ngữ cảnh và cách sử dụng:

Khi bạn muốn Sequence bắt đầu tạo số thứ tự từ một giá trị cụ thể thay vì từ giá trị mặc định, sử dụng `START WITH` sẽ giúp bạn điều chỉnh điều này.

### Ví dụ:

Dưới đây là cách sử dụng `START WITH` khi tạo Sequence:

#### Tạo Sequence bắt đầu từ giá trị cụ thể:

```sql
CREATE SEQUENCE ten_sequence START WITH 100;
```

### Giải thích:

- `CREATE SEQUENCE` là lệnh để tạo một Sequence mới.
- `ten_sequence` là tên của Sequence bạn muốn tạo.
- `START WITH 100` là phần của lệnh để xác định giá trị ban đầu của chuỗi số thứ tự, trong trường hợp này là 100.

Khi bạn sử dụng `START WITH`, Sequence sẽ bắt đầu tạo số thứ tự từ giá trị được xác định, cung cấp linh hoạt trong việc quản lý chuỗi số và điều chỉnh giá trị ban đầu theo nhu cầu cụ thể của ứng dụng hoặc cơ sở dữ liệu.

---
