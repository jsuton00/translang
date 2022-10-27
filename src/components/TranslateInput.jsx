import React from 'react';

const TranslateInput = (props) => {
	const { inputValue, changeValue } = props;

	const onChange = (e) => {
		e.persist();
		return changeValue(e.target.value);
	};

	return (
		<div id="translate-input" className="translate-input">
			<textarea
				id="language-input"
				name="language-input"
				type="text"
				placeholder="English..."
				rows="7"
				className="language-input form-control"
				onChange={onChange}
				value={inputValue}
				autoFocus
			></textarea>
		</div>
	);
};

export default TranslateInput;
