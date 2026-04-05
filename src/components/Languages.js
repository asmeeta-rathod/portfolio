import React from 'react';

const Languages = () => {
  const languages = [
    { lang: 'English', level: 'Professional Working' },
    { lang: 'Hindi', level: 'Full Professional' },
    { lang: 'Gujarati', level: 'Native or Bilingual' }
  ];
  return (
    <section id="languages">
      <h2>Languages</h2>
      <ul>
        {languages.map(l => <li key={l.lang}>{l.lang} - {l.level}</li>)}
      </ul>
    </section>
  );
};

export default Languages;