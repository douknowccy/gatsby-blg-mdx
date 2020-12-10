import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`categroy / ${category}`} />
    </Layout>
  )
}
export const query = graphql`
  query GetCategory($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMMM Do,YYYY")
          title
          readTime
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`
export default CategoryTemplate
