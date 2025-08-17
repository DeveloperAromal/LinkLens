export const highlightLinks = (content, linkColor, highlightLink) => {
  const pattern = /\w+:\/\/[\w.-]+\.[a-z]{2,}/gi;

  return content.replace(pattern, (url) => {
    const styleAttr = highlightLink ? `style="color: ${linkColor};"` : "";
    return `<a href="${url}" target="_blank" ${styleAttr}>${url}</a>`;
  });
};
