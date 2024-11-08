import BestSeller from "./components/best-seller";
import HeroCarousel from "./components/hero-carousel";
import ProductCategory from "./components/product-category";

export default function Home() {
  return (
    <div className="flex flex-col gap-5  mt-5 ">
      {/* Hero Section */}
      <HeroCarousel />
      <div className="container mx-auto px-5 sm:px-10 lg:px-20  my-20 md:my-16">
        {/* Product Category */}
        <ProductCategory />

        {/* Best Seller */}
        <BestSeller/>
      </div>
    </div>
  );
}
