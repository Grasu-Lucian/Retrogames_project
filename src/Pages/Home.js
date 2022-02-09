import React from "react";
import classes from "./Home.module.css";
import { Fragment } from "react";
export default function Home() {
  return (
    <div className={classes.background}>
      <div className={`${classes.title}`}>
        <div className={classes.typed_out}>Retrogaming</div>
      </div>
      <div className={`${classes.container}`}>
        <p>
          Retrogaming, also known as classic gaming and old school gaming, is
          the playing and/or collection of older (or older versions of) personal
          computers, consoles, and/or video games (generally arcade), in
          contemporary times. Usually, retrogaming is based upon systems that
          are obsolete or discontinued. It is typically put into practice for
          the purpose of nostalgia, preservation or the need to achieve
          authenticity.
        </p>
        <p>
          Retrogaming has three main activities; vintage retrogaming,
          retrogaming emulation, and ported retrogaming. Vintage retrogaming
          includes games that are played on the original hardware. Emulation
          involves newer systems simulating old gaming systems, while ported
          retrogaming allows games to be played on modern hardware via ports or
          compilations. Additionally, the term could apply to a newer game, but
          with features similar to those of older games, such as a "retro RPG"
          which features turn-based combat and an isometric camera perspective.
        </p>
        <p>
          Participants in the hobby are sometimes known as retrogamers in the
          United Kingdom, while the terms "classic gamers" or "old school
          gamers" are more prevalent in the United States. Similarly, the games
          are known as retrogames, classic games, or old school games.
        </p>
        <p>
          Retrogaming has existed since the early years of the video game
          industry, but was popularized with the popularity of the Internet and
          emulation technology. It is argued that the main reasons players are
          drawn to retrogames are nostalgia for different eras, the idea that
          older games are more innovative and original, and the simplicity of
          the games that requires less hours of gameplay.
        </p>
        <p>
          Retrogaming and retrocomputing have been described as preservation
          activity and as aspects of the remix culture.
        </p>
      <div className={classes.subtitle}>Retrogaming methods</div>
        <p>
          In the wake of increasing nostalgia and the success of
          retro-compilations in the fifth, sixth, and seventh generations of
          consoles, retrogaming has become a motif in modern games, as well.
          Modern retrogames impose limitations on color palette, resolution, and
          memory well below the actual limits of the hardware in order to mimic
          the look of older hardware. These may be based on a general concept of
          retro, as with Cave Story, or an attempt to imitate a specific piece
          of hardware, as with La Mulana and its MSX color palette.
        </p>
        <p>
          This concept, known as Deliberate Retro and NosCon, began to
          gain traction thanks in part to the independent gaming scene,
          where the short development time was attractive and commercial
          viability was not a concern. Major publishers have embraced modern
          retrogaming with releases such as Mega Man 9, an attempt to mimic NES
          hardware; Retro Game Challenge, a compilation of new games on faux-NES
          hardware; and Sega's Fantasy Zone II remake, which uses emulated
          System 16 hardware running on PlayStation 2 to create a 16-bit
          reimagining of the 8-bit original.
        </p>
      </div>
    </div>
  );
}
