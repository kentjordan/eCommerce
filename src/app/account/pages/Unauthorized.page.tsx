const UnauthorizedPage = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl my-2 ">⚠️ Unauthorized Page</h1>
      <span className="text-sm my-2">
        Redirecting to login page in 2 seconds...
      </span>
    </div>
  );
};

export default UnauthorizedPage;
