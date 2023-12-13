import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'
import Uiblock from '../../Asset/ui block icon.png'
import icon1 from '../../Asset/Icons 1.png'
import icon2 from '../../Asset/Icons 2.png'
import icon3 from '../../Asset/Icons3.png'
import icon4 from '../../Asset/Icons4.png'
import icon5 from '../../Asset/Icons5.png'

const UiBlock = () => {
  return (
    <div className='uiBlock'>
      <div className="top">
        <div className="left">
            <img src={Uiblock} alt="" />
        </div>
        <div className="right">
            <h1>Explore our Product</h1>
            <p>Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex.</p>
        </div>
      </div>
      <div className="bottom">
        <FeatureCard image={icon1} title="CE Support" content="Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna." />
        <FeatureCard image={icon2} title="CE Invest" content="Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."/>
        <FeatureCard image={icon3} title="CE ConnectEHR" content="Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."/>
        <FeatureCard image={icon4} title="CE Marketplace" content="Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna."/>
        <FeatureCard image={icon5} title="CE Flow" content=""/>
      </div>
    </div>
  )
}

export default UiBlock
