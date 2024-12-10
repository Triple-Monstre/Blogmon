"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const articles = [
  { id: 1, title: "Article sur Gragas", image: "/img/gragas.png" },
  { id: 2, title: "Article sur Malphite", image: "/img/malphite.png" },
  { id: 3, title: "Article sur Teemo", image: "/img/teemo_pizza.webp" },
  { id: 4, title: "Teemo dans la jungle", image: "/img/teemo_pizza.webp" },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Rechercher un article</h1>


        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article?id=${article.id}`}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-60 overflow-hidden rounded-md">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{article.title}</h3>
            </Link>
          ))}
        </div>


        {filteredArticles.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            Aucun article ne correspond à votre recherche.
          </p>
        )}
      </div>
    </div>
  );
}
