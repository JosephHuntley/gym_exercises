import React from 'react';
import { Stack } from '@mui/system';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
	return (
		<Stack
			direction='row'
			justifyContent='center'
			alignContent='center'
			width='100%'>
			<InfinitySpin color='grey' />
		</Stack>
	);
};

export default Loader;
