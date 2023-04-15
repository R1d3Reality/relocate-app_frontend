import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="footer__info">
        <span className="footer__info__location">
          Relocate Society, 234 <br/>
          Bahagia Ave Street PRBW 29281
        </span>
        <span className="contacts__info__email">
          info@relocate.project
        </span>
        <span className="contacts__info__phone">
          1-232-3434 (Main)
        </span>
      </div>
      <nav className='footer__nav'>
          <Link href='/'>
            Home
          </Link>
          <Link href='/blog'>
            Blog
          </Link>
          <Link href='/contacts'>
            Contacts
          </Link>
      </nav>
      <div className='footer__social'>
        <img src='/instagram.svg'/>
        <img src='/facebook.svg'/>
        <img src='/twitter.svg' />
      </div>
    </footer>
  )
}

export default Footer;