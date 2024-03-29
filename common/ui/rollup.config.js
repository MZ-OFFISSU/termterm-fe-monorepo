import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" assert { type: "json" };
import { rmSync } from "fs";
import { resolve } from "path";

const extensions = ["js", "jsx", "ts", "tsx", "mjs"];

const config = [
  {
    external: [/node_modules/],
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      {
        file: pkg.module,
        format: "es",
      },
      {
        name: pkg.name,
        file: pkg.browser,
        format: "umd",
      },
    ],
    plugins: [
      {
        name: "Erase Dist",
        buildStart() {
          rmSync(resolve("dist"), { recursive: true, force: true });
        },
      },
      nodeResolve({ extensions }),
      babel({
        exclude: "node_modules/**",
        extensions,
        include: ["src/**/*"],
      }),
      commonjs({ include: "node_modules/**" }),
      peerDepsExternal(),
      typescript({
        module: "esnext",
        declaration: true,
        declarationDir: "./dist",
      }),
      postcss({
        extract: false,
        inject: (cssVariableName) =>
          `import styleInject from 'style-inject';\nstyleInject(${cssVariableName});`,
        modules: false,
        sourceMap: false,
        use: ["sass"],
      }),
    ],
  },
];

export default config;
