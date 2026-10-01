import { Be_Vietnam_Pro, Inter } from 'next/font/google'
import './globals.css'

const display = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'CoPanel — Trình quản lý máy chủ game trên Windows',
  description:
    'CoPanel là ứng dụng Windows quản lý máy chủ game trên nền tảng dịch vụ hosting game (Pterodactyl, Calagopus): console realtime, tệp tin, sao lưu, lịch trình, người chơi và kho đồ Minecraft. Miễn phí, không server trung gian.',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'CoPanel',
    title: 'CoPanel — Trình quản lý máy chủ game trên Windows',
    description:
      'Console realtime, tệp tin, sao lưu, người chơi và kho đồ Minecraft — trong một ứng dụng desktop miễn phí cho Pterodactyl & Calagopus.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/foxstudio-201/CoPanel/main/docs/screenshots/servers.png',
        width: 2132,
        height: 1380,
        alt: 'CoPanel — danh sách máy chủ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoPanel — Trình quản lý máy chủ game trên Windows',
    description:
      'Console realtime, tệp tin, sao lưu, người chơi và kho đồ Minecraft — trong một ứng dụng desktop miễn phí cho Pterodactyl & Calagopus.',
  },
  icons: {
    icon: '/img/favicon.png',
    apple: '/img/apple-touch-icon.png',
  },
}

export const viewport = {
  themeColor: '#08080d',
  width: 'device-width',
  initialScale: 1,
}

const THEME_BOOT = `try{var t=localStorage.getItem('copanel-web-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`

export default function RootLayout({ children }) {
  return (
    <html lang="vi" data-theme="dark" className={`${display.variable} ${body.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        {children}
      </body>
    </html>
  )
}
