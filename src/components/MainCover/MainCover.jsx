const MainCover = ({ img, title, subTitle }) => {
    return (
        <div className="lg:h-[600px] md:h-[500px] h-[250px] flex items-center justify-center" style={{ backgroundImage: `url("${img}")`, backgroundSize: "cover" }}>
            <div className="bg-black/50 text-white font-serif md:p-20 p-10 text-center">
                <h1 className="uppercase md:text-7xl text-3xl font-bold mb-4">{title}</h1>
                <p className="text-xs md:text-sm uppercase">{subTitle}</p>
            </div>
        </div>
    );
};

export default MainCover;