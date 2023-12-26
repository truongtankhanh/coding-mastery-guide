Dưới đây là thông tin về các lệnh AWS CLI SQS (Simple Queue Service):

---

### `create-queue`

#### Mục Đích:

- Tạo một hàng đợi mới trong SQS.

#### Cú Pháp:

```bash
aws sqs create-queue --queue-name <queue-name> [options]
```

#### Tham Số Chính:

- `--queue-name <queue-name>`: Tên hàng đợi mới.
- `[options]`: Các tùy chọn bổ sung như `--attributes` (thiết lập các thuộc tính), `--tags` (thiết lập các tag), và nhiều tùy chọn khác.

#### Ví Dụ:

```bash
aws sqs create-queue --queue-name my-queue
```

---

### `delete-message`

#### Mục Đích:

- Xóa một tin nhắn cụ thể từ hàng đợi.

#### Cú Pháp:

```bash
aws sqs delete-message --queue-url <queue-url> --receipt-handle <receipt-handle>
```

#### Tham Số Chính:

- `--queue-url <queue-url>`: URL của hàng đợi.
- `--receipt-handle <receipt-handle>`: Định danh để xác nhận xóa tin nhắn.

#### Ví Dụ:

```bash
aws sqs delete-message --queue-url https://sqs.region.amazonaws.com/account-id/queue-name --receipt-handle AAAAAA...
```

---

### `delete-queue`

#### Mục Đích:

- Xóa một hàng đợi từ SQS.

#### Cú Pháp:

```bash
aws sqs delete-queue --queue-url <queue-url>
```

#### Tham Số Chính:

- `--queue-url <queue-url>`: URL của hàng đợi cần xóa.

#### Ví Dụ:

```bash
aws sqs delete-queue --queue-url https://sqs.region.amazonaws.com/account-id/queue-name
```

---

### `get-queue-url`

#### Mục Đích:

- Lấy URL của một hàng đợi trong SQS dựa trên tên hàng đợi.

#### Cú Pháp:

```bash
aws sqs get-queue-url --queue-name <queue-name> [options]
```

#### Tham Số Chính:

- `--queue-name <queue-name>`: Tên của hàng đợi.
- `[options]`: Các tùy chọn bổ sung.

#### Ví Dụ:

```bash
aws sqs get-queue-url --queue-name my-queue
```

---

### `list-queues`

#### Mục Đích:

- Liệt kê các hàng đợi có sẵn trong SQS.

#### Cú Pháp:

```bash
aws sqs list-queues [options]
```

#### Tham Số Chính:

- `[options]`: Các tùy chọn bổ sung.

#### Ví Dụ:

```bash
aws sqs list-queues
```

---

### `purge-queue`

#### Mục Đích:

- Xóa tất cả các tin nhắn trong một hàng đợi.

#### Cú Pháp:

```bash
aws sqs purge-queue --queue-url <queue-url>
```

#### Tham Số Chính:

- `--queue-url <queue-url>`: URL của hàng đợi cần xóa tin nhắn.

#### Ví Dụ:

```bash
aws sqs purge-queue --queue-url https://sqs.region.amazonaws.com/account-id/queue-name
```

---

### `receive-message`

#### Mục Đích:

- Nhận tin nhắn từ hàng đợi SQS.

#### Cú Pháp:

```bash
aws sqs receive-message --queue-url <queue-url> [options]
```

#### Tham Số Chính:

- `--queue-url <queue-url>`: URL của hàng đợi để nhận tin nhắn.
- `[options]`: Các tùy chọn bổ sung như `--attribute-names` (xác định thuộc tính cần lấy), `--max-number-of-messages` (số lượng tin nhắn tối đa), `--wait-time-seconds` (thời gian chờ lấy tin nhắn), và nhiều tùy chọn khác.

#### Ví Dụ:

```bash
aws sqs receive-message --queue-url https://sqs.region.amazonaws.com/account-id/queue-name
```

---

### `send-message`

#### Mục Đích:

- Gửi một tin nhắn đến hàng đợi SQS.

#### Cú Pháp:

```bash
aws sqs send-message --queue-url <queue-url> --message-body <message-body> [options]
```

#### Tham Số Chính:

- `--queue-url <queue-url>`: URL của hàng đợi để gửi tin nhắn.
- `--message-body <message-body>`: Nội dung của tin nhắn.
- `[options]`: Các tùy chọn bổ sung như `--message-attributes` (các thuộc tính của tin nhắn), `--delay-seconds` (thời gian trì hoãn trước khi hiển thị tin nhắn), và các tùy chọn khác.

#### Ví Dụ:

```bash
aws sqs send-message --queue-url https://sqs.region.amazonaws.com/account-id/queue-name --message-body "Hello, world!"
```

---
