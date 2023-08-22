import { readAs } from './readAs.ts'

export class FileReader extends globalThis.FileReader {
  readAsArrayBuffer(blob: Blob) {
    return readAs(this, blob, 'ArrayBuffer')
  }

  readAsBinaryString(blob: Blob) {
    return readAs(this, blob, 'BinaryString')
  }

  readAsDataURL(blob: Blob) {
    return readAs(this, blob, 'DataURL')
  }

  readAsText(blob: Blob, encoding?: string) {
    return readAs(this, blob, 'Text', encoding)
  }
}
