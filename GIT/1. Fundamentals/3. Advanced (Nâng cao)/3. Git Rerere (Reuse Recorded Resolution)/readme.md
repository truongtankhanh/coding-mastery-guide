**Khái niệm:**

- `Git Rerere`, viết tắt của "Reuse Recorded Resolution", là một tính năng của Git giúp tự động ghi lại và sử dụng lại các giải pháp (resolution) mà bạn đã thực hiện để giải quyết xung đột hợp nhất (merge conflict) trong quá khứ.

---

**Ngữ cảnh:**

- Khi làm việc trong môi trường phát triển phức tạp, thường xuyên xảy ra các xung đột hợp nhất khi thực hiện merge giữa các nhánh. Việc giải quyết xung đột này đòi hỏi thời gian và công sức. `Rerere` giúp tái sử dụng các giải pháp đã được ghi lại trước đó để tự động giải quyết xung đột tương tự trong tương lai, giảm thiểu thời gian và công sức.

---

**Cách sử dụng và ví dụ lệnh:**

1. **Bật tính năng Rerere:**

   - **Khái niệm:**

     ```bash
     git config --global rerere.enabled true
     ```

     Bật tính năng Rerere toàn cục trong Git.

   - **Ví dụ:**
     ```bash
     git config --global rerere.enabled true
     ```
     Điều này sẽ bật tính năng Rerere cho tất cả các repository trên máy tính của bạn.

2. **Sử dụng Rerere khi gặp xung đột hợp nhất:**

   - **Khái niệm:**
     Khi bạn gặp xung đột hợp nhất và giải quyết nó, Git sẽ tự động ghi lại giải pháp của bạn để sử dụng lại sau này.

   - **Ví dụ:**
     Khi bạn gặp một xung đột hợp nhất, giải quyết nó bằng các lệnh `git add`, `git commit`. Git sẽ ghi lại giải pháp này cho tương lai.

3. **Sử dụng giải pháp đã ghi lại:**

   - **Khái niệm:**

     ```bash
     git rerere
     ```

     Xem danh sách các giải pháp đã ghi lại.

   - **Ví dụ:**
     ```bash
     git rerere
     ```
     Lệnh này sẽ hiển thị danh sách các giải pháp đã ghi lại cho các xung đột hợp nhất trước đó.

4. **Tự động sử dụng giải pháp đã ghi lại:**

   - **Khái niệm:**
     Khi bạn gặp một xung đột tương tự, Git sẽ sử dụng giải pháp đã ghi lại để giải quyết mà không cần can thiệp của bạn.

   - **Ví dụ:**
     Khi bạn gặp một xung đột hợp nhất tương tự, Git sẽ tự động áp dụng giải pháp đã ghi lại từ trước.

---

`Git Rerere` giúp tự động ghi lại và sử dụng lại các giải pháp giải quyết xung đột hợp nhất, tiết kiệm thời gian và công sức trong quá trình phát triển. Tuy nhiên, nó cũng cần được bật và quản lý cẩn thận để tránh những xung đột không mong muốn.

---
