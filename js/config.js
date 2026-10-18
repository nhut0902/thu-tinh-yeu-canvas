// Code By NhutCoder Team · https://nhutcoderteam.io.vn
//
// ╔══════════════════════════════════════════════════════════════╗
// ║  CONFIG — SỬA FILE NÀY ĐỂ TÙY CHỈNH E-CARD                   ║
// ║                                                              ║
// ║  Chỉ cần đổi text trong ngoặc kép ("...") bên dưới.          ║
// ║  Không cần biết code, chỉ cần gõ tiếng Việt có dấu.          ║
// ║  Save file → deploy lại (upload lên GitHub/Vercel).         ║
// ║                                                              ║
// ║  Hướng dẫn chi tiết:                                        ║
// ║  1. name: Tên người nhận (NY / mẹ / vợ)                     ║
// ║  2. subtitle: Dòng chữ nhỏ dưới tên (tiếng Anh)             ║
// ║  3. englishTop: Dòng chữ nhỏ trên cùng (tiếng Anh)          ║
// ║  4. wish: Lời chúc dài — sẽ hiện bằng hiệu ứng đánh máy     ║
// ║  5. signature: Chữ ký người gửi                             ║
// ╚══════════════════════════════════════════════════════════════╝

var ECARD_CONFIG = {
  // === Tên người nhận ===
  name: "Hồng Lạc",

  // === Dòng chữ nhỏ dưới tên (tiếng Anh, trang trí) ===
  subtitle: "A Love Letter Just For You",

  // === Dòng chữ trên cùng (tiếng Anh, nhỏ, mờ) ===
  englishTop: "A Special Message For You",

  // === Lời chúc dài (hiện bằng hiệu ứng đánh máy char-by-char) ===
  // Viết dài càng tốt — 200-500 ký tự. Tiếng Việt có dấu.
  wish: "Nhân ngày 20/10, chúc em luôn xinh đẹp, rạng rỡ như đóa hồng đầu mùa. Mong mỗi ngày của em đều ngập tràn tiếng cười và thật nhiều yêu thương. Cảm ơn em đã xuất hiện trong cuộc đời anh, khiến thế giới này dịu dàng hơn rất nhiều. Em là điều tốt đẹp nhất mà anh từng có. Dù thời gian có trôi qua, dù everything changes, anh vẫn sẽ ở đây, yêu em như ngày đầu tiên. Yêu em hơn những gì anh có thể nói lên.",

  // === Chữ ký (người gửi) ===
  signature: "— Một người luôn nghĩ đến em ❤"
};

// Export for module environments (if used with bundler)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ECARD_CONFIG;
}
