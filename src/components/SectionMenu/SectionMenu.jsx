const SectionMenu = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 minW    ">
            {
                items.map(item =>
                    <div className="flex gap-4" key={item?._id}>
                        <img className="w-40 h-24 object-cover rounded-r-full rounded-b-full" src={item?.image} alt={item?.name} />
                        <div>
                            <h1>{item?.name}</h1>
                            <p>{item?.recipe}</p>
                        </div>
                        <p className="text-[#bb8406]">${item?.price}</p>
                    </div>
                )
            }
        </div>
    );
};

export default SectionMenu;