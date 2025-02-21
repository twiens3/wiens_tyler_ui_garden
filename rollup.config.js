import resolve from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

export default [
  // JS Bundle configuration
  {
    input: 'src/index.js',  // Entry point for your library
    output: [
      {
        file: 'dist/index.js',  // Output file for CommonJS bundle
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',  // Output file for ES module bundle
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),  // Resolve dependencies in node_modules
      commonjs(), // Convert CommonJS to ES modules
      ({
        exclude: 'node_modules/**',  // Exclude node_modules from transpilation
      }),
    ],
    external: ['react', 'react-dom'],  // Mark react and react-dom as external (don’t bundle them)
  },
  // TypeScript Declaration files
  {
    input: 'src/index.ts',  // Input for TypeScript declaration file generation
    output: {
      file: 'dist/index.ts',  // Output file for TypeScript declarations
      format: 'esm',  // ESM format for declarations
    },
    plugins: [dts()],  // Use dts plugin for generating type declarations
  },
];

