import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const BlogArchive: React.FC = () => {
  const recentPosts = [
    {
      title: "Consectetuer vehicula abb  In Kitchen, Lifestyle",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg", // Remplacez par votre lien
    },
    {
      title: "Post 2",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-150x150.jpg", // Remplacez par votre lien
    },
    {
      title: "Post 3",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-150x150.jpg", // Remplacez par votre lien
    },
    {
      title: "Post 4",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-150x150.jpg", // Remplacez par votre lien
    },
    {
      title: "Post 5",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot-150x150.jpg", // Remplacez par votre lien
    },
  ];

  const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];

  return (
    <div style={mainContainer}>
      <h1>Living Room Blog</h1>
      <div style={contentContainer}>
        <div style={mainColumn}>
          <h2>Articles</h2>
          <p>Vos articles apparaîtront ici.</p>
        </div>
        <Sidebar recentPosts={recentPosts} tags={tags} />
      </div>
      <Footer />
    </div>
  );
};

// Styles
const mainContainer: React.CSSProperties = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
};

const contentContainer: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const mainColumn: React.CSSProperties = {
  flex: 3,
};

export default BlogArchive;
