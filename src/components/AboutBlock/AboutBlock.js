const AboutBlock = ({blog}) => {
  return (
    <section className='main__info'>
      <p className='main__info__title'>
        Capital city: <span className='main__info__text'>{blog.attributes.capital}</span>
      </p>
      <p className='main__info__title'>
        Language: <span className='main__info__text'>{blog.attributes.language}</span>
      </p>
      <p className='main__info__title'>
        Currency: <span className='main__info__text'>{blog.attributes.currency}</span>
      </p>

      <p className='title'>{blog.attributes.info.title}</p>

      <p className='text'>{blog.attributes.info.paragraph1}</p>
      <p className='text'>{blog.attributes.info.paragraph2}</p>
      <p className='text'>{blog.attributes.info.paragraph3}</p>
      <p className='text'>{blog.attributes.info.paragraph4}</p>
      <p className='text'>{blog.attributes.info.paragraph5}</p>
      <p className='text'>{blog.attributes.info.paragraph6}</p>
    </section>
  )
}

export default AboutBlock;