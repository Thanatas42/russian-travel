let currentLang = document.querySelector('.header__lang-link_underline_active');
const ruLang = document.querySelector('#ruLang');
const enLang = document.querySelector('#enLang');

function localization() {
  if (currentLang.textContent === 'En')
    switchEngLanguage();

  if (currentLang.textContent === 'Ru')
    switchRusLanguage();
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

const title = document.querySelector('title');
const lead = document.querySelector('.lead');
const leadTitle = lead.querySelector('.lead__title');
const leadSubtitle = lead.querySelector('.lead__subtitle');
const leadCaption = lead.querySelector('.lead__caption');

const intro = document.querySelector('.intro');
const introTitle = intro.querySelector('.intro__title');
const introText = intro.querySelector('.intro__text');

const timeZone = intro.querySelector('#timeZone');
const naturalHeritage = intro.querySelector('#naturalHeritage');
const culturalHeritage = intro.querySelector('#culturalHeritage');
const natureReserve = intro.querySelector('#natureReserve');
const airports = intro.querySelector('#airports');

const places = document.querySelector('.places');
const placeArr = places.querySelectorAll('.place');

const cover = document.querySelector('.cover');
const coverTitle = cover.querySelectorAll('.cover__title');
const coverSubtitle = cover.querySelectorAll('.cover__subtitle');

function fillingCards(count) {
  if (currentLang.textContent === 'Ru')
    switch (count) {
      case 0: return ["Куршская коса", "Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта\
    — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой.\
    Уникальная природная зона на краю российского анклава.",
        "На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая \
    западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная\
    в спокойствие природы и запах стального, прохладного моря."];
      case 1: return ["Кольский", "Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на\
    юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.",
        "Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний\
      об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а\
      от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск."];
      case 2: return ["Алтай", "Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами,\
      горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.",
        "Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной\
        флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края."];
      case 3: return ["Зимний Байкал", "Всем известен Байкал как крупнейшее озеро в мире. Многие также знают,\
      что это самый большой источник пресной воды и одно из красивейших мест в России.",
        "Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и\
        тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч."];
      case 4: return ["Карелия", "Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь\
      она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора.",
        "Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный.\
        В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями.\
        Чтобы все знали, кто тут хозяин."];
      default: return [];
    }

  if (currentLang.textContent === 'En')
    switch (count) {
      case 0: return ["Curonian Spit", "Here, in the middle of forests and sand dunes, you can see two water\
      horizon — the calm Curonian Lagoon on one side and the rippling waves of the Baltic Sea on the other.\
      A unique natural area on the edge of the Russian enclave.",
        "The Kaliningrad Region does not end there. For the traveler and explorer, there is the westernmost point of Russia, the Baltic Spit, in the same neighborhood,\
        — and the German heritage of placers of small seaside towns. The atmosphere of these places eliminates the fuss, dipping\
        into the tranquility of nature and the smell of the steel, cool sea."];
      case 1: return ["Kola", "Almost the entire peninsula is located beyond the Arctic Circle. Sami Tundra, from which to the\
      south is the taiga, and to the north is the Arctic Ocean, pretending to be the Barents Sea.",
        "Perhaps you have watched Zvyagintsev and even heard the story of the Arctic festival in Teriberka.\
        Perhaps the word \"Khibiny\" did not remain under the snow of school memories about geography lessons.\
        Perhaps you were not interested in the ultra-deep well penetrating the earth's crust, and apathy has been\
          covering you for a long time. But your dream of seeing the Northern lights begins to come true with a ticket to Murmansk."];
      case 2: return ["Altai", "Altai is one of the most beautiful places in Russia. First of all, because of the mountains: if you drive\
      along the ridge, you will see slopes strewn with pine trees, mountain rivers and lakes. And if you open\
      there are windows in the car, you can get acquainted with the invisible miracle of these places — mountain air.",
        "The climate in Altai is temperate, so it's best to go here in summer. So you will see everything variety of local\
        flora and fauna. Moose roam the forests of Altai, eagles fly over the ridges,\
        and roe deer graze on the plains. And the famous manuls are also inhabitants of the Altai Territory."];
      case 3: return ["Winter Baikal", "Everyone knows Baikal as the largest lake in the world. Many also they know,\
      that it is the largest source of fresh water and one of the most beautiful places in Russia.",
        "Of course, this is all true. Baikal is also an ideal place for competitions by skioring. This is a kind of sport\
        when a skier ties himself to a motorcycle, and the tandem tries to develop as much speed as possible on the ice.\
          In March 2019, the Baikal Mile Festival staged the world record is 197.011 km/h."];
      case 4: return ["Karelia", "Siberia ends not in the Urals, but in Karelia: the Siberian taiga forming larch does not grow west of the\
      Water Hole. But here it reaches 30 meters — the forests of Karelian national parks have never known an axe because of impassable swamps.",
        "Some pines are already older than half a millennium. Touch a living being who saw the sun before Ivan the Terrible saw it.\
        In the virgin forest, you will not find a trail for a hundred kilometers. And on the rare paths there are trees\
        a couple of meters from the ground are marked with bear claws. So that everyone knows who is the boss here."];
      default: return [];
    }
}

function localPlace() {
  placeArr.forEach((item, count) => {
    const [title, paragraph1, paragraph2] = fillingCards(count);
    item.querySelector('.place__title').textContent = title;
    item.querySelector('#paragraph1').textContent = paragraph1;
    item.querySelector('#paragraph2').textContent = paragraph2;
  })
}


function switchRusLanguage() {
  title.textContent = "Путешествия по России";
  leadTitle.textContent = "Путешествия по России";
  leadSubtitle.textContent = "Настоящая страна не в выпусках новостей, а здесь.";
  leadCaption.textContent = "ваша полка — верхняя";

  introTitle.textContent = "Чего мы там не видели?";
  introText.textContent = "По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% \
  планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с \
  морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, \
  загранпаспорта и многочасовых перелетов.Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, \
  усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране.Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.";

  timeZone.innerHTML = `<li id="timeZone">Часовых поясов&nbsp;<span class="fact - list__normal">11</span></li>`;
  naturalHeritage.innerHTML = `<li id="naturalHeritage">Объектов природного наследия ЮНЕСКО&nbsp;<span class="fact-list__normal">12</span></li>`;
  culturalHeritage.innerHTML = `<li id="culturalHeritage">Объектов культурного наследия ЮНЕСКО&nbsp;<span class="fact-list__normal">16</span></li>`;
  natureReserve.innerHTML = `<li id="natureReserve">Природных заповедников&nbsp;<span class="fact-list__normal">105</span></li>`;
  airports.innerHTML = `<li id="airports">Аэропортов&nbsp;<span class="fact-list__normal">241</span></li>`;

  localPlace();

  coverTitle.textContent = "До Байкала на собаках";
  coverSubtitle.textContent = "По мотивам учебной темы о Транссибе путешествие от столицы до Байкала на электричках.";
  console.log(coverTitle, coverSubtitle);
}

function switchEngLanguage() {
  title.textContent = "Travel in Russia";
  leadTitle.textContent = "Travel in Russia";
  leadSubtitle.textContent = "The real country is not in the news releases, but here.";
  leadCaption.textContent = "your top — shelf";

  introTitle.textContent = "What didn't we see there?";
  introText.textContent = "According to VTsIOM polls, 95% of Russians dream of going somewhere, but only 36% \
  plan to spend vacation in your home country. Like, what haven't we seen here at home? In fact, Russia is a whole universe with affectionate \
  the sea of the south, the dense forests of the Sayan Mountains and the harsh ice of the Putorana plateau. And you can also see all these beauties without \
  millions on account of a foreign passport and many hours of flights. Like, for example, Vera Bashmakova — a brave young mother who \
  taken in an armful of three children, I sat them in my Lada and drove 20 thousand kilometers across my native country. We have chosen and \
  described some interesting places worthy of your vacation.";

  timeZone.innerHTML = `<li id="timeZone">Time zones&nbsp;<span class="fact - list__normal">11</span></li>`;
  naturalHeritage.innerHTML = `<li id="naturalHeritage">UNESCO Natural Heritage Sites&nbsp;<span class="fact-list__normal">12</span></li>`;
  culturalHeritage.innerHTML = `<li id="culturalHeritage">UNESCO Cultural Heritage Sites&nbsp;<span class="fact-list__normal">16</span></li>`;
  natureReserve.innerHTML = `<li id="natureReserve">Nature reserves&nbsp;<span class="fact-list__normal">105</span></li>`;
  airports.innerHTML = `<li id="airports">Airports&nbsp;<span class="fact-list__normal">241</span></li>`;

  localPlace();

  coverTitle.textContent = "To Baikal by dogs";
  coverSubtitle.textContent = "Based on the educational topic about the Trans-Siberian Railway, a journey from the capital to Lake Baikal by train.";
  console.log(coverTitle, coverSubtitle);
}
