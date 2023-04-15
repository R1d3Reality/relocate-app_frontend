import { useState } from 'react';
import AboutBlock from "@/components/AboutBlock/AboutBlock";
import EducationBlock from "@/components/EducationBlock/EducationBlock";
import QualityBlock from "@/components/QualityBlock/QualityBlock";
import CultureBlock from "@/components/CultureBlock/CultureBlock";


const Info = ({blog}) => {
  const [currentMenu, setCurrentMenu] = useState('menu1');

  const handleMenuChange = (menu) => {
    setCurrentMenu(menu);
  }

  return (
    <div className='wrapper'>
      <header>
        <ul className='menu'>
          <li className={currentMenu === 'menu1' ? 'active' : ''}
              onClick={() => handleMenuChange('menu1')}>
            <a>About</a>
          </li>
          <li className={currentMenu === 'menu2' ? 'active' : ''}
              onClick={() => handleMenuChange('menu2')}>
            <a>Education</a>
          </li>
          <li className={currentMenu === 'menu3' ? 'active' : ''}
              onClick={() => handleMenuChange('menu3')}>
            <a>Quality of life</a>
          </li>
          <li className={currentMenu === 'menu4' ? 'active' : ''}
              onClick={() => handleMenuChange('menu4')}>
            <a>Lifestyle</a>
          </li>
        </ul>
      </header>
      {
        currentMenu === 'menu1' &&
        <AboutBlock blog={blog} />
      }
      {
        currentMenu === 'menu2' &&
        <EducationBlock blog={blog} />
      }
      {
        currentMenu === 'menu3' &&
        <QualityBlock blog={blog} />
      }
      {
        currentMenu === 'menu4' &&
        <CultureBlock blog={blog}/>
      }
    </div>
  );
}

export default Info;