export const clearUrlSlashes = (url: string) => {
  return url.replace(/^(?!\/\/)\/|\/$/g, '');
};

export const isHostRelativeUrl = (url: string) => /^\/(?!\/)/.test(url);
