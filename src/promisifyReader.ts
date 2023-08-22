export const promisifyReader = (reader: FileReader) =>
  new Promise<FileReader['result']>((resolve, reject) => {
    reader.addEventListener('load', loadListener)
    reader.addEventListener('error', reject)
    reader.addEventListener('abort', reject)
    reader.addEventListener('loadend', removeEventListener)

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
