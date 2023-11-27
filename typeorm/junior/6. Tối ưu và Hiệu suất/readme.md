Tối ưu hiệu suất cơ sở dữ liệu là một phần quan trọng trong việc phát triển ứng dụng. Hãy xem xét chi tiết về cách tối ưu và cải thiện hiệu suất khi sử dụng TypeORM trong NestJS.

---

1. [Eager Loading và Lazy Loading](#eager-loading-và-lazy-loading)
   - [Eager Loading](#1-eager-loading)
   - [Lazy Loading](#2-lazy-loading)
2. [Indexing và Optimizations](#indexing-và-optimizations)
   - [Indexing](#1-indexing)
   - [Tối ưu hóa truy vấn](#2-tối-ưu-hóa-truy-vấn)
3. [Minh Họa Chi Tiết Với NestJS](#minh-họa-chi-tiết-với-nestjs)
   - [Eager Loading và Lazy Loading](#1-eager-loading-và-lazy-loading)
   - [Indexing](#2-indexing)
   - [Tối ưu hóa truy vấn](#3-tối-ưu-hóa-truy-vấn)

---

### Eager Loading và Lazy Loading:

#### **1. Eager Loading:**

- Eager Loading là việc tải toàn bộ dữ liệu liên quan đến một entity khi truy vấn được thực hiện. Điều này có thể cải thiện hiệu suất trong một số trường hợp, nhưng cần phải cẩn thận với việc tải quá nhiều dữ liệu mà không cần thiết.

---

#### **2. Lazy Loading:**

- Lazy Loading chỉ tải dữ liệu liên quan khi nó thực sự cần thiết. Điều này giúp tránh việc tải dữ liệu không cần thiết và giảm thiểu thời gian phản hồi của ứng dụng.

---

### Indexing và Optimizations:

#### **1. Indexing:**

- Tạo index trên các cột phổ biến mà bạn thường xử lý truy vấn sẽ cải thiện hiệu suất truy vấn. Index giúp cơ sở dữ liệu tìm kiếm và truy cập dữ liệu nhanh hơn.

---

#### **2. Tối ưu hóa truy vấn:**

- Sử dụng câu truy vấn hiệu quả.
- Giới hạn số lượng trả về dữ liệu khi cần thiết.
- Sử dụng caching để lưu trữ kết quả truy vấn đã được thực hiện trước đó.

---

### Minh Họa Chi Tiết Với NestJS:

#### **1. Eager Loading và Lazy Loading:**

```typescript
// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Post, (post) => post.user, { eager: true }) // Eager Loading
  posts: Post[];
}
```

---

#### **2. Indexing:**

```typescript
// post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index() // Tạo index cho cột title
  title: string;

  @Column()
  content: string;
}
```

---

#### **3. Tối ưu hóa truy vấn:**

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

  async getLimitedPosts(limit: number): Promise<Post[]> {
    return this.postRepository.find({ take: limit });
  }
}
```

---

Đây chỉ là một số cách sử dụng Eager Loading, Lazy Loading, Indexing và tối ưu hóa truy vấn trong TypeORM với NestJS. Bạn có thể thực hành và tìm hiểu thêm về cách tối ưu hiệu suất trong việc làm việc với cơ sở dữ liệu.

---
