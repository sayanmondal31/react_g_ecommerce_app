import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reuseable/HeroSection'
import InfoBlock from '../components/reuseable/InfoBlock'
import DualInfoblock from "../components/reuseable/DualInfoblock"
// import DualInfoblock from '../components/reuseable/DualInfoblock'
import Coursecart from '../components/Cart/Coursecart'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I Write Code"  
      subtitle="LearnCOdeOnline.in"
      heroclass="hero-background"
    />
    <InfoBlock heading="About us" />
    <Coursecart courses={data.courses} />
    {/* <DualInfoblock heading="Our team" /> */}
    <DualInfoblock heading="Our Team"/>
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp 
      }
    }
  }
  courses: allContentfulCourses {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(height: 200, width: 320) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  }
}
`

export default IndexPage
