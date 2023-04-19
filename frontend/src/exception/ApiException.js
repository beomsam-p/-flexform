export const handleApiException = ({
  response: {
    data: { status },
  },
}) => {
  switch (status.code) {
    case 404:
      console.error(status.message);
      break;
    default:
      console.error('알 수 없는 에러 발생');
  }
};
