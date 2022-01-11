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
} from './fragments';

export const GET_HOME = gql`
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
          }
        }
      }
    }
  }
`;

export const GET_ABOUT = gql`
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
          }
        }
      }
    }
  }
`;

export const GET_SERVICES = gql`
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
          }
        }
      }
    }
  }
`;

export const GET_WORK = gql`
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
          }
        }
      }
    }
  }
`;

export const GET_BLOG = gql`
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
          }
        }
      }
    }
  }
`;

export const GET_CONTACT = gql`
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
          }
        }
      }
    }
  }
`;

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
