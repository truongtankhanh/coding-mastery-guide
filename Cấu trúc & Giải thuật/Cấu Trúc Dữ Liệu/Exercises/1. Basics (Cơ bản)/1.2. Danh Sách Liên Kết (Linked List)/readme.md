Dưới đây là một số bài tập cơ bản liên quan đến danh sách liên kết:

## 1. **Tạo một danh sách liên kết đơn:**

Để tạo một danh sách liên kết đơn trong C++, chúng ta cần định nghĩa cấu trúc của một nút trong danh sách liên kết và viết các hàm để thêm các phần tử vào danh sách.

### Yêu cầu bài toán:

- **Input**: Giá trị của các phần tử cần thêm vào danh sách liên kết.
- **Output**: Danh sách liên kết đơn được tạo và các phần tử đã được thêm vào.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Danh sách liên kết đơn thường được sử dụng để tổ chức và quản lý dữ liệu trong các ứng dụng với tính linh hoạt cao.
- **Phạm vi sử dụng**: Mọi ứng dụng cần quản lý dữ liệu theo cách có tính chất linh hoạt và thay đổi.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Class quản lý danh sách liên kết đơn
class DanhSachLienKetDon {
private:
    Node* head;

public:
    DanhSachLienKetDon() : head(nullptr) {}

    // Hàm thêm một phần tử vào cuối danh sách
    void themVaoCuoi(int val) {
        Node* new_node = new Node(val);
        if (head == nullptr) {
            head = new_node;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = new_node;
    }

    // Hàm in ra danh sách liên kết đơn
    void inDanhSach() {
        Node* temp = head;
        while (temp != nullptr) {
            std::cout << temp->data << " ";
            temp = temp->next;
        }
        std::cout << std::endl;
    }
};

int main() {
    DanhSachLienKetDon danhSach;

    // Thêm các phần tử vào danh sách liên kết
    danhSach.themVaoCuoi(1);
    danhSach.themVaoCuoi(2);
    danhSach.themVaoCuoi(3);

    // In ra danh sách liên kết
    danhSach.inDanhSach();

    return 0;
}
```

Trong đoạn code trên:

- `Node` đại diện cho một nút trong danh sách liên kết, chứa giá trị và con trỏ đến nút tiếp theo.
- `DanhSachLienKetDon` là class quản lý danh sách liên kết, bao gồm các phương thức để thêm phần tử vào cuối danh sách và in ra danh sách.

Bằng cách sử dụng các class và cấu trúc dữ liệu này, bạn có thể tạo ra một danh sách liên kết đơn và thêm các phần tử vào danh sách một cách linh hoạt.

---

## 2. **In danh sách liên kết:**

Yêu cầu bài toán là viết một hàm để in tất cả các phần tử trong danh sách liên kết. Để làm điều này, chúng ta sẽ duyệt qua từng phần tử trong danh sách và in giá trị của từng nút.

### Yêu cầu bài toán:

- **Input**: Danh sách liên kết.
- **Output**: In giá trị của tất cả các nút trong danh sách liên kết.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: In danh sách liên kết là một phần quan trọng trong việc hiển thị thông tin của danh sách đó, đặc biệt là khi kiểm tra xem dữ liệu đã được lưu trữ chính xác trong danh sách hay không.
- **Phạm vi sử dụng**: Mọi ứng dụng có yêu cầu hiển thị thông tin từ danh sách liên kết sẽ cần đến chức năng in danh sách.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm in danh sách liên kết
void inDanhSach(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
    std::cout << std::endl;
}

int main() {
    // Tạo danh sách liên kết đơn
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);

    // In ra danh sách liên kết
    inDanhSach(head);

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết, bao gồm giá trị và con trỏ đến nút tiếp theo.
- `inDanhSach` là hàm để duyệt qua danh sách liên kết và in ra giá trị của từng nút trong danh sách.
- Trong hàm `main()`, chúng ta tạo một danh sách liên kết đơn và gọi hàm `inDanhSach` để in ra danh sách đó.

Đoạn mã trên sẽ in ra các giá trị của các nút trong danh sách liên kết từ đầu đến cuối, giúp kiểm tra và hiển thị dữ liệu của danh sách.

---

## 3. **Tính tổng các phần tử trong danh sách:**

Yêu cầu bài toán yêu cầu viết một hàm để tính tổng của các phần tử trong danh sách liên kết. Để làm điều này, chúng ta sẽ duyệt qua từng phần tử trong danh sách và cộng giá trị của từng nút vào biến tổng.

### Yêu cầu bài toán:

- **Input**: Danh sách liên kết.
- **Output**: Tổng của các phần tử trong danh sách liên kết.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Việc tính tổng các phần tử trong danh sách liên kết hữu ích khi cần tính toán các tổng dựa trên dữ liệu được tổ chức theo dạng danh sách.
- **Phạm vi sử dụng**: Mọi ứng dụng có yêu cầu tính toán tổng dựa trên dữ liệu từ danh sách liên kết.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm tính tổng các phần tử trong danh sách liên kết
int tinhTong(Node* head) {
    Node* temp = head;
    int sum = 0;
    while (temp != nullptr) {
        sum += temp->data;
        temp = temp->next;
    }
    return sum;
}

int main() {
    // Tạo danh sách liên kết đơn
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);

    // Tính tổng các phần tử trong danh sách liên kết
    int tong = tinhTong(head);
    std::cout << "Tong cac phan tu trong danh sach lien ket la: " << tong << std::endl;

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết, chứa giá trị và con trỏ đến nút tiếp theo.
- `tinhTong` là hàm để duyệt qua danh sách liên kết và tính tổng của các giá trị trong các nút.
- Trong hàm `main()`, chúng ta tạo một danh sách liên kết đơn và gọi hàm `tinhTong` để tính tổng các phần tử trong danh sách đó.

Đoạn mã trên sẽ tính tổng các giá trị của các nút trong danh sách liên kết và in ra kết quả tổng.

---

## 4. **Tìm kiếm phần tử:**

Yêu cầu bài toán là viết một hàm để tìm kiếm một giá trị cụ thể trong danh sách liên kết và trả về chỉ số của nó nếu nó tồn tại trong danh sách.

### Yêu cầu bài toán:

- **Input**: Giá trị cần tìm kiếm và danh sách liên kết.
- **Output**: Chỉ số của giá trị trong danh sách liên kết (nếu có), nếu không tồn tại trả về -1 hoặc thông báo không tìm thấy.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Tìm kiếm giá trị trong danh sách liên kết được sử dụng rộng rãi trong việc tìm kiếm dữ liệu trong cấu trúc dữ liệu này.
- **Phạm vi sử dụng**: Mọi ứng dụng cần thực hiện tìm kiếm giá trị trong danh sách liên kết.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm tìm kiếm giá trị trong danh sách liên kết
int timKiem(Node* head, int target) {
    Node* temp = head;
    int index = 0;
    while (temp != nullptr) {
        if (temp->data == target) {
            return index; // Trả về chỉ số nếu tìm thấy giá trị
        }
        temp = temp->next;
        index++;
    }
    return -1; // Trả về -1 nếu không tìm thấy giá trị
}

int main() {
    // Tạo danh sách liên kết đơn
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);

    // Tìm kiếm giá trị trong danh sách liên kết
    int targetValue = 2;
    int index = timKiem(head, targetValue);
    if (index != -1) {
        std::cout << "Tim thay gia tri tai chi so: " << index << std::endl;
    } else {
        std::cout << "Khong tim thay gia tri trong danh sach lien ket." << std::endl;
    }

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết.
- `timKiem` là hàm để tìm kiếm giá trị trong danh sách liên kết và trả về chỉ số của nó nếu tìm thấy.
- Trong hàm `main()`, chúng ta tạo một danh sách liên kết đơn và gọi hàm `timKiem` để tìm kiếm giá trị trong danh sách. Nếu giá trị được tìm thấy, nó sẽ in ra chỉ số của giá trị đó, nếu không sẽ thông báo không tìm thấy.

---

## 5. **Xóa phần tử khỏi danh sách:**

Để xóa một phần tử cụ thể khỏi danh sách liên kết, chúng ta cần xác định phần tử đó và điều chỉnh con trỏ để bỏ qua phần tử đó trong danh sách. Nếu phần tử cần xóa là phần tử đầu tiên, chúng ta cần thay đổi con trỏ head.

### Yêu cầu bài toán:

- **Input**: Giá trị của phần tử cần xóa và danh sách liên kết.
- **Output**: Danh sách liên kết sau khi xóa phần tử cụ thể.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Xóa phần tử khỏi danh sách liên kết là một thao tác quan trọng khi làm việc với cấu trúc dữ liệu này, đặc biệt khi cần loại bỏ dữ liệu không cần thiết hoặc cập nhật dữ liệu mới.
- **Phạm vi sử dụng**: Mọi ứng dụng cần thao tác xóa phần tử từ danh sách liên kết.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm xóa phần tử khỏi danh sách liên kết
Node* xoaPhanTu(Node* head, int value) {
    Node* temp = head;
    Node* prev = nullptr;

    // Xử lý trường hợp nút cần xóa là nút đầu tiên
    if (temp != nullptr && temp->data == value) {
        head = temp->next;
        delete temp;
        return head;
    }

    // Tìm phần tử cần xóa và điều chỉnh con trỏ
    while (temp != nullptr && temp->data != value) {
        prev = temp;
        temp = temp->next;
    }

    // Nếu không tìm thấy phần tử cần xóa
    if (temp == nullptr) {
        std::cout << "Khong tim thay gia tri trong danh sach lien ket." << std::endl;
        return head;
    }

    // Xóa phần tử khỏi danh sách
    prev->next = temp->next;
    delete temp;
    return head;
}

// Hàm in danh sách liên kết
void inDanhSach(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
    std::cout << std::endl;
}

int main() {
    // Tạo danh sách liên kết đơn
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);

    // In danh sách trước khi xóa phần tử
    std::cout << "Danh sach lien ket truoc khi xoa: ";
    inDanhSach(head);

    // Xóa phần tử khỏi danh sách
    int phanTuCanXoa = 2;
    head = xoaPhanTu(head, phanTuCanXoa);

    // In danh sách sau khi xóa phần tử
    std::cout << "Danh sach lien ket sau khi xoa: ";
    inDanhSach(head);

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết.
- `xoaPhanTu` là hàm để xóa một phần tử khỏi danh sách liên kết dựa trên giá trị cần xóa.
- Hàm `inDanhSach` được sử dụng để in ra danh sách liên kết.
- Trong hàm `main()`, chúng ta tạo một danh sách liên kết đơn, sau đó xóa một phần tử khỏi danh sách và in danh sách sau khi xóa phần tử.

---

## 6. **Đảo ngược danh sách liên kết:**

Yêu cầu bài toán là viết một hàm để đảo ngược thứ tự các phần tử trong danh sách liên kết. Để thực hiện điều này, chúng ta cần điều chỉnh các con trỏ trong danh sách liên kết để đảo ngược thứ tự.

### Yêu cầu bài toán:

- **Input**: Danh sách liên kết.
- **Output**: Danh sách liên kết sau khi đảo ngược.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Việc đảo ngược danh sách liên kết thường được sử dụng khi cần duyệt danh sách theo chiều ngược lại hoặc cần một cấu trúc dữ liệu ngược.
- **Phạm vi sử dụng**: Mọi ứng dụng sử dụng danh sách liên kết và cần thao tác đảo ngược danh sách.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm đảo ngược danh sách liên kết
Node* daoNguoc(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next = nullptr;

    while (current != nullptr) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    return prev; // Trả về con trỏ đến nút cuối cùng, nó sẽ là nút đầu tiên sau khi đảo ngược
}

// Hàm in danh sách liên kết
void inDanhSach(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
    std::cout << std::endl;
}

int main() {
    // Tạo danh sách liên kết đơn
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);

    // In danh sách trước khi đảo ngược
    std::cout << "Danh sach lien ket truoc khi dao nguoc: ";
    inDanhSach(head);

    // Đảo ngược danh sách
    head = daoNguoc(head);

    // In danh sách sau khi đảo ngược
    std::cout << "Danh sach lien ket sau khi dao nguoc: ";
    inDanhSach(head);

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết.
- `daoNguoc` là hàm để đảo ngược thứ tự các nút trong danh sách liên kết.
- Hàm `inDanhSach` được sử dụng để in ra danh sách liên kết.
- Trong hàm `main()`, chúng ta tạo một danh sách liên kết đơn, sau đó đảo ngược thứ tự các phần tử trong danh sách và in danh sách sau khi đảo ngược.

---

## 7. **Kết hợp hai danh sách liên kết:**

Yêu cầu bài toán là viết một hàm để kết hợp hai danh sách liên kết thành một danh sách mới. Quá trình này bao gồm việc nối danh sách thứ hai vào cuối danh sách thứ nhất.

### Yêu cầu bài toán:

- **Input**: Hai danh sách liên kết.
- **Output**: Danh sách mới sau khi kết hợp.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Khi cần nối các danh sách liên kết lại với nhau để tạo thành một danh sách lớn hơn hoặc để thực hiện các thao tác khác trên danh sách kết hợp.
- **Phạm vi sử dụng**: Mọi ứng dụng cần thực hiện việc kết hợp các danh sách liên kết.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm để thêm một nút vào cuối danh sách liên kết
void themCuoi(Node* &head, int val) {
    Node* newNode = new Node(val);
    if (head == nullptr) {
        head = newNode;
        return;
    }
    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = newNode;
}

// Hàm kết hợp hai danh sách liên kết
Node* ketHopDanhSach(Node* head1, Node* head2) {
    Node* result = nullptr;

    // Nếu danh sách thứ nhất không rỗng, sao chép nó vào danh sách kết quả
    if (head1 != nullptr) {
        result = head1;
        while (result->next != nullptr) {
            result = result->next;
        }
    }

    // Nối danh sách thứ hai vào cuối danh sách kết quả (nếu có)
    if (head2 != nullptr) {
        if (result != nullptr) {
            result->next = head2;
        } else {
            result = head2;
        }
    }

    return head1 != nullptr ? head1 : head2;
}

// Hàm in danh sách liên kết
void inDanhSach(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
    std::cout << std::endl;
}

int main() {
    // Tạo danh sách liên kết đơn thứ nhất
    Node* head1 = new Node(1);
    themCuoi(head1, 2);
    themCuoi(head1, 3);

    // Tạo danh sách liên kết đơn thứ hai
    Node* head2 = new Node(4);
    themCuoi(head2, 5);
    themCuoi(head2, 6);

    // In danh sách liên kết trước khi kết hợp
    std::cout << "Danh sach lien ket thu nhat: ";
    inDanhSach(head1);
    std::cout << "Danh sach lien ket thu hai: ";
    inDanhSach(head2);

    // Kết hợp hai danh sách liên kết
    Node* ketQua = ketHopDanhSach(head1, head2);

    // In danh sách sau khi kết hợp
    std::cout << "Danh sach lien ket sau khi ket hop: ";
    inDanhSach(ketQua);

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết.
- `themCuoi` là hàm để thêm một nút vào cuối danh sách liên kết.
- `ketHopDanhSach` là hàm để kết hợp hai danh sách liên kết thành một danh sách mới.
- Hàm `inDanhSach` được sử dụng để in ra danh sách liên kết.
- Trong hàm `main()`, chúng ta tạo hai danh sách liên kết, kết hợp chúng lại và in ra danh sách sau khi kết hợp.

---

## 8. **Kiểm tra danh sách liên kết có rỗng hay không:**

Bài toán yêu cầu viết một hàm để kiểm tra xem danh sách liên kết có rỗng không, nghĩa là không có nút nào trong danh sách.

### Yêu cầu bài toán:

- **Input**: Danh sách liên kết.
- **Output**: True nếu danh sách liên kết rỗng, False nếu danh sách không rỗng.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Kiểm tra danh sách liên kết rỗng là một bước quan trọng khi thực hiện các thao tác trên danh sách.
- **Phạm vi sử dụng**: Mọi ứng dụng sử dụng danh sách liên kết cần kiểm tra trạng thái rỗng của danh sách.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm kiểm tra danh sách liên kết có rỗng hay không
bool kiemTraRong(Node* head) {
    return head == nullptr; // Trả về true nếu danh sách rỗng, ngược lại trả về false
}

int main() {
    // Tạo một danh sách liên kết rỗng
    Node* head = nullptr;

    // Kiểm tra xem danh sách liên kết có rỗng không
    bool isEmpty = kiemTraRong(head);
    if (isEmpty) {
        std::cout << "Danh sach lien ket rong." << std::endl;
    } else {
        std::cout << "Danh sach lien ket khong rong." << std::endl;
    }

    // Tạo một danh sách liên kết với một phần tử
    Node* head2 = new Node(1);

    // Kiểm tra xem danh sách liên kết có rỗng không
    isEmpty = kiemTraRong(head2);
    if (isEmpty) {
        std::cout << "Danh sach lien ket rong." << std::endl;
    } else {
        std::cout << "Danh sach lien ket khong rong." << std::endl;
    }

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết.
- `kiemTraRong` là hàm để kiểm tra xem danh sách liên kết có rỗng không bằng cách kiểm tra xem con trỏ head có trỏ đến null không.
- Trong hàm `main()`, chúng ta tạo hai danh sách liên kết, một rỗng và một có một phần tử, sau đó kiểm tra xem chúng có rỗng hay không và in ra thông báo tương ứng.

---

## 9. **Xóa danh sách liên kết:**

Bài toán yêu cầu viết một hàm để xóa toàn bộ danh sách liên kết, giải phóng bộ nhớ được cấp phát cho mỗi nút trong danh sách.

### Yêu cầu bài toán:

- **Input**: Danh sách liên kết cần xóa.
- **Output**: Danh sách liên kết sau khi được xóa.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Việc xóa toàn bộ danh sách liên kết rất quan trọng để tránh rò rỉ bộ nhớ và giải phóng tài nguyên sau khi sử dụng danh sách.
- **Phạm vi sử dụng**: Mọi ứng dụng sử dụng danh sách liên kết cần thao tác xóa danh sách khi không cần nữa.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm xóa toàn bộ danh sách liên kết
void xoaDanhSach(Node* &head) {
    Node* temp = head;
    while (head != nullptr) {
        temp = head;
        head = head->next;
        delete temp;
    }
}

// Hàm in danh sách liên kết
void inDanhSach(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
    std::cout << std::endl;
}

int main() {
    // Tạo danh sách liên kết đơn
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);

    // In danh sách trước khi xóa
    std::cout << "Danh sach lien ket truoc khi xoa: ";
    inDanhSach(head);

    // Xóa toàn bộ danh sách
    xoaDanhSach(head);

    // In danh sách sau khi xóa
    std::cout << "Danh sach lien ket sau khi xoa: ";
    inDanhSach(head); // head bây giờ trỏ đến nullptr sau khi xóa

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết.
- `xoaDanhSach` là hàm để xóa toàn bộ danh sách liên kết, giải phóng bộ nhớ được cấp phát cho mỗi nút trong danh sách.
- Hàm `inDanhSach` được sử dụng để in ra danh sách liên kết.
- Trong hàm `main()`, chúng ta tạo một danh sách liên kết đơn, xóa toàn bộ danh sách và in ra danh sách sau khi xóa (mà hiện đang là `nullptr` vì danh sách đã được xóa).

---

## 10. **Thêm phần tử vào danh sách liên kết tại vị trí cụ thể:**

Bài toán yêu cầu viết một hàm để chèn một phần tử mới vào một vị trí cụ thể trong danh sách liên kết, bao gồm việc xử lý các trường hợp như chèn vào đầu danh sách, chèn vào cuối danh sách hoặc chèn vào vị trí bất kỳ trong danh sách.

### Yêu cầu bài toán:

- **Input**: Danh sách liên kết, giá trị cần chèn, và vị trí cần chèn.
- **Output**: Danh sách liên kết sau khi đã chèn phần tử mới vào vị trí cụ thể.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Khi cần thêm một phần tử vào danh sách liên kết ở một vị trí nhất định, ví dụ: thêm vào đầu danh sách, cuối danh sách hoặc vào một vị trí xác định.
- **Phạm vi sử dụng**: Mọi ứng dụng sử dụng danh sách liên kết cần thực hiện việc chèn phần tử mới vào danh sách.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này bằng C++:

```cpp
#include <iostream>

// Định nghĩa cấu trúc của một nút trong danh sách liên kết đơn
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Hàm để chèn một phần tử mới vào danh sách liên kết tại vị trí cụ thể
void chenVaoViTri(Node* &head, int val, int position) {
    Node* newNode = new Node(val);
    if (position == 1 || head == nullptr) {
        newNode->next = head;
        head = newNode;
    } else {
        Node* temp = head;
        for (int i = 0; i < position - 2 && temp != nullptr; ++i) {
            temp = temp->next;
        }
        if (temp == nullptr) {
            std::cout << "Vi tri chen khong hop le." << std::endl;
            return;
        }
        newNode->next = temp->next;
        temp->next = newNode;
    }
}

// Hàm in danh sách liên kết
void inDanhSach(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
    std::cout << std::endl;
}

int main() {
    // Tạo danh sách liên kết đơn
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(4);

    // In danh sách trước khi chèn
    std::cout << "Danh sach lien ket truoc khi chen: ";
    inDanhSach(head);

    // Chèn phần tử mới vào vị trí cụ thể trong danh sách
    chenVaoViTri(head, 3, 3);

    // In danh sách sau khi chèn
    std::cout << "Danh sach lien ket sau khi chen: ";
    inDanhSach(head);

    return 0;
}
```

Trong đoạn code trên:

- `Node` là cấu trúc của một nút trong danh sách liên kết.
- `chenVaoViTri` là hàm để chèn một phần tử mới vào vị trí cụ thể trong danh sách liên kết.
- Hàm `inDanhSach` được sử dụng để in ra danh sách liên kết.
- Trong hàm `main()`, chúng ta tạo một danh sách liên kết đơn, sau đó chèn một phần tử mới vào vị trí cụ thể trong danh sách và in ra danh sách sau khi chèn.

---

Những bài tập này sẽ giúp bạn làm quen với việc thao tác với danh sách liên kết, hiểu cách chúng hoạt động và cách triển khai các chức năng cơ bản trên danh sách này.
