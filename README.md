# CoPanelWeb

Trang giới thiệu (landing page) cho **CoPanel** — trình quản lý máy chủ game trên Windows, kết nối tới panel Pterodactyl & Calagopus.

- **Next.js (App Router)** — nội dung và dữ liệu bản phát hành được server-render lúc build, revalidate mỗi 1 giờ (ISR).
- **Nút tải** trỏ thẳng file `.exe` của bản **GitHub Releases mới nhất** của [CoPanel](https://github.com/foxstudio-201/CoPanel); nếu API lỗi sẽ fallback về trang Releases.
- Giao diện Sáng/Tối, gallery ảnh chụp tương tác, hiệu ứng cuộn — tôn trọng `prefers-reduced-motion`.

## Chạy thử cục bộ

```bash
npm install
npm run dev
# mở http://localhost:3000
```

## Deploy Vercel

1. Push repo này lên GitHub.
2. Vào [vercel.com](https://vercel.com) → **Add New → Project** → import repo.
3. Giữ nguyên cấu hình mặc định (Vercel tự nhận Next.js) → **Deploy**.

## Cấu trúc

```
app/
  layout.jsx        # metadata (SEO/OG), font Be Vietnam Pro + Inter, boot theme
  page.jsx          # toàn bộ nội dung trang (server component)
  globals.css       # design tokens + giao diện
components/
  Nav.jsx           # thanh điều hướng: scrollspy, menu di động, đổi sáng/tối
  Gallery.jsx       # gallery ảnh chụp với tab
  Reveal.jsx        # hiệu ứng xuất hiện khi cuộn
  Icon.jsx/Sprite.jsx
lib/release.js      # lấy release mới nhất từ GitHub API (ISR 3600s + fallback)
public/img/         # logo, favicon, ảnh chụp WebP, og.png
```
