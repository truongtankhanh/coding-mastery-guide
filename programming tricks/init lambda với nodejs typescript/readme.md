Đây là một ví dụ về cách tạo một hàm Lambda bằng Node.js sử dụng TypeScript. Trước hết, bạn cần cài đặt `Node.js`, `npm` và `TypeScript` trên máy tính của mình. Sau đó, bạn có thể sử dụng AWS CLI hoặc giao diện web để tạo một hàm Lambda trên AWS Lambda.

Dưới đây là một ví dụ đơn giản:

1. **Cài đặt TypeScript:**

```bash
npm install -g typescript
```

2. **Tạo một thư mục và khởi tạo dự án TypeScript:**

```bash
mkdir myLambdaFunction
cd myLambdaFunction
npm init -y
npm install --save aws-sdk
npm install --save-dev @types/aws-lambda
tsc --init
```

3. **Tạo một file TypeScript:**

Tạo một file có tên `index.ts` trong thư mục dự án của bạn và thêm mã Lambda:

```typescript
import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  try {
    // Xử lý sự kiện ở đây
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Lambda!",
        input: event,
      }),
    };
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error processing request",
        error: error.message,
      }),
    };
  }
};
```

4. **Compile TypeScript sang JavaScript:**

Sử dụng lệnh sau để biên dịch mã TypeScript sang JavaScript:

```bash
tsc
```

5. **Nén tệp thành một tệp zip:**

Nén tất cả các tệp trong thư mục dự án của bạn thành một tệp zip. Trong trường hợp này, bạn cần nén các tệp JavaScript, không gian vùng và thư mục `node_modules`.

6. **Tạo một Lambda Function trên AWS Lambda:**

Sử dụng AWS Management Console hoặc AWS CLI để tạo Lambda Function và tải tệp zip bạn vừa nén lên đó. Chú ý rằng bạn cần thiết lập cấu hình trigger (kích hoạt) cho Lambda nếu cần thiết (ví dụ: API Gateway, S3 event, etc.).

Nhớ rằng đoạn mã trên chỉ là một ví dụ cơ bản. Bạn có thể mở rộng hoặc thay đổi nó để phù hợp với yêu cầu cụ thể của bạn.
