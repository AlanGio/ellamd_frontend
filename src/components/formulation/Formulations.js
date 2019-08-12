import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Formulations = ({ formulations, selectedFormulationId, handleChange }) => (
	<Fragment>
		<h2>Choose Formulation</h2>

		<Grid container spacing={10}>
			<Grid item xs={12} className="formulation-chooser">
				<InputLabel htmlFor="selectedFormulationId-helper">Formulations</InputLabel>
				<Select
					value={selectedFormulationId}
					onChange={handleChange}
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
				</Select>
			</Grid>
		</Grid>
	</Fragment>
);

Formulations.propTypes = {
	formulation: PropTypes.shape({
		data: PropTypes.array,
		error: PropTypes.string,
		loading: PropTypes.bool,
		selectedFormulation: PropTypes.object
	}),
	selectedFormulationId: PropTypes.number,
	handleChange: PropTypes.func
};

Formulations.defaultProps = {
	formulations: {},
	selectedFormulationId: () => {},
	handleChange: () => {}
};

export default Formulations;
