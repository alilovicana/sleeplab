import express from "express";
const app = express();
import { GoogleSpreadsheet } from 'google-spreadsheet';
import fs from 'fs';
import { JWT } from 'google-auth-library'
import { PythonShell } from 'python-shell';

/***********************************EXCEL*********************************************/
async function getServerSideProps(id) {

    try {
        const auth = new JWT({
            email: "app-engine-default-service-acc@sleeplab-387813.iam.gserviceaccount.com",
            key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDocsshPW0bd2d1\n7rPTU61gUaeWj8hKLOX/9zRQ68lKj7HRVkuTOQpIBIM+/fiwFSzSzq25N3w2koL+\nEcOGEqE+E6vMttBfeK86tJMsM4xjr81875TpRRDbHx2NrAZ3agA0DcYv7L1oWgnU\nEEauM/iEhWqJ3kQWHdUwEaJQixr5TnpybUBXIm/3hdwDGmikCAwTst2WjrYjtA6Y\nAJLmCxk22FrP2BFOFgmbv3LFG38dGjvwO0e6P+XjZ+TuoD6N3yB3qk9Nu8HBF7K3\nOi/OSqs4TTTKCye8SNxubjzJgD6GhwPpcTYLLDK4yI192MYNN6u9sh5rU98Cv6oi\n6a+zWY5LAgMBAAECggEATt9gsIs0weyepQQVbYAHpNagHHT2O8EHW/aoAEs5Vnzy\nk7sJ0s84f15UoGOx5iGRP4iUpvO+SJAnNYmWhCA/KR6onUJs6vA62RsbkxR8rvig\nq6NprktaoFdrAj7cRNmpbwA7ftiAHm/qxNOu//4vddwFXfmWtcByrahWIKlKwkuq\nqy3i+8w9ckukSy80WcaOCGBS1VOkktDunA9mzXMwh25S8vOO7lqY4RTzUWr+n2M5\nastOU1gWqPZ6IAI8DbSr1oBivans+R2mYv+bQ8heQmrebo2iE9z2BW2WcDkbNflP\ndWhsZoHDm5Nk0crd6xdFPrhJqSTulWlY+U22ftJVuQKBgQD4UWRpgsLegjJV8j28\nFnjArX+L19B8LvZiPV5wVIgbP+VRiN4ERsv04IYPzq+hELisXKEkvLXJcZDeQXxo\nSv8yVNm1+iI4jCq0flRRhLBpjmUnIrsxkDhs4pcvY7HTQ+Yo6g0363p2MUnwf6zY\nKBYTxsjdddVRVZVPJdDsEA0mkwKBgQDvo7gV9bFFvLYxWDypUXwp5OMJkX6+gDoe\nqFnuzN47OBSnJSML+eOUmBF2vHFhljkKYavu2DxOf6cigcgFh9FpuNT+ZvApr0rD\nxJdmHrCSeyMbNzfqx+0GoFpz67Vo5MOpvCHxvNOcA+Zg7qJG31gfW7XpRa5DPD6D\nsBoM1NHUaQKBgBJnLdLn/vswmPxnpI2g+LgG47IAf5IEhPwI4kve5+tlE+C0DQgy\nGwF99lGLltaP/6++ea7YUXypbvwZzFeKX1liknP7IrggIzYXOraD5/Mau4Jn/4mP\nz666KEw5zj8DBDa6CdrAF+ZUhs9NFwk6B1DV5aMMDZAmkJc6DT7BfcgDAoGAeulQ\nLAM+j3RBRoHpazbeJma9hFTZ2z/Nj5ftuKvfeCRFg41qsmPTNI3itzHkPZddXlPG\nadUC6YhT40EJpLyKzlz88hc+K0M7Z7nXpYssKZV65iSmS4eLrRBmFHrbKxfau55B\nEso1BxqA+UqsdQltG3hgj2sr/FRUBBs44Ufu77ECgYEAnvxI/tCfNVKew5bFUgxF\nGqku4FxuJY0PAzkFQBl71z7L8JC0J41CgWgMx2xHY0bbFzB2JGfutW8lSbmkipDV\ns0+Rzngd/BrtUfX4yAP7yKKc77ybUCkj5b6k+OFYxKDbRIlZASKyPNaxx7B8GO1s\nGyKh9eEiEOU6kE3G3FhTLmo=\n-----END PRIVATE KEY-----\n",
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        //Definiranje google sheeta uz pomoć sheet ID-a
        let sheets = new GoogleSpreadsheet("13OqS9ad5-Eg0nWw0twfS2kpb6Ho8kocIrqwEE5sOch8", auth)
        //učitavanje sheeta
        await sheets.loadInfo();

        //odabir bas tog prvog sheeta
        let sheet = sheets.sheetsByIndex[0];
        let data = await sheet.getRows({ limit: 379 })
        let firstColumn = data.map(row => row._rawData[0]);
        const rowIndex = firstColumn.findIndex(value => value === id);
        // Izdvajanje prvih 14 vrijednosti iz retka
        const rowData = data[rowIndex]._rawData.slice(0, 19);
        // Pridruživanje pojedinačnim varijablama
        const [
            Patient_ID,
            Gender,
            Race,
            Age,
            Height,
            Weight,
            BMI,
            Systolic_Blood_Pressure,
            Diastolic_Blood_Pressure,
            Heart_Rate,
            Waist,
            Hip,
            Neck,
            AHI,
            Mean_SaO2,
            Lowest_SaO2,
            ODI,
            CV_Other,
            Other_o,
        ] = rowData;

        // console.log(Gender);


        // Result
        return {
            props: {
                Patient_ID,
                Gender,
                Race,
                Age,
                Height,
                Weight,
                BMI,
                Systolic_Blood_Pressure,
                Diastolic_Blood_Pressure,
                Heart_Rate,
                Waist,
                Hip,
                Neck,
                AHI,
                Mean_SaO2,
                Lowest_SaO2,
                ODI,
                CV_Other,
                Other_o
            }
        }
    } catch (e) {
        console.log(e)
    }
    // Auth
}
//get patient
app.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        // Call your function with the patient ID and retrieve the result
        const result = await getServerSideProps(id);
        // If the result is successfully retrieved, send it as the response
        res.status(200).json(result);
    } catch (err) {
        // If an error occurs, send the error as the response
        res.status(500).json({ error: err.message });
    }
});
/***********************************PYTHON*********************************************/

// Putanja do Python skripte koju želim pokrenuti
const scriptPath = 'python.py';

app.get("/python/:id", async (req, res) => {
    const { id } = req.params;
    // Opcije za izvršavanje skripte
    const options = {
        pythonPath: 'C:/Users/Korisnik/AppData/Local/Programs/Python/Python311/python.exe',
        args: [id],
    };
    try {
        // Call your function with the patient ID and retrieve the result
        await PythonShell.run(scriptPath, options, async (err, pyResult) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Rezultat:', pyResult);
            }
        });
        // const patientGraph = fs.readFileSync('./patient_graph.png');
        // const base64Graph = patientGraph.toString('base64');
        // res.status(200).json({ base64Graph });

        const imagePaths = [
            './diff_histogram.png',
            './Duration_time_histogram.png',
            './Min_MAx_find_peaks_sa_pravcem.png',
            './Min_MAx_find_peaks.png',
            './slope_histogram.png',
            './Vrijeme_trajanja.png'
        ];
        const images = [];

        for (const imagePath of imagePaths) {
            const image = fs.readFileSync(imagePath);
            const base64Image = image.toString('base64');
            images.push({ base64Image });
        }
        console.log(images)
        res.status(200).json({ images });

    } catch (err) {
        // If an error occurs, send the error as the response
        res.status(500).json({ error: err.message });
    }
});

app.listen(8800, () => {
    console.log("Backend server is running!");
});

