# LinkLens

[![npm version](https://img.shields.io/npm/v/linklens)](https://www.npmjs.com/package/linklens)
[![npm downloads](https://img.shields.io/npm/dt/linklens)](https://www.npmjs.com/package/linklens)
[![License](https://img.shields.io/npm/l/linklens)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-19%2B-blue)](https://reactjs.org/)

LinkLens is a lightweight **React npm package** that automatically detects URLs in any text (comments, chat messages, posts) and highlights them. You can also enable **rich link previews** with thumbnails, titles, and descriptions — similar to how social media platforms preview links.


## Installation

```sh
npm install linklens --force
```


## Features

- Detects and highlights URLs, hyperlinks, mentions (@username), and hashtags (#topic) in text (React link highlighter, URL parser)
- Generates rich link previews with thumbnails, titles, and descriptions (React social media preview)
- Supports hover previews and clickable links (React interactive link component)
- Custom regex support for matching patterns like hashtags, mentions, or custom keywords (React text parser)
- Lightweight and optimized for React 18+ projects (npm package, zero dependencies)
- Fully customizable link colors, HTML tags, and container styles (React component styling)
- Works with chat messages, comments, posts, blogs, and forums (React chat app, comment system)
- Easy integration into React projects with minimal setup (npm React library, link detection)
- Supports accessibility-friendly links and previews (React ARIA support, screen reader friendly)



## Usage

### 1. Basic Link Highlighting

```js
"use client";

import LinkLens from "linklens";

export default function LinkHighlight() {
  return (
    <main>
      <LinkLens
        content={"Hi ✋ there https://github.com/DeveloperAromal follow my github account for more 😎"}
        highlightLink={true}
      />
    </main>
  );
}

```

### 2. Custom Link Color

```js
"use client";

import LinkLens from "linklens";

export default function CustomLinkColor() {
  return (
    <main>
      <LinkLens
        content="Hi ✋ there https://github.com/DeveloperAromal follow my github account for more 😎"
        highlightLink={true}
        linkColor="purple"
      />
    </main>
  );
}

```



### 3. Rich Preview Card

```js
"use client";

import LinkLens from "linklens";

export default function RichCardPreview() {
  return (
    <main>
      <LinkLens
        content="Hi ✋ there https://github.com/DeveloperAromal follow my github account for more 😎"
        previewCard={true}
      />
    </main>
  );
}

```


### 4. Hover Preview

```js
"use client";

import LinkLens from "linklens";

export default function HoverPreview() {
  return (
    <main>
      <LinkLens
        content="Hi ✋ there https://github.com/DeveloperAromal follow my github account for more 😎"
        hoverPreview={true}
      />
    </main>
  );
}

```

### 5. Custom Regex Pattern

```js
"use client";

import LinkLens from "linklens";

export default function CustomRegexPattern() {
  return (
    <main>
      <LinkLens
        content="Mentioned @aromal in this post"
        customRegex={true}
        pattern="@\\w+"
        tag="span"
        customTagColor="red"
      />
    </main>
  );
}

```


### 6. Using a Custom Container Class

```js
"use client";

import LinkLens from "linklens";

export default function CustomClassname() {
  return (
    <main>
      <LinkLens
        content="Hi ✋ there https://github.com/DeveloperAromal follow my github account for more 😎"
        classname="p-4 bg-gray-100 rounded-lg"
      />
    </main>
  );
}

```

### 7. Multiple Options Combined

```js
"use client";

import LinkLens from "linklens";

export default function MultipleOptionCombined() {
  return (
    <main>
      <LinkLens
        content="Hi ✋ there https://github.com/DeveloperAromal follow my github account for more 😎"
        highlightLink={true}
        linkColor="teal"
        previewCard={true}
        hoverPreview={true}
      />
    </main>
  );
}

```



## Props

| Prop             | Type      | Default     | Description |
|-----------------|-----------|------------|-------------|
| `content`        | `string`  | `""`       | The text that may contain URLs (e.g. `"Check this https://example.com"`) |
| `highlightLink`  | `boolean` | `true`     | Highlights the link text inside the content |
| `previewCard`    | `boolean` | `false`    | Shows a preview card with title, description, and image |
| `linkColor`      | `string`  | `"blue"`   | CSS color for highlighted links |
| `classname`      | `string`  | `""`       | Additional CSS classes to apply to the container |
| `hoverPreview`   | `boolean` | `false`    | Shows link preview on hover |
| `pattern`        | `string`  | `""`       | Custom regex pattern to match links or text |
| `tag`            | `string`  | `"a"`      | HTML tag to wrap matched content |
| `customRegex`    | `boolean` | `false`    | Enables using the custom regex pattern |
| `customTagColor` | `string`  | `""`       | Color for text wrapped with the custom tag |

---


## License

This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.

---

MIT License © 2025 Aromal
