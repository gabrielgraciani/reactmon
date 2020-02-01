import React from 'react';
import ReactHooksCarousel from 'react-hooks-carousel';

function Carousel() {
	return (
		<ReactHooksCarousel
			height="500px"
			width="100%"
			pictures={[
				"https://images6.alphacoders.com/996/996006.png",
				"https://s1.1zoom.me/b5050/385/Pok%C3%A9mon_Detective_Pikachu_Baseball_cap_563737_1920x1080.jpg",
			]}
			disableAutoPlay="true"
		/>
	);
}
export default Carousel;