import { promisifyReader } from './promisifyReader.ts'

export class FileReader extends globalThis.FileReader {
  readAsArrayBuffer(blob: Blob): Promise<ArrayBuffer>
  readAsArrayBuffer(blob: Blob) {
    super.readAsArrayBuffer(blob)
    return promisifyReader(this)
  }

  readAsBinaryString(blob: Blob): Promise<string>
  readAsBinaryString(blob: Blob) {
    super.readAsBinaryString(blob)
    return promisifyReader(this)
  }

  readAsDataURL(blob: Blob): Promise<string>
  readAsDataURL(blob: Blob) {
    super.readAsDataURL(blob)
    return promisifyReader(this)
  }

  readAsText(blob: Blob, encoding?: string): Promise<string>
  readAsText(blob: Blob, encoding?: string) {
    super.readAsText(blob, encoding)
    return promisifyReader(this)
  }
}
