`putObject` là một operation quan trọng khác trong AWS SDK for JavaScript v3 khi làm việc với Amazon S3. Operation này cho phép bạn tải một object (tệp tin) lên Amazon S3 từ dữ liệu có sẵn trong mã JavaScript của bạn.

### putObject Operation

#### Định nghĩa

`putObject` operation được sử dụng để tải một object (file) mới lên Amazon S3 hoặc ghi đè lên một object đã tồn tại với dữ liệu mới.

#### Khi nào dùng

- Khi bạn muốn tải một object (file) lên S3 từ dữ liệu có sẵn trong ứng dụng của mình.
- Để cập nhật dữ liệu của một object đã tồn tại trên S3 bằng dữ liệu mới.

#### Cách sử dụng

Để sử dụng `putObject` trong JavaScript v3 SDK của AWS, bạn có thể gọi phương thức `send` trên `S3Client` và truyền vào các thông tin cần thiết như bucket, key (đường dẫn đến object), và dữ liệu của object bạn muốn tải lên.

Ví dụ:

```javascript
import { PutObjectCommand } from "@aws-sdk/client-s3";

const bucketName = "your-bucket-name";
const objectKey = "your-object-key";
const data = "Hello, this is the content of the object!"; // Đây có thể là string, Buffer, hoặc ReadableStream

const putObjectParams = {
  Bucket: bucketName,
  Key: objectKey,
  Body: data,
};

const putObjectCommand = new PutObjectCommand(putObjectParams);

s3Client
  .send(putObjectCommand)
  .then((data) => {
    console.log("Object uploaded successfully:", data);
    // Xử lý khi object được tải lên thành công
  })
  .catch((err) => {
    console.error("Error uploading object:", err);
  });
```

Ở đây, `putObjectParams` chứa thông tin về bucket, key của object bạn muốn tải lên cùng với dữ liệu (`Body`) của object đó. Dữ liệu (`Body`) có thể là một chuỗi, một Buffer hoặc một ReadableStream tùy thuộc vào nội dung bạn muốn tải lên.

Khi operation `putObject` hoàn thành thành công, nó sẽ trả về một đối tượng chứa thông tin về việc tải object lên S3. Điều này cho phép bạn quản lý quá trình tải dữ liệu lên Amazon S3 từ ứng dụng của mình.
