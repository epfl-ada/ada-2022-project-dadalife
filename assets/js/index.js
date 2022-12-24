const periods = ['1982_1986', '1987_1991', '1992_1996', '1997_2001', '2002_2006', '2007_2011']

const genres = {
    "all": "All",
    "Doomsday_film_Apocalyptic_and_postapocalyptic_fiction_Dystopia_Science_Fiction": "Doomsday film, Apocalyptic and postapocalyptic fiction, Dystopia, Science Fiction",
    "Detective_Crime_Thriller_Detective_fiction_Mystery": "Detective, Crime, Thriller, Detective fiction, Mystery",
    "ActionAdventure_Action_Comedy_Action_Thrillers": "ActionAdventure, Action, Comedy, Action, Thrillers",
    "Grossout_film_Gross_out_Comedy_Romance_Film": "Grossout film, Gross out, Comedy, Romance Film",
    "Documentary_Culture__Society_Gay_Gay_Interest": "Documentary, Culture, Society, Gay, Gay Interest",
    "Family_Film_ChildrensFamily_Comedy_Animation": "Family, Film, ChildrensFamily, Comedy, Animation",
    "Antiwar_film_Antiwar_Business_Computers": "Antiwar film, Antiwar, Business, Computers",
    "Gay_Gay_Interest_Gay_Themed_LGBT": "Gay, Gay Interest, Gay Themed LGBT",
    "Environmental_Science_Nature_Antiwar_Antiwar_film": "Environmental, Science, Nature,  Antiwar, Antiwar film",
    "Horror_Bmovie_Cult_Slasher": "Horror, Bmovie, Cult, Slasher",
    "Business_Computers_Finance__Investing_Romance_Film": "Business, Computers, Finance investing, Romance_Film",
    "Adult_Pornographic_movie_Environmental_Science_Nature": "Adult, Pornographic movie, Environmental Science, Nature",
    "Business_Computers_Finance__Investing_Antiwar": "Business, Computers, Finance investing, Antiwar",
    "Avantgarde_Experimental_film_Surrealism_Business": "Avantgarde, Experimental film, Surrealism, Business",
    "Documentary_Culture__Society_Biography_Social_issues": "Documentary, Culture society, Biography, Social issues"
}

/**
 * Sets the url of the iframe displaying the histogram to the selected value
 */
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

/**
 * Function to set the selectors options for the histograms. Should be called only once at page load.
 */
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

/**
 * Returns true if the url is valid
 * @param url the url to test
 * @returns {boolean} wether the reply is not a 404
 * @constructor
 */
function UrlExists(url) {
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!==404;
}

/**
 * Creates the options for the actor selectors used in the predictor. Should be called only once at page load
 */
function create_pers_selector_options(){
    for(let i=1; i<6;i++){
        let opt = `<option value="default">None</option>`
        document.getElementById(`actor${i}`).insertAdjacentHTML("beforeend", opt)
        for (const key in actor_dict){
            opt = `<option value="${key}">${key}</option>`
            document.getElementById(`actor${i}`).insertAdjacentHTML("beforeend", opt)
        }
    }
}

/**
 * Gets user input, sanitises it and calls compute_score to predict the chances to become famous given user input.
 *
 * @returns percentage of chances to become famous given user input.
 */
function predict_score(){
    // first validate all inputs
    let actors = update_button_availability(true)
    const total_actors = parseInt(document.getElementById("total_actors").value) + 1
    const age = parseInt(document.getElementById("age").value)

    let score = compute_score(actors, total_actors, age)
    let score_ref = compute_score_alone(total_actors, age)

    // if the coacting lets you perform better by between 10% and 40%, recommend a bit, if by more, recommend strongly,
    // if less,
    let text =""

    let rel_increase = ((score - score_ref)/score_ref * 100).toFixed(2)

    if(score<score_ref){
        text += `This co-acting would be ${((1-score/score_ref)*100).toFixed(2)}% less profitable than playing`
        text += " alone, don't do it."
    }else if (score<score_ref*1.1){
        text += `This casting is clearly not worth it, it's only a ${rel_increase}% increase over playing alone.`
    } else if (score_ref*1.1<= score < score_ref*1.4){
        text += `This casting can do, it's ${rel_increase}% better than if you played alone. However, you can surely`
        text += "find better!"
    } else if (score_ref * 1.4<= score) {
        text += `Wow ! This may be the biggest opportunity you'll have. It's ${rel_increase}% better than playing alone.`
        text += " Go for it!"
    }
    document.getElementById("predicted_chances").textContent = text
}


/**
 * Computes the predicted score for a starting actor to be famous given a certain cast.
 *
 * @param actorList the list of famous actors in the cast
 * @param total_actors the total numbers of actors in the cast
 * @param age the age of the "newcomer"
 * @returns {number} the chance of being famous, in %
 */
function compute_score(actorList, total_actors, age){
    const is_woman = document.getElementById("gender").checked
    const [scores, scores_f, scores_m] = extract_scores_list(actorList)

    if (is_woman){
        scores_f.push(0)
    }else{
        scores_m.push(0)
    }

    let score = 0
    // overall participation
    score += weights.cast_max * (max(scores) - param_avg.cast_max)
    score += weights.cast_mean * (mean(scores) - param_avg.cast_mean)
    score += weights.cast_median *(median(scores) - param_avg.cast_median)
    score += weights.cast_nb_famous_actors * (actorList.length - param_avg.cast_nb_famous_actors)
    score += weights.cast_prop_famous_actors * (actorList.length/total_actors - param_avg.cast_prop_famous_actors)
    // woman participation
    score += weights.F_max * (max(scores_f) - param_avg.F_max)
    score += weights.F_mean * (mean(scores_f) - param_avg.F_mean)
    score += weights.F_median * (median(scores_f) - param_avg.F_median)
    score += weights.F_nb_famous_actors * (scores_f.length - param_avg.F_nb_famous_actors)
    score += weights.F_prop_famous_actors * (scores_f.length/total_actors - param_avg.F_prop_famous_actors)
    // man participation
    score += weights.M_max * (max(scores_m) - param_avg.M_max)
    score += weights.M_mean * (mean(scores_m) - param_avg.M_mean)
    score += weights.M_median * (median(scores_m) - param_avg.M_median)
    score += weights.M_nb_famous_actors * (scores_m.length - param_avg.M_nb_famous_actors)
    score += weights.M_prop_famous_actors * (scores_m.length/total_actors - param_avg.M_prop_famous_actors)
    // global parameters
    score += weights.m_release_year * (2013 - param_avg.m_release_year)
    score += weights.actor_age * (age - param_avg.actor_age)
    score += is_woman ? weights.actor_gender_cat - param_avg.actor_gender_cat : 0

    return Math.exp(score)/(1+Math.exp(score))
}

function compute_score_alone(total_actors, age){
    return compute_score([], total_actors, age)
}

/**
 * Checks that all the inputs for the predictor are valid. If there are not, displays a small error msg after the button
 * and disables the button, elses re-enables the button
 * @param return_list whether or not to return the selected actor list
 * @returns {*[]} the selected actor list if return_list evaluates to true
 */
function update_button_availability(return_list){
    let actors = []
    const a1 = document.getElementById("actor1").value
    const a2 = document.getElementById("actor2").value
    const a3 = document.getElementById("actor3").value
    const a4 = document.getElementById("actor4").value
    const a5 = document.getElementById("actor5").value

    if (a1!=="default"){
        actors.push(actor_dict[a1])
    }
    if (a2!=="default" && a2!==a1){
        actors.push(actor_dict[a2])
    }
    if (a3!=="default" && a3!==a2 && a3!==a1){
        actors.push(actor_dict[a3])
    }
    if (a4!=="default" && a4!==a3 && a4!==a2 && a4!==a1){
        actors.push(actor_dict[a4])
    }
    if (a5!=="default" && a5!==a5 && a5!==a3 && a5!==a2 && a5!==a1){
        actors.push(actor_dict[a5])
    }

    const total_actors = parseInt(document.getElementById("total_actors").value) + 1
    const age = parseInt(document.getElementById("age").value)
    if (age <= 0 || age >= 115 || total_actors <= 0 || total_actors >= 22 || actors.length === 0){
        document.getElementById("button_predict").disabled = true;
        document.getElementById("predicted_chances").textContent = `Please fill in valid values.`
    }else{
        document.getElementById("button_predict").disabled = false;
    }


    if (return_list){
        return actors
    }

}


/** computes the median of an array, taken from stackoverflow
 *
 * @param numbers the array to return the median of
 * @returns {unknown|number} the median of the array, 0 if array is empty
 */
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

/** computes the mean of an array
 *
 * @param numbers the array to computes the mean of
 * @returns {number} the mean of the values in the array. 0 if array is empty
 */
function mean(numbers){
    if (numbers.length === 0){
        return 0
    }
    return numbers.reduce((a, b) => a + b, 0) / numbers.length
}

/** returns the max of an array
 *
 * @param numbers the array we want to get the max of
 * @returns {number} the biggest value in the array, 0 if the array is empty
 */
function max(numbers){
    if (numbers.length === 0){
        return 0
    }
    return Math.max.apply(Math, numbers)
}

create_pers_selector_options()
init_select()
update_current_hist()
update_button_availability()