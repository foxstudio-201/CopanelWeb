const REPO = 'foxstudio-201/CoPanel'

export const REPO_URL = `https://github.com/${REPO}`
export const RELEASES_URL = `${REPO_URL}/releases`
export const LICENSE_URL = `${REPO_URL}/blob/main/build-resources/license_vi.txt`
export const README_URL = `${REPO_URL}/blob/main/README.md`

const fmtMB = (bytes) =>
  bytes ? (bytes / 1048576).toFixed(1).replace('.', ',') + ' MB' : ''

/**
 * Latest GitHub release of the CoPanel app — resolved at build time,
 * revalidated hourly (ISR), with a safe fallback to the Releases page.
 */
export async function getLatestRelease() {
  const fallback = {
    tag: 'v1.0.0',
    version: '1.0.0',
    setupUrl: RELEASES_URL,
    portableUrl: RELEASES_URL,
    setupSize: '',
    portableSize: '',
  }
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const rel = await res.json()
    const assets = Array.isArray(rel.assets) ? rel.assets : []
    const setup = assets.find((a) => /setup/i.test(a.name) && /\.exe$/i.test(a.name))
    const portable = assets.find((a) => /\.exe$/i.test(a.name) && !/setup/i.test(a.name))
    const tag = rel.tag_name || fallback.tag
    return {
      tag,
      version: tag.replace(/^v/, ''),
      setupUrl: setup?.browser_download_url || fallback.setupUrl,
      portableUrl: portable?.browser_download_url || fallback.portableUrl,
      setupSize: fmtMB(setup?.size),
      portableSize: fmtMB(portable?.size),
    }
  } catch {
    return fallback
  }
}
