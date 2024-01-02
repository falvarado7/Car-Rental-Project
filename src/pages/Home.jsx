import React from 'react'
import Hero from '../components/Hero'
import BookSelector from '../components/BookSelector'
import PlanTrip from '../components/PlanTrip'
import VehicleModels from '../components/VehicleModels'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Download from '../components/Download'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Hero />
        <BookSelector />
        <PlanTrip />
        <VehicleModels />
        <Banner />
        <ChooseUs />
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
    </div>
  )
}

export default Home