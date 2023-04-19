import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (url, method, handleError, options) => {
  const [response, setResponse] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const excution = async () => {
    setLoading(true);
    console.log('async 내부 isLoading:', isLoading);

    try {
      const { data } = await axios[method](url, options);
      setResponse(data);
    } catch (e) {
      setError(true);
      handleError && handleError(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    excution();
    console.log('isLoading', isLoading);
  }, []);

  return [{ response, isLoading, isError }, excution];
};

export default useAxios;
