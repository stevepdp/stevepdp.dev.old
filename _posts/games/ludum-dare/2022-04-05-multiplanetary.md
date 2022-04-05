---
title: Multiplanetary
permalink: /games/ludum-dare/multiplanetary.html

og_title: "Multiplanetary for Ludum Dare 50"
og_image: "https://stevepdp.dev/assets/img/games/multiplanetary/opengraph.png"

layout: single-game
type: single-game
category: games
tag: ludum-dare
---

Made in 72 hours for <a href="https://ldjam.com/events/ludum-dare/50" target="_blank">Ludum Dare 50</a> with the theme "delay the inevitable".

<ul class="downloads">
    <li><a href="https://stevepdp.itch.io/multiplanetary" rel="noopener" target="_blank"><img src="/assets/img/brands/itch-io-colour.svg" height="48" width="156"></a></li>
</ul>

### Retrospective

### The Idea

Unlike other jams I've participated in, LD's public voting rounds meant that I had an idea for what the theme might be ahead of time. I was able to generate a bunch of ideas on many sheets of A4 the night prior. The first of those ideas is what I took forward into the jam.

With theme being "delay the inevitable", I settled on the idea that humanity will inevitably become a multiplanetary species and that you would be in control of an alien device trying to prevent it. Shuttles would spawn at random intervals from Earth and head in the direction of neighbouring planets. The player would be facing Earth and only about to move within a certain range of it's orbit.


#### What Went Well
I had a few things to learn in order to make my idea work. These aspects at least went well.

* Spawning prefabs at particular rotations
* Circular motion around a fixed point with boundaries
* 9-slice / 9-patch scalable sprites for the menu buttons - my buttons no longer jank at different scales!
* Preventing accidental triggering of menu items when switching scenes.
* I made an attempt at hand drawing some art with a tablet, but pulled it at the last minute as I felt I wouldn't be able to change everything within the remaining hours. I was only able to roll back because I had everything in Git and mirrored to GitHub. Version control FTW!


#### What Went Wrong

* I wasted the better part of two days on project plumbing and menu code. You don't need either in a game jam.
* I don't like to blame the tools...but **** did my tools crash a lot on me this weekend. Ordinarily this wouldn't bother me, but when you're strapped for time then it really adds to the pressure.
* I should've playtested. It became clear after submission that the game is much too difficult to be fun and it's suffering in the feedback as a result.
* The game was developed primarily using an Xbox controller...but you can't assume that the folks playing will be using such hardware too. The keyboard experience doesn't quite match the controller experience and as such the game is much more difficult than it ought to be.
* I completely forget that difficulty should scale. My game appears to be backward in that sense in that it's actually most difficult upfront then gets slightly easier as time progresses, assuming RNG in is the player's favour. Playtesting the game even a couple of hours before submitted would've caught this.


#### What I Learned

It's been nine months since I last attempted a game jam so I've definitely had to remind myself of the standard practices.

I happened upon [the 4:44 rule](https://www.youtube.com/watch?v=lPyYZjCQ0Is) whilst testing other's submissions, and I think I'll apply it when the next game jam opportunity rolls around.