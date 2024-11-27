// app/api/articles/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        title: true,
        image: true, // Sélection de l'image
      },
    });
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles :', error);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}