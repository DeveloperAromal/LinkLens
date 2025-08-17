export const extractLink = (content) => {
  const pattern = /\bhttps?:\/\/[^\s/$.?#].[^\s]*/gi;

  const url = content.match(pattern)[0];

  return url;
};
