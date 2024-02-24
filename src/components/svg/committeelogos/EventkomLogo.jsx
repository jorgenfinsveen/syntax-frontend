import './EventkomLogoAnimation.css';

const EventkomLogo = () => {
    return (
        <svg className='eventkom-logo committee-logo' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7 75 H0 V100 H7 V75 Z' className='committee-logo--corner'/>
            <path d='M100 75 H93 V100 H100 V75 Z' className='committee-logo--corner'/>
            <path d='M100 0 H93 V25 H100 V0 Z' className='committee-logo--corner'/>
            <path d='M100 0 H75 V7 H100 V0 Z' className='committee-logo--corner'/>
            <path d='M25 93 H0 V100 H25 V93 Z' className='committee-logo--corner'/>
            <path d='M100 93H 75V 100H 100 V93 Z' className='committee-logo--corner'/>
            <path d='M25 0 H0 V7 H25 V0 Z' className='committee-logo--corner'/>
            <path d='M7 0 H0 V25 H7 V0 Z' className='committee-logo--corner'/>
            <circle cx='45' cy='50' r='25' fill='none' className='committee-logo--stroke-color' strokeWidth='3'/>
            <path d='m45 15 l0 10' className='committee-logo--stroke-color' strokeWidth='3' />
            <path d='m40 15 l10 0' className='committee-logo--stroke-color' strokeWidth='3'/>
            <path className='eventkom-logo__curve1 committee-logo--stroke-color' d='m45 75 A25 25 90 0 1 45 25' fill='none' strokeWidth='3' />
            <path className='eventkom-logo__curve2 committee-logo--stroke-color' d='m45 75 A25 13 90 0 1 45 25' fill='none' strokeWidth='3' />
            <path className='eventkom-logo__curve3 committee-logo--stroke-color' d='m45 25 A25 0 270 0 1 45 75' fill='none' strokeWidth='3' />
            <path className='eventkom-logo__curve4 committee-logo--stroke-color' d='m45 25 A25 13 270 0 1 45 75' fill='none' strokeWidth='3' />
            <path d='m20 50 l50 0' className='committee-logo--stroke-color' strokeWidth='3' />
            <path d='m22 39 l46 0' className='committee-logo--stroke-color' strokeWidth='3' />
            <path d='m22 61 l46 0' className='committee-logo--stroke-color' strokeWidth='3' />
            <path className='eventkom-logo__star1 committee-logo--stroke-color' d='M77.5 25 L79.7 32.125 L83 34.5 L79.7 36.875 L77.5 44 L75.3 36.875 L72 34.5 L75.3 32.125 L77.5 25 Z' fill='none' strokeWidth='2'/>
            <path className='eventkom-logo__star2 committee-logo--stroke-color' d='M68.5 70 L70.3 75.625 L73 77.5 L70.3 79.375 L68.5 85 L66.7 79.375 L64 77.5 L66.7 75.625 L68.5 70 Z' fill='none' strokeWidth='2'/>
        </svg>
    )
}

export default EventkomLogo