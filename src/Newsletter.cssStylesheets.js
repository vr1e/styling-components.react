import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter(props) {
	const [email, setEmail] = useState('');
	const emailPartsCount = countEmailParts(email);

	return (
		<section className='es-newsletter'>
			<div className='es-newsletter__spectrum' aria-hidden>
				{Array.from(Array(5)).map((_, i) => (
					<div className={`es-newsletter__bar ${i + 1 <= emailPartsCount && 'es-newsletter__bar--active'}`} key={i}></div>
				))}
			</div>
			<header className='es-newsletter__header'>
				<h2>Get the newsletter</h2>
			</header>
			<input
				className='es-newsletter__email'
				type='email'
				placeholder='Your email'
				value={email}
				onChange={evt => setEmail(evt.target.value)}
			/>
			<button className={`es-newsletter__submit`}>Sign up</button>
		</section>
	);
}

function countEmailParts(email) {
	if (/@.+\..{2,}$/.test(email)) {
		return 5;
	} else if (/@.+\..?$/.test(email)) {
		return 4;
	} else if (/@.+$/.test(email)) {
		return 3;
	} else if (/@/.test(email)) {
		return 2;
	} else if (/.+/.test(email)) {
		return 1;
	} else {
		return 0;
	}
}
