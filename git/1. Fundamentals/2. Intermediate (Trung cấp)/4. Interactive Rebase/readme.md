**Khái niệm:**

- Interactive rebase trong Git là quá trình sắp xếp lại lịch sử commit trên một nhánh theo cách tương tác, cho phép bạn sửa đổi, xóa bỏ, gộp nhất hoặc thậm chí chia nhỏ các commit trong lịch sử commit của một nhánh.

---

**Ngữ cảnh:**

- Interactive rebase là một công cụ mạnh mẽ để sắp xếp lại và chỉnh sửa lịch sử commit trước khi merge nhánh vào một nhánh chính, làm cho lịch sử commit trở nên dễ đọc và có tổ chức hơn.

---

**Cách sử dụng:**

1. **Bắt đầu interactive rebase:**

   ```bash
   git rebase -i <base_commit>
   ```

   - `<base_commit>`: Commit cha mà bạn muốn bắt đầu rebase từ đó (thường là commit trước commit đầu tiên bạn muốn chỉnh sửa).

2. **Mở giao diện tương tác:**
   Lệnh trên sẽ mở một giao diện tương tác (thường là trình soạn thảo văn bản) hiển thị danh sách các commit và hướng dẫn sử dụng để chỉnh sửa lịch sử commit.

3. **Sửa đổi lịch sử commit:**

   - Bạn có thể thay đổi từ "pick" thành "edit" để chỉnh sửa commit, hoặc "squash" để gộp commit với commit trước đó, hoặc "drop" để loại bỏ commit.
   - Lưu lại và đóng giao diện tương tác.

4. **Giải quyết xung đột (nếu có):**

   - Khi sửa đổi commit, có thể xảy ra xung đột. Giải quyết chúng tương tự như trong rebase thông thường.

5. **Tiếp tục rebase hoặc hoàn tất:**
   - Sau khi hoàn thành sửa đổi các commit, sử dụng `git rebase --continue` để tiếp tục rebase hoặc `git rebase --abort` để hủy bỏ rebase.

---

**Ví dụ:**

1. **Bắt đầu interactive rebase:**

   ```bash
   git rebase -i HEAD~3
   ```

   Điều này mở một giao diện tương tác cho bạn sửa đổi 3 commit gần nhất.

2. **Sửa đổi lịch sử commit:**
   Giao diện tương tác sẽ hiển thị danh sách commit và bạn có thể thay đổi từ "pick" thành "edit" hoặc "squash", hoặc xóa dòng của commit để loại bỏ nó.

3. **Giải quyết xung đột (nếu có):**
   Nếu có xung đột trong quá trình chỉnh sửa commit, giải quyết chúng giống như trong rebase thông thường.

4. **Hoàn tất rebase:**
   Khi bạn hoàn thành sửa đổi các commit, sử dụng `git rebase --continue` để tiếp tục rebase hoặc `git rebase --abort` để hủy bỏ rebase.

---

Interactive rebase là công cụ mạnh mẽ cho phép bạn tinh chỉnh và sắp xếp lại lịch sử commit một cách linh hoạt, giúp làm cho lịch sử commit trở nên dễ đọc và quản lý. Tuy nhiên, nên cẩn thận khi sử dụng để tránh thay đổi lịch sử commit đã được chia sẻ với người khác.

---
