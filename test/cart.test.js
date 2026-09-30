import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal } from "../src/cart.js";

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test("the example from the slides", () => {
  const items = [
    { name: "Áo thun", price: 180000, qty: 2 },
    { name: "Sổ tay", price: 45000, qty: 1 },
  ];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal(items, options), 467400);
});

// 2. Giỏ hàng rỗng (Empty cart returns 0)
test("an empty cart returns 0", () => {
  const items = [];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal(items, options), 0);
});

// 3. Ngưỡng miễn phí vận chuyển (Free shipping threshold)
test("free shipping at the threshold", () => {
  const items = [
    { name: "Giày thể thao", price: 500000, qty: 1 }, // subtotal = 500000 (Vừa đủ ngưỡng)
  ];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  // Tổng = 500000 + 40000 (VAT 8%) + 0 (Phí ship) = 540000
  assert.equal(cartTotal(items, options), 540000);
});

// 4. Ngoại lệ 1: Giá âm ném lỗi RangeError
test("a negative price throws RangeError", () => {
  const items = [{ name: "Lỗi giá", price: -50000, qty: 1 }];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  // Sử dụng assert.throws bằng cách bọc hàm cần test trong một callback function
  assert.throws(() => cartTotal(items, options), RangeError);
});

// 5. Ngoại lệ 2.1: Số lượng bằng 0 ném lỗi RangeError
test("a zero quantity throws RangeError", () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.throws(
    () => cartTotal([{ name: "Lỗi", price: 10000, qty: 0 }], options),
    RangeError,
  );
});

// 5. Ngoại lệ 2.2: Số lượng thập phân ném lỗi RangeError
test("a non-integer quantity throws RangeError", () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.throws(
    () => cartTotal([{ name: "Lỗi", price: 10000, qty: 1.5 }], options),
    RangeError,
  );
});
