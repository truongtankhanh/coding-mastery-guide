## Git Hooks and Pre-push Scripts

Git hooks là các kịch bản hay các lệnh được kích hoạt tự động khi các sự kiện nhất định xảy ra trong quá trình làm việc với Git. Trong trường hợp này, chúng ta sử dụng hook pre-push để thực hiện các kiểm tra tệp trước khi chúng được đẩy (push) lên kho lưu trữ Git LFS.

### Ngữ cảnh:

- **Git Hooks:** Được kích hoạt bởi các sự kiện cụ thể trong quá trình Git (pre-push, pre-commit, post-commit, vv.).
- **Pre-push Hook:** Chạy trước khi push các thay đổi lên kho lưu trữ từ local lên remote.

### Cách sử dụng:

#### Bước 1: Di chuyển đến thư mục của repository

Sử dụng Command Prompt, Terminal hoặc PowerShell để di chuyển đến thư mục của repository.

```
cd path/to/your/repository
```

#### Bước 2: Tạo hoặc chỉnh sửa pre-push hook

Tạo hoặc chỉnh sửa file pre-push trong thư mục .git/hooks của repository của bạn. Đây là nơi chứa các Git hooks.

```bash
nano .git/hooks/pre-push
```

#### Bước 3: Viết mã kiểm tra vào pre-push hook

Sử dụng ngôn ngữ kịch bản (bash, Python, Ruby,...) hoặc bất kỳ ngôn ngữ lập trình nào mà bạn thoải mái để thực hiện các kiểm tra tệp.

Ví dụ, sử dụng bash script để kiểm tra kích thước của các tệp trước khi push:

```bash
#!/bin/bash

# Thực hiện kiểm tra kích thước tệp
file_size=$(du -sk files_to_check/* | awk '{print $1}')
max_size=1000 # Kích thước tối đa cho phép, ví dụ 1000 KB

if [ $file_size -gt $max_size ]; then
    echo "File size exceeds the limit. Aborting push!"
    exit 1
else
    echo "Files size within limit. Push allowed!"
    exit 0
fi
```

#### Bước 4: Lưu và cấp quyền thực thi cho pre-push hook

Sau khi bạn viết mã kiểm tra, lưu file và đảm bảo nó được cấp quyền thực thi để có thể chạy.

```bash
chmod +x .git/hooks/pre-push
```

### Ví dụ:

Giả sử bạn muốn kiểm tra tất cả các tệp trong thư mục `files_to_check` có kích thước không vượt quá 1000 KB trước khi push. Bạn có thể sử dụng bash script như trên và lưu vào pre-push hook.

Khi bạn push thay đổi từ local lên remote, pre-push hook sẽ chạy kiểm tra và thông báo nếu có bất kỳ tệp nào vượt quá kích thước quy định.

Lưu ý: Đây là một ví dụ đơn giản, bạn có thể mở rộng hoặc sửa đổi pre-push hook tùy thuộc vào nhu cầu kiểm tra cụ thể của bạn.

---

## Pre-push Scripts for LFS

Pre-push scripts trong Git LFS là các kịch bản được thực thi trước khi bạn thực hiện việc đẩy (push) các thay đổi lên kho lưu trữ Git LFS. Các kịch bản này có thể kiểm tra kích thước, định dạng hoặc các yêu cầu khác của tệp trước khi chúng được gửi lên kho lưu trữ.

### Ngữ cảnh:

- **Git Hooks:** Cung cấp các sự kiện để thực thi các lệnh trước hoặc sau khi các hành động Git xảy ra.
- **Pre-push Hook:** Chạy trước khi push các thay đổi lên kho lưu trữ từ local lên remote.

### Cách sử dụng:

#### Bước 1: Di chuyển đến thư mục của repository

Mở Command Prompt, Terminal hoặc PowerShell và di chuyển đến thư mục của repository.

```
cd path/to/your/repository
```

#### Bước 2: Tạo hoặc chỉnh sửa pre-push hook

Tạo hoặc chỉnh sửa file pre-push trong thư mục .git/hooks của repository của bạn. Đây là nơi chứa các Git hooks.

```bash
nano .git/hooks/pre-push
```

#### Bước 3: Viết mã kiểm tra vào pre-push hook

Sử dụng ngôn ngữ kịch bản (bash, Python, Ruby,...) hoặc bất kỳ ngôn ngữ lập trình nào mà bạn thoải mái để thực hiện các kiểm tra tệp.

Ví dụ, sử dụng bash script để kiểm tra kích thước và định dạng của các tệp trước khi push:

```bash
#!/bin/bash

# Kiểm tra kích thước tệp
max_size=1000 # Kích thước tối đa cho phép, ví dụ 1000 KB

while read local_ref local_sha remote_ref remote_sha
do
    for file in $(git diff-tree --no-commit-id --name-only -r $local_sha $remote_sha); do
        file_size=$(du -k "$file" | cut -f1)
        if [ $file_size -gt $max_size ]; then
            echo "File '$file' size exceeds the limit. Aborting push!"
            exit 1
        fi
    done
done
exit 0
```

#### Bước 4: Lưu và cấp quyền thực thi cho pre-push hook

Sau khi bạn viết mã kiểm tra, lưu file và đảm bảo nó được cấp quyền thực thi để có thể chạy.

```bash
chmod +x .git/hooks/pre-push
```

### Ví dụ:

Trong ví dụ trên, bash script sẽ kiểm tra kích thước của các tệp thay đổi trước khi push và thông báo nếu có bất kỳ tệp nào vượt quá kích thước quy định.

Đây chỉ là một ví dụ đơn giản. Bạn có thể mở rộng hoặc sửa đổi pre-push hook tùy thuộc vào nhu cầu kiểm tra cụ thể của bạn, chẳng hạn như kiểm tra định dạng, phần mở rộng, hoặc các yêu cầu khác trước khi push các tệp lên kho lưu trữ Git LFS.

---
