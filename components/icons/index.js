import Atom from './Atom';
import Baloon from './Baloon';
import Bulb from './Bulb';
import Call from './Call';
import CloudA from './CloudA';
import CloudB from './CloudB';
import Email from './Email';
import Facebook from './Facebook';
import Heart from './Heart';
import Instagram from './Instagram';
import Magnifier from './Magnifier';
import Mobile from './Mobile';
import NextArrow from './NextArrow';
import Rocket from './Rocket';
import Quote from './Quote';

import React from 'react';

const F6Icon = ({colorClass, icon}) => {
  switch (icon) {
    case 'atom':
      return <Atom colorClass={colorClass} />;
    case 'baloon':
      return <Baloon colorClass={colorClass} />;
    case 'bulb':
      return <Bulb colorClass={colorClass} />;
    case 'call':
      return <Call colorClass={colorClass} />;
    case 'cloudA':
      return <CloudA colorClass={colorClass} />;
    case 'cloudB':
      return <CloudB colorClass={colorClass} />;
    case 'email':
      return <Email colorClass={colorClass} />;
    case 'facebook':
      return <Facebook colorClass={colorClass} />;
    case 'heart':
      return <Heart colorClass={colorClass} />;
    case 'instagram':
      return <Instagram colorClass={colorClass} />;
    case 'magnifier':
      return <Magnifier colorClass={colorClass} />;
    case 'mobile':
      return <Mobile colorClass={colorClass} />;
    case 'next-arrow':
      return <NextArrow colorClass={colorClass} />;
    case 'rocket':
      return <Rocket colorClass={colorClass} />;
    case 'quote':
      return <Quote colorClass={colorClass} />;
    default:
      return <Atom />;
  }
};

export default F6Icon;
