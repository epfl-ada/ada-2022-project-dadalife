# Stairway to success, highway to hell?

This repo contains the CS-401's project of the dADAlife group. The project aims to closely look at actor's carreers, and find out success factors and roles.
This project is supervised by Lars Klein.

## Team Members
* Manon Boissat   272022
* James Germanier 269717
* Michaël Tasev   284020
* Romain Pugin    299127

## Abstract
What impacts the career of an actor or actress? When one must make decisions about their career, popularity might be something to look for. Knowing what maximises one's chances to become more popular or what minimises them is a useful information to have. This project aims to find how specific patterns impact actors and actresses in their career. 

## Project questions
- Will co-acting with someone famous throw you into the light, or will you be shadowed by the already famous actors?
- Is it important to star in big-budget films, or do small-budget films have a similar impact? 
- Is quality more important than quantity? I.e. is it better to star in more movies or to star in more movies?
- When do we see peaks of popularity in actor·ress? Is the peak linked to a particular event?
- What patterns can we highlight before an actor·ress becomes popular?
- What are the statistical evidences that support our findings?

This project shall answer the preceding questions in a visual manner, making it both easy and satisfying to read the results.

## Datasets
### CMU Movie Summary Corpus
The initial and teaching staff supported dataset for this project is the [CMU movie summary corpus](http://www.cs.cmu.edu/~ark/personas/). It describes films, as well as actor participation in said films, with about 42'000 films and 450'000 acting entries.

### The Numbers
As the CMU Movie Corpus doesn't provide a sufficient basis to compute an actor's or a film's popularity, we will also use [The Numbers](https://www.the-numbers.com/box-office-star-records/domestic/yearly-acting/). It is publicly available as long as wanted data is copied by hand and not automatically scraped. As the data is in a quite dense format, this doesn't represent much work. The dataset provides a "star scores" for many actors, from 1980 to 2022. Each year contains between 300 and 600 **american** actors data, and the "star score" is what we'll use for actors popularity.

### Google Trends
We also considered using [Google Trends](https://trends.google.com) as it is an efficient way to have a "popularity" estimation with a finer granularity. But we quickly had to abandon this idea, as the dataset had too little an overlap with the CMU Movie Corpus.

## Methods & steps
### Data sanitization
While extracting global features of the dataset, we stumbled upon a few incoherences in the data. Those went to actors being not yet born on the date they starred in a movie, to movie length being smaller than 5 seconds, or bigger than 10 hours. We decided to correct some mentioned errors using the last Freebase dump, and we dropped the ones that were too hard to correct.

### Dataset global analysis
To analyse and better define the next step's pipeline, we first globally analysed the dataset we had. The analysis, along with some conclusion drawn from it, can be found in the jupyter notebook.

### Definition of the popularity
The last step was to find an appropriate popularity measure for each actor. We first tried to use the numbers of mentions of an actor in films critics using the [Rotten Tomatoes](https://www.rottentomatoes.com/) dataset, but it was a far too noisy estimate. This is where *The Numbers* comes into play. It calculates the popularity according to the box office revenue, but smoothens it across time. We also could have calculated this by ourselves, but this would not have been worth the effort.

### Choice of an interesting subset
The *CMU Movies Summary Corpus* contains more than 50% of American movies. This is probably due to the dataset being made by an american university. In parallel to this, we chose to use a popularity metric based on the box office revenue. As we don't exactly know how this is compared across countries in our dataset, this metric is only relevant across one country (or would need to be standardized, with respect to the GDB for example). Furthermore, *The Numbers* is a dataset containing mainly American actors, hence the choice to work with only american films, and actors starring in them.



## Future work
The final step of the project will consist of extracting the features that have an impact on the popularity. The most important tasks are summarized in the following table:


| Task                                                               | Project member | Time estimate |
|--------------------------------------------------------------------|----------------|---------------|
| Find coacting with biggest impact                                  | James          | 2h            |
| Extract data on peaks of popularity of actors                      | James          | 4h            |
| PCA on movies genres to have more suitable data to work with       | Manon & Romain | a lot         |
| Find if successful actors are more specialized or more multi-genre | Manon & Romain | 4h            |
| ???                                                                | ???            | ???           |
| Clean code                                                         | Michaël        | underrated    |
| Data Story structure                                               | Michaël        | 5h            |
| Writing Data Story                                                 | Michaël        | 4h            |
| GitHubPage generation                                              | Romain         | 7h            |

## References
\[1\] **[Learning Latent Personas of Film Characters](http://www.cs.cmu.edu/~dbamman/pubs/pdf/bamman+oconnor+smith.acl13.pdf)**, [David Bamman](http://www.cs.cmu.edu/~dbamman), [Brendan O'Connor](http://brenocon.com), and [Noah A. Smith](http://www.cs.cmu.edu/~nasmith) . ACL 2013, Sofia, Bulgaria, August 2013
\[2\] [The Numbers](https://www.the-numbers.com/), 2017
\[3\] [Rotten Tomatoes](https://www.kaggle.com/datasets/stefanoleone992/rotten-tomatoes-movies-and-critic-reviews-dataset) Kaggle Dataset, as of 2020-10-31
