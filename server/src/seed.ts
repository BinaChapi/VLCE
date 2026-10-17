import 'dotenv/config'
import { content } from '../../src/content.js'
import { prisma } from './db.js'

async function main() {
  const entries = Object.entries(content as Record<string, unknown>)
  for (const [key, data] of entries) {
    await prisma.contentSection.upsert({
      where: { key },
      create: { key, data: data as never, published: true },
      update: {}, // Safe to re-run: never overwrite live edits.
    })
  }
  console.log(`Seed complete: ${entries.length} content sections available. Existing edits were preserved.`)
}
main().catch((error) => { console.error(error); process.exitCode = 1 }).finally(() => prisma.$disconnect())
