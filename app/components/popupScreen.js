const popScreen = ({ cardPopUpVisible }) => {
    return (
        <div className=`h-[100vh] w-full py-4 px-5 fixed top-0 left-0 z-20 {cardPopUpVisible ? "block" : "none"}`>
            <div className="flex">
                <button className="p-5 bg-red-500 rounded ml-auto h-[10%]">X</button>
            </div>
            <div className="h-[90%]">
                hello world
            </div>
        </div>
    ) 
}

export default popScreen


