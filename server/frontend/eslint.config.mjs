import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "rules": {
      "react/react-in-jsx-scope": "off"
    },
    "settings": {
      "react": {
        "version": "detect"  // Automatically detects the React version
      }
    }
  }
  
];