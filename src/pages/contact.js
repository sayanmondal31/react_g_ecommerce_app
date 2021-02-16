import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reuseable/HeroSection'
import InfoBlock from '../components/reuseable/InfoBlock'
import Contact from '../components/contact/Contact'



const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Contact Us"  
      subtitle="LearnCOdeOnline.in"
      heroclass="about-background"
    />
    
    <InfoBlock heading="How can we Help" />
    <Contact />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: { eq: "contact.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp 
      }
    }
  }
}
`

export default ContactPage
