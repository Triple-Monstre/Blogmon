"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  image: string;
  content: string;
  author: {
    name: string;
  };
}

export default function ArticlePage() {
  const searchParams = useSearchParams(); // Pour récupérer les query parameters
  const id = searchParams.get("id"); // Récupère l'ID depuis la query string
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        if (!id) {
          console.error("ID de l'article non fourni");
          return;
        }

        const response = await fetch(`/api/articles?id=${id}`); // Requête vers l'API avec l'ID
        if (response.ok) {
          const data = await response.json();
          setArticle(data);
        } else {
          console.error("Erreur lors de la récupération de l'article.");
        }
      } catch (error) {
        console.error("Erreur API :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!article) {
    return <div>Aucun article trouvé.</div>;
  }

  return (
    <div className="bg-gray-700 min-h-screen py-10">
  <div className="container mx-auto px-4 rounded-2xl">
    <div className="max-w-3xl mx-auto bg-purple-600 shadow-lg rounded-2xl overflow-hidden">
      {/* Image */}
      <div className="w-full h-auto">
        <Image
          src={article.image || "/placeholder.jpg"}
          alt={article.title}
          className="object-cover w-full rounded-t-2xl"
          width={600}
          height={400}
        />
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h1 className="text-3xl bg-gray-800 font-bold rounded-xl py-4 px-auto text-gray-300 mt-4 mb-6 text-center">
          {article.title}
        </h1>

        <p className="text-gray-200 leading-relaxed mb-6">
          {article.content}
        </p>

        <div className="border-t pt-4">
          <p className="text-gray-200 text-sm">
            Écrit par :{" "}
            <span className="font-semibold text-gray-800">
              {article.author.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
