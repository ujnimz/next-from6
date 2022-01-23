import React from 'react';
import TeamMember from '../../elements/TeamMember';

const Team = ({members}) => {
  return (
    <div className='flex justify-center py-10 lg:py-14'>
      <div className='container flex justify-center flex-wrap'>
        {members.map((member, index) => (
          <TeamMember member={member} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
