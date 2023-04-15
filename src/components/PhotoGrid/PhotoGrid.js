const PhotoGrid = ({blog}) => {
  const url = 'http://127.0.0.1:1337';
  const gridURL = url + `${blog.attributes.grid.data[0].attributes.formats.small.url}`;
  const gridURL1 = url + `${blog.attributes.grid.data[1].attributes.formats.small.url}`;
  const gridURL2 = url + `${blog.attributes.grid.data[2].attributes.formats.small.url}`;
  const gridURL3 = url + `${blog.attributes.grid.data[3].attributes.formats.small.url}`
  return (
    <div className='photo__grid'>
      <div className='row'>
        <img src={gridURL} alt='Photo 1' />
        <img src={gridURL3} alt='Photo 4'/>
      </div>
      <div className="row">
        <img src={gridURL1} alt='Photo 2' />
        <img src={gridURL2} alt='Photo 3' />
      </div>
    </div>
  )
}

export default PhotoGrid;