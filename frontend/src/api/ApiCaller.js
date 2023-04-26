import axios from 'axios';
import { handleApiException } from 'exception/ApiException';
import { toCamelCase } from 'util/ConvertConvention';

const callAxios = async ({ url, method, body, headers }, { isCamelResponse = true } = {}) => {
  try {
    const { data } = await axios[method](url, body, { headers });
    return isCamelResponse ? toCamelCase(data.data) : data.data;
  } catch (e) {
    handleApiException(e);
  }
};

export default callAxios;
