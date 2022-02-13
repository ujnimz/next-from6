import PropTypes from 'prop-types';
import TeamMember from '../../elements/TeamMember';

const Team = ({members, hoverAnimate}) => {
  return (
    <div className='flex justify-center py-10 lg:py-14'>
      <div className='container flex justify-center flex-wrap'>
        {members.map((member, index) => (
          <TeamMember member={member} hoverAnimate={hoverAnimate} key={index} />
        ))}
      </div>
    </div>
  );
};

Team.propTypes = {
  members: PropTypes.array.isRequired,
};

export default Team;
