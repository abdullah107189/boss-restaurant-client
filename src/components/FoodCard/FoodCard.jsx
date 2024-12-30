const FoodCard = ({ item }) => {
    const { image, name, recipe } = item || {}
    return (
        <div className="card card-compact bg-base-100 rounded-xl shadow-xl lg:px-0 px-4">
            <figure>
                <img
                    className="w-full"
                    src={image}
                    alt={name} />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-3">
                    <button className="uppercase font-bold rounded-lg border-0 border-b-4 border-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] transform duration-300 px-7 py-3 text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;