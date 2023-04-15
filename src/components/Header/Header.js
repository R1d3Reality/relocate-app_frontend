import Link from "next/link";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const navigation = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    // {
    //     id: 2,
    //     title: 'Services',
    //     path: '/services'
    // },
    // {
    //     id: 3,
    //     title: 'Feedback',
    //     path: '/feedback'
    // },
    {
        id: 4,
        title: 'Blog',
        path: '/blog'
    },
    {
        id: 5,
        title: 'Contacts',
        path: '/contacts'
    }
];
const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="header">
        <nav className='header__nav'>
          <ul className={
              nav ? 'header__nav__element open' : 'header__nav__element'}>
            {navigation.map(({id, title, path}) =>(
              <li className={`header__nav__element__item`} key={id}>
                <Link href={path}>{title}</Link>
            </li>
            ))}
          </ul>
          <div onClick={() => setNav(!nav)} className='mobile_btn'>
            {nav ? <AiOutlineClose size={35}  /> : <AiOutlineMenu size={35} />}
          </div>
      </nav>
    </header>
  );
};

export default Header;
