import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'DOM stand for ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'Document Object Module', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'HTML stand for ?',
			answerOptions: [
				{ answerText: 'HTML', isCorrect: false },
				{ answerText: 'CSS', isCorrect: false },
				{ answerText: 'Hypertext Markup Language', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'CSS stand for ?',
			answerOptions: [
				{ answerText: 'HTML', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'casecading style sheet', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'ALU stand for ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'Arthimatic Logic Unit', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'PSL stand for ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'Pakistan Supper Leage', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'OLX stand for ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'On-line-Exchange', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},
		{
			questionText: 'LU stand for ?',
			answerOptions: [
				{ answerText: 'Document Object Module', isCorrect: false },
				{ answerText: 'Document Object Modul', isCorrect: false },
				{ answerText: 'Logic Unit', isCorrect: true },
				{ answerText: 'Document Object Math', isCorrect: false },
			],
		},

		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
      answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
 
 
  
   const [currentQustion , setcurrentQustion] = useState(0);
   const [score, setscore] = useState(false);
   const [count, setcount] = useState(0);

   const onclickfunction = (isCorrect) => {

	     if(isCorrect == true){
			 setcount(count + 1)
		 }
		const nextQution = currentQustion + 1;
		if (nextQution < questions.length) {
			setcurrentQustion(nextQution);
		}
		else {
			
			setscore(true);
		}

	}
	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{score? (
				<div className='score-section'>You scored {count} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section '>
						<div className='question-count'>
							<span>Question {currentQustion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQustion].questionText}</div>
					</div>
					<div className='answer-section '>
					{questions[currentQustion].answerOptions.map((answerOptions)=> 
					<button onClick={() => onclickfunction(answerOptions.isCorrect) }>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}