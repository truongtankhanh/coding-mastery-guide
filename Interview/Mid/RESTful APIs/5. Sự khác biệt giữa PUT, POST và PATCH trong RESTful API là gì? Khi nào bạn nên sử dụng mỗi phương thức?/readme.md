### Trả lời câu hỏi về PUT, POST và PATCH trong RESTful API

**Sự khác biệt giữa PUT, POST và PATCH**:

1. **PUT**:

   - **Mục đích**: Thay thế hoặc cập nhật hoàn toàn một resource (tài nguyên) hoặc tạo mới nếu không tồn tại.
   - **Ví dụ**: Khi sử dụng PUT để cập nhật thông tin về một sản phẩm cụ thể, bạn gửi toàn bộ thông tin về sản phẩm (bao gồm cả các trường không thay đổi) đến endpoint tương ứng.

2. **POST**:

   - **Mục đích**: Tạo mới resource hoặc thực hiện các hành động không biết trước.
   - **Ví dụ**: Khi bạn tạo một bài viết mới trên blog, bạn gửi yêu cầu POST đến endpoint bài viết với dữ liệu của bài viết.

3. **PATCH**:
   - **Mục đích**: Cập nhật một phần của resource, chỉ thay đổi các trường cần cập nhật.
   - **Ví dụ**: Khi chỉ muốn cập nhật thông tin về giá sản phẩm mà không thay đổi các trường khác, bạn gửi yêu cầu PATCH chỉ chứa thông tin về giá.

**Khi nào sử dụng mỗi phương thức**:

- **PUT**: Sử dụng khi muốn thay thế hoặc cập nhật toàn bộ resource, đặc biệt khi client có thông tin đầy đủ về resource.
- **POST**: Sử dụng khi tạo mới resource hoặc khi thực hiện các hành động không xác định trước (như tạo bài viết mới).
- **PATCH**: Sử dụng khi chỉ muốn cập nhật một phần nhỏ, đặc biệt khi client chỉ có thông tin cần cập nhật.

Khi trả lời, nhấn mạnh vào mục đích và cách sử dụng mỗi phương thức để thay đổi dữ liệu trên server trong ngữ cảnh của RESTful API. Sử dụng ví dụ về các hoạt động thực tế như tạo mới, cập nhật toàn bộ hoặc chỉ cập nhật một phần của một resource để minh họa điểm của bạn.
