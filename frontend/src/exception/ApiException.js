export const handleApiException = ({ response: { data: errorResponse } }) => {
  const {
    status: { code, message },
  } = errorResponse;
  switch (code) {
    case 400:
      console.error(`code:${code}, ${message}`);
      break;
    case 404:
      console.error(`code:${code}, ${message}`);
      break;
    default:
      console.error('알 수 없는 에러 발생');
  }
};
