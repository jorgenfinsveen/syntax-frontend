import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className='social-links' target='_blank' rel='noreferrer'>
      <a className='social-links__link' title='Discord' href='https://discord.gg/qVhTC4f6' target='_blank' rel='noreferrer'>
        <i className='social-links__icon social-links__icon--discord logfont-discord'></i>
      </a>
      <a className='social-links__link' title='Instagram' href='https://www.instagram.com/syntax_linjeforening/' target='_blank' rel='noreferrer'>
        <i className='social-links__icon social-links__icon--instagram logfont-instagram'></i>
      </a>
      <a className='social-links__link' title='Facebook' href='https://www.facebook.com/SyntaxAalesund/' target='_blank' rel='noreferrer'>
        <i className='social-links__icon social-links__icon--facebook logfont-facebook'></i>
      </a>
      <a className='social-links__link' title='Linkedin' href='https://www.linkedin.com/company/syntaxlinjeforening/' target='_blank' rel='noreferrer'>
        <i className='social-links__icon social-links__icon--linkedin logfont-linkedin'></i>
      </a>
    </div>
  );
}

export default SocialLinks;
