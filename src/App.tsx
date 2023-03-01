import * as parser from "jsonc-eslint-parser";
import Prettier from "prettier";
import { useState } from "react";
import "./App.css";

const json5Plugin: Prettier.Plugin = {
  parsers: {
    "json5-parser": {
      parse(text: string) {
        return parser.parseForESLint(text).ast;
      },
      astFormat: "estree",
    },
  },
};

function App() {
  const [text, setText] = useState(`{



    a: 2,
    b: "3"
  }`);

  return (
    <div className="App">
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setText(
            Prettier.format(text, {
              parser: "json5-parser",
              plugins: [json5Plugin],
              trailingComma: "all",
              tabWidth: 4,
            })
          );
        }}
      >
        Prettify
      </button>
    </div>
  );
}

export default App;
