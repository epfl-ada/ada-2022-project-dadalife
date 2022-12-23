import sys
import os
import pandas as pd
import csv

DATA_PATH = './preprocessed_data'
SCORE_PATH = os.path.join(DATA_PATH, 'score_function.tsv')#que la colonne 2012
REGRESSION_PATH = os.path.join(DATA_PATH, 'regression_columns_operation.csv')#pas prendre toutes les features ( celles de 3 ans impossible à calcuer) t'as pas fait de film (le client)

df_numbers=pd.read_csv(SCORE_PATH, sep='\t').set_index('actor_name')
df_numbers.reset_index(inplace=True)#mettre que la colonne 2012

#prendre aussi chars -> le gender 


df_reg_weights = pd.read_csv(REGRESSION_PATH, sep=',')

number_unknown=sys.argv[1]
client_age=sys.argv[2]
actor_list=[]
for i in range(3, len(sys.argv)):
    actor_list.append(sys.argv[i].replace("_", " "))
    
#actor_list = [re.sub(_) for _ in actor_list]
print(actor_list)


eature_array = np[]
gender_array = np[]

def retrieve_movie_features(row, arr, gender_arr):
    type_f, function = row.split('_')
    values = list(arr)
    if type_f == 'F' or type_f == 'M':
        values = []
        for x, g in zip(arr, gender_arr):
            if g == type_f:
                values.append(x)
    if function == 'max':
        return max(values)
    if function == 'min':
        return min(values)
    if function == 'mean':
        return np.mean(values)
    if function == 'median':
        return np.median(values)
    if function == 'nb_famous_actors' or function == 'nb_actors_already_played':
        return np.count_nonzero(values)
    if function == 'prop_famous_actors' or function == 'prop_nb_movies':
        if type_f == 'F' or type_f == 'M':
            try:
                return (np.count_nonzero(values))/np.count_nonzero(values)
            except:
                return 0
        else:
            return (np.count_nonzero(values))/float(len(values))

df_reg_weights['function'] = df_reg_weights.apply(lambda row: retrieve_movie_features(row, f), axis=1)



