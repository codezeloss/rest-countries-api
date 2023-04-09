const Loading = () => {
  return (
    <div className="loader absolute h-[40vh] w-full z-20 left-0 right-0">
      <div className="outer"></div>
      <div className="middle"></div>
      <div className="inner"></div>
    </div>
  );
};

export default Loading;
