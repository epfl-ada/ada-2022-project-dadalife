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

function create_pers_selector_options(){
    for(let i=1; i<6;i++){
        let opt = `<option value="default">None</option>`
        document.getElementById(`actor${i}`).insertAdjacentHTML("beforeend", opt)
        for (const [key, val] of Object.entries(actor_dict)){
            opt = `<option value="${key}">${key}</option>`
            document.getElementById(`actor${i}`).insertAdjacentHTML("beforeend", opt)
        }
    }
}


function predict_score(){
    // first validate all inputs

    let actors = []
    const a1 = document.getElementById("actor1").value
    const a2 = document.getElementById("actor2").value
    const a3 = document.getElementById("actor3").value
    const a4 = document.getElementById("actor4").value
    const a5 = document.getElementById("actor5").value

    if (a1!=="default"){
        actors.push(actor_dict[a1])
    }
    if (a2!=="default"){
        actors.push(actor_dict[a2])
    }
    if (a3!=="default" && a3!==a2 && a3!==a1){
        actors.push(actor_dict[a3])
    }
    if (a4!=="default"){
        actors.push(actor_dict[a4])
    }
    if (a5!=="default" && a5!==a5 && a5!==a3 && a5!==a2 && a5!==a1){
        actors.push(actor_dict[a5])
    }

    // throw warning if nothing is fulfilled
    const total_actors = parseInt(document.getElementById("total_actors").value) + 1
    const age = parseInt(document.getElementById("age").value)
    if (age <= 0 || age >= 115){
        document.getElementById("predicted_chances").textContent = `Please fill in valid values.`
        document.getElementById("button_predict").setAttribute("disabled", true)
        return
    }

    if (total_actors <= 0 || total_actors >= 22 ){
        document.getElementById("predicted_chances").textContent = `Please fill in valid values.`
        document.getElementById("button_predict").setAttribute("disabled", true)
        return
    }

    let score = compute_score(actors, total_actors, age)
    document.getElementById("predicted_chances").textContent = `Your predicted chances of becoming famous are ${Math.round(score*100)}%`
}


function compute_score(actorList, total_actors, age){

    // throw warning if nothing is fulfilled
    const is_woman = document.getElementById("gender").checked

    const [scores, scores_f, scores_m] = extract_scores_list(actorList)

    if (is_woman){
        scores_f.push(0)
    }else{
        scores_m.push(0)
    }

    let score = 0
    // overall participation
    score += weights.cast_max * max(scores)
    score += weights.cast_mean * mean(scores)
    score += weights.cast_median * median(scores)
    score += weights.cast_nb_famous_actors * actorList.length
    score += weights.cast_prop_famous_actors * actorList.length / total_actors
    // woman
    score += weights.F_max * max(scores_f)
    score += weights.F_mean * mean(scores_f)
    score += weights.F_median * median(scores_f)
    score += weights.F_nb_famous_actors * scores_f.length
    score += weights.F_prop_famous_actors * scores_f.length / total_actors
    // man
    score += weights.M_max * max(scores_m)
    score += weights.M_mean * mean(scores_m)
    score += weights.M_median * median(scores_m)
    score += weights.M_nb_famous_actors * scores_m.length
    score += weights.M_prop_famous_actors * scores_m.length / total_actors

    score += weights.m_release_year * 2013
    score += weights.actor_age * age
    score += is_woman ? weights.actor_gender_cat : 0

    return score
}


// taken from stack-overflow, used to compute medians
function median(numbers) {
    if (numbers.length === 0){
        return 0
    }
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

// taken from stackoverflow. Computes mean of an array
function mean(numbers){
    if (numbers.length === 0){
        return 0
    }
    return numbers.reduce((a, b) => a + b, 0) / numbers.length
}

function max(numbers){
    if (numbers.length === 0){
        return 0
    }

    return Math.max.apply(Math, numbers)
}

create_pers_selector_options()
init_select()
update_current_hist()
create_pers_selector_options()