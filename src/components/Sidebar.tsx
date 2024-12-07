import React from "react";

interface Post {
  title: string;
  image: string; // URL de l'image
}

interface SidebarProps {
  recentPosts: Post[];
  tags: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ recentPosts, tags }) => {
  return (
    <aside style={sidebarStyle}>
      {/* Recent Posts Section */}
      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Recent Posts</legend>
        <div style={recentPostsStyle}>
          {recentPosts.map((post, index) => (
            <div key={index} style={postStyle}>
              <img
                src={post.image}
                alt={post.title}
                style={imageStyle}
              />
              <p style={titleStyle}>{post.title}</p> {/* Titre en rouge */}
            </div>
          ))}
        </div>
      </fieldset>

      {/* Tags Section */}
      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Tags</legend>
        <div>
          {tags.map((tag, index) => (
            <span key={index} style={tagStyle}>
              {tag}
            </span>
          ))}
        </div>
      </fieldset>
    </aside>
  );
};

// Styles
const sidebarStyle: React.CSSProperties = {
  flex: 1,
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const fieldsetStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px",
  marginBottom: "20px",
  backgroundColor: "transparent", // Fond transparent
};

const legendStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.2em",
  color: "#333",
};

const recentPostsStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const postStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const imageStyle: React.CSSProperties = {
  width: "60px",
  height: "60px",
  objectFit: "cover",
  borderRadius: "8px",
};

const titleStyle: React.CSSProperties = {
  color: "red", // Titre complet en rouge
  fontWeight: "bold",
  margin: 0,
  fontSize: "1rem",
};

const tagStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#ddd",
  borderRadius: "5px",
  padding: "5px 10px",
  margin: "5px",
};

export default Sidebar;
