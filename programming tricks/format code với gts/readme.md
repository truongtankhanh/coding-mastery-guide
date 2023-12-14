Để sử dụng `gts` (Google TypeScript Style) trong dự án của bạn để tự động format mã nguồn TypeScript, bạn có thể làm theo các bước sau:

---

1. **Cài đặt `gts` và TypeScript:**

```bash
npm install --save-dev gts typescript
```

---

2. **Khởi tạo cấu hình `gts`:**

```bash
npx gts init
```

Lệnh này sẽ tạo một số tệp mới trong dự án của bạn, bao gồm `tslint.json`, `tsconfig.json` và một số tệp khác. `tslint.json` và `tsconfig.json` sẽ được cấu hình theo quy tắc của Google TypeScript Style.

---

3. **Thêm scripts vào `package.json`:**

Mở file `package.json` và thêm các scripts sau:

```json
{
  "scripts": {
    "lint": "gts check",
    "fix": "gts fix"
  }
}
```

- `npm run lint`: Kiểm tra xem mã nguồn của bạn có tuân thủ quy tắc không.
- `npm run fix`: Tự động sửa các vấn đề có thể tự động được sửa.

---

4. **Sử dụng `gts` để format mã nguồn TypeScript:**

Chạy lệnh sau để kiểm tra và sửa các vấn đề trong mã nguồn của bạn:

```bash
npm run lint
npm run fix
```

---

Nhớ rằng `gts` sẽ áp dụng các quy tắc format của Google vào mã nguồn của bạn. Nếu bạn không muốn áp dụng một số quy tắc cụ thể, bạn có thể chỉnh sửa `tslint.json` để tùy chỉnh quy tắc linting theo ý của bạn.

---
