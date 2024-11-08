import React from "react";
import ProductCard from "./product-card";


const products = [
  {
    productImage: "/bannerImages/Atta_Rava.avif",
    productName: "Atta & Rava",
    href: "/collections/atta-rava",
  },
  {
    productImage: "/bannerImages/Dal_Rice.avif",
    productName: "Dal & Rice",
    href: "/collections/dal-rice",
  },
  {
    productImage: "/bannerImages/FreshVeg_Fruits.avif",
    productName: "Fresh Vegetables & Fruits",
    href: "/collections/snacks-sweet",
  },
  {
    productImage: "/bannerImages/Ghee_Oil.avif",
    productName: "Ghee & Oil",
    href: "/collections/ghee-oil",
  },
  {
    productImage: "/bannerImages/Nut_DryFruit.avif",
    productName: "Nuts & Dryfruits",
    href: "/collections/nuts-dryfruits",
  },
  {
    productImage: "/bannerImages/Tea_Beverages.avif",
    productName: "Tea",
    href: "/collections/tea",
  },
  {
    productImage: "/bannerImages/OtherIngredients.avif",
    productName: "Other Ingredients",
    href: "/collections/other-groceries",
  },
];

const ProductCategory = () => {
  return (
    <div className="mb-16">
      <h1 className=" text-center md:text-left font-bold text-neutral-900 text-2x md:text-3xl">
        Product Category
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-5">
       
        {
          products.map((product,index)=>{
            return <ProductCard key={index} product={product}/>
          })
        }
      </div>
    </div>
  );
};

export default ProductCategory;
