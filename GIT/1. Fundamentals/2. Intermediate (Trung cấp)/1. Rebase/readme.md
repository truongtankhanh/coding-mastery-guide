**Khái niệm:**

- Rebase trong Git là quá trình di chuyển (move) một nhánh (branch) sang một commit mới. Nó cho phép bạn tái cấu trúc lịch sử commit bằng cách áp dụng một nhánh (thường là feature branch) lên đầu của một nhánh khác (thường là main hoặc master), tạo ra một chuỗi lịch sử commit thẳng và gọn gàng hơn.

---

**Ngữ cảnh:**

- Rebase thường được sử dụng để giữ cho lịch sử commit sạch sẽ và dễ theo dõi. Khi bạn muốn hợp nhất các thay đổi từ một nhánh phụ vào nhánh chính mà không tạo ra các merge commit thừa, rebase là lựa chọn phổ biến.

---

**Cách sử dụng:**

1. **Rebase một nhánh khác vào nhánh hiện tại:**

   ```bash
   git checkout feature_branch
   git rebase main
   ```

   Điều này sẽ di chuyển (rebase) tất cả các commit trên `feature_branch` lên trên nhánh `main`.

2. **Giải quyết xung đột (nếu có):**
   Trong quá trình rebase, có thể xảy ra xung đột giữa các commit của hai nhánh khác nhau. Git sẽ thông báo và bạn cần phải giải quyết xung đột bằng cách chỉnh sửa các tệp tin bị xung đột.

3. **Tiếp tục hoặc tiếp tục rebase:**

   - Nếu có xung đột, sau khi giải quyết xung đột bạn sử dụng `git rebase --continue` để tiếp tục quá trình rebase.
   - Nếu bạn muốn bỏ qua một commit trong quá trình rebase, sử dụng `git rebase --skip`.

4. **Hoàn tất rebase:**
   - Khi rebase đã hoàn tất, bạn có thể chuyển đổi sang nhánh chính (ví dụ: `main`) và merge nhánh phụ (ví dụ: `feature_branch`) vào nhánh chính một cách sạch sẽ mà không có merge commit thừa.

---

**Ví dụ:**

1. **Rebase một nhánh khác vào nhánh hiện tại:**

   ```bash
   git checkout feature_branch
   git rebase main
   ```

   Điều này sẽ di chuyển (rebase) các commit từ `feature_branch` lên đầu của `main`.

2. **Giải quyết xung đột:**
   Khi có xung đột, sửa đổi tệp tin để giải quyết xung đột, sau đó sử dụng `git add` và `git rebase --continue` để tiếp tục rebase.

3. **Hoàn tất rebase:**
   Sau khi giải quyết xung đột và hoàn tất rebase, bạn có thể tiếp tục với công việc hoặc merge nhánh `feature_branch` vào `main` hoặc nhánh chính khác.

---

Rebase giúp duy trì một lịch sử commit sạch sẽ, linh hoạt và dễ theo dõi. Tuy nhiên, khi sử dụng rebase, cần phải cẩn thận để tránh việc thay đổi lịch sử commit đã được chia sẻ với người khác.

---
