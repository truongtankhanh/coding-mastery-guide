`getObject` là một operation quan trọng trong AWS SDK for JavaScript v3 khi bạn cần tải dữ liệu từ một object (file) trên Amazon S3 về ứng dụng của mình.

### getObject Operation

#### Định nghĩa

`getObject` operation được sử dụng để tải nội dung của một object (file) từ Amazon S3 về ứng dụng của bạn để sử dụng hoặc xử lý.

#### Khi nào dùng

- Khi bạn muốn lấy nội dung của một object (file) từ S3 để sử dụng trong ứng dụng của mình.
- Để hiển thị hoặc xử lý dữ liệu từ một object trên S3.

#### Cách sử dụng

Để sử dụng `getObject` trong JavaScript v3 SDK của AWS, bạn có thể gọi phương thức `send` trên `S3Client` và truyền vào các thông tin về bucket và key (đường dẫn đến object) của object bạn muốn tải về.

Ví dụ:

```javascript
import { GetObjectCommand } from "@aws-sdk/client-s3";

const bucketName = "your-bucket-name";
const objectKey = "your-object-key";

const getObjectParams = {
  Bucket: bucketName,
  Key: objectKey,
};

const getObjectCommand = new GetObjectCommand(getObjectParams);

s3Client
  .send(getObjectCommand)
  .then((data) => {
    // Dữ liệu của object được trả về nằm trong thuộc tính `Body`
    const objectData = data.Body.toString("utf-8"); // Đọc dữ liệu như một chuỗi UTF-8
    console.log("Object content:", objectData);
    // Xử lý dữ liệu từ object sau khi đã được tải về
  })
  .catch((err) => {
    console.error("Error retrieving object:", err);
  });
```

Khi operation `getObject` hoàn thành, nó sẽ trả về một đối tượng chứa dữ liệu của object (thường được đọc qua thuộc tính `Body`). Bạn có thể xử lý dữ liệu này theo ý muốn, ví dụ như hiển thị trong giao diện người dùng hoặc xử lý logic trong ứng dụng của mình.

Hãy nhớ rằng, `getObject` sẽ tải toàn bộ nội dung của object về ứng dụng của bạn, vì vậy hãy cẩn thận khi làm việc với những object có kích thước lớn để tránh tăng thời gian tải và sử dụng tài nguyên.
