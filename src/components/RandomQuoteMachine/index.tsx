import React from 'react';

import QuoteComponent from './QuoteComponent'

type quotesDataType = {
    quotes ?: any
}
interface IProps {
}

interface IState {
    quotesData ?: any
}

class RandomQuoteMachine extends React.Component<IProps, IState>{

    constructor(props:IProps){
        super(props);
        this.state ={
            quotesData: {}
        }
    }

    componentDidMount = () =>{
        this.getQuotesData();
    }

    getQuotesData = () =>{
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({quotesData: data});
                console.log(data);
            })
            .catch((e) => {
               console.log(e);
            });
    }

    getRandomQuote = () =>{
        const {quotesData} = this.state;
        console.log("random",quotesData)
        if(quotesData.quotes !== undefined){
            return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
        }else{
            return;
        }
    }

    render(){
        const quote = this.getRandomQuote();
        console.log(quote);
        return(
            <div className="h-screen bg-gray-700">
               
            </div>
        )
    }
}

export default  RandomQuoteMachine;