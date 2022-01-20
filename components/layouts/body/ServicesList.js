import ServicesListItem from '../../elements/ServicesListItem';

const ServicesList = ({services}) => {
  return (
    <div className='flex justify-center py-6 lg:py-10'>
      <div className='container flex justify-center flex-wrap px-6 lg:px-0'>
        {services.data.map((service, index) => (
          <ServicesListItem service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
