export const highlightLinks = (content, linkColor, highlightLink) => {
  const pattern = /\bhttps?:\/\/[^\s/$.?#].[^\s]*/gi;

  return content.replace(pattern, (url) => {
    const styleAttr = highlightLink ? `style="color: ${linkColor};"` : "";
    return `<a classname="link-highlight" href="${url}" target="_blank" ${styleAttr}>${url}</a>`;
  });
};
