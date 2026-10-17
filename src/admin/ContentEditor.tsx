import { useRef, useState } from 'react'
import { adminApi } from '../api/admin'

type Props = {
  value: unknown
  path: string
  onChange: (next: unknown) => void
  search?: string
  depth?: number
}

const humanize = (key: string) =>
  key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[-_]/g, ' ').replace(/^./, (value) => value.toUpperCase())

const isImageField = (key: string, value: unknown) =>
  typeof value === 'string' &&
  (/image|photo|picture|logo|icon|banner|cover|avatar|src/i.test(key) ||
    value.startsWith('/images/') ||
    value.includes('res.cloudinary.com'))

function containsSearch(value: unknown, key: string, query: string): boolean {
  if (humanize(key).toLowerCase().includes(query)) return true
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value).toLowerCase().includes(query)
  }
  if (Array.isArray(value)) return value.some((item, index) => containsSearch(item, String(index + 1), query))
  if (value && typeof value === 'object') {
    return Object.entries(value).some(([childKey, child]) => containsSearch(child, childKey, query))
  }
  return false
}

function getItemLabel(value: unknown, fallback: string): string {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return typeof value === 'string' && value.trim() ? value : fallback
  }

  const item = value as Record<string, unknown>
  for (const key of ['title', 'name', 'label', 'year', 'value']) {
    const candidate = item[key]
    if (typeof candidate === 'string' || typeof candidate === 'number') {
      return String(candidate)
    }
    if (candidate && typeof candidate === 'object' && !Array.isArray(candidate)) {
      const localized = candidate as Record<string, unknown>
      const text = localized.en ?? localized.am
      if (typeof text === 'string' || typeof text === 'number') return String(text)
    }
  }

  return fallback
}

export function ContentEditor({ value, path, onChange, search = '', depth = 0 }: Props) {
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)
  const key = path.split('.').at(-1) || path
  const query = search.trim().toLowerCase()

  if (Array.isArray(value)) {
    const visibleItems = value
      .map((item, index) => ({ item, index }))
      .filter(({ item, index }) => !query || containsSearch(item, `${key} ${index + 1}`, query))

    return (
      <div className={`editor-array-shell depth-${Math.min(depth, 3)}`}>
        <details className="editor-array" open={query ? true : undefined}>
          <summary>
            <span>{humanize(key)}</span>
            <span className="muted">{value.length} {value.length === 1 ? 'item' : 'items'}</span>
          </summary>
          <div className="editor-array-items">
            {visibleItems.map(({ item, index }) => (
              <div className="array-item" key={`${path}-${index}`}>
                <div className="array-item-heading">
                  <strong>{getItemLabel(item, `${humanize(key)} ${index + 1}`)}</strong>
                  <button
                    type="button"
                    className="text-danger"
                    onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}
                  >
                    Remove
                  </button>
                </div>
                <ContentEditor
                  value={item}
                  path={`${path}.${index}`}
                  depth={depth + 1}
                  search={search}
                  onChange={(next) =>
                    onChange(value.map((old, itemIndex) => (itemIndex === index ? next : old)))
                  }
                />
              </div>
            ))}
            {query && visibleItems.length === 0 && (
              <p className="editor-no-results">No items match “{search}”.</p>
            )}
          </div>
        </details>
        <button
          type="button"
          className="small-button editor-array-add"
          onClick={() =>
            onChange([
              ...value,
              value.length > 0 && typeof value[0] === 'object' && value[0] !== null
                ? structuredClone(value[0])
                : '',
            ])
          }
        >
          + Add item
        </button>
      </div>
    )
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
    const localized =
      entries.length === 2 &&
      entries.every(([entryKey, entryValue]) => ['en', 'am'].includes(entryKey) && typeof entryValue === 'string')
    const filteredEntries = entries.filter(
      ([childKey, child]) => !query || containsSearch(child, childKey, query),
    )

    if (localized) {
      return (
        <section className={`editor-group depth-${Math.min(depth, 3)} localized-group`}>
          <div className="bilingual-fields">
            {(['en', 'am'] as const).map((lang) => (
              <label className="field" key={lang}>
                <span>{lang === 'en' ? 'English' : 'አማርኛ'} <small>{lang.toUpperCase()}</small></span>
                <textarea
                  rows={String((value as Record<string, unknown>)[lang]).length > 100 ? 4 : 2}
                  value={String((value as Record<string, unknown>)[lang] ?? '')}
                  onChange={(event) => onChange({ ...(value as object), [lang]: event.target.value })}
                />
              </label>
            ))}
          </div>
        </section>
      )
    }

    return (
      <details className={`editor-object depth-${Math.min(depth, 3)}`} open={query ? true : undefined}>
        <summary>
          <span>{humanize(key)}</span>
          <span className="muted">{entries.length} {entries.length === 1 ? 'field' : 'fields'}</span>
        </summary>
        <div className="editor-object-fields">
          {filteredEntries.map(([childKey, child]) => (
            <ContentEditor
              key={`${path}.${childKey}`}
              value={child}
              path={`${path}.${childKey}`}
              depth={depth + 1}
              search={search}
              onChange={(next) =>
                onChange({ ...(value as Record<string, unknown>), [childKey]: next })
              }
            />
          ))}
          {query && filteredEntries.length === 0 && (
            <p className="editor-no-results">No fields match “{search}”.</p>
          )}
        </div>
      </details>
    )
  }

  if (typeof value === 'boolean') {
    return (
      <label className="boolean-field">
        <span>{humanize(key)}</span>
        <input type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} />
      </label>
    )
  }

  if (typeof value === 'number') {
    return (
      <label className="field">
        <span>{humanize(key)}</span>
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(event.target.value === '' ? 0 : Number(event.target.value))}
        />
      </label>
    )
  }

  const text = value == null ? '' : String(value)
  const imageField = isImageField(key, value)
  const longText = text.length > 120 || /description|paragraph|mission|vision|story|quote|content|text/i.test(key)

  const handleUpload = async (file?: File) => {
    if (!file) return
    setUploading(true)
    setUploadError('')
    try {
      const uploaded = await adminApi.uploadImage(file)
      onChange(uploaded.url)
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Image upload failed.')
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <label className="field">
      <span>{humanize(key)}{imageField && <small>IMAGE URL</small>}</span>
      {longText && !imageField ? (
        <textarea rows={4} value={text} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input type="text" value={text} onChange={(event) => onChange(event.target.value)} />
      )}
      {imageField && (
        <div className="image-tools">
          <div className="image-preview">
            {text ? (
              <img src={text} alt="Selected content" onError={(event) => { event.currentTarget.style.display = 'none' }} />
            ) : (
              <span>No image selected</span>
            )}
          </div>
          <div className="image-actions">
            <button
              type="button"
              className="secondary-button"
              disabled={uploading}
              onClick={() => fileRef.current?.click()}
            >
              {uploading ? 'Uploading...' : 'Choose & upload image'}
            </button>
            <input
              ref={fileRef}
              hidden
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif,image/avif"
              onChange={(event) => void handleUpload(event.target.files?.[0])}
            />
            <small>Image is uploaded to Cloudinary; its secure URL is saved with this section.</small>
            {uploadError && <span className="error-text">{uploadError}</span>}
          </div>
        </div>
      )}
    </label>
  )
}
