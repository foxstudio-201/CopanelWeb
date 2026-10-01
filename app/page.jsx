import Nav from '../components/Nav'
import Gallery from '../components/Gallery'
import Reveal from '../components/Reveal'
import PointerFX from '../components/PointerFX'
import Icon from '../components/Icon'
import Sprite from '../components/Sprite'
import { getLatestRelease, REPO_URL, RELEASES_URL, LICENSE_URL, README_URL } from '../lib/release'

export const revalidate = 3600

export default async function Page() {
  const rel = await getLatestRelease()

  return (
    <>
      <link rel="preload" as="image" href="/img/screens/servers.webp" />
      <Sprite />
      <a className="skip-link" href="#main">
        Bỏ qua tới nội dung
      </a>
      <Nav />

      <main id="main">
        {/* ============================= HERO ============================= */}
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true">
            <div className="blob blob-a" />
            <div className="blob blob-b" />
            <div className="grid-lines" />
          </div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="pill">
                <span className="pill-dot" aria-hidden="true" />
                <span id="heroVersion">{rel.tag}</span>
                <span className="pill-sep">·</span>Windows 10/11<span className="pill-sep">·</span>Miễn phí
              </span>
              <h1>
                Quản lý máy chủ game
                <br />
                <span className="grad-text">ngay trên desktop</span>
              </h1>
              <p className="lead">
                CoPanel kết nối trực tiếp tới <strong>nền tảng dịch vụ hosting game</strong> như Pterodactyl,
                Calagopus — console realtime, tệp tin, sao lưu, lịch trình, người chơi và kho đồ Minecraft… tất cả
                trong một ứng dụng Windows gọn nhẹ. Không tài khoản trung gian, dữ liệu không rời khỏi máy bạn.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary btn-lg" id="heroDownload" href={rel.setupUrl}>
                  <Icon name="download" />
                  <span className="btn-label">Tải cho Windows</span>
                  <span className="btn-sub">{rel.setupSize ? `${rel.setupSize} · Bản cài đặt` : 'Bản cài đặt'}</span>
                </a>
                <a className="btn btn-ghost btn-lg" href={REPO_URL} target="_blank" rel="noopener">
                  <Icon name="github" className="ic ic-fill" />
                  Xem trên GitHub
                </a>
              </div>
              <p className="hero-note">
                Có cả <a href="#tai-ve">bản portable</a> không cần cài · Kèm trang điều khoản sử dụng khi cài đặt
              </p>
            </div>
            <div className="hero-visual">
              <div className="window">
                <div className="window-bar" aria-hidden="true">
                  <span className="wdot" />
                  <span className="wdot" />
                  <span className="wdot" />
                  <span className="window-title">CoPanel — Danh sách server</span>
                </div>
                <img
                  src="/img/screens/servers.webp"
                  width="1600"
                  height="1036"
                  alt="Danh sách máy chủ trong CoPanel với ba máy chủ demo"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <span className="chip chip-a">
                <Icon name="zap" />
                Console realtime
              </span>
              <span className="chip chip-b">
                <Icon name="backpack" />
                Kho đồ Minecraft
              </span>
            </div>
          </div>
          <div className="marquee-wrap" aria-hidden="true">
            <div className="marquee-track">
              <span>Console realtime</span>
              <i />
              <span>Tệp tin</span>
              <i />
              <span>Kho đồ Minecraft</span>
              <i />
              <span>Sao lưu &amp; khôi phục</span>
              <i />
              <span>Lịch trình cron</span>
              <i />
              <span>Cơ sở dữ liệu</span>
              <i />
              <span>Quản lý người chơi</span>
              <i />
              <span>Pterodactyl</span>
              <i />
              <span>Calagopus</span>
              <i />
              <span>Chế độ demo</span>
              <i />
              <span>Sáng / Tối</span>
              <i />
              <span>Tiếng Việt &amp; English</span>
              <i />
              <span>Console realtime</span>
              <i />
              <span>Tệp tin</span>
              <i />
              <span>Kho đồ Minecraft</span>
              <i />
              <span>Sao lưu &amp; khôi phục</span>
              <i />
              <span>Lịch trình cron</span>
              <i />
              <span>Cơ sở dữ liệu</span>
              <i />
              <span>Quản lý người chơi</span>
              <i />
              <span>Pterodactyl</span>
              <i />
              <span>Calagopus</span>
              <i />
              <span>Chế độ demo</span>
              <i />
              <span>Sáng / Tối</span>
              <i />
              <span>Tiếng Việt &amp; English</span>
              <i />
            </div>
          </div>
        </section>

        {/* ============================= FEATURES ============================= */}
        <section className="section" id="tinh-nang">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow reveal">Tính năng</span>
              <h2 className="reveal">
                Mọi thứ để vận hành máy chủ,
                <br /> trong một cửa sổ
              </h2>
              <p className="section-lead reveal">
                Từ bật/tắt máy chủ, đọc log, sửa tệp, sao lưu… đến quản lý người chơi và kho đồ — không cần mở trình
                duyệt.
              </p>
            </header>
            <div className="feature-grid">
              <article className="card feature reveal">
                <span className="icon-box">
                  <Icon name="terminal" />
                </span>
                <h3>Console thời gian thực</h3>
                <p>Log trực tiếp qua WebSocket, gửi lệnh, tìm kiếm trong console và tự kết nối lại khi mạng chập chờn.</p>
              </article>
              <article className="card feature reveal">
                <span className="icon-box">
                  <Icon name="folder" />
                </span>
                <h3>Quản lý tệp tin</h3>
                <p>Duyệt thư mục, tải lên / tải xuống, nén – giải nén, chmod, copy / move như một trình quản lý file thực thụ.</p>
              </article>
              <article className="card feature reveal">
                <span className="icon-box">
                  <Icon name="backpack" />
                </span>
                <h3>Kho đồ người chơi</h3>
                <p>Lưới 9×4 như Minecraft, give / xoá vật phẩm với texture thật, ghi thẳng vào file dữ liệu NBT.</p>
                <a className="card-link" href="#kho-do">
                  Tìm hiểu thêm
                  <Icon name="arrow" />
                </a>
              </article>
              <article className="card feature reveal">
                <span className="icon-box">
                  <Icon name="users" />
                </span>
                <h3>Người chơi &amp; online</h3>
                <p>Danh sách kèm avatar skin, OP / whitelist / ban; số người online đo bằng Server List Ping bên ngoài.</p>
              </article>
              <article className="card feature reveal">
                <span className="icon-box">
                  <Icon name="drive" />
                </span>
                <h3>Sao lưu an toàn</h3>
                <p>Tạo, tải về, khoá và khôi phục bản sao lưu; tuỳ chọn xoá sạch thư mục trước khi khôi phục.</p>
              </article>
              <article className="card feature reveal">
                <span className="icon-box">
                  <Icon name="clock" />
                </span>
                <h3>Lịch trình tự động</h3>
                <p>Cron với nhiều task mỗi lịch trình: khởi động lại, sao lưu, gửi lệnh… chạy đúng giờ như hẹn.</p>
              </article>
              <article className="card feature reveal">
                <span className="icon-box">
                  <Icon name="database" />
                </span>
                <h3>Cơ sở dữ liệu &amp; Mạng</h3>
                <p>Quản lý database (tạo / xoá / đổi mật khẩu) và cổng kết nối (allocations) ngay trong ứng dụng.</p>
              </article>
              <article className="card feature reveal">
                <span className="icon-box">
                  <Icon name="sliders" />
                </span>
                <h3>Giao diện &amp; ngôn ngữ</h3>
                <p>Sáng / Tối chuyển mượt, Tiếng Việt &amp; English, hiệu ứng tinh tế xuyên suốt ứng dụng.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================= SPOTLIGHT ============================= */}
        <section className="section spotlight" id="kho-do">
          <div className="container spotlight-grid">
            <div className="spotlight-copy">
              <span className="eyebrow reveal">Nổi bật</span>
              <h2 className="reveal">Kho đồ Minecraft, xem và sửa ngay trong app</h2>
              <p className="section-lead reveal">
                CoPanel đọc dữ liệu người chơi từ thế giới của máy chủ và dựng lại kho đồ thành lưới đúng như trong
                game. Give thêm vật phẩm, xoá bớt, rồi lưu — mọi thứ an toàn.
              </p>
              <ul className="check-list">
                <li className="reveal">
                  <Icon name="check" />
                  Lưới 9×4 đúng kiểu Minecraft, kèm giáp và tay trái
                </li>
                <li className="reveal">
                  <Icon name="check" />
                  Give / xoá vật phẩm — chọn id, số lượng và vị trí ô
                </li>
                <li className="reveal">
                  <Icon name="check" />
                  Texture vật phẩm thật, tải trực tiếp từ dữ liệu Minecraft
                </li>
                <li className="reveal">
                  <Icon name="check" />
                  Ghi thẳng vào file NBT, giữ nguyên định dạng gốc của thế giới
                </li>
                <li className="reveal">
                  <Icon name="check" />
                  Tự tạo bản sao lưu (.bak) trước mỗi lần ghi
                </li>
                <li className="reveal">
                  <Icon name="check" />
                  Chặn lưu khi người chơi đang online — tránh mất dữ liệu
                </li>
              </ul>
            </div>
            <div className="spotlight-visual reveal">
              <div className="window window-glow">
                <div className="window-bar" aria-hidden="true">
                  <span className="wdot" />
                  <span className="wdot" />
                  <span className="wdot" />
                  <span className="window-title">Kho đồ · Steve</span>
                </div>
                <img
                  src="/img/screens/inventory.webp"
                  width="1600"
                  height="1036"
                  alt="Kho đồ của người chơi trong CoPanel với lưới vật phẩm 9x4"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================= GALLERY ============================= */}
        <section className="section" id="giao-dien">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow reveal">Giao diện</span>
              <h2 className="reveal">Một ứng dụng, toàn bộ giao diện</h2>
              <p className="section-lead reveal">Ảnh chụp thật từ ứng dụng — bấm thử từng trang bên dưới.</p>
            </header>
            <Gallery />
          </div>
        </section>

        {/* ============================= SUPPORT ============================= */}
        <section className="section" id="ho-tro">
          <div className="container">
            <header className="section-head">
              <span className="eyebrow reveal">Hỗ trợ panel</span>
              <h2 className="reveal">Kết nối mọi panel tương thích</h2>
              <p className="section-lead reveal">
                CoPanel tự nhận diện khác biệt API của từng panel — bạn chỉ cần địa chỉ và Client API Key.
              </p>
            </header>
            <div className="panel-grid">
              <article className="card panel-card reveal">
                <span className="icon-box panel-ico panel-ico-violet">
                  <Icon name="plug" />
                </span>
                <div className="panel-head">
                  <h3>Pterodactyl</h3>
                  <span className="tag">Phổ biến</span>
                </div>
                <p>Panel quản lý máy chủ game mã nguồn mở phổ biến nhất, chạy trên Docker + Wings. Hỗ trợ đầy đủ API client.</p>
                <p className="key-note">
                  <Icon name="shield" />
                  Đăng nhập bằng Client API Key <code>ptlc_…</code>
                </p>
              </article>
              <article className="card panel-card reveal">
                <span className="icon-box panel-ico panel-ico-cyan">
                  <Icon name="plug" />
                </span>
                <div className="panel-head">
                  <h3>Calagopus</h3>
                  <span className="tag tag-cyan">Beta</span>
                </div>
                <p>Bản fork của Pterodactyl với daemon và giao diện riêng, tương thích API. CoPanel đã hỗ trợ toàn bộ các trang.</p>
                <p className="key-note">
                  <Icon name="shield" />
                  Key 48 ký tự <code>c7sp_…</code> — nhớ cấp quyền cho key
                </p>
              </article>
              <article className="card wide-card">
                <div className="wide-item reveal">
                  <span className="icon-box">
                    <Icon name="shield" />
                  </span>
                  <div>
                    <h3>Chỉ cần Client API Key</h3>
                    <p>
                      Không nhập mật khẩu. Key được lưu trên máy và mã hoá bằng khoá của hệ điều hành; mọi yêu cầu đi
                      thẳng từ máy bạn tới panel — không qua server trung gian.
                    </p>
                  </div>
                </div>
                <div className="wide-item reveal">
                  <span className="icon-box icon-box-accent">
                    <Icon name="zap" />
                  </span>
                  <div>
                    <h3>Chế độ Demo</h3>
                    <p>
                      Chưa có panel? Mở app và chọn “Dùng thử ngay” — toàn bộ giao diện chạy với dữ liệu mẫu: máy chủ,
                      console, người chơi, kho đồ… không cần đăng nhập.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================= DOWNLOAD ============================= */}
        <section className="section download" id="tai-ve">
          <div className="container">
            <div className="dl-card">
              <div className="dl-copy">
                <h2 className="reveal">Tải CoPanel</h2>
                <p className="section-lead reveal">Windows 10/11 (64-bit) · Miễn phí · Bản phát hành chính thức từ GitHub.</p>
                <div className="cta-row reveal">
                  <a className="btn btn-primary btn-lg" id="dlSetup" href={rel.setupUrl}>
                    <Icon name="download" />
                    <span className="btn-label">Tải bản cài đặt</span>
                    <span className="btn-sub">{rel.setupSize || '.exe'}</span>
                  </a>
                  <a className="btn btn-ghost btn-lg" id="dlPortable" href={rel.portableUrl}>
                    <Icon name="download" />
                    Bản portable
                  </a>
                </div>
                <ul className="meta-list reveal">
                  <li>
                    <Icon name="windows" className="ic ic-fill" />
                    Windows 10 / 11 — 64-bit
                  </li>
                  <li>
                    <Icon name="monitor" />
                    Phiên bản <strong id="dlVersion">{rel.version}</strong>
                  </li>
                  <li>
                    <Icon name="check" />
                    Có trang điều khoản sử dụng khi cài
                  </li>
                </ul>
                <p className="dl-links reveal">
                  <a href={RELEASES_URL} target="_blank" rel="noopener">
                    Tất cả bản phát hành
                    <Icon name="external" />
                  </a>
                  <a href={LICENSE_URL} target="_blank" rel="noopener">
                    Điều khoản sử dụng
                    <Icon name="external" />
                  </a>
                  <a href={REPO_URL} target="_blank" rel="noopener">
                    Mã nguồn
                    <Icon name="external" />
                  </a>
                </p>
              </div>
              <div className="dl-visual reveal" aria-hidden="true">
                <img src="/img/screens/system.webp" width="1600" height="1036" alt="" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================= FAQ ============================= */}
        <section className="section" id="faq">
          <div className="container faq-wrap">
            <header className="section-head">
              <span className="eyebrow reveal">FAQ</span>
              <h2 className="reveal">Câu hỏi thường gặp</h2>
            </header>
            <div className="faq-list">
              <details className="faq-item reveal">
                <summary>
                  Cần tài khoản hay máy chủ trung gian nào không?
                  <Icon name="chev" className="ic faq-chev" />
                </summary>
                <div className="faq-body">
                  <p>
                    Không. CoPanel chỉ là ứng dụng client — bạn nhập địa chỉ panel và Client API Key của chính mình, mọi
                    dữ liệu đi thẳng từ máy bạn tới panel. Không có server trung gian, không thu thập dữ liệu.
                  </p>
                </div>
              </details>
              <details className="faq-item reveal">
                <summary>
                  Tôi cần gì để kết nối?
                  <Icon name="chev" className="ic faq-chev" />
                </summary>
                <div className="faq-body">
                  <p>Một panel Pterodactyl hoặc Calagopus mà bạn có quyền truy cập, cùng một Client API Key:</p>
                  <ul>
                    <li>
                      <strong>Pterodactyl:</strong> <code>Account → API Credentials → Create API Key</code> (key bắt đầu
                      bằng <code>ptlc_</code>).
                    </li>
                    <li>
                      <strong>Calagopus:</strong> <code>Tài khoản → API Keys → Create</code> — key dài 48 ký tự, bắt đầu
                      bằng <code>c7sp_</code>; nhớ cấp quyền cho key (tối thiểu <code>servers.read</code>).
                    </li>
                  </ul>
                </div>
              </details>
              <details className="faq-item reveal">
                <summary>
                  Kho đồ người chơi hoạt động thế nào?
                  <Icon name="chev" className="ic faq-chev" />
                </summary>
                <div className="faq-body">
                  <p>
                    CoPanel đọc file dữ liệu người chơi (<code>.dat</code> dạng NBT) trong thư mục thế giới và hiển thị
                    thành lưới như trong game. Khi bạn give/xoá vật phẩm và bấm lưu, app tự tạo bản sao lưu rồi ghi lại
                    đúng định dạng gốc. Nếu người chơi đang online, việc lưu sẽ bị chặn để tránh mất dữ liệu.
                  </p>
                </div>
              </details>
              <details className="faq-item reveal">
                <summary>
                  Dùng thử mà không có panel được không?
                  <Icon name="chev" className="ic faq-chev" />
                </summary>
                <div className="faq-body">
                  <p>
                    Được — ở màn hình kết nối chọn “Dùng thử ngay”. Toàn bộ giao diện sẽ chạy với dữ liệu mẫu (máy chủ,
                    console, người chơi, kho đồ…) như một kết nối thật, không cần đăng nhập.
                  </p>
                </div>
              </details>
              <details className="faq-item reveal">
                <summary>
                  Bản cài đặt và bản portable khác gì nhau?
                  <Icon name="chev" className="ic faq-chev" />
                </summary>
                <div className="faq-body">
                  <p>
                    Bản cài đặt (Setup) tạo shortcut, kèm trang điều khoản sử dụng và trình gỡ cài đặt. Bản portable chạy
                    trực tiếp, không cần cài — tiện mang theo USB.
                  </p>
                </div>
              </details>
              <details className="faq-item reveal">
                <summary>
                  CoPanel có chạy trên macOS hay Linux không?
                  <Icon name="chev" className="ic faq-chev" />
                </summary>
                <div className="faq-body">
                  <p>Hiện tại CoPanel phát hành cho Windows 10/11 (64-bit).</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand reveal">
            <a className="brand" href="#top">
              <img src="/img/logo.png" alt="" width="30" height="30" />
              <span>CoPanel</span>
            </a>
            <p>Trình quản lý máy chủ game trên Windows. Miễn phí, mã nguồn công khai trên GitHub.</p>
          </div>
          <nav className="footer-col reveal" aria-label="Sản phẩm">
            <h3>Sản phẩm</h3>
            <a href="#tinh-nang">Tính năng</a>
            <a href="#kho-do">Kho đồ</a>
            <a href="#giao-dien">Giao diện</a>
            <a href="#tai-ve">Tải về</a>
          </nav>
          <nav className="footer-col reveal" aria-label="Tài nguyên">
            <h3>Tài nguyên</h3>
            <a href={REPO_URL} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={RELEASES_URL} target="_blank" rel="noopener">
              Bản phát hành
            </a>
            <a href={LICENSE_URL} target="_blank" rel="noopener">
              Điều khoản sử dụng
            </a>
            <a href={README_URL} target="_blank" rel="noopener">
              README
            </a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 CoPanel. Không liên kết chính thức với Pterodactyl hay Calagopus.</p>
          <p>
            Made for Windows · <a href="#top">Lên đầu trang</a>
          </p>
        </div>
      </footer>

      <Reveal />
      <PointerFX />
    </>
  )
}
