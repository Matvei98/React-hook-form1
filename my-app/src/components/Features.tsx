import Icon from './images/icon-list.svg';

const Features = () => {
  return (
    <div className='flex flex-col gap-y-6 '>
      <h1 className='text-4xl font-bold md:text-6xl'>Stay updated!</h1>
      <p className='leading-normal'>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className='leading-loose'>
        <li  className='flex flex-row items-center gap-x-4'>
		<img src={Icon} alt='photo' width={21} height={21} />
		<p>Product discovery and building what matters</p>
		</li>
        <li className='flex flex-row items-center gap-x-4'>
		<img src={Icon} alt='photo' width={21} height={21} />
		<p>Measuring to ensure updates are a success</p>
		</li>
		
		<li className='flex flex-row items-center gap-x-4'>
      <img src={Icon} alt='photo' width={21} height={21} />
      <p>And much more!</p>
    </li>
      </ul>
    </div>
  );
};

export default Features;