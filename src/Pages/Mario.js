import React from "react";
import classes from "./Home.module.css";
export default function Mario() {
  return (
    <div className={classes.background}>
      <div className={`${classes.title} ${classes.adjust2}`}>
        <div className={`${classes.typed_out} `}>Mario</div>
      </div>
      <div className={`${classes.container}`}>
        <p>
          Super Mario[a] is a platform game series created by Nintendo based on
          and starring the fictional plumber Mario. Alternatively called the
          Super Mario Bros.[b] series or simply the Mario[c] series, it is the
          central series of the greater Mario franchise. At least one Super
          Mario game has been released for every major Nintendo video game
          console. There are over twenty games in the series.
        </p>
        <p>
          The Super Mario games are typically set in the fictional Mushroom
          Kingdom with Mario as the player character. He is often joined by his
          brother, Luigi, and occasionally by other members of the Mario cast.
          As a platform game, the player runs and jumps across platforms and
          atop enemies in themed levels. The games have simple plots, typically
          with Mario rescuing the kidnapped Princess Peach from the primary
          antagonist, Bowser. The first game in the series, Super Mario Bros.,
          released for the Nintendo Entertainment System (NES) in 1985,
          established the series' core gameplay concepts and elements. These
          include a multitude of power-ups and items that give Mario special
          powers such as fireball-throwing and size-changing.[1]
        </p>
        <p>
          The Super Mario series is part of the greater Mario franchise, which
          includes other video game genres and media such as film, television,
          printed media, and merchandise. More than 380 million copies of Super
          Mario games have been sold worldwide, making it the fourth-bestselling
          video game series, behind the larger Mario franchise, the puzzle
          series Tetris, and first-person shooter series Call of Duty.[2]
        </p>

        <div className={classes.subtitle}>History</div>
        <p>
          Super Mario Bros., the first side-scrolling 2D platform game to
          feature Mario, was derived by collaboration of Nintendo's Shigeru
          Miyamoto and Takashi Tezuka as a successor to the 1983 arcade game
          Mario Bros., which starred two characters: Mario, the titular
          character that first appeared in Donkey Kong as the original player
          character and its sequel where he was a final boss, and Luigi, who
          first appeared in Mario Bros.[3] The etymology of adding "Super" to
          the title came after deciding to integrate the Super Mushroom into the
          game.[4] Super Mario Bros. was released for the Nintendo Entertainment
          System (NES). It established many core Mario gameplay concepts. The
          brothers Mario and Luigi must rescue Princess Toadstool (later called
          Princess Peach) from Bowser/King Koopa in the Mushroom Kingdom. The
          game consists of eight worlds of four levels each, totaling 32 levels
          altogether. Though the worlds differ in themes, the fourth level is
          always a fortress or castle that ends with a fight against Bowser (or
          one of his minions disguised as him).[5] This is one of the
          best-selling video games of all time.[6]
        </p>
        <p>
          Super Mario Bros. 2 in Japan is the first sequel to the original Super
          Mario Bros. It uses the Super Mario Bros. engine, with additions such
          as weather, character movements, and more complex levels, altogether
          yielding a much higher difficulty. The game follows the same style of
          level progression as Super Mario Bros., with eight initial worlds of
          four levels each. At that time, this sequel was not released outside
          Japan since Nintendo of America did not want the Mario series to be
          known to players outside of Japan for frustrating difficulty. It
          remained inaccessible to a steadily broadening market of American
          video game players, becoming stylistically outdated by the time the
          Japanese Super Mario Bros. 2 could be eventually delivered to
          America.[7] The game later debuted outside Japan in 1993 as "Super
          Mario Bros.: The Lost Levels" in the compilation game Super Mario
          All-Stars for the Super Nintendo Entertainment System (SNES).
        </p>
        <p>
          In Super Mario Bros. 2 (Super Mario USA in Japan), Mario and his
          companions are out to stop the evil frog Wart in the Subcon dreamland.
          Based on a discarded prototype,[8] the game was instead originally
          released as Yume Kōjō: Doki Doki Panic in Japan, and was ultimately
          converted into a Mario game for the rest of the world as Super Mario
          Bros. 2, before being released in Japan as Super Mario USA as part of
          Super Mario All-Stars. One of the game's most defining aspects is the
          four player characters: not only Mario, but Luigi, Princess Peach and
          Toad are available for single-player action, each with defined
          character movements: Luigi jumps higher, the Princess glides through
          the sky for a short amount of time, etc. Characters here also can
          pluck vegetables from the ground to throw at enemies. This is also the
          first Super Mario game to use a life meter, which allows Mario, Luigi,
          Peach and Toad to be hit up to four times before dying. [7]
        </p>
        <p>
          Super Mario Bros. 3 is divided into eight themed worlds, each with
          6–10 levels and several bonus stages displayed as locations on a
          mapped overworld. These locations are not necessarily in a linear
          order, and the player is occasionally permitted to skip levels or play
          the game out of order. Completed levels cannot be replayed. The
          penultimate boss stage in each world is a side-scrolling level atop an
          airship ("Doom Ship") with a fight against one of Bowser's seven
          Koopalings. The game introduced a diverse array of new power-ups,
          including flight as Raccoon Mario or the level-long P-Wing allowing
          permanent flight through a whole level. Bowser is again the final
          boss.
        </p>
      </div>
    </div>
  );
}
