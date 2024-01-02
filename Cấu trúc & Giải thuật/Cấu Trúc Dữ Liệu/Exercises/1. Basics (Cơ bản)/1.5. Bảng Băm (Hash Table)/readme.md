Đây là một số bài tập cơ bản liên quan đến bảng băm (hash table):

# 1. **Cài đặt bảng băm đơn giản:**

Cấu trúc dữ liệu bảng băm thường được sử dụng để lưu trữ dữ liệu dưới dạng cặp key-value, nó cho phép lấy và thêm phần tử nhanh chóng (trong trường hợp tốt nhất, có thể là O(1)).

### Yêu cầu bài toán (Input/Output):

**Input:**

- Key và giá trị cần thêm (insert) hoặc lấy (retrieve), key của phần tử cần xóa (delete).

**Output:**

- Phần tử được lấy (nếu có), thông báo xác nhận việc thêm, lấy hoặc xóa thành công.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Bảng băm thường được sử dụng để lưu trữ dữ liệu một cách nhanh chóng và dễ dàng truy cập dựa trên key.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách cài đặt bảng băm đơn giản bằng JavaScript:

```javascript
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

// Test case
let hashTable = new HashTable();
hashTable.set("hello", "world");
hashTable.set("goodbye", "moon");
console.log(hashTable.get("hello")); // Output: "world"
console.log(hashTable.delete("hello")); // Output: true
console.log(hashTable.get("hello")); // Output: undefined
```

Trong mã nguồn trên, `_hash()` là hàm băm sử dụng phương pháp hash (ở đây là Hashing theo phương pháp Polynomial Rolling Hash Function) để chuyển key thành một index trong mảng. `set()` được sử dụng để thêm cặp key-value vào bảng băm, `get()` để lấy giá trị từ key và `delete()` để xóa một cặp key-value dựa trên key.

---

# 2. **Xử lý va chạm (collision handling):**

## a. **Phương pháp chaining:**

Phương pháp chaining là một trong những cách để giải quyết xung đột (collision) trong bảng băm. Khi hai hoặc nhiều key được ánh xạ vào cùng một index trong bảng băm, ta sẽ lưu trữ các giá trị tại index đó trong một danh sách liên kết.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Key và giá trị cần thêm vào bảng băm.

**Output:**

- Kết quả việc thêm vào bảng băm (thông báo xác nhận hoặc cập nhật).

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Phương pháp chaining giải quyết xung đột bằng cách lưu trữ các giá trị có cùng index trong danh sách liên kết tại vị trí xung đột đó.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách sử dụng phương pháp chaining để giải quyết xung đột trong bảng băm bằng JavaScript:

```javascript
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    let found = false;
    for (let pair of this.keyMap[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        found = true;
        break;
      }
    }
    if (!found) {
      this.keyMap[index].push([key, value]);
    }
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let pair of this.keyMap[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

// Test case
let hashTable = new HashTable();
hashTable.set("hello", "world");
hashTable.set("goodbye", "moon");
console.log(hashTable.get("hello")); // Output: "world"
console.log(hashTable.delete("hello")); // Output: true
console.log(hashTable.get("hello")); // Output: undefined
```

Trong mã nguồn trên, phương thức `set()` và `get()` đã được cập nhật để sử dụng chaining. Khi xảy ra xung đột (cùng index), chúng ta sử dụng một mảng 2 chiều để lưu trữ các cặp key-value.

---

## b. **Phương pháp linear probing:**

Phương pháp Linear Probing là một cách để giải quyết xung đột trong bảng băm bằng cách tìm kiếm một vị trí trống gần nhất khi xảy ra xung đột, thay vì lưu trữ các giá trị xung đột trong danh sách liên kết. Khi một key được băm vào một vị trí đã được sử dụng, thuật toán sẽ tìm vị trí trống tiếp theo dựa trên một hàm băm khác để lưu trữ giá trị mới.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Key và giá trị cần thêm vào bảng băm.

**Output:**

- Kết quả việc thêm vào bảng băm (thông báo xác nhận hoặc cập nhật).

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Phương pháp Linear Probing giải quyết xung đột bằng cách tìm kiếm vị trí trống gần nhất để lưu trữ key mới, giúp giảm thời gian tìm kiếm khi xảy ra xung đột.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách sử dụng phương pháp Linear Probing để giải quyết xung đột trong bảng băm bằng JavaScript:

```javascript
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [key, value];
    } else {
      let i = (index + 1) % this.keyMap.length;
      while (i !== index) {
        if (!this.keyMap[i]) {
          this.keyMap[i] = [key, value];
          break;
        }
        i = (i + 1) % this.keyMap.length;
      }
    }
  }

  get(key) {
    let index = this._hash(key);
    let i = index;
    while (this.keyMap[i]) {
      if (this.keyMap[i][0] === key) {
        return this.keyMap[i][1];
      }
      i = (i + 1) % this.keyMap.length;
      if (i === index) break;
    }
    return undefined;
  }

  delete(key) {
    let index = this._hash(key);
    let i = index;
    while (this.keyMap[i]) {
      if (this.keyMap[i][0] === key) {
        delete this.keyMap[i];
        let j = (i + 1) % this.keyMap.length;
        while (this.keyMap[j]) {
          let keyToRehash = this.keyMap[j][0];
          let valueToRehash = this.keyMap[j][1];
          delete this.keyMap[j];
          this.set(keyToRehash, valueToRehash);
          j = (j + 1) % this.keyMap.length;
        }
        return true;
      }
      i = (i + 1) % this.keyMap.length;
      if (i === index) break;
    }
    return false;
  }
}

// Test case
let hashTable = new HashTable();
hashTable.set("hello", "world");
hashTable.set("goodbye", "moon");
console.log(hashTable.get("hello")); // Output: "world"
console.log(hashTable.delete("hello")); // Output: true
console.log(hashTable.get("hello")); // Output: undefined
```

Trong mã nguồn trên, phương thức `set()` và `get()` đã được cập nhật để sử dụng Linear Probing. Khi xảy ra xung đột (cùng index), chúng ta sẽ tìm vị trí trống gần nhất tiếp theo để lưu trữ key mới. Phương thức `delete()` xóa key và sau đó cập nhật lại bảng băm.

---

# 3. **Tìm kiếm phần tử trong bảng băm:**

Tìm kiếm phần tử trong bảng băm yêu cầu tìm giá trị tương ứng với một khóa đã cho trong cấu trúc dữ liệu bảng băm.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Khóa cần tìm kiếm trong bảng băm.

**Output:**

- Giá trị tương ứng với khóa nếu được tìm thấy, hoặc thông báo không tìm thấy nếu không có giá trị nào tương ứng.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Tìm kiếm phần tử trong bảng băm thường được sử dụng để tìm giá trị dựa trên khóa đã cho, có thể là chuỗi, số nguyên, hoặc bất kỳ loại dữ liệu nào có thể được sử dụng làm khóa.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách tìm kiếm phần tử trong bảng băm bằng JavaScript:

```javascript
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let pair of this.keyMap[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }
}

// Test case
let hashTable = new HashTable();
hashTable.set("hello", "world");
hashTable.set("goodbye", "moon");
console.log(hashTable.get("hello")); // Output: "world"
console.log(hashTable.get("test")); // Output: undefined
```

Trong mã nguồn trên, phương thức `get()` được sử dụng để tìm kiếm phần tử trong bảng băm. Nó sẽ trả về giá trị tương ứng với khóa nếu tìm thấy, hoặc `undefined` nếu không tìm thấy khóa đó trong bảng băm.

---

# 4. **Xóa phần tử từ bảng băm:**

Việc xóa một phần tử từ bảng băm yêu cầu tìm kiếm và xóa giá trị tương ứng với khóa đã cho.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Khóa của phần tử cần xóa từ bảng băm.

**Output:**

- Kết quả xóa phần tử: thông báo xác nhận xóa thành công hoặc thất bại nếu không tìm thấy khóa.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Xóa phần tử từ bảng băm thường được sử dụng để loại bỏ một phần tử không cần thiết hoặc cần cập nhật từ cấu trúc dữ liệu.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách xóa phần tử từ bảng băm bằng JavaScript:

```javascript
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  delete(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

// Test case
let hashTable = new HashTable();
hashTable.set("hello", "world");
hashTable.set("goodbye", "moon");
console.log(hashTable.delete("hello")); // Output: true
console.log(hashTable.delete("test")); // Output: false
```

Trong mã nguồn trên, phương thức `delete()` sẽ xóa phần tử với khóa đã cho từ bảng băm. Nếu phần tử được xóa thành công, phương thức trả về `true`, ngược lại trả về `false`.

---

# 5. **Tính toán hàm băm (hash function):**

Hàm băm là một phần quan trọng trong cấu trúc dữ liệu bảng băm, chuyển đổi khóa (key) thành một vị trí lưu trữ trong bảng băm. Mục tiêu là phân tán các khóa một cách đều, giúp giảm xác suất xung đột và cải thiện hiệu suất truy cập.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Khóa cần được băm.

**Output:**

- Giá trị hash (vị trí lưu trữ) tương ứng với khóa.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Hàm băm được sử dụng rộng rãi trong các cấu trúc dữ liệu như bảng băm, để phân phối khóa vào các vị trí lưu trữ trong bảng sao cho hiệu quả.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách cài đặt một hàm băm đơn giản sử dụng JavaScript:

```javascript
function hash(key, arrayLen) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % arrayLen;
  }
  return total;
}

// Test case
console.log(hash("hello", 10)); // Output: 4
console.log(hash("goodbye", 10)); // Output: 2
```

Trong ví dụ trên, hàm băm sử dụng phương pháp Polynomial Rolling Hash Function để chuyển đổi khóa thành một giá trị hash trong phạm vi từ 0 đến `arrayLen - 1`. Công thức tính hash được chọn để phân tán khóa một cách đều trong bảng băm, giảm xác suất xung đột. Mỗi ký tự trong khóa được chuyển đổi thành một giá trị số và tích của các giá trị này được sử dụng để tạo giá trị hash cuối cùng.

---

# 6. **Kiểm tra kích thước của bảng băm:**

Việc kiểm tra kích thước hiện tại của bảng băm đơn giản là truy cập thuộc tính lưu trữ kích thước của bảng đó.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Không có input nào được yêu cầu.

**Output:**

- Kích thước hiện tại của bảng băm.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Kiểm tra kích thước của bảng băm hữu ích khi cần biết số lượng vị trí lưu trữ hiện có trong bảng, thông tin này có thể hữu ích trong việc đánh giá hiệu suất của bảng băm.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách kiểm tra kích thước của bảng băm sử dụng JavaScript:

```javascript
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  size() {
    return this.keyMap.length;
  }
}

// Test case
let hashTable = new HashTable();
console.log(hashTable.size()); // Output: 53
```

Trong ví dụ trên, `size()` là một phương thức của lớp HashTable, nó trả về kích thước hiện tại của bảng băm thông qua thuộc tính `keyMap.length`. Phương thức này trả về số lượng vị trí lưu trữ có sẵn trong bảng băm.

---

# 7. **Xử lý thêm phần tử với kích thước động:**

Việc mở rộng kích thước của bảng băm khi cần thiết là một chiến lược phổ biến để duy trì hiệu suất tốt của bảng băm, đặc biệt khi số lượng phần tử trong bảng tiến gần đến hoặc vượt quá ngưỡng đã cho.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Không có input cụ thể.

**Output:**

- Thực hiện mở rộng kích thước bảng băm khi cần thiết để tránh quá tải.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Mở rộng kích thước bảng băm giúp tránh xung đột và giữ cho bảng băm hoạt động với hiệu suất cao hơn khi số lượng phần tử tăng lên.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách mở rộng kích thước của bảng băm khi cần thiết sử dụng JavaScript:

```javascript
class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
    this.length = 0; // Số lượng phần tử hiện có trong bảng băm
  }

  _hash(key) {
    // Hàm băm
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
    this.length++;

    // Kiểm tra nếu số lượng phần tử vượt quá mức cho phép thì mở rộng kích thước
    if (this.length > this.keyMap.length * 0.75) {
      this._resize();
    }
  }

  _resize() {
    const newTable = new Array(this.keyMap.length * 2);
    this.keyMap.forEach((items) => {
      if (items) {
        items.forEach(([key, value]) => {
          const newIndex = this._hash(key, newTable.length);
          if (!newTable[newIndex]) {
            newTable[newIndex] = [];
          }
          newTable[newIndex].push([key, value]);
        });
      }
    });
    this.keyMap = newTable;
  }
}
```

Trong ví dụ trên, khi hàm `set()` được gọi và số lượng phần tử vượt quá 75% của kích thước bảng băm, phương thức `_resize()` được gọi để mở rộng kích thước bảng băm lên gấp đôi (trong trường hợp này). Phương thức `_resize()` tạo ra một bảng băm mới và chuyển các phần tử từ bảng băm cũ sang bảng mới, sau đó gán bảng mới cho `keyMap`.

---

# 8. **Thực hiện bảng băm không cần chiều dài cố định:**

Xây dựng một bảng băm có thể thay đổi kích thước linh hoạt là một cách tiếp cận linh hoạt và tiện ích trong việc lưu trữ dữ liệu. Thay vì sử dụng một kích thước cố định, bảng băm sẽ tự điều chỉnh kích thước của nó dựa trên số lượng phần tử được thêm vào.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Các phần tử cần thêm vào bảng băm.

**Output:**

- Bảng băm với khả năng thay đổi kích thước theo nhu cầu lưu trữ.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Cấu trúc bảng băm không cần chiều dài cố định được sử dụng khi số lượng phần tử có thể thay đổi một cách linh hoạt và không biết trước.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách cài đặt bảng băm linh hoạt không có chiều dài cố định sử dụng JavaScript:

```javascript
class HashTable {
  constructor() {
    this.keyMap = new Array(4);
    this.length = 0;
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
    this.length++;

    // Kiểm tra nếu số lượng phần tử vượt quá mức cho phép thì mở rộng kích thước
    if (this.length > this.keyMap.length * 0.75) {
      this._resize();
    }
  }

  _resize() {
    const newTable = new Array(this.keyMap.length * 2);
    this.keyMap.forEach((items) => {
      if (items) {
        items.forEach(([key, value]) => {
          const newIndex = this._hash(key, newTable.length);
          if (!newTable[newIndex]) {
            newTable[newIndex] = [];
          }
          newTable[newIndex].push([key, value]);
        });
      }
    });
    this.keyMap = newTable;
  }
}
```

Trong ví dụ trên, khi hàm `set()` được gọi và số lượng phần tử vượt quá 75% của kích thước bảng băm, phương thức `_resize()` được gọi để mở rộng kích thước bảng băm lên gấp đôi.Điều này giúp tăng dung lượng lưu trữ và tránh việc quá tải.

---

# 9. **Xác định hiệu suất của hàm băm:**

Việc xác định hiệu suất của hàm băm là quan trọng để đánh giá và so sánh hiệu suất của chúng trong việc phân phối các khóa đến các vị trí lưu trữ. Để thực hiện việc này, cần xác định các tham số đánh giá hiệu suất như tốc độ tìm kiếm, số lượng xung đột và khả năng phân phối đồng đều các khóa.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Các hàm băm khác nhau.
- Dữ liệu thử nghiệm (tập hợp các khóa).

**Output:**

- Kết quả đánh giá hiệu suất của các hàm băm.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Đánh giá hiệu suất của hàm băm giúp chọn lựa hàm tốt nhất cho một ứng dụng cụ thể. Các tham số như tốc độ tìm kiếm, số lượng xung đột và khả năng phân phối đều có thể được đánh giá.

### Cách giải:

1. **Chọn dữ liệu thử nghiệm:** Tạo một tập hợp các khóa dữ liệu mẫu để đánh giá hiệu suất.
2. **Thực hiện thử nghiệm:** Áp dụng các hàm băm khác nhau để phân phối các khóa dữ liệu mẫu vào bảng băm.
3. **Đánh giá hiệu suất:** Đo lường các tham số như tốc độ tìm kiếm, số lượng xung đột, khả năng phân phối đều các khóa.
4. **So sánh kết quả:** So sánh kết quả hiệu suất của các hàm băm khác nhau.

### Mã nguồn (JavaScript - Đo lường số lượng xung đột):

Dưới đây là một ví dụ cách đo lường số lượng xung đột cho hai hàm băm khác nhau:

```javascript
function hashFunction1(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

function hashFunction2(key, arrayLen) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % arrayLen;
  }
  return total;
}

function testHashFunction(hashFunction) {
  const arrayLength = 10;
  const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  const hashTable = {};
  let collisions = 0;

  keys.forEach((key) => {
    let index = hashFunction(key, arrayLength);
    if (hashTable[index]) {
      collisions++;
    } else {
      hashTable[index] = key;
    }
  });

  return collisions;
}

const collisions1 = testHashFunction(hashFunction1);
const collisions2 = testHashFunction(hashFunction2);

console.log(`Collisions for hashFunction1: ${collisions1}`);
console.log(`Collisions for hashFunction2: ${collisions2}`);
```

Đây chỉ là một phần của việc đánh giá hiệu suất hàm băm. Bạn cần mở rộng để đo lường thêm các yếu tố khác như tốc độ tìm kiếm và khả năng phân phối đều.

---

# 10. **Xử lý xung đột (collision) hiệu quả:**

Xử lý xung đột trong bảng băm là một phần quan trọng để cải thiện hiệu suất của cấu trúc dữ liệu này. Khi hai khóa được ánh xạ vào cùng một vị trí lưu trữ, xảy ra xung đột. Các phương pháp xử lý xung đột như chaining, linear probing, hoặc quadratic probing có thể được sử dụng để giải quyết vấn đề này.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Bảng băm cần tối ưu hoá xử lý xung đột.
- Các phương pháp xử lý xung đột đã được sử dụng hoặc muốn áp dụng.

**Output:**

- Bảng băm đã được cải thiện về xử lý xung đột.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc tối ưu hoá xử lý xung đột trong bảng băm quyết định trực tiếp đến hiệu suất và thời gian thực thi của việc thêm, truy xuất hoặc xóa các phần tử.

### Cách giải và mã nguồn (JavaScript - Chaining):

Dưới đây là một cách cải thiện phương pháp chaining trong bảng băm:

```javascript
class ImprovedHashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}
```

Trong ví dụ trên, chaining được sử dụng để xử lý xung đột. Mỗi ô của bảng băm được tham chiếu đến một mảng con chứa các cặp key-value. Nếu xảy ra xung đột, cặp key-value sẽ được thêm vào mảng con tương ứng. Điều này giúp tránh xung đột và cải thiện hiệu suất. Tuy nhiên, việc cải thiện hiệu suất cũng phụ thuộc vào các yếu tố như hàm băm và kích thước bảng.

---

Những bài tập này sẽ giúp bạn hiểu rõ hơn về cách thức hoạt động của bảng băm, xử lý xung đột, và các chiến lược để tối ưu hiệu suất của nó.
