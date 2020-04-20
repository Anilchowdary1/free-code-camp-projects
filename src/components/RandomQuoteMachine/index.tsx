import React from 'react';

import QuoteComponent from './QuoteComponent';

import './index.css';

interface IProps {
}

interface IState {
    quotesData ?: any
    currentQuote ?: any,
    currentBackgroundColor:string
}

class RandomQuoteMachine extends React.Component<IProps, IState>{

    constructor(props:IProps){
        super(props);
        this.state ={
            quotesData: {},
            currentQuote:{},
            currentBackgroundColor : '#16a085'
        }
    }

    componentDidMount = () =>{
        document.title = "Random Quotes";
        this.getQuotesData();
    }

    getQuotesData = () =>{
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({quotesData: data});
                this.getRandomQuote();
            })
            .catch((e) => {
               console.log(e);
            });
    }

    getRandomQuote = () =>{
        const {quotesData} = this.state;
        const colors = ['#16a085', '#27ae60', '#2c3e50', '#a0aec0','#f56565','#faf089','#68d391','#4fd1c5','#32a852','#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        if(quotesData.quotes !== undefined){
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            const randomQuote = quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
            this.setState({currentQuote: randomQuote,currentBackgroundColor:randomColor})
        }
    }

    render(){
        const {currentQuote,currentBackgroundColor} = this.state;
        return(
            <div className="min-h-screen flex flex-wrap justify-center items-center bg-gray-300" style={{backgroundColor: currentBackgroundColor}}>
               {currentQuote !==undefined &&
                <QuoteComponent quote={currentQuote} currentBackgroundColor = {currentBackgroundColor} getRandomQuote={this.getRandomQuote}/>
                }
                <p className="w-full text-center mb-auto font-semi-bold text-white py-5 text-lg">by Anil</p>
            </div>
        )
    }
}

export default  RandomQuoteMachine;