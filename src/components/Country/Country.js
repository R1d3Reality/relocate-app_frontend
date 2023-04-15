import Description from "@/Description/Description";
import PhotoGrid from "@/components/PhotoGrid/PhotoGrid";
import Money from "@/components/Money/Money";


const Country = ( {blog} ) => {
  return (
    <div className='wrapper'>
      <Description blog={blog} />
      <PhotoGrid blog={blog} />
        <Money money={blog.attributes.money.family} />
        <Money money={blog.attributes.money.individual} />
    </div>
  )
}

export default Country;