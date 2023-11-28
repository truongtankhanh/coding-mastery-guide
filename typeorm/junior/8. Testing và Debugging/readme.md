Testing và Debugging là hai khía cạnh quan trọng trong việc phát triển ứng dụng sử dụng TypeORM trong NestJS. Hãy xem xét cách thực hiện Unit Testing và Debugging để đảm bảo ứng dụng của bạn ổn định và hiệu quả.

---

1. [Unit Testing trong NestJS](#unit-testing-trong-nestjs)
   - [Viết Test Cases](#1-viết-test-cases)
   - [Ví dụ về Unit Testing trong NestJS](#2-ví-dụ-về-unit-testing-trong-nestjs)
2. [Debugging trong NestJS](#debugging-trong-nestjs)
   - [Sử Dụng Công Cụ Debug](#1-sử-dụng-công-cụ-debug)
   - [Ví dụ về Debugging trong NestJS](#2-ví-dụ-về-debugging-trong-nestjs)

---

### Unit Testing trong NestJS:

#### **1. Viết Test Cases:**

- Viết test cases để kiểm tra các chức năng của ứng dụng liên quan đến cơ sở dữ liệu. Sử dụng các thư viện như Jest để thực hiện việc này.

---

#### **2. Ví dụ về Unit Testing trong NestJS:**

```typescript
// post.service.spec.ts (file test)
import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { PostService } from "./post.service";
import { Post } from "./post.entity";

describe("PostService", () => {
  let postService: PostService;

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    // Các phương thức khác cần được mock tương tự
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useValue: mockRepository,
        },
      ],
    }).compile();

    postService = module.get<PostService>(PostService);
  });

  it("should return all posts", async () => {
    const expectedPosts = [{ id: 1, title: "Post 1", content: "Content 1" }];
    mockRepository.find.mockReturnValueOnce(expectedPosts);

    const result = await postService.getAllPosts();

    expect(result).toEqual(expectedPosts);
    expect(mockRepository.find).toHaveBeenCalled();
  });

  // Các test cases khác có thể được viết tương tự
});
```

---

### Debugging trong NestJS:

#### **1. Sử Dụng Công Cụ Debug:**

- Sử dụng các công cụ debug như VSCode Debugger, hoặc cách thông thường là sử dụng `console.log()` để theo dõi các giá trị và quá trình thực thi code.

---

#### **2. Ví dụ về Debugging trong NestJS:**

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

  async getAllPosts(): Promise<Post[]> {
    try {
      const posts = await this.postRepository.find();
      console.log("Fetched posts:", posts);
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
}
```

---

Trong ví dụ này, chúng ta sử dụng Jest để viết test cases cho `PostService` và sử dụng `console.log()` và `console.error()` để debug code trong service.

---
