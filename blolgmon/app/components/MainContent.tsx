"use client"; // Indiquer que ce composant est un composant client

import { useEffect, useState } from 'react';

interface Article {
  id: number;
  title: string;
  image: string;
}

export default function MainContent() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer les articles depuis l'API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles'); // Appel de l'API
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }
        const data = await response.json();
        setArticles(data); // Sauvegarde des articles dans l'état
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Erreur inconnue');
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };

    fetchArticles();
  }, []); // L'effet se lance une seule fois au chargement du composant

  // Affichage si les articles sont en train de se charger
  if (isLoading) return <p>Chargement des articles...</p>;

  // Affichage si une erreur se produit
  if (error) return <p>Erreur : {error}</p>;

  // Affichage des articles
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} style={{ marginBottom: '20px' }}>
          <img src={article.image} alt={article.title} style={{ width: '100%', maxWidth: '300px' }} />
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
}
