const page = ({ params }: { params: { testId: string } }) => {
  return <div>{params.testId}</div>;
};

export default page;
