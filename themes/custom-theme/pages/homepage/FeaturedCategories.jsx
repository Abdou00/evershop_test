import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">NOS CATÉGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="https://picsum.photos/id/27/600/600.webp" alt="Shop men" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            HOMME
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="https://picsum.photos/id/64/600/280.webp" alt="Shop women" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            FEMME
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <img src="https://picsum.photos/id/281/600/280.webp" alt="Shop kids" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            ENFANT
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};