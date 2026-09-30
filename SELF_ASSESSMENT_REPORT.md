# Bảng Đánh Giá Sơ Bộ (Self Assessment Report)
# Link repository: https://github.com/AnhSangNguyen0102/wad-cart-starter.git
## 1. Bảng Điểm Tổng Kết

| Tiêu chí                                      | Điểm tối đa | Điểm đạt được |
| :-------------------------------------------- | :---------: | :-----------: |
| 1. Behaviour (Hành vi của logic code)         |     30      |      30       |
| 2. Tests (Kiểm thử)                           |     20      |      20       |
| 3. The harness (Hệ thống công cụ & Quy trình) |     20      |      20       |
| 4. The brief (Bản đặc tả gửi cho AI)          |     15      |      15       |
| 5. AI-LOG.md (Nhật ký làm việc với AI)        |     15      |      15       |
| **Tổng cộng**                                 |   **100**   |    **100**    |

## 2. Nhận Xét Chi Tiết (Evidence)

### 1. Behaviour (30/30)

- **Đánh giá:** Mọi quy tắc trong đặc tả đều được tuân thủ chính xác. Luồng chuẩn và các trường hợp ngoại lệ đều được xử lý đúng đắn. Hàm trả về kiểu số (number) nguyên (đã làm tròn).
- **Minh chứng:**
  - Logic tính tổng và làm tròn trả về số: `return Math.round(subtotal + vat + shipping);`.
  - Miễn phí vận chuyển ở ngưỡng: `const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;`.
  - Ngoại lệ ném `RangeError`:
    ```javascript
    if (item.price < 0) throw new RangeError("Price cannot be negative");
    if (!Number.isInteger(item.qty) || item.qty <= 0)
      throw new RangeError("Quantity must be a positive integer");
    ```

### 2. Tests (20/20)

- **Đánh giá:** Lệnh `npm test` chạy thành công (pass toàn bộ) và có bao phủ tất cả các trường hợp được yêu cầu: ví dụ mẫu, giỏ rỗng, ngưỡng ship, và lỗi dữ liệu. Đặc biệt, test case số 5 đã được tách ra thành 2 test riêng biệt (5.1 và 5.2) để đảm bảo tuân thủ tuyệt đối quy tắc "Mỗi test case chỉ được fail vì một lý do duy nhất".
- **Minh chứng:** File `cart.test.js`, test case thứ 5 được tách rời:
  ```javascript
  test('a zero quantity throws RangeError', ...);
  test('a non-integer quantity throws RangeError', ...);
  ```

### 3. The harness (20/20)

- **Đánh giá:** Dự án có thiết lập file quy tắc (`.antigravityrules`) đầy đủ, đồng thời trang bị cổng kiểm duyệt CI tự động với `npm run lint` (dùng prettier) và `npm test` chạy trên GitHub Actions mỗi khi push code.
- **Minh chứng:**
  - `.antigravityrules` có đủ quy tắc `NEVER` và công nghệ rõ ràng.
  - `package.json` đã bổ sung thư viện linter/formatter `prettier` và scripts `lint`, `format`.
  - Có file CI pipeline tại `.github/workflows/ci.yml`.

### 4. The brief (15/15)

- **Đánh giá:** Bản `BRIEF.md` rất chất lượng và hoàn chỉnh. Chỉ định rõ ràng đầu vào, đầu ra, các trường hợp ngoại lệ, file cần sửa và ràng buộc (không dùng thư viện ngoài).
- **Minh chứng:**
  - File cần sửa: `Chỉ được phép chỉnh sửa nội dung bên trong file src/cart.js.`
  - Đầu ra: `Hàm phải trả về một số nguyên (number) làm tròn... Nếu giỏ hàng rỗng... trả về 0.`
  - Lỗi: `Hàm phải chủ động ném ra RangeError...`

### 5. AI-LOG.md (15/15)

- **Đánh giá:** Ghi chép đầy đủ chi tiết lịch sử dùng AI. Khai báo trung thực, đúng cấu trúc, ghi rõ phần nào do AI tự viết, phần nào giữ nguyên.
- **Minh chứng:** File `AI-LOG.md` có đầy đủ các khai báo các câu hỏi được trợ giúp từ AI.
