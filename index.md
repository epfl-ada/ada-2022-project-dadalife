---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Homepage
heading: Road to being a star!
subheading: ""
banner: "/assets/images/banners/hwbanner.jpg"
---
<link rel="stylesheet" href="assets/css/custom.css"/>


# New in the Hollywood industry? Here's how to make it to the top!

You just got your first background character role, and you’re wondering how you should play your moves to become 
Hollywood’s most famous actor or actress? Then you stumbled on the right website: in the following sections, you’ll 
learn to organize your career, who to play with, what kind of film to star in and other tricks to boost your 
popularity to the top!

<div class="row">
    <div class="column left">
        <h1 style="text-align: left">Fame definition</h1>
        <p>When can somebody be considered a Hollywood star? The philosophical answer to this question is out of the scope 
        of this analysis. However, we decide to use a numerical value downloadable from 
        <a href="https://www.the-numbers.com/box-office-star-records/domestic/yearly-acting/">The Numbers</a>. Their ranking is based on 
        the Box-Office revenue (BOR) of the films each actor played in during the past three years.</p>
        <p>This metric follows the idea that when an actor has played in a movie that generated a large BOR, the movie has a lot
        of visibility which increases the fame of the cast.</p>
        <p>We group movies by lustrum (1 lustrum = 5 years) to ease comparisons and for better visualisation purposes. We define
        'becoming famous' as the first lustrum in which you appear in <i>The Numbers</i>, after which you are considered famous for
        the rest of your life. We also added a weight decaying over time, to represent that a recent high BOR movie will have a
        greater impact on your fame than an old movie.</p>
    </div>
    <div class="column right">
        <img class="mt3" src="assets/images/score.svg" alt="comparison with google trends"/>
        <img src="assets/images/trends.svg" alt="comparison with google trends"/>
    </div>
</div>


<br/>

# Roadmap

Now that we have a basis on the metric for fame, we are able to give you tips and tricks to reach the top of the Hollywood
food chain. But how? We will first have a look at the attributes of movies that have a revelation, as well as attributes of 
actors·resses when they are revealed. Then we will look at which actors·resses boosted others to give you advice about 
the cast. We will also show how important it is to stay strongly connected to other actors. Then we will give you hints on what to 
do once you become famous, namely how to stay famous. Finally, we will predict who you should play with based on your 
attributes, to maximise your chances to become famous.


# What kind of films will make you famous?

The first thing to say is that you should start with films that have the biggest audience. Comedy or action films are, 
as shown on the graph below, the 2 most appropriate genres, regardless of whether you're male or female.

<img src="assets/images/index.png" alt="Film genre revelation"/>

Now, let's perform a logistic regression to have a better idea of what co-acting attributes contribute most to 
revealing actors and actresses. The graph on the left shows the parameters that help actors become famous, and on the 
right we can see how these parameters evolved in the second film after an actor·ress' revelation. This way you know what
to focus on to become famous, but also what you should pay attention to when preparing your next movie.

### Becoming famous

<img src="assets/images/regression_single.png" alt="ladder graph revelation features"/>

There’s a lot to say and see on the previous graph. The second feature says a lot about our society; As there are more 
famous male actors in the revelation movies, you have more chances to be revealed by actors than by actresses. Even
worse, the median score of the male casting of the RM has a positive weight while the median 
score of the female casting of the RM has a negative weight!

The casting’s average score in RM has a relatively large positive weight, so you would be tempted to play with a lot of
famous actors. But be careful, the ratio of famous actors in the RM has a negative weight so a trade-off has to be made
regarding the number of famous actors to star with in order to be revealed. The average score of all actors that 
played within the past three years have a strong negative weight, which strengthens the point of being careful when 
choosing the famous actors you'd like to play with.

### Now that I am famous, how shall I choose my next performance?

<img src="assets/images/regression_comparaison.png" alt="ladder graph revelation features"/>

The number of famous male actors you should play with is even more important now to stay at the top.

We can note that the total number of famous actors the revealed actor has played with within the past three years has 
dropped dramatically. Famous actors may now out-shadow you, so be careful about that now that you’re at the top.

The weight of the number of famous male actors is now even higher than before while the one of female actors is 
constant. However, the importance of the median score of the male casting has decreased, likewise for the female casting,
but the latter is still negative!

Last but not least, the weight of the number of famous actors in the RM is one of the features that has the largest
increase! This shows that networking has a major impact in this industry. Remember how you had to be careful about the
number of famous actors you played with when you were unknown? Now you should look for large casts with a lot of 
famous actors!


# Who are the career boosters?

Let’s start with definitions:
* A **career booster** is an actor·ress that is already famous during a given lustrum and has co-acted with an actor·ress 
that has been revealed during that lustrum.
* The **degree centrality** is defined as the number of links incident upon a node. In this analysis the nodes are actors 
and the links (also called edges) are the films that link two actors.


By selecting the lustrum and the PCA genre in the dropdown buttons below, actors with the highest degree centrality for 
a given lustrum and PCA genre are displayed. By hovering over the bars, different attributes of this _career booster_ 
are displayed.

<div id="img-container" class="img-container">
    <div class="mb2">
        <label for="s_year"></label><select id="s_year" onchange="update_current_hist()"></select>
        <label for="s_genre"></label><select id="s_genre" onchange="update_current_hist()"></select>
    </div>
    <iframe id="hist_booster">No available data</iframe>
    <p id="hist_error">No data for given selection</p>
</div>


# How does fame evolve over time ?
Let’s guide you through the following animation. The subset of films having the PCA genre _Thriller, Crime Thriller,
Action, Mystery_ is taken to lighten the graph and help visualize what’s happening.  The nodes represent the actors and 
actresses and the films connecting those actors are the edges. Nodes change color according to the popularity of the 
actor for a given year.

The nodes are at first invisible. When the actor·ress plays his·her first film, the nodes becomes grey. A node then  
becomes orange upon becoming famous. The year after the node becomes red since he·she is famous.
It is interesting to see that a lot of revelations start directly in orange meaning that they are revealed in their 
first movie! A second observation is that the heart of the graph is very strongly connected, which emphasizes 
the importance of networking in this industry.
<div class="center-children mb2">
    <img src="assets/images/GIF_Connectivity.gif" class="mb2" alt="connectivity evolution gif"/>
</div>


# Now it's your turn
Year is 2013. You don't know it yet, but you belong to the set of people that are made to be a star. We provide you 
this tool in order for you to estimate how good a film could be for your career given its casting. 

<div class="mb2" id="personal_selector">
    <div class="row">
        <div class="column left"> <label for="age">Age: </label> </div>
        <div class="column right"><input type="number" onchange="update_button_availability(false)" id="age" min="0" max="115" value="25"/> </div>
    </div> 
    <div class="row">
        <div class="column left"><label for="total_actors">Casting size excluding you:</label></div>
        <div class="column right"><input type="number" onchange="update_button_availability(false)" id="total_actors" min="1" max="20" value="5"/></div>
    </div>
    <div class="row">
        <div class="column left"> Sex: </div>
        <div class="column right">         
            <div>
              <input type="radio" id="gender" name="drone" value="1" checked />
              <label for="gender">Female</label>
            </div>
            <div>
              <input type="radio" id="is_male" name="drone" value="0" />
              <label for="is_male">Male</label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor1">Famous actor 1</label>
        </div>
        <div class="column right"> 
            <select id="actor1" onchange="update_button_availability(false)"> </select>    
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor2">Famous actor 2</label>
        </div>
        <div class="column right">
            <select id="actor2" onchange="update_button_availability(false)"></select>  
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor3">Famous actor 3</label>
        </div>
        <div class="column right">
            <select id="actor3" onchange="update_button_availability(false)"></select>  
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor4">Famous actor 4</label>
        </div>
        <div class="column right">
            <select id="actor4" onchange="update_button_availability(false)"></select>  
        </div>
    </div>
    <div class="row">
        <div class="column left">
            <label for="actor5">Famous actor 5</label>
        </div>
        <div class="column right">
            <select id="actor5" onchange="update_button_availability(false)"></select>  
        </div>
    </div>
    <div class="center-children">
        <button id="button_predict" onclick="predict_score()" class="nice_button"> Worth a shot? </button><br/>
    </div>
    <p id="predicted_chances"></p>
</div>


# Conclusion
The take home advices to become famous is that it's important to stay connected to famous people. However, you may stay
in the shadow of the too famous ones, hence don't go for a movie where the star of the show is way out of your league. 
Finally, aim for a comedy or an action film, and don't loose hope if you don't make it after your first film, as the
second one might be the good one.

<script src="assets/js/lin_reg.js"></script>
<script src="assets/js/actor_list.js"></script>
<script src="assets/js/index.js"></script>
