import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Récupérer les deux derniers articles
    const latestArticles = await prisma.article.findMany({
      orderBy: { createdAt: 'desc' },
      take: 2,
    });

    // Vérifier qu'il y a des articles dans la base
    if (latestArticles.length === 0) {
      return NextResponse.json({ error: 'Aucun article trouvé.' }, { status: 404 });
    }

    // Récupérer les utilisateurs ayant au moins un article
    const usersWithArticles = await prisma.user.findMany({
      where: {
        articles: {
          some: {}, // Filtre pour trouver les utilisateurs ayant au moins un article
        },
      },
      select: { id: true }, // On ne récupère que les IDs pour optimiser la requête
    });

    // Vérifier qu'il existe des utilisateurs ayant des articles
    if (usersWithArticles.length === 0) {
      return NextResponse.json({ error: 'Aucun utilisateur avec des articles trouvé.' }, { status: 404 });
    }

    // Choisir un utilisateur au hasard parmi ceux ayant des articles
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
        id: 'asc',
      },
      skip: Math.floor(Math.random() * (await prisma.user.count({
        where: {
          articles: {
            some: {}, // Uniquement les utilisateurs ayant des articles
          },
        },
      }))),
    });

    if (!randomUser) {
      return NextResponse.json(
        { error: 'Aucun utilisateur avec des articles trouvé.' },
        { status: 404 }
      );
    }

    // Récupérer deux articles aléatoires pour cet utilisateur
    const randomArticles = await prisma.article.findMany({
      where: { authorId: randomUser.id },
      orderBy: { createdAt: 'desc' },
      take: 2,
    });

    // Vérifier qu'il y a bien des articles associés à l'utilisateur
    if (randomArticles.length === 0) {
      return NextResponse.json({ error: 'Aucun article trouvé pour cet utilisateur.' }, { status: 404 });
    }

    // Réponse finale
    return NextResponse.json({
      latestArticles,
      randomArticles,
      randomUser: {
        name: randomUser.name, // Assurez-vous que le champ existe dans votre modèle
      },
    });
  } catch (error) {
    console.error('Erreur API :', error);
    return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
