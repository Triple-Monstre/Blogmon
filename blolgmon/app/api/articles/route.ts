import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const articleId = url.searchParams.get("id"); // Ex: /api/articles?id=123
    const allArticles = url.searchParams.get("all"); // Ex: /api/articles?all=true

    if (articleId) {
      // Récupérer un article spécifique par ID
      const article = await prisma.article.findUnique({
        where: { id: articleId },
        include: {
          author: { select: { name: true } }, // Inclure l'auteur de l'article
        },
      });

      if (!article) {
        return NextResponse.json(
          { error: "Article non trouvé." },
          { status: 404 }
        );
      }

      return NextResponse.json(article);
    }

    if (allArticles) {
      // Récupérer tous les articles pour la recherche
      const articles = await prisma.article.findMany({
        orderBy: { createdAt: "desc" },
      });

      if (articles.length === 0) {
        return NextResponse.json(
          { error: "Aucun article trouvé." },
          { status: 404 }
        );
      }

      return NextResponse.json({ allArticles: articles });
    }

    // Continuer avec la logique existante pour les derniers articles et utilisateur aléatoire

    // Récupérer les deux derniers articles
    const latestArticles = await prisma.article.findMany({
      orderBy: { createdAt: "desc" },
      take: 2,
    });

    if (latestArticles.length === 0) {
      return NextResponse.json(
        { error: "Aucun article trouvé." },
        { status: 404 }
      );
    }

    // Récupérer les utilisateurs ayant au moins un article
    const usersWithArticles = await prisma.user.findMany({
      where: {
        articles: {
          some: {}, // Filtre pour trouver les utilisateurs ayant au moins un article
        },
      },
      select: { id: true }, // Optimiser la requête en ne récupérant que les IDs
    });

    if (usersWithArticles.length === 0) {
      return NextResponse.json(
        { error: "Aucun utilisateur avec des articles trouvé." },
        { status: 404 }
      );
    }

    // Choisir un utilisateur aléatoire parmi ceux ayant des articles
    const randomUser = await prisma.user.findFirst({
      select: {
        id: true,
        name: true, // Inclure explicitement le champ "name"
      },
      where: {
        articles: {
          some: {}, // Vérifie que l'utilisateur a au moins un article
        },
      },
      orderBy: {
        id: "asc",
      },
      skip: Math.floor(
        Math.random() *
          (await prisma.user.count({
            where: {
              articles: {
                some: {}, // Filtre pour les utilisateurs ayant des articles
              },
            },
          }))
      ),
    });

    if (!randomUser) {
      return NextResponse.json(
        { error: "Aucun utilisateur avec des articles trouvé." },
        { status: 404 }
      );
    }

    // Récupérer deux articles aléatoires pour cet utilisateur
    const randomArticles = await prisma.article.findMany({
      where: { authorId: randomUser.id },
      orderBy: { createdAt: "desc" },
      take: 2,
    });

    if (randomArticles.length === 0) {
      return NextResponse.json(
        { error: "Aucun article trouvé pour cet utilisateur." },
        { status: 404 }
      );
    }

    // Réponse finale
    return NextResponse.json({
      latestArticles,
      randomArticles,
      randomUser: {
        name: randomUser.name,
      },
    });
  } catch (error) {
    console.error("Erreur API :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
