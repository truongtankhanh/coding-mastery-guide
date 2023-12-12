**Khái niệm:**

- Stash trong Git là một cơ chế cho phép bạn tạm thời lưu trữ các thay đổi chưa commit để làm sạch vùng làm việc (working directory) của bạn mà không cần commit chúng.

---

**Ngữ cảnh:**

- Stash thường được sử dụng khi bạn đang làm việc trên một thay đổi nhưng cần chuyển sang một nhiệm vụ khác hoặc cần phải cập nhật hoặc xử lý một vấn đề khác mà không muốn commit những thay đổi đang làm. Nó giúp bạn tạm thời lưu trữ các thay đổi đó và sau đó bạn có thể áp dụng chúng trở lại khi bạn quay lại công việc đó.

---

**Cách sử dụng:**

1. **Lưu trữ các thay đổi vào stash:**

   ```bash
   git stash save "Message"
   ```

   - `"Message"`: Là một tin nhắn mô tả những thay đổi bạn đã lưu.

2. **Xem danh sách các stash:**

   ```bash
   git stash list
   ```

   Điều này sẽ hiển thị danh sách các stash và thông tin về chúng.

3. **Áp dụng các thay đổi từ stash:**

   ```bash
   git stash apply
   ```

   Điều này sẽ áp dụng stash mới nhất lên vùng làm việc mà không xóa stash đó khỏi danh sách.

4. **Xóa stash sau khi áp dụng:**

   ```bash
   git stash drop
   ```

   Điều này sẽ xóa stash mới nhất khỏi danh sách.

5. **Áp dụng và xóa stash:**
   ```bash
   git stash pop
   ```
   Điều này sẽ áp dụng stash mới nhất lên vùng làm việc và xóa stash đó khỏi danh sách.

---

**Ví dụ:**

1. **Lưu trữ các thay đổi vào stash:**

   ```bash
   git stash save "Work in progress"
   ```

   Điều này sẽ lưu trữ các thay đổi bạn đang làm vào stash với thông điệp là "Work in progress".

2. **Xem danh sách các stash:**

   ```bash
   git stash list
   ```

   Sẽ hiển thị danh sách các stash, ví dụ:

   ```
   stash@{0}: On master: Work in progress
   ```

3. **Áp dụng các thay đổi từ stash:**

   ```bash
   git stash apply
   ```

   Điều này áp dụng stash mới nhất vào vùng làm việc mà không xóa stash đó khỏi danh sách.

4. **Xóa stash sau khi áp dụng:**

   ```bash
   git stash drop
   ```

   Điều này sẽ xóa stash mới nhất khỏi danh sách.

5. **Áp dụng và xóa stash:**
   ```bash
   git stash pop
   ```
   Điều này áp dụng stash mới nhất vào vùng làm việc và xóa stash đó khỏi danh sách.

---

Stash là một công cụ hữu ích để tạm thời lưu trữ và quản lý các thay đổi chưa commit một cách linh hoạt, giúp bạn chuyển đổi giữa các công việc một cách dễ dàng mà không làm rối lịch sử commit của bạn.

---
