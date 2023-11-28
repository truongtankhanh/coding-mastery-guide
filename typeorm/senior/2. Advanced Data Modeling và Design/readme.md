Làm việc với quan hệ giữa các entities và tối ưu hóa cấu trúc dữ liệu là một phần quan trọng của việc thiết kế cơ sở dữ liệu. Hãy xem cách thực hiện các kỹ thuật quan trọng như eager loading, lazy loading, dynamic relation và denormalization trong NestJS với TypeORM.

### Advanced Entity Relationships:

#### 1. Eager Loading:

Eager loading là kỹ thuật load dữ liệu liên quan ngay từ khi truy vấn ban đầu được thực hiện, giúp tránh việc thực hiện nhiều truy vấn khi cần truy cập dữ liệu liên quan.

#### 2. Lazy Loading:

Lazy loading là kỹ thuật chỉ load dữ liệu liên quan khi cần thiết, giúp giảm thiểu tải cho các truy vấn không cần thiết.

#### 3. Dynamic Relation:

Dynamic relation là khả năng xác định quan hệ giữa các entities dựa trên điều kiện hoặc logic động, không cố định từ trước.

### Denormalization và Data Consistency:

#### 1. Denormalization:

Denormalization là việc tạo ra các phiên bản của dữ liệu đã được chuẩn hóa và lưu trữ theo cách không chuẩn hóa để tối ưu hóa hiệu suất truy xuất dữ liệu.

#### 2. Data Consistency:

Đảm bảo tính nhất quán của dữ liệu trong quá trình denormalization thông qua việc cập nhật dữ liệu liên quan mỗi khi dữ liệu gốc thay đổi.

### Ví dụ về Advanced Data Modeling và Design:

```typescript
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
  Lazy,
} from "typeorm";

// Eager Loading và Lazy Loading
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Post, (post) => post.user, { eager: true }) // eager loading
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user, { lazy: true }) // lazy loading
  comments: Lazy<Comment[]>;
}

// Dynamic Relation
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  RelationId,
} from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @RelationId((post: Post) => post.user) // dynamic relation
  userId: number;
}

// Denormalization
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalAmount: number;

  @Column()
  customerName: string;

  @Column()
  customerId: number;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: "customerId", referencedColumnName: "id" })
  customer: Customer;
}
```

Thông qua các ví dụ trên, ta có thể thấy cách sử dụng các kỹ thuật quan hệ entities và denormalization để tối ưu hóa quản lý dữ liệu trong ứng dụng NestJS sử dụng TypeORM.

Dưới đây là một ví dụ cho mỗi kỹ thuật: Eager Loading, Lazy Loading, Dynamic Relation và Denormalization.

### Eager Loading:

#### Ví dụ: Lấy thông tin của một bài đăng cùng với người dùng và tất cả các bình luận của bài đăng đó

```typescript
const postRepository = getConnection().getRepository(Post);

const postWithUserAndComments = await postRepository
  .createQueryBuilder("post")
  .leftJoinAndSelect("post.user", "user") // Eager loading user
  .leftJoinAndSelect("post.comments", "comment") // Eager loading comments
  .where("post.id = :postId", { postId: desiredPostId })
  .getOne();
```

**Giải thích:**

- `.leftJoinAndSelect('post.user', 'user')`: Eager load thông tin của người dùng liên quan đến bài đăng.
- `.leftJoinAndSelect('post.comments', 'comment')`: Eager load tất cả các bình luận của bài đăng.

### Lazy Loading:

#### Ví dụ: Lấy tất cả các bài đăng của một người dùng, load thông tin người dùng khi cần thiết.

```typescript
const userRepository = getConnection().getRepository(User);

const userWithPosts = await userRepository
  .createQueryBuilder("user")
  .leftJoin("user.posts", "post") // Lazy load posts
  .where("user.id = :userId", { userId: desiredUserId })
  .getOne();
```

**Giải thích:**

- `.leftJoin('user.posts', 'post')`: Thực hiện lazy load các bài đăng của người dùng.

### Dynamic Relation:

#### Ví dụ: Lấy id của người dùng mà một bài đăng đang tham chiếu đến.

```typescript
const postRepository = getConnection().getRepository(Post);

const postIdWithUserId = await postRepository
  .createQueryBuilder("post")
  .addSelect("post.userId") // Chọn trường userId
  .where("post.id = :postId", { postId: desiredPostId })
  .getOne();
```

**Giải thích:**

- `.addSelect('post.userId')`: Lấy trường userId từ bảng Post mà không cần join với bảng User, tương ứng với việc sử dụng `@RelationId` trong entity.

### Denormalization:

#### Ví dụ: Lấy thông tin của một đơn hàng với tên khách hàng được lưu trữ trực tiếp trong entity Order.

```typescript
const orderRepository = getConnection().getRepository(Order);

const orderWithCustomerInfo = await orderRepository
  .createQueryBuilder("order")
  .addSelect("order.customerName") // Lấy thông tin tên khách hàng
  .where("order.id = :orderId", { orderId: desiredOrderId })
  .getOne();
```

**Giải thích:**

- `.addSelect('order.customerName')`: Lấy thông tin tên khách hàng từ entity Order, thay vì phải join với bảng Customer, giúp tối ưu hóa truy vấn khi chỉ cần thông tin tên khách hàng.
