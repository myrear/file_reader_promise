import { JSDOM } from 'jsdom'
import { isNode } from 'which_runtime/mod.ts'

if (isNode) {
  const { window: { Blob, FileReader } } = new JSDOM()
  globalThis.Blob = Blob
  globalThis.FileReader = FileReader
}
