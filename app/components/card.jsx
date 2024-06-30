const Card = ({index, click}) => {
  return (
    <div 
    	className="w-[95%] h-[18rem] px-4 py-2 flex shadow-sm rounded-lg bg-slate-200 my-7" onClick={() => click()}>
      <div className="flex-[0.65] relative">
        <img src="" alt="Image" className="h-full w-full rounded-t-lg bg-teal-300" />
        <div className="h-12 w-12 bg-red-500 rounded-full absolute bottom-2 right-5"></div>
      </div>
      <div className="flex-1 px-2">
        <div className="flex flex-col flex-1 relative h-full">
          <div className="flex">
            <span className="text-base font-semibold bg-red-500 ml-auto">1/06/2024</span>
          </div>
          <div>
            <h1 className="font-bold text-2xl mt-3 mb-1">General Knowledge for climate change</h1>
            <h3 className="font-light ">Paragraph...</h3>
          </div>
          <div className="bottom-3 flex justify-center items-center absolute text-slate-600 text-sm font-bold">
            <span>
              By Doe Jane Mackdones
            </span>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Card;
