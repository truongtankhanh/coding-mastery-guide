Pre-commit hooks là các kịch bản hoặc mã lệnh được thực thi tự động trước khi một commit được thực hiện trong Git. Sử dụng framework như Pre-commit giúp tự động hóa việc chạy một loạt các kiểm tra trước khi commit, bao gồm định dạng code, kiểm tra lỗi cú pháp và quy chuẩn mã nguồn.

### Ngữ cảnh:

Pre-commit hooks thông thường được sử dụng để đảm bảo rằng mã nguồn được commit tuân theo các quy tắc định dạng, quy chuẩn và không có lỗi cú pháp trước khi lưu vào repository. Pre-commit framework cung cấp một cách tiện lợi để tự động hóa việc thực thi các kiểm tra này trước khi commit.

### Cách sử dụng với Pre-commit framework:

Để sử dụng Pre-commit framework, bạn có thể thực hiện các bước sau:

1. **Cài đặt Pre-commit framework:** Đầu tiên, cài đặt Pre-commit framework trong repository của bạn.

   ```bash
   pip install pre-commit
   ```

2. **Tạo file cấu hình `.pre-commit-config.yaml`:** Tạo một file cấu hình để xác định các kiểm tra và tools sẽ được sử dụng.

   ```yaml
   repos:
     - repo: https://github.com/pre-commit/pre-commit-hooks
       rev: v3.4.0
       hooks:
         - id: trailing-whitespace
         - id: end-of-file-fixer
   ```

   Trong ví dụ trên, chúng ta sử dụng các hooks có sẵn trong thư viện `pre-commit-hooks` để kiểm tra và sửa lỗi khoảng trắng dư thừa và kết thúc file.

3. **Chạy lệnh pre-commit install:** Sau khi cấu hình, chạy lệnh sau để cài đặt pre-commit hooks vào repository.

   ```bash
   pre-commit install
   ```

4. **Thực hiện commit:** Bây giờ, khi bạn thực hiện commit, các kiểm tra được xác định trong cấu hình `.pre-commit-config.yaml` sẽ được chạy tự động.

   ```bash
   git commit -m "Commit message"
   ```

Pre-commit framework cho phép bạn tự động hóa việc chạy các kiểm tra trước khi commit, giúp đảm bảo rằng mã nguồn đáp ứng các quy tắc định dạng và chuẩn mã nguồn, cũng như tránh các lỗi cú pháp trước khi lưu vào repository. Điều này giúp duy trì và cải thiện chất lượng mã nguồn trong dự án của bạn.

---

Pre-receive hooks là các hooks trong Git được thực thi trên phía máy chủ (server-side hooks). Chúng cho phép bạn tùy chỉnh các hành động hoặc kiểm tra trước khi các commit được chấp nhận và áp dụng vào remote repository. Điều này có thể bao gồm các kiểm tra an ninh, quy tắc commit, hoặc định dạng mã nguồn.

### Ngữ cảnh:

Pre-receive hooks thường được sử dụng để thực hiện các kiểm tra nghiêm ngặt trước khi chấp nhận các thay đổi từ các nguồn khác nhau vào remote repository. Chúng cung cấp một cơ chế để kiểm soát chặt chẽ về an ninh và chất lượng mã nguồn trước khi dữ liệu được lưu trữ trong repository chính.

### Cách sử dụng với Git server-side hooks:

Để tạo và sử dụng pre-receive hooks trên Git server-side, thực hiện các bước sau:

1. **Di chuyển đến thư mục hooks trên máy chủ Git:**
   Đây là thư mục hooks trên máy chủ Git mà bạn quản lý. Đường dẫn thường là `/path/to/your/repo.git/hooks`.

2. **Tạo hoặc chỉnh sửa pre-receive hook:**
   Tạo hoặc chỉnh sửa tập tin `pre-receive` và thêm mã lệnh kiểm tra bạn muốn thực thi trước khi chấp nhận commit vào remote repository.

   ```bash
   #!/bin/bash

   # Đọc từng commit từ standard input
   while read oldrev newrev refname; do
       # Thực hiện kiểm tra hoặc kiểm soát nghiêm ngặt ở đây
       # Ví dụ: Kiểm tra định dạng, quy tắc commit, an ninh, ...
       # Sử dụng oldrev, newrev và refname để thực hiện các kiểm tra cụ thể
   done
   ```

3. **Lưu và cấp quyền thực thi:**
   Lưu tập tin và cấp quyền thực thi cho nó bằng lệnh `chmod +x pre-receive`.

4. **Kiểm tra pre-receive hook:**
   Thực hiện commit từ một máy client đến máy chủ Git. Pre-receive hook sẽ được kích hoạt và kiểm tra các thay đổi được gửi đến repository. Nếu có bất kỳ điều kiện nào không đáp ứng, commit sẽ bị từ chối và bạn sẽ nhận được thông báo lỗi.

Pre-receive hooks được sử dụng để kiểm soát chặt chẽ quá trình chấp nhận commit vào remote repository. Bằng cách thực hiện các kiểm tra cụ thể, chúng giúp đảm bảo rằng các thay đổi được áp dụng vào repository đáp ứng các tiêu chuẩn và quy tắc nhất định trước khi được chấp nhận.

---

Post-receive hooks trong Git là các hooks được thực thi sau khi dữ liệu đã được chấp nhận và lưu trữ vào remote repository. Chúng có thể được sử dụng để tự động triển khai phần mềm sau khi nhận commit mới, tạo ra một quy trình continuous deployment.

### Ngữ cảnh:

Post-receive hooks được sử dụng rộng rãi trong continuous deployment để tự động triển khai các thay đổi sau khi commit mới được đưa vào remote repository. Điều này giúp giảm thiểu sự can thiệp thủ công và tăng tính hiệu quả trong việc triển khai ứng dụng hoặc phần mềm.

### Cách sử dụng với auto-deployment:

Để sử dụng Post-receive hooks cho auto-deployment, bạn có thể thực hiện các bước sau:

1. **Di chuyển đến thư mục hooks trên máy chủ Git:**
   Điều này tương tự như việc tạo các hooks khác, bạn cần truy cập vào thư mục `.git/hooks` trên máy chủ Git của bạn.

2. **Tạo hoặc chỉnh sửa post-receive hook:**
   Tạo hoặc chỉnh sửa tập tin `post-receive` và thêm mã lệnh để thực hiện quy trình triển khai của bạn sau khi nhận commit mới.

   ```bash
   #!/bin/bash

   # Đường dẫn đến thư mục deploy hoặc thực hiện các lệnh triển khai ở đây
   cd /path/to/your/deployment/folder

   # Thực hiện các bước triển khai, ví dụ: pull code mới, cài đặt dependencies, restart server, ...
   git pull origin master
   npm install
   pm2 restart server.js
   ```

   Đảm bảo rằng bạn đã thiết lập các bước cụ thể phù hợp với quy trình triển khai của mình trong mã lệnh của hook.

3. **Lưu và cấp quyền thực thi:**
   Lưu tập tin và cấp quyền thực thi cho nó bằng lệnh `chmod +x post-receive`.

4. **Kiểm tra post-receive hook:**
   Thực hiện commit từ một máy client đến máy chủ Git. Post-receive hook sẽ được kích hoạt và thực hiện quy trình triển khai bạn đã định nghĩa sau mỗi lần commit.

Post-receive hooks có thể được sử dụng để tự động hóa quy trình triển khai của bạn sau mỗi lần commit mới, giúp tạo ra một quy trình continuous deployment hiệu quả và giảm thiểu sự can thiệp thủ công.

---
