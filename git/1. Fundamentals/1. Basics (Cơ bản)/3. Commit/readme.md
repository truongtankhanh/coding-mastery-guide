**Khái niệm:**

- Commit trong hệ thống kiểm soát phiên bản (VCS) là hành động ghi lại các thay đổi đã được thực hiện vào repository. Mỗi lần commit đều tạo ra một phiên bản mới trong lịch sử của repository, bao gồm các thay đổi trong tệp tin hoặc thư mục cụ thể, thông tin về người thực hiện, thời gian, và một thông điệp mô tả về những thay đổi đã được thực hiện.

---

**Ngữ cảnh:**

- Commit là bước quan trọng trong quá trình phát triển phần mềm, cho phép các nhóm làm việc cùng nhau trên cùng một dự án mà không lo sợ ghi đè lên nhau. Nó tạo ra một lịch sử rõ ràng về sự phát triển của dự án và cung cấp khả năng phục hồi lại các phiên bản trước đó nếu cần thiết.

---

**Cách sử dụng:**

1. **Thêm thay đổi vào staging area:**
   Trước khi commit, bạn cần đưa các thay đổi vào staging area sử dụng lệnh `git add <filename>` để chuẩn bị cho việc commit.

2. **Commit các thay đổi đã staging:**

   ```bash
   git commit -m "Description of changes"
   ```

   Lệnh này sẽ tạo ra một commit mới với thông điệp mô tả các thay đổi đã được đưa vào staging area.

3. **Xem lịch sử commit:**
   ```bash
   git log
   ```
   Để xem lịch sử các commit trong repository.

---

**Ví dụ:**
Giả sử bạn đang làm việc trên một dự án và đã thực hiện một số thay đổi trong một tệp tin. Để commit các thay đổi này:

1. Thêm tệp tin đã chỉnh sửa vào staging area:
   ```bash
   git add filename.py
   ```
2. Commit các thay đổi đã staging với một thông điệp mô tả:
   ```bash
   git commit -m "Updated functionality for filename.py"
   ```
3. Xem lịch sử commit để kiểm tra commit vừa được tạo:
   ```bash
   git log
   ```

Commit giúp bạn theo dõi và quản lý các thay đổi, cũng như tạo ra một lịch sử rõ ràng về sự phát triển của dự án trong hệ thống kiểm soát phiên bản.

---
