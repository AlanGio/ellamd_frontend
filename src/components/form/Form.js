import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Form = () => (
	<Fragment>
		<h2>Patient Information</h2>
		<Grid container spacing={2}>
			<Grid item xs={6} md={4}>
				<TextField
					required
					id="standard-name"
					label="Name"
					margin="normal"
					InputLabelProps={{
						shrink: true
					}}
				/>
			</Grid>
			<Grid item xs={6} md={4}>
				<TextField
					required
					id="standard-name"
					label="Address"
					margin="normal"
					InputLabelProps={{
						shrink: true
					}}
				/>
			</Grid>
			<Grid item xs={6} md={4}>
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
	</Fragment>
);

export default Form;
