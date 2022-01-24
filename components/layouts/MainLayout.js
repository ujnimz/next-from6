import PropTypes from 'prop-types';
import MainHeader from './header/MainHeader';
import MainFooter from './footer/MainFooter';

const MainLayout = ({children, data}) => {
  const {footer, navigation} = data;
  return (
    <div className='content'>
      <MainHeader data={navigation} />
      {children}
      <MainFooter data={footer} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default MainLayout;
