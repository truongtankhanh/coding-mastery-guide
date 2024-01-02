**Khái niệm:**

- Mảng (Array) là một cấu trúc dữ liệu cơ bản trong lập trình, cho phép lưu trữ một tập hợp các phần tử có cùng kiểu dữ liệu và được sắp xếp theo thứ tự liên tiếp trong bộ nhớ. Mỗi phần tử trong mảng được truy cập thông qua chỉ số (index) duy nhất.

**Ngữ cảnh:**

- **Lưu trữ dữ liệu:** Mảng được sử dụng để lưu trữ một tập hợp các giá trị cùng loại, như số nguyên, số thực, chuỗi ký tự, v.v.
- **Truy cập phần tử:** Phần tử trong mảng có thể được truy cập thông qua chỉ số, bắt đầu từ 0 đến độ dài của mảng trừ đi 1.

**Cách sử dụng:**
- Trong hầu hết các ngôn ngữ lập trình, để khai báo và sử dụng một mảng, bạn cần biết cú pháp cụ thể của ngôn ngữ đó. Dưới đây là ví dụ sử dụng mảng trong một số ngôn ngữ phổ biến:

**1. Python:**

```python
# Khai báo một mảng chứa các số nguyên
my_array = [1, 2, 3, 4, 5]

# Truy cập phần tử của mảng thông qua chỉ số
print(my_array[0])  # Output: 1
print(my_array[2])  # Output: 3

# Thay đổi giá trị của phần tử trong mảng
my_array[1] = 8
print(my_array)  # Output: [1, 8, 3, 4, 5]
```

**2. JavaScript:**

```javascript
// Khai báo một mảng chứa chuỗi ký tự
let myArray = ["apple", "banana", "orange", "grape"];

// Truy cập phần tử của mảng thông qua chỉ số
console.log(myArray[0]); // Output: "apple"
console.log(myArray[2]); // Output: "orange"

// Thay đổi giá trị của phần tử trong mảng
myArray[1] = "watermelon";
console.log(myArray); // Output: ["apple", "watermelon", "orange", "grape"]
```

**3. C++:**

```cpp
#include <iostream>
using namespace std;

int main() {
    // Khai báo một mảng chứa các số nguyên
    int myArray[5] = {1, 2, 3, 4, 5};

    // Truy cập phần tử của mảng thông qua chỉ số
    cout << myArray[0] << endl;  // Output: 1
    cout << myArray[2] << endl;  // Output: 3

    // Thay đổi giá trị của phần tử trong mảng
    myArray[1] = 8;
    for (int i = 0; i < 5; i++) {
        cout << myArray[i] << " ";
    }
    // Output: 1 8 3 4 5

    return 0;
}
```

Mảng là một công cụ mạnh mẽ cho việc lưu trữ và truy cập dữ liệu trong lập trình và có thể được sử dụng trong nhiều tình huống khác nhau để giải quyết các vấn đề.
