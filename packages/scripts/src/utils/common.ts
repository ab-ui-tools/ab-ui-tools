export const addTrailingSlash = (url = '/'): string => {
  if (url.substr(-1) !== '/') return `${url}/`;

  return url;
};

export const getProcessOptions = (): Record<string, string | undefined> => {
  const args = process.argv.slice(2);

  return args.reduce((acc, arg) => {
    const [argName = '', argValue] = arg.split('=');

    return {
      [argName.replace('--', '')]: argValue,
      ...acc,
    };
  }, {});
};
