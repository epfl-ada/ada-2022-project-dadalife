
const periods = ['1982_1986', '1987_1991', '1992_1996', '1997_2001', '2002_2006', '2007_2011']
const genres = [
    "all",
    "Doomsday_film_Apocalyptic_and_postapocalyptic_fiction_Dystopia_Disaster",
    "Detective_Detective_fiction_Crime_Thriller_Mystery",
    "Grossout_film_Gross_out_Romance_Film_Comedy",
    "Horror_Drama_Slasher_Psychological_thriller",
    "Family_Film_ChildrensFamily_Comedy_Animation",
    "Documentary_Culture__Society_Gay_Gay_Interest",
    "Gay_Gay_Interest_Gay_Themed_LGBT",
    "Antiwar_Antiwar_film_Environmental_Science_Nature",
    "Environmental_Science_Nature_Sword_and_sorcery_films_Sword_and_sorcery",
    "Business_Computers_Finance__Investing_Romance_Film",
    "Avantgarde_Experimental_film_Surrealism_Essay_Film",
    "Horror_Bmovie_Cult_Slasher",
    "Business_Computers_Finance__Investing_Experimental_film",
    "Documentary_Culture__Society_Biography_Social_issues",
    "Environmental_Science_Nature_Gross_out_Grossout_film",
]

function update_current_hist(){

    const histograms = document.querySelectorAll('.img_hist_booster');
    histograms.forEach(box => {
        box.style.display = 'none';
    });

    let year = document.getElementById("s_year").value
    let genre = document.getElementById("s_genre").value

    document.getElementById(year+"_"+genre).style.display = "inline"

}

// function to load all histograms of career boosters
function load_img(){
    for (let i=0; i<periods.length; i++){
        let p = periods[i]
        for (let j=0; j<genres.length; j++){
            let g=genres[j]
            let n = "career_booster_dc_"+p+"_genre_"+g+".html"
            let id = p+"_"+g
            document.getElementById("img-container").insertAdjacentHTML("beforeend",
                `<iframe id='${id}' class='img_hist_booster' src='assets/images/img/${n}'>No corresponding data</iframe>`
            )
        }
    }
}


//function to set the selectors options. should be called only once otherwise shit will happen
function set_select() {
    for(let i=0; i<periods.length;i++){
        let p = periods[i]
        let elem = "<option value='"+p+"'>"+p.replace("_","-") + "</option>"
        document.getElementById("s_year").insertAdjacentHTML("beforeend", elem)
    }

    for(let i=0; i<genres.length;i++){
        let g = genres[i]
        let display_genre  = g.replaceAll("_", ", ")
        let elem = "<option value='"+g+"'>"+display_genre + "</option>"
        document.getElementById("s_genre").insertAdjacentHTML("beforeend", elem)
    }
}


load_img()
set_select()
update_current_hist()