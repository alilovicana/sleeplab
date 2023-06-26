import matplotlib.pyplot as plt
import numpy as np
import sys

# Pristupanje argumentima naredbenog redka
id = int(sys.argv[1])

if id == 1:
    patient_data = [1, 2, 3, 4, 5]
elif id == 2:
    patient_data = [2, 4, 6, 8, 10]
elif id == 3:
    patient_data = [3, 6, 9, 12, 15]
elif id == 4:
    patient_data = [4, 8, 12, 16, 20]
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
