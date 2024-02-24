import TabNavItem from '../../components/tabs/TabNavItem'
import TabContent from '../../components/tabs/TabContent'
import EventkomLogo from '../../components/svg/committeelogos/EventkomLogo'
import BedkomLogo from '../../components/svg/committeelogos/BedkomLogo'
import TekkomLogo from '../../components/svg/committeelogos/TekkomLogo'
import LogChamp from '../../components/logchamp/LogChamp'
//import {config} from '../../Constants';

import {useState} from 'react'
import {withTranslation} from 'react-i18next'

import '../../components/tabs/Tabs.css'
import './VervTabs.css'


const VervTabs = ({t}) => {
  const [activeTab, setActiveTab] = useState('tekkom')

  return (
    <div className='tabs committees'>
      <ul className='tabs__nav'>
        <TabNavItem title={<TekkomLogo/>} id='tekkom' activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title={<EventkomLogo/>} id='eventkom' activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title={<BedkomLogo/>} id='bedkom' activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <TabContent id='eventkom' activeTab={activeTab}>
        <h3 className='committees__heading heading-3'>
          <i className='logfont-eventkom'></i> {t('committeeSection.eventkom.title')}
        </h3>
        <div className='committees__info'>
          <div className='committees__text'>
            <p className='p--highlighted'>{t('committeeSection.eventkom.intro')}</p>
            <p className='p--regular' dangerouslySetInnerHTML={{__html: t('committeeSection.eventkom.body')}} />
          </div>
          <LogChamp
            img=''
            name='Person'
            stilling={t('committeeSection.board.eventkom')}
            discord='eventKom leader'
            discordlink=''
          />
        </div>
      </TabContent>
      <TabContent id='tekkom' activeTab={activeTab}>
        <h3 className='committees__heading heading-3'>
          <i className='logfont-tekkom'></i> {t('committeeSection.tekkom.title')}
        </h3>
        <div className='committees__info'>
          <div className='committees__text'>
            <p className='p--highlighted'>{t('committeeSection.tekkom.intro')}</p>
            <p className='p--regular'>{t('committeeSection.tekkom.body')}</p>
          </div>
          <LogChamp
            img=''
            name='Joar'
            stilling={t('committeeSection.board.tekkom')}
            discord='jalma'
            discordlink='https://discordapp.com/users/158555910749290496'
          />
        </div>
      </TabContent>
      <TabContent id='bedkom' activeTab={activeTab}>
        <h3 className='committees__heading heading-3'>
          <i className='logfont-bedkom'></i> {t('committeeSection.bedkom.title')}
        </h3>
        <div className='committees__info'>
          <div className='committees__text'>
            <p className='p--highlighted'>{t('committeeSection.bedkom.intro')}</p>
            <p className='p--regular'>{t('committeeSection.bedkom.body')}</p>
          </div>
          <LogChamp
            img=''//{config.url.CDN_URL + '/img/portraits/portrett_bedkom-leder.jpg'}
            name='Emil'
            stilling={t('committeeSection.board.bedkom')}
            discord='kaliberty'
            discordlink='https://discordapp.com/users/223153752406753281'
          />
        </div>
      </TabContent>
    </div>
  )
}


export default withTranslation('vervPage')(VervTabs)
