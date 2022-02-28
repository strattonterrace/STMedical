import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import './Services.css'
import Email from '../../Assets/Services/img1.jpeg'
import WebDesign from '../../Assets/Services/img3.jpeg'
import MedicalSEO from '../../Assets/Services/img4-1.jpeg'
import ContentWriting from '../../Assets/Services/img5.jpeg'
import GoogleMBusiness from '../../Assets/Services/img6-1.jpeg'
import ORM from '../../Assets/Services/img7-1.jpeg'
import MedicalAds from '../../Assets/Services/img8.jpeg'
import Hosting from '../../Assets/Services/img9.jpeg'



function Services() {
  const [ServiceState] = useState({
    Service: [
      {
        name: 'EMAIL MARKETING',
        site: '/email-marketing',
        image: Email
      },
      {
        name: 'Medical Website Design',
        site: '/medical-website-design',
        image: WebDesign
      },
      {
        name: 'GOOGLE MY BUSINESS PAGE',
        site: '/google-my-business-page',
        image: GoogleMBusiness
      },
    
      {
        name: 'MEDICAL WEBSITE HOSTING',
        site: '/medical-website-hosting',
        image: Hosting
      },
      {
        name: 'ONLINE REPUTATION MANAGEMENT',
        site: '/orm',
        image: ORM
      },
    
      {
        name: 'MEDICAL ADVERTISING',
        site: '/medical-advertising',
        image: MedicalAds
      },
      {
        name: 'MEDICAL CONTENT WRITING',
        site: '/medical-content-writing',
        image: ContentWriting
      },   
      {
        name: 'MEDICAL SEO',
        site: '/seo',
        image: MedicalSEO
      },
    ]
  })

  return (
    <div className='Services'>
            <div className='Service'>
              <Row className='Services__row'>
                {
                  ServiceState.Service.map(client => (
                    <Col
                      className='client'
                      xl='3'
                      lg='3'
                      key={client.name}
                    >
                      <Button
                        className='clientBtn'
                        href={client.site}>
                        <img className='clientImg' src={client.image} alt={client.name} />
                        <div className='details'>
                          <h3 className='Services__name'>
                            {client.name}
                          </h3>
                        </div>
                      </Button>
                    </Col>
                  ))
                }
              </Row>
            </div>
    </div>
  )
}
export default Services;