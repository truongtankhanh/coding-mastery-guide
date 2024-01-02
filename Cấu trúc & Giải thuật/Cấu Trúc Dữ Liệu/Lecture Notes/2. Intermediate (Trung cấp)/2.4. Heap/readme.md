Heap tối ưu, hay còn gọi là binary heap, là một cấu trúc dữ liệu cây nhị phân đặc biệt được sử dụng để quản lý ưu tiên và sắp xếp các phần tử. Trong binary heap, mỗi nút cha có giá trị ít hơn hoặc bằng giá trị của các nút con, tạo thành một cấu trúc dữ liệu đáy đầy.

### Cấu Trúc Cơ Bản:

#### Binary Heap:

- Cấu trúc dữ liệu có hai loại: heap tối ưu (min heap) và heap cực đại (max heap).
- Trong min heap, giá trị của nút cha nhỏ hơn hoặc bằng giá trị của nút con.
- Trong max heap, giá trị của nút cha lớn hơn hoặc bằng giá trị của nút con.
- Thường được triển khai dưới dạng mảng.

#### Ngữ Cảnh và Cách Sử Dụng:

1. **Quản Lý Ưu Tiên:**

   - Ngữ cảnh: Sử dụng để duy trì phần tử ưu tiên cao nhất hoặc thấp nhất.
   - Ví dụ (Python - Sử dụng Thư viện `heapq`):

     ```python
     import heapq

     # Tạo min heap
     min_heap = []
     heapq.heappush(min_heap, 4)
     heapq.heappush(min_heap, 1)
     heapq.heappush(min_heap, 7)

     print("Min Heap:", min_heap)  # Output: [1, 4, 7]

     # Xóa phần tử nhỏ nhất
     smallest = heapq.heappop(min_heap)
     print("Smallest element:", smallest)  # Output: 1
     ```

2. **Sắp Xếp:**

   - Ngữ cảnh: Sử dụng để sắp xếp một tập hợp phần tử.
   - Ví dụ (Python - Sử dụng Thư viện `heapq`):

     ```python
     import heapq

     # Sắp xếp một list thành min heap
     lst = [3, 1, 6, 2, 8, 4]
     heapq.heapify(lst)
     print("Min Heap from list:", lst)  # Output: [1, 2, 4, 3, 8, 6]
     ```

Heap tối ưu là một cấu trúc dữ liệu mạnh mẽ cho việc quản lý ưu tiên và sắp xếp. Việc sử dụng thư viện có sẵn như `heapq` trong Python giúp triển khai nhanh chóng và tiện lợi. Tùy thuộc vào yêu cầu cụ thể của ứng dụng, min heap hoặc max heap có thể được chọn để đáp ứng các yêu cầu ưu tiên khác nhau.
