import React from 'react';

const Rank = ({name, entries}) =>{
	return(
		<div className='center'>
			<div className='gray f3'>
				{`${name} , your current entry count is...`}
			</div>
			<div className ='gray f1'>
			{entries}
			</div>


		</div>)
}

export default Rank;