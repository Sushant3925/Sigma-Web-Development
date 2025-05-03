import fs from "fs/promises"
import fsn from "fs"
import path from "path"
const basepath = "D:\\vs code\\Sigma_Web_development_course\\Exercise-15"

let files = await fs.readdir(basepath)
console.log(files)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    console.log(item.split(".").length)

    if (ext != "json" && ext != "js" &&item.split(".").length >1) {

        if(fsn.existsSync(path.join(basepath, ext)))
         {
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}