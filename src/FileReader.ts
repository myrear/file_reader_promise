import { readAs } from './readAs.ts'

export class FileReader extends globalThis.FileReader {
  readAsArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
    return readAs(this, blob, 'ArrayBuffer')
  }

  readAsBinaryString(blob: Blob): Promise<string> {
    return readAs(this, blob, 'BinaryString')
  }

  readAsDataURL(blob: Blob): Promise<string> {
    return readAs(this, blob, 'DataURL')
  }

  readAsText(blob: Blob, encoding?: string): Promise<string> {
    return readAs(this, blob, 'Text', encoding)
  }
}
