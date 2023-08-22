import './setup.ts'
import { FileReader } from '../mod.ts'
import { assertEquals } from 'std/assert/assert_equals.ts'
import { assertInstanceOf } from 'std/assert/assert_instance_of.ts'

Deno.test('read blob', async (t) => {
  const blob = new Blob(['foo'], { type: 'text/plain' })

  await t.step('as `ArrayBuffer`', async () => {
    const reader = new FileReader()
    const result = await reader.readAsArrayBuffer(blob)

    assertEquals(result, reader.result)
    assertInstanceOf(result, ArrayBuffer)
  })

  await t.step('as `BinaryString`', async () => {
    const reader = new FileReader()
    const result = await reader.readAsBinaryString(blob)

    assertEquals(result, reader.result)
    assertEquals(result, 'foo')
  })

  await t.step('as `DataURL`', async () => {
    const reader = new FileReader()
    const result = await reader.readAsDataURL(blob)

    assertEquals(result, reader.result)
    assertEquals(result, 'data:text/plain;base64,Zm9v')
  })

  await t.step('as `Text` with encoding utf-8', async () => {
    const reader = new FileReader()
    const result = await reader.readAsText(blob, 'utf-8')

    assertEquals(result, reader.result)
    assertEquals(result, 'foo')
  })
})
