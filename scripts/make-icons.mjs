import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

/** 写一张纯色 PNG，给底部导航当图标。 */
function writePng(filePath, red, green, blue) {
  const width = 48
  const height = 48
  const raw = Buffer.alloc((width * 4 + 1) * height)
  for (let y = 0; y < height; y++) {
    const row = y * (width * 4 + 1)
    raw[row] = 0
    for (let x = 0; x < width; x++) {
      const inside = (x - 24) * (x - 24) + (y - 24) * (y - 24) <= 16 * 16
      const index = row + 1 + x * 4
      raw[index] = inside ? red : 0
      raw[index + 1] = inside ? green : 0
      raw[index + 2] = inside ? blue : 0
      raw[index + 3] = inside ? 255 : 0
    }
  }
  const compressed = zlib.deflateSync(raw)
  const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8
  ihdr[9] = 6
  const file = Buffer.concat([header, chunk('IHDR', ihdr), chunk('IDAT', compressed), chunk('IEND', Buffer.alloc(0))])
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, file)
}

/** PNG 块。 */
function chunk(type, data) {
  const name = Buffer.from(type)
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length, 0)
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(zlib.crc32(Buffer.concat([name, data])) >>> 0, 0)
  return Buffer.concat([length, name, data, crc])
}

const dir = path.resolve('src/static/tab')
const gray = [139, 147, 167]
const green = [31, 111, 91]
;['today', 'precision', 'lesson', 'tutor', 'mine'].forEach((name) => {
  writePng(path.join(dir, `${name}.png`), gray[0], gray[1], gray[2])
  writePng(path.join(dir, `${name}-on.png`), green[0], green[1], green[2])
})
