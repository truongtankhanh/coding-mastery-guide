## Atomicity

Atomicity là một trong các thuộc tính ACID (Atomicity, Consistency, Isolation, Durability) của giao dịch trong cơ sở dữ liệu. Nó đảm bảo rằng một giao dịch sẽ được thực thi một cách hoàn toàn hoặc không được thực thi tại all, tức là giao dịch sẽ được xử lý hoàn toàn hoặc không có gì xảy ra cả.

### Khái Niệm:

Atomicity bao gồm một số thay đổi dữ liệu hoặc hành động trong cơ sở dữ liệu. Nếu một phần của giao dịch không thể hoàn thành, tất cả các thay đổi được thực hiện bởi giao dịch đó sẽ bị hủy, và cơ sở dữ liệu sẽ được đưa trở lại trạng thái trước khi giao dịch bắt đầu.

### Ngữ Cảnh:

Atomicity làm đảm bảo tính toàn vẹn của dữ liệu. Khi một giao dịch được thực hiện, nếu có lỗi xảy ra hoặc không thể hoàn thành, tất cả các thay đổi đã được thực hiện sẽ bị hủy, không làm thay đổi trạng thái của cơ sở dữ liệu.

### Cách Sử Dụng và Ví Dụ:

Trong SQL, việc đảm bảo atomicity thường liên quan chặt chẽ đến việc sử dụng giao dịch (transaction).

**Ví dụ:**

```sql
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
INSERT INTO Transactions (AccountID, Amount, Type) VALUES (123, 100, 'Withdrawal');

COMMIT;
```

- **BEGIN TRANSACTION:** Bắt đầu một giao dịch mới.
- **UPDATE:** Giả sử rút tiền từ tài khoản, điều chỉnh số dư.
- **INSERT:** Ghi lại giao dịch rút tiền vào bảng Transactions.
- **COMMIT:** Hoàn thành giao dịch.

Nếu có lỗi xảy ra giữa các câu lệnh hoặc trong quá trình thực hiện giao dịch, ví dụ như mất kết nối hoặc lỗi hệ thống, hệ thống sẽ tự động hoặc có thể được lập trình để rollback (quay trở lại trạng thái trước khi giao dịch bắt đầu), đảm bảo tính toàn vẹn của dữ liệu.

Atomicity quan trọng trong việc đảm bảo tính nhất quán và toàn vẹn của dữ liệu trong các môi trường cơ sở dữ liệu. Nó đảm bảo rằng các thay đổi dữ liệu được áp dụng hoàn toàn hoặc không được áp dụng tại all.

---

## Consistency

Consistency là một trong các thuộc tính ACID (Atomicity, Consistency, Isolation, Durability) của giao dịch trong cơ sở dữ liệu. Nó đảm bảo rằng sau khi giao dịch được thực hiện, cơ sở dữ liệu sẽ ở một trạng thái chính xác, không bị vi phạm các ràng buộc hoặc quy tắc.

### Khái Niệm:

Consistency đảm bảo rằng cơ sở dữ liệu sẽ không bị thay đổi thành các trạng thái không hợp lý sau khi một giao dịch được thực hiện. Nó bảo đảm rằng dữ liệu luôn tuân theo các ràng buộc, quy tắc và điều kiện được thiết lập.

### Ngữ Cảnh:

Consistency đảm bảo tính nhất quán và chính xác của dữ liệu sau khi các thay đổi được thực hiện trong giao dịch. Điều này có thể bao gồm việc kiểm tra ràng buộc duy nhất, quy tắc tham chiếu khóa ngoại hoặc bất kỳ quy tắc nào đã được đặt ra cho dữ liệu.

### Cách Sử Dụng và Ví Dụ:

Trong SQL, Consistency thường được đảm bảo thông qua việc sử dụng ràng buộc (constraints) và quy tắc (rules).

**Ví dụ:**

```sql
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    UserName VARCHAR(50) UNIQUE,
    Email VARCHAR(100) UNIQUE
);
```

- **PRIMARY KEY:** Định nghĩa UserID là khóa chính, đảm bảo mỗi bản ghi trong bảng Users có một UserID duy nhất.
- **UNIQUE:** Định nghĩa rằng UserName và Email là duy nhất, không được lặp lại trong bảng Users.

Khi một giao dịch thêm người dùng mới vào bảng Users được thực hiện, Consistency đảm bảo rằng không có hai người dùng nào có cùng UserName hoặc Email. Nếu vi phạm ràng buộc UNIQUE, giao dịch sẽ không được thực hiện và cơ sở dữ liệu sẽ không bị vi phạm tính nhất quán.

Consistency là một trong những yếu tố quan trọng giúp duy trì tính nhất quán và độ tin cậy của cơ sở dữ liệu. Điều này đảm bảo rằng dữ liệu luôn đáng tin cậy và tuân theo các ràng buộc được thiết lập.

---

## Isolation

Isolation là một trong các thuộc tính ACID (Atomicity, Consistency, Isolation, Durability) trong cơ sở dữ liệu. Nó mô tả mức độ mà các giao dịch có thể tách rời hoặc ẩn các thay đổi của chúng đối với các giao dịch khác đang được thực hiện đồng thời, nhằm tránh sự xung đột hoặc hiệu ứng đồng thời.

### Khái Niệm:

Isolation đảm bảo rằng một giao dịch không ảnh hưởng đến kết quả của các giao dịch khác đang diễn ra cùng lúc. Điều này có nghĩa là các thay đổi của một giao dịch không được nhìn thấy cho đến khi giao dịch đó hoàn thành.

### Ngữ Cảnh:

Isolation đảm bảo rằng các giao dịch đang chạy đồng thời không làm ảnh hưởng đến nhau. Điều này có thể được đạt được thông qua việc sử dụng các cơ chế khóa và cách thức quản lý truy cập dữ liệu.

### Cách Sử Dụng và Ví Dụ:

Trong SQL, có các cấp độ cô lập khác nhau, thường được gọi là isolation levels, như READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, và SERIALIZABLE.

**Ví dụ:**

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
SELECT * FROM Accounts WHERE AccountID = 123;

COMMIT;
```

- **SET TRANSACTION ISOLATION LEVEL:** Đặt cấp độ cô lập cho giao dịch.
- **BEGIN TRANSACTION:** Bắt đầu giao dịch.
- **UPDATE:** Giả sử rút tiền từ tài khoản.
- **SELECT:** Truy vấn để kiểm tra số dư của tài khoản sau khi rút tiền.
- **COMMIT:** Kết thúc giao dịch.

Trong ví dụ trên, với cấp độ cô lập READ COMMITTED, dù có các giao dịch khác cũng thực hiện thay đổi trên AccountID = 123 đồng thời, nhưng kết quả của SELECT sẽ chỉ thấy dữ liệu được cập nhật bởi giao dịch hiện tại sau khi nó hoàn tất.

Isolation đảm bảo tính độc lập giữa các giao dịch, ngăn chặn hiệu ứng giao thời và xung đột dữ liệu, đồng thời tăng tính nhất quán và tin cậy của cơ sở dữ liệu.

---

## Durability

Durability là một trong các thuộc tính ACID (Atomicity, Consistency, Isolation, Durability) trong hệ thống cơ sở dữ liệu. Nó đảm bảo rằng sau khi một giao dịch được xác nhận hoàn tất (committed), thì kết quả của giao dịch đó sẽ được lưu trữ và không bị mất trong trường hợp sự cố hệ thống xảy ra.

### Khái Niệm:

Durability đảm bảo rằng dữ liệu đã được xác nhận sẽ được lưu trữ vào bộ nhớ không bay mất (non-volatile storage) của hệ thống, thậm chí khi có sự cố xảy ra như mất điện hay lỗi phần cứng. Điều này đảm bảo rằng dữ liệu đã được xác nhận sẽ không bị mất.

### Ngữ Cảnh:

Durability đóng vai trò quan trọng trong việc đảm bảo tính nhất quán và độ tin cậy của cơ sở dữ liệu sau khi một giao dịch được xác nhận. Nó bảo vệ dữ liệu khỏi sự mất mát không mong muốn, giúp đảm bảo dữ liệu không bị thất thoát trong trường hợp sự cố hệ thống.

### Cách Sử Dụng và Ví Dụ:

Trong SQL, durability thường được đảm bảo thông qua việc sử dụng các kỹ thuật và công nghệ lưu trữ dữ liệu như journaling, write-ahead logging, hay replication.

**Ví dụ:**

```sql
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
INSERT INTO Transactions (AccountID, Amount, Type) VALUES (123, 100, 'Withdrawal');

COMMIT;
```

- **BEGIN TRANSACTION:** Bắt đầu giao dịch.
- **UPDATE:** Giả sử rút tiền từ tài khoản.
- **INSERT:** Ghi lại giao dịch rút tiền vào bảng Transactions.
- **COMMIT:** Hoàn thành giao dịch.

Trong ví dụ trên, sau khi COMMIT được thực hiện, dữ liệu trong bảng Accounts và Transactions sẽ được lưu trữ vào ổ đĩa hoặc bộ nhớ không bay mất (non-volatile storage), đảm bảo rằng thông tin về giao dịch rút tiền sẽ không bị mất trong trường hợp hệ thống gặp sự cố.

Durability đóng vai trò quan trọng trong việc đảm bảo tính nhất quán và độ tin cậy của cơ sở dữ liệu. Nó đảm bảo rằng dữ liệu đã được xác nhận sẽ không bị mất khi có sự cố xảy ra trong hệ thống.

---

## Xử lý Transaction

Xử lý giao dịch là quá trình thực hiện một loạt các hoạt động cơ sở dữ liệu như INSERT, UPDATE, DELETE, SELECT một cách đồng nhất và đảm bảo tính toàn vẹn và nhất quán của dữ liệu. SQL cung cấp một cách để quản lý giao dịch trong cơ sở dữ liệu.

### Khái Niệm:

Giao dịch trong SQL là một chuỗi các lệnh SQL được thực thi như một đơn vị đồng nhất. Điều này đảm bảo rằng tất cả các thay đổi trong giao dịch sẽ được áp dụng hoàn toàn hoặc không được áp dụng tất cả, giữa các trạng thái đầy đủ và không thay đổi của cơ sở dữ liệu.

### Ngữ Cảnh:

Giao dịch làm việc trong ngữ cảnh đảm bảo rằng dữ liệu được cập nhật đồng nhất và nhất quán. Khi một giao dịch bắt đầu, mọi thay đổi sẽ được thực hiện và không có thay đổi nào được lưu trữ cho đến khi giao dịch được xác nhận hoặc hoàn tác.

### Cách Sử Dụng và Ví Dụ:

SQL cung cấp các lệnh để quản lý giao dịch như BEGIN TRANSACTION, COMMIT và ROLLBACK.

**Ví dụ:**

```sql
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
INSERT INTO Transactions (AccountID, Amount, Type) VALUES (123, 100, 'Withdrawal');

COMMIT;
```

- **BEGIN TRANSACTION:** Bắt đầu một giao dịch mới.
- **UPDATE và INSERT:** Các lệnh thực hiện thay đổi dữ liệu trong cơ sở dữ liệu.
- **COMMIT:** Xác nhận và áp dụng tất cả các thay đổi trong giao dịch vào cơ sở dữ liệu.

Nếu mọi lệnh trong giao dịch hoàn thành mà không gặp sự cố, COMMIT sẽ được gọi và tất cả các thay đổi sẽ được áp dụng vào cơ sở dữ liệu. Ngược lại, nếu có lỗi xảy ra hoặc cần hủy bỏ giao dịch, ROLLBACK sẽ được sử dụng để quay trở lại trạng thái trước khi giao dịch bắt đầu.

Xử lý giao dịch trong SQL quan trọng để đảm bảo tính nhất quán và an toàn của dữ liệu trong các tác vụ đa người dùng và đa nhiệm trong cơ sở dữ liệu.

---

## Lệnh COMMIT trong SQL

Lệnh COMMIT trong SQL được sử dụng để xác nhận và áp dụng các thay đổi đã được thực hiện trong một giao dịch vào cơ sở dữ liệu, đồng thời đóng gói và hoàn thành giao dịch.

### Khái Niệm:

COMMIT là một trong các lệnh của ngôn ngữ SQL được sử dụng để xác nhận rằng tất cả các thay đổi trong một giao dịch đã được thực hiện thành công và được áp dụng vào cơ sở dữ liệu. Sau khi COMMIT được thực hiện, các thay đổi trở thành không thể hoàn tác và sẽ không bị mất trong trường hợp sự cố hệ thống.

### Ngữ Cảnh:

Lệnh COMMIT đóng vai trò quan trọng trong quản lý giao dịch và đảm bảo tính nhất quán của cơ sở dữ liệu. Nó được sử dụng để áp dụng các thay đổi đã được xác nhận và đồng ý trong giao dịch, làm cho chúng trở thành lần cập nhật cuối cùng và không thể hoàn tác.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**

```sql
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
INSERT INTO Transactions (AccountID, Amount, Type) VALUES (123, 100, 'Withdrawal');

COMMIT;
```

- **BEGIN TRANSACTION:** Bắt đầu một giao dịch mới.
- **UPDATE và INSERT:** Thực hiện các thay đổi trong giao dịch.
- **COMMIT:** Xác nhận và áp dụng tất cả các thay đổi trong giao dịch vào cơ sở dữ liệu.

Trong ví dụ trên, sau khi COMMIT được thực hiện, dữ liệu sẽ được cập nhật theo thay đổi trong giao dịch, tức là số dư tài khoản sẽ được giảm và thông tin giao dịch rút tiền sẽ được thêm vào bảng Transactions. Tất cả các thay đổi này sẽ trở thành không thể hoàn tác sau khi COMMIT, trừ khi có sử dụng lệnh ROLLBACK để hủy bỏ giao dịch.

Lệnh COMMIT là một phần quan trọng của quản lý giao dịch trong SQL, đảm bảo tính nhất quán và an toàn của dữ liệu sau khi các thay đổi được áp dụng vào cơ sở dữ liệu.

---

## Lệnh ROLLBACK trong SQL

Lệnh ROLLBACK trong SQL được sử dụng để hủy bỏ các thay đổi đã được thực hiện trong một giao dịch chưa được COMMIT, đưa cơ sở dữ liệu trở về trạng thái trước khi giao dịch bắt đầu.

### Khái Niệm:

ROLLBACK là một lệnh trong SQL được sử dụng để quay trở lại trạng thái ban đầu của cơ sở dữ liệu trước khi giao dịch được bắt đầu. Nó hủy bỏ tất cả các thay đổi trong giao dịch chưa được COMMIT và không lưu lại các thay đổi đó vào cơ sở dữ liệu.

### Ngữ Cảnh:

Lệnh ROLLBACK được sử dụng trong tình huống mà một giao dịch gặp lỗi hoặc không thể hoàn thành thành công. Nó giúp đảm bảo rằng không có thay đổi nào bị áp dụng vào cơ sở dữ liệu nếu giao dịch không thực hiện được một cách đầy đủ hoặc không đúng.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**

```sql
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
INSERT INTO Transactions (AccountID, Amount, Type) VALUES (123, 100, 'Withdrawal');

ROLLBACK;
```

- **BEGIN TRANSACTION:** Bắt đầu một giao dịch mới.
- **UPDATE và INSERT:** Thực hiện các thay đổi trong giao dịch.
- **ROLLBACK:** Hủy bỏ tất cả các thay đổi trong giao dịch.

Nếu trong ví dụ trên có lỗi xảy ra hoặc giao dịch không thể hoàn thành, lệnh ROLLBACK sẽ được sử dụng để hủy bỏ tất cả các thay đổi đã được thực hiện trong giao dịch. Điều này đảm bảo rằng dữ liệu sẽ không bị thay đổi và trở về trạng thái ban đầu.

Lệnh ROLLBACK đóng vai trò quan trọng trong việc bảo vệ tính toàn vẹn và nhất quán của cơ sở dữ liệu. Nó đảm bảo rằng các thay đổi không đúng hoặc không hoàn thành trong giao dịch sẽ không ảnh hưởng đến dữ liệu trong cơ sở dữ liệu.

---

## Lệnh SAVEPOINT trong SQL

Lệnh SAVEPOINT trong SQL được sử dụng để tạo một điểm lưu trữ (savepoint) trong quá trình thực hiện giao dịch, cho phép chúng ta rollback đến điểm lưu trữ đó thay vì rollback toàn bộ giao dịch.

### Khái Niệm:

SAVEPOINT là một điểm lưu trữ tạm thời trong quá trình thực hiện giao dịch. Nó cho phép chúng ta lưu lại trạng thái của giao dịch tại thời điểm SAVEPOINT được tạo, từ đó có thể rollback đến điểm đó nếu cần.

### Ngữ Cảnh:

SAVEPOINT hữu ích khi chúng ta muốn phân chia giao dịch thành các phần nhỏ hơn và có khả năng rollback từng phần một, thay vì rollback toàn bộ giao dịch khi có lỗi.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**

```sql
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
SAVEPOINT before_insert;
INSERT INTO Transactions (AccountID, Amount, Type) VALUES (123, 100, 'Withdrawal');

-- Nếu có lỗi xảy ra sau INSERT, rollback đến điểm SAVEPOINT
ROLLBACK TO SAVEPOINT before_insert;

COMMIT;
```

- **BEGIN TRANSACTION:** Bắt đầu một giao dịch mới.
- **UPDATE và INSERT:** Thực hiện các thay đổi trong giao dịch.
- **SAVEPOINT:** Tạo một điểm lưu trữ tại điểm trước khi thực hiện INSERT.
- **ROLLBACK TO SAVEPOINT:** Nếu có lỗi xảy ra sau INSERT, chúng ta có thể rollback đến điểm SAVEPOINT thay vì rollback toàn bộ giao dịch.

Trong ví dụ trên, nếu INSERT gặp lỗi, chúng ta sẽ sử dụng ROLLBACK TO SAVEPOINT để rollback chỉ phần INSERT mà không ảnh hưởng đến phần UPDATE và không cần rollback toàn bộ giao dịch.

Lệnh SAVEPOINT giúp chia nhỏ giao dịch thành các phần nhỏ hơn và tạo khả năng rollback linh hoạt, giúp duy trì tính toàn vẹn và nhất quán của dữ liệu khi có lỗi xảy ra trong một phần của giao dịch.

---

## Lệnh RELEASE SAVEPOINT trong SQL

Lệnh RELEASE SAVEPOINT trong SQL được sử dụng để xóa một điểm lưu trữ (savepoint) đã được tạo trong quá trình thực hiện giao dịch, giúp giải phóng tài nguyên và không thể rollback đến điểm lưu trữ đó.

### Khái Niệm:

RELEASE SAVEPOINT là lệnh được sử dụng để xóa một điểm lưu trữ đã được tạo trước đó trong giao dịch. Khi điểm lưu trữ được giải phóng, không thể rollback đến điểm đó nữa.

### Ngữ Cảnh:

Lệnh RELEASE SAVEPOINT hữu ích khi chúng ta đã sử dụng một điểm lưu trữ trong quá trình giao dịch và không cần rollback đến điểm đó nữa. Việc giải phóng điểm lưu trữ cũng giúp giải phóng tài nguyên và không gian bộ nhớ.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**

```sql
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
SAVEPOINT before_insert;
INSERT INTO Transactions (AccountID, Amount, Type) VALUES (123, 100, 'Withdrawal');

-- Nếu không có lỗi, RELEASE SAVEPOINT để giải phóng điểm lưu trữ
RELEASE SAVEPOINT before_insert;

COMMIT;
```

- **BEGIN TRANSACTION:** Bắt đầu một giao dịch mới.
- **UPDATE và INSERT:** Thực hiện các thay đổi trong giao dịch.
- **SAVEPOINT:** Tạo một điểm lưu trữ trước khi thực hiện INSERT.
- **RELEASE SAVEPOINT:** Giải phóng điểm lưu trữ sau khi giao dịch đã hoàn tất mà không cần rollback đến điểm đó.

Trong ví dụ trên, sau khi INSERT đã hoàn tất mà không có lỗi xảy ra, chúng ta sử dụng RELEASE SAVEPOINT để giải phóng điểm lưu trữ. Điều này cho phép chúng ta không thể rollback đến điểm lưu trữ đó sau khi đã chắc chắn rằng các thay đổi không cần rollback nữa.

Lệnh RELEASE SAVEPOINT giúp quản lý và giải phóng tài nguyên trong quá trình thực hiện giao dịch, khi chúng ta không cần rollback đến một điểm lưu trữ cụ thể nữa.

---

## Lệnh SET TRANSACTION trong SQL

Lệnh SET TRANSACTION trong SQL được sử dụng để đặt các thuộc tính cho giao dịch như cấp độ cô lập, chỉ đọc hoặc việc sử dụng các cơ chế khóa. Nó quy định cách mà giao dịch sẽ hoạt động trong cơ sở dữ liệu.

### Khái Niệm:

SET TRANSACTION là lệnh dùng để thiết lập các thuộc tính cho giao dịch. Có thể thiết lập các thuộc tính như cấp độ cô lập, chỉ đọc (read-only), việc sử dụng khóa, hay các thuộc tính khác để định rõ cách giao dịch tương tác với dữ liệu.

### Ngữ Cảnh:

Lệnh này được sử dụng khi cần điều chỉnh hoạt động của giao dịch, như đảm bảo tính nhất quán, quản lý tài nguyên hoặc định rõ cách mà giao dịch tương tác với dữ liệu khác trong cơ sở dữ liệu.

### Cách Sử Dụng và Ví Dụ:

**Ví dụ:**

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;

UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 123;
SELECT * FROM Accounts WHERE AccountID = 123;

COMMIT;
```

- **SET TRANSACTION ISOLATION LEVEL:** Đặt cấp độ cô lập cho giao dịch.
- **BEGIN TRANSACTION:** Bắt đầu giao dịch.
- **UPDATE và SELECT:** Thực hiện thay đổi và truy vấn trong giao dịch.
- **COMMIT:** Kết thúc giao dịch.

Trong ví dụ trên, thông qua lệnh SET TRANSACTION ISOLATION LEVEL, chúng ta đặt cấp độ cô lập của giao dịch là READ COMMITTED, đảm bảo rằng các thay đổi trong giao dịch không ảnh hưởng đến các giao dịch khác cho đến khi giao dịch được COMMIT.

Lệnh SET TRANSACTION cho phép định rõ cách mà giao dịch tương tác với dữ liệu và các giao dịch khác, đảm bảo tính nhất quán và độ tin cậy của cơ sở dữ liệu.

---
