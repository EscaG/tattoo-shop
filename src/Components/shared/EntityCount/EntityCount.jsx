import React from 'react';
import useWindowSize from '../useWindowSize/useWindowSize';
import './entity.scss';

export default function EntityCount({ entity }) {
	const size = useWindowSize();
	const widthXL = process.env.REACT_APP_W_XL;


	return (
		<div className='entity-block' style={{ top: (size.width || 0) > widthXL ? '-18px' : '' }}>
			<span>{entity}</span>
		</div>
	)
}
