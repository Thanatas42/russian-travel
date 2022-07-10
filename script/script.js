let currentLang = document.querySelector('.header__lang-link_underline_active');
const ruLang = document.querySelector('#ruLang');
const enLang = document.querySelector('#enLang');

function localization() {
  document.querySelector('title').textContent = "Travel in Russia";
  document.querySelector('.lead__title').textContent = "Travel in Russia";
  document.querySelector('.lead__subtitle').textContent = "The real country is not in the news releases, but here.";
  document.querySelector('.lead__caption').textContent = "your top — shelf";
  if (currentLang.textContent === 'Ru') {
    document.querySelector('title').textContent = "Путешествия по России";
    document.querySelector('.lead__title').textContent = "Путешествия по России";
    document.querySelector('.lead__subtitle').textContent = "Настоящая страна не в выпусках новостей, а здесь.";
    document.querySelector('.lead__caption').textContent = "ваша полка — верхняя";
  }
}

ruLang.addEventListener('click', () => {
  ruLang.classList.add('header__lang-link_underline_active');
  enLang.classList.remove('header__lang-link_underline_active');
  currentLang = document.querySelector('.header__lang-link_underline_active');
  localization(currentLang.textContent);
});

enLang.addEventListener('click', () => {
  ruLang.classList.remove('header__lang-link_underline_active');
  enLang.classList.add('header__lang-link_underline_active');
  currentLang = document.querySelector('.header__lang-link_underline_active');
  localization(currentLang.textContent);
});


