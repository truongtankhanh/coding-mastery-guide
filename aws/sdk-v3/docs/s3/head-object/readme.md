`HeadObject` là một trong những operation quan trọng khi làm việc với Amazon S3 thông qua SDK JavaScript v3. Operation này cho phép bạn lấy thông tin về một object (tệp tin) trên Amazon S3 mà không cần tải toàn bộ nội dung của object đó về.

### HeadObject Operation

#### Định nghĩa

`HeadObject` operation được sử dụng để lấy metadata của một object (file) trên S3 như kích thước của object, loại content type, thời gian tạo và nhiều thông tin khác mà không tải nội dung thực của object.

#### Khi nào dùng

- Khi bạn chỉ quan tâm đến thông tin metadata của object mà không muốn tải nội dung của object đó.
- Để kiểm tra sự tồn tại của một object trên S3 trước khi thực hiện các hoạt động khác như tải xuống hoặc xóa.

#### Cách sử dụng

Để sử dụng `HeadObject` trong JavaScript v3 SDK của AWS, bạn có thể gọi phương thức `send` trên `S3Client` và truyền vào một object có chứa thông tin về bucket và key của object bạn muốn lấy thông tin metadata.

Ví dụ:

```javascript
import { HeadObjectCommand } from "@aws-sdk/client-s3";

const bucketName = "your-bucket-name";
const objectKey = "your-object-key";

const headObjectParams = {
  Bucket: bucketName,
  Key: objectKey,
};

const headObjectCommand = new HeadObjectCommand(headObjectParams);

s3Client
  .send(headObjectCommand)
  .then((data) => {
    console.log("Object metadata:", data.Metadata);
    console.log("Content type:", data.ContentType);
    console.log("Object size:", data.ContentLength);
    // Xử lý thông tin metadata như cần thiết
  })
  .catch((err) => {
    console.error("Error retrieving object metadata:", err);
  });
```

Kết quả trả về từ `HeadObject` sẽ chứa các thông tin như `Metadata`, `ContentType`, `ContentLength`, và nhiều thông tin metadata khác của object bạn yêu cầu, giúp bạn quản lý và sử dụng dữ liệu trên Amazon S3 một cách linh hoạt và hiệu quả.
