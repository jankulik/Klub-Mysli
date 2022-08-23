export const questionsList = [
  {
    title: 'WODA',
    questions: [
      { id: 0, content: 'Kąpiesz się codziennie w wannie', value: 14 },
      { id: 1, content: 'Kąpiesz się w wannie raz lub dwa razy w tygodniu', value: 2 },
      { id: 2, content: 'Codziennie bierzesz prysznic', value: 4 },
      { id: 3, content: 'Uważasz, że ludzie przykładają nadmierną wagę do higieny i bierzesz prysznic raz w tygodniu', value: 1 },
      { id: 4, content: 'Używasz zmywarki do naczyń codziennie lub co drugi dzień', value: 6 },
      { id: 5, content: 'W upalne letnie dni podlewasz ogród lub myjesz samochód, używając węża do podlewania', value: 4 }
    ]
  },
  {
    title: 'JEDZENIE',
    questions: [
      { id: 6, content: 'Robiąc ostatnio zakupy, kupiłeś świeże produkty pochodzące z Twojego regionu', value: 2 },
      { id: 7, content: 'Zwykle wybierasz produkty starannie opakowane, mocno przetworzone, nie zwracając uwagi na to, skąd pochodzą', value: 15 },
      { id: 8, content: 'Świadomie szukasz produktów z najbliższych rejonów, ale nie zwracasz uwagi na stopień ich przetworzenia', value: 7 },
      { id: 9, content: 'Przy każdym posiłku jesz mięso', value: 85 },
      { id: 10, content: 'Jesz głównie wegetariańskie dania', value: 30 }
    ]
  },
  {
    title: 'MIESZKANIE',
    questions: [
      { id: 11, content: 'Zajmujesz kawalerkę w bloku', value: 7 },
      { id: 12, content: 'Zajmujesz domek szeregowy', value: 15 },
      { id: 13, content: 'Zajujesz duży apartament w bloku', value: 12 },
      { id: 14, content: 'Zajmujesz połowę bliźniaka', value: 23 },
      { id: 15, content: 'Zajmujesz wolno stojący dom', value: 33 }
    ]
  },
  {
    title: 'WAKACJE (i praca)',
    questions: [
      { id: 16, content: 'W zeszłym roku poleciałeś do Australii lub dalej', value: 155 },
      { id: 17, content: 'W zeszłym roku byłeś w kraju europejskim', value: 20 },
      { id: 18, content: 'W zeszłym roku byłeś w Azji lub Ameryce', value: 85 },
      { id: 19, content: 'W zeszłym roku podróżowałeś pociągiem lub samochodem po Europie i Polsce', value: 10 }
    ]
  },
  {
    title: 'OGRZEWANIE DOMU',
    questions: [
      { id: 20, content: 'Termostat w kaloryferach skręcasz do minimum, woląc założyć dodatkową warstwę odzieży', value: -5 },
      { id: 21, content: 'Twój dom ma dobrą izolację', value: -15 },
      { id: 22, content: 'W oknach masz podwójne szyby', value: -5 },
      { id: 23, content: 'Wolisz włączyć ogrzewanie tylko wtedy, gdy jest to konieczne, niż mieć je włączone przez chłodną część roku', value: -10 }
    ]
  },
  {
    title: 'ELEKTRYCZNOŚĆ',
    questions: [
      { id: 24, content: 'Czerpiesz energię z odnawialnych źródeł', value: 2 },
      { id: 25, content: 'Podczas produkcji energii, z której korzystasz, uwalniany jest dwutlenek węgla', value: 75 },
      { id: 26, content: 'Gasisz światło, wychodząc z pokoju', value: -10 },
      { id: 27, content: 'Wyłączasz komputerów, telewizory i sprzęt hi-fi nie pozostawiając ich w stanie czuwania', value: -10 }
    ]
  },
  {
    title: 'CODZIENNE PODRÓŻE',
    questions: [
      { id: 28, content: 'Jeździsz do pracy samochodem, to nowoczesne auto z silnikiem o małej pojemności', value: 40 },
      { id: 29, content: 'Jeździsz do pracy samochodem, to duży samochód z napędem na cztery koła', value: 75 },
      { id: 30, content: 'Twój samochód zakwalifikowałbyś pomiędzy tymi kategoriami', value: 50 },
      { id: 31, content: 'Korzystasz z autobusu albo pociągu zamiast samochodu', value: 25 }
    ]
  },
  {
    title: 'PAPIER',
    questions: [
      { id: 32, content: 'Pożyczyłeś ostatnio przeczytaną książkę', value: 0 },
      { id: 33, content: 'Kupiłeś ostatnio przeczytaną książkę', value: 2 },
      { id: 34, content: 'Czasami pożyczasz, czasami kupujesz', value: 1 },
      { id: 35, content: 'Zawsze dzielisz się przeczytanymi gazetami i czasopismami', value: 5 },
      { id: 36, content: 'Po przeczytaniu wyrzucasz gazety do kosza', value: 10 }
    ]
  },
  {
    title: 'ODPADY',
    questions: [
      { id: 37, content: 'W ostatnim miesiącu wyrzuciłeś puste butelki do ulicznego pojemnika na szkło', value: -15 },
      { id: 38, content: 'Zbierasz makulaturę', value: -17 },
      { id: 39, content: 'Zbierasz puszki', value: -10 },
      { id: 40, content: 'Wyrzucasz plastik do odpowiedniego pojemnika', value: -8 },
      { id: 41, content: 'Kompostujesz organiczne odpadki z kuchni i ogrodu', value: -5 },
      { id: 42, content: 'Unikasz produkowania nadmiaru śmieci, kupując mniej lub wykorzystując różne rzeczy ponownie', value: -15 }
    ]
  }
]

export const resultsList = [
  { boundary: 0, text: 'Dobra robota, żyjesz, prawie nie przekraczając swego udziału w ziemskich zasobach. Gdyby każdy żył tak jak Ty, prowadzilibyśmy styl życia określany mianem zrównoważonego. Prawie 70% ludności na Ziemi ma wynik niższy niż 200 pkt.'},
  { boundary: 200, text: 'Twój ślad jest mniejszy niż średnia europejska. Gdyby każdy żył jak Ty, potrzebowalibyśmy dodatkowej planety, by sprostać konsumpcji. Około 15% ludności żyje w ten sposób.'},
  { boundary: 400, text: 'Twój ślad odpowiada średniej europejskiej, przekracza trzykrotnie Twój udział w ziemskich zasobach. Gdyby każdy żył jak Ty, potrzebne by były dwie dodatkowe planety. Około 7% ludności żyje w podobny sposób.'},
  { boundary: 600, text: 'Twój ślad przekracza średnią europejską. Gdyby cała ludzkość prowadziła taki styl życia, potrzebne by były jeszcze trzy dodatkowe planety. Około 3% ludności żyje w podobny sposób.'},
  { boundary: 800, text: 'Twój ślad zbliżył się do tego, jaki pozostawia przeciętny Amerykanin. By sprostać takiej konsumpcji, potrzeba jeszcze czterech planet. Około 5% ludzi zostawia tak duże ślady.'},
]