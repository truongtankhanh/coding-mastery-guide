Tính nhất quán dữ liệu và kiểm soát đồng thời là hai khía cạnh quan trọng trong việc quản lý cơ sở dữ liệu. Sử dụng Transactions và Concurrency Control trong TypeORM với NestJS có thể giúp đảm bảo tính toàn vẹn và đồng bộ của dữ liệu. Hãy xem xét cách thực hiện Transactions và các phương pháp kiểm soát đồng thời trong NestJS.

### Transactions:

#### 1. Sử Dụng Transactions:

Transactions giúp đảm bảo rằng một nhóm các thao tác cơ sở dữ liệu được thực hiện hoàn toàn hoặc không thực hiện gì cả nếu có lỗi xảy ra.

#### 2. Ví dụ về Sử Dụng Transactions:

```typescript
// post.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getConnection } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async createPostsWithTransaction(posts: Post[]): Promise<void> {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      for (const post of posts) {
        await queryRunner.manager.save(Post, post);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
```

### Optimistic và Pessimistic Concurrency Control:

#### 1. Optimistic Concurrency Control:

Optimistic Concurrency Control đặt niềm tin vào việc không xảy ra xung đột. Nó kiểm tra xem liệu dữ liệu có bị thay đổi trước khi lưu hay không.

#### 2. Pessimistic Concurrency Control:

Pessimistic Concurrency Control khóa tài nguyên để tránh xung đột. Nó kiểm soát đồng thời bằng cách chặn truy cập vào dữ liệu khi có thể xảy ra xung đột.

#### 3. Ví dụ về Optimistic và Pessimistic Concurrency Control:

```typescript
// post.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, OptimisticLocking } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  // Optimistic Concurrency Control
  @OptimisticLocking(true)
  async updatePost(post: Post): Promise<Post> {
    return this.postRepository.save(post);
  }

  // Pessimistic Concurrency Control
  async getPessimisticPostLock(id: number): Promise<Post> {
    return this.postRepository
      .createQueryBuilder("post")
      .setLock("pessimistic_write")
      .where("post.id = :id", { id })
      .getOne();
  }
}
```

Thông qua các ví dụ trên, bạn có thể sử dụng Transactions để đảm bảo tính nhất quán của dữ liệu trong các thao tác ghi nhiều và triển khai Optimistic và Pessimistic Concurrency Control trong TypeORM với NestJS để kiểm soát đồng thời và tránh xung đột dữ liệu.
