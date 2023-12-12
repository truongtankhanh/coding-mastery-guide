**Khái niệm:**

- Interactive Staging, hoặc `git add -p`, là một tính năng trong Git cho phép bạn tương tác với các thay đổi trong working directory và chọn từng phần của các tệp để thêm vào staging area. Điều này giúp bạn kiểm soát rõ ràng việc staging các thay đổi trước khi commit, cho phép bạn tách các thay đổi ra thành các phần nhỏ hơn.

---

**Ngữ cảnh:**

- Khi làm việc với nhiều thay đổi trong các tệp hoặc khi chỉ muốn stage một phần nhỏ của một tệp thay đổi, `git add -p` trở nên hữu ích. Nó cho phép bạn xem từng phần thay đổi và quyết định chúng có nên được thêm vào staging area hay không.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Bắt đầu Interactive Staging:**

   - **Khái niệm:**

     ```bash
     git add -p
     ```

     Lệnh này bắt đầu quá trình tương tác để thêm các thay đổi vào staging area một cách tương tác.

   - **Ví dụ:**
     ```bash
     git add -p
     ```
     Điều này sẽ bắt đầu quá trình tương tác để thêm các thay đổi vào staging area.

2. **Tương tác với từng phần thay đổi:**

   - **Khái niệm:**
     Khi chạy lệnh `git add -p`, Git sẽ hiển thị từng phần thay đổi trong các tệp và yêu cầu bạn chọn xem phần nào nên được thêm vào staging area.

   - **Ví dụ:**
     Khi bạn chạy lệnh `git add -p`, Git sẽ hiển thị một giao diện tương tác để bạn chọn các phần thay đổi cụ thể nào nên thêm vào staging area.

3. **Lựa chọn từng phần thay đổi:**

   - **Khái niệm:**
     Trong quá trình tương tác, bạn sẽ được hỏi về từng phần thay đổi và có thể chọn giữa các lựa chọn như `y` (yes), `n` (no), `s` (split), `q` (quit),...

   - **Ví dụ:**
     Khi Git hiển thị một phần thay đổi cụ thể, bạn có thể chọn các lựa chọn như `y` (thêm phần thay đổi này), `n` (không thêm), `s` (chia nhỏ phần thay đổi), hoặc `q` (thoát).

4. **Hoàn thành quá trình tương tác:**

   - **Khái niệm:**
     Khi bạn đã lựa chọn xong các phần thay đổi, bạn có thể hoàn thành quá trình tương tác và đưa các thay đổi đã chọn vào staging area.

   - **Ví dụ:**
     Sau khi hoàn thành tương tác, Git sẽ thêm vào staging area các phần thay đổi mà bạn đã chọn.

---

Interactive Staging (`git add -p`) giúp bạn kiểm soát việc thêm các thay đổi vào staging area một cách chi tiết và linh hoạt, cho phép bạn chỉ chọn những phần cần thiết để commit mà không cần thêm toàn bộ thay đổi trong tệp.

---
