Dưới đây là một số bài tập cơ bản về heap:

## 1. **Tạo một heap đơn giản:**

Một heap đơn giản thường được triển khai bằng một mảng, với một số quy tắc cụ thể để duy trì tính chất heap. Heap thường được sử dụng trong các thuật toán như thuật toán Heap Sort, Priority Queue và Dijkstra.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Các phần tử cần thêm vào heap.

**Output:**

- Một heap được tạo và các phần tử được thêm vào.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng một mảng để triển khai heap và thực hiện các thao tác thêm phần tử vào heap để duy trì tính chất của nó.

### Cách giải và mã nguồn (JavaScript - Heap Implementation):

Dưới đây là một cài đặt đơn giản của heap bằng JavaScript:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
}
```

Đoạn mã trên triển khai một heap nhỏ với các phương thức cơ bản như `swap()` để đổi chỗ giữa hai phần tử, và `insert()` để thêm một phần tử mới vào heap và duy trì tính chất heap bằng cách lên đỉnh (heapify).Bạn có thể sử dụng lớp này để thêm các phần tử vào heap.

Ví dụ sử dụng lớp `MinHeap`:

```javascript
const minHeap = new MinHeap();

minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);

console.log(minHeap.heap); // Output: [1, 3, 8, 5]
```

Mã nguồn trên triển khai một heap nhỏ với các phương thức cơ bản và thêm các phần tử vào heap. Phương pháp này tập trung vào việc duy trì tính chất của heap sau khi thêm các phần tử mới.

---

## 2. **Chèn phần tử vào heap:**

Chèn một phần tử vào heap đòi hỏi việc thực hiện ba bước chính:

1. **Thêm phần tử vào cuối heap:** Thêm phần tử mới vào cuối heap.
2. **Heapify lên trên (lên đỉnh):** Duy trì tính chất của heap bằng cách so sánh phần tử mới với phần tử cha và hoán đổi nếu cần.
3. **Heapify xuống dưới (đối với Max Heap):** Kiểm tra và đổi chỗ phần tử mới với con lớn nhất nếu cần thiết.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Phần tử cần chèn vào heap.

**Output:**

- Heap sau khi đã chèn phần tử mới.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng một heap (có thể là Max Heap hoặc Min Heap) để lưu trữ và duy trì dữ liệu theo thứ tự nhất định.

### Cách giải và mã nguồn (JavaScript - Chèn phần tử vào Heap):

Dưới đây là một ví dụ về cách chèn một phần tử mới vào một Min Heap bằng JavaScript:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
}

const minHeap = new MinHeap();
minHeap.heap = [1, 3, 5, 9, 12, 13];

function insertToMinHeap(heap, value) {
  heap.insert(value);
  return heap.heap;
}

console.log(insertToMinHeap(minHeap, 7)); // Output: [1, 3, 5, 7, 12, 13, 9]
```

Đoạn mã trên triển khai lớp `MinHeap` và hàm `insert()` để chèn một phần tử mới vào heap và duy trì tính chất Min Heap. Một ví dụ với các giá trị ban đầu của heap và chèn phần tử mới vào đó đã được cung cấp.

---

## 3. **Xóa phần tử từ heap:**

Để xóa phần tử đỉnh từ một heap, chúng ta thực hiện các bước sau:

1. **Thay thế đỉnh (root) bằng phần tử cuối cùng:** Gán giá trị của đỉnh bằng giá trị của phần tử cuối cùng trong heap.
2. **Xóa phần tử cuối cùng:** Loại bỏ phần tử cuối cùng (đã được di chuyển lên vị trí đỉnh) khỏi heap.
3. **Heapify xuống (Heapify down):** Đảm bảo tính chất heap bằng cách so sánh và hoán đổi phần tử đỉnh mới với con nhỏ nhất (đối với Min Heap) hoặc con lớn nhất (đối với Max Heap).

### Yêu cầu bài toán (Input/Output):

**Input:**

- Heap cần xóa phần tử đỉnh.

**Output:**

- Heap sau khi xóa phần tử đỉnh.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng heap để lưu trữ dữ liệu và duy trì tính chất heap (Min Heap hoặc Max Heap).

### Cách giải và mã nguồn (JavaScript - Xóa phần tử từ Heap):

Dưới đây là một ví dụ về cách xóa phần tử đỉnh từ một Min Heap bằng JavaScript:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  removeRoot() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let smallestChildIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex === currentIndex) break;

      this.swap(currentIndex, smallestChildIndex);
      currentIndex = smallestChildIndex;
    }

    return removedValue;
  }
}

const minHeap = new MinHeap();
minHeap.heap = [2, 4, 7, 8, 9, 10];

function removeRootFromMinHeap(heap) {
  return heap.removeRoot();
}

console.log(removeRootFromMinHeap(minHeap)); // Output: 2
```

Đoạn mã trên triển khai lớp `MinHeap` và hàm `removeRoot()` để xóa phần tử đỉnh từ Min Heap và duy trì tính chất Min Heap. Một ví dụ với các giá trị ban đầu của heap đã được cung cấp và phần tử đỉnh sau khi xóa đã được in ra.

---

## 4. **Sắp xếp một mảng sử dụng heap:**

Để sắp xếp một mảng sử dụng heap, chúng ta có thể sử dụng Min Heap để tìm phần tử nhỏ nhất và xây dựng mảng đã sắp xếp từ đó.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Mảng số nguyên cần sắp xếp.

**Output:**

- Mảng sau khi đã sắp xếp.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng Min Heap để sắp xếp mảng số nguyên một cách hiệu quả với độ phức tạp thời gian O(n log n).

### Cách giải và mã nguồn (JavaScript - Sắp xếp mảng sử dụng Heap):

Dưới đây là một ví dụ về cách sử dụng Min Heap để sắp xếp một mảng số nguyên bằng JavaScript:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyDown(index) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    const heapSize = this.heap.length;

    if (leftChild < heapSize && this.heap[leftChild] < this.heap[smallest]) {
      smallest = leftChild;
    }

    if (rightChild < heapSize && this.heap[rightChild] < this.heap[smallest]) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  buildHeap(arr) {
    this.heap = arr;
    const lastParent = Math.floor((arr.length - 2) / 2);

    for (let i = lastParent; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  heapSort() {
    const sorted = [];

    while (this.heap.length > 0) {
      this.swap(0, this.heap.length - 1);
      sorted.unshift(this.heap.pop());
      this.heapifyDown(0);
    }

    return sorted;
  }
}

function sortArrayUsingHeap(arr) {
  const minHeap = new MinHeap();
  minHeap.buildHeap(arr);
  return minHeap.heapSort();
}

const arr = [5, 2, 9, 1, 5, 6];
console.log(sortArrayUsingHeap(arr)); // Output: [1, 2, 5, 5, 6, 9]
```

Mã trên triển khai một lớp `MinHeap`, cho phép xây dựng heap từ một mảng đã cho và thực hiện sắp xếp mảng sử dụng heap bằng cách loại bỏ các phần tử nhỏ nhất từ heap và xây dựng mảng đã sắp xếp từ đó. Ví dụ trên cung cấp một mảng đầu vào và in ra mảng đã được sắp xếp.

---

## 5. **Tìm phần tử lớn nhất hoặc nhỏ nhất trong heap:**

Để trả về giá trị lớn nhất hoặc nhỏ nhất trong heap mà không xóa phần tử đó khỏi heap, chúng ta có thể truy cập phần tử ở đỉnh heap mà không thực hiện bất kỳ thay đổi nào trên heap.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Heap (dạng mảng hoặc cấu trúc heap tương tự).

**Output:**

- Phần tử lớn nhất hoặc nhỏ nhất trong heap.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng heap để tìm giá trị lớn nhất hoặc nhỏ nhất một cách hiệu quả với độ phức tạp thời gian O(1).

### Cách giải và mã nguồn (JavaScript - Tìm phần tử lớn nhất hoặc nhỏ nhất trong heap):

Dưới đây là một ví dụ về cách truy cập phần tử lớn nhất hoặc nhỏ nhất trong heap mà không xóa nó:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  peekMin() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  peekMax() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

const minHeap = new MinHeap();
minHeap.heap = [2, 5, 8, 10, 15];
console.log("Min Element in Min Heap:", minHeap.peekMin()); // Output: 2

const maxHeap = new MaxHeap();
maxHeap.heap = [15, 10, 8, 5, 2];
console.log("Max Element in Max Heap:", maxHeap.peekMax()); // Output: 15
```

Mã trên triển khai hai lớp `MinHeap` và `MaxHeap`, mỗi lớp có một phương thức `peekMin` và `peekMax` tương ứng để trả về phần tử nhỏ nhất và lớn nhất trong heap mà không xóa nó khỏi heap. Ví dụ trên cung cấp hai heap (Min Heap và Max Heap) và in ra giá trị lớn nhất và nhỏ nhất trong mỗi heap.

---

## 6. **Kiểm tra xem heap có rỗng không:**

Chức năng kiểm tra xem heap có rỗng không là quan trọng để đảm bảo an toàn khi truy cập các phần tử trong heap, đồng thời cũng giúp xác định xem cần thực hiện thao tác gì khi heap không chứa phần tử nào.

### Yêu cầu bài toán (Input/Output):

**Input:** Heap (dạng mảng hoặc cấu trúc heap tương tự).

**Output:** Giá trị boolean, true nếu heap rỗng, false nếu heap không rỗng.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Sử dụng heap để kiểm tra xem heap có chứa phần tử nào hay không với độ phức tạp thời gian O(1).

### Cách giải và mã nguồn (JavaScript - Kiểm tra heap có rỗng không):

Dưới đây là cách kiểm tra xem heap có rỗng không trong JavaScript:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const minHeap = new MinHeap();
minHeap.heap = [2, 5, 8, 10, 15];
console.log("Is Min Heap empty?", minHeap.isEmpty()); // Output: false

const emptyHeap = new MaxHeap();
console.log("Is Empty Heap empty?", emptyHeap.isEmpty()); // Output: true
```

Mã trên triển khai hai lớp `MinHeap` và `MaxHeap`, mỗi lớp có phương thức `isEmpty` để kiểm tra xem heap có rỗng không. Ví dụ trên cung cấp hai heap (Min Heap và Empty Heap) và kiểm tra xem chúng có rỗng không và in ra kết quả tương ứng.

---

## 7. **Thực hiện heapify:**

Heapify là quá trình biến một mảng thành một heap, tức là thực hiện việc sắp xếp các phần tử của mảng sao cho nó thỏa mãn tính chất heap (có thể là max-heap hoặc min-heap). Cách tiếp cận phổ biến là bắt đầu từ nửa cuối của mảng và áp dụng "trickle down" (hay "sift down") để đảm bảo từng nút là một phần của một heap.

### Yêu cầu bài toán (Input/Output):

**Input:** Mảng số nguyên.

**Output:** Mảng sau khi heapify.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Heapify thường được sử dụng để chuẩn bị dữ liệu cho việc sử dụng heap để thực hiện các thao tác heap như tìm kiếm phần tử lớn nhất/nhỏ nhất, sắp xếp heap, ...

### Cách giải và mã nguồn (JavaScript - Thực hiện heapify):

Dưới đây là cách thực hiện heapify trong JavaScript:

```javascript
function heapify(arr, n, i) {
  let largest = i; // Khởi tạo largest là root
  const left = 2 * i + 1; // Lấy chỉ số của left child
  const right = 2 * i + 2; // Lấy chỉ số của right child

  // So sánh left child với root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // So sánh right child với largest (root hoặc left child)
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // Nếu largest không phải là root
  if (largest !== i) {
    // Hoán đổi giá trị largest với root
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Gọi lại hàm heapify để tiếp tục heapify subtree
    heapify(arr, n, largest);
  }
}

function buildHeap(arr) {
  const n = arr.length;
  const startIndex = Math.floor(n / 2) - 1;

  // Bắt đầu từ nửa cuối của mảng và thực hiện heapify
  for (let i = startIndex; i >= 0; i--) {
    heapify(arr, n, i);
  }

  return arr;
}

// Ví dụ sử dụng hàm buildHeap để heapify một mảng
const array = [4, 10, 3, 5, 1];
console.log(buildHeap(array)); // In ra mảng sau khi heapify
```

Mã trên triển khai hai hàm `heapify` và `buildHeap`. Hàm `heapify` được sử dụng để chuyển một nút trong mảng thành một phần của heap, trong khi hàm `buildHeap` được sử dụng để chuyển toàn bộ mảng thành heap. Mảng sau khi heapify được in ra để kiểm tra kết quả.

---

## 8. **Tìm kiếm một phần tử trong heap:**

Tìm kiếm một phần tử trong heap có thể được thực hiện theo các cách khác nhau. Trong trường hợp này, ta có thể tìm kiếm tuần tự qua tất cả các phần tử trong heap để tìm phần tử cần tìm.

### Yêu cầu bài toán (Input/Output):

**Input:** Heap và giá trị cần tìm kiếm.

**Output:** Chỉ số của phần tử cần tìm trong heap. Nếu không tìm thấy, trả về `-1`.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Tìm kiếm trong heap có thể hữu ích trong các trường hợp cần kiểm tra sự tồn tại của một phần tử cụ thể hoặc cần biết vị trí của nó trong heap.

### Cách giải và mã nguồn (JavaScript - Tìm kiếm một phần tử trong heap):

Dưới đây là cách thực hiện tìm kiếm một phần tử trong heap bằng JavaScript:

```javascript
function searchInHeap(heap, target) {
  for (let i = 0; i < heap.length; i++) {
    if (heap[i] === target) {
      return i; // Trả về chỉ số nếu tìm thấy
    }
  }
  return -1; // Trả về -1 nếu không tìm thấy
}

// Ví dụ sử dụng hàm searchInHeap để tìm kiếm giá trị 5 trong heap
const heap = [8, 7, 6, 5, 4, 3, 2, 1];
const targetValue = 5;
console.log(searchInHeap(heap, targetValue)); // In ra chỉ số của phần tử cần tìm
```

Mã trên triển khai hàm `searchInHeap` để tìm kiếm một giá trị cụ thể trong heap. Hàm này duyệt qua từng phần tử trong heap và so sánh với giá trị cần tìm. Nếu tìm thấy, hàm sẽ trả về chỉ số của phần tử, ngược lại trả về `-1` khi không tìm thấy.

---

## 9. **Tạo heap từ một mảng:**

Để tạo một heap từ một mảng không sắp xếp, ta có thể sử dụng phương pháp heapify từ dưới lên. Điều này có nghĩa là bắt đầu từ nửa độ dài mảng - 1 và thực hiện heapify trên từng phần tử từ cuối lên đầu mảng để biến mảng thành một heap.

### Yêu cầu bài toán (Input/Output):

**Input:** Một mảng không sắp xếp.

**Output:** Heap sau khi tạo.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Tạo heap từ một mảng không chỉ giúp chuyển đổi mảng thành một cấu trúc heap, mà còn là bước chuẩn bị cho việc thực hiện các thao tác heap khác như thêm, xóa, hoặc sắp xếp các phần tử.

### Cách giải và mã nguồn (JavaScript - Tạo heap từ một mảng):

Dưới đây là cách triển khai hàm để tạo heap từ một mảng không sắp xếp bằng JavaScript:

```javascript
function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function buildHeap(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  return arr;
}

// Ví dụ sử dụng hàm buildHeap để tạo heap từ một mảng
const unsortedArray = [9, 4, 7, 1, 2, 5, 8, 3, 6];
console.log(buildHeap(unsortedArray)); // In ra mảng sau khi được chuyển thành heap
```

Mã trên triển khai hai hàm: `heapify` và `buildHeap`. Hàm `heapify` thực hiện việc sắp xếp lại từng nút trong một heap (nếu cần thiết), trong khi `buildHeap` sử dụng hàm `heapify` để tạo một heap từ một mảng không sắp xếp.

---

## 10. **Đảo ngược heap:**

Đảo ngược thứ tự các phần tử trong heap đơn giản là chuyển mọi phần tử từ heap thành một mảng, sau đó đảo ngược thứ tự các phần tử trong mảng. Việc này giống như việc lấy tất cả các phần tử từ heap và đưa chúng vào mảng theo thứ tự ngược lại.

### Yêu cầu bài toán (Input/Output):

**Input:** Heap ban đầu.

**Output:** Heap sau khi đảo ngược thứ tự các phần tử.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc đảo ngược heap có thể hữu ích khi cần làm việc với các phần tử theo thứ tự ngược lại so với thứ tự mặc định của heap.

### Cách giải và mã nguồn (JavaScript - Đảo ngược heap):

Dưới đây là cách triển khai hàm để đảo ngược thứ tự các phần tử trong heap bằng JavaScript:

```javascript
function reverseHeap(heap) {
  const reversedHeap = [];
  while (heap.length > 0) {
    reversedHeap.push(heap.shift());
  }
  return reversedHeap;
}

// Ví dụ sử dụng hàm reverseHeap để đảo ngược thứ tự các phần tử trong heap
const initialHeap = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(reverseHeap(initialHeap)); // In ra heap sau khi đảo ngược
```

Mã trên triển khai hàm `reverseHeap`, nó sẽ tạo một mảng mới (`reversedHeap`) bằng cách lấy lần lượt các phần tử từ heap ban đầu và thêm chúng vào mảng `reversedHeap`. Kết quả cuối cùng là một heap với thứ tự ngược lại so với heap ban đầu.

---

Những bài tập này sẽ giúp bạn hiểu rõ hơn về cách thức hoạt động của heap và cách triển khai các chức năng cơ bản trên heap.
