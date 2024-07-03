import React from "react";
import "./app.css";
import { TiwitterFollowCard } from "./TwFollowCard";

export function App() {
  return (
    <React.Fragment>
      <section className='cntFather'>
        <h1 className="titleH1">Programadores Destacados</h1>

        <TiwitterFollowCard userName='JotaJotaMz' following>
          John James Mosquera Rozo
        </TiwitterFollowCard>

        <TiwitterFollowCard userName='midudev' following>
          Miguel Angel Duran
        </TiwitterFollowCard>

        <TiwitterFollowCard userName='pheralb' following>
          Pablo Hernandez
        </TiwitterFollowCard>

      </section>
    </React.Fragment>
  );
}



