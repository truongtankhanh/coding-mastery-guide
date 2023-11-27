Tăng cường khả năng mở rộng và thiết kế kiến trúc phù hợp là những yếu tố quan trọng trong việc xây dựng ứng dụng. Hãy xem cách triển khai Sharding, Replication và kiến trúc Microservices cùng với TypeORM trong NestJS để nâng cao tính mở rộng và hiểu các mô hình cơ sở dữ liệu phù hợp.

### Sharding và Replication:

#### 1. Sharding:

Sharding là việc chia nhỏ dữ liệu và phân phối chúng trên nhiều máy chủ để giảm tải cho từng máy chủ và tăng khả năng mở rộng.

#### 2. Replication:

Replication là quá trình sao chép và duy trì một bản sao dữ liệu trên nhiều node khác nhau để tăng khả năng sẵn sàng và độ tin cậy.

#### 3. Ví dụ về Sharding và Replication:

Sharding:

```typescript
// sharding.service.ts
import { Injectable } from "@nestjs/common";
import { getConnection, Repository } from "typeorm";
import { Shard } from "./shard.entity";

@Injectable()
export class ShardingService {
  constructor(private readonly shardRepository: Repository<Shard>) {}

  async getShardById(id: number): Promise<Shard | undefined> {
    const connection = getConnection("shard_connection");
    const repository = connection.getRepository(Shard);
    return repository.findOne(id);
  }
}
```

Replication:

```typescript
// replication.service.ts
import { Injectable } from "@nestjs/common";
import { getConnection, Repository } from "typeorm";
import { Replica } from "./replica.entity";

@Injectable()
export class ReplicationService {
  constructor(private readonly replicaRepository: Repository<Replica>) {}

  async getReplicaById(id: number): Promise<Replica | undefined> {
    const connection = getConnection("replica_connection");
    const repository = connection.getRepository(Replica);
    return repository.findOne(id);
  }
}
```

### Microservices và Database Patterns:

#### 1. Microservices:

Kiến trúc Microservices chia ứng dụng thành các dịch vụ nhỏ, mỗi dịch vụ có thể có cơ sở dữ liệu riêng để tăng khả năng linh hoạt và phát triển độc lập.

#### 2. Database Patterns:

Mô hình cơ sở dữ liệu như Database per Service, Shared Database, API Composition, CQRS (Command Query Responsibility Segregation) là những mô hình phổ biến trong kiến trúc Microservices.

#### 3. Ví dụ về Microservices và Database Patterns:

```typescript
// users.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

// orders.module.ts, products.module.ts, vv.
// Mỗi module có thể có cơ sở dữ liệu riêng
```

Thông qua việc triển khai Sharding, Replication và áp dụng kiến trúc Microservices cùng với TypeORM trong NestJS, bạn có thể tăng cường khả năng mở rộng và thiết kế kiến trúc linh hoạt cho ứng dụng của mình.
