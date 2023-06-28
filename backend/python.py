import matplotlib.pyplot as plt
import numpy as np
import sys

# Pristupanje argumentima naredbenog redka
id = int(sys.argv[1])

if id == 38011865:
    patient_data = [1, 2, 3, 4, 5]
    labels = ['A', 'B', 'C', 'D', 'E']
elif id == 38012044:
    patient_data = [2, 4, 6, 8, 10]
    labels = ['A', 'B', 'C', 'D', 'E']
elif id == 38011461:
    patient_data = [3, 6, 9, 12, 15]
    labels = ['A', 'B', 'C', 'D', 'E']
elif id == 38012172:
    patient_data = [4, 8, 12, 16, 20]
    labels = ['A', 'B', 'C', 'D', 'E']
else:
    # ID pacijenta nije valjan, možete obraditi ovo prema vašim potrebama
    sys.exit("ID pacijenta nije valjan.")

plt.plot(patient_data)
plt.title(f"Graf pacijenta: {id}")
plt.xlabel("Vrijeme")
plt.ylabel("Vrijednost")
plt.savefig("patient_graph.png")
plt.close()

plt.hist(patient_data, bins=10)
plt.title(f"Histogram pacijenta: {id}")
plt.xlabel("Vrijednost")
plt.ylabel("Broj uzoraka")
plt.savefig("patient_histogram.png")
plt.close()

x = np.arange(len(patient_data))  # Kreiranje niza x-koordinata
y = np.array(patient_data)        # Konverzija podataka u niz y-koordinata

plt.scatter(x,y)
plt.title(f"Točkasti graf pacijenta: {id}")
plt.xlabel("Vrijednost")
plt.ylabel("Broj uzoraka")
plt.savefig("patient_scatter.png")
plt.close()

plt.bar(x,y)
plt.title(f"Stupčasti graf pacijenta: {id}")
plt.xlabel("Vrijednost")
plt.ylabel("Broj uzoraka")
plt.savefig("patient_bar.png")
plt.close()

plt.pie(patient_data, labels=labels)
plt.title(f"Pie graf pacijenta: {id}")
plt.savefig("patient_pie.png")
plt.close()