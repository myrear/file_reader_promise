import './setup.ts'
import { assertEquals, assertInstanceOf } from 'std/assert/mod.ts'
import { assertSpyCall, Spy, spy } from 'std/testing/mock.ts'
import { afterEach, describe, it } from 'std/testing/bdd.ts'
import { readAs } from '../mod.ts'

describe('read blob', () => {
  let readAsSpy: Spy<FileReader, [blob: Blob, encoding?: string], void>

  afterEach(() => {
    readAsSpy.restore()
  })

  const blob = new Blob(['foo'], { type: 'text/plain' })

  it('as `ArrayBuffer`', async () => {
    const reader = new FileReader()
    readAsSpy = spy(FileReader.prototype, 'readAsArrayBuffer')
    const result = await readAs(reader, blob, 'ArrayBuffer')

    assertEquals(result, reader.result)
    assertInstanceOf(result, ArrayBuffer)
    assertSpyCall(readAsSpy, 0, {
      self: reader,
      args: [blob, undefined],
    })
  })

  it('as `BinaryString`', async () => {
    const reader = new FileReader()
    readAsSpy = spy(
      FileReader.prototype,
      'readAsBinaryString',
    )
    const result = await readAs(reader, blob, 'BinaryString')

    assertEquals(result, reader.result)
    assertEquals(result, 'foo')
    assertSpyCall(readAsSpy, 0, {
      self: reader,
      args: [blob, undefined],
    })
  })

  it('as `DataURL`', async () => {
    const reader = new FileReader()
    readAsSpy = spy(FileReader.prototype, 'readAsDataURL')
    const result = await readAs(reader, blob, 'DataURL')

    assertEquals(result, reader.result)
    assertEquals(result, 'data:text/plain;base64,Zm9v')
    assertSpyCall(readAsSpy, 0, {
      self: reader,
      args: [blob, undefined],
    })
  })

  it('as `Text` with encoding utf-8', async () => {
    const reader = new FileReader()
    readAsSpy = spy(FileReader.prototype, 'readAsText')
    const result = await readAs(reader, blob, 'Text', 'utf-8')

    assertEquals(result, reader.result)
    assertEquals(result, 'foo')
    assertSpyCall(readAsSpy, 0, {
      self: reader,
      args: [blob, 'utf-8'],
    })
  })
})
