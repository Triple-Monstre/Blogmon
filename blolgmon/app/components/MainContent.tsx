import React from "react";
import Image from 'next/image';

const MainContent = () => {
  return (
    <main className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center mb-5">Category: Business</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="bg-white shadow-lg rounded p-5">
          <Image src="/temu gnar.webp" width={(1024)} height={(1024)} alt="News" className="w-full h-64 object-cover rounded mb-3" />
          <h2 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet elit...</h2>
          <p className="text-gray-600">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna...</p>
        </article>
        <article className="bg-white shadow-lg rounded p-5">
        <Image src="/malphite.png" width={(1024)} height={(1024)} alt="News" className="w-full h-64 object-cover rounded mb-3" />
          <h2 className="text-xl font-bold mb-2">Dolor lorem eos dolor duo...</h2>
          <p className="text-gray-600">Dolor sit magna rebum clita rebum dolor stet amet justo...</p>
        </article>
      </div>
    </main>
  );
};

export default MainContent;