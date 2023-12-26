`listObjects` là một operation quan trọng trong AWS SDK for JavaScript v3 giúp bạn liệt kê các object (files) trong một bucket cụ thể trên Amazon S3.

### listObjects Operation

#### Định nghĩa

`listObjects` operation được sử dụng để liệt kê các object trong một bucket trên Amazon S3.

#### Khi nào dùng

- Khi bạn muốn lấy danh sách các object trong một bucket để quản lý hoặc thực hiện các thao tác với chúng.

#### Cách sử dụng

Để sử dụng `listObjects` trong JavaScript v3 SDK của AWS, bạn có thể gọi phương thức `send` trên `S3Client` và truyền vào thông tin về bucket bạn muốn liệt kê các object.

Ví dụ:

```javascript
import { ListObjectsCommand } from "@aws-sdk/client-s3";

const bucketName = "your-bucket-name";

const listObjectsParams = {
  Bucket: bucketName,
};

const listObjectsCommand = new ListObjectsCommand(listObjectsParams);

s3Client
  .send(listObjectsCommand)
  .then((data) => {
    const objects = data.Contents;
    if (objects.length === 0) {
      console.log("Bucket is empty");
    } else {
      console.log("Objects in bucket:");
      objects.forEach((object) => {
        console.log(object.Key);
      });
    }
    // Xử lý danh sách các object theo ý muốn
  })
  .catch((err) => {
    console.error("Error listing objects:", err);
  });
```

Khi operation `listObjects` hoàn thành, nó sẽ trả về một đối tượng chứa thông tin về các object trong bucket (thường được lưu trong thuộc tính `Contents`). Bạn có thể lặp qua danh sách các object để thực hiện các thao tác hoặc hiển thị thông tin cần thiết.
