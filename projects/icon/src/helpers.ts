export const clearUrlSlashes = (url: string) => {
  return url.replace(/^(?!\/\/)\/|\/$/g, '');
};
