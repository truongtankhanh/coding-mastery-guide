TypeORM là một thư viện ORM (Object-Relational Mapping) được sử dụng để tương tác với cơ sở dữ liệu từ TypeScript hoặc JavaScript. Đây là một số kiến thức cơ bản về TypeORM mà một junior developer cần biết:

---

1. [Cấu hình và Kết nối Cơ sở Dữ Liệu](#cấu-hình-và-kết-nối-cơ-sở-dữ-liệu)
   - [Cài đặt và thiết lập](#1-cài-đặt-và-thiết-lập)
   - [Kết nối với cơ sở dữ liệu](#2-kết-nối-với-cơ-sở-dữ-liệu)
2. [Entities và Schemas](#entities-và-schemas)
   - [Entities](#1-entities)
   - [Decorators](#2-decorators)
3. [Migrations](#migrations)
   - [Migrations](#1-migrations)
   - [CLI (Command Line Interface)](#2-cli-command-line-interface)
4. [Querying và Relationships](#querying-và-relationships)
   - [Query Builder và Repository](#1-query-builder-và-repository)
   - [Relationships](#2-relationships)
5. [Lifecycle Hooks và Events](#lifecycle-hooks-và-events)
   - [Lifecycle Hooks](#1-lifecycle-hooks)
   - [Events](#2-events)
6. [Tối ưu và Hiệu suất](#tối-ưu-và-hiệu-suat)
   - [Eager Loading và Lazy Loading](#1-eager-loading-và-lazy-loading)
   - [Indexing và Optimizations](#2-indexing-và-optimizations)
7. [Error Handling và Logging](#error-handling-và-logging)
   - [Error Handling](#1-error-handling)
   - [Logging](#2-logging)
8. [Testing và Debugging](#testing-và-debugging)
   - [Unit Testing](#1-unit-testing)
   - [Debugging](#2-debugging)

<h2 style="color:#FF8C00; font-weight: bold;">Nội Dung</h2>

## Cấu hình và Kết nối Cơ sở Dữ Liệu

#### 1. **Cài đặt và thiết lập:**

- Sử dụng npm hoặc yarn để cài đặt TypeORM và các driver cần thiết (ví dụ: `npm install typeorm mysql`).

#### 2. **Kết nối với cơ sở dữ liệu:**

- Sử dụng `createConnection` hoặc cấu hình từ file `ormconfig.json` để kết nối với cơ sở dữ liệu.

---

## Entities và Schemas

#### 1. **Entities:**

- Đại diện cho các bảng trong cơ sở dữ liệu. Được định nghĩa bằng các class trong TypeScript với các trường tương ứng.

#### 2. **Decorators:**

- Sử dụng decorators (`@Entity`, `@Column`, `@PrimaryGeneratedColumn`, vv.) để đánh dấu và định nghĩa các entity và trường của chúng.

---

## Migrations

#### 1. **Migrations:**

- Cho phép bạn quản lý cấu trúc cơ sở dữ liệu theo thời gian. Tạo, chạy và revert các phiên bản khác nhau của cấu trúc cơ sở dữ liệu.

#### 2. **CLI (Command Line Interface):**

- TypeORM cung cấp một CLI để tạo và quản lý migrations (`typeorm migration:generate`, `typeorm migration:run`, `typeorm migration:revert`, vv.).

---

## Querying và Relationships

#### 1. **Query Builder và Repository:**

- Sử dụng Query Builder hoặc Repository để thực hiện các truy vấn đến cơ sở dữ liệu.

#### 2. **Relationships:**

- Xác định mối quan hệ giữa các entities thông qua decorators như `@OneToMany`, `@ManyToOne`.

---

## Lifecycle Hooks và Events

#### 1. **Lifecycle Hooks:**

- Sử dụng lifecycle hooks như `@BeforeInsert`, `@AfterLoad`, vv. để thực hiện các hành động trước hoặc sau khi entity được lưu vào hoặc tải từ cơ sở dữ liệu.

#### 2. **Events:**

- TypeORM cung cấp các sự kiện để theo dõi và xử lý các thay đổi trong cơ sở dữ liệu.

---

## Tối ưu và Hiệu suất

#### 1. **Eager Loading và Lazy Loading:**

- Sử dụng cẩn thận để tối ưu việc tải dữ liệu từ cơ sở dữ liệu thông qua việc định nghĩa các mối quan hệ là eager hoặc lazy loading.

#### 2. **Indexing và Optimizations:**

- Hiểu về cách tạo index và các tối ưu hóa để cải thiện hiệu suất truy vấn.

---

## Error Handling và Logging

#### 1. **Error Handling:**

- Xử lý các lỗi liên quan đến cơ sở dữ liệu và xử lý exceptions hoặc errors một cách chính xác.

#### 2. **Logging:**

- Sử dụng logging để theo dõi các truy vấn và hoạt động của TypeORM.

---

## Testing và Debugging

#### 1. **Unit Testing:**

- Viết các test cases để kiểm tra các chức năng của các phần mềm liên quan đến cơ sở dữ liệu.

#### 2. **Debugging:**

- Sử dụng công cụ debug để tìm kiếm và sửa lỗi trong code liên quan đến TypeORM.

---

Việc thực hành và xây dựng các dự án nhỏ sử dụng TypeORM sẽ giúp bạn hiểu rõ hơn về cách thức hoạt động của nó và

---
