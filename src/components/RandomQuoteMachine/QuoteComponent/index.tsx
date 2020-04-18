import React from 'react';
import {IoLogoTwitter} from'react-icons/io';
type QuoteComponentProps = {
    quote : any,
    getRandomQuote : Function,
    currentBackgroundColor : string
}

class QuoteComponent extends React.Component<QuoteComponentProps>{
    getNewQuote = () =>{
        const {getRandomQuote} = this.props;
        getRandomQuote();
    }
    render(){
        const {quote,currentBackgroundColor} = this.props;
        return(
            <div id="quote-box" className="shadow bg-white mt-auto px-8 py-10 w-2/5" style={{color:currentBackgroundColor}}>
                <p id="text" className="text-2xl h-full font-semi-bold "><span className="text-4xl font-bold">“ </span>{quote.quote}</p>
                <div id="author" className="text-lg flex justify-end ">- {quote.author}</div>
                <div className="flex justify-between items-center mt-5">
                <a href="/" className="p-2 text-center rounded focus:outline-none text-white text-2xl" style={{backgroundColor:currentBackgroundColor}}><IoLogoTwitter></IoLogoTwitter></a>
                <button onClick={this.getNewQuote} id="new_quote" className="bg-green-600 p-2 focus:outline-none rounded font-semi-bold text-white" style={{backgroundColor:currentBackgroundColor}}>New quote</button>
                </div>
            </div>
        )
    }
}

export default QuoteComponent;