
const periods = ['1982_1986', '1987_1991', '1992_1996', '1997_2001', '2002_2006', '2007_2011']
const genres = {
    "all": "All",
    "Doomsday_film_Apocalyptic_and_postapocalyptic_fiction_Dystopia_Disaster": "Doomsday film, Apocalyptic and postapocalyptic fiction, Dystopia, Disaster",
    "Detective_Detective_fiction_Crime_Thriller_Mystery": "Detective, Detective fiction, Crime, Thriller, Mystery",
    "Grossout_film_Gross_out_Romance_Film_Comedy": "Grossout film, Gross out Romance, Film, Comedy",
    "Horror_Drama_Slasher_Psychological_thriller": "Horror, Drama, Slasher, Psychological, thriller",
    "Family_Film_ChildrensFamily_Comedy_Animation": "Family film, Childrens, Family, Comedy, Animation",
    "Documentary_Culture__Society_Gay_Gay_Interest": "Documentary, Culture, Society, Gay, Gay interest",
    "Gay_Gay_Interest_Gay_Themed_LGBT": "Gay, Gay interest, Gay themed, LGBT",
    "Antiwar_Antiwar_film_Environmental_Science_Nature": "Antiwar, Antiwar film, Environmental, Science, Nature",
    "Environmental_Science_Nature_Sword_and_sorcery_films_Sword_and_sorcery": "Environmental, Science, Nature, Sword and sorcery films, Sword and sorcery",
    "Business_Computers_Finance__Investing_Romance_Film": "Business, Computers, Finance/Investing, Romance film",
    "Avantgarde_Experimental_film_Surrealism_Essay_Film": "Avantgarde, Experimental film, Surrealism, Essay film",
    "Horror_Bmovie_Cult_Slasher": "Horror, Bmovie, Cult, Slasher",
    "Business_Computers_Finance__Investing_Experimental_film" :"Business, Computers, Finance/Investing, Experimental film",
    "Documentary_Culture__Society_Biography_Social_issues": "Documentary, Culture, Society, Biography, Social issues",
    "Environmental_Science_Nature_Gross_out_Grossout_film": "Environmental, Science, Nature, Gross out, Grossout film",
}


const features_lin_reg = {
    'cast_max' : 'Score of the most famous actor in revelation movie',
    'cast_mean': 'Average score of the casting of the revelation movie',
    'cast_median': 'Median score of the casting of the revelation movie',
    'cast_nb_famous_actors': 'Number of famous actors in revelation movie',
    'cast_prop_famous_actors': 'Ratio of famous actors in revelation movie',
    'F_max': 'Score of the most famous female actress in revelation movie',
    'F_mean': 'Average score of the female casting of the revelation movie',
    'F_median': 'Median score of the female casting of the revelation movie',
    'F_nb_famous_actors': 'Number of famous female actress in revelation movie',
    'F_prop_famous_actors': 'Ratio of famous female actresses in revelation movie',
    'M_max': 'Score of the most famous male actor in revelation movie',
    'M_mean': 'Average score of the male casting of the revelation movie',
    'M_median': 'Median score of the male casting of the revelation movie',
    'M_nb_famous_actors': 'Number of famous male actor in revelation movie',
    'M_prop_famous_actors': 'Ratio of famous male actors in revelation movie',
    'previous_cast_max': 'Score of the most famous actor the actor has played with in the past three years',
    'previous_cast_mean': 'Average score of all actors the actor has played with in the past three years',
    'previous_cast_prop_famous_actors': 'Average ratio of famous actors among each movie of the actor has played with in the past three years',
    'previous_cast_nb_famous_actors': 'Total number of famous actors the actor has played with in the past three years',
    'm_release_year': 'Movie release year',
    'actor_age': 'Actor age',
    'actor_gender_cat': 'Female gender',
    'nb_movies_before_this_movie': 'Number of movies the actor has already starred in'
}


function update_current_hist(){

    let p = document.getElementById("s_year").value
    let g = document.getElementById("s_genre").value
    let n = "assets/images/img/career_booster_dc_"+p+"_genre_"+g+".html"

    if (UrlExists(n)){
        document.getElementById("hist_booster").style.display = "inline"
        document.getElementById("hist_error").style.display = "none"
        document.getElementById("hist_booster").setAttribute("src", n)
    }else{
        document.getElementById("hist_booster").style.display = "none"
        document.getElementById("hist_error").style.display = "inline"
    }
}

//function to set the selectors options. should be called only once otherwise shit will happen
function init_select() {
    for(let i=0; i<periods.length;i++){
        let p = periods[i]
        let elem = "<option value='"+p+"'>"+p.replace("_","-") + "</option>"
        document.getElementById("s_year").insertAdjacentHTML("beforeend", elem)
    }

    for(const [key, val] of Object.entries(genres)){
        let elem = "<option value='"+key+"'>"+ val + "</option>"
        document.getElementById("s_genre").insertAdjacentHTML("beforeend", elem)
    }
}

function UrlExists(url) {
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!==404;
}

function create_pers_selector(){
    for(const [key, val] of Object.entries(features_lin_reg)){
        let label = `<label for="${key}">${val}</label>`
        let sel = `<select id="${key}"></select>`
        document.getElementById("personal_selector").insertAdjacentHTML("beforeend", label)
        document.getElementById("personal_selector").insertAdjacentHTML("beforeend", sel)
        document.getElementById("personal_selector").insertAdjacentHTML("beforeend", "<br/>")
    }
}


function create_pers_selector_options(){
    for(const [key, val] of Object.entries(features_lin_reg)){
        for(let i=0; i<periods.length; i++){
            let opt = `<option value="${periods[i]}">${periods[i]}</option>`
            document.getElementById(key).insertAdjacentHTML("beforeend", opt)
        }
    }
}


function predict_score(){
    let rnd = Math.round(Math.random()*100)
    document.getElementById("predicted_chances").textContent = `Your predicted chances of becoming famous are ${rnd}%`
}

init_select()
update_current_hist()
create_pers_selector()
create_pers_selector_options()