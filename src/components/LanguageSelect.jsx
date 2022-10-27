import React from 'react';
import { LANGUAGES } from '../constants/languages';

const LanguageSelect = (props) => {
	const { language, selectLanguage } = props;
	const languageList = LANGUAGES;

	const onChange = (e) => {
		return selectLanguage(e.target.value);
	};

	return (
		<div id="language-select-section" className="language-select-section">
			<select
				id="language-select"
				className="language-select form-control"
				onChange={onChange}
				value={language}
			>
				{languageList.map((language, index) => {
					return (
						<option key={Math.random()} value={language.value}>
							{language.label}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default LanguageSelect;
