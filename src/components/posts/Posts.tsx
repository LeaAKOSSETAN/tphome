import React, { useState } from 'react';

function RecentPosts() {
  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      title: "Consectetuer vehicula ab",
      category: "In Kitchen, Lifestyle",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg",
    },
    {
      id: 2,
      title: "Taciti hendrerit dis odit incidunt",
      category: "In Kitchen, Living Room, Reading Room",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-150x150.jpg",
    },
    {
      id: 3,
      title: "Sunt doloremque blandit inven",
      category: "In Living Room",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/08/pic08-free-img.jpg",
    },
    {
      id: 4,
      title: "Fugit quaerat voluptate! Irure.",
      category: "In Living Room",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-150x150.jpg",
    },
    {
      id: 5,
      title: "Litora aptent magnam",
      category: "In Bedroom",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot-150x150.jpg",
    },
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="my-4 bg-light p-4">
      {/* Barre de recherche */}
      <div className="flex justify-center mb-4">
        <div className="w-full md:w-1/2">
          <input 
            type="text" 
            placeholder="Search..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Titre */}
      <div className="mb-6">
        <h5 className="text-left font-bold text-2xl">Recent Posts</h5>
      </div>

      {/* Liste des posts */}
      <div className="">
        {filteredPosts.map(post => (
          <div key={post.id} className="mb-2">
            <div className="border-0 shadow-sm p-4 rounded-lg">
              <div className="flex items-center">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="mr-3 rounded" 
                  style={{ width: '120px', height: '120px' }} 
                />
                <div>
                  <h3 className="text-red-500 text-lg mb-1">{post.title}</h3>
                  <p className="text-gray-500 text-sm">{post.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentPosts;
