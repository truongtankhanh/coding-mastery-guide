## Git LFS là gì?

- Git LFS (Git Large File Storage) là một phần mở rộng của Git được sử dụng để quản lý và lưu trữ các tệp lớn hiệu quả hơn trong kho lưu trữ Git. Trong Git, việc quản lý các tệp tin lớn có thể tạo ra vấn đề hiệu suất khi commit và clone kho lưu trữ. Git LFS giải quyết vấn đề này bằng cách thay thế các tệp lớn bằng các tham chiếu (pointers) trong kho lưu trữ, trong khi tệp thực sự được lưu trữ ở nơi khác, thường là một máy chủ hoặc dịch vụ lưu trữ khác.

- Git LFS rất phù hợp khi bạn làm việc với các loại tệp lớn như hình ảnh, video, dữ liệu đa phương tiện, các tập tin nhị phân, hay bất kỳ loại tệp nào có kích thước lớn có thể gây cản trở cho hiệu suất của kho lưu trữ Git.

- Để sử dụng Git LFS, trước tiên, bạn cần cài đặt Git LFS trên máy tính của mình. Sau đó, bạn phải khởi tạo kho lưu trữ để sử dụng Git LFS và chỉ định các loại tệp bạn muốn quản lý bằng LFS. Để làm điều này, bạn sử dụng các lệnh như sau:

1. **Cài đặt Git LFS:** Đầu tiên, bạn cần cài đặt Git LFS trên máy tính của mình. Sử dụng các lệnh dưới đây để cài đặt Git LFS:

   ```
   # Cho macOS, sử dụng Homebrew
   brew install git-lfs

   # Cho Ubuntu/Debian
   sudo apt-get install git-lfs

   # Cho Windows, tải và cài đặt từ trang web Git LFS
   ```

2. **Khởi tạo Git LFS trong kho lưu trữ:**

   ```
   # Di chuyển đến thư mục của kho lưu trữ Git
   cd path/to/your/git/repository

   # Khởi tạo Git LFS trong kho lưu trữ
   git lfs install

   # Chọn các loại tệp mà bạn muốn quản lý bằng LFS (ví dụ: *.mp4, *.psd)
   git lfs track "*.mp4"
   git lfs track "*.psd"

   # Commit và push các thay đổi vào kho lưu trữ
   git add .gitattributes
   git commit -m "Enable Git LFS for large files"
   git push origin master
   ```

Khi bạn thực hiện các bước này, Git LFS sẽ được cấu hình cho kho lưu trữ của bạn và các tệp lớn được theo dõi bằng Git LFS sẽ được xử lý đúng cách trong quá trình commit, push và pull.

_Ví dụ cụ thể:_

- Nếu bạn có một kho lưu trữ Git và muốn quản lý các tệp video _.mp4 bằng Git LFS, bạn sẽ sử dụng các lệnh trên để khởi tạo Git LFS cho kho lưu trữ và xác định loại tệp bạn muốn quản lý. Khi bạn thêm tệp video _.mp4 vào kho lưu trữ và commit, Git LFS sẽ thay thế chúng bằng các tham chiếu, giữ cho kho lưu trữ nhẹ nhàng và hiệu quả.

---

## Sự khác biệt giữa Git và Git LFS

Để hiểu sự khác biệt giữa Git và Git LFS trong cách lưu trữ các tệp, chúng ta cần xem xét cách mà mỗi hệ thống xử lý và lưu trữ dữ liệu.

### Git:

- Git là hệ thống quản lý phiên bản dùng để theo dõi các thay đổi trong mã nguồn. Khi bạn commit các thay đổi vào kho lưu trữ Git, các tệp tin mới hoặc đã được thay đổi được lưu trữ như một chuỗi các snapshot. Git lưu trữ toàn bộ nội dung của mỗi phiên bản của tệp trong kho lưu trữ của nó. Điều này có nghĩa là mỗi lần bạn commit, toàn bộ tệp tin đó được lưu trữ lại, bao gồm cả lịch sử các phiên bản trước đó.

### Git LFS:

- Ngược lại, Git LFS (Git Large File Storage) là một phần mở rộng của Git, được tối ưu hóa để quản lý các tệp lớn và có kích thước lớn hơn một cách hiệu quả hơn. Thay vì lưu trữ toàn bộ nội dung của các tệp lớn trong kho lưu trữ Git, Git LFS chỉ lưu trữ các pointer (tham chiếu) đến các tệp lớn này.

- Khi bạn sử dụng Git LFS để theo dõi các tệp lớn, Git thay vì lưu trữ tệp lớn đó trong kho lưu trữ, nó sẽ chỉ lưu trữ một pointer đến vị trí của tệp lớn đó (thông thường trên một máy chủ hoặc dịch vụ lưu trữ khác).

### Sự khác biệt chính giữa Git và Git LFS:

1. **Lưu trữ tệp:**

   - **Git:** Lưu trữ toàn bộ nội dung của các tệp trong kho lưu trữ.
   - **Git LFS:** Lưu trữ chỉ các pointers hoặc tham chiếu đến các tệp lớn, trong khi thực tế các tệp được lưu trữ ở nơi khác.

2. **Hiệu suất:**
   - **Git:** Hiệu suất có thể giảm khi commit và clone các tệp lớn do lưu trữ toàn bộ nội dung mỗi lần commit.
   - **Git LFS:** Cải thiện hiệu suất bằng cách thay thế các tệp lớn bằng các pointers, giúp làm giảm kích thước của kho lưu trữ và tăng tốc độ clone và commit.

### Ví dụ cụ thể:

- Khi sử dụng Git thông thường, nếu bạn commit một tệp video có kích thước lớn, Git sẽ lưu trữ toàn bộ nội dung của video đó trong kho lưu trữ của bạn. Trong khi đó, nếu bạn sử dụng Git LFS để quản lý tệp video lớn, Git chỉ lưu trữ một pointer đến video đó và thực tế video sẽ được lưu trữ trên máy chủ Git LFS hoặc dịch vụ lưu trữ khác.

Điều này giúp làm giảm kích thước của kho lưu trữ của bạn và cải thiện hiệu suất khi làm việc với các tệp lớn trong dự án của bạn.

---
