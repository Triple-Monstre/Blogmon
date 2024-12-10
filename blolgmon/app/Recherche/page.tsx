"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const [articles, setArticles] = useState([]); // Initialisation avec un tableau vide
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles?all=true");
        const data = await response.json();
        console.log(data); // Vérifiez que "data.allArticles" est bien un tableau
        setArticles(data.allArticles || []); // Assurez-vous d'avoir un tableau
      } catch (error) {
        console.error("Erreur lors du chargement des articles :", error);
      } finally {
        setLoading(false); // Arrêtez l'indicateur de chargement
      }
    }
    fetchArticles();
  }, []);

  // Filtrer les articles selon le champ de recherche
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Afficher un indicateur de chargement pendant que les données sont récupérées
  if (loading) {
    return <div className="text-center mt-10">Chargement des articles...</div>;
  }

  return (
    <div className="bg-gray-700 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl bg-gray-800 font-bold rounded-xl py-4 px-auto text-gray-300 mt-4 mb-6 text-center">Tout les articles disponibles</h1>

        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article?id=${article.id}`}
              className="bg-purple-600 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-auto overflow-hidden rounded-xl">
                <Image
                  src={article.image || "/default-image.png"} // Ajoutez une image par défaut si nécessaire
                  alt={article.title}
                  className="object-cover w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
              <h3 className="text-white text-xl font-semibold mt-4">{article.title}</h3>
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
