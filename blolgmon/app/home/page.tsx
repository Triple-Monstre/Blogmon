import Image from "next/image";
import Link from "next/link"; // Import du composant Link

interface Article {
  id: number;
  title: string;
  image: string;
}

async function fetchLatestArticles(): Promise<Article[]> {
  const response = await fetch("http://localhost:3000/api/articles", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des articles");
  }
  return response.json();
}

export default async function MainContent() {
  const articles = await fetchLatestArticles();

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Les derniers articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/article?id=${article.id}`} // Crée un lien vers la page Article avec l'ID
            className="bg-white rounded-lg shadow-md p-4 block"
          >
            {/* Image et titre dans le lien */}
            <Image
              src={article.image}
              alt={article.title}
              className="rounded-md"
              width={300}
              height={200}
            />
            <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}