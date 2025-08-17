export const extractLink = (content) => {
  const pattern = /\bhttps?:\/\/[^\s/$.?#].[^\s]*/gi;
  const matches = content.match(pattern);

  if (!matches) {
    return "";
  }

  return matches[0];
};
