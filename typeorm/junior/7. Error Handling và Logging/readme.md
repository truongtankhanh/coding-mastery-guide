Xử lý lỗi và logging là phần quan trọng trong việc phát triển ứng dụng. Hãy xem xét cách xử lý lỗi và sử dụng logging trong TypeORM với NestJS một cách chi tiết để giải quyết các vấn đề có thể xảy ra và theo dõi hoạt động của cơ sở dữ liệu.

---

1. [Error Handling trong TypeORM](#error-handling-trong-typeorm)
   - [Xử lý Exceptions](#1-xử-lý-exceptions)
   - [Ví dụ về Xử lý Errors trong NestJS](#2-ví-dụ-về-xử-lý-errors-trong-nestjs)
2. [Logging trong TypeORM](#logging-trong-typeorm)
   - [Theo dõi Truy Vấn và Hoạt Động](#1-theo-dõi-truy-vấn-và-hoạt-động)
   - [Ví dụ về Logging trong NestJS](#2-ví-dụ-về-logging-trong-nestjs)

---

### Error Handling trong TypeORM:

#### **1. Xử lý Exceptions:**

- Khi thực hiện các thao tác với cơ sở dữ liệu, có thể xảy ra lỗi như kết nối không thành công, truy vấn không hợp lệ, v.v. Việc xử lý exceptions một cách chính xác sẽ giúp ứng dụng của bạn trở nên ổn định hơn.

---

#### **2. Ví dụ về Xử lý Errors trong NestJS:**

```typescript
// post.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async findPostById(id: number): Promise<Post> {
    const post = await this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundException("Post not found");
    }
    return post;
  }
}
```

---

### Logging trong TypeORM:

#### **1. Theo dõi Truy Vấn và Hoạt Động:**

- Logging là công cụ quan trọng để theo dõi hoạt động của cơ sở dữ liệu, giúp bạn hiểu rõ hơn về truy vấn được thực hiện và các thao tác đang diễn ra.

---

#### **2. Ví dụ về Logging trong NestJS:**

```typescript
// app.module.ts
import { Module, Logger } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // ...cấu hình kết nối cơ sở dữ liệu
      logging: true, // Bật logging của TypeORM
    }),
    TypeOrmModule.forFeature([Post]),
  ],
})
export class AppModule {
  constructor(private readonly logger: Logger) {
    // Log thông báo khi ứng dụng khởi động
    this.logger.log("Application started");
  }
}
```

---

Trong ví dụ này, chúng ta đã sử dụng `NotFoundException` từ NestJS để xử lý trường hợp không tìm thấy bài viết (`Post`). Đồng thời, chúng ta đã bật logging của TypeORM thông qua cấu hình trong `AppModule` để theo dõi các hoạt động của cơ sở dữ liệu.

---
