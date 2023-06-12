import matplotlib.pyplot as plt
import numpy as np

patient1_data = [1, 2, 3, 4, 5]  
patient2_data = [2, 4, 6, 8, 10]  
patient3_data = [3, 6, 9, 12, 15] 
patient4_data = [4, 8, 12, 16, 20] 

patient_data=patient3_data
plt.plot(patient_data)
plt.title('Graf pacijenta 3')
plt.xlabel("Vrijeme")
plt.ylabel("Vrijednost")
plt.savefig("patient_graph.png") 
plt.close() 

plt.hist(patient_data, bins=10)
plt.title("Histogram pacijenta 3")
plt.xlabel("Vrijednost")
plt.ylabel("Broj uzoraka")
plt.savefig("patient_histogram.png") 
plt.close() 
print("ah mene moj")