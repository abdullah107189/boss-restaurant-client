import SimpleParallax from "simple-parallax-js";
const ParallaxCover = ({ img, title, subTitle }) => {
    return (
        <div className="relative my-10">
            <SimpleParallax scale={1.7}>
                <img className="md:h-[500px] h-[200px]  object-cover" src={img} alt={"image"} />
            </SimpleParallax>

            <div className=" font-serif bg-black/50 text-white  md:p-10 p-3 text-center md:w-2/3 w-11/12 mx-auto absolute bottom-10 left-4 md:bottom-[25%] md:left-[17%]">
                <h1 className="uppercase md:text-5xl text-2xl font-bold md:mb-4 mb-2">{title}</h1>
                <p className=" uppercase">{subTitle}</p>
            </div>
        </div>
    );
};

export default ParallaxCover;