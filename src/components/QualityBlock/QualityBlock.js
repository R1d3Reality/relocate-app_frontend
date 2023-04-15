const QualityBlock = ({blog}) => {
  return (
    <section className='main__info'>
      <p className='title'>
        {blog.attributes.quality.title}
      </p>
      <p className='text'>
        {blog.attributes.quality.paragraph1}
      </p>
      <p className='text'>
        {blog.attributes.quality.paragraph2}
      </p>
      <p className='text'>
        {blog.attributes.quality.paragraph3}
      </p>
      <p className='text'>
        {blog.attributes.quality.paragraph4}
      </p>
      <p className='text'>
        {blog.attributes.quality.paragraph5}
      </p>
      <p className='text'>
        {blog.attributes.quality.paragraph6}
      </p>
      <p className='text'>
        {blog.attributes.quality.paragraph7}
      </p>
    </section>
  )
}

export default QualityBlock;