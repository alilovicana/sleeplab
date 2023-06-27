import { google } from 'googleapis';
import express from "express";
const app = express();
import fs from 'fs';

/***********************************EXCEL*********************************************/
async function getServerSideProps(id) {

    try {
        const auth = await google.auth.getClient({
            credentials: {
                client_email: "app-engine-default-service-acc@sleeplab-387813.iam.gserviceaccount.com",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+LyU8aifKRbLw\nFdlbNgsQ9/X1rp4yl6NgfH9DXoo6MllNzn5lICeUpSwdv9Di01KPY6drlcg7s4rA\n/iEnrQeaF/xq9N/aj4PexKCfHlIJnLSGkzPPw36OPsKmxZRMdAsLTECpiEueA9MA\nRvjxHZNYDe6xSBPkCRtWm+rnQRJQ0Qt5XQKulbyVRnAdF+BBnea/I4t0CgtuxRmJ\nmOMpFogTLuW0nKgDYYcaPx8T78m0XNbUVfG8fxfvET4+WyzozEm5M4LrhcuQZlrb\nA5oNMGY5hVQampD0iTI5lfUQKff3siMpz4Z9gde4DEGBGYUw+r4IKQvvO9N19uFA\n8e1pKuq5AgMBAAECggEAAe7EuBp0ERAoQ1xVeyHPdvquGzMNFIKJ/H8HZA3f5buB\nQNMqYaiz/kS3cA3093kiS6a9mtBI2qJ2dIOgnqCZhS1dOVEHvVbcBjWFVFigiMx4\n4S05x5C7BoMIw10aprQ/MHwz5AUoj5CGYmhWO00LpEdv94k9+oFFL9ohxvvYTc3t\niHmrtXp0GYjUv52ocDaikGFxKgOZKyz7euGv34lAEEZb+UrhZiKeqPZxTCuADyrv\n3FXxpZAgxyOVvViPuxl29wtapwgeXOI4OyXv9JTJslb+/5wod5t529rM8Awpji7+\nBHgMOz/fyFDjD8uxFdn3eSKCF3qczoQQ8ZeLeDcEAQKBgQDzDHJCdeNJGOou/m60\nGXM1rVnni4yfVfIjWdRWPuEXfRGpGt4cC94NgkIhqOzFtiOjFl9prMBfgk0E9pwp\nIiWT38YL3rN2yb15wdMtgZuELuqs0el6DRczJgMBhShp1jUzxfZ6NhXA6pVgLsqM\nL/SZfrNquRrYxS+Ovv2ip3fOwQKBgQDIUYwfG2vi9jygRnsGiWNIIGRWeLmzS4E4\nWl7IaJ+vCgknNXncTBIpCJLMwAnYr20VRVdnMahLipvo+HJ+I/tACDMnt/XtYDCF\n2594pW8bQ/7ZBV1DlTV4B8n/hG7ffMLQ2Kz1fG063JUZ8rEJUuC7j53nLKIFyc/8\niXREsugR+QKBgEwB1W2hTk3aw8mkedxKpTPhHV+CzZw6lXmmqve5vEzLKQ24QEOH\nFo8k8Cd0m28NEcH7yiTTCGoV5p4pvRZD/nprHZUytO7uEhoUmkT95jOFNJCNKLWp\niFrPhVshWE0Y1xR00SrQ5SaqdcJZf7AtgxHJhLRYZOPrbn72jX0jYB1BAoGAaLV/\nqg76YQPXguv0iOEt3VjZOf4XC6qPHDbYzqcpuSRkznL8hPPalkpd+dr0CqkAOxso\n6c8iKoKEps2fg2IphjoDC2L0kSUzl/TKMhU/s5/iSeys6JPJBDoGE6NVFUswxlxM\nZHGq4xbEdXDPq5D/2erjXiCNfLsWFep/tR1Tg3kCgYAEWzaKmLl+e/kE2lb7MtQD\nm5NVMhVpic2znZa0UGJi0ADZE7BEtOQprgbC7MumcGBPBvH1zErvh9VswqGHkZzC\nCW35wKvdfxWvlGcIbMNsNiFeeRtutFf0JiZ9FuSZsPKhv5e/acAO8SPiecl/Dye0\nyerhdH9+CcfZeRTu+yqqRQ==\n-----END PRIVATE KEY-----\n",
            }, scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Query

        const range = `sleeplab!A1:GN379`;

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: "13OqS9ad5-Eg0nWw0twfS2kpb6Ho8kocIrqwEE5sOch8",
            range,
        });

        // Result

        const [Patient_ID, Gender, Race, Age, Height,Weight, BMI,Systolic_Blood_Pressure, Diastolic_Blood_Pressure, Waist, Hip, Neck] = response.data.values[id];
     console.log(Patient_ID);
        //console.log(ID, spol, tezina, visina, dob, ahi, odi)

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
                Waist,
                Hip,
                Neck
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

import { PythonShell } from 'python-shell';

// Putanja do Python skripte koju želite pokrenuti
const scriptPath = 'python.py';
//get graf
app.get("/python/:id", async (req, res) => {
    const { id } = req.params;
    // Opcije za izvršavanje skripte
    const options = {
        pythonPath: 'C:/Users/Korisnik/AppData/Local/Programs/Python/Python311/python.exe',
         args: [id],
    };
    try {
      
        // Call your function with the patient ID and retrieve the result
      const response= await PythonShell.run(scriptPath, options, async (err, result) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Rezultat:', result);
            }
        });
        res.status(200).json(response);
    } catch (err) {
        console.log(5)
        // If an error occurs, send the error as the response
        res.status(500).json({ error: err.message });
    }
});

app.listen(8800, () => {
    console.log("Backend server is running!");
});