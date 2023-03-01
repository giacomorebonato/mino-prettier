import Prettier from "prettier";
import * as parserBabel from "prettier/parser-babel";
import { useState } from "react";
import "./App.css";

const json5Plugin: Prettier.Plugin = {
  parsers: {
    "json5-parser": {
      parse(text: string) {
        return parserBabel.parsers.json5.parse(text);
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
        rows={20}
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
