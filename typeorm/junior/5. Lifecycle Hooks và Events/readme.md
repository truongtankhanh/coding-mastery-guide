Lifecycle Hooks và Events là các khái niệm quan trọng trong TypeORM để thực hiện các hành động trước và sau khi thực hiện các thao tác với cơ sở dữ liệu. Hãy xem xét chi tiết về cách sử dụng chúng và làm thế nào chúng ta có thể áp dụng chúng trong NestJS.

---

1. [Lifecycle Hooks và Events trong TypeORM](#lifecycle-hooks-và-events-trong-typeorm)
   - [Lifecycle Hooks](#1-lifecycle-hooks)
   - [Events](#2-events)
2. [Minh Họa Chi Tiết Với NestJS](#minh-họa-chi-tiết-với-nestjs)
   - [Sử Dụng Lifecycle Hooks trong Entity](#bước-1-sử-dụng-lifecycle-hooks-trong-entity)
   - [Sử Dụng Event Listeners trong Service](#bước-2-sử-dụng-event-listeners-trong-service)
   - [Kết Nối Events và Lifecycle Hooks trong AppModule](#bước-3-kết-nối-events-và-lifecycle-hooks-trong-appmodule)

---

### Lifecycle Hooks và Events trong TypeORM:

#### **1. Lifecycle Hooks:**

- Lifecycle hooks là các decorators như `@BeforeInsert`, `@AfterLoad`, `@BeforeUpdate`, `@AfterRemove`... được sử dụng để gắn các hàm với các sự kiện liên quan đến vòng đời của một entity.

---

#### **2. Events:**

- TypeORM cung cấp các event listeners để theo dõi và xử lý các sự kiện như `beforeInsert`, `afterLoad`, `beforeUpdate`, `afterRemove`,... xảy ra trên các entity.

---

### Minh Họa Chi Tiết Với NestJS:

#### **Bước 1: Sử Dụng Lifecycle Hooks trong Entity**

```typescript
// post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @BeforeInsert()
  doSomethingBeforeInsert() {
    // Thực hiện hành động trước khi insert entity vào cơ sở dữ liệu
    console.log("Before insert action...");
  }
}
```

---

#### **Bước 2: Sử Dụng Event Listeners trong Service**

```typescript
// post.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, EventListener, InsertEvent } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  @EventListener()
  onPostInsert(event: InsertEvent<Post>) {
    // Xử lý sau khi một entity Post được insert
    console.log("Inserted post:", event.entity);
  }
}
```

---

#### **Bước 3: Kết Nối Events và Lifecycle Hooks trong AppModule**

```typescript
// app.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { PostService } from "./post.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Cấu hình kết nối cơ sở dữ liệu
    }),
    TypeOrmModule.forFeature([Post]),
  ],
  providers: [PostService],
})
export class AppModule {}
```

---

Trong ví dụ này, chúng ta đã sử dụng Lifecycle Hooks (`@BeforeInsert`) để thực hiện hành động trước khi một entity `Post` được insert vào cơ sở dữ liệu. Sau đó, chúng ta đã sử dụng Event Listener (`@EventListener()`) để theo dõi sự kiện insert của entity `Post` và xử lý sau khi entity được insert.

---
