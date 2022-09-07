type questionsListType = {
  title: string;
  questions: {
    id: number;
    content: string;
    value?: number;
    slider?: {
      value: number;
      min: number;
      max: number;
      step?: number;
      label?: string;
    }
  }[];
}

type resultsListType = {
  boundary: number;
  text: string;
}

export const questionsList: questionsListType[] = [
  {
    title: 'WODA',
    questions: [
      { id: 0, content: 'Zmywasz pod bieżącą wodą nie ograniczając jej zużycia', value: 4 },
      { id: 1, content: 'Starasz się maksymalnie ograniczać zużycie wody podczas zmywania', value: 1 },
      { id: 2, content: 'Ile razy w tygodniu kąpiesz się w wannie?', slider: { value: 2, min: 0, max: 20 } },
      { id: 3, content: 'Ile razy w tygodniu bierzesz prysznic?', slider: { value: 1, min: 0, max: 20 } },
      { id: 4, content: 'Ile razy w tygodniu używasz zmywarki do naczyń?', slider: { value: 0.85, min: 0, max: 10 } },
      { id: 5, content: 'Ile razy w miesiącu myjesz samochód na myjni?', slider: { value: 0.5, min: 0, max: 10 } },
    ]
  },
  {
    title: 'JEDZENIE',
    questions: [
      { id: 6, content: 'Robiąc zakupy kupujesz świeże produkty pochodzące z Twojego regionu', value: 2 },
      { id: 7, content: 'Świadomie szukasz produktów świeżych i lokalnych, choć nie zawsze ci się to udaje', value: 7 },
      { id: 8, content: 'Nie zwracasz uwagi na to, jakie produkty kupujesz (skąd pochodzą i jak są przetworzone', value: 25 },
      { id: 9, content: 'Jesz mięso codziennie', value: 85 },
      { id: 10, content: 'W twojej diecie przeważają produkty bezmięsne', value: 30 },
      { id: 11, content: 'Jesteś wegetarianinem', value: 10 },
      { id: 12, content: 'Jesteś weganinem', value: 4 },
    ]
  },
  {
    title: 'MIESZKANIE',
    questions: [
      { id: 13, content: 'Zajmujesz kawalerkę w bloku', value: 7 },
      { id: 14, content: 'Zajmujesz domek szeregowy', value: 15 },
      { id: 15, content: 'Zajmujesz mieszkanie w bloku', value: 12 },
      { id: 16, content: 'Zajmujesz wolno stojący dom', value: 33 },
    ]
  },
  {
    title: 'WAKACJE',
    questions: [
      { id: 17, content: 'Ile razy poleciałeś samolotem na inny kontynent w ciągu ostatniego roku?', slider: { value: 85, min: 0, max: 10 } },
      { id: 18, content: 'Ile razy poleciałeś samolotem do kraju europejskiego w ciągu ostatniego roku?', slider: { value: 30, min: 0, max: 10 } },
      { id: 19, content: 'Ile razy podróżowałeś samochodem do kraju europejskiego w ciągu ostatniego roku?', slider: { value: 20, min: 0, max: 10 } },
      { id: 20, content: 'Ile razy podróżowałeś samochodem po Polsce w ciągu ostatniego roku?', slider: { value: 15, min: 0, max: 10 } },
      { id: 21, content: 'Ile razy podróżowałeś autobusem do kraju europejskiego w ciągu ostatniego roku?', slider: { value: 9, min: 0, max: 10 } },
      { id: 22, content: 'Ile razy podróżowałeś autobusem po Polsce w ciągu ostatniego roku?', slider: { value: 7, min: 0, max: 10 } },
      { id: 23, content: 'Ile razy podróżowałeś pociągiem do kraju europejskiego w ciągu ostatniego roku?', slider: { value: 5, min: 0, max: 10 } },
      { id: 24, content: 'Ile razy podróżowałeś pociągiem po Polsce w ciągu ostatniego roku?', slider: { value: 4, min: 0, max: 10 } },
    ]
  },
  {
    title: 'OGRZEWANIE DOMU',
    questions: [
      { id: 25, content: 'Twój dom ma dobrą izolację', value: -15 },
      { id: 26, content: 'Masz szczelne okna', value: -5 },
      { id: 27, content: 'Ogrzewanie włączasz tylko wtedy, gdy jest to konieczne, przykręcasz termostat na minimum', value: -10 },
    ]
  },
  {
    title: 'ELEKTRYCZNOŚĆ',
    questions: [
      { id: 28, content: 'Czerpiesz energię z odnawialnych źródeł', value: 15 },
      { id: 29, content: 'Gasisz światło wychodząc z pokoju', value: -10 },
      { id: 30, content: 'Wyłączasz sprzęt elektroniczny nie pozostawiając go w stanie czuwania', value: -5 },
      { id: 31, content: 'Wymieniłeś żarówki na energooszczędne', value: -10 },
      { id: 32, content: 'Starasz się w inny sposób maksymalnie ograniczyć zużycie energii (rezygnacja z lodówki, zmywarki, telewizora)', value: -30 },
      { id: 33, content: 'Ile godzin w tygodniu przeglądasz internet w formie streamingu (YouTube, filmy, spotkania online, gry wideo)?', slider: { value: 1, min: 0, max: 100, label: ' h' } },
    ]
  },
  {
    title: 'CODZIENNE PODRÓŻE',
    questions: [
      { id: 34, content: 'Korzystasz z transportu publicznego', value: 25 },
      { id: 35, content: 'Korzystasz przede wszystkim z roweru', value: 5 },
      { id: 36, content: 'Ile litrów paliwa na 100 kilometrów spala twój samochód?', slider: { value: 0.32, min: 0, max: 20, step: 0.5, label: ' l/100 km' } },
      { id: 37, content: 'Ile kilometrów dziennie średnio pokonujesz samochodem?', slider: { value: 1, min: 0, max: 100, label: ' km' } },
    ]
  },
  {
    title: 'PAPIER',
    questions: [
      { id: 38, content: 'Kupujesz gazety lub czasopisma', value: 10 },
      { id: 39, content: 'Kupujesz gazety lub czasopisma, ale dzielisz się nimi', value: 5 },
      { id: 40, content: 'Kupujesz kilka książek w roku', value: 2 },
    ]
  },
  {
    title: 'ODPADY',
    questions: [
      { id: 41, content: 'Segregujesz śmieci', value: -20 },
      { id: 42, content: 'Kompostujesz odpadki kuchenne', value: -5 },
      { id: 43, content: 'Unikasz kupowania puszek', value: -10 },
      { id: 44, content: 'Unikasz kupowania jednorazowych opakowań szklanych', value: -5 },
      { id: 45, content: 'Unikasz toreb i opakowań plastikowych', value: -5 },
      { id: 46, content: 'Ile średnio wydajesz miesięcznie na zakupy niezwiązane z jedzeniem?', slider: { value: 0.01, min: 0, max: 5000, step: 50, label: ' zł' } },
    ]
  }
];

export const resultsList: resultsListType[] = [
  { boundary: 0, text: 'Dobra robota, żyjesz, prawie nie przekraczając swego udziału w ziemskich zasobach. Gdyby każdy żył tak jak Ty, prowadzilibyśmy styl życia określany mianem zrównoważonego. Prawie 70% ludności na Ziemi żyje w ten sposób' },
  { boundary: 200, text: 'Twój ślad jest mniejszy niż średnia europejska. Gdyby każdy żył jak Ty, potrzebowalibyśmy dodatkowej planety, by sprostać konsumpcji. Około 15% ludności żyje w ten sposób.' },
  { boundary: 400, text: 'Twój ślad odpowiada średniej europejskiej, przekracza trzykrotnie Twój udział w ziemskich zasobach. Gdyby każdy żył jak Ty, potrzebne by były dwie dodatkowe planety. Około 7% ludności żyje w ten sposób.' },
  { boundary: 600, text: 'Twój ślad przekracza średnią europejską. Gdyby cała ludzkość prowadziła taki styl życia, potrzebne by były jeszcze trzy dodatkowe planety. Około 3% ludności żyje w ten sposób.' },
  { boundary: 800, text: 'Twój ślad zbliżył się do tego, jaki pozostawia przeciętny Amerykanin. By sprostać takiej konsumpcji, potrzeba jeszcze czterech planet. Żyje tak około 5% ludzi.' },
];
