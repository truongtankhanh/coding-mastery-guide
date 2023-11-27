Tối ưu hiệu suất trong TypeORM là một phần quan trọng để tăng cường hiệu suất và giảm thiểu thời gian truy cập cơ sở dữ liệu. Hãy xem xét cách sử dụng Batch Operations, Bulk Inserts, Caching và Query Optimization trong NestJS để cải thiện hiệu suất của ứng dụng.

### Batch Operations và Bulk Inserts:

#### 1. Batch Operations:

Batch Operations cho phép bạn thực hiện nhiều thao tác cơ sở dữ liệu trong một lần gọi, giảm thiểu số lượng truy cập cơ sở dữ liệu.

#### 2. Bulk Inserts:

Bulk Inserts là việc thêm một lượng lớn dữ liệu vào cơ sở dữ liệu một cách hiệu quả bằng cách thực hiện một lần gọi thay vì nhiều lần gọi cho từng dòng dữ liệu.

#### 3. Ví dụ về Batch Operations và Bulk Inserts:

```typescript
// post.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async batchUpdatePosts(posts: Post[]): Promise<void> {
    await this.postRepository.save(posts);
  }

  async bulkInsertPosts(posts: Post[]): Promise<void> {
    await this.postRepository
      .createQueryBuilder()
      .insert()
      .values(posts)
      .execute();
  }
}
```

### Caching và Query Optimization:

#### 1. Caching:

Caching là việc lưu trữ kết quả truy vấn trước đó để tránh phải thực hiện lại truy vấn tương tự trong tương lai.

#### 2. Query Optimization:

Tối ưu hóa truy vấn bằng cách sử dụng index, chọn lọc dữ liệu cần thiết và sử dụng query builder để tối ưu hóa cấu trúc truy vấn.

#### 3. Ví dụ về Caching và Query Optimization:

```typescript
// post.service.ts
import { Injectable, CacheInterceptor } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  // Sử dụng caching với thư viện như Redis hoặc MemoryCache
  @Cacheable({ ttl: 60 }) // TTL: Time To Live, thời gian tồn tại của cache
  async getPosts(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async optimizedQuery(): Promise<Post[]> {
    return this.postRepository
      .createQueryBuilder("post")
      .select(["post.id", "post.title"]) // Chọn chỉ các trường cần thiết
      .where("post.published = :published", { published: true })
      .orderBy("post.createdAt", "DESC")
      .getMany();
  }
}
```

Thông qua các ví dụ trên, bạn có thể áp dụng Batch Operations, Bulk Inserts, Caching và Query Optimization trong TypeORM với NestJS để cải thiện hiệu suất của ứng dụng và giảm thiểu số lần truy cập cơ sở dữ liệu, tăng tốc độ và hiệu suất của ứng dụng của mình.
