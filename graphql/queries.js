import {gql} from '@apollo/client';
import {
  HEADING_CONTENT,
  TEXT_CONTENT,
  FEATURED_WORK_CONTENT,
  FEATURED_BOX_CONTENT,
  CALL_TO_ACTION_CONTENT,
  SERVICES_SLIDER_CONTENT,
  SERVICES_LIST_CONTENT,
  CLIENTELE_CONTENT,
  RECENT_TESTIMONIALS_CONTENT,
  IMAGE_CONTENT,
  MEMBERS_CONTENT,
  WORKS_GRID_CONTENT,
  POSTS_GRID_CONTENT,
  CONTACTS_CONTENT,
  LOCATION_MAP_CONTENT,
} from './fragments';

export const GET_HOME_PAGE = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
  query getHomePage {
    homePage {
      data {
        attributes {
          title
          seoContent {
            metaTitle
            metaDescription
          }
          slider {
            mp4Video {
              data {
                attributes {
                  url
                }
              }
            }
            ogvVideo {
              data {
                attributes {
                  url
                }
              }
            }
            webmVideo {
              data {
                attributes {
                  url
                }
              }
            }
            sliderTexts {
              text
            }
          }
          pageContent {
            __typename
            ...HeadingFields
            ...TextFields
            ...FeaturedWorkFields
            ...FeaturedBoxFields
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
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
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
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
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
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
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
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
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
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
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
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
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
          }
        }
      }
    }
    workCategories {
      data {
        attributes {
          title
          slug
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
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
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
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
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
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
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
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
          }
        }
      }
    }
  }
`;

export const GET_WORKS = gql`
  query getWorks {
    works {
      data {
        attributes {
          title
          slug
          clientName
          workCategories {
            data {
              attributes {
                slug
                title
              }
            }
          }
          thumbnail {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_WORK = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
  query getSingleWork($slug: String!) {
    works(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title
          slug
          clientName
          seoContent {
            metaTitle
            metaDescription
          }
          workCategories {
            data {
              attributes {
                slug
                title
              }
            }
          }
          thumbnail {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
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
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
          }
        }
      }
    }
  }
`;

export const GET_SERVICES = gql`
  query getServices {
    services {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

export const GET_SINGLE_SERVICE = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
  query getSingleService($slug: String!) {
    services(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title
          slug
          seoContent {
            metaTitle
            metaDescription
          }
          thumbnail {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
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
          subServices
          pageContent {
            __typename
            ...HeadingFields
            ...TextFields
            ...FeaturedWorkFields
            ...FeaturedBoxFields
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
          }
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    posts(sort: "date:desc") {
      data {
        attributes {
          title
          slug
          date
          thumbnail {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  ${HEADING_CONTENT}
  ${TEXT_CONTENT}
  ${FEATURED_WORK_CONTENT}
  ${FEATURED_BOX_CONTENT}
  ${CALL_TO_ACTION_CONTENT}
  ${SERVICES_SLIDER_CONTENT}
  ${SERVICES_LIST_CONTENT}
  ${CLIENTELE_CONTENT}
  ${RECENT_TESTIMONIALS_CONTENT}
  ${IMAGE_CONTENT}
  ${MEMBERS_CONTENT}
  ${WORKS_GRID_CONTENT}
  ${POSTS_GRID_CONTENT}
  ${CONTACTS_CONTENT}
  ${LOCATION_MAP_CONTENT}
  query getSinglePost($slug: String!) {
    posts(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title
          slug
          date
          seoContent {
            metaTitle
            metaDescription
          }
          thumbnail {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
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
            ...CallToActionFields
            ...ServicesSliderFields
            ...ServicesListFields
            ...ClienteleFields
            ...RecentTestimonialsFields
            ...ImageFields
            ...MembersFields
            ...WorksGridFields
            ...PostsGridFields
            ...ContactsFields
            ...LocationMapFields
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
