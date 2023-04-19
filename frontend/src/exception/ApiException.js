export const handleApiException = response => {
  console.log(response);
  switch (response.status.code) {
    case 404:
      console.error(response.status.message);
      break;
    default:
      console.error('알 수 없는 에러 발생');
  }
};
