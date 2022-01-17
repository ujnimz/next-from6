import {gql} from '@apollo/client';

export const HEADING_CONTENT = gql`
  fragment HeadingFields on ComponentBlocksHeading {
    title
    tag
    headingStyle
    bgImage {
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
`;

export const TEXT_CONTENT = gql`
  fragment TextFields on ComponentBlocksTextBlock {
    paragraphs {
      text
    }
  }
`;

export const FEATURED_WORK_CONTENT = gql`
  fragment FeaturedWorkFields on ComponentBlocksFeaturedWork {
    text
    link
    height
    image {
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
`;

export const FEATURED_BOX_CONTENT = gql`
  fragment FeaturedBoxFields on ComponentBlocksFeaturedBox {
    text
    leftIcon
    rightIcon
    buttonText
    buttonLink
    style
    bgImage {
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
`;

export const SERVICES_SLIDER_CONTENT = gql`
  fragment ServicesSliderFields on ComponentBlocksServicesSlider {
    spacing
    services {
      data {
        attributes {
          title
          slug
          image {
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

export const SERVICES_LIST_CONTENT = gql`
  fragment ServicesListFields on ComponentBlocksServicesList {
    services {
      data {
        attributes {
          title
          slug
          subServices
          image {
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

export const CLIENTELE_CONTENT = gql`
  fragment ClienteleFields on ComponentBlocksClientele {
    sliderType
    clientele {
      id
      image {
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
`;

export const RECENT_TESTIMONIALS_CONTENT = gql`
  fragment RecentTestimonialsFields on ComponentBlocksRecentTestimonials {
    testimonials {
      data {
        attributes {
          message
          name
          jobTitle
          company
          avatar {
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

export const IMAGE_CONTENT = gql`
  fragment ImageFields on ComponentBlocksImage {
    image {
      data {
        attributes {
          url
          width
          height
          alternativeText
        }
      }
    }
    animate
    blockHeight
  }
`;

export const MEMBERS_CONTENT = gql`
  fragment MembersFields on ComponentBlocksMembers {
    members {
      name
      jobTitle
      image {
        data {
          attributes {
            url
            width
            height
            alternativeText
          }
        }
      }
      hoverImage {
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
`;

export const WORKS_GRID_CONTENT = gql`
  fragment WorksGridFields on ComponentBlocksWorksGrid {
    works {
      data {
        attributes {
          title
          slug
          clientName
          workCategories {
            data {
              attributes {
                title
                slug
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
