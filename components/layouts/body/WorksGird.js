import {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import WorkItem from '../../elements/WorkItem';

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

  // Get unique categories from all the work categories by slug
  var allCategories = [].concat.apply(
    [],
    works.data.map(item => item.attributes.workCategories.data),
  );
  const key = 'slug';
  const uniqueCategories = [
    ...new Map(
      allCategories.map(item => [item.attributes[key], item.attributes]),
    ).values(),
  ];

  return (
    <div className='flex justify-center py-6 lg:py-10'>
      <div className='container'>
        <ul className='flex space-x-4 px-4 mb-4'>
          <li onClick={handleFilterKeyChange('*')} className='cursor-pointer'>
            Show All
          </li>
          {uniqueCategories.map((category, index) => (
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

WorksGird.propTypes = {
  works: PropTypes.object.isRequired,
};

export default WorksGird;
