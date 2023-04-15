import Link from "next/link";

const AdvertisingBlock = () => {
  return (
      <div className='advertising'>
        <div className='advertising__img'>
          <img src='/move.png'/>
        </div>
        <div className='advertising__article'>
          <p className='advertising__article__title'>Are you ready to move?</p>
          <p className='advertising__article__text'>
            Let our team help you put things<br/>
            together and plan your MOVE.
          </p>
          <Link className='advertising__article__btn' href='/contacts'>
            Get in touch
          </Link>
        </div>
        <div className='advertising__img'>
          <img src='/ready.png'/>
        </div>
      </div>
  )
}

export default AdvertisingBlock;