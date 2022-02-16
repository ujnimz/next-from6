import {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import WorkItem from '../../elements/WorkItem';

const WorksGird = ({works, work_category}) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState(
    work_category.data ? work_category.data.attributes.slug : '*',
  );

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

  // Get unique categories from all the work categories by slug
  var allCategories = [].concat.apply(
    [],
    works.data.map(item => item.attributes.workCategories.data),
  );
  const key = 'slug';
  const uniqueCategories = [
    {title: 'Show All', slug: '*'},
    ...new Map(
      allCategories.map(item => [item.attributes[key], item.attributes]),
    ).values(),
  ];

  return (
    <div className='flex justify-center py-6 lg:py-10'>
      <div className='container'>
        <ul className='flex flex-wrap px-4 mb-4'>
          {uniqueCategories.map((category, index) => (
            <li
              key={index}
              onClick={handleFilterKeyChange(category.slug)}
              className={`cursor-pointer p-1 mr-2 mb-2 border lg:border-0 underline-offset-8 transition-colors duration-300 ease-in-out ${
                filterKey === category.slug
                  ? 'text-primary border-primary no-underline lg:underline'
                  : 'text-base-content'
              }`}
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

WorksGird.propTypes = {
  works: PropTypes.object.isRequired,
  work_category: PropTypes.object.isRequired,
};

export default WorksGird;
