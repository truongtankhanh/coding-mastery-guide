## Tìm hiểu về TypeScript Compiler API để tạo các công cụ tùy chỉnh hoặc thực hiện các phân tích mã tự động

TypeScript Compiler API cung cấp các công cụ cho phép tạo và tương tác với bộ biên dịch TypeScript (tsc) từ mã TypeScript. API này cho phép bạn tạo các công cụ tùy chỉnh như linter, formatter, hoặc thực hiện các phân tích mã tự động.

### Khái niệm:

TypeScript Compiler API là một tập hợp các modules JavaScript mà bạn có thể import và sử dụng trong mã TypeScript của bạn để tương tác với bộ biên dịch TypeScript. Bạn có thể sử dụng API này để phân tích cú pháp, kiểm tra kiểu, hoặc thậm chí biên dịch mã TypeScript.

### Ngữ cảnh:

Khi cần tạo các công cụ tự động để kiểm tra, phân tích, hoặc biên dịch mã TypeScript trong quy trình phát triển, hoặc khi cần tạo các công cụ tùy chỉnh như editor plugins.

### Cách sử dụng:

#### Ví dụ:

```typescript
import * as ts from "typescript";

const sourceCode = `
    function greet(name: string) {
        console.log("Hello, " + name);
    }
`;

const compilerOptions: ts.CompilerOptions = {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
};

const compilerHost: ts.CompilerHost = {
  getSourceFile: (fileName) => {
    return fileName === "module.ts"
      ? ts.createSourceFile(fileName, sourceCode, ts.ScriptTarget.ES5)
      : undefined;
  },
  writeFile: (name, text) => console.log(text),
  getDefaultLibFileName: () => "lib.d.ts",
  useCaseSensitiveFileNames: () => false,
  getCanonicalFileName: (fileName) => fileName,
  getCurrentDirectory: () => "",
  getNewLine: () => "\n",
};

const program = ts.createProgram(["module.ts"], compilerOptions, compilerHost);
const emitResult = program.emit();

if (emitResult.emitSkipped) {
  console.error("Biên dịch thất bại");
} else {
  console.log("Biên dịch thành công");
}
```

Trong ví dụ này, chúng ta sử dụng `typescript` module để tạo một chương trình biên dịch thông qua Compiler API. Chúng ta cung cấp mã nguồn (source code) và cấu hình compiler thông qua `CompilerOptions`. Sau đó, chúng ta tạo một `CompilerHost` để cung cấp thông tin về các file và các method cần thiết. Cuối cùng, chúng ta tạo một `Program` thông qua `createProgram()` và sử dụng nó để emit (biên dịch) mã.

Compiler API cung cấp một cách tiếp cận linh hoạt và mạnh mẽ để tương tác với bộ biên dịch TypeScript từ mã TypeScript của bạn. Điều này mở ra khả năng tạo ra các công cụ tùy chỉnh hoặc thực hiện các phân tích mã tự động một cách linh hoạt.

---
