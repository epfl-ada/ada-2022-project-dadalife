// computed using
const weights = {
    'cast_max': 0.046670470591823825,
    'cast_mean': 0.896602656277116,
    'cast_median': 0.06800441317784489,
    'cast_nb_famous_actors': 0.16432669058953875,
    'cast_prop_famous_actors': -0.5746001745476748,
    'F_max': -0.29254677102812143,
    'F_mean': 0.3251263623365046,
    'F_median': -0.32721024816272554,
    'F_nb_famous_actors': 0.2658205966351857,
    'F_prop_famous_actors': 0.04329067604783978,
    'M_max': -0.18679628349455227,
    'M_mean': -0.48110581998483426,
    'M_median': -0.08993164578200137,
    'M_nb_famous_actors': 0.06955011075419837,
    'M_prop_famous_actors': 0.4158930544278318,
    'm_release_year': -0.5393290917702301,
    'actor_age': -0.5827272713601606,
    'actor_gender_cat': 0.09951609180274927, // 1 if actor is female, 0 if male
}

//returns all scores, all women scores, all men scores
function extract_scores_list(actor_list){
    let scores = []
    let scores_f = []
    let scores_m = []

    for(let i=0; i<actor_list.length;i++){

        const a=actor_list[i]

        scores.push(a['score'])

        if (a['gender']){
            scores_f.push(a['score'])
        }else {
            scores_m.push(a['score'])
        }

    }
    return [scores, scores_f, scores_m]
}
