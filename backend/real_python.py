import pandas as pd
import numpy as np
import csv
import os                                                                                                             
import copy
import mne
import shutil
import seaborn as sns
import papermill as pm
import sys
import warnings

root_path="C:\\Users\\Korisnik\\Desktop\\Pacijenti\\Pacijenti"
file_name="Histogrami-ODI.ipynb"
for arg in sys.argv:
    id=arg.encode()

def run_all_notebooks(dir, file, id):                                                                                                  
    subdirs = [f.path for f in os.scandir(dir) if f.is_dir()]
    for subdir in subdirs:
        if(dir!=subdir and subdir!=os.path.join(dir,".ipynb_checkpoints")):
            edf_path = os.path.join(subdir, "edf_signals.edf")
            og_notebook_path = os.path.join(dir,file)
            notebook_path = os.path.join(subdir,file)
            
            pm.execute_notebook(
               og_notebook_path,
               notebook_path,
               parameters=dict(edf_path=edf_path, id=id)
            )

def get_all_edfs(dir):                                                                                                  
    r = []
    subdirs = [f.path for f in os.scandir(dir) if f.is_dir()]
    for subdir in subdirs:
        if(dir!=subdir and subdir!=os.path.join(dir,".ipynb_checkpoints")):
            edf_path = os.path.join(subdir, "edf_signals.edf")
            r.append(edf_path)
    return r
            
def df_to_string(df,str_format=True):
    columns=list(df)
    if not str_format:
        df=df.astype(str)
    s=copy.copy(df[columns[0]])
    for col in columns[1:]:
        s+=","+df[col]
    return '\n'.join(s)

def df_to_csv_one(df,file,str_format=True):
    with open(file,"w") as f:
        f.write(df_to_string(df,str_format))

all_edf_paths = get_all_edfs(root_path)
run_all_notebooks(root_path,file_name, id)

  
warnings.filterwarnings('ignore')
for edf_path in all_edf_paths:
    print(edf_path)
    data = mne.io.read_raw_edf(edf_path)
    data_raw = data.get_data()
    data_channels = data.ch_names
    saturation_index = data_channels.index('SpO2')
    signal = pd.DataFrame(data_raw)
    saturation = signal.iloc[saturation_index]
    saturation = pd.DataFrame(saturation)
    df_to_csv_one(saturation,os.path.join(os.path.dirname(edf_path),"saturation.csv"),False)