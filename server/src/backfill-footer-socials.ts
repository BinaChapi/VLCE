import 'dotenv/config'
import { Prisma } from '@prisma/client'
import { defaultSocialLinks } from '../../src/content.js'
import { prisma } from './db.js'

async function main() {
  const footer = await prisma.contentSection.findUnique({ where: { key: 'footer' } })
  if (!footer) {
    throw new Error('Footer section is missing. Refusing to create it from seed content.')
  }
  if (footer.data === null || typeof footer.data !== 'object' || Array.isArray(footer.data)) {
    throw new Error('Footer section data is not an object. Refusing to overwrite it.')
  }

  const data = footer.data as Prisma.JsonObject
  if (Object.hasOwn(data, 'socialLinks')) {
    console.log('Footer social links already exist; no changes were made.')
    return
  }

  const updatedData: Prisma.InputJsonObject = {
    ...data,
    socialLinks: defaultSocialLinks.map(({ name, url }) => ({ name, url })),
  }
  await prisma.contentSection.update({
    where: { key: 'footer' },
    data: { data: updatedData },
  })

  console.log('Added official social links to the existing footer section.')
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
