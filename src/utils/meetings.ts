type upcomingMeetingsType = {
  number: number;
  title: string;
  description: string;
  date: Date;
}

export const upcomingMeetings: upcomingMeetingsType[] = [
  {
    number: 71,
    title: "„Obrona przyrody to akt patriotyczny” – Katarzyna Jagiełło",
    description: "Katarzyna Jagiełło – polska dziennikarka, reżyserka i producentka filmów dokumentalnych.",
    date: new Date("2021-09-07"),
  },
  {
    number: 72,
    title: "Katarzyna Błażejewska Stuhr, dr Ryszard Kulik i Barbara Ewa Wojtaszek",
    description: "Katarzyna Błażejewska Stuhr – dietetyk kliniczny oraz dr Ryszard Kulik i Barbara Ewa Wojtaszek – Klimatyczna Kuchnia",
    date: new Date("2021-10-11"),
  },
  {
    number: 73,
    title: "prof. Tadeusz Sławek",
    description: "prof. Tadeusz Sławek – polski poeta, tłumacz, eseista, literaturoznawca, profesor nauk humanistycznych, samorządowiec.",
    date: new Date("2021-10-26"),
  },
  {
    number: 74,
    title: "Wojciech Eichelberger",
    description: "Wojciech Eichelberger – polski psycholog, psychoterapeuta, pisarz.",
    date: new Date("2021-11-30"),
  },
];
