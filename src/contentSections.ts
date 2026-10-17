type ContentKey = keyof typeof import('./content.js').content

export const requiredContentSections = [
  'brand',
  'meta',
  'nav',
  'common',
  'home',
  'about',
  'programs',
  'impact',
  'contact',
  'donate',
  'footer',
] as const satisfies readonly ContentKey[]
