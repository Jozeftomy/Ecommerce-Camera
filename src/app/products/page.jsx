'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import ReactPaginate from 'react-paginate';

const allProducts = Array.from({ length: 30 }).map((_, i) => ({
  id: String(i + 1),
  name: 'Canon EOS R5 Mark II',
  price: i % 3 === 0 ? '1,89,999' : i % 2 === 0 ? '1,72,999' : '1,74,999',
  image: `/images/camera-${(i % 3) + 1}.jpg`,
  rating: 3,
  tag: 'Best Seller',
}));

const itemsPerPage = 9;

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const offset = currentPage * itemsPerPage;
  const currentItems = allProducts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleProductClick = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-[1440px] px-4 md:px-[120px] pt-4">
        <div className="flex items-center gap-2 text-[16px] sm:text-[18px] font-medium text-[#292627CC] font-manrope">
          <span>Home</span>
          <span>{'>'}</span>
          <span className="text-[#EB3238]">Products</span>
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-4 flex flex-col gap-10 mt-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="w-full md:w-[300px] h-[48px] flex items-center px-4 rounded-full border border-[#D1D1D1] bg-white">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent focus:outline-none text-[16px] text-[#292627]"
            />
            <Search size={20} className="text-[#EB3238]" />
          </div>

          <div className="flex gap-4 w-full md:w-auto justify-center">
            <button className="flex items-center gap-2 px-4 py-2 border border-[#D1D1D1] rounded-full text-[#292627] font-medium bg-white w-full md:w-auto justify-center">
              <SlidersHorizontal size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#D1D1D1] rounded-full text-[#292627] font-medium bg-white w-full md:w-auto justify-center">
              <ArrowUpDown size={16} /> Sort
            </button>
          </div>
        </div>
        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#292627] font-manrope text-center md:text-left">
          Explore Our Product
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
          {currentItems.map((item, index) => (
            <div key={index} onClick={() => handleProductClick(item.id)} className="cursor-pointer">
              <ProductCard
                name={item.name}
                price={item.price}
                image={item.image}
                rating={item.rating}
                tag={item.tag}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            containerClassName="flex flex-wrap gap-[8px] w-full max-w-[366px] h-[54px] items-center justify-center"
            pageClassName="w-[40px] h-[40px] rounded-full border border-[#D1D1D1] flex items-center justify-center text-[#292627] hover:bg-[#EB3238] hover:text-white transition"
            activeClassName="bg-[#EB3238] text-white"
            previousClassName="w-[40px] h-[40px] rounded-full border border-[#D1D1D1] flex items-center justify-center text-[#292627]"
            nextClassName="w-[40px] h-[40px] rounded-full border border-[#D1D1D1] flex items-center justify-center text-[#292627]"
            breakClassName="text-[#999]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
