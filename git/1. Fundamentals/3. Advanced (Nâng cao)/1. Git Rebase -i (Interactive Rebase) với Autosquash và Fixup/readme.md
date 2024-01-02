**Khái niệm:**

- `git rebase -i` là một công cụ mạnh mẽ trong Git cho phép bạn tái cấu trúc lịch sử commit của bạn theo cách tương tác (interactive rebase). Khi kết hợp với `Autosquash` và `Fixup`, nó cho phép bạn chỉnh sửa, sắp xếp lại, hoặc gộp commit một cách thuận tiện và tự động.

---

**Ngữ cảnh:**

- Khi bạn cần sắp xếp lại lịch sử commit, gộp các commit liên quan hoặc chỉnh sửa lại commit messages, `git rebase -i` là công cụ mạnh mẽ cho việc này. Khi kết hợp với `Autosquash` và `Fixup`, nó giúp tự động gộp các commit vào một commit lớn hoặc sửa đổi commit messages một cách dễ dàng.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Rebase Interactively (`git rebase -i`):**

   - **Khái niệm:**

     ```bash
     git rebase -i HEAD~n
     ```

     - `n`: Số commit bạn muốn rebase.

   - **Ví dụ:**
     ```bash
     git rebase -i HEAD~5
     ```
     Điều này mở một cửa sổ tương tác hiển thị 5 commit gần nhất trên branch của bạn.

2. **Autosquash với Fixup:**

   - **Khái niệm:**

     - `fixup!` và `squash!` là các prefix bạn sử dụng trong commit messages để chỉ ra rằng commit đó cần được tự động gộp vào commit trước đó hoặc commit mục tiêu khi rebase.

   - **Ví dụ:**

     - **Fixup:**

       ```bash
       git commit --fixup <commit_hash>
       ```

       - `<commit_hash>`: là commit mà bạn muốn gộp commit này vào.

     - **Squash:**
       ```bash
       git commit --squash <commit_hash>
       ```
       - `<commit_hash>`: là commit mà bạn muốn gộp commit này vào.

3. **Hoàn thành Interactive Rebase:**

   - **Khái niệm:**

     - Khi bạn đã hoàn thành chỉnh sửa trong cửa sổ tương tác, bạn lưu và đóng cửa sổ. Git sẽ thực hiện rebase dựa trên những thay đổi bạn đã chỉ định.

   - **Ví dụ:**
     Sau khi sửa đổi cửa sổ tương tác và chỉ định commit bạn muốn sửa đổi hoặc gộp, bạn lưu và đóng cửa sổ. Git sẽ thực hiện rebase dựa trên chỉ định của bạn.

---

Ví dụ, khi bạn sử dụng `git commit --fixup <commit_hash>` với một commit message đã tồn tại, commit mới sẽ có tiền tố là `fixup!` và khi bạn sử dụng `git commit --squash <commit_hash>`, commit mới sẽ có tiền tố là `squash!`. Khi bạn thực hiện rebase tương tác (`git rebase -i`) và sử dụng Autosquash, Git sẽ tự động gộp các commit fixup và squash vào commit tương ứng khi rebase.

---
