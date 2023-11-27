Advanced Entity Configurations trong TypeORM là một chủ đề phức tạp, nhưng rất hữu ích khi bạn muốn xây dựng cấu trúc dữ liệu phức tạp và quản lý kế thừa giữa các entities. Hãy xem xét các khái niệm về Inheritance, Composite Columns và Embedded Entities, cũng như Entity Inheritance Strategies, và làm thế nào để áp dụng chúng trong NestJS.

### Inheritance trong TypeORM:

#### 1. Loại Kế Thừa:

TypeORM hỗ trợ ba loại kế thừa chính:

- Single Table Inheritance: Tất cả các class con chia sẻ một bảng duy nhất.
- Class Table Inheritance: Mỗi class con có một bảng riêng.
- Table Per Concrete Class: Mỗi class có bảng riêng, không có bảng cho class cha.

#### 2. Ví dụ về Inheritance:

```typescript
// vehicle.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
} from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

// car.entity.ts
import { Entity } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity()
export class Car extends Vehicle {
  // Các trường riêng của Car
}

// bike.entity.ts
import { Entity } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity()
export class Bike extends Vehicle {
  // Các trường riêng của Bike
}
```

### Composite Columns và Embedded Entities:

#### 1. Composite Columns:

Composite Columns là việc kết hợp nhiều trường thành một trường duy nhất trong cơ sở dữ liệu.

#### 2. Embedded Entities:

Embedded Entities là cách sử dụng một entity nhúng vào một entity khác để tạo cấu trúc dữ liệu phức tạp hơn.

#### 3. Ví dụ về Composite Columns và Embedded Entities:

```typescript
// address.entity.ts
import { Entity, Column } from "typeorm";

@Entity()
export class Address {
  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  country: string;
}

// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, EmbedOne } from "typeorm";
import { Address } from "./address.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @EmbedOne(() => Address)
  address: Address;
}
```

### Entity Inheritance Strategies:

#### 1. Lựa Chọn Chiến Lược Kế Thừa:

Lựa chọn chiến lược phù hợp với cấu trúc dữ liệu và yêu cầu của ứng dụng.

#### 2. Ví dụ về Entity Inheritance Strategies:

```typescript
// animal.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Inheritance } from "typeorm";

@Entity()
@Inheritance({ strategy: "single-table" }) // Single Table Inheritance
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}

// cat.entity.ts
import { Entity } from "typeorm";
import { Animal } from "./animal.entity";

@Entity()
export class Cat extends Animal {
  // Các trường riêng của Cat
}

// dog.entity.ts
import { Entity } from "typeorm";
import { Animal } from "./animal.entity";

@Entity()
export class Dog extends Animal {
  // Các trường riêng của Dog
}
```

Thông qua các ví dụ trên, bạn có thể áp dụng Inheritance, Composite Columns và Embedded Entities trong TypeORM để tạo cấu trúc dữ liệu phức tạp hơn và lựa chọn chiến lược kế thừa phù hợp với nhu cầu của ứng dụng của bạn trong NestJS.
