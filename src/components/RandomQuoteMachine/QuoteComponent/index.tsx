import React from "react";
import { IoLogoTwitter } from "react-icons/io";
type QuoteComponentProps = {
	quote: any;
	getRandomQuote: Function;
	currentBackgroundColor: string;
};

class QuoteComponent extends React.Component<QuoteComponentProps> {
	getNewQuote = () => {
		const { getRandomQuote } = this.props;
		getRandomQuote();
	};
	render() {
		const { quote, currentBackgroundColor } = this.props;
		return (
			<div
				id='quote-box'
				className='shadow bg-white mt-auto px-8 py-10 w-11/12 md:w-2/5'
				style={{ color: currentBackgroundColor }}>
				<p id='text' className='text-2xl h-full font-semi-bold '>
					<span className='text-4xl font-bold'>“ </span>
					{quote.quote}
				</p>
				<div id='author' className='text-lg flex justify-end '>
					- {quote.author}
				</div>
				<div className='flex justify-between items-center mt-5'>
					<a
						id='tweet-quote'
						href='twitter.com/intent/tweet'
						className='p-2 text-center rounded focus:outline-none text-white text-2xl'
						style={{ backgroundColor: currentBackgroundColor }}>
						<IoLogoTwitter></IoLogoTwitter>
					</a>
					<button
						id='new-quote'
						onClick={this.getNewQuote}
						className='bg-green-600 p-2 focus:outline-none rounded font-semi-bold text-white'
						style={{ backgroundColor: currentBackgroundColor }}>
						New quote
					</button>
				</div>
			</div>
		);
	}
}

export default QuoteComponent;
