**Ngăn Xếp (Stack):**

- Ngăn xếp là một cấu trúc dữ liệu hoạt động theo nguyên tắc "Last In, First Out" (LIFO), nghĩa là phần tử cuối cùng được thêm vào ngăn xếp sẽ là phần tử đầu tiên được lấy ra. Thao tác thêm phần tử vào ngăn xếp được gọi là đẩy (push), còn thao tác lấy phần tử ra khỏi ngăn xếp được gọi là bật (pop). Ngăn xếp thường được sử dụng để giải quyết các vấn đề liên quan đến theo dõi trạng thái, duyệt đồ thị, hoặc trong việc triển khai các thuật toán đệ quy.

**Ngữ cảnh và cách sử dụng:**

- **Lưu trữ dữ liệu tạm thời:** Ngăn xếp thường được sử dụng để lưu trữ thông tin tạm thời trong quá trình thực thi chương trình.
- **Duyệt đồ thị (graph traversal):** Trong thuật toán duyệt đồ thị theo chiều sâu (DFS - Depth-First Search), ngăn xếp được sử dụng để theo dõi các đỉnh kề của đỉnh hiện tại.
- **Triển khai đệ quy:** Ngăn xếp được sử dụng để lưu trữ các thông tin về trạng thái của các lời gọi hàm trong quá trình đệ quy.

**Ví dụ về ngăn xếp (Stack):**

Dưới đây là một ví dụ đơn giản về cách triển khai ngăn xếp trong Python:

```python
class Stack:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        else:
            return "Stack is empty"

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            return "Stack is empty"

# Sử dụng ngăn xếp
stack = Stack()

stack.push(1)
stack.push(2)
stack.push(3)

print("Peek:", stack.peek())  # Output: Peek: 3

print("Popped:", stack.pop())  # Output: Popped: 3
print("Popped:", stack.pop())  # Output: Popped: 2

print("Is stack empty?", stack.is_empty())  # Output: Is stack empty? False
```

---

**Hàng Đợi (Queue):**

- Hàng đợi là cấu trúc dữ liệu hoạt động theo nguyên tắc "First In, First Out" (FIFO), nghĩa là phần tử đầu tiên được thêm vào hàng đợi sẽ là phần tử đầu tiên được lấy ra. Thao tác thêm phần tử vào hàng đợi được gọi là enqueue, còn thao tác lấy phần tử ra khỏi hàng đợi được gọi là dequeue. Hàng đợi thường được sử dụng trong việc quản lý tác vụ (task management), xử lý hàng đợi (queue processing) và trong các thuật toán tìm kiếm (search algorithms).

**Ngữ cảnh và cách sử dụng:**

- **Xử lý hàng đợi công việc:** Hàng đợi được sử dụng để quản lý và thực hiện các tác vụ theo thứ tự đợi.
- **Quản lý tài nguyên hệ thống:** Trong hệ thống điều khiển tài nguyên, hàng đợi có thể được sử dụng để xử lý các yêu cầu từ người dùng.
- **Thuật toán tìm kiếm:** Trong thuật toán BFS (Breadth-First Search) cho đồ thị, hàng đợi được sử dụng để theo dõi các đỉnh hàng xóm của đỉnh hiện tại.

**Ví dụ về hàng đợi (Queue):**

Dưới đây là một ví dụ đơn giản về cách triển khai hàng đợi trong Python:

```python
class Queue:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop()
        else:
            return "Queue is empty"

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            return "Queue is empty"

# Sử dụng hàng đợi
queue = Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

print("Peek:", queue.peek())  # Output: Peek: 1

print("Dequeued:", queue.dequeue())  # Output: Dequeued: 1
print("Dequeued:", queue.dequeue())  # Output: Dequeued: 2

print("Is queue empty?", queue.is_empty())  # Output: Is queue empty? False
```

Cả hai cấu trúc dữ liệu, ngăn xếp và hàng đợi, đều là những công cụ quan trọng trong lập trình vì khả năng linh hoạt và ứng dụng rộng rãi của chúng trong việc giải quyết các vấn đề khác nhau.
