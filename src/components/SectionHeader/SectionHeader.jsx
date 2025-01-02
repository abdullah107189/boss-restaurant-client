// eslint-disable-next-line react/prop-types
const SectionHeader = ({ subTitle, title }) => {
    return (
        <div className="text-center md:w-4/12 w-2/3 mx-auto my-5">
            <p className="text-orange-400 italic">--- {subTitle} ---</p>
            <p className="border-y-2 md:py-4 py-2 mt-2 uppercase font-bold text-2xl">{title}</p>
        </div>
    );
};

export default SectionHeader;