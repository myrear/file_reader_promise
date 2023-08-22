import { promisifyReader } from './promisifyReader.ts'

export function readAs(
  reader: FileReader,
  blob: Blob,
  as: 'ArrayBuffer',
): Promise<ArrayBuffer>

export function readAs(
  reader: FileReader,
  blob: Blob,
  as: 'BinaryString' | 'DataURL',
): Promise<string>

export function readAs(
  reader: FileReader,
  blob: Blob,
  as: 'Text',
  encoding?: string,
): Promise<string>

export function readAs(
  reader: FileReader,
  blob: Blob,
  as: 'ArrayBuffer' | 'DataURL' | 'Text' | 'BinaryString',
  encoding?: string,
) {
  reader[`readAs${as}`](blob, encoding)
  return promisifyReader(reader)
}
