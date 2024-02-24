import AccordionItem from '../../components/accordion/AccordionItem'
import AccordionContent from '../../components/accordion/AccordionContent'
import {useState} from 'react'
import {withTranslation} from 'react-i18next'

const StudyProgramsAccordion = ({t}) => {

  const [activeAccordionItem, setActiveAccordionItem] = useState('bachelor')


  return(
    <ul className='accordion'>
      <AccordionItem id='bachelor' title={'Bachelor'} activeAccordionItem={activeAccordionItem} setActiveAccordionItem={setActiveAccordionItem} />
      <AccordionContent id='bachelor' activeAccordionItem={activeAccordionItem}>
        <li className='accordion__content-item'>{t('bachelor.computerEngineer')} <a href='https://www.ntnu.no/studier/bidata' target='_blank'><i className='material-symbols-sharp'>arrow_outward</i></a></li>
        <li className='accordion__content-item'>{t('bachelor.automation')} <a href='https://www.ntnu.no/studier/biais' target='_blank'><i className='material-symbols-sharp'>arrow_outward</i></a></li>
      </AccordionContent>
      <AccordionItem id='master' title={'Master'} activeAccordionItem={activeAccordionItem} setActiveAccordionItem={setActiveAccordionItem} />
      <AccordionContent id='master' activeAccordionItem={activeAccordionItem}>
        <li className='accordion__content-item'>{t('master.simvis')} <a href='https://www.ntnu.no/studier/880mvs' target='_blank'><i className='material-symbols-sharp'>arrow_outward</i></a></li>
        <li className='accordion__content-item'>{t('master.mekais')} <a href='https://www.ntnu.edu/studies/msmecaut' target='_blank'><i className='material-symbols-sharp'>arrow_outward</i></a></li>
        </AccordionContent>
      <AccordionItem id='forkurs' title={'forkurs'} activeAccordionItem={activeAccordionItem} setActiveAccordionItem={setActiveAccordionItem} />
      <AccordionContent id='forkurs' activeAccordionItem={activeAccordionItem}>
      <li className='accordion__content-item'>{t('forkurs.forkurs')} <a href='https://www.ntnu.no/studier/252fk' target='_blank'><i className='material-symbols-sharp'>arrow_outward</i></a></li>
        </AccordionContent>
    </ul>
  )
}

export default withTranslation('aboutPage')(StudyProgramsAccordion)
