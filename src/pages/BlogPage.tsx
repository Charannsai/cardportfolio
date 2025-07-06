import React, { useState } from 'react';
import { Calendar, Clock, Eye, Heart, Search, ArrowLeft } from 'lucide-react';
import TopStatusBar from '../components/TopStatusBar';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  category: string;
  image?: string;
}

interface BlogPageProps {
  currentPage: number;
}

const BlogPage: React.FC<BlogPageProps> = ({ currentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for architecting large React applications with sustainable patterns and optimized performance.",
      content: "# Building Scalable React Applications\n\nReact has become the go-to library for building modern web applications. However, as applications grow in size and complexity, developers often face challenges in maintaining code quality, performance, and developer experience.\n\n## Component Architecture\n\nOne of the most important aspects of building scalable React applications is having a solid component architecture. This includes:\n\n- **Atomic Design Principles**: Breaking down your UI into atoms, molecules, organisms, templates, and pages\n- **Component Composition**: Favoring composition over inheritance to reuse code between components\n- **Container/Presentational Pattern**: Separating business logic from UI rendering\n\n## State Management\n\nAs your application grows, state management becomes increasingly complex. Consider these approaches:\n\n- **Local State**: Use React's useState for component-specific state\n- **Context API**: For state that needs to be accessed by many components\n- **Redux/Zustand/Jotai**: For more complex state management needs\n\n## Performance Optimization\n\nKeep your React application performant with these techniques:\n\n- **Code Splitting**: Use React.lazy and Suspense to split your bundle\n- **Memoization**: Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders\n- **Virtualization**: Implement windowing for long lists using libraries like react-window\n\n## Testing Strategy\n\nA comprehensive testing strategy ensures your application remains stable as it grows:\n\n- **Unit Tests**: For testing individual components and functions\n- **Integration Tests**: For testing how components work together\n- **End-to-End Tests**: For testing complete user flows\n\n## Conclusion\n\nBuilding scalable React applications requires thoughtful architecture, state management, performance optimization, and testing. By following these principles, you can ensure your application remains maintainable and performant as it grows.",
      date: "Dec 8, 2024",
      readTime: "5 min read",
      views: 1234,
      likes: 89,
      category: "React",
      image: "/images/react-banner.jpg"
    },
    {
      id: 2,
      title: "Understanding System Design",
      excerpt: "A comprehensive guide to system design principles for building robust and scalable applications.",
      content: "# Understanding System Design\n\nSystem design is a critical skill for software engineers working on large-scale applications. This guide covers the fundamental principles and approaches to designing robust, scalable systems.\n\n## Key Principles\n\n- **Scalability**: Ability to handle growing amounts of work\n- **Reliability**: System continues to work correctly even when things go wrong\n- **Availability**: System remains operational and accessible when needed\n- **Efficiency**: System performs its functions with minimal resource consumption\n- **Maintainability**: System can be easily modified and extended\n\n## Common Architectural Patterns\n\n### Microservices\nBreaking down applications into small, independent services that communicate over a network.\n\n### Event-Driven Architecture\nDesigning systems around the production, detection, and consumption of events.\n\n### Layered Architecture\nOrganizing components into horizontal layers, each serving a specific role.\n\n## Scalability Techniques\n\n### Vertical Scaling (Scaling Up)\nAdding more resources (CPU, RAM) to existing machines.\n\n### Horizontal Scaling (Scaling Out)\nAdding more machines to your resource pool.\n\n### Database Scaling\n- Replication: Maintaining multiple copies of data\n- Sharding: Partitioning data across multiple databases\n- Read replicas: Distributing read operations across multiple database instances\n\n## Load Balancing\n\nDistributing traffic across multiple servers to ensure no single server becomes overwhelmed.\n\n## Caching\n\nStoring frequently accessed data in memory to reduce database load and improve response times.\n\n## Conclusion\n\nSystem design is both an art and a science. By understanding these fundamental principles, you can design systems that are not only scalable and efficient but also reliable and maintainable over the long term.",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      views: 2156,
      likes: 145,
      category: "System Design",
      image: "/images/system-design.jpg"
    },
    {
      id: 3,
      title: "Machine Learning for Developers",
      excerpt: "Getting started with ML as a web developer - practical applications and integration strategies.",
      content: "Full content about machine learning for developers...",
      date: "Dec 1, 2024",
      readTime: "6 min read",
      views: 987,
      likes: 67,
      category: "ML",
      image: "/images/ml-dev.jpg"
    },
    {
      id: 4,
      title: "Advanced CSS Techniques",
      excerpt: "Mastering modern CSS with animations, grid layouts, and responsive design patterns.",
      content: "Full content about advanced CSS techniques...",
      date: "Nov 28, 2024",
      readTime: "4 min read",
      views: 754,
      likes: 42,
      category: "Web Dev",
      image: "/images/css-advanced.jpg"
    },
    {
      id: 5,
      title: "GraphQL vs REST API Design",
      excerpt: "A detailed comparison of GraphQL and REST approaches with practical implementation examples.",
      content: "Full content comparing GraphQL and REST APIs...",
      date: "Nov 25, 2024", 
      readTime: "7 min read",
      views: 1843,
      likes: 112,
      category: "Web Dev",
      image: "/images/api-design.jpg"
    }
  ];

  const categories = ["All", "React", "System Design", "ML", "DSA", "Web Dev"];
  const featuredPost = blogPosts[0]; // Most recent post
  const otherPosts = blogPosts.slice(1);

  // Function to handle opening a blog post
  const handleOpenPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0); // Scroll back to top when opening a post
  };

  // Function to go back to blog list
  const handleBackToBlogList = () => {
    setSelectedPost(null);
  };

  // Render markdown content (simple implementation)
  const renderMarkdown = (content: string) => {
    // This is a very basic markdown renderer - in a real app, use a library like react-markdown
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-2xl font-bold mb-4">{paragraph.substring(2)}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-bold mt-5 mb-2">{paragraph.substring(4)}</h3>;
      } else if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item => item.substring(2));
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-1">
            {items.map((item, i) => <li key={i} className="text-gray-700">{item}</li>)}
          </ul>
        );
      } else {
        return <p key={index} className="mb-4 text-gray-700">{paragraph}</p>;
      }
    });
  };

  return (
    <div className="w-full h-full overflow-hidden bg-gray-100">
        <TopStatusBar />
        
      <div className="h-full overflow-y-auto scrollbar-hide">
      
        <div className="max-w-6xl mx-auto p-6">
          {!selectedPost ? (
            // Blog List View
            <>
              {/* Blog Header */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">My Blog</h1>
                <p className="text-gray-600 text-sm">Sharing knowledge and insights</p>
              </div>
              
              {/* Main Content Area */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Featured Post - Left */}
                <div className="md:w-2/3">
                  <div 
                    className="bg-white rounded-lg shadow-sm p-5 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleOpenPost(featuredPost)}
                  >
                    {featuredPost.image && (
                      <div className="h-48 overflow-hidden rounded-lg mb-4">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="mb-3">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{featuredPost.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{featuredPost.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-blue-500 text-sm font-medium">
                      Read More
                    </div>
                  </div>
                </div>
                
                {/* Right Side: Search & Categories */}
                <div className="md:w-1/3 space-y-4">
                  {/* Search Bar */}
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className={`text-xs px-3 py-1 rounded-full ${
                            category === "All" 
                              ? "bg-blue-500 text-white" 
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Writing Stats */}
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-3">Writing Stats</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-600">Total Posts</span>
                        <span className="text-xs font-semibold">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-600">Total Views</span>
                        <span className="text-xs font-semibold">12.4K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-600">Total Likes</span>
                        <span className="text-xs font-semibold">892</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Posts Grid */}
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherPosts.map((post) => (
                    <div 
                      key={post.id} 
                      className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => handleOpenPost(post)}
                    >
                      {post.image && (
                        <div className="h-32 overflow-hidden rounded-lg mb-3">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="mb-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-800 mb-2 text-sm leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            // Blog Post Detail View
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button 
                onClick={handleBackToBlogList}
                className="flex items-center text-blue-500 mb-4 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Blog
              </button>
              
              {selectedPost.image && (
                <div className="h-64 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="mb-4">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {selectedPost.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1 mr-4">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center space-x-1 mr-4">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-1 mr-4">
                  <Eye className="w-4 h-4" />
                  <span>{selectedPost.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{selectedPost.likes} likes</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                {renderMarkdown(selectedPost.content)}
              </div>
            </div>
          )}
          
          {/* Small empty space at bottom */}
          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;