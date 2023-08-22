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
const dataUrl: string = await readAs(reader, file, 'DataURL')
const arrayBuffer: ArrayBuffer = await readAs(reader, file, 'ArrayBuffer')
```

### `FileReader`

```ts
const dataUrl: string = await new FileReader().readAsDataURL(file)
const arrayBuffer: ArrayBuffer = await new FileReader().readAsArrayBuffer(file)
```
