import React from "react";
import Mancetegory from "../assets/images/young-man.jpg";
import Womancetegory from "../assets/images/woman1.jpg";
import Kidcetegory from "../assets/images/kid2.jpg";

const CategorySection = () => {
  const Categories = [
    {
      title: "Men",
      imageUrl: Mancetegory,
    },
    {
      title: "Women",
      imageUrl: Womancetegory,
    },
    {
      title: "Kids",
      imageUrl: Kidcetegory,
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
      {Categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>

          <div className="absolute top-20 left-12">
            <p className=" text-2xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
