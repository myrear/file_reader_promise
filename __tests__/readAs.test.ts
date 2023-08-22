import './setup.ts'
import { assertEquals, assertInstanceOf } from 'std/assert/mod.ts'
import { assertSpyCall, spy } from 'std/testing/mock.ts'
import { readAs } from '../src/readAs.ts'

Deno.test('read blob', async (t) => {
  const blob = new Blob(['foo'], { type: 'text/plain' })

  await t.step('as `ArrayBuffer`', async () => {
    const reader = new FileReader()
    const readAsArrayBufferSpy = spy(reader, 'readAsArrayBuffer')
    const result = await readAs(reader, blob, 'ArrayBuffer')

    assertEquals(result, reader.result)
    assertInstanceOf(result, ArrayBuffer)
    assertSpyCall(readAsArrayBufferSpy, 0, {
      self: reader,
      args: [blob, undefined],
    })
  })

  await t.step('as `BinaryString`', async () => {
    const reader = new FileReader()
    const readAsBinaryStringSpy = spy(reader, 'readAsBinaryString')
    const result = await readAs(reader, blob, 'BinaryString')

    assertEquals(result, reader.result)
    assertEquals(result, 'foo')
    assertSpyCall(readAsBinaryStringSpy, 0, {
      self: reader,
      args: [blob, undefined],
    })
  })

  await t.step('as `DataURL`', async () => {
    const reader = new FileReader()
    const readAsDataURLSpy = spy(reader, 'readAsDataURL')
    const result = await readAs(reader, blob, 'DataURL')

    assertEquals(result, reader.result)
    assertEquals(result, 'data:text/plain;base64,Zm9v')
    assertSpyCall(readAsDataURLSpy, 0, {
      self: reader,
      args: [blob, undefined],
    })
  })

  await t.step('as `Text` with encoding utf-8', async () => {
    const reader = new FileReader()
    const readAsTextSpy = spy(reader, 'readAsText')
    const result = await readAs(reader, blob, 'Text', 'utf-8')

    assertEquals(result, reader.result)
    assertEquals(typeof result, 'string')
    assertSpyCall(readAsTextSpy, 0, {
      self: reader,
      args: [blob, 'utf-8'],
    })
  })
})
