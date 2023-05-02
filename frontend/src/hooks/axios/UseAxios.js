import axios from 'axios';
import { apiErrorBoundary } from 'exception/ApiBoundary';

import { useEffect, useState } from 'react';
import { toCamelCase } from 'util/ConvertConvention';

const useAxios = ({ url, method, body, headers }, { isCamelResponse = true, menual = false } = {}) => {
  const [response, setResponse] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const excution = async body => {
    try {
      const { data } = await axios[method](url, body, { headers });
      const _data = isCamelResponse ? toCamelCase(data) : data;
      setResponse(_data.data);
    } catch (e) {
      setError(true);
      apiErrorBoundary(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    !menual && excution(body);
  }, []);

  return [{ response, isLoading, isError }, excution];
};

export default useAxios;
