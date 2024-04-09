import React from 'react';
import { ArcDiagram } from "./ArcDiagram"

export const data = {
    nodes: [
        { id: "Myriel", group: 'team1', year: 2000 },
        { id: "Anne", group: 'team1', year: 2002 },
        { id: "Gabriel", group: 'team1', year: 2010 },
        { id: "Mel", group: 'team1', year: 2020 },
        { id: "Yan", group: 'team2', year: 2011 },
        { id: "Tom", group: 'team2', year: 2004 },
        { id: "Cyril", group: 'team2', year: 2005 },
        { id: "Tuck", group: 'team3', year: 2006 },
        { id: "Antoine", group: 'team3', year: 2003 },
        { id: "Rob", group: 'team3', year: 2001 }
    ],
    links: [
        { source: "Anne", target: "Myriel", value: 1 },
        { source: "Napoleon", target: "Myriel", value: 1 },
        { source: "Gabriel", target: "Myriel", value: 1 },
        { source: "Mel", target: "Myriel", value: 1 },
        { source: "Yan", target: "Tom", value: 1 },
        { source: "Tom", target: "Cyril", value: 1 },
        { source: "Tuck", target: "Myriel", value: 1 },
        { source: "Tuck", target: "Mel", value: 1 },
        { source: "Tuck", target: "Myriel", value: 1 },
        { source: "Mel", target: "Myriel", value: 1 },
        { source: "Rob", target: "Antoine", value: 1 }
    ]
}

export const SpiderverseData = {
  nodes: [
    { id: "Spider-Man: Across the Spiderverse", group: 'movie', year: 2023 },
    { id: "Spider-Man: Into the Spiderverse", group: 'movie', year: 2018 },
    { id: "Spider-Verse Series", group: 'comic', year: 2014 },
    { id: "The Amazing Spider-Man Series", group: 'comic', year: 1963 },
    { id: "Ultimate Spider-Man Series", group: 'comic', year: 2000 },
    { id: "Ultimate Comics: Spider-Man Series", group: 'comic', year: 2011 },
    { id: "Spider-Man", group: 'movie', year: 1977 },
    { id: "Spider-Man Strikes Back", group: 'movie', year: 1978 },
    { id: "Spider-Man: The Dragon's Challenge", group: 'movie', year: 1981 },
    { id: "Spider-Man - Japanese Film", group: 'movie', year: 1978 },
    { id: "Spider-Man 3", group: 'movie', year: 2007 },
    { id: "Spider-Man 2", group: 'movie', year: 2004 },
    { id: "Spider-Man", group: 'movie', year: 2002 },
    { id: "The Amazing Spider-Man", group: 'movie', year: 2012 },
    { id: "The Amazing Spider-Man 2", group: 'movie', year: 2014 },
    { id: "Spider-Man: No Way Home", group: 'movie', year: 2021 },
    { id: "Spider-Man: Far From Home", group: 'movie', year: 2019 },
    { id: "Spider-Man: Homecoming", group: 'movie', year: 2017 }
]
,
  links: [
    { source: "Spider-Man: Across the Spiderverse", target: "Spider-Man: Into the Spiderverse", value: 2 },
    { source: "Spider-Man: Into the Spiderverse", target: "Spiderverse Film Series", value: 2 },
    { source: "Spiderverse Film Series", target: "Spider-Verse Comic Series", value: 2 },
    { source: "Spider-Verse Comic Series", target: "The Amazing Spider-Man Series", value: 2 },
    { source: "Spiderverse Film Series", target: "Ultimate Comics: Spider-Man Series", value: 2 },
    { source: "Ultimate Comics: Spider-Man Series", target: "Ultimate Spider-Man Series", value: 2 },
    { source: "Ultimate Spider-Man Series", target: "The Amazing Spider-Man Series", value: 2 },
    { source: "Spider-Man 1977", target: "The Amazing Spider-Man TV Series Pilot", value: 2 },
    { source: "Spider-Man Strikes Back", target: "The Amazing Spider-Man TV Series 'Deadly Dust' Episodes", value: 2 },
    { source: "Spider-Man: The Dragon's Challenge", target: "The Amazing Spider-Man TV Series 'The Chinese Web' Series Finale", value: 2 },
    { source: "Spider-Man - Japanese Film", target: "Japanese Spider-Man TV Series", value: 2 },
    { source: "Spider-Man 3", target: "Spider-Man 2", value: 2 },
    { source: "Spider-Man 2", target: "Spider-Man", value: 2 },
    { source: "Spider-Man", target: "Sam Raimi Spider Man Trilogy", value: 2 },
    { source: "The Amazing Spider-Man", target: "Marc Webb Spider Man Duology", value: 2 },
    { source: "The Amazing Spider-Man 2", target: "The Amazing Spider-Man", value: 2 },
    { source: "Spider-Man: No Way Home", target: "Spider-Man: Far From Home", value: 2 },
    { source: "Spider-Man: Far From Home", target: "Spider-Man: Homecoming", value: 2 },
    { source: "Spider-Man: Homecoming", target: "MCU Spider-Man Film Series", value: 2 },
    { source: "MCU Spider-Man Film Series", target: "Marvel Cinematic Universe", value: 2 },
    { source: "Spider-Man: No Way Home", target: "Sam Raimi Spider Man Trilogy", value: 2 },
    { source: "Spider-Man: No Way Home", target: "Marc Webb Spider Man Duology", value: 2 }
]

}

export const tmntData = {
  nodes: [
    { id: "Mirage Comic", group: "comic", year: 1984 },
    { id: "Tales of the Teenage Mutant Ninja Turtles Comic", group: "comic", year: 1987 },
    { id: "Image Comic", group: "comic", year: 1996 },
    { id: "Archie Comic", group: "comic", year: 1988 },
    { id: "Dreamwave Comic", group: "comic", year: 2006 },
    { id: "IDW Comic", group: "comic", year: 2011 },
    { id: "Comic Strip", group: "comic", year: 1990 },
    { id: "Teenage Mutant Ninja Turtles TV", group: "tv", year: 1987 },
    { id: "Ninja Turtles: The Next Mutation TV", group: "tv", year: 1997 },
    { id: "Teenage Mutant Ninja Turtles TV", group: "tv", year: 2003 },
    { id: "Teenage Mutant Ninja Turtles TV", group: "tv", year: 2012 },
    { id: "Rise of the Teenage Mutant Ninja Turtles TV", group: "tv", year: 2018 },
    { id: "Tales of the Teenage Mutant Ninja Turtles TV", group: "tv", year: 2024 },
    { id: "Teenage Mutant Ninja Turtles", group: "movie", year: 1990 },
    { id: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze", group: "movie", year: 1991 },
    { id: "Teenage Mutant Ninja Turtles III", group: "movie", year: 1993 },
    { id: "TMNT", group: "movie", year: 2007 },
    { id: "Teenage Mutant Ninja Turtles", group: "movie", year: 2014 },
    { id: "Teenage Mutant Ninja Turtles: Out of the Shadows", group: "movie", year: 2016 },
    { id: "Turtles Forever", group: "movie", year: 2009 },
    { id: "Rise of the Teenage Mutant Ninja Turtles: The Movie", group: "movie", year: 2022 },
    { id: "Teenage Mutant Ninja Turtles Mutant Mayhem", group: "movie", year: 2023 }
  ],
  links: [
    { source: "Tales of the Teenage Mutant Ninja Turtles Comic", target: "Mirage Comic", value: 1 },
    { source: "Image Comic", target: "Mirage Comic", value: 1 },
    { source: "Archie Comic", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Dreamwave Comic", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "IDW Comic", target: "Image Comic", value: 1 },
    { source: "Comic Strip", target: "Mirage Comic", value: 1 },
    { source: "Teenage Mutant Ninja Turtles TV", target: "Mirage Comic", value: 1 },
    { source: "Ninja Turtles: The Next Mutation TV", target: "Teenage Mutant Ninja Turtles", value: 1 },
    { source: "Ninja Turtles: The Next Mutation TV", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Teenage Mutant Ninja Turtles TV", target: "Mirage Comic", value: 1 },
    { source: "Teenage Mutant Ninja Turtles TV", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Rise of the Teenage Mutant Ninja Turtles TV", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Tales of the Teenage Mutant Ninja Turtles TV", target: "Teenage Mutant Ninja Turtles Mutant Mayhem", value: 1 },
    { source: "Teenage Mutant Ninja Turtles", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Teenage Mutant Ninja Turtles", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze", target: "Teenage Mutant Ninja Turtles", value: 1 },
    { source: "Teenage Mutant Ninja Turtles III", target: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze", value: 1 },
    { source: "TMNT", target: "Teenage Mutant Ninja Turtles", value: 1 },
    { source: "Teenage Mutant Ninja Turtles", target: "Teenage Mutant Ninja Turtles", value: 1 },
    { source: "Teenage Mutant Ninja Turtles: Out of the Shadows", target: "Teenage Mutant Ninja Turtles", value: 1 },
    { source: "Turtles Forever", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Turtles Forever", target: "Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Rise of the Teenage Mutant Ninja Turtles: The Movie", target: "Rise of the Teenage Mutant Ninja Turtles TV", value: 1 },
    { source: "Teenage Mutant Ninja Turtles Mutant Mayhem", target: "Teenage Mutant Ninja Turtles", value: 1 }
]

}


function App(props) {
  return (
    <div className='App'>
      <h1>Spiderverse Test Diagram</h1>
      <ArcDiagram width={700} height={400} data={SpiderverseData} />
      <br />
      <h1>TMNT Test Diagram</h1>
      <ArcDiagram width={700} height={400} data={tmntData} />
    </div>
  );
}


export default App;