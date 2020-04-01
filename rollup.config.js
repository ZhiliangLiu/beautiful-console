import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

export default {
    input: 'src/index.ts',
    output: {
        file: './dist/index.js',
        format: 'es'
    },
    external: [],
    plugins: [
        // Allows node_modules resolution
        resolve({ extensions }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ['src/**/*'] }),
    ],
}
