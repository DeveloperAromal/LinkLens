export const applyCustomRegex = (content, pattern, tag, customTagColor) => {
  const getTag = (tag) => {
    switch (tag) {
      case "a":
        return `<a style="color: ${customTagColor}">$&</a>`;
      case "span":
        return `<span style="color: ${customTagColor}">$&</span>`;
      case "mark":
        return `<mark style="color: ${customTagColor}">$&</mark>`;
      case "strong":
        return `<strong style="color: ${customTagColor}">$&</strong>`;
      case "em":
        return `<em style="color: ${customTagColor}">$&</em>`;
      case "code":
        return `<code style="color: ${customTagColor}">$&</code>`;
      case "div":
        return `<div style="color: ${customTagColor}">$&</div>`;
      default:
        return `$&`;
    }
  };

  const matches = content.replace(pattern, getTag(tag));

  return matches;
};
