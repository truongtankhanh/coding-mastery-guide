## Sử dụng `Link` component để chuyển đổi giữa các trang

`Link` component trong Next.js được sử dụng để tạo các liên kết giữa các trang trong ứng dụng của bạn mà không cần tải lại trang hoàn toàn. Điều này tạo ra trải nghiệm người dùng mượt mà hơn và cải thiện hiệu suất của ứng dụng.

### Khái niệm:

`Link` component là một thành phần từ thư viện `next/link` trong Next.js, cho phép bạn tạo các liên kết giữa các trang trong ứng dụng của mình. Nó tận dụng pre-fetching (tải trước) để cải thiện trải nghiệm người dùng.

### Ngữ cảnh:

Khi bạn cần tạo các liên kết giữa các trang trong ứng dụng Next.js của mình mà không cần tải lại toàn bộ trang, `Link` component là công cụ chính xác bạn cần sử dụng. Điều này giúp tối ưu hóa hiệu suất và tạo ra trải nghiệm người dùng tốt hơn.

### Cách sử dụng `Link` component trong Next.js:

1. **Import `Link` từ thư viện `next/link`:**

   ```javascript
   import Link from "next/link";
   ```

2. **Sử dụng `Link` để tạo liên kết đến các trang khác nhau:**
   ```javascript
   <Link href="/about">
     <a>About</a>
   </Link>
   ```
   - Trong ví dụ trên, `<Link>` bao bọc một thẻ `<a>` và thuộc tính `href` xác định đường dẫn của trang mà liên kết sẽ chuyển đến khi được nhấp.

### Ví dụ chi tiết:

```javascript
// Import Link từ thư viện next/link
import Link from "next/link";

// Trong component của bạn
function Navigation() {
  return (
    <nav>
      {/* Sử dụng Link để tạo liên kết đến trang About */}
      <Link href="/about">
        <a>About</a>
      </Link>

      {/* Sử dụng Link để tạo liên kết đến trang Services */}
      <Link href="/services">
        <a>Services</a>
      </Link>
    </nav>
  );
}

export default Navigation;
```

Trong ví dụ này, khi người dùng nhấp vào các liên kết 'About' hoặc 'Services', Next.js sẽ xử lý chuyển đổi đến các trang tương ứng một cách mượt mà mà không cần tải lại trang hoàn toàn, tạo ra trải nghiệm người dùng tốt hơn.

---

## Dynamic Routing

Dynamic Routing trong Next.js cho phép bạn tạo các route linh hoạt dựa trên các tham số động, như tên người dùng, ID sản phẩm, hoặc bất kỳ thông tin nào có thể thay đổi. Điều này giúp tạo ra các trang có nội dung động dựa trên dữ liệu từ nguồn bên ngoài hoặc cơ sở dữ liệu.

### Khái niệm:

Dynamic Routing là cách bạn có thể tạo các route linh hoạt trong Next.js, cho phép bạn tạo các tham số động trong URL để tạo ra các trang có nội dung thay đổi dựa trên các giá trị tham số đó.

### Ngữ cảnh:

Khi bạn cần tạo các route linh hoạt trong ứng dụng Next.js của mình, đặc biệt là khi bạn muốn có các trang có nội dung thay đổi dựa trên các thông tin như ID người dùng, slug của bài viết, hay bất kỳ thông tin động nào khác từ nguồn dữ liệu, Dynamic Routing là công cụ bạn cần sử dụng.

### Cách sử dụng Dynamic Routing trong Next.js:

1. **Tạo file cho route động:**

   - Trong thư mục `pages`, tạo một file với cú pháp `[slug].js` hoặc `[id].js` (tên file trong dấu ngoặc vuông là tên tham số động).

2. **Sử dụng useRouter hook để lấy thông tin từ URL:**

   ```javascript
   import { useRouter } from "next/router";

   function DynamicPage() {
     const router = useRouter();
     const { slug } = router.query; // hoặc const { id } = router.query;

     return <p>Dynamic Page: {slug}</p>; // hoặc <p>Dynamic Page: {id}</p>;
   }

   export default DynamicPage;
   ```

3. **Sử dụng thông tin từ URL để tải dữ liệu hoặc truy vấn cơ sở dữ liệu:**
   - Bạn có thể sử dụng giá trị của `slug` hoặc `id` (hoặc bất kỳ tham số động nào khác) để tải dữ liệu tương ứng từ cơ sở dữ liệu hoặc nguồn dữ liệu bên ngoài.

### Ví dụ chi tiết:

```javascript
// Trong thư mục pages, tạo file [id].js
import { useRouter } from "next/router";

function UserDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Sử dụng giá trị id từ URL để hiển thị thông tin người dùng
  return <p>User ID: {id}</p>;
}

export default UserDetails;
```

Khi bạn truy cập `/user/123`, trang sẽ hiển thị "User ID: 123" dựa trên giá trị `123` từ URL, cho phép bạn tận dụng thông tin từ URL để hiển thị nội dung phù hợp trên trang của mình.

---
