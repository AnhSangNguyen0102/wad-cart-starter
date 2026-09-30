# Đặc tả yêu cầu cho hàm cartTotal (Brief)

**Tác vụ (Task):**
Triển khai logic cho hàm cartTotal trong file src/cart.js nhằm tính toán tổng hóa đơn cho giỏ hàng.

**Ràng buộc (Constraints & Scope):**

- Ngôn ngữ: Plain JavaScript (Node.js).
- Không được phép sử dụng bất kỳ thư viện ngoài (external dependencies) nào cho phần logic.
- Chỉ được phép chỉnh sửa nội dung bên trong file src/cart.js.

**Đầu vào (Input Contract):**
Hàm cartTotal(items, options) nhận vào hai tham số:

1. items: Một mảng các đối tượng chứa thông tin mặt hàng, định dạng [{ name, price, qty }].
2. options: Một đối tượng chứa các cấu hình thuế và vận chuyển, định dạng { vatRate, freeShipFrom, shipFee }.

**Đầu ra (Output Contract):**

- Hàm phải trả về **một số nguyên** (number) làm tròn (tổng tiền thanh toán bao gồm tiền hàng, VAT và phí vận chuyển).
- Nếu giỏ hàng rỗng (items rỗng, null hoặc undefined), trả về (không tính thuế, không phí vận chuyển).
- Miễn phí vận chuyển (gán phí ship = 0) nếu tổng phụ (tiền hàng) lớn hơn hoặc bằng ngưỡng  
  reeShipFrom. Ngược lại, áp dụng phí shipFee.

**Xử lý ngoại lệ (Error Handling):**
Hàm phải chủ động ném ra RangeError trong các trường hợp dữ liệu đầu vào không hợp lệ sau:

- Giá tiền của một sản phẩm (price) bị âm.
- Số lượng của một sản phẩm (qty) không phải là số nguyên, bị âm, hoặc bằng 0.

**Nhiệm vụ (Task): Hãy đánh giá mã nguồn, hệ thống test, file cấu hình và các tài liệu tôi cung cấp dựa trên thang điểm (Rubric) chi tiết bên dưới.**

- Tổng điểm tối đa là 100. Hãy cung cấp điểm số cho từng phần và giải thích lý do cụ thể bằng minh chứng trích xuất từ bài làm của tôi.
  **THANG ĐIỂM ĐÁNH GIÁ (RUBRIC):**

1. Behaviour (Hành vi của logic code) — 30 điểm

- 26–30 điểm: Mọi quy tắc đều được tuân thủ: ví dụ mẫu trả về đúng kết quả 467400 dưới định dạng số (number), miễn phí ship đúng tại ngưỡng (threshold), giỏ hàng rỗng trả về 0, giá tiền bị âm hoặc số lượng không phải số nguyên thì ném ra lỗi RangeError.
- 18–25 điểm: Luồng chuẩn (happy path) và ngưỡng miễn phí ship được xử lý đúng; nhưng làm sai hoặc làm thiếu một trường hợp ngoại lệ (edge case).
- 8–17 điểm: Luồng chuẩn đúng; nhưng làm sai từ hai trường hợp ngoại lệ trở lên. Các bài làm sử dụng toFixed trả về định dạng chuỗi (string) thay vì số sẽ bị rơi vào khoảng điểm này.
- 0–7 điểm: Bài làm không tính ra đúng tổng tiền cho ví dụ mẫu.

2. Tests (Kiểm thử) 20 điểm

- 17–20 điểm: Lệnh npm test chạy thành công toàn bộ (pass) và bao phủ được: ví dụ mẫu, giỏ hàng rỗng, ngưỡng miễn phí ship, và cả hai trường hợp lỗi RangeError. Quan trọng: Mỗi test case chỉ được fail vì một lý do duy nhất.
- 11–16 điểm: Các test case chạy pass, bao phủ được luồng chuẩn cộng thêm một hoặc hai trường hợp ngoại lệ.
- 4–10 điểm: Chỉ viết một test case duy nhất, hoặc các test case đang kiểm tra cách triển khai code (implementation) thay vì kiểm tra đặc tả yêu cầu (specification).
- 0–3 điểm: Không có test case nào, hoặc lệnh npm test báo lỗi.

3. The harness (Hệ thống công cụ & Quy trình) 20 điểm

- 17–20 điểm: Có file quy tắc (rules file) rõ ràng đến mức một người lạ có thể làm theo (bao gồm tech stack, các câu lệnh, và ít nhất một quy định "never" - không được làm gì). Đồng thời có cổng kiểm duyệt hoạt động được (npm test kèm theo linter hoặc formatter) và có thiết lập CI tự động chạy khi push code
- 11–16 điểm: Có file quy tắc và cổng kiểm duyệt; nhưng không có CI, hoặc có file CI nhưng không chạy.
- 4–10 điểm: File quy tắc chỉ là bản copy nguyên xi từ slide bài giảng, không có bất kỳ thông tin nào tùy biến riêng cho dự án.
- 0–3 điểm: Không có file quy tắc.

4. The brief (Bản đặc tả gửi cho AI) — 15 điểm

- 13–15 điểm: Chỉ định rõ tên các file được phép can thiệp, yêu cầu đầu vào/đầu ra (contract), các trường hợp sinh lỗi, và ràng buộc "không dùng thư viện ngoài". Bản brief đủ chất lượng để một người lạ dùng nó đưa cho AI cũng ra được kết quả tương tự.
- 8–12 điểm: Mô tả được tác vụ và yêu cầu đầu vào/đầu ra; nhưng bỏ ngỏ các ràng buộc (constraints) và phạm vi bài toán (scope).
- 3–7 điểm: Brief chỉ có vỏn vẹn một câu lệnh chung chung, ví dụ: "write cartTotal".
- 0–2 điểm: Không nộp file brief.

5. AI-LOG.md (Nhật ký làm việc với AI) — 15 điểm

- 13–15 điểm: Ghi rõ đã dùng công cụ nào, AI tạo ra đoạn code nào, sinh viên đã thay đổi (changed) và từ chối (rejected) phần nào, và phần nào sinh viên tự viết bằng tay (by hand). Thông tin đủ chi tiết để đối chiếu trực tiếp với lịch sử thay đổi code (diff).
- 8–12 điểm: Khai báo trung thực nhưng quá sơ sài — chỉ ghi tên công cụ và tên tác vụ.
- 3–7 điểm: Chỉ ghi một dòng duy nhất, hoặc lộ rõ văn phong đối phó (viết hồi tưởng sau khi đã làm xong dự án).
- 0–2 điểm: Thiếu file log, hoặc nội dung khai báo mâu thuẫn hoàn toàn với lịch sử commit thực tế.  
  **Đầu ra yêu cầu (Output Format):**Đưa ra một bảng điểm tổng kết 5 tiêu chí vào file SELF_ASSESSMENT_REPORT.md. Dưới bảng, hãy viết một đoạn nhận xét chi tiết (Evidence) cho từng tiêu chí, trích dẫn trực tiếp dòng code hoặc cấu hình của tôi để biện luận cho số điểm bạn đưa ra.
