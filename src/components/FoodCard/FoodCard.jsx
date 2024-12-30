/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item || {}
    return (
        <div className="card card-compact bg-base-100 rounded-xl shadow-xl lg:px-0 px-4">
            <figure >
                <img
                    className="w-full relative"
                    src={image}
                    alt={name} />
                <p className="px-3 py-1 rounded-lg top-4 right-4 absolute bg-gray-800 text-white">${price}</p>
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