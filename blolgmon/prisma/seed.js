const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
 
async function main() {
  // Création des utilisateurs un par un et récupération de leur id
  const users = await Promise.all([
    prisma.user.create({
      data: { name: "Summoner1", email: "summoner1@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "Summoner2", email: "summoner2@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "LuxMain", email: "luxmain@example.com", role: "editor" }
    }),
    prisma.user.create({
      data: { name: "YasuoOTP", email: "yasuo@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "ADClover", email: "adc@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "JungleKing", email: "jungleking@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "TopLan3r", email: "toplaner@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "DravenIsLife", email: "draven@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "TFTPro", email: "tftpro@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "SupportiveSoul", email: "support@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "TeemoTerror", email: "teemo@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "BaronStealer", email: "baronstealer@example.com", role: "editor" }
    }),
    prisma.user.create({
      data: { name: "ZedShadow", email: "zed@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "AhriCharm", email: "ahri@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "RiftHerald", email: "herald@example.com", role: "editor" }
    }),
    prisma.user.create({
      data: { name: "KDAFan", email: "kdafan@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "UrgotLover", email: "urgot@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "MidLaneGod", email: "midgod@example.com", role: "viewer" }
    }),
    prisma.user.create({
      data: { name: "LeagueGuru", email: "leagueguru@example.com", role: "admin" }
    }),
    prisma.user.create({
      data: { name: "FioraCarry", email: "fiora@example.com", role: "viewer" }
    }),
  ]);
 
  // Création des articles avec les ID des utilisateurs
  const articles = await Promise.all([
    prisma.article.create({
      data: {
        title: "Les 5 meilleurs champions pour grimper en ranked",
        content: "Découvrez les meilleurs champions pour dominer les parties classées en 2024 !",
        authorId: users[0].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "Les secrets des chemins de jungle",
        content: "Maîtrisez les chemins de jungle pour déstabiliser vos adversaires.",
        authorId: users[5].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "Pourquoi Draven est le roi des ADC",
        content: "Un aperçu du kit de Draven et comment porter vos parties avec lui.",
        authorId: users[7].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "Le classement des meilleurs champions de support",
        content: "Découvrez quels champions de support dominent le meta.",
        authorId: users[9].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "Le guide pour dominer la lane du top",
        content: "Comment dominer la lane du top et porter votre équipe.",
        authorId: users[6].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "Les astuces pour les joueurs de Zed en mid-lane",
        content: "Les techniques essentielles pour maîtriser Zed en mid-lane.",
        authorId: users[12].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "Les meilleures constructions pour Ahri en saison 2024",
        content: "Maximisez le potentiel d'Ahri avec ces options de construction.",
        authorId: users[13].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "Comment voler les objectifs comme un pro",
        content: "Apprenez l'art de voler Baron et Dragon.",
        authorId: users[11].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "Teemo : énervant mais efficace",
        content: "Analyse de pourquoi Teemo trouve toujours sa place dans le jeu.",
        authorId: users[10].id,
      },
    }),
    prisma.article.create({
      data: {
        title: "L'histoire de l'esport dans League of Legends",
        content: "Revivez les moments iconiques de Worlds.",
        authorId: users[18].id,
      },
    }),
  ]);
 
  // Création des commentaires pour les articles
  await Promise.all([
    prisma.comment.create({
      data: {
        content: "Super guide ! Ça m'a aidé à passer Gold.",
        articleId: articles[0].id,
        userId: users[1].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: "Je ne suis pas d'accord avec les chemins de jungle, mais bon travail.",
        articleId: articles[1].id,
        userId: users[3].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: "Draven est mon préféré aussi ! Hâte d'essayer tes conseils.",
        articleId: articles[2].id,
        userId: users[7].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: "Cette tier-list est vraiment bien faite !",
        articleId: articles[3].id,
        userId: users[9].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: "Teemo est sous-estimé. Merci pour ces conseils.",
        articleId: articles[8].id,
        userId: users[10].id,
      },
    }),
  ]);
 
  console.log("Seed data has been inserted successfully!");
}
 
main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

