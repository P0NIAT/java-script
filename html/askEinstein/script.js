const API_KEY = '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';
const head = document.querySelector('img');
const intupVal = document.querySelector('input');
const answer = document.querySelector('.answer');

async function getMessage() {
	console.log('clicked');
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: intupVal.value }],
			max_tokens: 100,
		}),
	};

	try {
		const res = await fetch(
			'https://api.openai.com/v1/chat/completions',
			options
		);
		const data = await res.json();
		console.log(data);
		answer.textContent = data.choices[0].message.content;
		head.classList.remove('shake-animation');
	} catch (error) {
		console.log(error);
	}
}

const shakeHead = () => {
	head.classList.add('shake-animation');
	setTimeout(getMessage, 1000);
};

head.addEventListener('click', shakeHead);
