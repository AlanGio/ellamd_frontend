import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const Ingredients = ({ formulations }) => (
	<Fragment>
		<Grid container spacing={0}>
			<Grid item xs={12}>
				<h2>Setup Ingredients</h2>
			</Grid>
		</Grid>
		<Grid container spacing={2}>
			{formulations.selectedFormulation &&
				formulations.selectedFormulation.ingredients.map((ingredient) => (
					<Grid item md={3} key={ingredient.id}>
						<h3>{ingredient.name}</h3>
						<h4>{ingredient.description}</h4>

						<Slider
							defaultValue={Math.round(ingredient.maximum_percentage / 2)}
							aria-labelledby="discrete-slider"
							valueLabelDisplay="on"
							step={1}
							marks
							min={ingredient.minimum_percentage}
							max={ingredient.maximum_percentage}
						/>
					</Grid>
				))}
		</Grid>
	</Fragment>
);

Ingredients.propTypes = {
	formulations: PropTypes.shape({
		data: PropTypes.array,
		error: PropTypes.string,
		loading: PropTypes.bool,
		selectedFormulation: PropTypes.object
	})
};

Ingredients.defaultProps = {
	formulations: {}
};

export default Ingredients;
