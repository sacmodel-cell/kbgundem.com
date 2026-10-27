const fs=require('fs');for(const f of ['dist/index.html','dist/haberler/index.html','dist/kampanyalar/kdv-10/index.html','dist/yonetim/index.html','dist/style.css'])if(!fs.existsSync(f))throw new Error('Missing '+f);console.log('KBG build smoke test passed');
const kdv=fs.readFileSync('dist/kdv-indirimi/index.html','utf8');
for(const phrase of ['KDV İndirimi Talebi','TBMM e-Dilekçe','CİMER','Başvuru metnini hazırla','kişisel verilerinizi kaydetmez'])if(!kdv.includes(phrase))throw new Error('KDV page missing '+phrase);
if(/<form[^>]+action=/.test(kdv))throw new Error('Unexpected submission endpoint');
console.log('KDV draft page smoke tests passed');
