/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

const CONST_DEFAULT_DIR = './src'

function checkNamingConvention(dir) {
  fs.readdirSync(dir).forEach((item) => {
    const fullPath = path.join(dir, item)

    if (fs.statSync(fullPath).isDirectory()) {
      // If it's a directory, check its name and contents
      if (!/^[a-z0-9-]+$/.test(item)) {
        console.log(`La siguiente carpeta no utiliza kebab name convention: ${item}`)
        process.exit(1)
      }
      checkNamingConvention(fullPath)
    } else {
      // If it's a file, check its name
      const baseName = path.basename(item, path.extname(item))
      if (
        baseName.includes('.page') ||
        baseName.includes('.component') ||
        baseName.includes('.context') ||
        baseName.includes('.provider') ||
        baseName.includes('.route')
      ) {
        const baseNameWithoutExtension = baseName.split('.')[0]
        if (!/^[A-Z][a-zA-Z0-9]*$/.test(baseNameWithoutExtension)) {
          console.log(`El archivo no respeta PascalCase convention name convention: ${item}`)
          process.exit(1)
        }
      } else if (!/^[a-z0-9-.]+$/.test(baseName)) {
        console.log(`El archivo no respeta kebab name convention: ${item}`)
        process.exit(1)
      }
    }
  })
}

checkNamingConvention(CONST_DEFAULT_DIR)
