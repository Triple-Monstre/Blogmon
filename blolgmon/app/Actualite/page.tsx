
export default function Home() {
    return (
      <div className="bg-gray-700 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl bg-gray-800 font-bold rounded-xl py-4 px-auto text-gray-300 mt-4 mb-6 text-center">
            Les dernières actus League of Legends
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-800 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src="/img/partenariat.avif"
                alt="Partenariat"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Red Bull x League of Legend</h2>
              <p className="text-white">
                Nouveau partenariat avec le Géant des boissons énergisantes, le groupe Red Bull nous fait l'honneur de renouveler le contrat.Dèbut de la collaboration le 1 janvier; n'hésitez pas à suivre nos actualités <a href="https://www.redbull.com/fr-fr/events/red-bull-league-of-its-own/equipes-red-bull-league-of-its-own-paris" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">RED BULL</a>
              </p>
            </div>
  
          <div className="bg-purple-700 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <video 
              width="600" 
              height="600" 
              controls 
              loop
              src="/img/1210.mp4"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Arcane saison 2 </h2>
            <p className="text-white">
              Dans la saison 2 d'Arcane, Vi et Caitlyn voient leur relation se développer davantage, passant d'une complicité naissante à une connexion plus intime. Leur dynamique est marquée par des moments de tension, de tendresse et de défis, reflétant la profondeur de leurs personnalités et leurs objectifs communs dans Piltover et Zaun. Cette évolution a captivé les fans, malgré quelques controverses liées à la censure de certaines scènes clés.
            </p>
          </div>

  
            <div className="bg-purple-600 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src="/img/hq720.jpg"
                alt="Buff Mundo"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Mundo va où il veut!</h2>
              <p className="text-white">
              Dr. Mundo a été un nerf mineur concernant ses dégâts supplémentaires avec l'attaque de son sort E - Blunt Force Trauma. Désormais, les dégâts bonus passent de 2/2.35/2.7/3.05/3.4% de sa vie maximale à 2/2.25/2.5/2.75/3% de sa vie maximale. Ces changements visent à réduire ses dégâts tout en maintenant sa durabilité et sa capacité à encaisser en tant que tank, notamment avec les récents buffs des objets pour tanks qui augmentaient son efficacité
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }