'use client'

import { useEffect, useRef, useState } from 'react'

const SHOTS = [
  { key: 'overview', label: 'Tổng quan', alt: 'Trang tổng quan máy chủ trong CoPanel', caption: 'Thông số RAM, CPU, Disk và TPS theo thời gian thực cùng lịch sử hoạt động.' },
  { key: 'console', label: 'Console', alt: 'Console thời gian thực trong CoPanel', caption: 'Console thời gian thực với log màu, tìm kiếm và gửi lệnh trực tiếp.' },
  { key: 'players', label: 'Người chơi', alt: 'Danh sách người chơi trong CoPanel', caption: 'Danh sách người chơi kèm avatar, trạng thái online, OP, whitelist và ban.' },
  { key: 'inventory', label: 'Kho đồ', alt: 'Kho đồ người chơi trong CoPanel', caption: 'Kho đồ Minecraft — give hoặc xoá vật phẩm ngay trong ứng dụng.' },
  { key: 'files', label: 'Tệp tin', alt: 'Trình quản lý tệp tin trong CoPanel', caption: 'Trình quản lý tệp tin đầy đủ thao tác: tải lên, nén, chmod, copy…' },
  { key: 'system', label: 'Hệ thống', alt: 'Trang hệ thống và tuỳ chọn trong CoPanel', caption: 'Trang Hệ thống: kết nối, giao diện sáng/tối, ngôn ngữ và CPU threads.' },
  { key: 'home-light', label: 'Bản sáng', alt: 'Giao diện sáng của CoPanel', caption: 'Giao diện sáng với danh sách máy chủ — dễ nhìn vào ban ngày.' },
]

export default function Gallery() {
  const [active, setActive] = useState('overview')
  const [auto, setAuto] = useState(true)
  const tabRefs = useRef([])
  const hoverRef = useRef(false)

  // auto-advance the showcase until the visitor interacts with it
  useEffect(() => {
    if (!auto) return
    const id = setInterval(() => {
      if (hoverRef.current || document.hidden) return
      setActive((prev) => {
        const i = SHOTS.findIndex((s) => s.key === prev)
        return SHOTS[(i + 1) % SHOTS.length].key
      })
    }, 6000)
    return () => clearInterval(id)
  }, [auto])

  const onKeyDown = (e, idx) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    setAuto(false)
    const next = (idx + dir + SHOTS.length) % SHOTS.length
    setActive(SHOTS[next].key)
    tabRefs.current[next]?.focus()
  }

  const current = SHOTS.find((s) => s.key === active)

  return (
    <div
      className="gallery reveal"
      onMouseEnter={() => {
        hoverRef.current = true
      }}
      onMouseLeave={() => {
        hoverRef.current = false
      }}
      onPointerDownCapture={() => setAuto(false)}
    >
      <div className="tabs" role="tablist" aria-label="Chọn màn hình">
        {SHOTS.map((s, i) => (
          <button
            key={s.key}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            role="tab"
            type="button"
            className={'tab' + (active === s.key ? ' is-active' : '')}
            aria-selected={active === s.key}
            aria-controls="galleryStage"
            onClick={() => setActive(s.key)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <figure className="stage" id="galleryStage" role="tabpanel" aria-label="Ảnh xem trước">
        {SHOTS.map((s) => (
          <img
            key={s.key}
            className={'shot' + (active === s.key ? ' is-active' : '')}
            src={`/img/screens/${s.key}.webp`}
            width="1600"
            height="1036"
            alt={s.alt}
            loading="lazy"
            decoding="async"
          />
        ))}
        <figcaption className="stage-caption">{current.caption}</figcaption>
      </figure>
    </div>
  )
}
