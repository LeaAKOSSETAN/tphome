import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ImageList from "./components/ImageList";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  // Exemple de données fictives pour les recentPosts et les tags
  const recentPosts = [
    {
      title: "Post 1",
      image: "https://via.placeholder.com/60", // Exemple d'image
    },
    {
      title: "Post 2",
      image: "https://via.placeholder.com/60", // Exemple d'image
    },
  ];

  const tags = ["React", "Bootstrap", "TypeScript"];

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        {/* Contenu de la page */}
      </div>
      <Footer />
      <ImageList />
      {/* Passer les props à Sidebar */}
      <Sidebar recentPosts={recentPosts} tags={tags} />
    </div>
  );
};

export default App;
