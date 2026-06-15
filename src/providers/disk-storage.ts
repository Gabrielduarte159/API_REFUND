import fs from "node:fs"
import path from "node:path"

import uploadconfig from "@/configs/upload.js"

class DiskStorage{
  async saveFile (file:string){
    const tmpPath = path.resolve(uploadconfig.TMP_FOLDER,file)
    const desPath = path.resolve(uploadconfig.UPLOADS_FOLDER,file)

    try {
      await fs.promises.access(tmpPath)
    } catch (error) {
      throw new Error(`Arquivo não encontrado: ${tmpPath}`)
    }
    await fs.promises.mkdir(uploadconfig.UPLOADS_FOLDER,{recursive:true})
    await fs.promises.rename(tmpPath,desPath)

    return file
  }
  async deleteFile(file:string, type:"tmp"|"upload"){
    const pathFile = 
    type === "tmp" ? uploadconfig.TMP_FOLDER : uploadconfig.UPLOADS_FOLDER
    const filPath = path.resolve(pathFile,file)

    try {
      await fs.promises.stat(filPath)
    } catch{
      return
    }
    await fs.promises.unlink(filPath)
  }
}

export {DiskStorage}