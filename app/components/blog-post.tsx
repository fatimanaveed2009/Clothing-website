import React from "react";

const BlogSection: React.FC = () => {
  const blogs = [
    {
      image: "/blog-post1.png", 
      tag: "NEW",
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/blog-post2.png",
      tag: "NEW",
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "blog-post3.png",
      tag: "NEW",
      title: "Loudest à la Madison #1 (L'Integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-gray-900 text-2xl font-semibold">Practice Advice</h3>
          <h2 className="text-gray-900 text-4xl font-bold mt-2">Featured Posts</h2>
          <p className="text-gray-600 mt-4">
            Problems trying to resolve the conflict between the two major realms of Classical
            physics: Newtonian mechanics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
                  {blog.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <span>{blog.date}</span> · <span>{blog.comments}</span>
                </div>
                <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
