import Link from "next/link";

const BlogList = ( {blog} ) => {
  const url = 'http://127.0.0.1:1337';
  const imgUrl = url + `${blog.attributes.image.data[0].attributes.url}`;
  return (
    <article className='item' key={blog.id}>
      <img src={imgUrl} className='item__img'/>
      <div className='item__description'>
        <span className='item__description__info'>
          {blog.attributes.authors} • {blog.attributes.date}
        </span>
      </div>
      <div className='item__text'>
        <Link href={`blog/` + blog.attributes.slug}>
          <p className='item__text__title'>
            {blog.attributes.title}
          </p>
        </Link>
        <p className='item__text__subtitle'>{blog.attributes.text}</p>
      </div>
      <div className='item__tags'>
        {blog.attributes.tags}
      </div>
    </article>
  )
}

export default BlogList;