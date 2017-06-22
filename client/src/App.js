import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { gql, ApolloClient, createNetworkInterface, ApolloProvider, graphql } from 'react-apollo';

const FetchMovies = graphql(gql`
	{
	ingredient(id: 1) {
			description
		}
	}
`, { options: { notifyOnNetworkStatusChange: true } })(Feed);

function Feed({ data }) {
	console.log(data)
	return (
		<div>Hello World</div>
	)
}


class App extends Component {
	createClient() {
		// Initialize Apollo Client with URL to our server
		return new ApolloClient({
			networkInterface: createNetworkInterface({
				uri: 'http://localhost:3000/api/ingredients',
			}),
		});
	}

	getDrinks () {
		this.fetch('api/drinks')
			.then(drinks => {
				this.setState({drinks: drinks})
				this.getDrink(drinks[0].id)
			})
	}
	getDrink (id) {
		this.fetch(`api/drinks/${id}`)
			.then(drink => this.setState({drink: drink}))
	}
	render () {
		return (
			<ApolloProvider client={this.createClient()}>
				<FetchMovies />
			</ApolloProvider>
		);
	}
}

export default App
