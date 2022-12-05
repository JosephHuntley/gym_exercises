import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscle, equipmentExercises }) => {
	return (
		<Box sx={{ mt: { lg: '100px', xs: '30px' } }}>
			<Typography
				variant='h3'
				mb={5}>
				Exercises that target the same muscle group.
			</Typography>
			<Stack
				direction='row'
				sx={{ p: '2', position: 'relative' }}>
				{targetMuscle.length ? (
					<HorizontalScrollbar
						data={targetMuscle}
						isBodyParts={false}
					/>
				) : (
					<Loader />
				)}
			</Stack>
			<Typography
				variant='h3'
				mb={5}>
				Exercises that use the same equipment.
			</Typography>
			<Stack
				direction='row'
				sx={{ p: '2', position: 'relative' }}>
				{equipmentExercises.length ? (
					<HorizontalScrollbar
						data={equipmentExercises}
						isBodyParts={false}
					/>
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
