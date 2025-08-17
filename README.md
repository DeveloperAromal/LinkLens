# LinkLens

[![npm version](https://img.shields.io/npm/v/linklens)](https://www.npmjs.com/package/linklens)
[![npm downloads](https://img.shields.io/npm/dt/linklens)](https://www.npmjs.com/package/linklens)
[![License](https://img.shields.io/npm/l/linklens)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-19%2B-blue)](https://reactjs.org/)

LinkLens is a lightweight package that detects links inside comments or chat messages, highlights them, and optionally generates rich previews with thumbnails, titles, and descriptions.

## Installation

```sh
npm install linklens --force
```

## Usage

```js
"use client";

import LinkLens from "linklens";

export default function Example() {
  return (
    <main>
      <LinkLens
        content={"Hi ✋ there https://github.com/DeveloperAromal follow my github account for more 😎"}
        highlightLink={true}
        previewCard={true}
        linkColor="green"
      />
    </main>
  );
}

```

## Props

| Prop          | Type      | Default   | Description |
|---------------|----------|-----------|-------------|
| `content`     | `string` | `""`      | The text that may contain URLs (e.g. `"Check this https://example.com"`) |
| `highlightLink` | `boolean` | `true` | Highlights the link text inside the content |
| `previewCard` | `boolean` | `false` | Shows a preview card with title, description, and image |
| `linkColor`   | `string` | `"blue"` | CSS color for highlighted links |

---


## Features

- Detects and highlights links in text
- Optionally generates rich previews (thumbnails, titles, descriptions)
- Lightweight and easy to use

## License

This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.

---

MIT License © 2025 Aromal

```