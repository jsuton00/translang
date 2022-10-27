import React, { useState } from 'react';
import { FaLanguage } from 'react-icons/fa';
import LanguageSelect from './components/LanguageSelect';
import TranslateInput from './components/TranslateInput';
import TranslatedText from './components/TranslatedText';
import Header from './components/Header';

const App = () => {
	const [language, setLanguage] = useState('');
	const [text, setText] = useState('');
	return (
		<>
			<Header />
			<main className="main">
				<div className="translation container">
					<div id="translation-controls" className="translation-controls row">
						<TranslateInput inputValue={text} changeValue={setText} />
						<LanguageSelect language={language} selectLanguage={setLanguage} />
						<TranslatedText text={text} language={language} />
					</div>
				</div>
			</main>
		</>
	);
};

export default App;
