import tseslint from "@typescript-eslint/eslint-plugin"; 
import tsParser from "@typescript-eslint/parser"; 
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.ts", "**/*.tsx"],
        ignores: ["node_modules/", "playwright-report/", "test-results/"],
        languageOptions: {
            parser: tsParser,
            sourceType: "module",
        },
        plugins: {
            "@typescript-eslint": tseslint,
        },
        rules: {
            "semi": "error",
            "prefer-const": "error",
            "@typescript-eslint/no-unused-vars": "warn",
        },
    }
]);
