const PageTitle = ({ text }) => {
  return (
    <div className="phone:text-xl tablet:text-3xl laptop:text-5xl text-slate-500 font-bold w-full text-center uppercase my-2  ">
      {text}
    </div>
  );
};

export default PageTitle;
