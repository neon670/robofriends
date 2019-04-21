import React, { Component} from 'react';

class ErrorBoundry extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info){
		this.setState({hasError: true})
	}

	render(){
		if(this.state.ErrorBoundry){
			return <h1>Ooops. Something is wrong</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry;