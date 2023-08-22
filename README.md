# file_reader_promise

Promise-based [`FileReader`](https://developer.mozilla.org/docs/Web/API/FileReader) implementation.

## Installation

node

```sh
npm install @myrear/file_reader_promise
```

deno

```ts
import {
  FileReader,
  readAs,
} from 'https://deno.land/x/file_reader_promise/mod.ts'
```

## Usage

This library provides 2 modules:

- [`readAs`](#readas)
- [`FileReader`](#filereader): Thin wrapper class for the web standard [`FileReader`](https://developer.mozilla.org/docs/Web/API/FileReader) class

### `readAs`

```ts
const result: string = await readAs(reader, file, 'DataURL')
const result: ArrayBuffer = await readAs(reader, file, 'ArrayBuffer')
```

### `FileReader`

```ts
const result: string = await new FileReader().readAsDataURL(file)
const result: ArrayBuffer = await new FileReader().readAsArrayBuffer(file)
```
