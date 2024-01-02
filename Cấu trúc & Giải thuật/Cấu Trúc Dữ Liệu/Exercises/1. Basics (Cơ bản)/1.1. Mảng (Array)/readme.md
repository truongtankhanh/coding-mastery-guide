Dưới đây là một số bài tập cơ bản về mảng (Array) trong cấu trúc dữ liệu:

## 1. **Tính tổng của các phần tử trong mảng:**

### Yêu cầu bài toán:

- **Input**: Một mảng chứa các số nguyên.
- **Output**: Tổng của tất cả các phần tử trong mảng.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Tính tổng là một phép toán rất phổ biến và quan trọng trong nhiều tình huống, ví dụ như tính tổng điểm số của các học sinh, tính tổng doanh số bán hàng, hay thậm chí trong tính toán khoa học.
- **Phạm vi sử dụng**: Bất kỳ chương trình nào cần tính tổng của một dãy số cụ thể có thể sử dụng cấu trúc này.

### Cách giải và code:

Trong hầu hết các ngôn ngữ lập trình, có các hàm có sẵn để tính tổng các phần tử trong một mảng. Dưới đây là một số ví dụ sử dụng Python, JavaScript và C++.

#### Python:

```python
def tinh_tong(mang):
    return sum(mang)

# Sử dụng hàm:
mang_so_nguyen = [1, 2, 3, 4, 5]
tong = tinh_tong(mang_so_nguyen)
print("Tổng của mảng:", tong)
```

#### JavaScript:

```javascript
function tinhTong(mang) {
  return mang.reduce((acc, curr) => acc + curr, 0);
}

// Sử dụng hàm:
let mangSoNguyen = [1, 2, 3, 4, 5];
let tong = tinhTong(mangSoNguyen);
console.log("Tổng của mảng:", tong);
```

#### C++:

```cpp
#include <iostream>
#include <vector>
#include <numeric> // Thư viện để sử dụng hàm accumulate

int tinhTong(std::vector<int> mang) {
    return std::accumulate(mang.begin(), mang.end(), 0);
}

int main() {
    std::vector<int> mangSoNguyen = {1, 2, 3, 4, 5};
    int tong = tinhTong(mangSoNguyen);
    std::cout << "Tổng của mảng: " << tong << std::endl;
    return 0;
}
```

Cả ba ví dụ đều sử dụng hàm có sẵn (`sum` trong Python, `reduce` trong JavaScript, `accumulate` trong C++) để tính tổng của các phần tử trong mảng số nguyên.

---

## 2. **Tìm phần tử lớn nhất và nhỏ nhất:**

Bài toán yêu cầu tìm giá trị lớn nhất và nhỏ nhất trong một mảng số nguyên. Đây là một vấn đề cơ bản nhưng quan trọng trong việc xử lý dữ liệu.

### Yêu cầu bài toán:

- **Input**: Một mảng chứa các số nguyên.
- **Output**: Giá trị lớn nhất và nhỏ nhất trong mảng.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Việc tìm giá trị lớn nhất và nhỏ nhất rất quan trọng trong nhiều lĩnh vực, từ phân tích dữ liệu đến việc xây dựng các thuật toán tối ưu.
- **Phạm vi sử dụng**: Các ứng dụng liên quan đến xử lý dữ liệu, thống kê, máy học, và nhiều lĩnh vực khác cần phải tìm ra giá trị lớn nhất và nhỏ nhất của một tập hợp dữ liệu.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def tim_min_max(mang):
    min_value = min(mang)
    max_value = max(mang)
    return min_value, max_value

# Sử dụng hàm:
mang_so_nguyen = [3, 8, 1, 6, 4, 9, 2, 5, 7]
min_val, max_val = tim_min_max(mang_so_nguyen)
print("Giá trị nhỏ nhất:", min_val)
print("Giá trị lớn nhất:", max_val)
```

#### JavaScript:

```javascript
function timMinMax(mang) {
  let minVal = Math.min(...mang);
  let maxVal = Math.max(...mang);
  return { minVal, maxVal };
}

// Sử dụng hàm:
let mangSoNguyen = [3, 8, 1, 6, 4, 9, 2, 5, 7];
let { minVal, maxVal } = timMinMax(mangSoNguyen);
console.log("Giá trị nhỏ nhất:", minVal);
console.log("Giá trị lớn nhất:", maxVal);
```

#### C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm> // Thư viện để sử dụng hàm min_element và max_element

std::pair<int, int> timMinMax(std::vector<int> mang) {
    auto minVal = *std::min_element(mang.begin(), mang.end());
    auto maxVal = *std::max_element(mang.begin(), mang.end());
    return {minVal, maxVal};
}

int main() {
    std::vector<int> mangSoNguyen = {3, 8, 1, 6, 4, 9, 2, 5, 7};
    auto minmax = timMinMax(mangSoNguyen);
    std::cout << "Giá trị nhỏ nhất: " << minmax.first << std::endl;
    std::cout << "Giá trị lớn nhất: " << minmax.second << std::endl;
    return 0;
}
```

Ba ví dụ trên đều sử dụng các hàm có sẵn để tìm giá trị nhỏ nhất và lớn nhất trong một mảng số nguyên. Điều này rất hữu ích khi cần phải xử lý dữ liệu và tìm kiếm giá trị cực đại và cực tiểu của một tập hợp số.

---

## 3. **Đảo ngược mảng:**

Bài toán yêu cầu viết một hàm có khả năng đảo ngược thứ tự các phần tử trong một mảng. Điều này có thể làm thông qua việc sử dụng cấu trúc dữ liệu mảng và thực hiện thao tác đảo ngược trên các phần tử trong mảng đó.

### Yêu cầu bài toán:

- **Input**: Một mảng các phần tử.
- **Output**: Mảng mới với thứ tự các phần tử đã được đảo ngược.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Đảo ngược mảng thường được sử dụng khi cần xử lý dữ liệu theo thứ tự ngược lại, ví dụ như hiển thị dữ liệu đảo ngược trên giao diện người dùng, hoặc khi cần thực hiện các thao tác phân tích dữ liệu theo thứ tự ngược lại.
- **Phạm vi sử dụng**: Các tình huống cần thay đổi thứ tự của các phần tử trong mảng.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def dao_nguoc_mang(mang):
    return mang[::-1]

# Sử dụng hàm:
mang_so_nguyen = [1, 2, 3, 4, 5]
mang_dao_nguoc = dao_nguoc_mang(mang_so_nguyen)
print("Mảng sau khi đảo ngược:", mang_dao_nguoc)
```

#### JavaScript:

```javascript
function daoNguocMang(mang) {
  return mang.reverse();
}

// Sử dụng hàm:
let mangSoNguyen = [1, 2, 3, 4, 5];
daoNguocMang(mangSoNguyen);
console.log("Mảng sau khi đảo ngược:", mangSoNguyen);
```

#### C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm> // Thư viện để sử dụng hàm reverse

std::vector<int> daoNguocMang(std::vector<int> mang) {
    std::reverse(mang.begin(), mang.end());
    return mang;
}

int main() {
    std::vector<int> mangSoNguyen = {1, 2, 3, 4, 5};
    mangSoNguyen = daoNguocMang(mangSoNguyen);
    std::cout << "Mảng sau khi đảo ngược:";
    for (int num : mangSoNguyen) {
        std::cout << " " << num;
    }
    std::cout << std::endl;
    return 0;
}
```

Ba ví dụ trên đều sử dụng các phương pháp khác nhau để đảo ngược thứ tự các phần tử trong một mảng. Các phương pháp này đều cho kết quả tương tự nhau, đơn giản hóa việc thực hiện thao tác đảo ngược mảng.

---

## 4. **Tìm kiếm phần tử:**

Tìm kiếm phần tử trong một mảng yêu cầu việc xác định vị trí của phần tử cụ thể đó trong mảng. Điều này thường được thực hiện thông qua việc duyệt qua từng phần tử của mảng để so sánh với giá trị cần tìm.

### Yêu cầu bài toán:

- **Input**: Một mảng các phần tử và giá trị cần tìm kiếm.
- **Output**: Chỉ số của giá trị cần tìm trong mảng hoặc thông báo không tìm thấy nếu giá trị đó không tồn tại trong mảng.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Tìm kiếm phần tử là một hoạt động cần thiết trong nhiều trường hợp, từ ứng dụng web tìm kiếm đến việc tìm kiếm thông tin trong cơ sở dữ liệu.
- **Phạm vi sử dụng**: Mọi ứng dụng liên quan đến việc tìm kiếm dữ liệu trong một tập hợp.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def tim_kiem_phan_tu(mang, gia_tri):
    try:
        index = mang.index(gia_tri)
        return index
    except ValueError:
        return "Không tìm thấy"

# Sử dụng hàm:
mang_so_nguyen = [1, 2, 3, 4, 5]
vi_tri = tim_kiem_phan_tu(mang_so_nguyen, 3)
print("Chỉ số của phần tử là:", vi_tri)
```

#### JavaScript:

```javascript
function timKiemPhanTu(mang, giaTri) {
  const index = mang.indexOf(giaTri);
  return index !== -1 ? index : "Không tìm thấy";
}

// Sử dụng hàm:
let mangSoNguyen = [1, 2, 3, 4, 5];
let viTri = timKiemPhanTu(mangSoNguyen, 3);
console.log("Chỉ số của phần tử là:", viTri);
```

#### C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm> // Thư viện để sử dụng hàm find

int timKiemPhanTu(std::vector<int> mang, int giaTri) {
    auto it = std::find(mang.begin(), mang.end(), giaTri);
    if (it != mang.end()) {
        return std::distance(mang.begin(), it);
    } else {
        return -1;
    }
}

int main() {
    std::vector<int> mangSoNguyen = {1, 2, 3, 4, 5};
    int viTri = timKiemPhanTu(mangSoNguyen, 3);
    if (viTri != -1) {
        std::cout << "Chỉ số của phần tử là: " << viTri << std::endl;
    } else {
        std::cout << "Không tìm thấy" << std::endl;
    }
    return 0;
}
```

Ba ví dụ trên đều sử dụng các cách tiếp cận khác nhau để tìm kiếm phần tử trong một mảng. Mục đích là tìm vị trí của giá trị cần tìm trong mảng và trả về chỉ số đó hoặc thông báo nếu không tìm thấy.

---

## 5. **Loại bỏ phần tử trùng lặp:**

Bài toán yêu cầu viết một hàm có khả năng loại bỏ các phần tử trùng lặp từ một mảng. Điều này có thể được thực hiện bằng cách sử dụng cấu trúc dữ liệu mảng và kiểm tra các phần tử để loại bỏ các giá trị trùng lặp.

### Yêu cầu bài toán:

- **Input**: Một mảng các phần tử.
- **Output**: Mảng mới không chứa các phần tử trùng lặp.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Loại bỏ các phần tử trùng lặp thường được sử dụng khi cần xử lý dữ liệu duy nhất, ví dụ như danh sách người dùng, các sản phẩm trong cửa hàng, hoặc dữ liệu không gian đa chiều.
- **Phạm vi sử dụng**: Bất kỳ ứng dụng nào cần loại bỏ các phần tử trùng lặp từ một tập hợp dữ liệu.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def loai_bo_trung_lap(mang):
    return list(set(mang))

# Sử dụng hàm:
mang_so_nguyen = [1, 2, 2, 3, 4, 4, 5]
mang_khong_trung_lap = loai_bo_trung_lap(mang_so_nguyen)
print("Mảng sau khi loại bỏ trùng lặp:", mang_khong_trung_lap)
```

#### JavaScript:

```javascript
function loaiBoTrungLap(mang) {
  return Array.from(new Set(mang));
}

// Sử dụng hàm:
let mangSoNguyen = [1, 2, 2, 3, 4, 4, 5];
let mangKhongTrungLap = loaiBoTrungLap(mangSoNguyen);
console.log("Mảng sau khi loại bỏ trùng lặp:", mangKhongTrungLap);
```

#### C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_set> // Thư viện để sử dụng hash set

std::vector<int> loaiBoTrungLap(std::vector<int> mang) {
    std::unordered_set<int> hashSet(mang.begin(), mang.end());
    return std::vector<int>(hashSet.begin(), hashSet.end());
}

int main() {
    std::vector<int> mangSoNguyen = {1, 2, 2, 3, 4, 4, 5};
    std::vector<int> mangKhongTrungLap = loaiBoTrungLap(mangSoNguyen);
    std::cout << "Mảng sau khi loại bỏ trùng lặp:";
    for (int num : mangKhongTrungLap) {
        std::cout << " " << num;
    }
    std::cout << std::endl;
    return 0;
}
```

Cả ba ví dụ trên đều sử dụng các phương pháp khác nhau để loại bỏ các phần tử trùng lặp từ một mảng. Mục đích là tạo một mảng mới chỉ chứa các phần tử duy nhất từ mảng ban đầu.

---

## 6. **Sắp xếp mảng:**

Bài toán yêu cầu viết một hàm có khả năng sắp xếp một mảng số nguyên theo thứ tự tăng dần hoặc giảm dần. Điều này thường được thực hiện thông qua việc sử dụng các thuật toán sắp xếp như sắp xếp nổi bọt, sắp xếp chọn, hoặc sắp xếp quicksort.

### Yêu cầu bài toán:

- **Input**: Một mảng các số nguyên.
- **Output**: Mảng đã được sắp xếp theo thứ tự tăng dần hoặc giảm dần.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Sắp xếp mảng là một trong những nhiệm vụ quan trọng trong lập trình, từ việc hiển thị dữ liệu theo thứ tự cho người dùng đến việc xử lý dữ liệu đúng cách.
- **Phạm vi sử dụng**: Mọi ứng dụng cần sắp xếp dữ liệu theo thứ tự tăng hoặc giảm dần.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def sap_xep_mang(mang, giam_dan=False):
    return sorted(mang, reverse=giam_dan)

# Sử dụng hàm:
mang_so_nguyen = [5, 2, 9, 1, 6]
mang_sap_xep_tang = sap_xep_mang(mang_so_nguyen)
mang_sap_xep_giam = sap_xep_mang(mang_so_nguyen, True)
print("Mảng sắp xếp tăng dần:", mang_sap_xep_tang)
print("Mảng sắp xếp giảm dần:", mang_sap_xep_giam)
```

#### JavaScript:

```javascript
function sapXepMang(mang, giamDan = false) {
  return mang.sort((a, b) => (giamDan ? b - a : a - b));
}

// Sử dụng hàm:
let mangSoNguyen = [5, 2, 9, 1, 6];
let mangSapXepTang = sapXepMang(mangSoNguyen);
let mangSapXepGiam = sapXepMang(mangSoNguyen, true);
console.log("Mảng sắp xếp tăng dần:", mangSapXepTang);
console.log("Mảng sắp xếp giảm dần:", mangSapXepGiam);
```

#### C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm> // Thư viện để sử dụng hàm sort

std::vector<int> sapXepMang(std::vector<int> mang, bool giamDan = false) {
    if (giamDan) {
        std::sort(mang.begin(), mang.end(), std::greater<int>());
    } else {
        std::sort(mang.begin(), mang.end());
    }
    return mang;
}

int main() {
    std::vector<int> mangSoNguyen = {5, 2, 9, 1, 6};
    std::vector<int> mangSapXepTang = sapXepMang(mangSoNguyen);
    std::vector<int> mangSapXepGiam = sapXepMang(mangSoNguyen, true);
    std::cout << "Mảng sắp xếp tăng dần:";
    for (int num : mangSapXepTang) {
        std::cout << " " << num;
    }
    std::cout << std::endl;
    std::cout << "Mảng sắp xếp giảm dần:";
    for (int num : mangSapXepGiam) {
        std::cout << " " << num;
    }
    std::cout << std::endl;
    return 0;
}
```

Cả ba ví dụ trên đều sử dụng các thuật toán sắp xếp khác nhau để sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần. Mục đích là sắp xếp mảng để dễ dàng quản lý và tìm kiếm dữ liệu.

---

## 7. **Đếm số lần xuất hiện của một phần tử:**

Bài toán này yêu cầu viết một hàm có khả năng đếm số lần xuất hiện của một giá trị cụ thể trong một mảng. Điều này có thể thực hiện bằng cách duyệt qua mảng và kiểm tra từng phần tử để đếm số lần xuất hiện của giá trị đó.

### Yêu cầu bài toán:

- **Input**: Một mảng các phần tử và giá trị cần đếm số lần xuất hiện.
- **Output**: Số lần xuất hiện của giá trị trong mảng.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Việc đếm số lần xuất hiện của một giá trị trong một danh sách là một công việc phổ biến trong phân tích dữ liệu, thống kê và xử lý dữ liệu.
- **Phạm vi sử dụng**: Bất kỳ ứng dụng nào cần đếm số lần xuất hiện của một giá trị cụ thể trong một tập hợp dữ liệu.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def dem_so_lan_xuat_hien(mang, gia_tri):
    return mang.count(gia_tri)

# Sử dụng hàm:
mang_so_nguyen = [1, 2, 2, 3, 4, 2, 5, 2]
so_lan_xuat_hien = dem_so_lan_xuat_hien(mang_so_nguyen, 2)
print("Số lần xuất hiện của giá trị là:", so_lan_xuat_hien)
```

#### JavaScript:

```javascript
function demSoLanXuatHien(mang, giaTri) {
  return mang.filter((item) => item === giaTri).length;
}

// Sử dụng hàm:
let mangSoNguyen = [1, 2, 2, 3, 4, 2, 5, 2];
let soLanXuatHien = demSoLanXuatHien(mangSoNguyen, 2);
console.log("Số lần xuất hiện của giá trị là:", soLanXuatHien);
```

#### C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm> // Thư viện để sử dụng hàm count

int demSoLanXuatHien(std::vector<int> mang, int giaTri) {
    return std::count(mang.begin(), mang.end(), giaTri);
}

int main() {
    std::vector<int> mangSoNguyen = {1, 2, 2, 3, 4, 2, 5, 2};
    int soLanXuatHien = demSoLanXuatHien(mangSoNguyen, 2);
    std::cout << "Số lần xuất hiện của giá trị là:" << soLanXuatHien << std::endl;
    return 0;
}
```

Ba ví dụ trên đều sử dụng các phương pháp khác nhau để đếm số lần xuất hiện của một giá trị trong một mảng. Mục đích là đếm và trả về số lần xuất hiện của giá trị đó trong mảng.

---

## 8. **Tách mảng:**

Bài toán yêu cầu viết một hàm để chia một mảng ban đầu thành các mảng con, mỗi mảng con có độ dài nhất định. Điều này có thể thực hiện bằng cách duyệt qua mảng ban đầu và tạo các mảng con từ các phần tử liên tiếp với độ dài nhất định.

### Yêu cầu bài toán:

- **Input**: Một mảng và độ dài của các mảng con cần tạo.
- **Output**: Mảng các mảng con được tạo ra từ mảng ban đầu với độ dài nhất định.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Tách mảng thành các phần nhỏ hơn là một bước quan trọng trong việc xử lý dữ liệu, đặc biệt trong việc chia dữ liệu thành các phần để xử lý hoặc hiển thị một cách logic.
- **Phạm vi sử dụng**: Mọi ứng dụng cần phải chia dữ liệu thành các phần nhỏ hơn để thực hiện các thao tác cụ thể trên từng phần.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def tach_mang(mang, do_dai_moi_mang):
    return [mang[i:i+do_dai_moi_mang] for i in range(0, len(mang), do_dai_moi_mang)]

# Sử dụng hàm:
mang_so_nguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9]
mang_tach = tach_mang(mang_so_nguyen, 3)
print("Mảng sau khi tách:", mang_tach)
```

#### JavaScript:

```javascript
function tachMang(mang, doDaiMoiMang) {
  let mangKetQua = [];
  for (let i = 0; i < mang.length; i += doDaiMoiMang) {
    mangKetQua.push(mang.slice(i, i + doDaiMoiMang));
  }
  return mangKetQua;
}

// Sử dụng hàm:
let mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mangTach = tachMang(mangSoNguyen, 3);
console.log("Mảng sau khi tách:", mangTach);
```

#### C++:

```cpp
#include <iostream>
#include <vector>

std::vector<std::vector<int>> tachMang(std::vector<int> mang, int doDaiMoiMang) {
    std::vector<std::vector<int>> mangKetQua;
    for (size_t i = 0; i < mang.size(); i += doDaiMoiMang) {
        std::vector<int> mangCon;
        for (size_t j = i; j < i + doDaiMoiMang && j < mang.size(); ++j) {
            mangCon.push_back(mang[j]);
        }
        mangKetQua.push_back(mangCon);
    }
    return mangKetQua;
}

int main() {
    std::vector<int> mangSoNguyen = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    std::vector<std::vector<int>> mangTach = tachMang(mangSoNguyen, 3);
    std::cout << "Mảng sau khi tách:" << std::endl;
    for (const auto& mangCon : mangTach) {
        for (int num : mangCon) {
            std::cout << num << " ";
        }
        std::cout << std::endl;
    }
    return 0;
}
```

Ba ví dụ trên đều sử dụng các cách tiếp cận khác nhau để tách một mảng thành các mảng con có độ dài nhất định. Mục đích là chia mảng ban đầu thành các phần nhỏ hơn có kích thước xác định để dễ dàng xử lý hoặc hiển thị dữ liệu.

---

## 9. **Hợp nhất hai mảng đã sắp xếp:**

Bài toán này yêu cầu viết một hàm có khả năng hợp nhất hai mảng đã sắp xếp thành một mảng mới cũng đã sắp xếp. Điều này có thể thực hiện bằng cách sử dụng các thuật toán hợp nhất (merge) giống như trong thuật toán merge sort.

### Yêu cầu bài toán:

- **Input**: Hai mảng đã sắp xếp theo thứ tự tăng dần hoặc giảm dần.
- **Output**: Một mảng mới đã sắp xếp chứa tất cả các phần tử từ hai mảng ban đầu.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Hợp nhất các dữ liệu từ nhiều nguồn khác nhau là một phần quan trọng của việc xử lý dữ liệu trong nhiều ứng dụng, đặc biệt trong việc kết hợp dữ liệu từ các nguồn khác nhau để phân tích hoặc hiển thị.
- **Phạm vi sử dụng**: Mọi ứng dụng có yêu cầu hợp nhất dữ liệu từ các nguồn khác nhau để tạo một tập dữ liệu lớn hơn và có tính chất có tổ chức.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def hop_nhat_hai_mang(mang1, mang2):
    i = 0
    j = 0
    ket_qua = []
    while i < len(mang1) and j < len(mang2):
        if mang1[i] < mang2[j]:
            ket_qua.append(mang1[i])
            i += 1
        else:
            ket_qua.append(mang2[j])
            j += 1

    while i < len(mang1):
        ket_qua.append(mang1[i])
        i += 1

    while j < len(mang2):
        ket_qua.append(mang2[j])
        j += 1

    return ket_qua

# Sử dụng hàm:
mang1 = [1, 3, 5, 7]
mang2 = [2, 4, 6, 8]
mang_hop_nhat = hop_nhat_hai_mang(mang1, mang2)
print("Mảng sau khi hợp nhất:", mang_hop_nhat)
```

#### JavaScript:

```javascript
function hopNhatHaiMang(mang1, mang2) {
  let i = 0;
  let j = 0;
  let ketQua = [];
  while (i < mang1.length && j < mang2.length) {
    if (mang1[i] < mang2[j]) {
      ketQua.push(mang1[i]);
      i++;
    } else {
      ketQua.push(mang2[j]);
      j++;
    }
  }

  while (i < mang1.length) {
    ketQua.push(mang1[i]);
    i++;
  }

  while (j < mang2.length) {
    ketQua.push(mang2[j]);
    j++;
  }

  return ketQua;
}

// Sử dụng hàm:
let mang1 = [1, 3, 5, 7];
let mang2 = [2, 4, 6, 8];
let mangHopNhat = hopNhatHaiMang(mang1, mang2);
console.log("Mảng sau khi hợp nhất:", mangHopNhat);
```

#### C++:

```cpp
#include <iostream>
#include <vector>

std::vector<int> hopNhatHaiMang(std::vector<int> mang1, std::vector<int> mang2) {
    std::vector<int> ketQua;
    size_t i = 0, j = 0;
    while (i < mang1.size() && j < mang2.size()) {
        if (mang1[i] < mang2[j]) {
            ketQua.push_back(mang1[i]);
            i++;
        } else {
            ketQua.push_back(mang2[j]);
            j++;
        }
    }

    while (i < mang1.size()) {
        ketQua.push_back(mang1[i]);
        i++;
    }

    while (j < mang2.size()) {
        ketQua.push_back(mang2[j]);
        j++;
    }

    return ketQua;
}

int main() {
    std::vector<int> mang1 = {1, 3, 5, 7};
    std::vector<int> mang2 = {2, 4, 6, 8};
    std::vector<int> mangHopNhat = hopNhatHaiMang(mang1, mang2);
    std::cout << "Mảng sau khi hợp nhất:";
    for (int num : mangHopNhat) {
        std::cout << " " << num;
    }
    std::cout << std::endl;
    return 0;
}
```

Các đoạn mã trên đều sử dụng cùng một phương pháp để hợp nhất hai mảng đã sắp xếp thành một mảng mới đã sắp xếp. Mục đích là tạo một mảng chứa tất cả các phần tử từ hai mảng ban đầu đã được sắp xếp theo thứ tự tăng dần.

---

## 10. **Chèn phần tử vào mảng:**

Bài toán này yêu cầu viết một hàm để chèn một phần tử mới vào một vị trí cụ thể trong mảng. Điều này có thể thực hiện bằng cách dịch chuyển các phần tử sau vị trí chèn để tạo chỗ trống cho phần tử mới.

### Yêu cầu bài toán:

- **Input**: Một mảng, vị trí cần chèn và giá trị cần chèn.
- **Output**: Mảng mới sau khi đã chèn phần tử vào vị trí cụ thể.

### Ngữ cảnh áp dụng cấu trúc dữ liệu:

- **Ứng dụng thực tế**: Chèn phần tử vào một vị trí cụ thể trong mảng thường được sử dụng trong nhiều tình huống trong lập trình, như thêm dữ liệu mới vào một danh sách tại vị trí mong muốn.
- **Phạm vi sử dụng**: Mọi ứng dụng cần thêm hoặc chèn dữ liệu mới vào một vị trí cụ thể trong mảng.

### Cách giải và code:

Dưới đây là cách giải quyết bài toán này trong các ngôn ngữ lập trình như Python, JavaScript và C++.

#### Python:

```python
def chen_phan_tu(mang, vi_tri, gia_tri):
    mang.insert(vi_tri, gia_tri)
    return mang

# Sử dụng hàm:
mang_so_nguyen = [1, 2, 4, 5]
vi_tri_chen = 2
gia_tri_chen = 3
mang_moi = chen_phan_tu(mang_so_nguyen, vi_tri_chen, gia_tri_chen)
print("Mảng sau khi chèn:", mang_moi)
```

#### JavaScript:

```javascript
function chenPhanTu(mang, viTri, giaTri) {
  mang.splice(viTri, 0, giaTri);
  return mang;
}

// Sử dụng hàm:
let mangSoNguyen = [1, 2, 4, 5];
let viTriChen = 2;
let giaTriChen = 3;
let mangMoi = chenPhanTu(mangSoNguyen, viTriChen, giaTriChen);
console.log("Mảng sau khi chèn:", mangMoi);
```

#### C++:

```cpp
#include <iostream>
#include <vector>

std::vector<int> chenPhanTu(std::vector<int> mang, int viTri, int giaTri) {
    mang.insert(mang.begin() + viTri, giaTri);
    return mang;
}

int main() {
    std::vector<int> mangSoNguyen = {1, 2, 4, 5};
    int viTriChen = 2;
    int giaTriChen = 3;
    std::vector<int> mangMoi = chenPhanTu(mangSoNguyen, viTriChen, giaTriChen);
    std::cout << "Mảng sau khi chèn:";
    for (int num : mangMoi) {
        std::cout << " " << num;
    }
    std::cout << std::endl;
    return 0;
}
```

Các ví dụ trên đều sử dụng các phương pháp khác nhau để chèn một phần tử mới vào một vị trí cụ thể trong mảng. Mục đích là thêm phần tử mới vào mảng tại vị trí chỉ định mà không làm thay đổi các phần tử khác.

---
