"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string; // Correspond au type de votre `id` dans Prisma
  title: string;
  image: string;
}

interface User {
  name: string;
}


export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]); // Les deux derniers articles publiés
  const [randomArticles, setRandomArticles] = useState<Article[]>([]); // Articles aléatoires d'un auteur
  const [loading, setLoading] = useState(true);
  const [randomUser, setRandomUser] = useState<User | null>(null);

  // Charger les articles depuis l'API
  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles"); // Appel de votre API
        if (response.ok) {
          const data = await response.json();
          setArticles(data.latestArticles); // Stocker les derniers articles
          setRandomArticles(data.randomArticles); // Stocker les articles aléatoires
          setRandomUser(data.randomUser);
        } else {
          console.error("Erreur lors de la récupération des articles.");
        }
      } catch (error) {
        console.error("Erreur API:", error);
      } finally {
        setLoading(false); // Désactiver l'état de chargement
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <section className="p-4">
      {/* Section 1 : Les derniers articles */}
      <h1 className="text-2xl font-bold mb-4 bg-purple-600 text-white rounded-2xl py-3 px-6 text-center mx-auto w-fill">
        Les derniers articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.length > 0 ? (
          articles.map((article) => (
            <Link
              key={article.id}
              href={`/article?id=${article.id}`} // Lien vers la page Article
              className="bg-white rounded-lg shadow-md p-4 block hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image dans un conteneur pour garder une taille uniforme */}
              <div className="w-full h-48 md:h-64 overflow-hidden rounded-md">
                <Image
                  src={article.image || "/placeholder.jpg"} // Image par défaut si absente
                  alt={article.title}
                  className="object-cover w-full h-full"
                  width={600} // Largeur recommandée
                  height={500} // Hauteur recommandée
                />
              </div>
              {/* Titre de l'article */}
              <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
            </Link>
          ))
        ) : (
          <p>Aucun article trouvé.</p>
        )}
      </div>

      {/* Section 2 : Quelques articles d'un utilisateur aléatoire */}
      <h1 className="text-2xl font-bold mb-4 bg-purple-600 text-white rounded-2xl py-3 px-6 text-center mx-auto w-fill">
        {randomUser
          ? `Quelques articles de ${randomUser.name}`
          : "Quelques articles d'un utilisateur aléatoire"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {randomArticles.length > 0 ? (
          randomArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article?id=${article.id}`} // Lien vers la page Article
              className="bg-white rounded-lg shadow-md p-4 block hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image dans un conteneur pour garder une taille uniforme */}
              <div className="w-full h-48 md:h-64 overflow-hidden rounded-md">
                <Image
                  src={article.image || "/placeholder.jpg"} // Image par défaut si absente
                  alt={article.title}
                  className="object-cover w-full h-full"
                  width={600} // Largeur recommandée
                  height={500} // Hauteur recommandée
                />
              </div>
              {/* Titre de l'article */}
              <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
            </Link>
          ))
        ) : (
          <p>Aucun article trouvé pour cet auteur.</p>
        )}
      </div>
    </section>
  );
}
