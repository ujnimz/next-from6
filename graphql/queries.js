import {gql} from '@apollo/client';
import {
  HEADING_CONTENT,
  TEXT_CONTENT,
  FEATURED_WORK_CONTENT,
  FEATURED_BOX_CONTENT,
  SERVICES_SLIDER_CONTENT,
  SERVICES_LIST_CONTENT,
  CLIENTELE_CONTENT,
  RECENT_TESTIMONIALS_CONTENT,
  IMAGE_CONTENT,
  MEMBERS_CONTENT,
  WORKS_GRID_CONTENT,
} from './fragments';

export const GET_HOME_PAGE = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  query getHomePage {
    homePage {
      data {
        attributes {
          title
          seoContent {
            metaTitle
            metaDescription
          }
          pageContent {
            __typename
            ...HeadingFields
            ...TextFields
            ...FeaturedWorkFields
            ...FeaturedBoxFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
          }
        }
      }
    }
  }
`;

export const GET_ABOUT_PAGE = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  query getAboutPage {
    aboutPage {
      data {
        attributes {
          title
          seoContent {
            metaTitle
            metaDescription
          }
          heroImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          pageContent {
            __typename
            ...HeadingFields
            ...TextFields
            ...FeaturedWorkFields
            ...FeaturedBoxFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
          }
        }
      }
    }
  }
`;

export const GET_SERVICES_PAGE = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  query getServicesPage {
    servicesPage {
      data {
        attributes {
          title
          seoContent {
            metaTitle
            metaDescription
          }
          heroImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          pageContent {
            __typename
            ...HeadingFields
            ...TextFields
            ...FeaturedWorkFields
            ...FeaturedBoxFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
          }
        }
      }
    }
  }
`;

export const GET_WORK_PAGE = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  query getWorkPage {
    workPage {
      data {
        attributes {
          title
          seoContent {
            metaTitle
            metaDescription
          }
          heroImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          pageContent {
            __typename
            ...HeadingFields
            ...TextFields
            ...FeaturedWorkFields
            ...FeaturedBoxFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
          }
        }
      }
    }
  }
`;

export const GET_BLOG_PAGE = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  query getBlogPage {
    blogPage {
      data {
        attributes {
          title
          seoContent {
            metaTitle
            metaDescription
          }
          heroImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          pageContent {
            __typename
            ...HeadingFields
            ...TextFields
            ...FeaturedWorkFields
            ...FeaturedBoxFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
          }
        }
      }
    }
  }
`;

export const GET_CONTACT_PAGE = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  query getContactPage {
    contactPage {
      data {
        attributes {
          title
          seoContent {
            metaTitle
            metaDescription
          }
          heroImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          pageContent {
            __typename
            ...HeadingFields
            ...TextFields
            ...FeaturedWorkFields
            ...FeaturedBoxFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
          }
        }
      }
    }
  }
`;

// export const GET_WORKS = gql`
//   query getWorks {
//     works {
//       data {
//         attributes {
//           title
//           slug
//           clientName
//           work_categories {
//             data {
//               attributes {
//                 title
//               }
//             }
//           }
//           thumbnail {
//             data {
//               attributes {
//                 url
//                 width
//                 height
//                 alternativeText
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const GET_SINGLE_WORK = gql`
//   query getSingleWork($slug: String!) {
//     work(slug: $slug) {
//       data {
//         attributes {
//           title
//           slug
//         }
//       }
//     }
//   }
// `;

export const GET_SETTINGS = gql`
  query getSettings {
    navigation {
      data {
        attributes {
          navItems {
            link
            text
          }
        }
      }
    }
    footer {
      data {
        attributes {
          contactTitle
          contacts {
            text
            link
            icon
          }
          socialTitle
          socialIcons {
            link
            icon
          }
          copyrightText
        }
      }
    }
  }
`;
