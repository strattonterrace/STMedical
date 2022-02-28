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
  const [clientsState] = useState({
    clients: [
      {
        name: 'EMAIL MARKETING',
        site: 'https://www.clipperaviation.com//',
        image: Email
      },
      {
        name: 'Medical Website Design',
        site: '',
        image: WebDesign
      },
      {
        name: 'GOOGLE MY BUSINESS PAGE',
        site: 'https://strattonterraceinf.editorx.io/coop',
        image: GoogleMBusiness
      },
    
      {
        name: 'MEDICAL WEBSITE HOSTING',
        site: 'https://www.novaxs.co/',
        image: Hosting
      },
      {
        name: 'ONLINE REPUTATION MANAGEMENT',
        site: 'https://www.adcwindowwashers.com/',
        image: ORM
      },
    
      {
        name: 'MEDICAL ADVERTISING',
        site: 'https://hraye17.wixsite.com/website',
        image: MedicalAds
      },
      {
        name: 'MEDICAL CONTENT WRITING',
        site: 'https://www.offroaderparts.com//',
        image: ContentWriting
      },   
      {
        name: 'MEDICAL SEO',
        site: 'https://www.coastautomotiveperformance.com/',
        image: MedicalSEO
      },
    ]
  })

  return (
    <div className='Services'>
            <div className='clients'>
              <Row className='Services__row'>
                {
                  clientsState.clients.map(client => (
                    <Col
                      className='client'
                      xl='3'
                      lg='3'
                      key={client.name}
                    >
                      <Button
                        className='clientBtn'
                        href={client.site}
                        target='_blank'
                      >
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