const { execSync } = require('child_process');

try {
  execSync('mklink ./node_modules/patient_graph.png "C:/Users/Korisnik/Desktop/sleeplab/backend/patient_graph.png"');
  execSync('mklink ./node_modules/patient_histogram.png "C:/Users/Korisnik/Desktop/sleeplab/backend/patient_histogram.png"');
  console.log('Simbolička veza je uspješno stvorena.');
} catch (error) {
  console.error('Došlo je do pogreške pri stvaranju simboličke veze:', error.message);
}
