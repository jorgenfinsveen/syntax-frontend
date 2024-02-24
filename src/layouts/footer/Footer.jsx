import React from 'react';
import SocialLinks from './SocialLinks';
import { withTranslation } from "react-i18next";
import './Footer.css';
import { config } from "../../Constants";

const Footer = ({ t }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className='footer'>
      <div className='footer__flex-container'>
        {/* <picture className='footer__picture footer__picture-login'>
          <source srcSet={process.env.PUBLIC_URL + '/img/logo/logo-tekst-white.svg'} />
          <img alt='Login - Linjeforeningen for IT' />
        </picture> */}
        <a href='https://www.twoday.no/' target='_blank' className='footer__picture footer__picture-sponsor'>
          <picture>
            <source srcSet="https://www.twoday.no/hs-fs/hubfs/twoday/Brand%20Assets/Logo/twoday-wordmark-RGB_WHITE.png?width=400&height=128&name=twoday-wordmark-RGB_WHITE.png" /> 
            {/* {config.url.CDN_URL + '/img/company/mnemonic-logo_light-nopayoff-2021.svg '} */}
            <img alt='twoday' />
          </picture>
          <p>{t('footer.sponsor')}</p>
        </a>
      </div>
      <SocialLinks />
      <p className='footer__p' dangerouslySetInnerHTML={{ __html: ` ${t('footer.copy1')} ${currentYear} ${t('footer.copy2')}` }} />
    </div>
  );
}

export default withTranslation('layout')(Footer);