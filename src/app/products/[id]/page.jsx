'use client';
import { notFound, useRouter, useParams } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { Star } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

const allProducts = Array.from({ length: 30 }).map((_, i) => ({
  id: String(i + 1),
  name: `Canon EOS R5 Mark II`,
  price: ['1,74,999', '1,72,999', '1,89,999'][i % 3],
  image: `/images/camera-${(i % 3) + 1}.jpg`,
  images: [
    `/images/camera-${(i % 3) + 1}.jpg`,
    `/images/camera-${(i % 3 + 1) % 3 + 1}.jpg`,
    `/images/camera-${(i % 3 + 2) % 3 + 1}.jpg`,
    `/images/camera-${(i % 3) + 1}.jpg`,
  ],
  rating: 4,
  tag: 'Best Seller',
  description:
    'Canon EOS R5 Mark II | 45MP Full-Frame | 8K Video | Dual Pixel Autofocus | Great for photography and videography.',
}));

allProducts[0] = {
  ...allProducts[0],
  name: 'Fujifilm X-H2 40MP APS-C X-Trans Sensor',
  price: '1,98,000',
  rating: 3,
  description:
    'Fujifilm X-H2 40MP APS-C X-Trans Sensor | Pixel Shift | IBIS System | Ultra High Resolution Mirrorless Camera | 8k 30p | Subject Tracking With XF16-80mm F/1:4 Lens For Pro Photographers And Videographers',
};

export default function ProductPage() {
  const router = useRouter();
  const params = useParams(); 
  const product = allProducts.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.images?.[0]);

  if (!product) return notFound();

  const handleBuyNow = () => {
    const numericPrice = parseInt(product.price.replace(/,/g, ''));
    const total = numericPrice * quantity;
    router.push(`/checkout?price=${total}&quantity=${quantity}`);
  };

  return (
    <div className="w-full flex flex-col items-center bg-white">
      <Navbar />
      <div className="w-full max-w-[1440px] px-4 md:px-[120px] pt-4">
        <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-medium text-[#292627CC] font-manrope">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Product</span>
          <span>{'>'}</span>
          <span className="text-[#EB3238]">Product Details</span>
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-4 sm:px-6 mt-8 flex flex-col md:flex-row gap-8">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2">
          <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-visible">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border cursor-pointer ${
                  activeImage === img ? 'border-[#EB3238]' : 'border-gray-200'
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
          <div className="w-full max-w-md aspect-square flex items-center justify-center bg-white border border-[#00000026] rounded-[40px] p-6">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#292627]">
            {product.name}
          </h1>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < product.rating ? '#FFD700' : 'none'}
                stroke="#FFD700"
              />
            ))}
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-[#292627]">
            ₹ {product.price}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold">Description: </span>
            {product.description}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center border rounded-full px-3 py-1 text-lg font-semibold text-[#292627]">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2 text-[#EB3238]"
              >
                –
              </button>
              <span className="px-2">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2 text-[#EB3238]"
              >
                +
              </button>
            </div>
            <button
              onClick={handleBuyNow}
              className="px-6 py-2 rounded-full bg-[#EB3238] text-white font-semibold hover:bg-[#c72c30] transition-all"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-4 sm:px-6 mt-12 mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allProducts.slice(1, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
