Tạo các truy vấn phức tạp và quản lý mối quan hệ nhiều-nhiều (Many-to-Many) trong TypeORM với NestJS là một phần quan trọng của việc làm việc với cơ sở dữ liệu. Hãy xem xét cách sử dụng Advanced Query Builder Techniques và tạo Custom Join Tables cho mối quan hệ Many-to-Many trong NestJS.

### Advanced Query Builder Techniques:

#### 1. Sử Dụng Query Builder Techniques:

Query Builder cung cấp nhiều phương thức để tạo ra các truy vấn phức tạp hơn, bao gồm các điều kiện, các phép toán logic, các thao tác aggregate, v.v.

#### 2. Ví dụ về Sử Dụng Query Builder Techniques:

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

  async findPostsByCategory(categoryId: number): Promise<Post[]> {
    return this.postRepository
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.categories", "category")
      .where("category.id = :categoryId", { categoryId })
      .getMany();
  }

  async findPostsPublishedAfter(date: Date): Promise<Post[]> {
    return this.postRepository
      .createQueryBuilder("post")
      .where("post.publishedAt > :date", { date })
      .getMany();
  }
}
```

### Many-to-Many Relationships và Custom Join Tables:

#### 1. Mối Quan Hệ Nhiều-Nhiều:

Mối quan hệ nhiều-nhiều giữa các entities trong TypeORM có thể được xác định bằng cách sử dụng decorator `@ManyToMany`.

#### 2. Tạo Custom Join Tables:

Khi cần thiết, bạn có thể tạo các bảng join tùy chỉnh để quản lý mối quan hệ nhiều-nhiều.

#### 3. Ví dụ về Many-to-Many Relationships và Custom Join Tables:

```typescript
// post.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Category)
  @JoinTable({
    name: "post_categories", // Tên của bảng join tùy chỉnh
    joinColumn: { name: "post_id" }, // Tên cột của entity hiện tại
    inverseJoinColumn: { name: "category_id" }, // Tên cột của entity đối tác
  })
  categories: Category[];
}

// category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Post, (post) => post.categories)
  posts: Post[];
}
```

Thông qua các ví dụ trên, bạn có thể sử dụng Advanced Query Builder Techniques để tạo các truy vấn phức tạp hơn và tạo Custom Join Tables để quản lý mối quan hệ nhiều-nhiều (Many-to-Many Relationships) trong TypeORM với NestJS.
