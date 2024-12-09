export default function Home() {
    return (
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <img
              src="https://via.placeholder.com/600x400"
              alt="Article"
              className="w-full h-64 object-cover"
            />
  
            {/* Contenu */}
            <div className="p-6">
              {/* Titre */}
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Titre de l'Article
              </h1>
  
              {/* Texte de l'article */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc vel convallis porta, nulla elit pretium justo, a
                suscipit erat lorem eget magna. Integer sit amet purus nec elit
                aliquam dictum non in urna. Suspendisse potenti. Cras luctus orci
                nec magna pellentesque, ac tempor erat facilisis.
              </p>
  
              {/* Auteur */}
              <div className="border-t pt-4">
                <p className="text-gray-600 text-sm">
                  Écrit par :{" "}
                  <span className="font-semibold text-gray-800">John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }