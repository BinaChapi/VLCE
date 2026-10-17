const API_BASE = (import.meta.env.VITE_API_BASE_URL || '/api/v1').replace(/\/$/, '')

export function getAdminToken() { return sessionStorage.getItem('vlce-admin-token') || '' }
export function setAdminToken(token: string | null) {
  if (token) sessionStorage.setItem('vlce-admin-token', token)
  else sessionStorage.removeItem('vlce-admin-token')
}

async function request<T>(path: string, init: RequestInit = {}, auth = true): Promise<T> {
  const headers = new Headers(init.headers)
  if (!(init.body instanceof FormData) && init.body) headers.set('Content-Type', 'application/json')
  if (auth && getAdminToken()) headers.set('Authorization', `Bearer ${getAdminToken()}`)
  const response = await fetch(`${API_BASE}${path}`, { ...init, headers })
  const payload = await response.json().catch(() => ({}))
  if (!response.ok || payload.success === false) throw new Error(payload?.error?.message || `Request failed (${response.status})`)
  return payload.data as T
}

export interface AdminSection { key: string; published: boolean; updatedAt?: string; data?: unknown }
export const adminApi = {
  login: (email: string, password: string) => request<{ token: string; email: string; expiresIn: number }>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }, false),
  listSections: () => request<AdminSection[]>('/admin/sections'),
  getSection: (key: string) => request<AdminSection>(`/admin/sections/${encodeURIComponent(key)}`),
  saveSection: (key: string, data: unknown) => request<AdminSection>(`/admin/sections/${encodeURIComponent(key)}`, { method: 'PUT', body: JSON.stringify({ data }) }),
  setSectionPublished: (key: string, published: boolean) =>
    request<AdminSection>(`/admin/sections/${encodeURIComponent(key)}/published`, {
      method: 'PATCH',
      body: JSON.stringify({ published }),
    }),
  uploadImage: async (file: File) => {
    const form = new FormData(); form.append('image', file)
    return request<{ url: string; publicId: string; width: number; height: number; format: string }>('/admin/images', { method: 'POST', body: form })
  },
}
