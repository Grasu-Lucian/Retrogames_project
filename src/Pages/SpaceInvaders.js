import React from "react";
import classes from "./Home.module.css";
export default function SpaceInvaders() {
  return (
    <div className={classes.background}>
      <div className={`${classes.title} ${classes.adjust}`}>
        <div className={`${classes.typed_out} `}>Space Invaders</div>
      </div>
      <div className={`${classes.container}`}>
        <p>
          Space Invaders is a 1978 shoot 'em up arcade game developed by
          Tomohiro Nishikado. It was manufactured and sold by Taito in Japan,
          and licensed to the Midway division of Bally for overseas
          distribution. Space Invaders was the first fixed shooter and set the
          template for the shoot 'em up genre. The goal is to defeat wave after
          wave of descending aliens with a horizontally moving laser to earn as
          many points as possible.
        </p>
        <p>
          Designer Nishikado drew inspiration from Breakout (1976), Gun Fight
          (1975), target shooting games, and science fiction narratives such as
          The War of the Worlds, Space Battleship Yamato and Star Wars. To
          complete development of the game, he had to design custom hardware and
          development tools. Upon release, Space Invaders was an immediate
          commercial success; by 1982, it had grossed $3.8 billion (equivalent
          to over $13 billion adjusted for inflation as of 2016), with a net
          profit of $450 million (equivalent to $2 billion adjusted for
          inflation). This made it the best-selling video game and
          highest-grossing entertainment product at the time, and the
          highest-grossing video game of all time.
        </p>
        <p>
          Space Invaders is considered one of the most influential video games
          of all time. It helped expand the video game industry from a novelty
          to a global industry, and ushered in the golden age of arcade video
          games. It was the inspiration for numerous video games and game
          designers across different genres, and has been ported and re-released
          in various forms. The 1980 Atari VCS version quadrupled sales of the
          VCS, thereby becoming the first killer app for video game consoles.
          More broadly, the pixelated enemy alien has become a pop culture icon,
          often representing video games as a whole.
        </p>

        <div className={classes.subtitle}>Gameplay</div>
        <p>
          Space Invaders is a fixed shooter in which the player moves a laser
          cannon horizontally across the bottom of the screen and fires at
          aliens overhead. The aliens begin as five rows of eleven that move
          left and right as a group, shifting downward each time they reach a
          screen edge. The goal is to eliminate all of the aliens by shooting
          them. While the player has three lives, the game ends immediately if
          the invaders reach the bottom of the screen. The
          aliens attempt to destroy the player's cannon by firing projectiles.
          The laser cannon is partially protected by stationary defense bunkers
          which are gradually destroyed from the top by the aliens and, if the
          player fires when beneath one, the bottom. As aliens are defeated,
          their movement and the game's music both speed up. Defeating all the
          aliens brings another wave which starts lower, a loop which can
          continue endlessly. A special "mystery ship" will
          occasionally move across the top of the screen and award bonus points
          if destroyed.
        </p>
      </div>
    </div>
  );
}
