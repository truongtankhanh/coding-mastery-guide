Sure, let's delve into Architectural Patterns and Scalability, particularly focusing on Microservices Architecture, Distributed Databases, Event Sourcing, and CQRS while utilizing NestJS and TypeORM.

### Microservices Architecture và Distributed Databases:

#### Microservices Architecture:

Microservices Architecture là một kiến trúc phần mềm phân tán, trong đó ứng dụng được chia thành nhiều dịch vụ nhỏ độc lập, mỗi dịch vụ thực hiện một chức năng cụ thể của hệ thống.

**Ví dụ:**

- **NestJS và Microservices:** NestJS cung cấp module `@nestjs/microservices` để tạo và quản lý microservices.
- **Sử dụng TypeORM trong Microservices:** Mỗi microservice có thể sử dụng TypeORM để quản lý cơ sở dữ liệu của riêng mình.

#### Distributed Databases:

Cơ sở dữ liệu phân tán là việc lưu trữ dữ liệu trên nhiều nodes hoặc servers khác nhau để tối ưu hóa hiệu suất và sẵn sàng.

**Ví dụ:**

- **Replication và Sharding:** Sử dụng Replication để sao chép dữ liệu trên nhiều nodes để tăng tính sẵn sàng và Sharding để phân tán dữ liệu giữa các node.

### Event Sourcing và CQRS:

#### Event Sourcing:

Event Sourcing là một mô hình lưu trữ dữ liệu bằng cách lưu trữ tất cả các sự kiện (events) thay đổi trạng thái của ứng dụng.

**Ví dụ:**

- **Sử dụng TypeORM cho Event Store:** Tạo một event store bằng cách sử dụng TypeORM để lưu trữ các sự kiện thay đổi trạng thái của ứng dụng.

#### CQRS (Command Query Responsibility Segregation):

CQRS là một mô hình chia thành hai phần riêng biệt: một phần xử lý các command (để thay đổi trạng thái của ứng dụng) và một phần xử lý các query (để đọc trạng thái của ứng dụng).

**Ví dụ:**

- **Tách riêng Command và Query trong NestJS:** Sử dụng NestJS để tách các phần xử lý command và query thành các module riêng biệt, giúp quản lý và mở rộng hệ thống dễ dàng hơn.

Khi triển khai các mô hình này, việc tương tác với cơ sở dữ liệu thông qua TypeORM cần phải cẩn thận để đảm bảo tính nhất quán và hiệu suất của hệ thống. Đồng thời, cần xem xét các vấn đề về đồng bộ hóa, bảo mật, và mở rộng khi xây dựng kiến trúc phân tán và xử lý dữ liệu theo thời gian thực.

### Để minh họa Microservices Architecture và Distributed Databases trong NestJS với TypeORM, chúng ta có thể xem xét cách triển khai một microservice đơn giản và cách sử dụng TypeORM trong mô hình phân tán.

### Triển khai Microservice đơn giản trong NestJS:

#### Step 1: Tạo một Microservice Module

```typescript
// users.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersController } from './users.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3001, // Port của microservice
        },
      },
    ]),
  ],
  controllers: [UsersController],
})
export class UsersModule {}
```

#### Step 2: Tạo một Controller để quản lý Users

```typescript
// users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  private usersService: ClientProxy;

  constructor() {
    this.usersService = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3001, // Port của microservice
      },
    });
  }

  @Get()
  async getUsers() {
    return this.usersService.send<any>({ cmd: 'get-users' }, {});
  }
}
```

### Sử dụng TypeORM trong Microservices:

Để sử dụng TypeORM trong một microservice, bạn có thể cấu hình TypeORM tương tự như trong ứng dụng NestJS thông thường.

#### Ví dụ cấu hình TypeORM trong một Microservice:

```typescript
// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

```typescript
// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
```

Ví dụ trên chỉ minh họa cách triển khai một microservice và sử dụng TypeORM để quản lý cơ sở dữ liệu. Trong thực tế, việc triển khai Microservices Architecture và Distributed Databases đòi hỏi nhiều yếu tố phức tạp hơn như xử lý truy vấn phân tán, đồng bộ dữ liệu, và quản lý transaction giữa các dịch vụ.