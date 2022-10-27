import React from 'react';
import { FaLanguage } from 'react-icons/fa';

const Header = () => {
	return (
		<header className="header container-fluid">
			<div className="header-row row">
				<div className="app-brand">
					<h1 className="app-brand-text">
						<span className="app-brand-logo">
							<FaLanguage />
						</span>
						Translang
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
