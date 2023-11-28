Để hiểu về cách sử dụng Query Builder, Repository và xác định mối quan hệ giữa các entities trong TypeORM, chúng ta sẽ xem xét một ví dụ NestJS chi tiết.

---

1. [Querying và Relationships trong TypeORM với NestJS](#querying-và-relationships-trong-typeorm-với-nestjs)
   - [Sử dụng Query Builder và Repository](#1-sử-dụng-query-builder-và-repository)
   - [Ví dụ về Query Builder và Repository](#2-ví-dụ-về-query-builder-và-repository)

---

## Querying và Relationships trong TypeORM với NestJS:

### **1. Sử dụng Query Builder và Repository:**

Query Builder là một công cụ mạnh mẽ để tạo và thực thi các truy vấn cơ sở dữ liệu. Repository là một lớp trừu tượng hóa quản lý các thao tác cơ bản với cơ sở dữ liệu.

---

### **2. Ví dụ về Query Builder và Repository:**

- Trong ví dụ này, chúng ta sẽ tạo hai entities: `User` và `Post`, một user có thể có nhiều post. Chúng ta sẽ sử dụng `@OneToMany` và `@ManyToOne` để xác định mối quan hệ giữa chúng.

---

#### Bước 1: Tạo Entities `User` và `Post`

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

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}

// post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
```

---

#### Bước 2: Sử dụng Repository và Query Builder trong Service

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

  async createPost(
    title: string,
    content: string,
    userId: number
  ): Promise<Post> {
    const user = await getConnection().getRepository(User).findOne(userId);
    const post = new Post();
    post.title = title;
    post.content = content;
    post.user = user;
    return this.postRepository.save(post);
  }

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.find({ relations: ["user"] });
  }
}
```

---

Trong ví dụ này, chúng ta đã sử dụng `@OneToMany` và `@ManyToOne` để xác định mối quan hệ giữa `User` và `Post`. Đồng thời, trong `PostService`, chúng ta đã sử dụng Repository và Query Builder để thực hiện các thao tác CRUD và lấy dữ liệu từ cơ sở dữ liệu.

---
