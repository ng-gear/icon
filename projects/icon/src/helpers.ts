export const clearUrlSlashes = (url: string) => {
  return url.replace(/^(?!\/\/)\/|\/$/g, '');
};

export const isHostRelativeUrl = (url: string) => /^\/(?!\/)/.test(url);

export const isAbsoluteUrl = (url: string) => {
  const isBase64 = /^data:/.test(url);
  const isProtocol = /^\w+:\/\//.test(url) || /^\/\//.test(url);
  return isBase64 || isProtocol;
};
