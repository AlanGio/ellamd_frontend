import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { getFormulations } from './redux/actions/formulations';
import { getIngredients } from './redux/actions/ingredients';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		props.actions.getFormulations();
		this.state = {
			selectedFormulationId: 1
		};
	}

	handleChange = (event) => {
		const { actions, formulations } = this.props;

		this.setState({ [event.target.name]: event.target.value });
		actions.getIngredients({ id: event.target.value, formulations });
	};

	render() {
		const { formulations } = this.props;
		console.log(formulations.selectedFormulation);

		return (
			<div className="App">
				<header>
					<img
						src="//static1.squarespace.com/static/5bd9fea58f51305c8a929784/t/5be90e022b6a281d5afe6ef7/1563214052903/?format=1500w"
						alt="EllaMD"
					/>
				</header>
				<h2>Patient Information</h2>

				<main>
					<Grid container spacing={10}>
						<Grid item xs={4}>
							<TextField
								id="standard-name"
								label="Name"
								margin="normal"
								InputLabelProps={{
									shrink: true
								}}
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								id="standard-name"
								label="Address"
								margin="normal"
								InputLabelProps={{
									shrink: true
								}}
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								id="date"
								label="Birthday"
								type="date"
								margin="normal"
								defaultValue="2017-05-24"
								InputLabelProps={{
									shrink: true
								}}
							/>
						</Grid>
					</Grid>

					<h2>Choose Formulation</h2>

					<Grid container spacing={10}>
						<Grid item xs={12}>
							<InputLabel htmlFor="selectedFormulationId-helper">Formulations</InputLabel>
							<Select
								value={this.state.selectedFormulationId}
								onChange={this.handleChange}
								inputProps={{
									name: 'selectedFormulationId',
									id: 'selectedFormulationId-helper'
								}}
							>
								{formulations.data.map((formulation) => (
									<MenuItem key={formulation.id} value={formulation.id}>
										{formulation.name}
									</MenuItem>
								))}
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</Grid>
					</Grid>

					<Grid container spacing={10}>
						{formulations.selectedFormulation &&
							formulations.selectedFormulation.ingredients.map((ingredient) => (
								<Grid item xs={3} key={ingredient.id}>
									<h3>{ingredient.name}</h3>
									<h4>{ingredient.description}</h4>
								</Grid>
							))}
					</Grid>
				</main>
			</div>
		);
	}
}

App.propTypes = {
	actions: PropTypes.shape({
		getIngredients: PropTypes.func,
		getFormulations: PropTypes.func
	}),
	formulations: PropTypes.shape({
		data: PropTypes.array,
		error: PropTypes.string,
		loading: PropTypes.bool
	})
};

App.defaultProps = {
	actions: {},
	text: {},
	formulations: {}
};

const mapStateToProps = (state) => ({
	formulations: state.formulations,
	ingredients: state.ingredients
});

const mapDispatchToProps = (dispatch) => ({
	actions: {
		getFormulations: bindActionCreators(getFormulations, dispatch),
		getIngredients: bindActionCreators(getIngredients, dispatch)
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
