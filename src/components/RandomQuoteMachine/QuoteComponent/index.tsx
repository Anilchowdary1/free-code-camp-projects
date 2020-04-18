import React from 'react';
import {IoLogoTwitter} from'react-icons/io';
type QuoteComponentProps = {
    quote : any,
    getRandomQuote : Function
}

class QuoteComponent extends React.Component<QuoteComponentProps>{
    getNewQuote = () =>{
        const {getRandomQuote} = this.props;
        getRandomQuote();
    }
    render(){
        const {quote} = this.props;
        return(
            <div id="quote-box" className="shadow bg-gray-900 mt-auto px-8 py-10 w-2/5">
                <p id="text" className="text-2xl h-full font-semi-bold text-white"><span className="text-4xl font-bold">“ </span>{quote.quote}</p>
                <div id="author" className="text-lg flex justify-end text-white">- {quote.author}</div>
                <div className="flex justify-between items-center mt-5">
                <a href="/" className="p-2 bg-green-600 text-center rounded focus:outline-none text-white text-2xl"><IoLogoTwitter></IoLogoTwitter></a>
                <button onClick={this.getNewQuote} id="new_quote" className="bg-green-600 p-2 focus:outline-none rounded font-semi-bold text-white">New quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteComponent;