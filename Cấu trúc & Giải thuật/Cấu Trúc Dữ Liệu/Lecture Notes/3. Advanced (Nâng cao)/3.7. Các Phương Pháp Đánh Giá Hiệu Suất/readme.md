## Amortized Analysis

- Phân tích Amortized Analysis là một phương pháp phân tích hiệu suất của các thuật toán hoặc cấu trúc dữ liệu dựa trên trung bình của tất cả các thao tác trong một chuỗi thao tác dài hạn. Phương pháp này không chỉ xem xét hiệu suất của một thao tác cụ thể, mà thay vào đó, nó xem xét trung bình của tất cả các thao tác trong một chuỗi để đánh giá hiệu suất toàn cục của thuật toán hoặc cấu trúc dữ liệu đó.

### Ngữ Cảnh và Cách Sử Dụng:

- **Đánh Giá Hiệu Suất Trung Bình:** Amortized Analysis thường được sử dụng để đánh giá hiệu suất trung bình của các thao tác trên một chuỗi lâu dài.
- **Ứng Dụng Trong Lý Thuyết Và Thực Tiễn:** Phương pháp này thường được áp dụng trong thiết kế và phân tích của các thuật toán và cấu trúc dữ liệu, đặc biệt là khi xác định hiệu suất trung bình trên thời gian dài hạn là quan trọng.

### Ví Dụ và Code (Amortized Analysis trên Dynamic Array):

Dưới đây là một ví dụ về phân tích Amortized Analysis trên Dynamic Array (Mảng Động) khi thực hiện thao tác mở rộng mảng:

```python
class DynamicArray:
    def __init__(self):
        self.capacity = 1
        self.arr = [None] * self.capacity
        self.size = 0

    def append(self, element):
        if self.size == self.capacity:
            self._resize(2 * self.capacity)
        self.arr[self.size] = element
        self.size += 1

    def _resize(self, new_capacity):
        new_arr = [None] * new_capacity
        for i in range(self.size):
            new_arr[i] = self.arr[i]
        self.arr = new_arr
        self.capacity = new_capacity

# Sử dụng Amortized Analysis trên Dynamic Array
dynamic_array = DynamicArray()
for i in range(10):
    dynamic_array.append(i)

print(dynamic_array.arr)  # In mảng động sau khi thêm các phần tử
```

Trong ví dụ này, mỗi lần `append` được gọi trên `DynamicArray`, nếu kích thước hiện tại của mảng đã bằng với dung lượng của mảng (`self.size == self.capacity`), mảng sẽ được mở rộng gấp đôi (`self._resize(2 * self.capacity)`). Dù việc mở rộng mảng này có độ phức tạp là O(n) trong trường hợp tồi nhất, nhưng trên thời gian dài hạn, việc mở rộng này được phân phối đều qua tất cả các phép `append`, dẫn đến một phân tích Amortized Analysis cho thấy thời gian trung bình cho mỗi thao tác `append` là O(1).

---

## Probabilistic Analysis

- Phân tích xác suất (Probabilistic Analysis) là một phương pháp đánh giá hiệu suất của thuật toán bằng cách sử dụng các khái niệm và công cụ từ lý thuyết xác suất. Phương pháp này thường được sử dụng khi thuật toán tương tác với dữ liệu ngẫu nhiên hoặc khi các điều kiện đầu vào không biết trước.

### Ngữ Cảnh và Cách Sử Dụng:

- **Đánh Giá Trung Bình Theo Xác Suất:** Probabilistic Analysis thường được sử dụng để đánh giá hiệu suất trung bình của thuật toán trong các điều kiện ngẫu nhiên hoặc khi không có thông tin chính xác về dữ liệu đầu vào.
- **Ứng Dụng Trong Lý Thuyết Và Thực Tiễn:** Phương pháp này được áp dụng rộng rãi trong thiết kế và phân tích của các thuật toán trong lý thuyết đồ thị, học máy, xử lý ảnh, mạng lưới, và các lĩnh vực khác đòi hỏi xác suất.

### Ví Dụ và Code (Probabilistic Analysis trong QuickSort):

Dưới đây là một ví dụ về việc sử dụng phân tích xác suất trong QuickSort để đánh giá trung bình của số lần so sánh trên một mảng ngẫu nhiên:

```python
import random

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = random.choice(arr)
    less = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    greater = [x for x in arr if x > pivot]
    return quicksort(less) + equal + quicksort(greater)

def avg_comparison_quick_sort(arr):
    comparisons = 0

    def quicksort_with_comparisons(arr):
        nonlocal comparisons
        if len(arr) <= 1:
            return arr
        pivot = random.choice(arr)
        less = [x for x in arr if x < pivot]
        equal = [x for x in arr if x == pivot]
        greater = [x for x in arr if x > pivot]
        comparisons += len(arr) - 1  # Mỗi lần phân chia mảng, thêm số lượng so sánh tương ứng
        return quicksort_with_comparisons(less) + equal + quicksort_with_comparisons(greater)

    quicksort_with_comparisons(arr)
    return comparisons / len(arr)  # Số lần so sánh trung bình cho mỗi phần tử trong mảng

# Sử dụng Probabilistic Analysis trong QuickSort
random_arr = [random.randint(0, 100) for _ in range(10)]
avg_comparisons = avg_comparison_quick_sort(random_arr)
print(f"Trung bình số lần so sánh trong QuickSort: {avg_comparisons}")
```

Trong ví dụ này, chúng ta sử dụng phương pháp xác suất để tính trung bình số lần so sánh trong thuật toán QuickSort trên một mảng ngẫu nhiên. Việc tính trung bình này có thể giúp chúng ta đánh giá hiệu suất trung bình của QuickSort trong điều kiện dữ liệu ngẫu nhiên.

---
