import { execSync } from 'child_process';

try {
  execSync('mklink .\node_modules\patient_graph.png "C:\Users\Korisnik\Desktop\sleeplab\backend\patient_graph.png"');
  execSync('mklink .\node_modules\patient_histogram.png "C:\Users\Korisnik\Desktop\sleeplab\backend\patient_histogram.png"');
  execSync('mklink .\node_modules\patient_bar.png "C:\Users\Korisnik\Desktop\sleeplab\backend\patient_bar.png"');
  execSync('mklink .\node_modules\patient_pie.png "C:\Users\Korisnik\Desktop\sleeplab\backend\patient_pie.png"');
  execSync('mklink .\node_modules\patient_scatter.png "C:\Users\Korisnik\Desktop\sleeplab\backend\patient_scatter.png"');
  console.log('Simbolička veza je uspješno stvorena.');
} catch (error) {
  console.error('Došlo je do pogreške pri stvaranju simboličke veze:', error.message);
}
