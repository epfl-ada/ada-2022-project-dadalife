// computed using
const weights = {'cast_max': 0.0001660896911268497,
    'cast_mean': 0.0021743740839443035,
    'cast_median': 0.002443162724017953,
    'cast_nb_famous_actors': -0.11183523097746015,
    'cast_prop_famous_actors': -3.5734078327902017,
    'F_max': -0.0005828147497858922,
    'F_mean': 0.0019202107994745908,
    'F_median': -0.001798068906537849,
    'F_nb_famous_actors': 0.32544163464997833,
    'F_prop_famous_actors': 1.4651289861929706,
    'M_max': -0.00022460195613339487,
    'M_mean': -0.0003759313639894035,
    'M_median': 0.0025547698592018916,
    'M_nb_famous_actors': 0.35314666883939155,
    'M_prop_famous_actors': 1.8851663293452785,
    'm_release_year': -0.056832890620886166,
    'actor_age': -0.04671924961357511,
    'actor_gender_cat': 0.09546912360092862
}

//
const param_avg = {
    'cast_max': 705.3960965676231,
    'cast_mean': 69.10915195875315,
    'cast_median': 0.8133587898670599,
    'cast_nb_famous_actors': 1.6878655083655085,
    'cast_prop_famous_actors': 0.13459350130240355,
    'F_max': 172.3741660621193,
    'F_mean': 43.56809223187754,
    'F_median': 14.23134815325867,
    'F_nb_famous_actors': 0.553628322904185,
    'F_prop_famous_actors': 0.044508993833016146,
    'M_max': 612.4801638370342,
    'M_mean': 81.31944841554791,
    'M_median': 3.230078493627772,
    'M_nb_famous_actors': 1.1385275595792839,
    'M_prop_famous_actors': 0.09044686433242573,
    'm_release_year': 1999.2103448275861,
    'actor_age': 37.501858267134125,
    'actor_gender_cat': 0.34186393289841566,
}


//returns all scores, all women scores, all men scores
function extract_scores_list(actor_list){
    let scores = []
    let scores_f = []
    let scores_m = []

    for(let i=0; i<actor_list.length;i++){

        let a = actor_list[i]

        scores.push(a['score'])

        if (a['gender_cat']){
            scores_f.push(a['score'])
        }else {
            scores_m.push(a['score'])
        }

    }
    return [scores, scores_f, scores_m]
}
