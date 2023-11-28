Cải thiện hiệu suất và tối ưu hóa cơ sở dữ liệu là một phần quan trọng của việc xây dựng ứng dụng có hiệu suất cao. Dưới đây là các chiến lược và kỹ thuật tối ưu hóa hiệu suất cơ sở dữ liệu trong NestJS với TypeORM.

### Query Optimization Techniques:

#### 1. Sử dụng Index:

Indexing là một cách hiệu quả để cải thiện hiệu suất truy vấn cơ sở dữ liệu bằng cách tạo index trên các cột thường được truy vấn.

#### 2. Sử dụng Cache:

Caching giúp tối ưu hóa hiệu suất bằng cách lưu trữ dữ liệu truy vấn phổ biến trong bộ nhớ tạm thời để giảm thời gian truy xuất từ cơ sở dữ liệu.

#### 3. Query Hint:

Query hint là các chỉ dẫn mà bạn có thể cung cấp cho trình tạo truy vấn để nó hiểu cách tối ưu hóa truy vấn.

### Database Sharding và Partitioning:

#### 1. Sharding và Partitioning:

Sharding chia dữ liệu thành các phần nhỏ và phân phối chúng trên nhiều máy chủ để tăng khả năng mở rộng, trong khi Partitioning chia dữ liệu thành các phần nhỏ hơn để quản lý dữ liệu dễ dàng hơn.

### Vertical và Horizontal Scaling:

#### 1. Vertical Scaling:

Vertical Scaling (Scale-up) là việc tăng cường hiệu suất của một máy chủ bằng cách tăng cấu hình của nó (CPU, RAM, v.v.).

#### 2. Horizontal Scaling:

Horizontal Scaling (Scale-out) là việc tăng cường hiệu suất bằng cách thêm máy chủ hoặc node mới vào hệ thống để phân phối tải làm việc.

### Ví dụ về Query Optimization và Scaling:

```typescript
// Sử dụng index trên cột username
@Column({ unique: true })
@Index()
username: string;

// Sử dụng caching cho kết quả truy vấn phổ biến
@Cache({ duration: 60000 })
async getCachedData(): Promise<Data[]> {
  // Lấy dữ liệu từ cơ sở dữ liệu và cache
}

// Sử dụng hint để xác định kế hoạch thực hiện truy vấn
const query = repository.createQueryBuilder('entity')
  .setHint('USE_PLAN_CACHE', true)
  .where('entity.id = :id')
  .setParameter('id', 1);
```

Thông qua việc áp dụng các kỹ thuật tối ưu hóa truy vấn, các chiến lược Sharding, Partitioning và Scaling trong NestJS với TypeORM, bạn có thể cải thiện hiệu suất và khả năng mở rộng của cơ sở dữ liệu để đáp ứng yêu cầu của ứng dụng có hiệu suất cao.

Để giải thích chi tiết hơn về cách sử dụng cache trong hàm `getCachedData` như trên, chúng ta có thể sử dụng các công cụ cache như Redis hoặc Memcached để lưu trữ dữ liệu tạm thời, giảm thiểu việc truy cập cơ sở dữ liệu khi dữ liệu có sẵn trong cache.

Ở ví dụ dưới đây, chúng ta sẽ sử dụng Redis làm cache:

```typescript
import { Cache } from "@nestjs/common";
import { RedisService } from "nestjs-redis";
import { Data } from "./data.interface";

@Injectable()
export class DataService {
  constructor(private readonly redisService: RedisService) {}

  @Cache({ ttl: 60 }) // ttl: time-to-live, thời gian dữ liệu sẽ được lưu trong cache (60 giây)
  async getCachedData(): Promise<Data[]> {
    const redisClient = this.redisService.getClient();
    const cachedData = await redisClient.get("cachedData");

    if (cachedData) {
      return JSON.parse(cachedData);
    } else {
      // Nếu không có dữ liệu trong cache, truy vấn từ cơ sở dữ liệu
      const dataFromDB: Data[] = await this.fetchDataFromDatabase();

      // Lưu dữ liệu vào cache
      await redisClient.set("cachedData", JSON.stringify(dataFromDB));

      return dataFromDB;
    }
  }

  // Giả sử hàm này thực hiện truy vấn từ cơ sở dữ liệu
  private async fetchDataFromDatabase(): Promise<Data[]> {
    // Code để truy vấn và lấy dữ liệu từ cơ sở dữ liệu
    return [];
  }
}
```

Ở đây, `@Cache({ ttl: 60 })` được sử dụng để đánh dấu hàm `getCachedData` là một hàm cần được cache. Khi hàm này được gọi, nó sẽ kiểm tra xem liệu dữ liệu đã được lưu trong Redis cache hay không. Nếu có, nó sẽ trả về dữ liệu từ cache; nếu không, nó sẽ truy vấn dữ liệu từ cơ sở dữ liệu, sau đó lưu dữ liệu mới vào cache để sử dụng cho lần gọi tiếp theo.

Mục tiêu ở đây là giảm việc truy vấn cơ sở dữ liệu khi có thể sử dụng dữ liệu đã lưu trong cache, giúp cải thiện hiệu suất của ứng dụng.
