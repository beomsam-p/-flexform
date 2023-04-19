export const toCamelCase = obj => {
  if (Array.isArray(obj)) {
    return obj.map(item => toCamelCase(item));
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.replace(/([-_][a-z])/gi, str => str.slice(1).toUpperCase()),
        toCamelCase(value),
      ]),
    );
  }

  return obj;
};

export const toSnakeCase = obj => {
  const snakeCaseObj = {};

  for (const [key, value] of Object.entries(obj)) {
    const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
    snakeCaseObj[snakeCaseKey] = value;
  }

  return snakeCaseObj;
};
