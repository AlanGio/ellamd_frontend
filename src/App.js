import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './components/form/Form';
import Formulations from './components/formulation/Formulations';
import Header from './components/header/Header';
import Ingredients from './components/ingredients/Ingredients';

import Button from '@material-ui/core/Button';

import { getFormulations } from './redux/actions/formulations';
import { getIngredients } from './redux/actions/ingredients';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

	exportPdf = () => {
		html2canvas(document.body).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			var pdf = new jsPDF({
				orientation: 'landscape'
			});
			pdf.addImage(imgData, 'GIF', -35, -25);
			pdf.save('RecipePatient.pdf');
		});
	};

	render() {
		const { formulations } = this.props;
		const { selectedFormulationId } = this.state;

		return (
			<div className="App">
				<Header />
				<main>
					<Form />

					{formulations.loading ? (
						<h2>Loading</h2>
					) : (
						<Fragment>
							<Formulations
								formulations={formulations}
								selectedFormulationId={selectedFormulationId}
								handleChange={this.handleChange}
							/>

							<Ingredients formulations={formulations} />

							<div className="export-container">
								<Button
									variant="contained"
									color="primary"
									data-html2canvas-ignore="true"
									className="export-button"
									onClick={this.exportPdf}
								>
									Export Recipe
								</Button>
							</div>
						</Fragment>
					)}
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
		loading: PropTypes.bool,
		selectedFormulation: PropTypes.object
	})
};

App.defaultProps = {
	actions: {},
	formulations: {},
	selectedFormulation: {}
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
