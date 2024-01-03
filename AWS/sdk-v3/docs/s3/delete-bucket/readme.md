`deleteBucket` là một operation trong AWS SDK for JavaScript v3 giúp bạn xóa một bucket cụ thể trên Amazon S3.

### deleteBucket Operation

#### Định nghĩa

`deleteBucket` operation được sử dụng để xóa một bucket từ Amazon S3. Lưu ý rằng để xóa một bucket, bucket đó phải trống, tức là không có object nào trong bucket đó.

#### Khi nào dùng

- Khi bạn cần xóa một bucket không cần thiết trên Amazon S3 để giải phóng không gian lưu trữ hoặc quản lý dữ liệu.

#### Cách sử dụng

Để sử dụng `deleteBucket` trong JavaScript v3 SDK của AWS, bạn có thể gọi phương thức `send` trên `S3Client` và truyền vào thông tin về tên của bucket bạn muốn xóa.

Ví dụ:

```javascript
import { DeleteBucketCommand } from "@aws-sdk/client-s3";

const bucketName = "your-bucket-to-delete";

const deleteBucketParams = {
  Bucket: bucketName,
};

const deleteBucketCommand = new DeleteBucketCommand(deleteBucketParams);

s3Client
  .send(deleteBucketCommand)
  .then((data) => {
    console.log("Bucket deleted successfully:", data);
    // Xử lý sau khi bucket được xóa thành công
  })
  .catch((err) => {
    console.error("Error deleting bucket:", err);
  });
```

Khi operation `deleteBucket` hoàn thành, nó sẽ xóa bucket từ Amazon S3 và trả về thông tin về việc xóa bucket thành công. Hãy chắc chắn rằng bucket bạn muốn xóa là trống (không có object nào bên trong) trước khi thực hiện thao tác xóa, vì một bucket không thể bị xóa nếu nó chứa các object.
