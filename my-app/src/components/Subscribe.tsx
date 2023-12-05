

import Pic from './images/icon-success.svg';
import { useLocation, useNavigate } from 'react-router-dom';



const Subscribe = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const email = queryParams.get('email');
	const navigate = useNavigate();
     const handDismiss = ()=>{
	navigate("/")
    }
	return(
	<>
	<div className='flex h-screen flex-col justify-center gap-y-10 bg-white px-6 py-10 md:h-min md:max-w-lg md:rounded-4xl md:px-16 md:py-12'>
		<div><img src={Pic} alt='' width={64} height={64} />
		</div>
			<div className='flex flex-col gap-y-6'>
				<h1 className='text-4xl font-bold text-darkSlateGrey md:text-5xl'>
					Thanks for subscribing!
				</h1>
				<p className='text-darkSlateGrey'>
					A confirmation email has been sent to{' '}
					<span className='font-bold'>{email}</span>. Please open it and click
					the button inside to confirm your subscription
				</p>
			</div>
			<div className='sticky top-[100vh]'>
		<button onClick={handDismiss} className='w-full rounded-lg bg-darkSlateGrey py-4 text-center font-bold tracking-wide text-white hover:bg-btnGradient hover:shadow-xl'><p className='font-bold color:black'>Dismiss message</p></button> 
		</div>
		</div>
	</>
)
}

export default Subscribe;