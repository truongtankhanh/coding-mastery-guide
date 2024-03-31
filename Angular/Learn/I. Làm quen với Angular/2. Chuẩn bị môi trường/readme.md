## Chuẩn bị môi trường và cách khởi tạo 1 dự án Angular

**Chuẩn bị:**

- **Node.js:** Tải và cài đặt Node.js từ trang web chính thức [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
- **npm:** npm là trình quản lý gói cho Node.js. Nó được cài đặt cùng với Node.js.
- **Angular CLI:** Angular CLI là công cụ dòng lệnh giúp bạn tạo, xây dựng và chạy các ứng dụng Angular. Để cài đặt Angular CLI, bạn cần chạy lệnh sau trong terminal:

```
npm install -g @angular/cli
```

**Cách khởi tạo 1 dự án Angular:**

Để khởi tạo một dự án Angular mới, bạn cần chạy lệnh sau trong terminal:

```
ng new <tên-dự-án>
```

Ví dụ:

```
ng new my-app
```

Lệnh này sẽ tạo một thư mục mới với tên `my-app` và chứa các file cần thiết cho một dự án Angular.

**Cấu trúc thư mục của dự án Angular:**

```
my-app
├── e2e
│   ├── app.e2e-spec.ts
│   └── protractor.conf.js
├── node_modules
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   └── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   │   └── favicon.ico
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
└── tsconfig.json
```

**Các file quan trọng:**

- **app.component.ts:** File này chứa class TypeScript cho component chính của ứng dụng.
- **app.module.ts:** File này chứa module chính của ứng dụng.
- **index.html:** File này là trang chủ của ứng dụng.
- **main.ts:** File này là điểm khởi đầu của ứng dụng.
- **polyfills.ts:** File này chứa các polyfill cần thiết cho các trình duyệt cũ hơn.
- **styles.css:** File này chứa stylesheet chính của ứng dụng.

**Chạy ứng dụng:**

Để chạy ứng dụng, bạn cần chạy lệnh sau trong terminal:

```
ng serve
```

Lệnh này sẽ khởi động ứng dụng web trên localhost:4200.

**Kết luận:**

Bài viết này đã hướng dẫn bạn cách chuẩn bị môi trường và khởi tạo một dự án Angular. Để tìm hiểu thêm về Angular, bạn có thể tham khảo các tài nguyên sau:

- **Tài liệu chính thức của Angular:** [https://angular.io/docs](https://angular.io/docs)
