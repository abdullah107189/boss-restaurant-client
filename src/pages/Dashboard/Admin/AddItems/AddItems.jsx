import { useState } from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import { MdRestaurantMenu } from 'react-icons/md';
import { useForm } from "react-hook-form"
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
// import axios from 'axios';
import toast from "react-hot-toast";

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    // fileChnage
    const [fileName, setFileName] = useState('No file chosen');
    const { handleSubmit, formState: { errors }, register } = useForm()

    const onSubmit = async (d) => {
        const imageFile = { image: d.image[0] };

        // const imageFile = d.image[0];
        // const imageFormFile = new FormData()
        // imageFormFile.append('image', imageFile)
        // const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, imageFormFile)
        // console.log(data.data.url);

        const { data: imgData } = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        const manageItem = {
            name: d.name,
            recipe: d.recipe,
            image: imgData?.data?.url,
            category: d.category,
            price: parseFloat(d.price)
        }
        if (imgData.data.url) {
            const { data: addItem } = await axiosSecure.post('/menus', manageItem)
            console.log(addItem);
            if (addItem.insertedId) {
                toast.success('added successfully done !')
            }
        }
    }

    return (
        <div>
            <SectionHeader subTitle={"What's new?"} title={"add in item"}></SectionHeader>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-6 rounded-lg">
                    <div className="mb-4">
                        <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">
                            Recipe Name*
                        </label>
                        <input
                            type="text"
                            id="recipeName"
                            {...register("name", { required: true })}
                            className="mt-1 p-3 focus:outline-none w-full border rounded-md"
                            placeholder="Recipe Name"
                        />
                        {errors.name?.type === 'required' && <span className='text-red-400'>This field is required</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category*
                            </label>
                            <select
                                id="category"
                                {...register("category", { required: true })}
                                className="mt-1 p-3 focus:outline-none w-full border rounded-md"
                            >
                                <option value="">Select Category</option>
                                <option value="dessert">Dessert</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="drinks">Drinks</option>
                                <option value="soup">Soup</option>
                                <option value="offered">Offered</option>
                                {/* Add more category options */}
                            </select>
                            {errors.category?.type === 'required' && <span className='text-red-400'>This field is required</span>}
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price*
                            </label>
                            <input
                                type="number"
                                id="price"
                                step="0.000000000000001"
                                {...register("price", { required: true })}
                                className="mt-1 p-3 focus:outline-none w-full border rounded-md"
                                placeholder="Price"
                            />
                            {errors.price?.type === 'required' && <span className='text-red-400'>This field is required</span>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="recipeDetails" className="block text-sm font-medium text-gray-700">
                            Recipe Details*
                        </label>
                        <textarea
                            id="recipeDetails"
                            {...register("recipe", { required: true })}
                            className="mt-1 p-3 focus:outline-none w-full border rounded-md"
                            rows={4}
                            placeholder="Recipe Details"
                        />
                        {errors.recipe?.type === 'required' && <span className='text-red-400'>This field is required</span>}
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="relative cursor-pointer">
                            <input
                                type="file"
                                className="hidden"
                                {...register("image", {
                                    required: true, onChange: e => {
                                        const file = e.target.files[0];
                                        setFileName(file ? file.name : 'No file chosen')
                                    }
                                })}

                                id="file-upload"
                            />
                            <span className="inline-block px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                                Choose File
                            </span>
                        </label>
                        <span className="text-gray-600 text-sm">{fileName}</span>
                    </div>
                    {errors.image?.type === 'required' && <span className='text-red-400'>This field is required</span>}


                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#835D23] to-[#B58130] text-white font-bold py-2 px-4 rounded-md flex items-center mt-2"
                    >
                        <MdRestaurantMenu className="mr-2" /> Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;