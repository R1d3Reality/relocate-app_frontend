const Description = ( {blog} ) => {
  return (
    <div className='small__info'>
      <div className='size'>
        <img src='/population.svg' />
        <p>{blog.attributes.population}</p>
      </div>
      <div className='weather'>
        <div className='weather__temperature'>
          <img src='/high.svg'/>
          <p>High: {blog.attributes.weather.high}</p>
        </div>
        <div className='weather__temperature'>
          <img src='/low.svg'/>
          <p>Low: {blog.attributes.weather.low}</p>
        </div>
      </div>
      <div className='safety'>
        <img src='/star.svg'/>
        <p>Safety: {blog.attributes.safety}</p>
      </div>
    </div>
  )
}

export default Description;