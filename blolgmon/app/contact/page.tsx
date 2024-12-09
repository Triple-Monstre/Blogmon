
export default function Home() {
        return (
          <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Contact
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Placeholder"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact 1</h2>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    sit amet.
                  </p>
                </div>
      
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Placeholder"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact 2</h2>
                  <p className="text-gray-600">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque.
                  </p>
                </div>
      
                {/* Section 3 */}
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