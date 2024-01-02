Perfect Hashing là một kỹ thuật trong cấu trúc dữ liệu sử dụng hàm băm đặc biệt để tạo ra một bảng băm mà không có va chạm nào (hoàn toàn tránh va chạm) khi ánh xạ các khóa vào vị trí trong bảng.

### Cấu Trúc Cơ Bản:

#### Perfect Hashing:

- **Hàm Băm Hoàn Hảo:** Tạo ra một hàm băm duy nhất mà không có hai khóa nào sẽ được ánh xạ vào cùng một vị trí trong bảng băm.
- **Tránh Hoàn Toàn Va Chạm:** Mục tiêu là loại bỏ mọi va chạm, cải thiện hiệu suất tìm kiếm đối với các cấu trúc dữ liệu dựa trên bảng băm.
- **Ngữ Cảnh và Cách Sử Dụng:** Perfect Hashing thường được sử dụng khi cần một hàm băm mà không có va chạm, đặc biệt trong các trường hợp yêu cầu hiệu suất tìm kiếm cực kỳ cao và không thể chấp nhận va chạm trong việc ánh xạ khóa.

#### Ví Dụ và Code:

Hiện không có một thuật toán Perfect Hashing chuẩn xác mà được sử dụng rộng rãi vì tính phức tạp và yêu cầu cao về việc tìm kiếm hàm băm không có va chạm. Dưới đây là một ví dụ đơn giản:

```python
class PerfectHashing:
    def __init__(self, keys):
        self.size = len(keys)
        self.hash_table = [None] * self.size

        for i, key in enumerate(keys):
            hash_value = key % self.size
            if self.hash_table[hash_value] is None:
                self.hash_table[hash_value] = key
            else:
                # Chia nhỏ các khóa va chạm thành các bảng băm nhỏ
                sub_table = [None] * self.size
                for key in keys:
                    sub_hash_value = key % self.size
                    if sub_table[sub_hash_value] is None:
                        sub_table[sub_hash_value] = key
                    else:
                        # Thực hiện phương pháp xử lý va chạm khác tùy thuộc vào từng trường hợp cụ thể
                        pass
                self.hash_table[hash_value] = sub_table
```

Perfect Hashing thường đòi hỏi phương pháp xử lý va chạm phức tạp hơn khi có va chạm xảy ra trong bảng băm con. Trong thực tế, nó thường được sử dụng trong các ứng dụng yêu cầu hiệu suất tìm kiếm cao và không thể chấp nhận va chạm trong việc ánh xạ khóa. Triển khai cụ thể của Perfect Hashing có thể phức tạp hơn tùy thuộc vào thuật toán được chọn và yêu cầu cụ thể của ứng dụng.
