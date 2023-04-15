import BlogList from "@/components/Blog/BlogList";
import Header from "@/components/Header/Header";

const Blog = ({blogs}) => {
  return (
    <main className='blog'>
      <Header />
      <div className="container">
        <div className="list">
          {blogs.data.map(blog => {
            return <BlogList blog={ blog } key={blog.id} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Blog;