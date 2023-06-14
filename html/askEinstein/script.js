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

// const { Configuration, OpenAIApi } = require('./node_modules/openai/dist/index/openai');
// const { Configuration, OpenAIApi } = require('openai');

// const { config } = require('dotenv');
// config();

// const configuration = new Configuration({
// 	apiKey: process.env.API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const main = async () => {
// 	const question = 'What is the capital of Poland?';
// 	const answer = await openai.createCompletion({
// 		model: 'text-davinci-003',
// 		prompt: question,
// 		temperature: 0,
// 		max_tokens: 7,
// 	});
// 	console.log(answer.data.choices[0].text);
// };
// main()

// console.log('hello');
// import readline from "readline";
// console.log(process.env.API_KEY);
// import { Configuration, OpenAIApi } from 'openai';
// import { config } from 'dotenv';
// config();

// const head = document.querySelector('img');
// const answer = document.querySelector('.answer');
// const error = document.querySelector('.error');

// const openai = new OpenAIApi(
// 	new Configuration({
// 		// apiKey: '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',
// 		apiKey: process.env.API_KEY,
// 	})
// );

// const aswerList = [
// 	'Yes!',
// 	'No.',
// 	'Maybe...',
// 	'It is hard to say.',
// 	'Do you really want to know answer to this qunpmestion?',
// 	'It will be better for You if You do not know the answer...',
// ];

// const shakeHead = () => {
// 	head.classList.add('shake-animation');
// 	setTimeout(intupCheck, 1000);
// };

// const intupCheck = () => {
// 	if (intup.value !== '' && intup.value.slice(-1) === '?') {
// 		giveAnswer();
// 		error.textContent = '';
// 	} else if (intup.value !== '' && intup.value.slice(-1) !== '?') {
// 		error.textContent = 'Please use the question mark "?"';
// 		answer.textContent = '';
// 	} else {
// 		error.textContent = 'Please type the question.';
// 		answer.textContent = '';
// 	}
// 	head.classList.remove('shake-animation');
// };

// const giveAnswer = () => {
// 	const number = Math.round(Math.random() * aswerList.length);
// 	answer.innerHTML = `<span>Answer:</span> ${aswerList[number]}`;
// };

// const userInterface = readline.createIterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// userInterface.prompt();
// userInterface.on('line', async (input) => {
// 	const res = await );

// const intupVal = document.querySelector('input');
// openai
// .createChatCompletion({
// 	model: 'gpt-3.5-turbo',
// 	messages: [{ role: 'user', content: intupVal }],
// })
// .then((res) => console.log(res.data.choices[0].message.content));

// head.addEventListener('click', shakeHead);
