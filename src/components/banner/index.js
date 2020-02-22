import React from 'react';

const Banner = ({className, titulo, children}) => (
	<div id="wrap_banner_padrao" className={className}>
		<div className="indent">
			<div className="conteudo">
				<div className="titulo">
					<h1>{titulo}</h1>
				</div>
				<div className="texto">
					{children}
				</div>
			</div>
		</div>
	</div>
);

export default Banner;