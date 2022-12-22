
const periods = ['1982_1986', '1987_1991', '1992_1996', '1997_2001', '2002_2006', '2007_2011']
const genres = {
    "all": "All",
    "Doomsday_film_Apocalyptic_and_postapocalyptic_fiction_Dystopia_Disaster": "Doomsday film, Apocalyptic and postapocalyptic fiction, Dystopia, Disaster",
    "Detective_Detective_fiction_Crime_Thriller_Mystery": "Detective, Detective fiction, Crime, Thriller_Mystery",
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
        let g = key
        let display_genre  = val
        let elem = "<option value='"+g+"'>"+display_genre + "</option>"
        document.getElementById("s_genre").insertAdjacentHTML("beforeend", elem)
    }
}

function UrlExists(url) {
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!==404;
}


init_select()
update_current_hist()