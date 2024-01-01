## Hiểu về SSR và SSG và cách chúng hoạt động trong Next.js

Sure, SSR (Server-Side Rendering) và SSG (Static Site Generation) là hai kỹ thuật quan trọng trong Next.js để tối ưu hóa hiệu suất và trải nghiệm người dùng.

### Khái niệm:

- **Server-Side Rendering (SSR)**: Kỹ thuật này cho phép tạo trang web với HTML được tạo ra tại server mỗi khi có yêu cầu từ client (trình duyệt). Điều này có nghĩa là server sẽ xử lý tạo nội dung HTML từ component React và trả về trình duyệt. Thông qua SSR, trang web có thể tải và hiển thị nhanh chóng với nội dung động.

- **Static Site Generation (SSG)**: Kỹ thuật này cho phép tạo ra các trang tĩnh trong quá trình build trước, tức là trước khi có bất kỳ yêu cầu nào từ client. Next.js tạo các trang HTML tĩnh dựa trên dữ liệu tĩnh trong thời gian build và lưu trữ chúng. Khi client yêu cầu, các trang này được phục vụ một cách nhanh chóng vì không cần phải tính toán lại từ server.

### Ngữ cảnh:

Khi xây dựng một ứng dụng web, việc hiểu và sử dụng SSR và SSG có thể tối ưu hóa hiệu suất tải trang, cải thiện SEO và trải nghiệm người dùng.

### Cách sử dụng trong Next.js:

#### SSR (Server-Side Rendering):

- Để sử dụng SSR trong Next.js, bạn chỉ cần tạo một trang thông thường trong thư mục `pages`. Next.js sẽ xử lý việc render các trang này từ server mỗi khi có yêu cầu từ client.

#### SSG (Static Site Generation):

- Để sử dụng SSG trong Next.js, bạn có thể sử dụng `getStaticProps` trong component. Hàm này cho phép bạn fetch dữ liệu trong quá trình build và trả về props cho component.

Ví dụ chi tiết về SSG trong Next.js:

```javascript
// Trong file pages/index.js
import React from "react";

function HomePage({ data }) {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch dữ liệu từ API hoặc cơ sở dữ liệu
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();

  // Trả về dữ liệu như props
  return {
    props: {
      data,
    },
  };
}

export default HomePage;
```

Trong ví dụ này, `getStaticProps` được sử dụng để fetch dữ liệu từ một API hoặc cơ sở dữ liệu và trả về dữ liệu như props cho component `HomePage`. Khi trang được build, dữ liệu sẽ được tạo ra trước và được sử dụng khi client yêu cầu trang, cải thiện hiệu suất và tốc độ tải trang.

---

## So sánh SSR và SSG

Sure, hãy so sánh SSR (Server-Side Rendering) và SSG (Static Site Generation) trong Next.js theo các khái niệm, ngữ cảnh và cách sử dụng.

### Khái niệm:

- **Server-Side Rendering (SSR)**: Trong SSR, mỗi khi có yêu cầu từ client, server sẽ tạo và trả về HTML của trang web. Điều này xảy ra khi một người dùng truy cập trang hoặc tương tác với ứng dụng.

- **Static Site Generation (SSG)**: Trái với SSR, SSG tạo và lưu trữ HTML của các trang trong quá trình build trước khi có yêu cầu từ client. Các trang tĩnh này được xây dựng dựa trên dữ liệu tĩnh và được phục vụ nhanh chóng khi client yêu cầu.

### Ngữ cảnh:

- Khi có yêu cầu từ client, SSR tạo ra nội dung trực tiếp từ server, thích hợp cho các trang có nội dung động hoặc dữ liệu thường xuyên thay đổi.
- SSG xây dựng trước các trang tĩnh từ dữ liệu tĩnh trong quá trình build, tốt cho các trang ít thay đổi hoặc không thay đổi.

### Cách sử dụng:

#### SSR (Server-Side Rendering) trong Next.js:

- Sử dụng SSR khi cần một trang web có nội dung động hoặc dữ liệu thay đổi thường xuyên.
- Khai báo component như các trang thông thường trong thư mục `pages`. Next.js sẽ xử lý render trang này từ server mỗi khi có yêu cầu.

#### SSG (Static Site Generation) trong Next.js:

- Sử dụng SSG cho các trang ít thay đổi hoặc không thay đổi.
- Sử dụng `getStaticProps` trong các component để fetch dữ liệu và trả về props cho trang trong quá trình build.
- Các trang sẽ được xây dựng trước và lưu trữ, sau đó phục vụ nhanh chóng khi client yêu cầu.

### Ví dụ chi tiết:

#### SSR (Server-Side Rendering) ví dụ:

```javascript
// Trong file pages/about.js
import React from "react";

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      {/* Nội dung trang */}
    </div>
  );
}

export default AboutPage;
```

#### SSG (Static Site Generation) ví dụ:

```javascript
// Trong file pages/index.js
import React from "react";

function HomePage({ data }) {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch dữ liệu từ API hoặc cơ sở dữ liệu
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();

  // Trả về dữ liệu như props
  return {
    props: {
      data,
    },
  };
}

export default HomePage;
```

Trong ví dụ trên, AboutPage được render từ server khi có yêu cầu từ client (SSR), trong khi HomePage được xây dựng trước và lưu trữ HTML tĩnh từ dữ liệu tĩnh trong quá trình build (SSG).

---
