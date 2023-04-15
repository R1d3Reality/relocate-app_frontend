const EducationBlock = ({blog}) => {
  return (
    <section className='main__info'>
      <p className='title'>
        {blog.attributes.education.title}
      </p>
      <p className='text'>
        {blog.attributes.education.paragraph1}
      </p>
      <p className='text'>
        {blog.attributes.education.paragraph2}
      </p>
      <p className='text'>
        {blog.attributes.education.paragraph3}
      </p>
      <p className='text'>
        {blog.attributes.education.paragraph4}
      </p>
      <p className='text'>
        {blog.attributes.education.paragraph5}
      </p>
      <p className='text'>
        {blog.attributes.education.paragraph6}
      </p>
      <p className='text'>
        {blog.attributes.education.paragraph7}
      </p>
    </section>
  )
}

export default EducationBlock;