**Khái niệm:**

- **Git Revert:** Là một lệnh trong Git để tạo một commit mới để hoàn nguyên (revert) một hoặc nhiều commit cũ, bằng cách áp dụng đảo ngược của các thay đổi trong commit cũ vào nhánh hiện tại.

- **Git Reset:** Là một lệnh trong Git để thay đổi trạng thái của nhánh hiện tại bằng cách di chuyển HEAD đến một commit cụ thể hoặc loại bỏ các commit khỏi lịch sử.

---

**Ngữ cảnh:**

- **Git Revert:** Thường được sử dụng khi bạn cần hoàn nguyên một hoặc một số commit cũ trên branch chính mà không làm thay đổi lịch sử commit của branch đó.

- **Git Reset:** Thường được sử dụng khi bạn muốn làm sạch lịch sử commit, thay đổi vị trí của HEAD hoặc xóa bỏ các commit.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Git Revert:**

   - **Khái niệm:**

     ```bash
     git revert <commit_hash>
     ```

     - `<commit_hash>`: là mã hash của commit bạn muốn hoàn nguyên.

   - **Ví dụ:**
     ```bash
     git revert abcdef12345
     ```
     Khi bạn chạy lệnh này, Git sẽ tạo một commit mới chứa các thay đổi đảo ngược từ commit có mã hash `abcdef12345`.

2. **Git Reset:**

   - **Khái niệm (soft reset):**

     ```bash
     git reset --soft <commit_hash>
     ```

     - `<commit_hash>`: là commit mà bạn muốn di chuyển đến, HEAD của branch sẽ chỉ đến commit này.

   - **Ví dụ (soft reset):**

     ```bash
     git reset --soft abcdef12345
     ```

     Điều này di chuyển HEAD của bạn đến commit có mã hash `abcdef12345` và giữ lại các thay đổi từ commit hiện tại.

   - **Khái niệm (hard reset):**

     ```bash
     git reset --hard <commit_hash>
     ```

     - `<commit_hash>`: là commit mà bạn muốn di chuyển đến, HEAD của branch và vùng làm việc sẽ trở về trạng thái của commit này.

   - **Ví dụ (hard reset):**
     ```bash
     git reset --hard abcdef12345
     ```
     Khi bạn chạy lệnh này, HEAD của bạn sẽ chỉ đến commit có mã hash `abcdef12345`, và tất cả các thay đổi sau commit này sẽ bị mất đi.

---

Lưu ý rằng việc sử dụng `git reset` có thể thay đổi lịch sử commit của repository, nên hãy sử dụng cẩn thận, đặc biệt là khi làm việc trên các nhánh đã được chia sẻ.

---
