import Link from 'next/link';
import {useRouter} from 'next/router';

const LocaleSwitch = () => {
  const {locale} = useRouter();

  return (
    <div className='flex justify-center items-center p-2'>
      {locale === 'en' ? (
        <Link href='/' locale='ar'>
          <a>Ar</a>
        </Link>
      ) : (
        <Link href='/' locale='en'>
          <a>En</a>
        </Link>
      )}
    </div>
  );
};

export default LocaleSwitch;
