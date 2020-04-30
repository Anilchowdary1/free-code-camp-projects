import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RandomQuoteMachine from "./components/RandomQuoteMachine";
// import MarkdownPreviewer from "./components/MarkdownPreviewer";

function App() {
	return (
		<RandomQuoteMachine />
		// <Router basename={process.env.PUBLIC_URL}>
		// <Switch>
		//   <Route exact path='/random-quotes'>
		//      <RandomQuoteMachine />
		//   </Route>
		//   <Route exact path='/markdown-preview'>
		//      <MarkdownPreviewer />
		//   </Route>
		//   <Route exact path='/'>
		//      <div className="flex justify-center mt-8 text-xl ">

		//      <ul>
		//        <li ><Link to="/random-quotes">Random Quote Machine</Link></li>
		//        <li ><Link to="/markdown-preview">Markdown Previewer</Link></li>
		//      </ul>
		//      </div>
		//   </Route>
		// </Switch>
		// </Router>
	);
}

export default App;
