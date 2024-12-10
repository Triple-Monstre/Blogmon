
export default function Home() {
    return (
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Journal de BLOLGMON
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/img/partenariat.avif"
                alt="Partenariat"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Actualité 1</h2>
              <p className="text-gray-600">
                Nouveau partenariat avec le Géant groupe Red Bull qui nous fait l'honneur de renouveler le contrat.Dèbut de la collaboration le 1 janvier n'hésiter pas à suivre nos actualités <a href="https://www.redbull.com/fr-fr/events/red-bull-league-of-its-own/equipes-red-bull-league-of-its-own-paris" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">RED BULL</a>
              </p>
            </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6">
            <video 
              width="600" 
              height="600" 
              controls 
              loop
              src="/img/1210.mp4"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Actualité 2</h2>
            <p className="text-gray-600">
              Dans la saison 2 d'Arcane, Vi et Caitlyn voient leur relation se développer davantage, passant d'une complicité naissante à une connexion plus intime. Leur dynamique est marquée par des moments de tension, de tendresse et de défis, reflétant la profondeur de leurs personnalités et leurs objectifs communs dans Piltover et Zaun. Cette évolution a captivé les fans, malgré quelques controverses liées à la censure de certaines scènes clés.
            </p>
          </div>

  
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact 3</h2>
              <p className="text-gray-600">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }