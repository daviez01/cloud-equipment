import './Footer.scss'
import client1 from '../../Asset/Real Estate Logo.png'
import client2 from '../../Asset/Real Estate Logo (1).png'
import client3 from '../../Asset/Real Estate Logo (2).png'
import client4 from '../../Asset/Tech Logo.png'
import client5 from '../../Asset/Hexa Logo.png'
import logo from '../../Asset/Layer_1.png'
import facebook from '../../Asset/facebook.png'
import twitter from '../../Asset/Twitter.png'
import instagram from '../../Asset/instagram.png'
import linkedin from '../../Asset/linkedIn.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="clients">
        <div className="container">
            <img src={client5} alt="" />
            <img src={client4} alt="" />
            <img src={client3} alt="" />
            <img src={client1} alt="" />
            <img src={client2} alt="" />
        </div>
      </div>
      <div className='details'>
        <div className="details-cont">
            <div className="right">
                <div className='right-links'>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="">Our Story</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
                <div className='right-links'>
                    <h3>legal</h3>
                    <ul>
                        <li><a href="">Legal</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Disclaimer</a></li>
                    </ul>
                </div>
                <div className='right-links'>
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="">For Investors</a></li>
                        <li><a href="">For OEMs & Suppliers</a></li>
                        <li><a href=" ">For Healthcare Providers</a></li>
                        <li><a href="">Others</a></li>
                    </ul>
                </div>
            </div>
            <div className="left">
                <div>
                    <img src={logo} alt="" />
                    <p>We are always open to discuss your project and improve your online presence.</p>
                </div>
                <div className='contact'>
                    <div className="email sub">
                        <h3>Email me at</h3>
                        <p>contact@website.com</p>
                    </div>
                    <div className="call sub">
                        <h3>Call us</h3>
                        <p>0927 6277 28525</p>
                    </div>
                    <div className="social sub">
                        <h3>Social Media</h3>
                        <div className='icons'>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={instagram} alt="" />
                            <img src={linkedin} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="footer-links">
        <div>
            <p>CloudEquipment.com © Copyright 2023</p>
        </div>
        <div>
            <a href="">Product</a>
            <a href="">Company</a>
            <a href="">resources</a>
        </div>
      </div>
      <div className="disclaimer">
        <p>DISCLAIMER: Cloud Equipment Medical software and technology web platform is licensed and used by investors and health care facilities to make available to investors information related to sponsors’ medical equipment investment offerings (the “Platform”). This website is part of the Platform and is operated by Reef Financial Solutions. By accessing this site and any pages thereof, you agree to be bound by our Terms of Service and Privacy Policy . *All information contained on CloudEquipment Medical or in any advertisement linking to, CloudEquipment Medical concerning any prospective or actual real estate investment, including information concerning projected or targeted returns and investment performance, is provided by the relevant sponsor and/or issuer (or their affiliates) of the relevant real estate investment opportunity and not by Cloud Equipment Medical and is subject to change. Such information is subject to the disclosures herein and on the Disclosures page, on the Disclaimers page for such real estate investment opportunity and is qualified in its entirety by the more comprehensive information provided in the relevant sponsor and/or issuer’s offering documentation. Unless affirmatively and specifically stated to the contrary, CloudEquipment Medical and its affiliates make no representations or warranties as to the accuracy of an issuer’s information, including in advertisements, and accepts no liability therefor. Nothing on this website should be regarded as investment advice, either on behalf of a particular security or regarding an overall investment strategy, a recommendation, an offer to sell, or a solicitation of or an offer to buy any security. Advice from a securities professional is strongly advised, and we recommend that you consult with a financial advisor, attorney, accountant, and any other professional that can help you to understand and assess the risks associated with any real estate investment. Please carefully review all disclosures here before accessing CloudEquipment Medical.</p>
      </div>
    </div>
  )
}

export default Footer
