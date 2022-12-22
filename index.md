---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: ADA project website
heading: Road to being a star !
subheading: ""
banner: "/assets/images/banners/hwbanner.jpg"
---

# DISCLAIMER: SITE UNDER CONSTRUCTION, DON'T TAKE IT TOO SERIOUSLY :)

# New in the Hollywood industry? Here's how to make it to the top!

You just got your first background character role, and you’re wondering how you should play your move to become 
Hollywood’s most famous actor or actress? Then you stumbled on the right website: in the following sections, we’ll 
show you how to organize your career, who to play with, what kind of film to star in and other tricks to boost your 
popularity to the top!

# Definitions

# Fame definition

Throughout these tips supported by analysis, we had to make some choices, one of them (and not the least) being the definition of fame. This will be the main metric throughout this analysis. When can we say that you are a Hollywood star? While the philosophical answer to this question is out of the scope of this analysis, we find a numerical way to describe it. The website [The Numbers](https://www.the-numbers.com/box-office-star-records/domestic/yearly-acting/) provides a yearly ranking of a few hundred actors and actresses. In “The Numbers”, the movies are ranked following the US Box Office and actors starring in the highest BO movies get a higher score.

This metric follows the idea that when an actor has played in a movie that generated a large BO, the movie has a lot of visibility therefore the fame of the cast is increased. 

# Direction taken "technical stuff"

In this section, we will explain the different "strategic" choices we have made both on the dataset and on the way our metric is used.
The first choice is to take only films from the US because they represent a little more than 40% of the movies in the database which is substantial, and also our metric is based on the US box office. A second choice was to group movies by lustrums (1 lustrum = 5 years). This choice will make sense with the following explanation.
As a reminder, our metric assigned a score to actors who appeared in a film that made it into the top 100 US BO. Every actor has a new feature assigned to him·her and three states are possible: “unknown”, “is revealed” and “famous”. When you are in a movie and you are not yet famous you keep the “unknown” status. The status becomes "is revealed" the first year the actor·ress has a score. The status "is revealed" is kept for the whole lustrum in which the revelation took place. The status "famous" is reached automatically at the next lustrum.

After some analysis, this score is missing something, it’s missing the history of the actor·ress. To take into account the entire career of an actor·ress his·her score has been adjusted with the length of his·her career and the number of movie he·she starred in, with a decay over time.
This new way to find the score has been compared to the Google trends tool. The results seen in the figures below show the resemblance between our score functions curves and google trends curves for a few different actors.

HERE IS A GRAPH THAT SHOWS OUR SCORE COMPARED TO GOOGLE TRENDS, SO IT'S KINDA OF A GOOD SCORE.
@James si tu as un export propre du truc c'est nice. Yep il est dans images/4_actors_...

We also used a PCA to decrease the number of genres by 95%, for the analysis to be more convenient. 

# What to look for?


# What kind of films will make you famous?


super graph-escalier qui arrive :)) Avec une petite analyse rapide de l'histoire hein :))
On parle aussi ici du fait qu'il faut jouer dans des films de comédie non ?

## Who are the career boosters?

Describing stuff, what is shown on the graph, etc...

<div id="img-container" class="img-container">
    <div class="mb2">
        <select id="s_year" onchange="update_current_hist()"></select>
        <select id="s_genre" onchange="update_current_hist()"></select>
    </div>
    <iframe id="hist_booster">No available data</iframe>
    <p id="hist_error">No data for given selection</p>
</div>

On peut dire que most ces acteurs c'est pas iron man mais plustot que'est-ce qu'on a fait au bon dieux / 
le père noel est une ordure. Ou the mask.

## Fame seen as an epidemy
Jsp si c'est faisable en vrai, faut vrm qu'on se penche là dessus. need stuff to generate NX graph, I'll make it 
interactive later.

## How to stay on top ?
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


<script src="assets/js/index.js"></script>
<link rel="stylesheet" href="assets/css/custom.css"/>
