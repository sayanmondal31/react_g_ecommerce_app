import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reuseable/HeroSection'
import InfoBlock from '../components/reuseable/InfoBlock'
import DualInfoblock from "../components/reuseable/DualInfoblock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I Write Code"  
      subtitle="LearnCOdeOnline.in"
      heroclass="about-background"
    />
    {/* <DualInfoblock heading="Our team" /> */}
    <DualInfoblock heading="A message from CEO"/>
    <InfoBlock heading="About our vision" />
    <TeamPhotoSection />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp 
      }
    }
  }
}
`

export default AboutPage
