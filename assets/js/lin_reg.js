// computed using
const weights = {
    'cast_max': 0.00012277492968622032,
    'cast_mean': 0.002168078890747275,
    'cast_median': 0.003046231633450338,
    'cast_nb_famous_actors': -0.07909720889543616,
    'cast_prop_famous_actors': -2.873783221946922,
    'F_max': -0.00045997068236120636,
    'F_mean': 0.0015389241656166776,
    'F_median': -0.0014441787845161278,
    'F_nb_famous_actors': 0.3191567210290781,
    'F_prop_famous_actors': 0.32130282065235966,
    'M_max': -0.0001789060206538453,
    'M_mean': -0.0004051765503536397,
    'M_median': 0.0030521479570005663,
    'M_nb_famous_actors': 0.2846260924101352,
    'M_prop_famous_actors': 1.7132902730209543,
    'm_release_year': -0.05742202514259814,
    'actor_age': -0.046420208257351186,
    'actor_gender_cat': 0.11560121596130446,
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
