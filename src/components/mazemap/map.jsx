import './mazemap.css';

const MazeMap = ({}) => {
	return (
		<iframe
			title='mazemap'
			className='mazemap'
			src={`https://use.mazemap.com/embed.html#v=1&campusid=91&zlevel=1&center=6.235156,62.471926&zoom=18.4&sharepoitype=poi&sharepoi=1000289842`}
			width='100%'
			height='100%'
		/>
	)
}

export default MazeMap;
