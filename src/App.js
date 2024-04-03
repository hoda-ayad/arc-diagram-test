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

export const movieData = {
  nodes: [
      { id: "Spider-Man: Across the Spiderverse", group: 'movie', year: 2023 },
      { id: "Spider-Man: Into the Spiderverse", group: 'movie', year: 2018 },
      { id: "Spider-Verse Series", group: 'comic', year: 2014 },
      { id: "The Amazing Spider-Man Series", group: 'comic', year: 1963 },
      { id: "Ultimate Spider-Man Series", group: 'comic', year: 2000 },
      { id: "Ultimate Comics: Spider-Man Series", group: 'comic', year: 2011 }
  ],
  links: [
      { source: "Spider-Man: Into the Spiderverse", target: "Spider-Man: Across the Spiderverse", value: 2 },
      { source: "Spider-Verse Series", target: "Spider-Man: Into the Spiderverse", value: 1 },
      { source: "The Amazing Spider-Man Series", target: "Spider-Verse Series", value: 1 },
      { source: "Ultimate Comics: Spider-Man Series", target: "Spider-Man: Into the Spiderverse", value: 1 },
      { source: "Ultimate Spider-Man Series", target: "Ultimate Comics: Spider-Man Series", value: 2 },
      { source: "The Amazing Spider-Man Series", target: "Ultimate Spider-Man Series", value: 1 }
  ]
}


function App(props) {
  return (
    <div className='App'>
      <h1>Spiderverse Test Diagram</h1>
      <ArcDiagram width={700} height={400} data={movieData} />
    </div>
  );
}


export default App;