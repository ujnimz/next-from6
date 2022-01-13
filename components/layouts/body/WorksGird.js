import React, {useEffect, useState, useRef} from 'react';
//import Isotope from 'isotope-layout';
import WorkItem from '../../elements/WorkItem';

const workss = [
  {
    id: 0,
    thumbnail: '/images/works/thumbs/bisb-brand-campaign-thumb.jpeg',
    title: 'BisB Brand Development',
    client: 'BisB',
    categories: [
      {id: 0, title: 'Brand & Design', slug: 'brand-design'},
      {id: 1, title: 'Brand Strategy', slug: 'brand-strategy'},
    ],
    link: '/',
  },
  {
    id: 1,
    thumbnail: '/images/works/thumbs/bsh-thumb.jpeg',
    title: 'Oman Oil Company Exploration & Petroleum Brand Refresh',
    client: 'Oman Oil Company Exploration & Petroleum',
    categories: [{id: 0, title: 'Brand & Design', slug: 'brand-design'}],
    link: '/',
  },
  {
    id: 2,
    thumbnail: '/images/works/thumbs/diwan-thumb.jpeg',
    title: 'Lost Paradise of Dilmun (LPOD) Rebrand',
    client: 'Lost Paradise of Dilmun (LPOD)',
    categories: [
      {id: 0, title: 'Brand & Design', slug: 'brand-design'},
      {id: 1, title: 'Brand Strategy', slug: 'brand-strategy'},
    ],
    link: '/',
  },
  {
    id: 3,
    thumbnail: '/images/works/thumbs/export-bahrain-thumb.jpeg',
    title: 'Export Bahrain Launch Campaign',
    client: 'Export Bahrain',
    categories: [
      {id: 0, title: 'Brand Strategy', slug: 'brand-strategy'},
      {id: 1, title: 'Digital & Social Media', slug: 'digital-social-media'},
      {id: 2, title: 'Public Relations', slug: 'public-relations'},
    ],
    link: '/',
  },
  {
    id: 4,
    thumbnail: '/images/works/thumbs/hasabi-thumb.jpeg',
    title: 'Hasabi Brand Launch',
    client: 'Manara Development',
    categories: [
      {id: 0, title: 'Digital & Social Media', slug: 'digital-social-media'},
      {id: 1, title: 'TVC', slug: 'tvc'},
      {id: 2, title: 'Website & App Design', slug: 'website-app-design'},
    ],
    link: '/',
  },
  {
    id: 5,
    thumbnail: '/images/works/thumbs/horizon-thumb.jpeg',
    title: 'Bahrain Specialist Hospital 15 years',
    client: 'Bahrain Specialist Hospital',
    categories: [
      {id: 0, title: 'Digital & Social Media', slug: 'digital-social-media'},
    ],
    link: '/',
  },
  {
    id: 6,
    thumbnail: '/images/works/thumbs/ila-thumb.jpeg',
    title: 'Quantum Brand Development',
    client: 'Quantum PV',
    categories: [
      {id: 0, title: 'Digital & Social Media', slug: 'digital-social-media'},
      {id: 1, title: 'Website & App Design', slug: 'website-app-design'},
    ],
    link: '/',
  },
  {
    id: 7,
    thumbnail: '/images/works/thumbs/marassi-weekend-thumb.jpeg',
    title: 'Ila Website',
    client: 'Ila Bank',
    categories: [
      {id: 0, title: 'Digital & Social Media', slug: 'digital-social-media'},
      {id: 1, title: 'Website & App Design', slug: 'website-app-design'},
    ],
    link: '/',
  },
  {
    id: 8,
    thumbnail: '/images/works/thumbs/oomco-optimo-extreme-adventure-thumb.jpeg',
    title: 'Diwan Digital Marketing',
    client: 'Diwan',
    categories: [
      {id: 0, title: 'Brand & Design', slug: 'brand-strategy'},
      {id: 1, title: 'Digital & Social Media', slug: 'digital-social-media'},
      {id: 2, title: 'Website & App Design', slug: 'website-app-design'},
    ],
    link: '/',
  },
  {
    id: 9,
    thumbnail: '/images/works/thumbs/quantum-thumb.jpeg',
    title: 'OOMCO Optimo Extreme Adventure',
    client: 'OOMCO',
    categories: [
      {id: 0, title: 'Digital & Social Media', slug: 'digital-social-media'},
    ],
    link: '/',
  },
];

const allCategories = [
  {
    'title': 'Brand & Design',
    'slug': 'brand-design',
  },
  {
    'title': 'Brand Strategy',
    'slug': 'brand-strategy',
  },
  {
    'title': 'Digital & Social Media',
    'slug': 'digital-social-media',
  },
  {
    'title': 'Public Relations',
    'slug': 'public-relations',
  },
  {
    'title': 'TVC',
    'slug': 'tvc',
  },
  {
    'title': 'Website & App Design',
    'slug': 'website-app-design',
  },
  {
    'title': 'Website & App Design',
    'slug': 'website-app-design',
  },
];

const WorksGird = ({works}) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState('*');

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`});
  }, [filterKey]);

  const handleFilterKeyChange = key => () => setFilterKey(key);

  return (
    <div className='flex justify-center py-10 lg:py-14'>
      <div className='container'>
        <ul className='flex space-x-4 p-4'>
          <li onClick={handleFilterKeyChange('*')} className='cursor-pointer'>
            Show All
          </li>
          {allCategories.map((category, index) => (
            <li
              key={index}
              onClick={handleFilterKeyChange(category.slug)}
              className='cursor-pointer'
            >
              {category.title}
            </li>
          ))}
        </ul>

        <div className='filter-container flex'>
          {works.data.map((work, index) => (
            <WorkItem key={index} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksGird;

// function WorksGird({data}) {
//   console.log(data);
//   return (
//     <div>
//       <h1>ko</h1>
//     </div>
//   );
// }

// export default WorksGird;
