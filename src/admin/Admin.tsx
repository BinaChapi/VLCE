import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react'
import { adminApi, getAdminToken, setAdminToken, type AdminSection } from '../api/admin'
import { ContentEditor } from './ContentEditor'
import { requiredContentSections } from '../contentSections'
import './admin.css'

type SectionDefinition = readonly [key: string, title: string, icon: string]
type SectionGroup = { label: string; sections: SectionDefinition[] }

const sectionGroups: SectionGroup[] = [
  {
    label: 'Website pages',
    sections: [
      ['home', 'Home', '⌂'],
      ['about', 'About', '◉'],
      ['programs', 'Programs', '▦'],
      ['impact', 'Impact & statistics', '↗'],
      ['contact', 'Contact', '✉'],
      ['donate', 'Donate', '♡'],
    ],
  },
  {
    label: 'Site settings',
    sections: [
      ['brand', 'Brand & organization', '◇'],
      ['meta', 'SEO metadata', '⌕'],
      ['nav', 'Navigation', '☰'],
      ['common', 'Shared labels', '⚙'],
      ['footer', 'Footer', '▤'],
    ],
  },
]

const sectionDescriptions: Record<string, string> = {
  home: 'Hero slides, featured programs, impact figures and homepage messaging.',
  about: 'Organization story, mission, values and community impact.',
  programs: 'Program descriptions, images, and related statistics.',
  impact: 'Achievements, milestones, timelines and impact metrics.',
  contact: 'Contact details, office information and contact form content.',
  donate: 'Donation instructions, payment details and supporter messaging.',
  brand: 'Organization name, logo, and brand assets.',
  meta: 'Page titles, descriptions and search preview content.',
  nav: 'Main navigation labels and links.',
  common: 'Shared labels, buttons and messages used across the website.',
  footer: 'Footer text, contact details and quick links.',
}

const titleFor = (key: string) =>
  sectionGroups.flatMap((group) => group.sections).find(([sectionKey]) => sectionKey === key)?.[1] ??
  key.replace(/[-_]/g, ' ').replace(/^./, (value) => value.toUpperCase())

function getErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback
}

function isAuthError(error: unknown) {
  return error instanceof Error && /session expired|authentication/i.test(error.message)
}

function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function submit(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    try {
      const result = await adminApi.login(email, password)
      setAdminToken(result.token)
      onLogin()
    } catch (loginError) {
      setError(getErrorMessage(loginError, 'Unable to sign in'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="admin-login-wrap">
      <form className="admin-login" onSubmit={submit}>
        <div className="admin-mark">VL</div>
        <p className="eyebrow">VILLAGE OF LIGHT</p>
        <h1>Admin sign in</h1>
        <p className="login-copy">Manage published website content in English and Amharic.</p>
        {error && <div className="notice error-notice">{error}</div>}
        <label className="field">
          <span>Email address</span>
          <input
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="field">
          <span>Password</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button className="primary-button full-width" disabled={busy}>
          {busy ? 'Signing in...' : 'Sign in securely'}
        </button>
        <small className="muted login-foot">Admin credentials are configured on the API server.</small>
      </form>
    </div>
  )
}

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(Boolean(getAdminToken()))
  const [sections, setSections] = useState<AdminSection[]>([])
  const [activeKey, setActiveKey] = useState('home')
  const [draft, setDraft] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [notice, setNotice] = useState<{ kind: 'success' | 'error'; message: string } | null>(null)
  const [sectionSearch, setSectionSearch] = useState('')
  const [fieldSearch, setFieldSearch] = useState('')
  const [dirty, setDirty] = useState(false)

  const loadSections = useCallback(async () => {
    setLoading(true)
    setNotice(null)
    try {
      const rows = await adminApi.listSections()
      if (rows.length === 0) {
        throw new Error('No content sections were found in the database. Seed the database before editing website content.')
      }

      setSections(rows)
      const selected = rows.find((row) => row.key === 'home') ?? rows[0]
      const detail = await adminApi.getSection(selected.key)
      setActiveKey(selected.key)
      setDraft(detail.data)
      setDirty(false)
    } catch (error) {
      setSections([])
      setDraft(null)
      setNotice({ kind: 'error', message: getErrorMessage(error, 'Could not load database content.') })
      if (isAuthError(error)) {
        setAdminToken(null)
        setAuthenticated(false)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authenticated) void loadSections()
  }, [authenticated, loadSections])

  const loadSection = async (key: string) => {
    setDraft(null)
    setLoading(true)
    setNotice(null)
    try {
      const result = await adminApi.getSection(key)
      setDraft(result.data)
    } catch (error) {
      setNotice({ kind: 'error', message: getErrorMessage(error, 'Could not load this section.') })
      if (isAuthError(error)) {
        setAdminToken(null)
        setAuthenticated(false)
      }
    } finally {
      setLoading(false)
    }
  }

  const chooseSection = async (key: string) => {
    if (key === activeKey || loading) return
    if (dirty && !window.confirm('You have unsaved changes. Discard them and switch sections?')) return

    setActiveKey(key)
    setDirty(false)
    setFieldSearch('')
    await loadSection(key)
  }

  const save = async () => {
    if (draft === null) return
    setSaving(true)
    setNotice(null)
    try {
      const result = await adminApi.saveSection(activeKey, draft)
      setDraft(result.data)
      setDirty(false)
      setNotice({ kind: 'success', message: `${titleFor(activeKey)} saved successfully.` })
      setSections((current) =>
        current.map((section) =>
          section.key === activeKey ? { ...section, updatedAt: result.updatedAt } : section,
        ),
      )
    } catch (error) {
      setNotice({ kind: 'error', message: getErrorMessage(error, 'Could not save this section.') })
      if (isAuthError(error)) {
        setAdminToken(null)
        setAuthenticated(false)
      }
    } finally {
      setSaving(false)
    }
  }

  const togglePublished = async () => {
    const section = sections.find((item) => item.key === activeKey)
    const isRequired = requiredContentSections.some((key) => key === activeKey)
    if (!section || dirty || (isRequired && section.published)) return

    setPublishing(true)
    setNotice(null)
    try {
      const updated = await adminApi.setSectionPublished(activeKey, !section.published)
      setSections((current) =>
        current.map((item) => (item.key === activeKey ? { ...item, published: updated.published } : item)),
      )
      setNotice({
        kind: 'success',
        message: `${titleFor(activeKey)} ${updated.published ? 'published' : 'unpublished'} successfully.`,
      })
    } catch (error) {
      setNotice({ kind: 'error', message: getErrorMessage(error, 'Could not update publishing status.') })
      if (isAuthError(error)) {
        setAdminToken(null)
        setAuthenticated(false)
      }
    } finally {
      setPublishing(false)
    }
  }

  const orderedSections = useMemo(() => {
    const available = new Map(sections.map((section) => [section.key, section]))
    const preferredKeys = new Set<string>(sectionGroups.flatMap((group) => group.sections.map(([key]) => key)))
    const groups = sectionGroups
      .map((group) => ({
        label: group.label,
        sections: group.sections.flatMap((definition) => {
          const section = available.get(definition[0])
          return section ? [{ section, definition }] : []
        }),
      }))
      .filter((group) => group.sections.length > 0)
    const otherSections = sections
      .filter((section) => !preferredKeys.has(section.key))
      .sort((left, right) => left.key.localeCompare(right.key))

    return { groups, otherSections }
  }, [sections])

  const currentSection = sections.find((section) => section.key === activeKey)
  const isRequiredSection = requiredContentSections.some((key) => key === activeKey)
  const filterSection = (section: AdminSection) =>
    section.key.toLowerCase().includes(sectionSearch.toLowerCase()) ||
    titleFor(section.key).toLowerCase().includes(sectionSearch.toLowerCase())

  if (!authenticated) return <Login onLogin={() => setAuthenticated(true)} />

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <div className="admin-mark small-mark">VL</div>
          <div>
            <strong>Village of Light</strong>
            <small>Content management</small>
          </div>
        </div>
        <div className="sidebar-section-label">DATABASE CONTENT</div>
        <div className="sidebar-search">
          <input
            aria-label="Search content sections"
            placeholder="Find a page or setting..."
            value={sectionSearch}
            onChange={(event) => setSectionSearch(event.target.value)}
          />
        </div>
        <nav className="admin-nav" aria-label="Content sections">
          {orderedSections.groups.map((group) => {
              const filteredSections = group.sections.filter(({ section }) => filterSection(section))
              if (filteredSections.length === 0) return null
              return (
                <div className="admin-nav-group" key={group.label}>
                  <p className="admin-nav-heading">{group.label}</p>
                  {filteredSections.map(({ section, definition }) => {
                    return (
                    <button
                      key={section.key}
                      className={activeKey === section.key ? 'active' : ''}
                      aria-current={activeKey === section.key ? 'page' : undefined}
                      onClick={() => void chooseSection(section.key)}
                      disabled={loading}
                    >
                      <span className="nav-icon">{definition[2]}</span>
                      <span>{titleFor(section.key)}</span>
                      <span className={`nav-published ${section.published ? 'is-published' : ''}`} aria-label={section.published ? 'Published' : 'Unpublished'} />
                    </button>
                  )
                })}
              </div>
            )
          })}
          {orderedSections.otherSections.filter(filterSection).length > 0 && (
            <div className="admin-nav-group">
              <p className="admin-nav-heading">Other sections</p>
              {orderedSections.otherSections.filter(filterSection).map((section) => (
                <button
                  key={section.key}
                  className={activeKey === section.key ? 'active' : ''}
                  aria-current={activeKey === section.key ? 'page' : undefined}
                  onClick={() => void chooseSection(section.key)}
                  disabled={loading}
                >
                  <span className="nav-icon">◇</span>
                  <span>{titleFor(section.key)}</span>
                  <span className={`nav-published ${section.published ? 'is-published' : ''}`} aria-label={section.published ? 'Published' : 'Unpublished'} />
                </button>
              ))}
            </div>
          )}
          {orderedSections.groups.every((group) => group.sections.filter(({ section }) => filterSection(section)).length === 0) &&
            orderedSections.otherSections.filter(filterSection).length === 0 && (
              <p className="nav-empty">No matching content sections.</p>
            )}
        </nav>
        <div className="sidebar-bottom">
          <div className="admin-status">
            <span className="status-dot" style={{ backgroundColor: sections.length ? '#3ccf91' : '#c24e3d' }} />
            {sections.length ? 'Connected to content database' : 'Database connection unavailable'}
          </div>
          <button
            className="logout-button"
            onClick={() => {
              if (dirty && !window.confirm('You have unsaved changes. Sign out and discard them?')) return
              setAdminToken(null)
              setAuthenticated(false)
            }}
          >
            ↪ Sign out
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <p className="eyebrow">CONTENT MANAGEMENT</p>
            <h1>{titleFor(activeKey)}</h1>
            <p className="topbar-subtitle">
              {sectionDescriptions[activeKey] ?? 'Edit this database content section.'}
            </p>
          </div>
          <div className="topbar-actions">
            <a href="/" target="_blank" rel="noreferrer" className="secondary-button link-button">
              View website ↗
            </a>
            <button
              type="button"
              className={`publish-button ${currentSection?.published ? 'is-published' : ''}`}
              disabled={
                !currentSection ||
                dirty ||
                publishing ||
                loading ||
                (isRequiredSection && currentSection.published)
              }
              onClick={() => void togglePublished()}
              title={
                dirty
                  ? 'Save changes before changing publish status.'
                  : isRequiredSection && currentSection?.published
                    ? 'Required website content must remain published.'
                    : undefined
              }
            >
              <span className="publish-indicator" />
              {publishing ? 'Updating...' : currentSection?.published ? 'Published' : 'Unpublished'}
            </button>
            <button
              type="button"
              className="primary-button"
              disabled={!dirty || saving || loading}
              onClick={() => void save()}
            >
              {saving ? 'Saving...' : 'Save changes'}
            </button>
          </div>
        </header>

        {notice && (
          <div className={`notice ${notice.kind === 'error' ? 'error-notice' : 'success-notice'}`} role="status">
            <span>{notice.kind === 'error' ? '!' : '✓'}</span>
            {notice.message}
            <button type="button" aria-label="Dismiss notification" onClick={() => setNotice(null)}>×</button>
          </div>
        )}

        <div className="content-toolbar">
          <div>
            <span className="content-kicker">DATABASE SECTION</span>
            <h2>{titleFor(activeKey)}</h2>
            <p>Search fields or open a card to edit its content in English and Amharic.</p>
          </div>
          <span className={`save-state ${dirty ? 'unsaved' : ''}`} role="status">
            <span /> {dirty ? 'Unsaved changes' : 'All changes saved'}
          </span>
        </div>

        <label className="field-search">
          <span className="field-search-icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            aria-label={`Search ${titleFor(activeKey)} content`}
            placeholder="Search fields and content..."
            value={fieldSearch}
            onChange={(event) => setFieldSearch(event.target.value)}
          />
          {fieldSearch && (
            <button type="button" onClick={() => setFieldSearch('')} aria-label="Clear field search">×</button>
          )}
        </label>

        {loading ? (
          <div className="editor-loading"><span className="spinner" />Loading database content...</div>
        ) : draft === null ? (
          <div className="editor-empty min-h-[180px] rounded-xl border border-dashed border-ink-900/15 bg-white px-6 py-10 text-center text-sm text-ink-800/70">
            <p>{notice?.kind === 'error' ? 'This database section could not be loaded.' : 'No content is available for this section.'}</p>
            <button type="button" className="secondary-button mt-4" onClick={() => void loadSection(activeKey)}>
              Retry loading section
            </button>
          </div>
        ) : (
          <div className="editor-card">
            <div className="editor-card-header">
              <div>
                <strong>{activeKey}.content</strong>
                <p>Changes are saved to the database and appear on the public site when published.</p>
              </div>
              <span className="field-count">
                {draft && typeof draft === 'object' ? Object.keys(draft).length : 0} content groups
              </span>
            </div>
            <div className="editor-card-body">
              <ContentEditor
                value={draft}
                path={activeKey}
                search={fieldSearch}
                onChange={(next) => {
                  setDraft(next)
                  setDirty(true)
                }}
              />
            </div>
            <div className="editor-card-footer">
              <span className="muted">
                {dirty ? 'Unsaved edits are not visible on the public website yet.' : 'This content is stored in the live database.'}
              </span>
              <button
                type="button"
                className="primary-button"
                disabled={!dirty || saving}
                onClick={() => void save()}
              >
                {saving ? 'Saving...' : 'Save section'}
              </button>
            </div>
          </div>
        )}

        <footer className="admin-footer">VLCE Admin <span>•</span> Live database content <span>•</span> Images hosted by Cloudinary</footer>
      </main>
    </div>
  )
}
