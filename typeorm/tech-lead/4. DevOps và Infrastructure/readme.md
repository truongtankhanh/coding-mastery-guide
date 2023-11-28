Để hướng dẫn về DevOps và Infrastructure trong NestJS với TypeORM, hãy tập trung vào quy trình quản lý cấu trúc cơ sở dữ liệu và các chiến lược triển khai tự động:

### 1. Database as Code:

#### Sử dụng Terraform để Quản lý Cấu Trúc Cơ Sở Dữ Liệu:

```terraform
// Ví dụ về sử dụng Terraform để triển khai cơ sở dữ liệu PostgreSQL
resource "postgresql_database" "example" {
  name = "example"
  owner = "postgres"
}
```

#### Ansible để Tự Động Hóa Cài Đặt và Cấu Hình:

```yaml
# Ví dụ về playbook Ansible để cài đặt và cấu hình PostgreSQL
- hosts: all
  become: yes
  tasks:
    - name: Install PostgreSQL
      apt:
        name: postgresql
        state: present

    # Cấu hình PostgreSQL
```

### 2. Automated Deployment và Rollback Strategies:

#### Quy Trình Triển Khai Tự Động:

```typescript
// Sử dụng TypeORM CLI trong quy trình CI/CD để chạy migrations tự động
"scripts": {
  "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",
  "migrate": "npm run typeorm migration:run"
},
"devDependencies": {
  "typeorm": "^0.2.34",
  "ts-node": "^10.2.1",
  "tsconfig-paths": "^3.10.1"
}
```

#### Rollback Strategies:

```typescript
// TypeORM cung cấp chức năng rollback
// Ví dụ sử dụng CLI để rollback migration cuối cùng
typeorm migration:revert
```

Các công cụ như Terraform và Ansible giúp quản lý cấu trúc cơ sở dữ liệu dưới dạng mã, từ đó tạo điều kiện cho việc triển khai tự động và tái tạo môi trường. TypeORM CLI cung cấp khả năng chạy migrations tự động và rollback, giúp quản lý phiên bản cơ sở dữ liệu trong quá trình triển khai.
