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
        description: 'Clipper Aviation is a Flight school Located in Van Nuys airport.',
        site: 'https://www.clipperaviation.com//',
        image: Email
      },
      {
        name: 'Medical Website Design',
        description: 'Brows Jungle LLC is a beauty salon which provides Microblading, Powder Brows, Lip Blushing in Lake Elsinore. x3 certified, fully licensed and insured.',
        site: '',
        image: WebDesign
      },
      {
        name: 'GOOGLE MY BUSINESS PAGE',
        description: 'GoogleMBusiness mission is to be a catalyst for the development of self-supporting communities through cooperative economic development, land retention, and advocacy. We envision sustainable rural communities that are supported by a network of farmers, landowners and cooperatives, which are all based on local control and leadership.',
        site: 'https://strattonterraceinf.editorx.io/coop',
        image: GoogleMBusiness
      },
    
      {
        name: 'MEDICAL WEBSITE HOSTING',
        description: 'NovaXS Biotech is a smart medical device startup focused on advanced drug delivery and users’ long-term health. Our patent-pending technology, Telosis, is your one-stop destination to predict, prevent, and manage chronic conditions.',
        site: 'https://www.novaxs.co/',
        image: Hosting
      },
      {
        name: 'ONLINE REPUTATION MANAGEMENT',
        description: 'Est. in Oakland CA. We offer professional window cleaning services, pressure washing, gutter cleaning, and solar panel cleaning. Eco-friendly, honest, and attentive to detail.',
        site: 'https://www.adcwindowwashers.com/',
        image: ORM
      },
    
      {
        name: 'MEDICAL ADVERTISING',
        description: 'Creating a clear Financial vision with personal One on One guidance to build your financial house, empowering you to take more control of your financial future so you can live the life you want.',
        site: 'https://hraye17.wixsite.com/website',
        image: MedicalAds
      },
      {
        name: 'MEDICAL CONTENT WRITING',
        description: 'Off-Roaders LLC is a family owned off-road company. Whether it’s lifted trucks, Jeeps, or utility vehicles, we strive to bring you the best parts on the market for your rig. We want to make you happy knowing you got a quality product.',
        site: 'https://www.offroaderparts.com//',
        image: ContentWriting
      },   
      {
        name: 'MEDICAL SEO',
        description: 'Coast Automotive is an auto repair shop in Costa Mesa, CA. In business for more than 20 years, they are a one-stop shop for automotive repairs and body work',
        site: 'https://www.coastautomotiveperformance.com/',
        image: MedicalSEO
      },
    ]
  })

  return (
    <div className='Services'>
      <div className='Services__background'>
        <div className='background'>
          <div className='backgroundFilter'>
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
                          <h3 className='Services__client__name'>
                            {client.name}
                          </h3>
                          <p className='Services__client__description'>
                            {client.description}
                          </p>
                        </div>
                      </Button>
                    </Col>
                  ))
                }
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;