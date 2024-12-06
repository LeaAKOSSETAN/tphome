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
    <aside className="flex-1 p-4 rounded-lg shadow-md bg-transparent">
      {/* Recent Posts Section */}
      <fieldset className="border border-gray-300 rounded-lg p-4 mb-6">
        <legend className="font-bold text-lg text-gray-800">Recent Posts</legend>
        <div className="flex flex-col gap-4 mt-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <p className="text-red-600 font-bold text-sm">{post.title}</p>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Tags Section */}
      <fieldset className="border border-gray-300 rounded-lg p-4">
        <legend className="font-bold text-lg text-gray-800">Tags</legend>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </fieldset>
    </aside>
  );
};

export default Sidebar;
