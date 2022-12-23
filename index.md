---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Homepage
heading: Road to being a star !
subheading: ""
banner: "/assets/images/banners/hwbanner.jpg"
---

# New in the Hollywood industry? Here's how to make it to the top!

You just got your first background character role, and you’re wondering how you should play your move to become 
Hollywood’s most famous actor or actress? Then you stumbled on the right website: in the following sections, we’ll 
show you how to organize your career, who to play with, what kind of film to star in and other tricks to boost your 
popularity to the top!


## Fame definition

When can we say that you are a Hollywood star? The philosophical answer to this question is out of the scope 
of this analysis. However, we decided to use a numerical value downloadable from 
[The Numbers](https://www.the-numbers.com/box-office-star-records/domestic/yearly-acting/). Their ranking is based on 
the Box-Office revenue (BOR) of the films each actor played in during the past three years.

This metric follows the idea that when an actor has played in a movie that generated a large BOR, the movie has a lot 
of visibility which increases the fame of the cast. 

We group movies by lustrum (1 lustrum = 5 years) to ease comparisons and for better visualisation purposes. We define
'becoming famous' as the first lustrum in which you appear in _The Numbers_, after which you are considered famous for 
the rest of your life. We also added a weight decaying over time, to represent that a recent high BOR movie will have a
greater impact on your fame than an old movie.

We compare our metric with Google Trends to check whether it is suitable, below is a graph comparing a few 
actors·resses.

<img src="assets/images/img/score.svg" alt="comparison with google trends"/>
<img src="assets/images/img/trends.svg" alt="comparison with google trends"/>

# What now?

Now we have a basis on the metric for fame, we will be able to give you tips and tricks to climb to the top of Hollywood
fame. But how? We will first have a look at the attributes of movies that have a revelation, as well as attributes of 
actors·resses when they are revealed. Then we will look at which actors·resses boosted others to give you advice about 
the cast. We will also show be an analogy with epidemies and how graphs evolve. Then we will give you hints on what to 
do once you become famous, and how to stay famous. Finally, we will predict who you should play with based on your 
attributes, to maximise your chances to become famous right now.


# What kind of films will make you famous?

Doing a logistic regression on all movies, here are the attributes that contributed the most (and the least) towards 
revealing at least an actor·ress. We can see that ATTRIBUTE_1 has a high positive impact, meaning the more ATTRIBUTE_1 a movie has, the more likely it is to create a revelation. On the contrary, ATTRIBUTE_99 has a high negative impact, meaning you should avoid a movie that has a high ATTRIBUTE_99. ATTRIBUTE_50 however has close to no effect, no particular advice about this attribute.
With this, we can already come up with a few tips on what to prioritize and what to avoid. Go for ATTRIBUTE_1, ATTRIBUTE_2, ATTRIBUTE_3 movies, they will maximise your chances to become famous, and avoid ATTRIBUTE_99, ATTRIBUTE_98, ATTRIBUTE_97, they will negatively impact your likelihood to become famous.

<img src="assets/images/logistic_regression_comparison.svg" alt="ladder graph revelation features"/>

super graph-escalier qui arrive :)) Avec une petite analyse rapide de l'histoire hein :))
On parle aussi ici du fait qu'il faut jouer dans des films de comédie non ?


# Who are the career boosters?

Let’s start with its definition. A career booster is an actor·ress that is already famous during a given lustrum and has
co-acted with an actor·ress that has been revealed during that lustrum. The graph presents the career boosters for a
given lustrum and for a given genre with the y-axis being the (degree centrality  / betweeness centrality).
In our model, this centrality represents the /[explain the right centrality/].
//TODO: Describing stuff, what is shown on the graph, etc...

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

# Fame seen as an epidemy
We could see that acting with famous people will help you become famous. This simple fact reminds us another kind of network phenomenon, contagion. How close is it from a illness contagion, aka an epidemy?
//TODO: mettre le GIF que James est en train de faire <3
//TODO: maybe ajouter un GIF d'un modèle SIR pour la comparaison ?
Jsp si c'est faisable en vrai, faut vrm qu'on se penche là dessus. need stuff to generate NX graph, I'll make it 
interactive later.

# How to stay on top ?
An interesting thing to see is how do some attributes of your next movie change with regard to the movie that made you famous. Here is a "ladder" graph, just like our regression from before. This changed, this changed, this stayed the same. //TODO: ajouter les trucs


## 15 years later, what do you do?
//TODO: Pas full sûr de cette section, on peut la tej en vrai

# Now it's your turn
Ok, now tell us who you are, and we tell you how likely you would have been famous shooting with some people in 2013.

<div class="mb2" id="personal_selector">
    <div class="row">
        <div class="column left"> <label for="age">Age: </label> </div>
        <div class="column right"><input type="number" id="age" min="0" max="115" value="25"/> </div>
    </div> 
    <div class="row">
        <div class="column left"><label for="total_actors">Casting size excluding you:</label></div>
        <div class="column right"><input type="number" id="total_actors" min="1" max="20" value="5"/></div>
    </div>
    <div class="row">
        <div class="column left"> Sex: </div>
        <div class="column right">         
            <div>
              <input type="radio" id="gender" name="drone" value="1" checked />
              <label for="gender">Woman</label>
            </div>
            <div>
              <input type="radio" id="is_male" name="drone" value="0" />
              <label for="is_male">Man</label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor1">Famous actor 1</label>
        </div>
        <div class="column right"> 
            <select id="actor1"> </select>    
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor2">Famous actor 2</label>
        </div>
        <div class="column right">
            <select id="actor2"></select>  
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor3">Famous actor 3</label>
        </div>
        <div class="column right">
            <select id="actor3"></select>  
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor4">Famous actor 4</label>
        </div>
        <div class="column right">
            <select id="actor4"></select>  
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor5">Famous actor 5</label>
        </div>
        <div class="column right">
            <select id="actor5"></select>  
        </div>
    </div>
    <div class="center-children">
        <button id="button_predict" onclick="predict_score()" class="nice_button">Make me famous !</button><br/>
    </div>
    <p id="predicted_chances"></p>
</div>


# Results
Here are the main results we were able to make in our analysis:

# Conclusion
Throughout this project, we did this and that.

<script src="assets/js/lin_reg.js"></script>
<script src="assets/js/actor_list.js"></script>
<script src="assets/js/index.js"></script>
<link rel="stylesheet" href="assets/css/custom.css"/>
