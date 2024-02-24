import './TekkomLogoAnimation.css';

const TekkomLogo = () => {
    return (
      <svg className='tekkom-logo committee-logo' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7 75 H0 V100 H7 V75 Z' className='committee-logo--corner'/>
        <path d='M100 75 H93 V100 H100 V75 Z' className='committee-logo--corner'/>
        <path d='M100 0 H93 V25 H100 V0 Z' className='committee-logo--corner'/>
        <path d='M100 0 H75 V7 H100 V0 Z' className='committee-logo--corner'/>
        <path d='M25 93 H0 V100 H25 V93 Z' className='committee-logo--corner'/>
        <path d='M100 93H 75V 100H 100 V93 Z' className='committee-logo--corner'/>
        <path d='M25 0 H0 V7 H25 V0 Z' className='committee-logo--corner'/>
        <path d='M7 0 H0 V25 H7 V0 Z' className='committee-logo--corner'/>
        <path d='m35 35 l-15 15 l15 15' fill='none' className='committee-logo--stroke-color' strokeWidth='5' />
        <path d='m57 30 l-14 40' className='committee-logo--stroke-color' strokeWidth='5' />
        <path d='m65 35 l15 15 l-15 15' fill='none' className='committee-logo--stroke-color' strokeWidth='5' />
        <path className='tekkom-logo__block committee-logo--fill-bg-color' d='m86 25 l0 0 l0 50 l0 0 z' stroke='none' />
        <path className='tekkom-logo__caret' d='m85 25 l0 50' stroke='none' strokeWidth='3' />
      </svg>
    )
  }

  export default TekkomLogo