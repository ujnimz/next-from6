import {marked} from 'marked';
import DOMPurify from 'dompurify';

const Paragraph = ({text}) => {
  var cleanText = DOMPurify.sanitize(marked.parse(text));
  return (
    <div className='flex justify-center items-center max-w-7xl px-6 lg:px-6 py-2 first:pt-0 last:pb-0'>
      <div
        className='text-center font-light text-xl leading-snug'
        dangerouslySetInnerHTML={{__html: cleanText}}
      />
    </div>
  );
};

export default Paragraph;
