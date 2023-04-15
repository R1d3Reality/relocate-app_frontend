const CultureBlock = ({blog}) => {
  return (
    <section className='main__info'>
      <p className='title'>
        {blog.attributes.culture.title}
      </p>
      <p className='text'>
        {blog.attributes.culture.paragraph1}
      </p>
      <p className='text'>
        {blog.attributes.culture.paragraph2}
      </p>
      <p className='text'>
        {blog.attributes.culture.paragraph3}
      </p>
      <p className='text'>
        {blog.attributes.culture.paragraph4}
      </p>
      <p className='text'>
        {blog.attributes.culture.paragraph5}
      </p>
      <p className='text'>
        {blog.attributes.culture.paragraph6}
      </p>
      <p className='text'>
        {blog.attributes.culture.paragraph7}
      </p>
    </section>
  )
}

export default CultureBlock;