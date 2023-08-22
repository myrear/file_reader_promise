import { build, emptyDir } from 'dnt/mod.ts'

await emptyDir('./npm')

await build({
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {
    deno: { test: 'dev' },
  },
  compilerOptions: {
    lib: ['ESNext', 'DOM'],
  },
  typeCheck: 'both',
  importMap: 'deno.jsonc',
  package: {
    name: '@myrear/file_reader_promise',
    description: 'Promise-based FileReader implementation.',
    author: 'myrear',
    license: 'MIT',
    version: Deno.args[0],
    repository: {
      type: 'git',
      url: 'https://github.com/myrear/file_reader_promise.git',
    },
    bugs: {
      url: 'https://github.com/myrear/file_reader_promise/issues',
    },
    devDependencies: {
      '@types/jsdom': '^21.1.1',
    },
  },
  postBuild() {
    Deno.copyFileSync('LICENSE', 'npm/LICENSE')
    Deno.copyFileSync('README.md', 'npm/README.md')
  },
})
