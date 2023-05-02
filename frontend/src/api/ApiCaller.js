import axios from 'axios';
import { apiErrorBoundary } from 'exception/ApiBoundary';
import { toCamelCase } from 'util/ConvertConvention';

const callAxios = async ({ url, method, body, headers }, { isCamelResponse = true } = {}) => {
  try {
    const { data } = await axios[method](url, body, { headers });
    return isCamelResponse ? toCamelCase(data.data) : data.data;
  } catch (e) {
    apiErrorBoundary(e);
  }
};

export default callAxios;
