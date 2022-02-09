import React from "react";
import classes from './Home.module.css'
export default function Pacman() {
  return (
    <div className={classes.background}>
      <div className={`${classes.title} ${classes.adjust2}`}>
        <div className={`${classes.typed_out} `}>Pac-Man</div>
      </div>
      <div className={`${classes.container}`}>
        <p>
          Pac-Man is a 1980 maze action video game developed and released by
          Namco for arcades. The original Japanese title of Puck Man was changed
          to Pac-Man for international releases as a preventative measure
          against defacement of the arcade machines by changing the P to an
          F. In North America, the game was released by Midway Manufacturing
          as part of its licensing agreement with Namco America. The player
          controls Pac-Man, who must eat all the dots inside an enclosed maze
          while avoiding four colored ghosts. Eating large flashing dots called
          "Power Pellets" causes the ghosts to turn blue, allowing Pac-Man to
          eat them for bonus points.
        </p>
        <p>
          Game development began in early 1979, directed by Toru Iwatani with a
          nine-man team. Iwatani wanted to create a game that could appeal to
          women as well as men, because most video games of the time had themes
          of war or sports. Although the inspiration for the
          Pac-Man character was the image of a pizza with a slice removed,
          Iwatani has said he also rounded out the Japanese character for mouth,
          kuchi . The in-game characters were made to be cute and
          colorful to appeal to younger players. The original Japanese title of
          Puckman was derived from the titular character's hockey-puck shape,
          and is now the mascot and flagship icon of Bandai Namco Entertainment.
        </p>
        <p>
          Pac-Man was a widespread critical and commercial success, leading to
          several sequels, merchandise, and two television series, as well as a
          hit single by Buckner & Garcia. The franchise remains one of the
          highest-grossing and best-selling games, generating more than $14
          billion in revenue (as of 2016) and 43 million units in sales
          combined, and has an enduring commercial and cultural legacy, commonly
          listed as one of the greatest video games of all time.
        </p>

        <div className={classes.subtitle}>Gameplay</div>
        <p>
          Pac-Man is an action maze chase video game; the player controls the
          eponymous character through an enclosed maze. The objective of the
          game is to eat all of the dots placed in the maze while avoiding four
          colored ghosts — Blinky (red), Pinky (pink), Inky (cyan), and Clyde
          (orange) — that pursue him. When Pac-Man eats all of the dots, the
          player advances to the next level. If Pac-Man makes contact with a
          ghost, he will lose a life; the game ends when all lives are lost.
          Each of the four ghosts have their own unique, distinct artificial
          intelligence (A.I.), or "personalities"; Blinky gives direct chase to
          Pac-Man, Pinky and Inky try to position themselves in front of
          Pac-Man, usually by cornering him, and Clyde will switch between
          chasing Pac-Man and fleeing from him.
        </p>
        <p>
          Placed at the four corners of the maze are large flashing
          "energizers", or "power pellets". Eating these will cause the ghosts
          to turn blue with a dizzied expression and reverse direction. Pac-Man
          can eat blue ghosts for bonus points; when eaten, their eyes make
          their way back to the center box in the maze, where the ghosts
          "regenerate" and resume their normal activity. Eating multiple blue
          ghosts in succession increases their point value. After a certain
          amount of time, blue-colored ghosts will flash white before turning
          back into their normal, lethal form. Eating a certain number of dots
          in a level will cause a bonus item - usually in the form of a fruit –
          to appear underneath the center box, which can be eaten for bonus
          points.
        </p>
        <p>
          The game increases in difficulty as the player progresses; the ghosts
          become faster and the energizers' effect decreases in duration to the
          point where the ghosts will no longer turn blue and edible. To the
          sides of the maze are two "warp tunnels", which allow Pac-Man and the
          ghosts to travel to the opposite side of the screen. Ghosts become
          slower when entering and exiting these tunnels. Levels are indicated
          by the fruit icon at the bottom of the screen. In-between levels are
          short cutscenes featuring Pac-Man and Blinky in humorous, comical
          situations. The game becomes unplayable at the 256th level due to an
          integer overflow that affects the game's memory.
        </p>
      </div>
    </div>
  );
}
