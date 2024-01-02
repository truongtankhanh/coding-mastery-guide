**Khái niệm:**

- Danh sách liên kết là một cấu trúc dữ liệu linh hoạt trong lập trình, gồm một chuỗi các nút (nodes) mà mỗi nút chứa dữ liệu và một tham chiếu (pointer) đến nút tiếp theo trong chuỗi. Mỗi nút trong danh sách liên kết được tạo động khi cần thiết và không yêu cầu một phần bộ nhớ liên tục như mảng.

**Ngữ cảnh:**

- **Linh hoạt về kích thước:** Danh sách liên kết cho phép thêm, xóa phần tử một cách dễ dàng mà không cần phải di chuyển hoặc sao chép các phần tử khác như mảng.
- **Khả năng mở rộng:** Nó có thể mở rộng độ dài một cách linh hoạt và không gian bộ nhớ được phân bổ theo nhu cầu.
- **Điều chỉnh dữ liệu:** Thêm, xóa hoặc chỉnh sửa phần tử trong danh sách liên kết có thể thực hiện hiệu quả hơn so với mảng.

**Cách sử dụng:**

- Để triển khai danh sách liên kết, bạn cần một cấu trúc dữ liệu đơn giản gồm hai thành phần chính: dữ liệu của nút và một con trỏ đến nút tiếp theo.

Dưới đây là ví dụ triển khai danh sách liên kết trong C++:

```cpp
#include <iostream>
using namespace std;

// Định nghĩa cấu trúc của một nút trong danh sách liên kết
class Node {
public:
    int data;
    Node* next;
};

int main() {
    // Khởi tạo các nút của danh sách liên kết
    Node* head = NULL; // Nút đầu tiên của danh sách

    // Tạo các nút mới
    Node* firstNode = new Node();
    Node* secondNode = new Node();
    Node* thirdNode = new Node();

    // Gán giá trị cho các nút và thiết lập liên kết giữa chúng
    firstNode->data = 1;
    firstNode->next = secondNode;

    secondNode->data = 2;
    secondNode->next = thirdNode;

    thirdNode->data = 3;
    thirdNode->next = NULL; // Đây là nút cuối cùng của danh sách

    // Gắn nút đầu tiên vào head của danh sách liên kết
    head = firstNode;

    // In ra các phần tử trong danh sách liên kết
    Node* currentNode = head;
    while (currentNode != NULL) {
        cout << currentNode->data << " ";
        currentNode = currentNode->next;
    }
    // Output: 1 2 3

    return 0;
}
```

Trong ví dụ này, chúng ta tạo một danh sách liên kết gồm ba nút chứa các giá trị 1, 2 và 3. Mỗi nút có một con trỏ next trỏ đến nút tiếp theo. Sau đó, chúng ta duyệt qua danh sách và in ra các giá trị của các nút.
