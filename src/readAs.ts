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
  return new Promise<FileReader['result']>((resolve, reject) => {
    reader.addEventListener('load', loadListener)
    reader.addEventListener('error', reject)
    reader.addEventListener('abort', reject)
    reader.addEventListener('loadend', removeEventListener)
    FileReader.prototype[`readAs${as}`].call(reader, blob, encoding)

    function removeEventListener() {
      reader.removeEventListener('load', loadListener)
      reader.removeEventListener('error', reject)
      reader.removeEventListener('abort', reject)
      reader.removeEventListener('loadend', removeEventListener)
    }

    function loadListener() {
      resolve(reader.result)
    }
  })
}
