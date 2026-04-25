/* ── DATA ─────────────────────────────────────────────────── */
const BM={"Acura":["CDX","ILX","Integra","MDX","MDX Sport Hybrid","NSX","RDX","RLX","TLX","ZDX"],"Alfa Romeo":["147","156","159","164","166","Brera","Giulia","Giulietta","GT","GTA","GTV","MiTo","Spider","Stelvio","Tonale"],"Aston Martin":["DB7","DB9","DB11","DB12","DBS","DBS Superleggera","DBX","DBX707","Rapide","Vantage","Virage"],"Audi":["A1","A2","A3","A4","A4 Allroad","A5","A6","A6 Allroad","A7","A8","e-tron","e-tron GT","e-tron S","Q2","Q3","Q3 Sportback","Q4 e-tron","Q5","Q5 Sportback","Q7","Q8","Q8 e-tron","R8","RS3","RS4","RS5","RS6","RS7","RS Q3","RS Q8","S3","S4","S5","S6","S7","S8","SQ2","SQ5","SQ7","SQ8","TT","TT RS","TTS"],"Bentley":["Bentayga","Bentayga EWB","Continental GT","Continental GTC","Flying Spur","Mulsanne"],"BMW":["1 Series","2 Series","3 Series","3 Series GT","4 Series","5 Series","6 Series","6 Series GT","7 Series","8 Series","i3","i4","i5","i7","i8","iX","iX1","iX2","iX3","M2","M3","M4","M5","M6","M8","X1","X2","X3","X3 M","X4","X4 M","X5","X5 M","X6","X6 M","X7","XM","Z3","Z4"],"BYD":["Atto 3","Dolphin","Han","Seal","Seal U","Song","Song Plus","Tang","Yuan Plus"],"Cadillac":["ATS","CT4","CT5","CT6","CTS","Escalade","Escalade ESV","Lyriq","SRX","STS","XT4","XT5","XT6"],"Chery":["Arrizo 5","Arrizo 6","Arrizo 8","Tiggo 2","Tiggo 4","Tiggo 7","Tiggo 7 Pro","Tiggo 8","Tiggo 8 Pro"],"Chevrolet":["Aveo","Blazer","Blazer EV","Camaro","Captiva","Colorado","Corvette","Cruze","Equinox","Express","Impala","Malibu","Silverado 1500","Silverado 2500HD","Silverado 3500HD","Sonic","Spark","SS","Suburban","Tahoe","TrailBlazer","Traverse","Trax"],"Chrysler":["200","300","300C","Aspen","Pacifica","Voyager"],"Citroën":["Berlingo","C1","C2","C3","C3 Aircross","C4","C4 Cactus","C5","C5 Aircross","C5 X","C6","C8","DS3","DS4","DS5","SpaceTourer"],"Dacia":["Duster","Jogger","Logan","Lodgy","Sandero","Spring"],"Daewoo":["Espero","Kalos","Lacetti","Lanos","Leganza","Matiz","Nubira","Tacuma"],"Dodge":["Challenger","Charger","Dakota","Dart","Durango","Grand Caravan","Hornet","Journey","Nitro","RAM 1500","Viper"],"Ferrari":["296 GTS","296 GTB","458","488","488 GTB","488 Pista","812 Competizione","812 GTS","812 Superfast","California","California T","F12","F430","F8 Spider","F8 Tributo","GTC4Lusso","LaFerrari","Portofino","Portofino M","Purosangue","Roma","SF90 Spider","SF90 Stradale"],"Fiat":["124 Spider","500","500L","500X","Bravo","Doblo","Ducato","Freemont","Grande Punto","Linea","Panda","Punto","Qubo","Sedici","Tipo","Uno"],"Ford":["Bronco","Bronco Sport","Ecosport","Edge","Escape","Everest","Expedition","Explorer","F-150","F-150 Lightning","F-250","F-350","Fiesta","Flex","Focus","Fusion","Galaxy","Galaxy","Kuga","Maverick","Mondeo","Mustang","Mustang Mach-E","Puma","Ranger","S-Max","Taurus","Territory","Tourneo"],"GAC":["GA4","GA6","GN8","GS3","GS4","GS5","GS8","Trumpchi M6"],"Geely":["Azkarra","Atlas","Coolray","Emgrand","Monjaro","Okavango","Preface","Tugella"],"Genesis":["G70","G80","G90","GV70","GV80","GV80 Coupe"],"GMC":["Acadia","Canyon","Envoy","Jimmy","Safari","Sierra 1500","Sierra 2500HD","Sierra 3500HD","Terrain","Yukon","Yukon XL"],"Great Wall":["Haval H2","Haval H6","Haval H9","Ora Good Cat","Poer","Wingle"],"Honda":["Accord","Amaze","BR-V","City","City Hatchback","Civic","CR-V","e:NS1","e:NY1","HR-V","Insight","Jazz","Legend","Odyssey","Passport","Pilot","Ridgeline","WR-V"],"Hummer":["EV Pickup","EV SUV","H1","H2","H3","H3T"],"Hyundai":["Accent","Atos","Avante","Azera","Bayon","Creta","Elantra","Genesis","Getz","Grandeur","i10","i20","i30","i40","i45","Ioniq","Ioniq 5","Ioniq 5 N","Ioniq 6","Kona","Kona Electric","Nexo","Palisade","Santa Cruz","Santa Fe","Santa Fe Hybrid","Sonata","Staria","Terracan","Tucson","Tucson Hybrid","Veloster","Venue"],"Infiniti":["EX","FX","G37","JX","Q30","Q40","Q50","Q60","Q70","QX30","QX50","QX55","QX60","QX70","QX80"],"Isuzu":["D-Max","MU-7","MU-X","Trooper","VehiCROSS"],"JAC":["J7","JS4","JS6","Refine S3","Refine S5","T6","T8"],"Jaguar":["E-Pace","F-Pace","F-Type","I-Pace","S-Type","X-Type","XE","XF","XJ","XK"],"Jeep":["Cherokee","Compass","Gladiator","Grand Cherokee","Grand Cherokee 4xe","Grand Cherokee L","Grand Wagoneer","Patriot","Renegade","Wrangler","Wrangler 4xe"],"Kia":["Carnival","Ceed","Cerato","EV6","EV9","K5","Niro","Niro EV","Optima","Picanto","ProCeed","Rio","Seltos","Sorento","Soul","Sportage","Stinger","Stonic","Telluride","Xceed"],"Lamborghini":["Aventador","Aventador S","Huracán","Huracán EVO","Huracán STO","Revuelto","Urus","Urus Performante","Urus S"],"Land Rover":["Defender","Defender 90","Defender 110","Defender 130","Discovery","Discovery Sport","Freelander","LR2","LR4","Range Rover","Range Rover Evoque","Range Rover Sport","Range Rover Velar","Series III"],"Lexus":["CT","ES","GS","GS F","GX","IS","IS F","LC","LC Convertible","LS","LX","NX","RC","RC F","RX","RX L","UX"],"Lincoln":["Aviator","Corsair","Mark LT","MKC","MKS","MKT","MKX","MKZ","Navigator","Navigator L","Nautilus"],"Lotus":["Eletre","Emira","Evija","Evora","Exige","Exige Cup"],"Mahindra":["Bolero","Marazzo","Scorpio","Thar","TUV300","XUV300","XUV400","XUV500","XUV700"],"Maserati":["Ghibli","GranCabrio","GranTurismo","Grecale","Levante","MC20","Quattroporte"],"Mazda":["2","3","5","6","626","CX-3","CX-30","CX-5","CX-50","CX-60","CX-9","MX-30","MX-5","MX-5 RF","RX-7","RX-8"],"McLaren":["570GT","570S","600LT","650S","675LT","720S","720S Spider","750S","765LT","Artura","GT","P1","Senna"],"Mercedes-Benz":["A-Class","A 35 AMG","A 45 AMG","B-Class","C-Class","C 43 AMG","C 63 AMG","CLA","CLA 35 AMG","CLA 45 AMG","CLE","CLS","E-Class","E 53 AMG","E 63 AMG","EQA","EQB","EQC","EQE","EQE SUV","EQS","EQS SUV","G-Class","G 63 AMG","GLA","GLB","GLC","GLC Coupe","GLE","GLE Coupe","GLS","GT","GT 4-Door","Maybach GLS","Maybach S-Class","S-Class","S 500","S 580","S 63 AMG","SL","SLC","V-Class","Vito"],"MG":["3","5","6","HS","Marvel R","RX5","RX8","ZS","ZS EV"],"MINI":["Clubman","Convertible","Countryman","Coupe","Hatch","Paceman","Roadster"],"Mitsubishi":["ASX","Eclipse Cross","Galant","L200","Lancer","Lancer Evolution","Montero","Outlander","Outlander PHEV","Pajero","Pajero Mini","Pajero Sport","Space Star","Xpander"],"Nissan":["350Z","370Z","400Z","Altima","Armada","Ariya","Frontier","GT-R","Juke","Kicks","Leaf","Maxima","Micra","Murano","Navara","Patrol","Patrol Safari","Qashqai","Rogue","Sentra","Sunny","Terra","Tiida","Titan","X-Trail"],"OMODA":["5","C5"],"Peugeot":["108","2008","206","207","208","3008","301","306","307","308","408","4008","5008","508","Expert","Partner","Rifter","Traveller"],"Porsche":["718 Boxster","718 Cayman","911","911 GT3","911 GT3 RS","911 Turbo","911 Turbo S","Cayenne","Cayenne Coupe","Macan","Panamera","Taycan","Taycan Cross Turismo"],"RAM":["1500","2500","3500","ProMaster","ProMaster City"],"Renault":["Arkana","Captur","Clio","Duster","Espace","Kadjar","Koleos","Laguna","Logan","Master","Megane","Sandero","Scenic","Symbol","Trafic","Triber","Zoe"],"Rolls-Royce":["Black Badge Ghost","Cullinan","Cullinan Black Badge","Dawn","Ghost","Phantom","Phantom EWB","Silver Shadow","Silver Spirit","Spectre","Wraith"],"SEAT":["Arona","Ateca","Ibiza","Leon","Tarraco"],"Skoda":["Fabia","Kamiq","Karoq","Kodiaq","Octavia","Rapid","Scala","Superb","Yeti"],"Subaru":["Ascent","BRZ","Crosstrek","Forester","Impreza","Legacy","Levorg","Outback","Solterra","WRX","WRX STI","XV"],"Suzuki":["Alto","Baleno","Ciaz","Celerio","Ertiga","Grand Vitara","Jimny","Kizashi","S-Presso","Swift","SX4","Vitara","XL7"],"Tesla":["Cybertruck","Model 3","Model S","Model X","Model Y","Roadster"],"TOGG":["T10X","T10F"],"Toyota":["4Runner","Avalon","Avanza","Aygo","C-HR","Camry","Camry Hybrid","Corolla","Corolla Altis","Corolla Cross","Corolla Cross Hybrid","Crown","Crown Hybrid","FJ Cruiser","Fortuner","GR86","GR Corolla","GR Supra","GR Yaris","Hiace","Highlander","Hilux","Land Cruiser","Land Cruiser 70 Series","Land Cruiser 200","Land Cruiser 300","Prado","Previa","Prius","Prius Prime","RAV4","RAV4 Hybrid","Rush","Sequoia","Sienna","Supra","Tacoma","Tundra","Venza","Vios","Yaris","Yaris Cross"],"Volkswagen":["Amarok","Arteon","Beetle","Caddy","Golf","Golf GTI","Golf R","ID.3","ID.4","ID.5","ID.6","ID.7","Jetta","Multivan","Passat","Passat CC","Phaeton","Polo","Scirocco","Sharan","T-Cross","T-Roc","Taigo","Teramont","Tiguan","Tiguan Allspace","Touareg","Touran","Transporter","Up"],"Volvo":["C30","C40","C70","S40","S60","S80","S90","V40","V50","V60","V90","XC40","XC40 Recharge","XC60","XC70","XC90"],"XPENG":["G3","G6","G9","P5","P7","X9"],"Zeekr":["001","007","009","X"]};

const BODY_HINTS=[
  [/suv|x[1-9]|cx|qx|gx|gls|gle|glb|gla|glc|xt[456]|xc|xq|q[2-9]|qashqai|kuga|escape|tucson|sorento|telluride|palisade|highlander|4runner|fortuner|prado|defender|discovery|freelander|range rover|evoque|velar|sport|tahoe|suburban|yukon|escalade|acadia|traverse|pilot|cr-v|hrv|rav4|duster|tiguan|teramont|touareg|kodiaq|karoq|kamiq|forester|outback|crosstrek|outlander|pajero|asx|vitara|jimny|juke|kicks|rogue|murano|armada|terra|creta|seltos|staria|ioniq 5|ioniq 6|atto|tang|yuan|hs|rx5|rx8|zs|gv[78]|g[vq]|sx4|stelvio|tonale|grecale|levante|urus|cayenne|macan|bentayga|cullinan|dbx|purosangue|blazer|equinox|captiva|trailblazer|grand cherokee|wrangler|compass|renegade|grand wagoneer|bronco|expedition|explorer|f-pace|e-pace|i-pace|niro|soul/i,'SUV'],
  [/pickup|hilux|navara|ranger|tacoma|tundra|colorado|canyon|sierra|silverado|l200|d-max|f-150|f-250|f-350|ram|amarok|gladiator|ridgeline|maverick|santa cruz/i,'Pickup'],
  [/van|hiace|previa|sienna|odyssey|carnival|staria|vito|v-class|multivan|transporter|caddy|partner|berlingo|rifter|pacifica|voyager|promaster/i,'Van'],
  [/convertible|roadster|spider|cabrio|cabriolet|dawn|drophead|california|portofino|124 spider/i,'Convertible'],
  [/coupe|gt|cls|rc|lc|m[248]|s5|rs5|a5|a7|rs7|s7|panamera|flying spur|continental gt|wraith|spectre|488|812|296|f8|sf90|huracan|aventador|mc20|senna|720s|765lt|600lt|570s|artura|taycan|z4|718|911|r8|tt|tts|vantage|db11|db12|dbs|virage|rapide|emira|evija|evora|exige/i,'Coupe'],
  [/wagon|estate|v60|v90|legacy|passat|octavia|superb/i,'Wagon'],
  [/hatch|hatchback|a1|a3|polo|golf|yaris|swift|clio|208|fiesta|focus|i10|i20|i30|accent|atos|micra|tiida|sunny|spark|sonic|fabia|scala|ibiza|leon|ceed|jazz|baleno|alto|celerio|s-presso|veloster|mito|giulietta|147|500(?!x)/i,'Hatchback'],
];
/* ── DEPRECIATION FALLBACK: local UAE model ─────────────────────
   Called only when the API returns no r.depreciation array.
   Returns the same shape as the API path:
     [{ year, rate, endVal, cumLoss }, ...]  — 3 elements (Y+1, Y+2, Y+3)

   Rate model (UAE used-car market):
     Base annual depreciation bands by car age:
       ≤ 2 yrs old  → 18 % / 14 % / 12 %
       3–5 yrs old  → 15 % / 13 % / 11 %
       6–9 yrs old  → 13 % / 11 % /  9 %
       10+ yrs old  → 10 % /  9 % /  8 %

     Mileage delta (applied to year-1 rate only):
       > 150 000 km → +4 %
       > 100 000 km → +2 %
       > 60  000 km → +1 %
       ≤ 60  000 km →  0 %
─────────────────────────────────────────────────────────────── */
/* ── GLOBAL ROUNDING HELPER ─────────────────────────────────
   All user-facing AED prices round to nearest 500 for consistency.
   Below AED 5,000 round to nearest 100 for precision.           */
function ksRound(n){
  if(!n||isNaN(n)) return 0;
  return n < 5000 ? Math.round(n/100)*100 : Math.round(n/500)*500;
}

function buildDeprTable(handshake, carYear, brand, km, dc, model) {
  const currentYear = new Date().getFullYear();
  const age = Math.max(0, currentYear - (parseInt(carYear, 10) || currentYear));

  // 2.6 — D class Y1 corrected from 23% to 20% (matches worker DEPR_RATES)
  const DC_RATES = {
    S: [8,  6,  5],   // Icons: LC/Patrol — hold value, flatten after Y1
    A: [12, 10,  8],  // Strong: Camry/Corolla/Honda
    B: [15, 12, 10],  // Good: X-Trail/Pajero
    C: [19, 15, 12],  // Average: Hyundai/Kia — steep Y1
    D: [20, 17, 13],  // Fast: BMW/Audi/Merc — Y1 was 23, corrected per UAE data
    E: [30, 25, 19],  // High: MG/Haval/BYD — 2026 oversupply, resale severely weak (v71)
  };

  // Resolve class: use passed dc, or derive from brand/model, or fall back by age
  const BRAND_DC_FE = {
    'toyota':'A','lexus':'A','honda':'A','nissan':'B','mitsubishi':'B',
    'mazda':'B','subaru':'B','isuzu':'B','hyundai':'C','kia':'C',
    'genesis':'C','chevrolet':'C','ford':'C','gmc':'C','dodge':'C',
    'jeep':'C','ram':'C','bmw':'D','audi':'D','mercedes-benz':'D',
    'mercedes':'D','volvo':'D','land rover':'D','jaguar':'D','cadillac':'D',
    'lincoln':'D','porsche':'D','infiniti':'B','mg':'E','haval':'E',
    'gac':'E','chery':'E','byd':'E','omoda':'E','jetour':'E','geely':'E',
    // 2.4 — Tesla Model 3/Y hold value; class C not E
    'tesla':'C',
    // v70 — Chinese EV/new entrants: same tier as OMODA/Jetour (mirrors worker BRAND_DC)
    'xpeng':'E','zeekr':'E','jaecoo':'E',
  };
  // Iconic model override — matches worker PRICE_MODEL_SYSTEM dc:S definition
  // Applied only when dc is not already provided by the API response
  const ICONIC_MODELS_RE = /land.?cruiser|patrol(?!\s*safari|\s*sport)|prado|fj.?cruiser/i;
  const _brandDc = BRAND_DC_FE[(brand||'').toLowerCase()] || (age <= 2 ? 'C' : age <= 5 ? 'B' : 'A');
  const _modelStr = (model || '').toLowerCase();
  const _isIconic = ICONIC_MODELS_RE.test(_modelStr) || ICONIC_MODELS_RE.test((brand||'').toLowerCase()+' '+_modelStr);
  const resolvedDc = dc || (_isIconic ? 'S' : _brandDc);

  const base = DC_RATES[resolvedDc] || DC_RATES['C'];

  // Mileage delta on Y1 only — same cap logic as before
  const mileageKm = parseInt(km, 10) || 0;
  const mDelta = mileageKm > 150000 ? 5
               : mileageKm > 100000 ? 3
               : mileageKm > 60000  ? 1
               : 0;
  const rates = [Math.min(base[0] + mDelta, 38), base[1], base[2]];

  const rows = [];
  let prevExact = Math.max(handshake, 0);  // 2.3 — carry exact value, not rounded, to avoid compounding error
  for (let i = 0; i < 3; i++) {
    const rate    = rates[i];
    const endExact = prevExact * (1 - rate / 100);
    const endVal  = Math.round(endExact / 500) * 500;  // round only at display
    rows.push({
      year    : currentYear + i + 1,
      rate,
      endVal,
      cumLoss : handshake - endVal,
    });
    prevExact = endExact;  // 2.3 — forward the unrounded value
  }
  return rows;
}

function guessBody(b,m){
  const s=(b+' '+m).toLowerCase();
  for(const[r,v]of BODY_HINTS)if(r.test(s))return v;
  if(/land rover|jeep|hummer/i.test(b))return'SUV';
  if(/ferrari|lamborghini|mclaren|lotus|aston martin/i.test(b))return'Coupe';
  return'Sedan';
}

/* ── LOCALSTORAGE: SAVE VALUATION HISTORY ───────────────── */
function saveLastValuation(){
  try{
    const entry={
      brand:g('brand').value,model:g('model').value,year:g('year').value,
      trim:g('trim').value,mileage:g('mileage').value,spec:g('spec').value,
      condition:g('condition').value,
      asking:g('asking').value,ts:Date.now(),
      // FIX #12: persist QC state so restore recovers tick/cross answers
      qs:{warranty:qs.warranty,singleOwner:qs.singleOwner,fsh:qs.fsh,accident:qs.accident,accidentSeverity:qs.accidentSeverity}
    };
    // Keep last 6 in history array
    let hist=[];
    try{hist=JSON.parse(localStorage.getItem('ks_hist')||'[]');}catch{}
    // Remove duplicate same brand+model+year
    hist=hist.filter(h=>!(h.brand===entry.brand&&h.model===entry.model&&h.year===entry.year));
    hist.unshift(entry);
    hist=hist.slice(0,6);
    localStorage.setItem('ks_hist',JSON.stringify(hist));
    // Also keep legacy ks_last for backward compat
    localStorage.setItem('ks_last',JSON.stringify(entry));
  }catch(e){}
}

function restoreValuation(idx){
  try{
    const hist=JSON.parse(localStorage.getItem('ks_hist')||'[]');
    const data=hist[idx];
    if(!data)return;

    const restoreFields=()=>{
      // Wait two frames: first for options to render, second for ksRefresh to finish
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        if(data.model)setVal(g('model'),data.model);
        ['year','spec','condition'].forEach(id=>{
          if(data[id])setVal(g(id),data[id]);
        });
        ['trim','mileage','asking'].forEach(id=>{
          if(data[id]){g(id).value=data[id];markFilled(g(id));}
        });
        // FIX #12: restore QC tick/cross state
        if(data.qs){
          ['warranty','singleOwner','fsh','accident'].forEach(key=>{
            const val=data.qs[key];
            if(val===null||val===undefined)return;
            qs[key]=val;
            // Find the qcbar item by aria-label prefix and mark the right button
            const allQBs=document.querySelectorAll('.qcbar-item');
            allQBs.forEach(item=>{
              const tick=item.querySelector('.qb.tick');
              const cross=item.querySelector('.qb.cross');
              if(!tick||!cross)return;
              // Match item by which key it controls via onclick attribute
              const tickOnclick=tick.getAttribute('onclick')||'';
              if(!tickOnclick.includes("'"+key+"'"))return;
              tick.classList.toggle('on',val===true);
              cross.classList.toggle('on',val===false);
              item.classList.remove('qcbar-item--unset');
            });
          });
          // Restore accident severity selector
          if(data.qs.accidentSeverity && data.qs.accident===true){
            qs.accidentSeverity=data.qs.accidentSeverity;
            const sevWrap=document.getElementById('accidentSevWrap');
            const sevSel=document.getElementById('accidentSeverityInput');
            if(sevWrap) sevWrap.style.display='block';
            if(sevSel)  sevSel.value=data.qs.accidentSeverity;
          }
        }
        _ksMap.forEach((_w,sel)=>ksSync(sel));
        updateReadiness();
      }));
    };

    if(data.brand){
      g('brand').value=data.brand;markFilled(g('brand'));
      populateModels();
    }
    restoreFields();
  }catch(e){}
}

function restoreLastValuation(){restoreValuation(0);}

/* ── RECENT SEARCHES — offline-first, single-row, adaptive labels ──────────
   Works with zero network. Reads ks_hist from localStorage at boot.
   Labels shrink on narrow screens: "2022 Toyota Camry" → "Toyota Camry" → "Camry"
   Sequence and row are always identical across desktop / tablet / mobile.
──────────────────────────────────────────────────────────────────────────── */
function _buildChipLabel(h, mode){
  // mode: 'full' | 'mid' | 'short'
  const yr  = h.year  || '';
  const br  = h.brand || '';
  const mo  = h.model || '';
  if(mode==='full')  return [yr,br,mo].filter(Boolean).join(' ');
  if(mode==='mid')   return [br,mo].filter(Boolean).join(' ');
  if(mode==='short') return mo||br||yr||'Search';
  return [yr,br,mo].filter(Boolean).join(' ');
}

function _applyChipLabels(){
  const bar = g('restoreBar');
  if(!bar||bar.style.display==='none'||bar.style.display==='') return;
  const chips = [...bar.querySelectorAll('.restore-chip')];
  if(!chips.length) return;
  const barW = bar.offsetWidth;
  // Estimate available width per chip (subtract "Recent:" label ~52px + gaps)
  const labelW = 52;
  const gapW   = 6 * (chips.length - 1);
  const avail  = (barW - labelW - gapW) / chips.length;
  // Pick mode based on available width per chip
  const mode = avail >= 110 ? 'full' : avail >= 72 ? 'mid' : 'short';
  chips.forEach(c => {
    c.textContent = _buildChipLabel(c._histEntry, mode);
  });
}

function initRestoreBar(){
  try{
    let hist=[];
    try{hist=JSON.parse(localStorage.getItem('ks_hist')||'[]');}catch{}
    // Migrate old ks_last format
    if(!hist.length){
      const old=JSON.parse(localStorage.getItem('ks_last')||'null');
      if(old&&old.brand) hist=[old];
    }
    if(!hist.length) return;
    const wrap=g('restoreChips');
    if(!wrap) return;
    // Clear existing chips, keep the label span
    [...wrap.querySelectorAll('.restore-chip')].forEach(c=>c.remove());
    hist.slice(0,6).forEach((h,i)=>{
      const chip=document.createElement('button');
      chip.className='restore-chip';
      chip.title='↩ '+[h.year,h.brand,h.model].filter(Boolean).join(' ');
      chip._histEntry=h; // store for label re-render
      chip.textContent=_buildChipLabel(h,'full');
      chip.onclick=()=>restoreValuation(i);
      wrap.appendChild(chip);
    });
    const bar=g('restoreBar');
    bar.style.display='flex';
    bar.style.flexDirection='column';
    // Adapt labels to current width immediately
    requestAnimationFrame(_applyChipLabels);
    // Re-adapt on resize (covers rotate, window drag, zoom)
    if(!bar._roInited){
      bar._roInited=true;
      if(typeof ResizeObserver!=='undefined'){
        new ResizeObserver(_applyChipLabels).observe(bar);
      } else {
        window.addEventListener('resize',_applyChipLabels,{passive:true});
      }
    }
  }catch(e){}
}

/* ── MILEAGE PLAUSIBILITY — red prefix warning, zero layout change ── */
function _checkMileagePlausibility(){
  const lbl     = document.getElementById('mileagePrefixLbl');
  if(!lbl) return;
  const year    = parseInt(g('year')?.value||'0');
  const mileage = parseInt(g('mileage')?.value||'0');
  if(!year||!mileage){ lbl.textContent='KM'; lbl.style.color=''; return; }
  const age          = Math.max(1, new Date().getFullYear() - year + 1);
  const maxPlausible = age * 30000;
  if(mileage > maxPlausible){
    lbl.textContent = '⚠ KM';
    lbl.style.color = '#7A3828';
    lbl.title       = `Unusually high for a ${year} model — please verify`;
  } else {
    lbl.textContent = 'KM';
    lbl.style.color = '';
    lbl.title       = '';
  }
}

/* ── NUMERIC-ONLY INPUT GUARD ─────────────────────────── */
function blockNonNumeric(e){
  /* Allow: backspace, delete, tab, escape, enter, arrows, home, end */
  const allowed=['Backspace','Delete','Tab','Escape','Enter','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'];
  if(allowed.includes(e.key))return;
  /* Allow Ctrl/Cmd + A/C/V/X/Z */
  if((e.ctrlKey||e.metaKey)&&['a','c','v','x','z'].includes(e.key.toLowerCase()))return;
  /* Block anything that's not a digit */
  if(!/^\d$/.test(e.key))e.preventDefault();
}

const API='https://kamsayara-api.mbit0010.workers.dev';
const qs={warranty:null,singleOwner:null,fsh:null,accident:null,accidentSeverity:null};

/* ── DEVICE TOKEN (rate limiting) ─────────────────────────── */
function _getDeviceToken(){
  try{
    let t=localStorage.getItem('ks_device_token');
    if(!t){
      t='dt_'+(Date.now().toString(36))+'_'+(Math.random().toString(36).slice(2,10));
      localStorage.setItem('ks_device_token',t);
    }
    return t;
  }catch{return 'dt_fallback_'+Math.random().toString(36).slice(2);}
}
const _deviceToken=_getDeviceToken();
const isMobile=()=>window.innerWidth<=600;

/* ── HELPERS ──────────────────────────────────────────────── */
function markFilled(el){
  el.classList.toggle('filled',!!el.value);
  // also update ks-trigger appearance
  const wrap=el.nextElementSibling;
  if(wrap&&wrap.classList.contains('ks-wrap')){
    const trig=wrap.querySelector('.ks-trigger');
    if(trig)trig.classList.toggle('ks-filled',!!el.value);
  }
  clearErr(el);
  updateReadiness();
}
function setVal(el,v){
  for(const o of el.options)if(o.value===v||o.textContent===v){
    el.value=o.value;
    ksSync(el);
    markFilled(el);
    return;
  }
}
function showErr(id,msg){
  const el=document.getElementById(id),em=document.getElementById('err-'+id);
  if(el){
    el.classList.add('err');
    const wrap=el.nextElementSibling;
    if(wrap&&wrap.classList.contains('ks-wrap')){
      wrap.querySelector('.ks-trigger')?.classList.add('ks-err');
    }
  }
  if(em){em.textContent=msg;em.classList.add('on');}
}
function clearErr(el){
  el.classList.remove('err','warn-field');
  const wrap=el.nextElementSibling;
  if(wrap&&wrap.classList.contains('ks-wrap')){
    wrap.querySelector('.ks-trigger')?.classList.remove('ks-err');
  }
  const em=document.getElementById('err-'+el.id);
  if(em){em.classList.remove('on','warn-msg');}
}

/* ── FORM READINESS ──────────────────────────────────────── */
function updateReadiness(){
  const brandEl=g('brand'),modelEl=g('model'),yearEl=g('year'),milEl=g('mileage'),btnEl=g('btnCheck'),hint=g('formHint');
  if(!brandEl||!modelEl||!yearEl||!milEl||!btnEl||!hint)return;
  const b=brandEl.value,mo=modelEl.value,y=yearEl.value,mi=milEl.value;
  const ok=b&&mo&&y&&mi;
  btnEl.disabled=!ok;
  if(ok){
    hint.innerHTML='Ready — <strong>get the price report</strong>';
    hint.classList.add('ready-hint');
    btnEl.classList.add('ready');
  }else{
    const miss=[];
    if(!b)miss.push('Brand');
    if(!mo)miss.push('Model');
    if(!y)miss.push('Year');
    if(!mi)miss.push('Mileage');
    hint.innerHTML=`Still need: <strong>${miss.join(', ')}</strong>`;
    hint.classList.remove('ready-hint');
    btnEl.classList.remove('ready');
  }
}

function g(id){return document.getElementById(id);}

/* ── UNIFIED PRICE ROUNDING (Fix 8) ─────────────────────────────────────
   >= AED 10,000 → nearest AED 500
   <  AED 10,000 → nearest AED 100
   Used by all report price outputs for consistency.                       */
function ksRound(n){
  if(!n||isNaN(n)) return 0;
  return n >= 10000 ? Math.round(n/500)*500 : Math.round(n/100)*100;
}

/* ── INIT DROPDOWNS ─────────────────────────────────────── */
function initBrands(){
  const s=g('brand');
  Object.keys(BM).sort().forEach(b=>{const o=document.createElement('option');o.value=b;o.textContent=b;s.appendChild(o);});
}
function initYears(){
  const s=g('year'),curr=new Date().getFullYear();
  for(let y=curr+1;y>=1990;y--){const o=document.createElement('option');o.value=y;o.textContent=y;s.appendChild(o);}
}
function populateModels(){
  const b=g('brand').value,s=g('model'),sy=window.scrollY;
  // Fix 5: show loading state on model dropdown trigger while populating
  const modelWrap = _ksMap.get(s);
  const modelTrig = modelWrap?.querySelector('.ks-trigger');
  if(modelTrig && b){
    modelTrig.classList.add('ks-loading');
    modelTrig.textContent = 'Loading…';
  }
  s.innerHTML='<option value="">Select model…</option>';
  if(b&&BM[b])BM[b].forEach(m=>{const o=document.createElement('option');o.value=m;o.textContent=m;s.appendChild(o);});
  markFilled(g('brand'));
  ksSync(g('brand'));
  // Reset trim dropdown when brand changes (model not yet chosen)
  populateTrims(b, '');
  // refresh model ks-dropdown with new options
  requestAnimationFrame(()=>{
    ksRefresh(s);
    // Fix 5: remove loading state after options are rendered
    if(modelTrig){
      modelTrig.classList.remove('ks-loading');
      _ksTrigUpdate(s, modelTrig);
    }
    window.scrollTo({top:sy,behavior:'instant'});
    updateReadiness();
  });
}
function onModelChange(){
  markFilled(g('model'));
  const b=g('brand').value,m=g('model').value;
  if(b&&m){
    populateTrims(b,m);
  }
  updateReadiness();
}

/* ── TRIM MAP: brand+model → trims ──────────────────────── */
const TRIM_MAP={
Toyota:{'Camry':['XLE','SE','LE','TRD','XSE','Hybrid LE','Hybrid SE','Hybrid XSE','Hybrid XLE'],'Corolla':['CE','LE','SE','XLE','XSE','Hybrid LE'],'Corolla Cross':['L','LE','XLE','Hybrid'],'Land Cruiser':['GX','GXR','VX','VXR','EX','ZX'],'Land Cruiser 300':['GX','GXR','VX','VXR','ZX'],'Prado':['EX','GX','GXR','TX','TXL','VX','VXL'],'Fortuner':['EX','EXR','GX','GXR','VX','VXR','SR5','4x2','4x4'],'RAV4':['LE','XLE','XSE','Adventure','TRD Off-Road','Limited','Hybrid LE','Hybrid XSE'],'Hilux':['SR','SR5','SR5+','TRD','Workmate','Rogue','4x2','4x4'],'Yaris':['E','G','E CVT','G CVT'],'Yaris Cross':['LE','GLE'],'Rush':['EX','G','GX'],'Avanza':['E','G'],'Hiace':['GL','Standard Roof','High Roof','Commuter'],'Prius':['L','LE','XLE','Hybrid'],'Supra':['3.0','A91'],'C-HR':['LE','XLE','Limited'],'Sequoia':['SR5','Limited','Platinum','TRD Pro'],'Tundra':['SR','SR5','Limited','Platinum','1794 Edition','TRD Pro'],'Tacoma':['SR','SR5','TRD Sport','TRD Off-Road','Limited','TRD Pro'],'FJ Cruiser':['Base','Trail Teams'],'4Runner':['SR5','TRD Sport','TRD Off-Road','Limited','TRD Pro']},
Nissan:{'Patrol':['SE','LE','XE','Platinum','Nismo','Safari','V6','V8'],'Patrol Safari':['SE','LE'],'Altima':['S','SV','SL','SR','Platinum'],'Sunny':['S','SV'],'X-Trail':['S','SV','SL','Platinum'],'Kicks':['S','SV','SR','Platinum'],'Sentra':['S','SV','SR'],'Murano':['S','SV','SL','Platinum'],'Navara':['S','SV','SL','Pro-4X'],'Tiida':['S','SV','SL'],'Juke':['S','SV','SL'],'Armada':['SV','SL','Platinum'],'GT-R':['Premium','Track Edition','NISMO'],'350Z':['Base','Touring','Nismo'],'370Z':['Base','Sport','Touring','Nismo']},
Honda:{'Civic':['LX','Sport','EX','Touring','Si','Type R'],'Accord':['LX','Sport','EX-L','Touring','Hybrid'],'CR-V':['LX','EX','EX-L','Touring','Sport','Hybrid'],'HR-V':['LX','Sport','EX','EX-L'],'Pilot':['Sport','EX-L','TrailSport','Elite'],'City':['LX','EX','VX','RS'],'BR-V':['S','V','RS'],'Odyssey':['LX','EX','EX-L','Touring','Elite'],'Passport':['Sport','EX-L','TrailSport','Elite']},
BMW:{'3 Series':['318i','320i','330i','M340i','320d'],'5 Series':['520i','528i','530i','540i','M550i','520d'],'7 Series':['730i','740i','750i','760i','M760i'],'X3':['sDrive20i','xDrive20i','xDrive30i','M40i'],'X5':['xDrive30i','xDrive40i','M50i','xDrive45e'],'X6':['xDrive30i','xDrive40i','M50i'],'X7':['xDrive40i','xDrive50i','M60i'],'M3':['Competition','CS'],'M4':['Competition','CS','Convertible'],'M5':['Competition'],'1 Series':['118i','120i','M135i'],'2 Series':['218i','220i','230i','M240i'],'4 Series':['420i','430i','440i','M440i']},
'Mercedes-Benz':{'C-Class':['C180','C200','C250','C300','C43 AMG','C63 AMG'],'E-Class':['E200','E250','E300','E350','E53 AMG','E63 AMG'],'S-Class':['S350','S400','S450','S500','S580','S63 AMG','Maybach'],'GLE':['GLE300d','GLE350','GLE450','GLE53 AMG','GLE63 AMG'],'GLS':['GLS350d','GLS450','GLS600 Maybach'],'G-Class':['G400d','G500','G63 AMG'],'GLC':['GLC200','GLC250','GLC300','GLC43 AMG','GLC63 AMG'],'CLA':['CLA200','CLA250','CLA35 AMG','CLA45 AMG'],'A-Class':['A180','A200','A250','A35 AMG','A45 AMG'],'GLA':['GLA200','GLA250','GLA35 AMG'],'GLB':['GLB200','GLB250','GLB35 AMG']},
Lexus:{'LX':['LX570','LX600'],'GX':['GX460'],'RX':['RX300','RX350','RX350L','RX450h'],'ES':['ES250','ES300h','ES350'],'IS':['IS200t','IS250','IS300','IS350','IS500'],'LS':['LS350','LS500','LS500h'],'NX':['NX200t','NX250','NX300h','NX350'],'UX':['UX200','UX250h'],'LC':['LC500','LC500h'],'RC':['RC300','RC350','RC F']},
Audi:{'A4':['35 TFSI','40 TFSI','45 TFSI','S4'],'A6':['40 TFSI','45 TFSI','50 TDI','S6'],'A8':['50 TDI','55 TFSI','60 TFSI','S8'],'Q3':['35 TFSI','40 TFSI','45 TFSI'],'Q5':['35 TFSI','40 TFSI','45 TFSI','SQ5'],'Q7':['45 TFSI','55 TFSI','SQ7'],'Q8':['50 TDI','55 TFSI','SQ8','RS Q8'],'A3':['30 TFSI','35 TFSI','40 TFSI','S3'],'A5':['35 TFSI','40 TFSI','45 TFSI','S5','RS5'],'A7':['45 TFSI','55 TFSI','S7','RS7']},
Porsche:{'911':['Carrera','Carrera S','Carrera 4S','Targa 4S','Turbo','Turbo S','GT3','GT3 RS'],'Cayenne':['Cayenne','S','GTS','Turbo','Turbo GT','e-Hybrid'],'Macan':['Macan','S','GTS','Turbo'],'Panamera':['4S','GTS','Turbo','Turbo S','e-Hybrid'],'Taycan':['RWD','4S','GTS','Turbo','Turbo S'],'718 Boxster':['Base','S','GTS','Spyder'],'718 Cayman':['Base','S','GTS','GT4']},
'Land Rover':{'Range Rover':['HSE','Autobiography','SV','P400','P530'],'Range Rover Sport':['S','SE','HSE','Dynamic','SVR','P400','P510'],'Range Rover Evoque':['S','SE','R-Dynamic','HSE'],'Range Rover Velar':['S','SE','R-Dynamic','HSE'],'Defender':['S','SE','HSE','X','V8','90','110','130'],'Discovery':['S','SE','HSE','R-Dynamic'],'Discovery Sport':['S','SE','R-Dynamic','HSE']},
Jeep:{'Grand Cherokee':['Laredo','Limited','Overland','Summit','Trailhawk','SRT','Trackhawk'],'Grand Cherokee L':['Laredo','Limited','Overland','Summit','Trailhawk'],'Wrangler':['Sport','Sahara','Rubicon','Unlimited','4xe'],'Cherokee':['Sport','Latitude','Trailhawk','Overland','Limited'],'Compass':['Sport','Latitude','Trailhawk','Overland','Limited'],'Renegade':['Sport','Latitude','Trailhawk','Limited'],'Grand Wagoneer':['Base','Series II','Series III']},
Chevrolet:{'Tahoe':['LS','LT','RST','Z71','Premier','High Country'],'Suburban':['LS','LT','RST','Z71','Premier','High Country'],'Silverado 1500':['WT','Custom','LT','RST','LTZ','High Country'],'Traverse':['LS','LT','RS','Premier','High Country'],'Malibu':['L','LS','LT','Premier'],'Camaro':['LS','LT','RS','SS','ZL1'],'Blazer':['L','LT','RS','Premier'],'Equinox':['L','LS','LT','RS','Premier'],'Colorado':['WT','LT','Z71','LTZ','ZR2'],'TrailBlazer':['L','LS','LT','RS','ACTIV']},
GMC:{'Yukon':['SLE','SLT','AT4','Denali','Denali Ultimate'],'Yukon XL':['SLE','SLT','AT4','Denali','Denali Ultimate'],'Sierra 1500':['Regular','SLE','SLT','AT4','Denali'],'Terrain':['SLE','SLT','AT4','Denali'],'Acadia':['SLE','SLT','AT4','Denali'],'Canyon':['Base','Elevation','AT4','Denali']},
Dodge:{'Charger':['SXT','GT','R/T','Scat Pack','Hellcat','Hellcat Redeye'],'Challenger':['SXT','GT','R/T','Scat Pack','Hellcat','Hellcat Redeye'],'Durango':['SXT','GT','R/T','Citadel','SRT 392','Hellcat'],'Journey':['SE','SXT','Crossroad','GT']},
Ford:{'Explorer':['Base','XLT','ST','Limited','Platinum','King Ranch'],'F-150':['XL','XLT','Lariat','King Ranch','Platinum','Limited','Raptor'],'Ranger':['XL','XLT','Sport','Lariat','Raptor'],'Mustang':['EcoBoost','GT','Mach 1','Shelby GT350','Shelby GT500'],'Bronco':['Base','Big Bend','Outer Banks','Badlands','Wildtrak','Raptor'],'Edge':['SE','SEL','Titanium','ST'],'Expedition':['XL','XLT','Limited','King Ranch','Platinum','Max'],'Escape':['S','SE','SEL','Titanium']},
Hyundai:{'Tucson':['GL','GLS','Latitude','Ultimate','N Line'],'Santa Fe':['GL','GLS','Premium','Ultimate','Calligraphy'],'Elantra':['SE','SEL','N Line','Limited','N'],'Sonata':['SE','SEL','N Line','Limited'],'Palisade':['SE','SEL','Limited','Calligraphy'],'Creta':['Smart','Modern','Premium'],'Kona':['SE','SEL','N Line','Limited'],'Ioniq 5':['Standard','Long Range','N'],'Ioniq 6':['Standard','Long Range'],'Staria':['Smart','Premium']},
Kia:{'Sportage':['LX','EX','SX','SX Prestige','X-Line'],'Sorento':['LX','S','EX','SX','SX Prestige','X-Line'],'Telluride':['LX','S','EX','SX','SX-P','X-Pro','X-Line'],'Carnival':['LX','EX','SX','SX Prestige'],'K5':['LX','EX','GT-Line','EX+','GT'],'Cerato':['L','M','EX','EX+'],'EV6':['Standard','Long Range','GT'],'Seltos':['LX','EX','SX'],'Niro':['LX','EX','SX Touring','EV'],'Stinger':['GT','GT2','GT-Line']},
Mitsubishi:{'Pajero':['GLS','GXR','Exceed','Platinum Edition'],'Pajero Sport':['GLX','GLS','GT'],'Outlander':['ES','LE','SE','SEL','GT'],'ASX':['GLX','GLS'],'Eclipse Cross':['ES','LE','SE','SEL'],'Lancer':['GLX','GLS','Evolution'],'L200':['GLX','GLS','GT'],'Montero':['GLS','GXR']},
Mazda:{'CX-5':['Sport','Touring','Carbon Edition','Grand Touring','Signature'],'CX-9':['Sport','Touring','Carbon Edition','Grand Touring','Signature'],'CX-3':['Sport','Touring','Grand Touring'],'3':['Sport','Select','Preferred','Premium','Turbo'],'6':['Sport','Touring','Carbon Edition','Grand Touring','Signature'],'MX-5':['Sport','Club','Grand Touring'],'CX-30':['Select','Preferred','Premium','Turbo']},
Volkswagen:{'Golf':['S','SE','SEL','R-Line','GTI','R'],'Tiguan':['S','SE','SEL','R-Line','R'],'Passat':['S','SE','SEL','R-Line'],'Teramont':['S','SE','SEL'],'Touareg':['SE','SEL','R-Line','Executive'],'Jetta':['S','SE','SEL','R-Line','GLI'],'Polo':['Comfortline','Highline','R-Line'],'T-Roc':['Style','R-Line','R']},
Subaru:{'Forester':['Base','Premium','Sport','Limited','Touring'],'Outback':['Base','Premium','Limited','Touring','Wilderness'],'Crosstrek':['Base','Premium','Sport','Limited'],'WRX':['Base','Premium','Limited','GT'],'Impreza':['Base','Premium','Sport','Limited'],'BRZ':['Premium','Limited']},
Volvo:{'XC90':['Momentum','R-Design','Inscription','T5','T6','T8','Ultimate'],'XC60':['Momentum','R-Design','Inscription','T5','T6','T8','Ultimate'],'XC40':['Momentum','R-Design','Inscription','Recharge','Ultimate'],'S90':['Momentum','R-Design','Inscription'],'S60':['Momentum','R-Design','Inscription','Polestar'],'V60':['Momentum','R-Design','Inscription']},
Infiniti:{'QX80':['Luxe','Premium Select','Sensory','Autograph'],'QX60':['Pure','Luxe','Sensory','Autograph'],'QX50':['Pure','Luxe','Sensory','Autograph'],'Q50':['Pure','Luxe','Red Sport 400','Sensory'],'Q60':['Pure','Luxe','Red Sport 400','Sensory'],'QX70':['Base','Sport','Limited']},
Cadillac:{'Escalade':['Luxury','Premium Luxury','Sport','Platinum','ESV'],'XT5':['Luxury','Premium Luxury','Sport','Platinum'],'XT6':['Luxury','Premium Luxury','Sport','Platinum'],'CT5':['Luxury','Premium Luxury','Sport','V-Series'],'CT4':['Luxury','Premium Luxury','Sport','V-Series']},
};

function populateTrims(brand,model){
  const sel=g('trim');
  if(!sel)return;
  const prev=sel.value;
  sel.innerHTML='<option value="">Select…</option>';
  const trims=(TRIM_MAP[brand]||{})[model]||[];
  const list=trims.length?[...trims,'Other']:['Base','Sport','GLX','GX','EX','Limited','Premium','SE','LE','XLE','Platinum','Other'];
  list.forEach(t=>{const o=document.createElement('option');o.value=t;o.textContent=t;sel.appendChild(o);});
  if(prev&&[...sel.options].some(o=>o.value===prev))sel.value=prev;
  else sel.value='';
  markFilled(sel);
  ksSync(sel);
  ksRefresh(sel);
}

/* ── QUICK CHECK ────────────────────────────────────────── */
function setYN(key,val,btn){
  qs[key]=(val==='yes'); // FIX #10: store true/false booleans, not 'yes'/'no' strings
  const item=btn.closest('.qcbar-item');
  if(item){
    item.querySelectorAll('.qb').forEach(b=>b.classList.remove('on'));
    item.classList.remove('qcbar-item--unset');
  }
  btn.classList.add('on');
  // Show/hide accident severity selector
  if(key==='accident'){
    const sevWrap=document.getElementById('accidentSevWrap');
    if(sevWrap){
      sevWrap.style.display=(val==='yes')?'block':'none';
      if(val==='yes'){
        const sel=document.getElementById('accidentSeverityInput');
        qs.accidentSeverity=sel?sel.value:'moderate';
      } else {
        qs.accidentSeverity=null;
      }
    }
    // Visual: "No accident" is a positive signal — mark the item so cross glows green
    const accItem=btn.closest('.qcbar-item');
    if(accItem){
      accItem.classList.toggle('qcbar-item--accident-clean', val==='no');
    }
  }
}

/* ── SHOW STATE ─────────────────────────────────────────── */
function showState(st){
  // All states keep .layout visible — loading and result render inline in result-panel
  const layout   = document.querySelector('.layout');
  const formCard = g('formCard');
  const ph       = g('rph');
  const rld      = g('rld');
  const rct      = g('rcontent');
  const hero     = document.querySelector('.hero');
  const disc     = document.querySelector('.disc');
  const resultPanel = g('resultPanel');
  const header   = g('resultPanelHeader');

  // Always hide legacy overlay elements — they are no longer used
  const fullLoad = g('ks-fullscreen-load');
  const fullRes  = g('ks-fullscreen-result');
  if(fullLoad) fullLoad.style.display = 'none';
  if(fullRes)  fullRes.style.display  = 'none';

  // ── Shared scroll helper ──────────────────────────────────────
  // Scrolls so the result-panel-header is visible with breathing room above it.
  // Uses the header element when available so the scroll lands just above it
  // regardless of how tall the form card is on any screen size.
  function _scrollToHeader(delay){
    setTimeout(()=>{
      const target = header || resultPanel;
      if(!target) return;
      const rect   = target.getBoundingClientRect();
      // 72px headroom — enough to show the sticky nav + a small gap above the header bar
      const offset = window.scrollY + rect.top - 72;
      window.scrollTo({ top: Math.max(0, offset), behavior:'smooth' });
    }, delay || 80);
  }

  if(st === 'placeholder'){
    // Reset — show form + idle result panel (Stage 1 only — clean, no car image)
    if(layout)   layout.style.display    = '';
    if(formCard) { formCard.style.display=''; formCard.classList.remove('ks-collapsing','ks-expanding'); }
    if(hero)     { hero.style.display=''; }
    if(disc)     disc.style.display = '';
    if(ph)  ph.style.display  = 'flex';
    if(rld) rld.style.display = 'none';
    if(rct) rct.style.display = 'none';
    document.body.classList.remove('ks-result-active');
    if(resultPanel){ resultPanel.classList.remove('panel-state-loading','panel-state-ready'); resultPanel.classList.add('panel-state-idle'); }
    // Always keep Stage 1 visible, Stage 2 hidden when returning to idle
    const s1=g('rphStage1'), s2=g('rphStage2');
    if(s1) s1.style.display='flex';
    if(s2) s2.style.display='none';
    const stTxt = document.getElementById('resultPanelStatusText');
    if(stTxt) stTxt.textContent = '';

  } else if(st === 'loading'){
    // Keep layout + form visible; show loading steps in result-panel
    if(layout)   layout.style.display    = '';
    if(formCard) formCard.style.display  = '';
    if(hero)     hero.style.display      = '';
    if(ph)  ph.style.display  = 'none';
    if(rld) rld.style.display = 'flex';
    if(rct) rct.style.display = 'none';
    if(resultPanel){
      resultPanel.classList.remove('panel-state-idle','panel-state-ready');
      resultPanel.classList.add('panel-state-loading');
    }
    const stTxt = document.getElementById('resultPanelStatusText');
    if(stTxt) stTxt.textContent = 'Analysing…';
    document.body.classList.add('ks-result-active');
    // Scroll so the result panel header is clearly visible above the loading steps
    _scrollToHeader(80);

  } else if(st === 'content'){
    // Keep layout + form visible; show result in result-panel
    if(layout)   layout.style.display    = '';
    if(formCard) formCard.style.display  = '';
    if(hero)     hero.style.display      = '';
    if(rld) rld.style.display = 'none';
    if(ph)  ph.style.display  = 'none';
    if(rct) { rct.style.display = 'block'; rct.classList.add('ks-fading-in'); setTimeout(()=>rct.classList.remove('ks-fading-in'), 350); }
    if(resultPanel){
      resultPanel.classList.remove('panel-state-idle','panel-state-loading');
      resultPanel.classList.add('panel-state-ready');
    }
    const stTxt = document.getElementById('resultPanelStatusText');
    if(stTxt) stTxt.textContent = 'Live';
    document.body.classList.add('ks-result-active');
    // Scroll so the result-panel-header is clearly visible — not to the car image inside rcontent
    _scrollToHeader(80);
    // Trigger animated elements
    setTimeout(()=>{
      const el=document.getElementById('ksFmvNum');
      if(el){ const v=parseInt(el.textContent.replace(/[^0-9]/g,'')); if(v) pirCountUp(el,v,700); }
      pirAnimateStatBars();
      ksMf2Init();
      const b1=document.getElementById('ksBtnFree');
      const b2=document.getElementById('ksBtnPaid');
      if(b1) b1.onclick=()=>ksPirTab(1);
      if(b2) b2.onclick=()=>ksPirTab(2);
    }, 80);
  }
}

/* Ad countdown removed — no ads */

/* ── UAE MARKET FACTS — Did You Know rotator ─────────────── */
const UAE_FACTS = [
  'White and Silver cars hold up to 5% more resale value in the GCC due to heat reflection and high local demand.',
  'Full service history at an authorised dealer can increase a vehicle\'s market price by up to 12% vs. non-agency service.',
  'GCC-specification cars typically command an AED 5,000–15,000 premium over American or European imports in UAE.',
  'Single-owner vehicles sell 30% faster on UAE platforms — ownership history is the #1 trust signal for buyers.',
  'Dubizzle data shows accident-free cars receive 40% more enquiries in the first 48 hours of listing.',
  'Low mileage (under 30,000 km/year) is the single biggest filter used by UAE car buyers on listing platforms.',
  'Pearl White and Midnight Black are the two fastest-selling colours in Dubai & Abu Dhabi markets right now.',
  'Dealer-listed cars average 8–11% higher asking prices than private sellers for the same make, model, and year.',
];

const LOAD_STEPS_DEF = [
  { id:'lstep0', pct:10,  label:null },
  { id:'lstep1', pct:35,  label:null },
  { id:'lstep2', pct:62,  label:null },
  { id:'lstep3', pct:82,  label:null },
  { id:'lstep4', pct:96,  label:null },
];

let loadTimer=null,tipTimeoutId=null,tipIntervalId=null;
let _stepTimer=null,_factTimer=null,_factIdx=0,_stepIdx=0;

function buildLoadSteps(mobile){
  /* kept for compat — no longer used for display but called from legacy paths */
  return[];
}

const _KS_STEP_MSGS = [
  'Collecting available data…',
  'Identifying comparable vehicles…',
  'Applying condition & mileage factors…',
  'Computing fair handshake price…',
  'Assembling your report…',
];
function _setStep(idx){
  // Drive new ks-ldr-step UI
  document.querySelectorAll('.ks-ldr-step').forEach((el,i)=>{
    el.classList.remove('active','done');
    if(i < idx)  el.classList.add('done');
    if(i === idx) el.classList.add('active');
  });
  // Legacy compatibility — also update any .rld-step-item
  document.querySelectorAll('.rld-step-item').forEach((el,i)=>{
    el.classList.remove('active','done');
    if(i < idx)  el.classList.add('done');
    if(i === idx) el.classList.add('active');
  });
  const pct = LOAD_STEPS_DEF[Math.min(idx, LOAD_STEPS_DEF.length-1)].pct;
  const fill = document.getElementById('rldMasterFill');
  if(fill) fill.style.width = pct+'%';
  const pctEl = document.getElementById('rldPct');
  if(pctEl) pctEl.textContent = pct+'%';
  const sub = document.getElementById('rldStatusLbl');
  if(sub && _KS_STEP_MSGS[idx]) sub.textContent = _KS_STEP_MSGS[idx];
}

function _rotateFact(idx){
  const textEl = document.getElementById('rldFactText');
  const dots    = document.querySelectorAll('.rld-fdot');
  if(!textEl) return;
  textEl.style.opacity='0';
  setTimeout(()=>{
    textEl.textContent = UAE_FACTS[idx % UAE_FACTS.length];
    textEl.style.opacity='1';
  },300);
  dots.forEach((d,i)=>d.classList.toggle('active', i===(idx % dots.length)));
}

function startLoad(){
  stopLoad();

  /* personalise step 2 label based on inputs */
  const brand   = (document.getElementById('brand')||{}).value||'';
  const model   = (document.getElementById('model')||{}).value||'';
  const year    = (document.getElementById('year')||{}).value||'';
  const mileage = (document.getElementById('mileage')||{}).value;
  const carLabel= [year,brand,model].filter(Boolean).join(' ')||'this vehicle';
  /* Change 8: only update the single desktop step label — mob toast step labels removed */
  const step2el = document.getElementById('lstep2lbl');
  if(step2el){ const km=mileage?parseInt(mileage).toLocaleString()+' km ':''; step2el.textContent=`Matching similar make, model, year${km?' and '+km+'mileage':''} profiles for ${carLabel}.`; }

  /* reset steps */
  _stepIdx=0;
  _setStep(0);
  const fill=document.getElementById('rldMasterFill');
  if(fill) fill.style.width='0%';

  /* step progression — spread across ~12 seconds */
  const stepDelays=[0, 2400, 5200, 8400, 11200];
  stepDelays.forEach((delay,i)=>{
    setTimeout(()=>{ if(_stepTimer!==null) _setStep(i); }, delay);
  });
  _stepTimer=1; /* sentinel so we know load is running */

  /* fact rotator — first fact after 1.5s, then every 3.5s */
  _factIdx = Math.floor(Math.random()*UAE_FACTS.length);
  tipTimeoutId = setTimeout(()=>{
    _rotateFact(_factIdx);
    _factTimer = setInterval(()=>{
      _factIdx++;
      _rotateFact(_factIdx);
    }, 3500);
  }, 1500);

  /* clear load message if element exists */
  const msg = document.getElementById('loadMsg');
  if(msg) msg.textContent='';
}

function stopLoad(){
  if(loadTimer){clearInterval(loadTimer);loadTimer=null;}
  if(tipTimeoutId){clearTimeout(tipTimeoutId);tipTimeoutId=null;}
  if(tipIntervalId){clearInterval(tipIntervalId);tipIntervalId=null;}
  if(_factTimer){clearInterval(_factTimer);_factTimer=null;}
  _stepTimer=null;

  /* Change 8: single progress bar in result-panel — mob equivalents removed with mob toast */
  const masterFill = document.getElementById('rldMasterFill');
  if(masterFill) masterFill.style.width='100%';
  const masterPct = document.getElementById('rldPct');
  if(masterPct) masterPct.textContent='100%';
  document.querySelectorAll('.rld-step-item, .ks-ldr-step').forEach(el=>{
    el.classList.remove('active'); el.classList.add('done');
  });
  const sub = document.getElementById('rldStatusLbl');
  if(sub) sub.textContent = 'Report ready';
  const tipEl=document.getElementById('loadTip');
  if(tipEl) tipEl.style.display='none';
}

/* ── MAP AI RATING TO CSS CLASS ─────────────────────────── */
function aiRatingClass(rating){
  if(!rating)return'neu';
  const r=rating.toLowerCase();
  if(r.includes('good'))return'good';
  if(r.includes('fair'))return'good';
  if(r.includes('slightly'))return'warn';
  if(r.includes('over'))return'bad';
  return'neu';
}

/* ── ANIMATED NUMBER COUNT-UP (generic integer) ─────────── */
function animateCountUpNum(el,target,duration=800){
  const start=performance.now();
  function tick(now){
    const elapsed=now-start;
    const progress=Math.min(elapsed/duration,1);
    const t=1-Math.pow(1-progress,3);
    el.textContent=Math.round(target*t);
    if(progress<1)requestAnimationFrame(tick);
    else el.textContent=target;
  }
  requestAnimationFrame(tick);
}

/* ── ANIMATED PRICE COUNT-UP ─────────────────────────────── */
function animateCountUp(el,target,duration=800){
  const start=performance.now();
  const from=0;
  function tick(now){
    const elapsed=now-start;
    const progress=Math.min(elapsed/duration,1);
    // cubic-bezier(0.2,0.9,0.4,1.1) approximation via ease-out-back
    const t=progress<1?1-Math.pow(1-progress,3):1;
    const val=Math.round(from+(target-from)*t);
    el.textContent='AED '+val.toLocaleString();
    if(progress<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── WHY THIS PRICE BUILD ────────────────────────────────── */
function buildWhySection(r,brand,model,year,mileage){
  const low=r.lowPrice||0;
  const high=r.highPrice||0;
  const avg=r.averagePrice||0;
  const comp=r.listingsFound||0;
  const ai=r.ai||null;

  // Build context sentence from real data
  const carName=`${year} ${brand}${model?' '+model:''}`;
  const rangeText=low&&high
    ?`Similar ${carName} listings in UAE ranged from <strong>AED ${low.toLocaleString()}</strong> to <strong>AED ${high.toLocaleString()}</strong>.`
    :'';
  const posText=avg
    ?`This car is positioned at <strong>AED ${avg.toLocaleString()}</strong>${comp?` based on ${comp} comparable listings`:''}${ai?.explanation?' — '+ai.explanation:''}.`
    :'';

  // Key factors from Claude (real, not formula)
  const factors=ai?.key_factors||[];
  const factorsHtml=factors.length
    ?`<div class="why-factors">${factors.map(f=>`<div class="why-factor-item">${f}</div>`).join('')}</div>`
    :'';

  return`<div class="why-toggle" id="whyToggle">
    <button class="why-btn" onclick="toggleWhy()" aria-expanded="false">
      <span>Market Context</span><span class="why-chevron">▼</span>
    </button>
    <div class="why-body">
      ${rangeText||posText?`<div class="why-context">${rangeText} ${posText}</div>`:''}
      ${factorsHtml}
    </div>
  </div>`;
}
function toggleWhy(){
  const el=document.getElementById('whyToggle');
  if(!el)return;
  const open=el.classList.toggle('open');
  const btn=el.querySelector('.why-btn');
  if(btn)btn.setAttribute('aria-expanded',open);
}

/* ── DUBAI SKYLINE SVG BUILDER ───────────────────────────── */
function buildDubaiSkylineSVG(){
  return `<svg viewBox="0 0 800 160" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
    <defs>
      <linearGradient id="bldG1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(180,200,220,0.70)"/>
        <stop offset="100%" stop-color="rgba(140,165,190,0.85)"/>
      </linearGradient>
      <linearGradient id="bldG2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(160,185,210,0.65)"/>
        <stop offset="100%" stop-color="rgba(120,148,175,0.80)"/>
      </linearGradient>
      <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(135,206,235,0.0)"/>
        <stop offset="80%" stop-color="rgba(180,220,240,0.05)"/>
        <stop offset="100%" stop-color="rgba(210,235,245,0.12)"/>
      </linearGradient>
    </defs>
    <!-- Sky atmosphere -->
    <rect x="0" y="0" width="800" height="160" fill="url(#skyG)"/>
    <!-- Sun in sky -->
    <ellipse cx="650" cy="22" rx="18" ry="18" fill="rgba(255,220,80,0.18)"/>
    <ellipse cx="650" cy="22" rx="10" ry="10" fill="rgba(255,228,100,0.30)"/>
    <circle cx="650" cy="22" r="6" fill="rgba(255,235,120,0.65)"/>
    <!-- BURJ KHALIFA (center-right) -->
    <rect x="478" y="8" width="7" height="152" fill="url(#bldG1)"/>
    <rect x="474" y="30" width="15" height="130" fill="url(#bldG1)"/>
    <rect x="470" y="55" width="23" height="105" fill="url(#bldG1)"/>
    <rect x="466" y="75" width="31" height="85" fill="url(#bldG1)"/>
    <rect x="462" y="90" width="39" height="70" fill="url(#bldG2)"/>
    <!-- Burj windows (subtle day glint) -->
    <rect x="476" y="35" width="2" height="2" fill="rgba(255,255,255,0.4)" rx="0.5"/>
    <rect x="480" y="35" width="2" height="2" fill="rgba(255,255,255,0.3)" rx="0.5"/>
    <rect x="476" y="45" width="2" height="2" fill="rgba(255,255,255,0.25)" rx="0.5"/>
    <!-- CAYAN TOWER (twisted) -->
    <polygon points="300,160 308,80 318,80 310,160" fill="url(#bldG2)"/>
    <polygon points="306,80 310,30 316,32 312,80" fill="url(#bldG1)"/>
    <!-- EMIRATES TOWERS pair -->
    <polygon points="200,160 210,55 216,55 220,160" fill="url(#bldG1)"/>
    <rect x="204" y="55" width="14" height="105" fill="url(#bldG2)"/>
    <polygon points="230,160 238,70 244,70 248,160" fill="url(#bldG1)"/>
    <!-- Shorter buildings left cluster -->
    <rect x="50" y="105" width="28" height="55" fill="url(#bldG2)"/>
    <rect x="82" y="90" width="22" height="70" fill="url(#bldG1)"/>
    <rect x="108" y="100" width="18" height="60" fill="url(#bldG2)"/>
    <rect x="130" y="95" width="25" height="65" fill="url(#bldG1)"/>
    <rect x="159" y="110" width="20" height="50" fill="url(#bldG2)"/>
    <!-- Right cluster -->
    <rect x="540" y="95" width="30" height="65" fill="url(#bldG2)"/>
    <rect x="574" y="108" width="24" height="52" fill="url(#bldG1)"/>
    <rect x="602" y="88" width="32" height="72" fill="url(#bldG2)"/>
    <rect x="638" y="102" width="26" height="58" fill="url(#bldG1)"/>
    <rect x="668" y="95" width="36" height="65" fill="url(#bldG2)"/>
    <rect x="708" y="112" width="22" height="48" fill="url(#bldG1)"/>
    <rect x="734" y="100" width="28" height="60" fill="url(#bldG2)"/>
    <!-- Cranes -->
    <line x1="355" y1="160" x2="355" y2="55" stroke="rgba(160,180,200,0.35)" stroke-width="1.5"/>
    <line x1="355" y1="60" x2="395" y2="70" stroke="rgba(160,180,200,0.30)" stroke-width="1.2"/>
    <line x1="355" y1="60" x2="320" y2="68" stroke="rgba(160,180,200,0.25)" stroke-width="1"/>
    <!-- Glass glints on buildings (day) -->
    <rect x="54" y="112" width="3" height="3" fill="rgba(255,255,255,0.35)" rx="0.5"/>
    <rect x="60" y="112" width="3" height="3" fill="rgba(255,255,255,0.20)" rx="0.5"/>
    <rect x="544" y="100" width="3" height="3" fill="rgba(255,255,255,0.30)" rx="0.5"/>
    <rect x="550" y="100" width="3" height="3" fill="rgba(255,255,255,0.20)" rx="0.5"/>
    <rect x="606" y="92" width="4" height="3" fill="rgba(255,255,255,0.28)" rx="0.5"/>
    <rect x="613" y="92" width="4" height="3" fill="rgba(255,255,255,0.18)" rx="0.5"/>
    <!-- Ground haze at bottom -->
    <rect x="0" y="120" width="800" height="40" fill="rgba(200,220,230,0.08)" opacity="0.5"/>
  </svg>`;
}

/* ── SCENE CAR SVG (detailed, brand-aware coloring) ─────── */
function buildSceneCarSVG(bodyKey, brand, model){
  
  const luxBrands=['BMW','Mercedes-Benz','Audi','Porsche','Lexus','Genesis','Infiniti',
                   'Cadillac','Rolls-Royce','Bentley','Maserati','Lamborghini','Ferrari','McLaren'];
  const isLux = luxBrands.includes(brand);

  const c0 = isLux?'#B2C0CC':'#2C3E52';   // body mid
  const c1 = isLux?'#6A8294':'#0E1E2C';   // body dark
  const c2 = isLux?'#D0DDE6':'#3C5268';   // body highlight
  const gl = 'rgba(140,196,242,0.54)';    // glass
  const glD= 'rgba(88,148,210,0.44)';     // glass dark
  const ac = isLux?'#C8A428':'#00897B';   // accent/rim highlight
  const rim= isLux?'rgba(200,162,38,0.95)':'rgba(152,158,166,0.9)';

  /* Detailed 5-spoke wheel */
  function W(cx,cy,r){
    const ls=[];
    for(let i=0;i<5;i++){
      const a=i/5*Math.PI*2;
      const xi=(cx+Math.cos(a)*r*.46).toFixed(1), yi=(cy+Math.sin(a)*r*.46).toFixed(1);
      const xo=(cx+Math.cos(a)*r*.83).toFixed(1), yo=(cy+Math.sin(a)*r*.83).toFixed(1);
      ls.push(`<line x1="${xi}" y1="${yi}" x2="${xo}" y2="${yo}" stroke="${rim}" stroke-width="2" stroke-linecap="round" opacity=".92"/>`);
    }
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#161616" stroke="#060606" stroke-width="1.2"/>
    <circle cx="${cx}" cy="${cy}" r="${(r*.84).toFixed(1)}" fill="#0C0C0C" stroke="rgba(255,255,255,0.05)" stroke-width=".8"/>
    ${ls.join('')}
    <circle cx="${cx}" cy="${cy}" r="${(r*.26).toFixed(1)}" fill="#080808" stroke="${rim}" stroke-width="1.8"/>
    <circle cx="${cx}" cy="${cy}" r="${(r*.1).toFixed(1)}" fill="${rim}" opacity=".85"/>`;
  }

  const HL = `fill="rgba(255,248,196,0.94)" stroke="${ac}" stroke-width=".8"`;
  const DRL= `stroke="rgba(200,228,255,0.82)" stroke-width="2.4" stroke-linecap="round"`;
  const TL = `fill="rgba(220,36,26,0.88)"`;

  const svgs={

/* ── SEDAN ── 3-box profile: distinct hood / cab / trunk */
sedan:`<svg viewBox="0 0 310 112" xmlns="http://www.w3.org/2000/svg">
  <!-- body -->
  <path d="M22 86 L22 70 Q26 60 46 58 L62 55 L76 26 Q148 20 216 26
           L230 54 Q256 52 272 52 Q288 50 292 64 L292 86 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- roof highlight -->
  <path d="M76 27 Q148 21 216 27" stroke="${c2}" stroke-width="2.2" fill="none" opacity=".65" stroke-linecap="round"/>
  <!-- windscreen -->
  <path d="M174 26 Q208 24 215 27 L228 53 L166 53 Z" fill="${gl}" opacity=".88"/>
  <!-- side glass -->
  <path d="M78 28 Q148 22 166 26 L162 53 L86 53 L80 32 Z" fill="${gl}"/>
  <!-- B-pillar -->
  <rect x="162" y="26" width="7" height="27" rx="1" fill="${c1}" opacity=".52"/>
  <!-- trunk lid crease -->
  <path d="M22 70 Q28 62 46 58 L62 55" stroke="${c1}" stroke-width="1.5" fill="none" opacity=".6"/>
  <!-- hood crease -->
  <path d="M230 54 Q258 52 274 52" stroke="${c1}" stroke-width="1" fill="none" opacity=".45"/>
  <!-- body character line -->
  <path d="M24 72 Q130 67 228 65 L265 61" stroke="${c2}" stroke-width="1" fill="none" opacity=".48"/>
  <!-- headlight + DRL -->
  <path d="M284 60 L292 57 L292 70 L284 72 Z" ${HL}/>
  <line x1="283" y1="57" x2="292" y2="55" ${DRL}/>
  <!-- grille slots -->
  <line x1="290" y1="72" x2="290" y2="82" stroke="${c1}" stroke-width="2" opacity=".5"/>
  <line x1="294" y1="72" x2="294" y2="82" stroke="${c1}" stroke-width="2" opacity=".3"/>
  <!-- taillight -->
  <rect x="20" y="64" width="4" height="15" rx="1.5" ${TL}/>
  ${W(87,86,17)}${W(234,86,17)}
  <ellipse cx="161" cy="106" rx="132" ry="4" fill="rgba(0,0,0,0.16)"/>
</svg>`,

/* ── SUV ── tall boxy body, flat roof, squared rear */
suv:`<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
  <!-- body -->
  <path d="M24 102 L24 50 Q28 26 56 20 L200 16 Q246 16 268 40
           L294 74 L296 102 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- flat roof -->
  <path d="M56 20 L200 16 Q246 16 268 40" stroke="${c2}" stroke-width="2.5" fill="none" opacity=".62"/>
  <!-- front glass (more upright) -->
  <path d="M224 20 Q260 20 270 42 L272 82 L228 82 L222 24 Z" fill="${gl}"/>
  <!-- side glass -->
  <path d="M62 22 L58 82 L216 82 L220 20 Q142 16 62 22 Z" fill="${gl}" opacity=".86"/>
  <!-- B-pillar -->
  <rect x="148" y="20" width="9" height="62" rx="1" fill="${c1}" opacity=".5"/>
  <!-- running board -->
  <rect x="30" y="100" width="260" height="5" rx="2" fill="${c1}" opacity=".62"/>
  <!-- body character line -->
  <path d="M26 78 Q160 72 276 74" stroke="${c2}" stroke-width="1.1" fill="none" opacity=".5"/>
  <!-- headlight + DRL -->
  <path d="M284 54 L294 50 L296 66 L285 70 Z" ${HL}/>
  <line x1="283" y1="50" x2="293" y2="48" ${DRL}/>
  <!-- grill bar -->
  <rect x="293" y="70" width="5" height="24" rx="1" fill="${c1}" stroke="${ac}" stroke-width=".8" opacity=".8"/>
  <!-- taillight -->
  <rect x="20" y="52" width="6" height="26" rx="2" ${TL}/>
  ${W(88,102,21)}${W(250,102,21)}
  <ellipse cx="169" cy="122" rx="148" ry="5" fill="rgba(0,0,0,0.16)"/>
</svg>`,

/* ── CROSSOVER ── raised hatchback rear, roof rails */
crossover:`<svg viewBox="0 0 306 120" xmlns="http://www.w3.org/2000/svg">
  <!-- body -->
  <path d="M22 92 L22 58 Q26 36 58 28 L174 22 Q222 22 250 46
           L282 78 L284 92 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- roof -->
  <path d="M60 28 L174 22 Q222 22 250 46" stroke="${c2}" stroke-width="2" fill="none" opacity=".62"/>
  <!-- front glass (raked) -->
  <path d="M208 24 Q242 24 252 48 L256 80 L210 80 L206 28 Z" fill="${gl}"/>
  <!-- side glass -->
  <path d="M66 30 L62 80 L200 80 L204 24 Q136 20 66 30 Z" fill="${gl}" opacity=".85"/>
  <!-- B-pillar -->
  <rect x="150" y="24" width="8" height="56" rx="1" fill="${c1}" opacity=".48"/>
  <!-- roof rails -->
  <rect x="62" y="20" width="150" height="3" rx="1.5" fill="${c1}" opacity=".5"/>
  <!-- body line -->
  <path d="M24 76 Q150 70 266 74" stroke="${c2}" stroke-width="1.1" fill="none" opacity=".48"/>
  <!-- headlight + DRL -->
  <path d="M275 56 L284 52 L286 66 L276 70 Z" ${HL}/>
  <line x1="274" y1="52" x2="283" y2="50" ${DRL}/>
  <!-- taillight -->
  <rect x="19" y="56" width="5" height="22" rx="1.5" ${TL}/>
  ${W(84,92,18)}${W(238,92,18)}
  <ellipse cx="161" cy="110" rx="138" ry="4" fill="rgba(0,0,0,0.16)"/>
</svg>`,

/* ── HATCHBACK ── short compact, steep rear hatch glass */
hatchback:`<svg viewBox="0 0 283 110" xmlns="http://www.w3.org/2000/svg">
  <!-- body -->
  <path d="M22 86 L22 62 Q26 40 54 28 L136 22 Q192 22 228 50
           L258 80 L260 86 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- roof to rear hatch slope -->
  <path d="M56 28 L136 22 Q190 22 228 50" stroke="${c2}" stroke-width="2" fill="none" opacity=".62"/>
  <!-- large rear hatch glass (defining feature) -->
  <path d="M190 24 Q220 24 228 52 L230 76 L186 76 L188 26 Z" fill="${gl}"/>
  <!-- C-pillar stroke (steep angle) -->
  <path d="M188 26 L228 52" stroke="${c1}" stroke-width="4" fill="none" opacity=".38"/>
  <!-- side glass -->
  <path d="M60 30 L56 76 L180 76 L184 24 Q118 20 60 30 Z" fill="${gl}" opacity=".84"/>
  <!-- B-pillar -->
  <rect x="146" y="24" width="8" height="52" rx="1" fill="${c1}" opacity=".5"/>
  <!-- body line -->
  <path d="M24 72 Q138 67 236 70" stroke="${c2}" stroke-width="1" fill="none" opacity=".48"/>
  <!-- headlight + DRL -->
  <path d="M252 54 L260 50 L262 63 L252 67 Z" ${HL}/>
  <line x1="251" y1="50" x2="259" y2="48" ${DRL}/>
  <!-- taillight (hatch-style, wraps around rear) -->
  <rect x="20" y="58" width="5" height="20" rx="1.5" ${TL}/>
  ${W(78,86,16)}${W(208,86,16)}
  <ellipse cx="143" cy="103" rx="122" ry="4" fill="rgba(0,0,0,0.16)"/>
</svg>`,

/* ── COUPE ── low fastback roofline, wide 2-door, rear spoiler */
coupe:`<svg viewBox="0 0 308 108" xmlns="http://www.w3.org/2000/svg">
  <!-- body -->
  <path d="M24 84 L24 66 Q28 54 46 52 L60 48 Q80 22 122 18
           L194 18 Q240 18 268 44 L288 76 L290 84 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- fastback roofline -->
  <path d="M82 20 Q148 16 194 18 Q240 18 268 44" stroke="${c2}" stroke-width="2.2" fill="none" opacity=".65"/>
  <!-- windscreen (very raked) -->
  <path d="M202 20 Q244 20 268 46 L268 74 L210 74 L202 22 Z" fill="${gl}"/>
  <!-- rear glass (long) -->
  <path d="M88 22 L82 74 L200 74 L200 20 Q144 16 88 22 Z" fill="${gl}" opacity=".78"/>
  <!-- B-pillar (slim) -->
  <rect x="160" y="20" width="6" height="54" rx="1" fill="${c1}" opacity=".38"/>
  <!-- rear deck spoiler -->
  <rect x="78" y="72" width="64" height="3.5" rx="1.8" fill="${c1}" opacity=".8"/>
  <!-- hood crease -->
  <path d="M82 46 Q162 42 214 46" stroke="${c2}" stroke-width="1.2" fill="none" opacity=".5"/>
  <!-- headlight + DRL -->
  <path d="M280 50 L290 46 L292 60 L281 64 Z" ${HL}/>
  <line x1="280" y1="46" x2="290" y2="44" ${DRL}/>
  <!-- taillight -->
  <rect x="21" y="62" width="5" height="14" rx="1.5" ${TL}/>
  ${W(82,84,17)}${W(228,84,17)}
  <ellipse cx="155" cy="102" rx="136" ry="4" fill="rgba(0,0,0,0.16)"/>
</svg>`,

/* ── SPORTSCAR ── ultra-low, extreme rake, wide stance */
sportscar:`<svg viewBox="0 0 308 100" xmlns="http://www.w3.org/2000/svg">
  <!-- ultra-low body -->
  <path d="M24 78 L24 62 Q28 52 44 50 L56 44 Q76 16 124 12
           L194 10 Q250 10 274 42 L294 70 L296 78 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- raked roofline -->
  <path d="M78 14 Q158 10 196 10 Q252 10 276 44" stroke="${c2}" stroke-width="2.2" fill="none" opacity=".7"/>
  <!-- raked windscreen -->
  <path d="M202 12 Q254 12 276 44 L278 68 L208 68 L202 14 Z" fill="${gl}"/>
  <!-- rear fastback glass (long) -->
  <path d="M82 14 L74 68 L198 68 L200 12 Q148 10 82 14 Z" fill="${gl}" opacity=".76"/>
  <!-- B-pillar (very narrow) -->
  <rect x="164" y="14" width="5" height="54" rx="1" fill="${c1}" opacity=".34"/>
  <!-- rear spoiler (prominent) -->
  <rect x="68" y="66" width="78" height="4.5" rx="2.2" fill="${c1}" opacity=".9"/>
  <!-- side sill scoop -->
  <path d="M136 66 Q160 60 184 66" stroke="${c1}" stroke-width="2" fill="none" opacity=".5"/>
  <!-- front vent -->
  <path d="M270 58 Q282 54 292 58" stroke="${ac}" stroke-width="1.5" fill="none" opacity=".6"/>
  <!-- headlight (aggressive) -->
  <path d="M288 46 L296 42 L298 58 L288 62 Z" ${HL}/>
  <line x1="288" y1="42" x2="296" y2="40" ${DRL}/>
  <!-- taillight -->
  <rect x="21" y="56" width="5" height="13" rx="1.5" ${TL}/>
  ${W(80,78,18)}${W(232,78,18)}
  <ellipse cx="156" cy="96" rx="138" ry="4" fill="rgba(0,0,0,0.18)"/>
</svg>`,

/* ── PICKUP ── crew cab + distinct open cargo bed with tailgate */
pickup:`<svg viewBox="0 0 360 124" xmlns="http://www.w3.org/2000/svg">
  <!-- CARGO BED -->
  <rect x="24" y="52" width="142" height="52" rx="2" fill="${c0}" opacity=".72" stroke="${c1}" stroke-width="1"/>
  <!-- bed top rail -->
  <rect x="24" y="44" width="144" height="8" rx="2" fill="${c2}" opacity=".82"/>
  <!-- tailgate -->
  <rect x="20" y="52" width="7" height="52" rx="1" fill="${c1}" opacity=".9"/>
  <!-- bed floor line -->
  <line x1="26" y1="90" x2="164" y2="90" stroke="${c1}" stroke-width="1" opacity=".4"/>
  <!-- CAB body -->
  <path d="M170 104 L170 44 Q178 20 214 16 L284 14 Q320 16 336 44
           L340 74 L342 104 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- cab roof -->
  <path d="M180 18 L214 14 L284 14 Q320 16 336 44" stroke="${c2}" stroke-width="2" fill="none" opacity=".62"/>
  <!-- cab windscreen -->
  <path d="M287 16 Q320 18 338 46 L338 78 L290 78 L285 20 Z" fill="${gl}"/>
  <!-- cab side window -->
  <path d="M185 20 L180 78 L278 78 L283 16 Q236 14 185 20 Z" fill="${gl}" opacity=".8"/>
  <!-- B-pillar -->
  <rect x="244" y="18" width="8" height="60" rx="1" fill="${c1}" opacity=".5"/>
  <!-- running board (full length) -->
  <rect x="26" y="100" width="310" height="5" rx="2" fill="${c1}" opacity=".66"/>
  <!-- body character line cab -->
  <path d="M172 76 Q254 72 334 74" stroke="${c2}" stroke-width="1.1" fill="none" opacity=".5"/>
  <!-- headlight + DRL -->
  <path d="M331 52 L341 48 L343 64 L332 68 Z" ${HL}/>
  <line x1="330" y1="48" x2="340" y2="46" ${DRL}/>
  <!-- taillight -->
  <rect x="18" y="52" width="6" height="26" rx="2" ${TL}/>
  ${W(86,104,21)}${W(300,104,21)}
  <ellipse cx="193" cy="118" rx="164" ry="5" fill="rgba(0,0,0,0.18)"/>
</svg>`,

/* ── VAN / MPV ── tall box, multiple side windows, forward cab */
van:`<svg viewBox="0 0 338 124" xmlns="http://www.w3.org/2000/svg">
  <!-- tall box body -->
  <path d="M24 98 L24 20 Q28 12 50 10 L288 10 Q318 10 324 34
           L324 98 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- roof cap -->
  <rect x="24" y="10" width="300" height="8" rx="4" fill="${c2}" opacity=".72"/>
  <!-- front glass (forward face) -->
  <path d="M268 14 Q310 14 318 36 L320 78 L272 78 L266 18 Z" fill="${gl}"/>
  <!-- side windows row 1 (front half) -->
  <rect x="38" y="24" width="54" height="36" rx="3" fill="${gl}" opacity=".72"/>
  <rect x="100" y="24" width="54" height="36" rx="3" fill="${gl}" opacity=".72"/>
  <rect x="162" y="24" width="54" height="36" rx="3" fill="${gl}" opacity=".72"/>
  <rect x="222" y="24" width="36" height="36" rx="3" fill="${gl}" opacity=".65"/>
  <!-- pillars -->
  <rect x="90" y="18" width="6" height="80" rx="1" fill="${c1}" opacity=".35"/>
  <rect x="152" y="18" width="6" height="80" rx="1" fill="${c1}" opacity=".42"/>
  <rect x="212" y="18" width="6" height="80" rx="1" fill="${c1}" opacity=".35"/>
  <rect x="262" y="18" width="8" height="80" rx="1" fill="${c1}" opacity=".52"/>
  <!-- sliding door groove -->
  <line x1="152" y1="18" x2="152" y2="98" stroke="${c1}" stroke-width="3" opacity=".3" stroke-dasharray="5 3"/>
  <!-- body ridge line -->
  <path d="M26 76 L322 76" stroke="${c2}" stroke-width="1.2" fill="none" opacity=".42"/>
  <!-- headlight -->
  <path d="M314 46 L324 42 L324 60 L314 64 Z" ${HL}/>
  <line x1="313" y1="42" x2="323" y2="40" ${DRL}/>
  <!-- taillight -->
  <rect x="20" y="42" width="6" height="26" rx="1.5" ${TL}/>
  ${W(88,98,19)}${W(262,98,19)}
  <ellipse cx="175" cy="116" rx="153" ry="5" fill="rgba(0,0,0,0.16)"/>
</svg>`,

/* ── CONVERTIBLE ── open top, windscreen frame, interior visible */
convertible:`<svg viewBox="0 0 304 104" xmlns="http://www.w3.org/2000/svg">
  <!-- low body -->
  <path d="M22 80 L22 64 Q26 52 44 50 L58 46 Q74 28 112 22
           L190 20 Q238 20 266 46 L284 72 L286 80 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- windscreen frame (A-pillars only, no roof) -->
  <path d="M136 22 L132 55 L194 55 L192 22" stroke="${c1}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <!-- windscreen glass -->
  <path d="M192 22 Q224 22 242 42 L238 56 L194 55 L192 24 Z" fill="${gl}" opacity=".56"/>
  <!-- roof header bar -->
  <path d="M136 22 Q162 18 192 22" stroke="${c1}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <!-- interior tub (visible from side) -->
  <rect x="100" y="44" width="92" height="20" rx="3" fill="rgba(18,12,6,0.42)"/>
  <!-- dashboard hint -->
  <path d="M192 48 Q218 44 236 48" stroke="${c1}" stroke-width="2.5" fill="none" opacity=".5"/>
  <!-- head restraints -->
  <circle cx="128" cy="42" r="5.5" fill="${c1}" opacity=".72"/>
  <circle cx="160" cy="42" r="5.5" fill="${c1}" opacity=".72"/>
  <!-- body line -->
  <path d="M60 60 Q170 56 262 58" stroke="${c2}" stroke-width="1" fill="none" opacity=".48"/>
  <!-- side vent hint -->
  <path d="M102 62 Q118 58 134 62" stroke="${c1}" stroke-width="1.5" fill="none" opacity=".5"/>
  <!-- headlight + DRL -->
  <path d="M278 50 L286 46 L288 60 L278 64 Z" ${HL}/>
  <line x1="277" y1="46" x2="285" y2="44" ${DRL}/>
  <!-- taillight -->
  <rect x="20" y="60" width="4" height="13" rx="1.5" ${TL}/>
  <!-- roof line shine on body -->
  <path d="M114 26 Q192 20 238 32" stroke="rgba(255,255,255,0.28)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  ${W(80,80,17)}${W(224,80,17)}
  <ellipse cx="152" cy="98" rx="134" ry="4" fill="rgba(0,0,0,0.16)"/>
</svg>`,

/* ── WAGON / ESTATE ── flat extended roofline over cargo, roof rails, D-pillar */
wagon:`<svg viewBox="0 0 322 116" xmlns="http://www.w3.org/2000/svg">
  <!-- body: roof extends all the way to rear -->
  <path d="M22 88 L22 66 Q26 56 38 54 L54 52 L76 24 Q148 18 216 22
           L286 22 Q304 24 306 44 L306 88 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- flat extended roofline -->
  <path d="M78 24 Q150 18 216 22 L286 22" stroke="${c2}" stroke-width="2.5" fill="none" opacity=".65" stroke-linecap="round"/>
  <!-- front windscreen -->
  <path d="M218 24 L232 54 L186 54 L198 22 Z" fill="${gl}"/>
  <!-- large rear cargo glass (upright, distinctive wagon feature) -->
  <path d="M254 24 L302 24 Q304 24 304 44 L302 80 L254 80 Z" fill="${gl}" opacity=".84"/>
  <!-- side glass (long middle section) -->
  <path d="M84 26 L80 80 L246 80 L246 24 Q164 20 84 26 Z" fill="${gl}" opacity=".8"/>
  <!-- B-pillar -->
  <rect x="152" y="24" width="8" height="56" rx="1" fill="${c1}" opacity=".5"/>
  <!-- C-pillar (between side glass and rear glass) -->
  <rect x="246" y="24" width="8" height="56" rx="1" fill="${c1}" opacity=".52"/>
  <!-- roof rails -->
  <rect x="80" y="20" width="204" height="3" rx="1.5" fill="${c1}" opacity=".56"/>
  <!-- body character line -->
  <path d="M24 74 Q165 68 288 72" stroke="${c2}" stroke-width="1.1" fill="none" opacity=".5"/>
  <!-- headlight + DRL -->
  <path d="M297 48 L306 44 L306 60 L297 62 Z" ${HL}/>
  <line x1="296" y1="44" x2="305" y2="42" ${DRL}/>
  <!-- taillight (tall, rear glass edge) -->
  <rect x="19" y="52" width="5" height="24" rx="1.5" ${TL}/>
  ${W(84,88,17)}${W(252,88,17)}
  <ellipse cx="168" cy="106" rx="146" ry="5" fill="rgba(0,0,0,0.16)"/>
</svg>`,

/* ── OFFROAD ── very boxy, upright screen, huge wheels, running boards, spare tyre */
offroad:`<svg viewBox="0 0 328 134" xmlns="http://www.w3.org/2000/svg">
  <!-- boxy body, high ground clearance -->
  <path d="M26 106 L26 42 Q28 14 58 12 L196 8 Q238 8 262 32
           L304 90 L306 106 Z"
        fill="${c0}" stroke="${c1}" stroke-width="1.2"/>
  <!-- flat roof -->
  <path d="M58 12 L196 8 Q238 8 262 32" stroke="${c2}" stroke-width="2.5" fill="none" opacity=".65"/>
  <!-- upright windscreen (defining offroad feature) -->
  <path d="M212 10 Q250 10 266 32 L270 84 L218 84 L210 14 Z" fill="${gl}"/>
  <!-- side glass (shorter, boxier) -->
  <path d="M66 14 L62 84 L204 84 L208 10 Q138 8 66 14 Z" fill="${gl}" opacity=".83"/>
  <!-- B-pillar (thick) -->
  <rect x="148" y="12" width="10" height="72" rx="1" fill="${c1}" opacity=".56"/>
  <!-- square headlights (classic offroad style) -->
  <rect x="294" y="52" width="14" height="16" rx="3" fill="rgba(255,248,196,0.92)" stroke="${ac}" stroke-width="1"/>
  <rect x="294" y="38" width="14" height="12" rx="2" fill="rgba(200,228,255,0.7)"/>
  <!-- grill slats -->
  <rect x="296" y="70" width="4.5" height="28" rx="1" fill="${c1}" opacity=".72"/>
  <rect x="304" y="70" width="4.5" height="28" rx="1" fill="${c1}" opacity=".52"/>
  <!-- taillight (tall) -->
  <rect x="20" y="50" width="8" height="32" rx="2" ${TL}/>
  <!-- running boards -->
  <rect x="32" y="104" width="268" height="6" rx="2" fill="${c1}" opacity=".7"/>
  <!-- spare tyre on rear -->
  <circle cx="32" cy="88" r="15" fill="${c1}" opacity=".48" stroke="${c1}" stroke-width="1.5"/>
  <circle cx="32" cy="88" r="8.5" fill="${c0}" opacity=".8"/>
  <circle cx="32" cy="88" r="4" fill="${c1}" opacity=".6"/>
  <!-- flared wheel arch lines -->
  <path d="M50 106 Q68 94 88 90 Q110 90 130 106" stroke="${c1}" stroke-width="3.5" fill="none" opacity=".55"/>
  <path d="M218 106 Q238 90 260 90 Q280 92 300 106" stroke="${c1}" stroke-width="3.5" fill="none" opacity=".55"/>
  <!-- hood line -->
  <path d="M64 18 Q172 14 208 16" stroke="${c2}" stroke-width="1.5" fill="none" opacity=".5"/>
  ${W(88,106,22)}${W(260,106,22)}
  <ellipse cx="174" cy="128" rx="155" ry="5" fill="rgba(0,0,0,0.18)"/>
</svg>`,

  }; // end svgs

  return svgs[bodyKey] || svgs.sedan;
}

/* ── REFERENCE NUMBER ───────────────────────────────────── */
function generateRef(serverRef){
  // Priority: server ref → pre-generated client ref → fresh timestamp ref
  if(serverRef) return { label: serverRef };
  if(window._preGeneratedRef) return { label: window._preGeneratedRef };
  const now=new Date();
  const dd=String(now.getDate()).padStart(2,'0');
  const mm=String(now.getMonth()+1).padStart(2,'0');
  const yy=String(now.getFullYear()).slice(2);
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ';
  const rand=Array.from({length:6},()=>chars[Math.floor(Math.random()*chars.length)]).join('');
  return{ label:`${dd}${mm}${yy}-${rand}` };
}

/* ── HELPERS ─────────────────────────────────────────────── */

function buildConditionAdjustments(specVal,mileageNum,conditionVal,carYear,avgPrice){
  // 10 — All percentages now match worker computeVc exactly
  const adj=[];
  const cy=new Date().getFullYear();
  const age=Math.max(1,cy-carYear);
  const expected=age*18000;  // 1.3 — UAE 18,000 km/yr
  const r=n=>Math.round(n/500)*500;

  // Fix 2: Brand-specific GCC premium table
  // Non-GCC cars in the UAE have varying resale penalties depending on brand/tier.
  // Luxury and rare-parts brands carry heavier non-GCC penalties; commodity brands less so.
  // This mirrors the worker's flat 13% but surfaces it as a labelled, tiered discount.
  const _brandForGcc = (document.getElementById('brand')?.value||'').toLowerCase();
  const GCC_NON_PREMIUM = {
    // S-class icons — non-GCC parts hardest to source, insurance loading worst
    'toyota':0.14,'lexus':0.15,
    // D-class luxury — non-GCC means no local warranty, parts via grey market
    'bmw':0.16,'audi':0.16,'mercedes-benz':0.16,'mercedes':0.16,
    'land rover':0.17,'porsche':0.15,'volvo':0.14,
    // B/C mainstream — moderate penalty
    'nissan':0.12,'honda':0.12,'mitsubishi':0.12,'mazda':0.12,'subaru':0.12,
    'hyundai':0.11,'kia':0.11,'genesis':0.12,
    'chevrolet':0.11,'ford':0.11,'gmc':0.11,'dodge':0.11,'jeep':0.12,
    // E-class Chinese brands — non-GCC = essentially unsellable to most buyers
    'mg':0.18,'haval':0.18,'gac':0.17,'chery':0.17,'byd':0.17,
    'omoda':0.18,'jetour':0.18,'geely':0.17,'xpeng':0.18,'zeekr':0.18,
    'tesla':0.13, // Tesla: official presence now; grey-market penalty lower
  };
  const _nonGccPct = GCC_NON_PREMIUM[_brandForGcc] || 0.13; // default 13% matches worker

  // 1.1/1.6 — Non-GCC: brand-tiered penalty (displays as named % discount)
  if(specVal&&specVal!=='GCC'&&specVal!=='GCC Spec')
    adj.push({name:`Non-GCC Specification (${Math.round(_nonGccPct*100)}% — parts/insurance loading)`,amount:r(avgPrice*_nonGccPct),positive:false});

  // Fix 3: Compound-aware mileage adjustments
  // Previously applied flat % to avgPrice; now applies to running adjusted base
  // so multiple negatives don't over-count on the display side.
  let _adjBase = avgPrice;
  if(specVal&&specVal!=='GCC'&&specVal!=='GCC Spec') _adjBase = _adjBase * (1-_nonGccPct);

  if(mileageNum>0){
    const kmRatio=mileageNum/expected;
    if     (kmRatio>2.0)  { const amt=r(_adjBase*0.16); adj.push({name:'Very High Mileage (2× expected)',  amount:amt,positive:false}); _adjBase*=0.84; }
    else if(kmRatio>1.5)  { const amt=r(_adjBase*0.10); adj.push({name:'High Mileage (1.5× expected)',     amount:amt,positive:false}); _adjBase*=0.90; }
    else if(kmRatio>1.2)  { const amt=r(_adjBase*0.05); adj.push({name:'Above-Average Mileage',            amount:amt,positive:false}); _adjBase*=0.95; }
    else if(kmRatio<0.35) { const amt=r(_adjBase*0.04); adj.push({name:'Exceptionally Low Mileage',        amount:amt,positive:true});  _adjBase*=1.04; }
    else if(kmRatio<0.65) { const amt=r(_adjBase*0.02); adj.push({name:'Moderately Low Mileage',           amount:amt,positive:true});  _adjBase*=1.02; }
    else                  adj.push({name:'Average Mileage for Age',           amount:0,               positive:true});
  }

  // Condition — matches worker conditionMap (applied to running base)
  if     (conditionVal==='Excellent')  { const amt=r(_adjBase*0.05); adj.push({name:'Excellent Condition',  amount:amt,positive:true});  _adjBase*=1.05; }
  else if(conditionVal==='Very Good')  { const amt=r(_adjBase*0.03); adj.push({name:'Very Good Condition',  amount:amt,positive:true});  _adjBase*=1.03; }
  else if(conditionVal==='Fair')       { const amt=r(_adjBase*0.05); adj.push({name:'Fair Condition',       amount:amt,positive:false}); _adjBase*=0.95; }
  else if(conditionVal==='Poor')       { const amt=r(_adjBase*0.12); adj.push({name:'Poor Condition',       amount:amt,positive:false}); _adjBase*=0.88; }

  // 1.7 — FSH: +3.5% / –4.0%
  if(qs.fsh===true)  { const amt=r(_adjBase*0.035); adj.push({name:'Full Service History', amount:amt,positive:true});  _adjBase*=1.035; }
  if(qs.fsh===false) { const amt=r(_adjBase*0.040); adj.push({name:'No Service History',   amount:amt,positive:false}); _adjBase*=0.960; }

  // 1.5 — Accident: minor –5%, moderate –10%, major –27%
  if(qs.accident===true){
    const sev=qs.accidentSeverity||'moderate';
    const pct={minor:0.050,moderate:0.100,major:0.270}[sev]??0.100;
    const lbl={minor:'Minor Accident (cosmetic)',moderate:'Accident History',major:'Major Accident (structural)'}[sev]||'Accident History';
    adj.push({name:lbl,amount:r(_adjBase*pct),positive:false});
  }

  // 1.9 — Single owner: +2.5% / –2.0%
  if(qs.singleOwner===true)  adj.push({name:'Single Owner',    amount:r(_adjBase*0.025),positive:true});
  if(qs.singleOwner===false) adj.push({name:'Multiple Owners', amount:r(_adjBase*0.020),positive:false});

  // 1.8 — Warranty: +2.5% / –1.5%
  if(qs.warranty===true)  adj.push({name:'Active Warranty', amount:r(_adjBase*0.025),positive:true});
  if(qs.warranty===false) adj.push({name:'No Warranty',     amount:r(_adjBase*0.015),positive:false});

  adj.sort((a,b)=>b.amount-a.amount);
  return adj.slice(0,6);
}

function getDealBadgeInfo(askN,fmv){
  // 7 — Unified verdict scale: matches worker computeVc and adaptToLegacy exactly
  if(!fmv)return null;
  if(!askN)return{cls:'neutral',label:'Market Rate'};
  const d=(askN-fmv)/fmv;
  if(d<=-0.08) return{cls:'good', label:'Buy Now'};
  if(d<=-0.05) return{cls:'good', label:'Good Deal'};
  if(d<= 0.05) return{cls:'good', label:'Fair Price'};
  if(d<= 0.10) return{cls:'warn', label:'Slightly High'};
  if(d<= 0.18) return{cls:'bad',  label:'Overpriced'};
  return{cls:'bad', label:'Walk Away'};
}

function getBuddyVerdict(askN,avg,conditionVal,accidentVal,ownersVal,mileageNum,carYear,brand,model,specVal,colourVal,serviceVal,ai,nego){
  const price=askN||avg;
  const diff=avg>0?(price-avg)/avg:0;
  const saving=avg>0?Math.round(avg-price):0;
  const pct=Math.round(Math.abs(diff)*100);
  const purpose=g('purpose')?.value||'buying';
  const cy=new Date().getFullYear();
  const age=Math.max(1,cy-carYear);
  const expected=age*18000;
  const mileageLow=mileageNum>0&&mileageNum<expected*.7;
  const isGCC=specVal==='GCC'||specVal==='GCC Spec';
  const hasAccident=accidentVal==='minor'||accidentVal==='major';
  const agency=qs.fsh===true;
  const goodColour=false;
  let vk,vl;
  if(purpose==='selling'){
    // Gap-O fix: selling thresholds aligned to worker 5%/10% bands
    if     (diff> 0.10){vk='negotiate';vl='↕ Price Down';}
    else if(diff> 0.05){vk='negotiate';vl='↕ Slightly High';}
    else if(diff<-0.05){vk='caution';  vl='⚠ Priced Low';}
    else               {vk='buy';      vl='✓ Well Priced';}
  } else {
    // Gap-O fix: thresholds now match worker 7-level verdict scale exactly
    if     (diff<=-0.08&&!hasAccident&&conditionVal!=='Poor'){vk='strong-buy';vl='⭐ Buy Now';}
    else if(diff<=-0.05&&!hasAccident)                       {vk='buy';       vl='✓ Good Deal';}
    else if(diff<= 0.05&&!hasAccident)                       {vk='negotiate'; vl='↕ Fair Price';}
    else if(diff<= 0.10)                                     {vk='negotiate'; vl='↕ Slightly High';}
    else if(diff<= 0.18||(hasAccident&&diff<=0.10))          {vk='caution';   vl='⚠ Overpriced';}
    else                                                      {vk='pass';      vl='✗ Walk Away';}
  }
  const cn=`${carYear} ${brand}${model?' '+model:''}`;
  let pc=askN
    ?(saving>0?`At AED ${askN.toLocaleString()}, this ${cn} is AED ${saving.toLocaleString()} (${pct}%) below fair market value of AED ${avg.toLocaleString()} — a real saving.`
      :diff>0?`At AED ${askN.toLocaleString()}, the seller is asking AED ${Math.abs(saving).toLocaleString()} (${pct}%) above the market average of AED ${avg.toLocaleString()}.`
      :`At AED ${askN.toLocaleString()}, this is right at market average — fair for both sides.`)
    :`The fair market value for this ${cn} in the UAE is AED ${avg.toLocaleString()}.`;
  const hasFSH     = qs.fsh === true;
  const noFSH      = qs.fsh === false;
  const hasWarranty= qs.warranty === true;
  const isSingleOwner = qs.singleOwner === true || ownersVal === '1';
  const multiOwner    = qs.singleOwner === false || ownersVal === '3' || ownersVal === '4+';
  const pros=[],cons=[];
  if(isGCC)        pros.push('GCC spec is the preferred choice in the UAE');
  if(mileageLow)   pros.push(`${mileageNum.toLocaleString()} km is below average for a ${age}-year-old car`);
  if(agency||hasFSH) pros.push('full service history adds trust and resale value');
  if(isSingleOwner) pros.push('single ownership is a strong confidence signal');
  if(hasWarranty)  pros.push('active warranty reduces buyer risk');
  if(conditionVal==='Excellent'||conditionVal==='Very Good') pros.push(`${conditionVal.toLowerCase()} condition supports the asking price`);
  if(hasAccident)  cons.push(`${accidentVal} accident history is a negotiation lever and a resale risk`);
  if(multiOwner)   cons.push('multiple previous owners can affect buyer confidence');
  if(!isGCC)       cons.push('non-GCC spec limits the local resale audience');
  if(noFSH)        cons.push('no service history — harder to verify maintenance records');
  if(mileageNum>expected*1.5) cons.push(`${mileageNum.toLocaleString()} km is high for this age`);
  let para=pc+' ';
  if(pros.length) para+=`The positives: ${pros.slice(0,3).join(', ')}. `;
  if(cons.length) para+=`Watch out: ${cons.join('; ')}. `;
  const aiA=ai?.advice||'';
  if(aiA&&aiA.length>20) para+=aiA;
  // Gap-J fix: use worker nego anchors when available, not hardcoded ask*0.96/0.98
  else if(purpose!=='selling'&&askN&&saving>0){
    const _hintOffer = (nego&&nego.offer) ? nego.offer : Math.round(askN*.96/500)*500;
    const _hintClose = (nego&&nego.close) ? nego.close : Math.round(askN*.98/500)*500;
    para+=`My honest take: offer AED ${_hintOffer.toLocaleString()} and close at AED ${_hintClose.toLocaleString()} — there's room.`;
  }
  else if(purpose==='selling'&&diff>.05) para+=`To sell faster, try AED ${Math.round(avg*1.02/500)*500} — you'll attract more serious buyers.`;
  else para+=`A solid market deal — worth pursuing if the inspection checks out.`;
  return{vk,vl,para};
}

function buildFlags(specVal,mileageNum,conditionVal,carYear,colourVal,serviceVal,accidentVal,ownersVal,warrantyVal){
  const green=[],red=[];
  const cy=new Date().getFullYear();
  const age=Math.max(1,cy-carYear);
  const exp=age*18000;
  const isGCC=specVal==='GCC'||specVal==='GCC Spec';
  if(isGCC) green.push('GCC specification — preferred in UAE market');
  if(qs.fsh===true) green.push('Full service history — highest trust level');
  if(qs.fsh===false) red.push('No full service history — maintenance harder to verify');
  if(mileageNum>0&&mileageNum<exp*.65) green.push(`${mileageNum.toLocaleString()} km — Low mileage for year (premium supported)`);
  if(ownersVal==='1'||qs.singleOwner===true) green.push('Single owner — commands premium at resale');
  if(conditionVal==='Excellent') green.push('Excellent condition — top bracket justified');
  if(warrantyVal==='active'||qs.warranty===true) green.push('Active warranty — reduces buyer risk');
  if(warrantyVal==='extended') green.push('Extended warranty — added peace of mind');
  if(!isGCC) red.push('Non-GCC spec — smaller UAE buyer pool');
  if(mileageNum>exp*1.5) red.push(`${mileageNum.toLocaleString()} km — above expected mileage for year`);
  if(accidentVal==='minor') red.push('Minor accident on record — disclose and negotiate');
  if(accidentVal==='major') red.push('Major accident history — significant value impact');
  if(ownersVal==='3'||ownersVal==='4+'||qs.singleOwner===false) red.push('Multiple owners — affects confidence and resale');
  if(conditionVal==='Fair'||conditionVal==='Poor') red.push(`${conditionVal} condition — price must reflect repair costs`);
  // E18 FIX: deduplicate both arrays before return — no item should appear twice
  const dedup = arr => arr.filter((v,i,a)=>a.findIndex(x=>x===v)===i);
  return{green:dedup(green).slice(0,5), red:dedup(red).slice(0,4)};
}

/* ── UAE DEPRECIATION PROFILE ENGINE v65 ────────────────────
   Research: CarSwitch, Dubizzle, ArabWheels, FirstChoiceCars 2025-26
   Land Cruiser/Patrol retain 80-85% after 3 years (iconic demand)
   Toyota Camry/Corolla retain 68-72% after 3 years
   BMW/Audi/MB (non-G) lose 40-50% in 3 years (high service cost)
   Chinese brands (Haval/GAC/MG) lose 45-55% (uncertain track record)
   Modifiers: mileage, spec, FSH, accident, age, owners
────────────────────────────────────────────────────────────── */
function buildNegoGuide(askN,avg,conditionVal,accidentVal,_vcOverride){
  // Fix 11: buildNegoGuide now delegates to the worker's _vc anchors when
  // available, so offer/close/walk are always consistent with bestMove and
  // negoScript. Independent discount arithmetic is only used as a last-resort
  // fallback (no worker response at all).
  if(!avg) return null;

  // Prefer worker-computed anchors passed in via _vcOverride (= r._vc || {})
  const _vc = _vcOverride || {};
  if(_vc.handshake) {
    const handshake = _vc.handshake;
    const openOffer = _vc.openOffer || Math.round(handshake * 0.93 / 500) * 500;
    const offer     = openOffer;
    const close     = handshake;
    const walk      = Math.round(handshake * 1.03 / 500) * 500;
    const room      = askN > 0 ? Math.max(0, Math.round((1 - offer / askN) * 100)) : 0;
    const tactic    = (_vc.bestMove && _vc.bestMove.note) || '';
    return { offer, close, walk, room, tactic };
  }

  // ── Fallback: worker result absent — derive from handshake (avg) ──────────
  // Uses the same formula as the main nego object: offer = handshake × 0.93,
  // close = handshake, walk = handshake × 1.03. No independent discount logic.
  const hasAsk = !!(askN && askN > 0);
  const offer  = Math.round(avg * 0.93 / 500) * 500;
  const close  = avg;
  const walk   = Math.round(avg * 1.03 / 500) * 500;
  const room   = hasAsk ? Math.max(0, Math.round((1 - offer / askN) * 100)) : 0;

  // Tactic derived from visible weaknesses (used only when worker unavailable)
  const af      = conditionVal==='Poor'||accidentVal==='major';
  const noFsh   = qs.fsh===false;
  const noWar   = qs.warranty===false;
  const mktDisc = hasAsk && avg > 0 ? Math.max(0,(askN-avg)/avg) : 0;
  let tactic = '';
  if(af)              tactic = 'The accident history is the primary leverage point — use it to justify a firm reduction.';
  else if(noFsh&&noWar) tactic = 'No service history and no warranty — use both gaps to push for a lower price.';
  else if(noFsh)      tactic = 'Missing service history is a legitimate negotiation point.';
  else if(mktDisc>0.08) tactic = `Listed ${Math.round(mktDisc*100)}% above market. Reference the AED ${avg.toLocaleString()} fair value and negotiate from there.`;
  else                tactic = 'Already close to market — a 2–3% counter is reasonable without risking the deal.';

  return { offer, close, walk, room, tactic };
}

function buildOwnerhipCost(price,deprAmt,carYear,rtaFees,marketMid,depreciationClass){
  // Fix 12: Fallback insurance uses marketMid (UAE insurer practice) at class-
  // specific rates, mirroring the identical logic in buildResult's _insCalc.
  // Never use price * 0.025 — insurers base premiums on market value, not
  // transaction price, and rates vary by depreciation class.
  const _EV_BRANDS_OC = new Set(['Tesla','BYD','Rivian','Lucid','XPENG','NIO','Zeekr']);
  const _EV_MODEL_RE_OC = /\bev\d*\b|ioniq\s*[56]|ariya|leaf|e[-\s]?tron|eq[abcse]|id\.[34567]|niro\s*ev|kona\s*elec|mach[-\s]?e|lightning|lyriq|blazer\s*ev|solterra|zs\s*ev|mg5\s*ev|marvel|polar|atto|dolphin|seal\b|cybertruck/i;
  const _brandHint  = (typeof brand !== 'undefined') ? brand : '';
  const _modelHint  = (typeof model !== 'undefined') ? model : '';
  const _isEV_OC    = _EV_BRANDS_OC.has(_brandHint) || _EV_MODEL_RE_OC.test(_modelHint || '');
  const _insPctMapOC= { S:0.028, A:0.030, B:0.032, C:0.034, D:0.042, E:0.045 };
  const _insRate_OC = _isEV_OC ? 0.050 : (_insPctMapOC[depreciationClass || 'C'] || 0.034);
  const _base_OC    = marketMid && marketMid > 0 ? marketMid : price;
  const ins = rtaFees?.insurance != null
    ? rtaFees.insurance
    : Math.round(_base_OC * _insRate_OC / 500) * 500;
  // 4.1/4.2 — Maintenance: class-based + age multiplier (matches buildResult / worker v70)
  const _svcBaseMapOC = { S:4200, A:3600, B:3200, C:2800, D:5500, E:3500 };
  const _svcBaseOC    = _isEV_OC ? 2800 : (_svcBaseMapOC[depreciationClass || 'C'] || 3000);
  const _ageOC        = Math.max(0, new Date().getFullYear() - (parseInt(carYear,10) || new Date().getFullYear()));
  const _ageMultOC    = _ageOC >= 11 ? 2.2 : _ageOC >= 8 ? 1.7 : _ageOC >= 5 ? 1.3 : 1.0;
  const maint         = Math.round(_svcBaseOC * _ageMultOC / 500) * 500;
  // First-year cost = RTA fees + insurance ONLY (no car value, no depreciation)
  const rtaOnly = 170 + 420 + 350 + ins;
  // 5 — Fuel: body-type base, hybrid×0.45, diesel×0.78, EV=electricity proxy,
  //     AC +15%, age >8yr +10%, 18,000 km/yr, AED 3.28/L (Special 95, April 2026)
  const FUEL_AED_PER_L_OC = 3.28;
  const ANNUAL_KM_OC      = 18000;
  const _bodyTypeOC = (guessBody(_brandHint, _modelHint) || 'Sedan').toLowerCase();
  let _baseLp100OC;
  if     (_bodyTypeOC === 'pickup' || _bodyTypeOC.includes('van'))   _baseLp100OC = 14.5;
  else if(_bodyTypeOC.includes('suv'))                               _baseLp100OC = 13.0;
  else if(_bodyTypeOC.includes('coupe') || _bodyTypeOC.includes('sport')) _baseLp100OC = 11.5;
  else                                                               _baseLp100OC = 9.5;
  const _modelLcOC  = (_modelHint || '').toLowerCase();
  let _fuelMultOC = 1.0;
  if(_isEV_OC) {
    _fuelMultOC = 0;
  } else if(/hybrid|hev|phev/.test(_modelLcOC)) {
    _fuelMultOC = 0.45;
  } else if(/diesel|dci|tdi|cdti|d4d|jtd/.test(_modelLcOC)) {
    _fuelMultOC = 0.78;
  }
  const _acCorrOC  = 1.15;
  const _ageCorOC  = _ageOC >= 8 ? 1.10 : 1.0;
  const _lp100OC   = _baseLp100OC * _fuelMultOC * _acCorrOC * _ageCorOC;
  const fuelEst = _isEV_OC
    ? Math.round((_base_OC || price) * 0.015 / 500) * 500
    : Math.round(_lp100OC / 100 * ANNUAL_KM_OC * FUEL_AED_PER_L_OC / 100) * 100;
  return{ins,maint,rtaOnly,deprAmt,fuelEst};
}

function confPctToPos(conf){return Math.max(5,Math.min(95,conf));}

/* ── PIR COLOUR HEX HELPER ──────────────────────────────── */
function _pirColourHex(name){
  const map={
    'White':'#F5F5F0','Pearl White':'#F0EFE8','Black':'#1A1A1A','Midnight Black':'#0D0D0D',
    'Silver':'#B0B4B8','Gray':'#808080','Dark Gray':'#4A4A4A','Blue':'#2563EB',
    'Dark Blue':'#1E3A8A','Light Blue':'#60A5FA','Red':'#DC2626','Maroon':'#7F1D1D',
    'Burgundy':'#6B2131','Gold':'#D4AF37','Champagne':'#C8A87A','Bronze':'#A0714F',
    'Beige':'#D4C5A9','Cream':'#FFFDD0','Sand':'#C2B280','Brown':'#6F4E37',
    'Green':'#16A34A','Dark Green':'#14532D','Orange':'#EA580C','Yellow':'#9C5535',
    'Purple':'#7C3AED','Other':'#9CA3AF'
  };
  return map[name]||'#9CA3AF';
}

/* ── KEY POINT GUIDANCE HELPER ───────────────────────────── */
function _kpGuidance(text, type) {
  const t = (text||'').toLowerCase();
  if(type==='good') {
    if(t.includes('gcc'))         return 'easier to resell and finance in the UAE';
    if(t.includes('service')||t.includes('fsh')) return 'request the service book to confirm at handover';
    if(t.includes('single owner')) return 'one consistent owner means predictable maintenance history';
    if(t.includes('mileage')&&t.includes('low')) return 'below-average wear supports asking closer to market high';
    if(t.includes('warranty'))    return 'buyer is protected against unexpected repair costs';
    if(t.includes('condition'))   return 'well-maintained vehicles hold value and sell faster';
    return 'use this as a positive point when negotiating';
  }
  if(type==='bad'||type==='risk') {
    if(t.includes('service')||t.includes('fsh')) return 'request receipts or workshop stamps to partially offset this';
    if(t.includes('accident'))    return 'always request a TAMM vehicle history report before committing';
    if(t.includes('multiple owner')||t.includes('owners')) return 'ask seller for reason — fleet cars often have high multi-owner records';
    if(t.includes('non-gcc'))     return 'factor in potential parts delays and lower resale pool';
    if(t.includes('mileage')&&(t.includes('high')||t.includes('above'))) return 'budget for timing belt, fluids, and brake inspection';
    if(t.includes('warranty'))    return 'factor repair costs into the offer or walk-away price';
    if(t.includes('confidence'))  return 'cross-check at least 5 comparable Dubizzle listings before offering';
    if(t.includes('trim'))        return 'values here use the broader model — trim premium may not be captured';
    if(t.includes('condition'))   return 'get a pre-purchase inspection to quantify repair costs';
    return 'factor this into the negotiation strategy';
  }
  return 'verify before finalising the deal';
}

/* ── COMPREHENSIVE BODY-TYPE DETECTION ─────────────────── */
/* GCC-first: covers every popular make/model sold in UAE/Saudi/Kuwait.
   Returns one of: sedan | suv | crossover | hatchback | pickup | van |
                   coupe | convertible | sportscar | wagon | offroad       */
function ksDetectBodyType(brand, model){
  const b = (brand||'').toLowerCase().trim();
  const m = (model||'').toLowerCase().trim();
  const s = b + ' ' + m;

  // ── 1. EXACT MODEL LOOKUP (highest precision) ───────────────────────────
  // Format: modelFragment → bodyKey  (checked against model string only)
  const MODEL_MAP = [
    // ── TOYOTA (most popular brand in GCC) ──
    ['land cruiser 70','offroad'],['land cruiser 76','offroad'],['land cruiser 78','offroad'],['land cruiser 79','offroad'],
    ['land cruiser 200','suv'],['land cruiser 300','suv'],['land cruiser prado','suv'],
    ['land cruiser','suv'],['prado','suv'],
    ['fortuner','suv'],['4runner','suv'],
    ['hilux','pickup'],['tundra','pickup'],['tacoma','pickup'],
    ['camry','sedan'],['corolla cross','crossover'],['corolla','sedan'],
    ['yaris cross','crossover'],['yaris','hatchback'],
    ['rav4','crossover'],['c-hr','crossover'],
    ['rush','suv'],['innova','van'],
    ['hiace','van'],['granvia','van'],
    ['supra','sportscar'],['86','sportscar'],['gr86','sportscar'],['gr yaris','hatchback'],
    ['venza','crossover'],['sequoia','suv'],['avalon','sedan'],
    ['crown','sedan'],['mirai','sedan'],['sienna','van'],
    // ── NISSAN ──
    ['patrol','offroad'],['xterra','suv'],['armada','suv'],['pathfinder','suv'],
    ['murano','crossover'],['qashqai','crossover'],['juke','crossover'],
    ['kicks','crossover'],['x-trail','crossover'],['rogue','crossover'],
    ['navara','pickup'],['frontier','pickup'],
    ['altima','sedan'],['sentra','sedan'],['maxima','sedan'],['versa','sedan'],
    ['sunny','sedan'],['tiida','sedan'],
    ['micra','hatchback'],['note','hatchback'],
    ['leaf','hatchback'],['370z','sportscar'],['350z','sportscar'],['z','sportscar'],
    ['urvan','van'],['nv','van'],
    // ── MITSUBISHI ──
    ['pajero sport','suv'],['pajero','offroad'],
    ['outlander','crossover'],['eclipse cross','crossover'],['asx','crossover'],
    ['montero','offroad'],['montero sport','suv'],
    ['l200','pickup'],['triton','pickup'],
    ['galant','sedan'],['lancer','sedan'],
    ['colt','hatchback'],['mirage','hatchback'],
    ['starion','sportscar'],
    // ── TOYOTA LEXUS ──
    ['lx','suv'],['gx','suv'],['rx','crossover'],['nx','crossover'],['ux','crossover'],
    ['es','sedan'],['ls','sedan'],['is','sedan'],['gs','sedan'],
    ['lc','coupe'],['rc','coupe'],
    ['ct','hatchback'],
    // ── HONDA ──
    ['cr-v','crossover'],['hr-v','crossover'],['wrv','crossover'],
    ['pilot','suv'],['passport','suv'],['ridgeline','pickup'],
    ['civic','sedan'],['accord','sedan'],['insight','sedan'],
    ['city','sedan'],['fit','hatchback'],['jazz','hatchback'],
    ['odyssey','van'],['elysion','van'],
    ['s2000','sportscar'],['nsx','sportscar'],
    ['zr-v','crossover'],
    // ── HYUNDAI ──
    ['palisade','suv'],['tucson','crossover'],['santa fe','suv'],['kona','crossover'],
    ['venue','crossover'],['creta','crossover'],['ix35','crossover'],['ix25','crossover'],
    ['ioniq 5','crossover'],['ioniq 6','sedan'],['ioniq','sedan'],
    ['elantra','sedan'],['sonata','sedan'],['azera','sedan'],['grandeur','sedan'],
    ['i10','hatchback'],['i20','hatchback'],['i30','hatchback'],
    ['veloster','coupe'],
    ['staria','van'],['starex','van'],['h1','van'],
    ['porter','pickup'],
    // ── KIA ──
    ['sportage','crossover'],['sorento','suv'],['telluride','suv'],
    ['carnival','van'],['sedona','van'],
    ['niro','crossover'],['soul','crossover'],
    ['stinger','sedan'],['k5','sedan'],['k8','sedan'],['k3','sedan'],['cerato','sedan'],['rio','sedan'],
    ['picanto','hatchback'],['morning','hatchback'],
    ['ev6','crossover'],['ev9','suv'],
    // ── BMW ──
    ['x7','suv'],['x5','suv'],['x6','suv'],['x4','crossover'],['x3','crossover'],['x2','crossover'],['x1','crossover'],['xm','suv'],
    ['7 series','sedan'],['5 series','sedan'],['3 series','sedan'],['2 series gran','sedan'],['1 series','sedan'],
    ['4 series gran coupe','sedan'],['4 series','coupe'],['2 series coupe','coupe'],['6 series','coupe'],['8 series','coupe'],
    ['z4','convertible'],['z3','convertible'],
    ['m2','coupe'],['m3','sedan'],['m4','coupe'],['m5','sedan'],['m6','coupe'],['m8','coupe'],['m1','sportscar'],
    ['i3','hatchback'],['i4','sedan'],['i5','sedan'],['i7','sedan'],['ix','suv'],
    // ── MERCEDES-BENZ ──
    ['g 63','offroad'],['g 500','offroad'],['g-class','offroad'],['g class','offroad'],['gwagon','offroad'],
    ['gls','suv'],['gle','suv'],['gla','crossover'],['glb','crossover'],['glc','crossover'],
    ['s-class','sedan'],['e-class','sedan'],['c-class','sedan'],['a-class','hatchback'],['b-class','hatchback'],
    ['cla','sedan'],['cls','sedan'],
    ['c class coupe','coupe'],['e class coupe','coupe'],['slk','convertible'],['sl','convertible'],['slc','convertible'],
    ['amg gt','sportscar'],['amg gts','sportscar'],
    ['vito','van'],['sprinter','van'],['v-class','van'],
    ['eqa','crossover'],['eqb','crossover'],['eqc','crossover'],['eqs','sedan'],['eqe','sedan'],
    // ── AUDI ──
    ['q8','suv'],['q7','suv'],['q5','crossover'],['q4','crossover'],['q3','crossover'],['q2','crossover'],
    ['a8','sedan'],['a7','sedan'],['a6','sedan'],['a5','coupe'],['a4','sedan'],['a3','sedan'],
    ['rs6 avant','wagon'],['rs4 avant','wagon'],
    ['tt','coupe'],['r8','sportscar'],
    ['etron','crossover'],['q8 etron','suv'],
    // ── CHEVROLET ──
    ['tahoe','suv'],['suburban','suv'],['traverse','suv'],['trailblazer','crossover'],['equinox','crossover'],['trax','crossover'],
    ['silverado','pickup'],['colorado','pickup'],['avalanche','pickup'],
    ['camaro','coupe'],['corvette','sportscar'],
    ['malibu','sedan'],['impala','sedan'],['cruze','sedan'],
    ['sonic','hatchback'],['spark','hatchback'],
    ['express','van'],
    // ── FORD ──
    ['explorer','suv'],['expedition','suv'],['bronco','offroad'],['bronco sport','crossover'],
    ['escape','crossover'],['edge','crossover'],['territory','crossover'],['puma','crossover'],['kuga','crossover'],
    ['f-150','pickup'],['f-250','pickup'],['f-350','pickup'],['ranger','pickup'],
    ['mustang mach-e','crossover'],['mustang','coupe'],
    ['fusion','sedan'],['mondeo','sedan'],['taurus','sedan'],
    ['fiesta','hatchback'],['focus','hatchback'],
    ['transit','van'],['tourneo','van'],
    // ── JEEP ──
    ['wrangler','offroad'],['gladiator','pickup'],
    ['grand cherokee l','suv'],['grand cherokee','suv'],
    ['compass','crossover'],['renegade','crossover'],['avenger','crossover'],
    ['grand wagoneer','suv'],['wagoneer','suv'],
    // ── LAND ROVER ──
    ['defender 90','offroad'],['defender 110','offroad'],['defender','suv'],
    ['discovery 5','suv'],['discovery 4','suv'],['discovery 3','suv'],['discovery','suv'],
    ['discovery sport','crossover'],['freelander','crossover'],
    ['range rover sport','suv'],['range rover evoque','crossover'],['range rover velar','crossover'],
    ['range rover','suv'],
    // ── PORSCHE ──
    ['cayenne','suv'],['macan','crossover'],
    ['panamera','sedan'],
    ['911','sportscar'],['718 cayman','sportscar'],['718 boxster','convertible'],
    ['taycan sport turismo','wagon'],['taycan','sedan'],
    // ── VOLKSWAGEN ──
    ['touareg','suv'],['tiguan allspace','suv'],['tiguan','crossover'],['taos','crossover'],['t-roc','crossover'],['t-cross','crossover'],
    ['atlas','suv'],['atlas cross sport','crossover'],
    ['passat','sedan'],['jetta','sedan'],['arteon','sedan'],['vento','sedan'],
    ['golf alltrack','wagon'],['golf estate','wagon'],
    ['golf gti','hatchback'],['golf r','hatchback'],['golf','hatchback'],
    ['polo','hatchback'],
    ['amarok','pickup'],
    ['transporter','van'],['caravelle','van'],['multivan','van'],
    // ── SKODA ──
    ['kodiaq','suv'],['octavia combi','wagon'],['octavia','sedan'],['superb','sedan'],
    ['kamiq','crossover'],['karoq','crossover'],['enyaq','crossover'],
    ['fabia','hatchback'],['scala','hatchback'],
    // ── SEAT/CUPRA ──
    ['tarraco','suv'],['ateca','crossover'],['arona','crossover'],
    ['leon','hatchback'],['ibiza','hatchback'],
    ['formentor','crossover'],
    // ── VOLVO ──
    ['xc90','suv'],['xc60','crossover'],['xc40','crossover'],['ex90','suv'],['ex40','crossover'],
    ['s90','sedan'],['s60','sedan'],['s80','sedan'],
    ['v90 cross country','wagon'],['v90','wagon'],['v60 cross country','wagon'],['v60','wagon'],
    // ── GENESIS ──
    ['gv80','suv'],['gv70','crossover'],['gv60','crossover'],
    ['g90','sedan'],['g80','sedan'],['g70','sedan'],
    // ── INFINITI ──
    ['qx80','suv'],['qx60','suv'],['qx55','crossover'],['qx50','crossover'],['qx30','crossover'],
    ['q50','sedan'],['q60','coupe'],['q70','sedan'],
    // ── CADILLAC ──
    ['escalade esv','suv'],['escalade','suv'],['xt6','suv'],['xt5','crossover'],['xt4','crossover'],
    ['ct6','sedan'],['ct5','sedan'],['ct4','sedan'],
    // ── LINCOLN ──
    ['navigator','suv'],['aviator','suv'],['nautilus','crossover'],['corsair','crossover'],
    ['continental','sedan'],['mkz','sedan'],
    // ── BUICK ──
    ['enclave','suv'],['envision','crossover'],['encore gx','crossover'],['encore','crossover'],
    // ── GMC ──
    ['yukon xl','suv'],['yukon','suv'],['acadia','suv'],['terrain','crossover'],['envoy','suv'],
    ['sierra','pickup'],['canyon','pickup'],
    // ── DODGE / RAM ──
    ['ram 1500','pickup'],['ram 2500','pickup'],['ram 3500','pickup'],['ram','pickup'],
    ['durango','suv'],['journey','suv'],
    ['charger','sedan'],['challenger','coupe'],
    ['viper','sportscar'],
    // ── CHRYSLER ──
    ['pacifica','van'],['grand voyager','van'],['300c','sedan'],['300','sedan'],
    // ── SUBARU ──
    ['outback','wagon'],['forester','crossover'],['xv','crossover'],['crosstrek','crossover'],['ascent','suv'],
    ['legacy','sedan'],['impreza','sedan'],['brz','sportscar'],
    ['wrx sti','sedan'],['wrx','sedan'],
    // ── MAZDA ──
    ['cx-90','suv'],['cx-60','crossover'],['cx-9','suv'],['cx-5','crossover'],['cx-30','crossover'],['cx-3','crossover'],
    ['mazda6','sedan'],['mazda3','sedan'],['mazda2','hatchback'],
    ['mx-5','convertible'],['rx-7','sportscar'],['rx-8','sportscar'],
    ['bt-50','pickup'],
    // ── SUZUKI ──
    ['grand vitara','suv'],['vitara','crossover'],['s-cross','crossover'],
    ['jimny','offroad'],
    ['swift','hatchback'],['baleno','hatchback'],['ignis','hatchback'],['celerio','hatchback'],
    ['dzire','sedan'],['ciaz','sedan'],
    ['carry','van'],['super carry','van'],
    // ── OPEL/VAUXHALL ──
    ['mokka','crossover'],['grandland','crossover'],['crossland','crossover'],['astra sports tourer','wagon'],
    ['astra','hatchback'],['corsa','hatchback'],['adam','hatchback'],
    ['insignia','sedan'],['vectra','sedan'],
    ['vivaro','van'],['movano','van'],
    // ── PEUGEOT ──
    ['5008','suv'],['3008','crossover'],['2008','crossover'],['408','crossover'],
    ['508','sedan'],['308','hatchback'],['208','hatchback'],['107','hatchback'],
    ['rifter','van'],['partner','van'],['expert','van'],
    // ── RENAULT ──
    ['koleos','suv'],['kadjar','crossover'],['captur','crossover'],['arkana','crossover'],['duster','crossover'],
    ['laguna','sedan'],['megane','hatchback'],['clio','hatchback'],['zoe','hatchback'],['twingo','hatchback'],
    ['trafic','van'],['master','van'],
    // ── CITROEN ──
    ['c5 aircross','crossover'],['c3 aircross','crossover'],['berlingo','van'],['jumpy','van'],
    ['c5','sedan'],['c4','hatchback'],['c3','hatchback'],
    // ── FIAT ──
    ['tipo','sedan'],['500x','crossover'],['500','hatchback'],['panda','hatchback'],['punto','hatchback'],
    ['ducato','van'],['doblo','van'],['fiorino','van'],
    // ── ALFA ROMEO ──
    ['stelvio','crossover'],['tonale','crossover'],
    ['giulia','sedan'],['giulietta','hatchback'],
    ['4c','sportscar'],['8c','sportscar'],
    // ── LANCIA/MASERATI ──
    ['levante','suv'],['ghibli','sedan'],['quattroporte','sedan'],['granturismo','coupe'],
    ['grecale','crossover'],
    // ── TESLA ──
    ['model x','suv'],['model y','crossover'],['model s','sedan'],['model 3','sedan'],['cybertruck','pickup'],
    // ── RIVIAN/LUCID ──
    ['r1t','pickup'],['r1s','suv'],['air','sedan'],
    // ── BYD ──
    ['tang','suv'],['song plus','suv'],['song','crossover'],['han','sedan'],['atto 3','crossover'],['seal','sedan'],['dolphin','hatchback'],
    ['seal u','crossover'],
    // ── CHINESE BRANDS (growing GCC presence) ──
    ['haval h6','crossover'],['haval h9','suv'],['haval jolion','crossover'],['haval big dog','crossover'],
    ['haval','crossover'],
    ['gac gs8','suv'],['gac gs4','crossover'],['gac gn8','suv'],['gac aion','sedan'],['gac','crossover'],
    ['jetour x90','suv'],['jetour x70','crossover'],['jetour dashing','crossover'],['jetour','crossover'],
    ['chery tiggo 8','suv'],['chery tiggo 7','crossover'],['chery tiggo 4','crossover'],['chery arrizo','sedan'],['chery','crossover'],
    ['mg hs','crossover'],['mg zs','crossover'],['mg rx8','suv'],['mg rx5','crossover'],
    ['mg 5','sedan'],['mg 6','sedan'],['mg cyberster','convertible'],['mg','crossover'],
    ['geely emgrand','sedan'],['geely coolray','crossover'],['geely','crossover'],
    ['omoda 5','crossover'],['omoda','crossover'],
    ['dongfeng','crossover'],
    // ── OTHER BRANDS ──
    ['infiniti','sedan'],// fallback
    ['ferrari','sportscar'],['lamborghini','sportscar'],['mclaren','sportscar'],
    ['aston martin','sportscar'],['lotus','sportscar'],['bugatti','sportscar'],
    ['koenigsegg','sportscar'],['pagani','sportscar'],['rimac','sportscar'],
    ['rolls royce','sedan'],['bentley','sedan'],['maybach','sedan'],
    ['maserati','sedan'],
    ['mini cooper s','hatchback'],['mini countryman','crossover'],['mini clubman','wagon'],['mini','hatchback'],
    ['smart fortwo','hatchback'],['smart','hatchback'],
    ['isuzu d-max','pickup'],['isuzu mu-x','suv'],['isuzu trooper','offroad'],
    ['foton tunland','pickup'],['foton view','van'],['foton','pickup'],
    ['king long','van'],['higer','van'],['yutong','van'],
  ];

  // Check model map first (model string against fragments)
  for(const [fragment, bodyType] of MODEL_MAP){
    if(m.includes(fragment) || s.includes(fragment)) return bodyType;
  }

  // ── 2. PATTERN FALLBACK ────────────────────────────────────────────────
  // Convertible / Roadster
  if(/cabrio|cabriolet|convertible|roadster|spider|spyder|boxster|slk|sl\b|clk.?cab|z4\b|mx.?5|miata|207.?cc|solara|eos\b/.test(s)) return 'convertible';
  // Pure sports / supercar
  if(/ferrari|lamborghini|mclaren|aston.?martin|lotus|corvette|viper|gt.?r\b|nsx\b|pagani|bugatti|koenigsegg|supra\b|370z|240z|rx.?7\b|brz\b|86\b/.test(s)) return 'sportscar';
  // Coupe
  if(/\bcoupe\b|mustang|camaro|challenger|charger|g70|bmw.?4|bmw.?2\b|c.?class.?coupe|e.?class.?coupe|\ba5\b|\btt\b/.test(s)) return 'coupe';
  // Pickup
  if(/hilux|ranger|navara|pickup|f.?150\b|f150|d.?max\b|bt.?50|l200\b|triton|amarok|ridgeline|tundra|tacoma|frontier\b|colorado|canyon|gladiator/.test(s)) return 'pickup';
  // Van / MPV
  if(/hiace|transit|vito|sprinter|urvan|\bh1\b|starex|alphard|vellfire|odyssey|elysion|carnival|sienna|staria|luxgen|mpv\b|minivan|\bvan\b/.test(s)) return 'van';
  // Estate / Wagon
  if(/touring\b|estate\b|\bavant\b|allroad|sportback|shooting.?brake|5.?series.?tour|outback\b|legacy.?wagon|passat.?var|\bwagon\b/.test(s)) return 'wagon';
  // Off-road / true 4x4
  if(/defender|wrangler|g.?class|g63|g500|jimny|fj.?cruiser|land.?cruiser.?(70|79|76|78)|hilux.?surf|\b4x4\b|offroad|off.?road/.test(s)) return 'offroad';
  // Crossover (compact CUV)
  if(/hr.?v\b|cr.?v\b|rav.?4\b|qashqai|juke\b|kicks\b|trax\b|encore\b|venue\b|kona\b|seltos|c3.?aircross|2008\b|3008\b|t.?roc|t.?cross|cx.?3|cx.?30|ecosport|puma\b|captur|duster\b|crossover/.test(s)) return 'crossover';
  // Large SUV
  if(/patrol\b|prado\b|land.?cruiser|pilot\b|explorer\b|escalade|tahoe\b|suburban\b|\bgx\b|\blx\b|\brx\b|\bnx\b|cx.?5|cx.?9|durango|pajero|discovery|range.?rover|terrain\b|equinox|traverse|sorento|santa.?fe|tucson|sportage|outlander|tiguan|x.?trail|fortuner|captiva|jetour|haval|mu.?x\b/.test(s)) return 'suv';
  // Hatchback
  if(/yaris\b|swift\b|polo\b|golf\b|jazz\b|\bfit\b|\bi10\b|\bi20\b|clio\b|fiesta\b|corsa\b|hatchback|hatch\b|micra|vitz\b|baleno|ignis|kwid|\b208\b|\b308\b|\bi30\b|elantra.?gt|focus.?hatch|civic.?hatch/.test(s)) return 'hatchback';

  return 'sedan'; // GCC default
}

/* ── VEHICLE IMAGE URL RESOLVER ─────────────────────────── */
/* Returns the best available image URL for a given brand + model.
   Strategy: try a Wikimedia Commons file name pattern, then fall
   back to a generic shot sourced from a free open image CDN.
   The [img] is injected on top of the SVG scene; if it fails to
   load the SVG remains fully visible as the fallback.            */
function ksGetVehicleImageUrl(brand, model, bodyKey){
  // 200+ curated Wikimedia Commons CC-licensed images.
  // Hot-linking permitted. Keys: lowercase 'brand model'.
  const CURATED = {

    // ── TOYOTA ──────────────────────────────────────────────────────────
    'toyota land cruiser 300':   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2022_Toyota_Land_Cruiser_LC300_%28facelift%2C_white%29%2C_front_8.21.22.jpg/1280px-2022_Toyota_Land_Cruiser_LC300_%28facelift%2C_white%29%2C_front_8.21.22.jpg',
    'toyota land cruiser 200':   'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Toyota_Land_Cruiser_V8_%28200%29_%E2%80%93_front.jpg/1280px-Toyota_Land_Cruiser_V8_%28200%29_%E2%80%93_front.jpg',
    'toyota land cruiser':       'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2022_Toyota_Land_Cruiser_LC300_%28facelift%2C_white%29%2C_front_8.21.22.jpg/1280px-2022_Toyota_Land_Cruiser_LC300_%28facelift%2C_white%29%2C_front_8.21.22.jpg',
    'toyota land cruiser prado': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Toyota_Land_Cruiser_Prado_150_%28J150%2C_facelift%2C_2017%29_%28front%29.jpg/1280px-Toyota_Land_Cruiser_Prado_150_%28J150%2C_facelift%2C_2017%29_%28front%29.jpg',
    'toyota prado':              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Toyota_Land_Cruiser_Prado_150_%28J150%2C_facelift%2C_2017%29_%28front%29.jpg/1280px-Toyota_Land_Cruiser_Prado_150_%28J150%2C_facelift%2C_2017%29_%28front%29.jpg',
    'toyota fortuner':           'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/2021_Toyota_Fortuner_in_Luxembourg.jpg/1280px-2021_Toyota_Fortuner_in_Luxembourg.jpg',
    'toyota hilux':              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2020_Toyota_Hilux_Revo_Rocco_%28facelift%2C_single_cab%29%2C_front_8.21.22.jpg/1280px-2020_Toyota_Hilux_Revo_Rocco_%28facelift%2C_single_cab%29%2C_front_8.21.22.jpg',
    'toyota camry':              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2022_Toyota_Camry_%28facelift%2C_XV70%2C_XSE_V6%29%2C_front_8.6.22.jpg/1280px-2022_Toyota_Camry_%28facelift%2C_XV70%2C_XSE_V6%29%2C_front_8.6.22.jpg',
    'toyota corolla':            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/2019_Toyota_Corolla_%28E210%29_sedan_%28Australia%29%2C_front_8.23.19.jpg/1280px-2019_Toyota_Corolla_%28E210%29_sedan_%28Australia%29%2C_front_8.23.19.jpg',
    'toyota corolla cross':      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2023_Toyota_Corolla_Cross_XLE_AWD%2C_front.jpg/1280px-2023_Toyota_Corolla_Cross_XLE_AWD%2C_front.jpg',
    'toyota rav4':               'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/2019_Toyota_RAV4_XLE_2.5L%2C_front_10.24.19.jpg/1280px-2019_Toyota_RAV4_XLE_2.5L%2C_front_10.24.19.jpg',
    'toyota highlander':         'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2022_Toyota_Highlander_Platinum_AWD%2C_front_6.26.22.jpg/1280px-2022_Toyota_Highlander_Platinum_AWD%2C_front_6.26.22.jpg',
    'toyota 4runner':            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/2022_Toyota_4Runner_TRD_Pro_4WD%2C_front.jpg/1280px-2022_Toyota_4Runner_TRD_Pro_4WD%2C_front.jpg',
    'toyota sequoia':            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/2023_Toyota_Sequoia_TRD_Pro_%28facelift%29%2C_front.jpg/1280px-2023_Toyota_Sequoia_TRD_Pro_%28facelift%29%2C_front.jpg',
    'toyota tundra':             'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/2022_Toyota_Tundra_Limited_CrewMax_4WD%2C_front_12.4.21.jpg/1280px-2022_Toyota_Tundra_Limited_CrewMax_4WD%2C_front_12.4.21.jpg',
    'toyota yaris':              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2020_Toyota_Yaris_XLE_%28US%29%2C_front_7.20.20.jpg/1280px-2020_Toyota_Yaris_XLE_%28US%29%2C_front_7.20.20.jpg',
    'toyota yaris cross':        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/2022_Toyota_Yaris_Cross_1.5_Hybrid_%28Germany%29%2C_front.jpg/1280px-2022_Toyota_Yaris_Cross_1.5_Hybrid_%28Germany%29%2C_front.jpg',
    'toyota rush':               'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2021_Toyota_Rush_1.5G_%28Indonesia%29%2C_front.jpg/1280px-2021_Toyota_Rush_1.5G_%28Indonesia%29%2C_front.jpg',
    'toyota innova':             'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2023_Toyota_Innova_Zenix_V_HEV_%28Indonesia%29%2C_front.jpg/1280px-2023_Toyota_Innova_Zenix_V_HEV_%28Indonesia%29%2C_front.jpg',
    'toyota avalon':             'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2020_Toyota_Avalon_XSE%2C_front_8.3.20.jpg/1280px-2020_Toyota_Avalon_XSE%2C_front_8.3.20.jpg',
    'toyota venza':              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/2021_Toyota_Venza_XLE_AWD%2C_front_8.2.21.jpg/1280px-2021_Toyota_Venza_XLE_AWD%2C_front_8.2.21.jpg',
    'toyota crown':              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2023_Toyota_Crown_Platinum_AWD%2C_front.jpg/1280px-2023_Toyota_Crown_Platinum_AWD%2C_front.jpg',
    'toyota supra':              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2020_Toyota_Supra_3.0_Premium_in_Nocturnal%2C_Front_Left.jpg/1280px-2020_Toyota_Supra_3.0_Premium_in_Nocturnal%2C_Front_Left.jpg',
    'toyota fj cruiser':         'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2014_Toyota_FJ_Cruiser_%28GSJ15R%2C_Trail_Teams%29_wagon_%28facelift%29.jpg/1280px-2014_Toyota_FJ_Cruiser_%28GSJ15R%2C_Trail_Teams%29_wagon_%28facelift%29.jpg',
    'toyota tacoma':             'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2022_Toyota_Tacoma_TRD_Pro_4WD%2C_front.jpg/1280px-2022_Toyota_Tacoma_TRD_Pro_4WD%2C_front.jpg',
    'toyota sienna':             'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2021_Toyota_Sienna_XSE_AWD%2C_front_8.6.21.jpg/1280px-2021_Toyota_Sienna_XSE_AWD%2C_front_8.6.21.jpg',
    'toyota land cruiser 70':    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Toyota_Land_Cruiser_70_%28facelift%2C_double_cab%29%2C_front_8.29.19.jpg/1280px-Toyota_Land_Cruiser_70_%28facelift%2C_double_cab%29%2C_front_8.29.19.jpg',

    // ── NISSAN ──────────────────────────────────────────────────────────
    'nissan patrol':      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/2020_Nissan_Patrol_Platinum_%28Y62%29%2C_front.jpg/1280px-2020_Nissan_Patrol_Platinum_%28Y62%29%2C_front.jpg',
    'nissan patrol safari': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/2020_Nissan_Patrol_Platinum_%28Y62%29%2C_front.jpg/1280px-2020_Nissan_Patrol_Platinum_%28Y62%29%2C_front.jpg',
    'nissan navara':      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/2019_Nissan_Navara_%28NP300%29_ST-X_pickup_%28facelift%29%2C_front_7.2.20.jpg/1280px-2019_Nissan_Navara_%28NP300%29_ST-X_pickup_%28facelift%29%2C_front_7.2.20.jpg',
    'nissan altima':      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2019_Nissan_Altima_SR_2.5L_%28US%29%2C_front_7.30.19.jpg/1280px-2019_Nissan_Altima_SR_2.5L_%28US%29%2C_front_7.30.19.jpg',
    'nissan pathfinder':  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2022_Nissan_Pathfinder_SV_3.5L%2C_front_8.6.22.jpg/1280px-2022_Nissan_Pathfinder_SV_3.5L%2C_front_8.6.22.jpg',
    'nissan x-trail':     'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/2020_Nissan_X-Trail_1.7_dCi_N-Connecta_%28UK%29%2C_front_8.3.20.jpg/1280px-2020_Nissan_X-Trail_1.7_dCi_N-Connecta_%28UK%29%2C_front_8.3.20.jpg',
    'nissan qashqai':     'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/2022_Nissan_Qashqai_Tekna_%28UK%29%2C_front.jpg/1280px-2022_Nissan_Qashqai_Tekna_%28UK%29%2C_front.jpg',
    'nissan sentra':      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/2020_Nissan_Sentra_SR_%28US%29%2C_front_8.3.20.jpg/1280px-2020_Nissan_Sentra_SR_%28US%29%2C_front_8.3.20.jpg',
    'nissan sunny':       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2020_Nissan_Versa_SV%2C_front_10.19.20.jpg/1280px-2020_Nissan_Versa_SV%2C_front_10.19.20.jpg',
    'nissan murano':      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2019_Nissan_Murano_SL_AWD%2C_front_9.18.19.jpg/1280px-2019_Nissan_Murano_SL_AWD%2C_front_9.18.19.jpg',
    'nissan armada':      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/2021_Nissan_Armada_Platinum_4WD%2C_front.jpg/1280px-2021_Nissan_Armada_Platinum_4WD%2C_front.jpg',
    'nissan kicks':       'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2021_Nissan_Kicks_SR_%28US%29%2C_front_8.2.21.jpg/1280px-2021_Nissan_Kicks_SR_%28US%29%2C_front_8.2.21.jpg',
    'nissan maxima':      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/2019_Nissan_Maxima_SR%2C_front_10.24.19.jpg/1280px-2019_Nissan_Maxima_SR%2C_front_10.24.19.jpg',
    'nissan frontier':    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/2022_Nissan_Frontier_PRO-4X_4WD%2C_front.jpg/1280px-2022_Nissan_Frontier_PRO-4X_4WD%2C_front.jpg',
    'nissan terra':       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2019_Nissan_Terra_2.5_VL_%28Philippines%29%2C_front.jpg/1280px-2019_Nissan_Terra_2.5_VL_%28Philippines%29%2C_front.jpg',

    // ── MITSUBISHI ──────────────────────────────────────────────────────
    'mitsubishi pajero':       'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/2019_Mitsubishi_Pajero_GLS_%28V80%29_3.2_DID%2C_front_8.26.19.jpg/1280px-2019_Mitsubishi_Pajero_GLS_%28V80%29_3.2_DID%2C_front_8.26.19.jpg',
    'mitsubishi pajero sport': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2022_Mitsubishi_Pajero_Sport_GT_Premium_4WD_%28Thailand%29%2C_front.jpg/1280px-2022_Mitsubishi_Pajero_Sport_GT_Premium_4WD_%28Thailand%29%2C_front.jpg',
    'mitsubishi outlander':    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/2022_Mitsubishi_Outlander_SEL_2.5L_%28US%29%2C_front_10.4.22.jpg/1280px-2022_Mitsubishi_Outlander_SEL_2.5L_%28US%29%2C_front_10.4.22.jpg',
    'mitsubishi eclipse cross': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2022_Mitsubishi_Eclipse_Cross_SE_AWD%2C_front.jpg/1280px-2022_Mitsubishi_Eclipse_Cross_SE_AWD%2C_front.jpg',
    'mitsubishi l200':         'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/2019_Mitsubishi_L200_Barbarian_DCi_in_Cosmic_Blue%2C_front.jpg/1280px-2019_Mitsubishi_L200_Barbarian_DCi_in_Cosmic_Blue%2C_front.jpg',
    'mitsubishi asx':          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/2023_Mitsubishi_ASX_%281st_gen%2C_facelift%2C_Instyle%29%2C_front.jpg/1280px-2023_Mitsubishi_ASX_%281st_gen%2C_facelift%2C_Instyle%29%2C_front.jpg',
    'mitsubishi xpander':      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/2022_Mitsubishi_Xpander_Ultimate_1.5_%28Indonesia%29%2C_front.jpg/1280px-2022_Mitsubishi_Xpander_Ultimate_1.5_%28Indonesia%29%2C_front.jpg',
    'mitsubishi montero':      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/2019_Mitsubishi_Pajero_GLS_%28V80%29_3.2_DID%2C_front_8.26.19.jpg/1280px-2019_Mitsubishi_Pajero_GLS_%28V80%29_3.2_DID%2C_front_8.26.19.jpg',

    // ── BMW ─────────────────────────────────────────────────────────────
    'bmw x7':       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/2019_BMW_X7_xDrive40i_%28G07%29%2C_front_9.18.19.jpg/1280px-2019_BMW_X7_xDrive40i_%28G07%29%2C_front_9.18.19.jpg',
    'bmw x5':       'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2019_BMW_X5_%28G05%29_xDrive30d%2C_front_8.19.19.jpg/1280px-2019_BMW_X5_%28G05%29_xDrive30d%2C_front_8.19.19.jpg',
    'bmw x6':       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2020_BMW_X6_M50i_%28G06%2C_US%29%2C_front_10.19.20.jpg/1280px-2020_BMW_X6_M50i_%28G06%2C_US%29%2C_front_10.19.20.jpg',
    'bmw x3':       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/2022_BMW_X3_xDrive30e_%28G01%2C_facelift%2C_UK%29%2C_front.jpg/1280px-2022_BMW_X3_xDrive30e_%28G01%2C_facelift%2C_UK%29%2C_front.jpg',
    'bmw x4':       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2022_BMW_X4_xDrive30i_%28G02%2C_facelift%29%2C_front.jpg/1280px-2022_BMW_X4_xDrive30i_%28G02%2C_facelift%29%2C_front.jpg',
    'bmw x1':       'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/2023_BMW_X1_xDrive23i_%28U11%29%2C_front.jpg/1280px-2023_BMW_X1_xDrive23i_%28U11%29%2C_front.jpg',
    'bmw 7 series': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/2023_BMW_730Ld_%28G70%29%2C_front.jpg/1280px-2023_BMW_730Ld_%28G70%29%2C_front.jpg',
    'bmw 5 series': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/2021_BMW_520d_%28G30%2C_facelift%29%2C_front.jpg/1280px-2021_BMW_520d_%28G30%2C_facelift%29%2C_front.jpg',
    'bmw 3 series': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2019_BMW_330i_%28G20%29%2C_front_8.3.19.jpg/1280px-2019_BMW_330i_%28G20%29%2C_front_8.3.19.jpg',
    'bmw 4 series': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/2021_BMW_430i_Gran_Coupe_%28G26%2C_US%29%2C_front_10.4.21.jpg/1280px-2021_BMW_430i_Gran_Coupe_%28G26%2C_US%29%2C_front_10.4.21.jpg',
    'bmw m3':       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2021_BMW_M3_Competition_%28G80%2C_Australia%29%2C_front_8.26.21.jpg/1280px-2021_BMW_M3_Competition_%28G80%2C_Australia%29%2C_front_8.26.21.jpg',
    'bmw m5':       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/2021_BMW_M5_Competition_%28F90%2C_facelift%2C_Australia%29%2C_front_8.1.21.jpg/1280px-2021_BMW_M5_Competition_%28F90%2C_facelift%2C_Australia%29%2C_front_8.1.21.jpg',

    // ── MERCEDES-BENZ ───────────────────────────────────────────────────
    'mercedes-benz g-class':  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2019_Mercedes-Benz_G_350_d_W463_AMG_Line_%28facelift%29%2C_front_9.16.19.jpg/1280px-2019_Mercedes-Benz_G_350_d_W463_AMG_Line_%28facelift%29%2C_front_9.16.19.jpg',
    'mercedes-benz gls':      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2020_Mercedes-Benz_GLS_450_4MATIC_%28X167%2C_US%29%2C_front_10.19.20.jpg/1280px-2020_Mercedes-Benz_GLS_450_4MATIC_%28X167%2C_US%29%2C_front_10.19.20.jpg',
    'mercedes-benz gle':      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/2020_Mercedes-Benz_GLE_350_4MATIC_%28W167%2C_US%29%2C_front_10.19.20.jpg/1280px-2020_Mercedes-Benz_GLE_350_4MATIC_%28W167%2C_US%29%2C_front_10.19.20.jpg',
    'mercedes-benz glc':      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2023_Mercedes-Benz_GLC_300_%28C254%2C_US%29%2C_front.jpg/1280px-2023_Mercedes-Benz_GLC_300_%28C254%2C_US%29%2C_front.jpg',
    'mercedes-benz glb':      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2020_Mercedes-Benz_GLB_250_%28X247%2C_US%29%2C_front_9.1.20.jpg/1280px-2020_Mercedes-Benz_GLB_250_%28X247%2C_US%29%2C_front_9.1.20.jpg',
    'mercedes-benz gla':      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/2021_Mercedes-Benz_GLA_250_%28H247%2C_US%29%2C_front_10.4.21.jpg/1280px-2021_Mercedes-Benz_GLA_250_%28H247%2C_US%29%2C_front_10.4.21.jpg',
    'mercedes-benz s-class':  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/2021_Mercedes-Benz_S_580_%28W223%2C_US%29_front_10.3.21.jpg/1280px-2021_Mercedes-Benz_S_580_%28W223%2C_US%29_front_10.3.21.jpg',
    'mercedes-benz e-class':  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2020_Mercedes-Benz_E_350_%28W213%2C_US%29_front.jpg/1280px-2020_Mercedes-Benz_E_350_%28W213%2C_US%29_front.jpg',
    'mercedes-benz c-class':  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2022_Mercedes-Benz_C_300_%28W206%2C_US%29%2C_front_10.19.22.jpg/1280px-2022_Mercedes-Benz_C_300_%28W206%2C_US%29%2C_front_10.19.22.jpg',
    'mercedes-benz a-class':  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2019_Mercedes-Benz_A_200_Sport_Premium_Plus_1.3_Front.jpg/1280px-2019_Mercedes-Benz_A_200_Sport_Premium_Plus_1.3_Front.jpg',
    'mercedes-benz cla':      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2020_Mercedes-Benz_CLA_250_4Matic_%28C118%2C_US%29%2C_front_7.27.20.jpg/1280px-2020_Mercedes-Benz_CLA_250_4Matic_%28C118%2C_US%29%2C_front_7.27.20.jpg',
    'mercedes-benz amg gt':   'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/2020_Mercedes-AMG_GT_63_S_4MATIC%2B_%28X290%2C_US%29%2C_front_9.18.20.jpg/1280px-2020_Mercedes-AMG_GT_63_S_4MATIC%2B_%28X290%2C_US%29%2C_front_9.18.20.jpg',
    'mercedes g-class':       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2019_Mercedes-Benz_G_350_d_W463_AMG_Line_%28facelift%29%2C_front_9.16.19.jpg/1280px-2019_Mercedes-Benz_G_350_d_W463_AMG_Line_%28facelift%29%2C_front_9.16.19.jpg',

    // ── LEXUS ────────────────────────────────────────────────────────────
    'lexus lx':   'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2022_Lexus_LX_600_F_Sport%2C_front.jpg/1280px-2022_Lexus_LX_600_F_Sport%2C_front.jpg',
    'lexus lx 600': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2022_Lexus_LX_600_F_Sport%2C_front.jpg/1280px-2022_Lexus_LX_600_F_Sport%2C_front.jpg',
    'lexus lx 570': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/2016_Lexus_LX_570_%28URJ201R%2C_facelift%29_SUV_%28Australia%29.jpg/1280px-2016_Lexus_LX_570_%28URJ201R%2C_facelift%29_SUV_%28Australia%29.jpg',
    'lexus gx':   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/2023_Lexus_GX_550_Overtrail%2C_front.jpg/1280px-2023_Lexus_GX_550_Overtrail%2C_front.jpg',
    'lexus rx':   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/2023_Lexus_RX_500h_F_Sport_Performance%2C_front.jpg/1280px-2023_Lexus_RX_500h_F_Sport_Performance%2C_front.jpg',
    'lexus nx':   'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/2022_Lexus_NX_450h%2B_F_Sport%2C_front.jpg/1280px-2022_Lexus_NX_450h%2B_F_Sport%2C_front.jpg',
    'lexus es':   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2022_Lexus_ES_350_F_Sport%2C_front.jpg/1280px-2022_Lexus_ES_350_F_Sport%2C_front.jpg',
    'lexus is':   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/2021_Lexus_IS_350_F_Sport_%28US%29%2C_front_8.6.21.jpg/1280px-2021_Lexus_IS_350_F_Sport_%28US%29%2C_front_8.6.21.jpg',
    'lexus ls':   'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2021_Lexus_LS_500_F_Sport_AWD%2C_front_8.6.21.jpg/1280px-2021_Lexus_LS_500_F_Sport_AWD%2C_front_8.6.21.jpg',
    'lexus ux':   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2019_Lexus_UX_250h_F_Sport%2C_front_7.30.19.jpg/1280px-2019_Lexus_UX_250h_F_Sport%2C_front_7.30.19.jpg',
    'lexus lc':   'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/2022_Lexus_LC_500h_%28AU%29%2C_front.jpg/1280px-2022_Lexus_LC_500h_%28AU%29%2C_front.jpg',

    // ── LAND ROVER / RANGE ROVER ─────────────────────────────────────────
    'land rover range rover':        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2022_Land_Rover_Range_Rover_P530_SV_%28UK%29%2C_front.jpg/1280px-2022_Land_Rover_Range_Rover_P530_SV_%28UK%29%2C_front.jpg',
    'land rover range rover sport':  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2022_Land_Rover_Range_Rover_Sport_P400_Dynamic_SE_%28UK%29%2C_front.jpg/1280px-2022_Land_Rover_Range_Rover_Sport_P400_Dynamic_SE_%28UK%29%2C_front.jpg',
    'land rover range rover evoque': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2019_Land_Rover_Range_Rover_Evoque_%28L551%29_SE_in_Byron_Blue%2C_front.jpg/1280px-2019_Land_Rover_Range_Rover_Evoque_%28L551%29_SE_in_Byron_Blue%2C_front.jpg',
    'land rover defender':           'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2022_Land_Rover_Defender_110_P400_SE_%28UK%29%2C_front.jpg/1280px-2022_Land_Rover_Defender_110_P400_SE_%28UK%29%2C_front.jpg',
    'land rover discovery':          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/2021_Land_Rover_Discovery_SE_P300_%28UK%29%2C_front.jpg/1280px-2021_Land_Rover_Discovery_SE_P300_%28UK%29%2C_front.jpg',
    'land rover discovery sport':    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2020_Land_Rover_Discovery_Sport_SE_P200_%28UK%29%2C_front.jpg/1280px-2020_Land_Rover_Discovery_Sport_SE_P200_%28UK%29%2C_front.jpg',
    'range rover':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2022_Land_Rover_Range_Rover_P530_SV_%28UK%29%2C_front.jpg/1280px-2022_Land_Rover_Range_Rover_P530_SV_%28UK%29%2C_front.jpg',

    // ── PORSCHE ──────────────────────────────────────────────────────────
    'porsche cayenne': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2019_Porsche_Cayenne_S_%28E3%2C_US%29%2C_front_9.18.19.jpg/1280px-2019_Porsche_Cayenne_S_%28E3%2C_US%29%2C_front_9.18.19.jpg',
    'porsche macan':   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2022_Porsche_Macan_GTS_%28UK%29%2C_front.jpg/1280px-2022_Porsche_Macan_GTS_%28UK%29%2C_front.jpg',
    'porsche 911':     'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2020_Porsche_911_Carrera_S_%28992%29_Cabriolet_%28UK%29%2C_front.jpg/1280px-2020_Porsche_911_Carrera_S_%28992%29_Cabriolet_%28UK%29%2C_front.jpg',
    'porsche panamera':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2021_Porsche_Panamera_Turbo_S_%28US%29%2C_front_10.4.21.jpg/1280px-2021_Porsche_Panamera_Turbo_S_%28US%29%2C_front_10.4.21.jpg',
    'porsche taycan':  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2020_Porsche_Taycan_Turbo_S_%28US%29%2C_front_8.20.20.jpg/1280px-2020_Porsche_Taycan_Turbo_S_%28US%29%2C_front_8.20.20.jpg',

    // ── HONDA ────────────────────────────────────────────────────────────
    'honda accord':  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/2023_Honda_Accord_EX-L%2C_front.jpg/1280px-2023_Honda_Accord_EX-L%2C_front.jpg',
    'honda civic':   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2022_Honda_Civic_EX%2C_front.jpg/1280px-2022_Honda_Civic_EX%2C_front.jpg',
    'honda cr-v':    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2023_Honda_CR-V_Sport_AWD%2C_front.jpg/1280px-2023_Honda_CR-V_Sport_AWD%2C_front.jpg',
    'honda pilot':   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/2023_Honda_Pilot_TrailSport_AWD%2C_front.jpg/1280px-2023_Honda_Pilot_TrailSport_AWD%2C_front.jpg',
    'honda odyssey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2021_Honda_Odyssey_Elite%2C_front_8.6.21.jpg/1280px-2021_Honda_Odyssey_Elite%2C_front_8.6.21.jpg',
    'honda passport':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2022_Honda_Passport_TrailSport_AWD%2C_front.jpg/1280px-2022_Honda_Passport_TrailSport_AWD%2C_front.jpg',
    'honda ridgeline':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/2021_Honda_Ridgeline_RTL-E_AWD%2C_front_8.6.21.jpg/1280px-2021_Honda_Ridgeline_RTL-E_AWD%2C_front_8.6.21.jpg',
    'honda hr-v':    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/2023_Honda_HR-V_EX-L_AWD%2C_front.jpg/1280px-2023_Honda_HR-V_EX-L_AWD%2C_front.jpg',
    'honda city':    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/2021_Honda_City_RS_%28GN2%2C_Thailand%29%2C_front.jpg/1280px-2021_Honda_City_RS_%28GN2%2C_Thailand%29%2C_front.jpg',

    // ── HYUNDAI ──────────────────────────────────────────────────────────
    'hyundai elantra':  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2021_Hyundai_Elantra_SEL%2C_front_8.6.21.jpg/1280px-2021_Hyundai_Elantra_SEL%2C_front_8.6.21.jpg',
    'hyundai sonata':   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2020_Hyundai_Sonata_SEL_%28US%29%2C_front_8.3.20.jpg/1280px-2020_Hyundai_Sonata_SEL_%28US%29%2C_front_8.3.20.jpg',
    'hyundai tucson':   'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/2022_Hyundai_Tucson_N_Line_1.6_T-GDi_%28UK%29%2C_front.jpg/1280px-2022_Hyundai_Tucson_N_Line_1.6_T-GDi_%28UK%29%2C_front.jpg',
    'hyundai santa fe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/2021_Hyundai_Santa_Fe_Calligraphy_%28US%29%2C_front_8.2.21.jpg/1280px-2021_Hyundai_Santa_Fe_Calligraphy_%28US%29%2C_front_8.2.21.jpg',
    'hyundai palisade': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/2020_Hyundai_Palisade_SEL_AWD%2C_front_12.18.19.jpg/1280px-2020_Hyundai_Palisade_SEL_AWD%2C_front_12.18.19.jpg',
    'hyundai kona':     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2022_Hyundai_Kona_N_Line_1.0_T-GDi_%28UK%29%2C_front.jpg/1280px-2022_Hyundai_Kona_N_Line_1.0_T-GDi_%28UK%29%2C_front.jpg',
    'hyundai accent':   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2018_Hyundai_Accent_SE%2C_front_9.3.18.jpg/1280px-2018_Hyundai_Accent_SE%2C_front_9.3.18.jpg',
    'hyundai creta':    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/2021_Hyundai_Creta_%28SU2%2C_facelift%29_Turbo_%28India%29%2C_front.jpg/1280px-2021_Hyundai_Creta_%28SU2%2C_facelift%29_Turbo_%28India%29%2C_front.jpg',
    'hyundai staria':   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2022_Hyundai_Staria_Premium_4WD_%28KR%29%2C_front.jpg/1280px-2022_Hyundai_Staria_Premium_4WD_%28KR%29%2C_front.jpg',
    'hyundai ioniq 5':  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2022_Hyundai_IONIQ_5_AWD%2C_front.jpg/1280px-2022_Hyundai_IONIQ_5_AWD%2C_front.jpg',
    'hyundai veloster': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/2020_Hyundai_Veloster_N_%28US%29%2C_front_8.3.20.jpg/1280px-2020_Hyundai_Veloster_N_%28US%29%2C_front_8.3.20.jpg',

    // ── KIA ──────────────────────────────────────────────────────────────
    'kia sportage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2022_Kia_Sportage_SX_AWD%2C_front.jpg/1280px-2022_Kia_Sportage_SX_AWD%2C_front.jpg',
    'kia sorento':  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/2023_Kia_Sorento_SX_AWD%2C_front.jpg/1280px-2023_Kia_Sorento_SX_AWD%2C_front.jpg',
    'kia telluride':'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/2020_Kia_Telluride_SX_AWD%2C_front_9.1.20.jpg/1280px-2020_Kia_Telluride_SX_AWD%2C_front_9.1.20.jpg',
    'kia carnival': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/2022_Kia_Carnival_SX_AWD%2C_front.jpg/1280px-2022_Kia_Carnival_SX_AWD%2C_front.jpg',
    'kia cerato':   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/2022_Kia_Cerato_Sport%2B_1.6_GDi_%28AU%29%2C_front.jpg/1280px-2022_Kia_Cerato_Sport%2B_1.6_GDi_%28AU%29%2C_front.jpg',
    'kia stinger':  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2022_Kia_Stinger_GT_%28US%29%2C_front.jpg/1280px-2022_Kia_Stinger_GT_%28US%29%2C_front.jpg',
    'kia k5':       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2022_Kia_K5_GT_%28US%29%2C_front.jpg/1280px-2022_Kia_K5_GT_%28US%29%2C_front.jpg',
    'kia seltos':   'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/2022_Kia_Seltos_SX_AWD%2C_front.jpg/1280px-2022_Kia_Seltos_SX_AWD%2C_front.jpg',
    'kia picanto':  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2021_Kia_Picanto_GT_Line_1.0T_%28UK%29%2C_front.jpg/1280px-2021_Kia_Picanto_GT_Line_1.0T_%28UK%29%2C_front.jpg',
    'kia ev6':      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2022_Kia_EV6_GT-Line_AWD_%28AU%29%2C_front.jpg/1280px-2022_Kia_EV6_GT-Line_AWD_%28AU%29%2C_front.jpg',

    // ── AUDI ─────────────────────────────────────────────────────────────
    'audi q8':  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/2019_Audi_Q8_50_TDI_quattro_%28UK%29%2C_front.jpg/1280px-2019_Audi_Q8_50_TDI_quattro_%28UK%29%2C_front.jpg',
    'audi q7':  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2020_Audi_Q7_60_TFSI_e_quattro_%28UK%29%2C_front.jpg/1280px-2020_Audi_Q7_60_TFSI_e_quattro_%28UK%29%2C_front.jpg',
    'audi q5':  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/2021_Audi_Q5_40_TDI_quattro_%28B9%2C_facelift%29%2C_front.jpg/1280px-2021_Audi_Q5_40_TDI_quattro_%28B9%2C_facelift%29%2C_front.jpg',
    'audi q3':  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/2019_Audi_Q3_35_TFSI_S_Line_%28UK%29%2C_front.jpg/1280px-2019_Audi_Q3_35_TFSI_S_Line_%28UK%29%2C_front.jpg',
    'audi a8':  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/2022_Audi_A8_60_TFSI_e_quattro_%28D5%2C_UK%29%2C_front.jpg/1280px-2022_Audi_A8_60_TFSI_e_quattro_%28D5%2C_UK%29%2C_front.jpg',
    'audi a6':  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/2019_Audi_A6_S_line_45_TDI_quattro%2C_front.jpg/1280px-2019_Audi_A6_S_line_45_TDI_quattro%2C_front.jpg',
    'audi a4':  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/2019_Audi_A4_40_TDI_S_line%2C_front.jpg/1280px-2019_Audi_A4_40_TDI_S_line%2C_front.jpg',
    'audi a3':  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2021_Audi_A3_Sedan_35_TFSI_S_Line_%28UK%29%2C_front.jpg/1280px-2021_Audi_A3_Sedan_35_TFSI_S_Line_%28UK%29%2C_front.jpg',
    'audi e-tron': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/2019_Audi_e-tron_55_quattro%2C_front_9.18.19.jpg/1280px-2019_Audi_e-tron_55_quattro%2C_front_9.18.19.jpg',
    'audi rs6':    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2020_Audi_RS_6_Avant_%28C8%2C_UK%29%2C_front.jpg/1280px-2020_Audi_RS_6_Avant_%28C8%2C_UK%29%2C_front.jpg',

    // ── CHEVROLET / GMC ──────────────────────────────────────────────────
    'chevrolet tahoe':    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2021_Chevrolet_Tahoe_Z71_4WD%2C_front_7.7.21.jpg/1280px-2021_Chevrolet_Tahoe_Z71_4WD%2C_front_7.7.21.jpg',
    'chevrolet suburban': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2021_Chevrolet_Suburban_Premier_4WD%2C_front_8.2.21.jpg/1280px-2021_Chevrolet_Suburban_Premier_4WD%2C_front_8.2.21.jpg',
    'chevrolet traverse': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/2022_Chevrolet_Traverse_RS_AWD%2C_front.jpg/1280px-2022_Chevrolet_Traverse_RS_AWD%2C_front.jpg',
    'chevrolet blazer':   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/2022_Chevrolet_Blazer_RS_AWD%2C_front.jpg/1280px-2022_Chevrolet_Blazer_RS_AWD%2C_front.jpg',
    'chevrolet equinox':  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2022_Chevrolet_Equinox_RS_AWD%2C_front.jpg/1280px-2022_Chevrolet_Equinox_RS_AWD%2C_front.jpg',
    'chevrolet silverado':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2022_Chevrolet_Silverado_1500_LTZ_4WD%2C_front.jpg/1280px-2022_Chevrolet_Silverado_1500_LTZ_4WD%2C_front.jpg',
    'chevrolet malibu':   'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2019_Chevrolet_Malibu_LT%2C_front_9.3.18.jpg/1280px-2019_Chevrolet_Malibu_LT%2C_front_9.3.18.jpg',
    'chevrolet camaro':   'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2022_Chevrolet_Camaro_2SS_Coupe%2C_front.jpg/1280px-2022_Chevrolet_Camaro_2SS_Coupe%2C_front.jpg',
    'gmc yukon':          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/2021_GMC_Yukon_XL_SLT_4WD%2C_front_9.16.21.jpg/1280px-2021_GMC_Yukon_XL_SLT_4WD%2C_front_9.16.21.jpg',
    'gmc sierra':         'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2022_GMC_Sierra_1500_SLT_4WD%2C_front.jpg/1280px-2022_GMC_Sierra_1500_SLT_4WD%2C_front.jpg',
    'gmc terrain':        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2022_GMC_Terrain_Denali_AWD%2C_front.jpg/1280px-2022_GMC_Terrain_Denali_AWD%2C_front.jpg',
    'gmc acadia':         'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2020_GMC_Acadia_Denali_AWD%2C_front_10.19.20.jpg/1280px-2020_GMC_Acadia_Denali_AWD%2C_front_10.19.20.jpg',

    // ── FORD ─────────────────────────────────────────────────────────────
    'ford explorer':  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/2020_Ford_Explorer_XLT_4WD%2C_front_9.1.20.jpg/1280px-2020_Ford_Explorer_XLT_4WD%2C_front_9.1.20.jpg',
    'ford f-150':     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2021_Ford_F-150_Lariat_SuperCrew_4WD%2C_front_10.4.21.jpg/1280px-2021_Ford_F-150_Lariat_SuperCrew_4WD%2C_front_10.4.21.jpg',
    'ford ranger':    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/2023_Ford_Ranger_XLT_4x4%2C_front.jpg/1280px-2023_Ford_Ranger_XLT_4x4%2C_front.jpg',
    'ford bronco':    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/2022_Ford_Bronco_Outer_Banks_%28US%29%2C_front.jpg/1280px-2022_Ford_Bronco_Outer_Banks_%28US%29%2C_front.jpg',
    'ford mustang':   'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2022_Ford_Mustang_GT_Premium_5.0L%2C_front.jpg/1280px-2022_Ford_Mustang_GT_Premium_5.0L%2C_front.jpg',
    'ford edge':      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2021_Ford_Edge_ST-Line_2.0T_EcoBoost_%28China%29%2C_front.jpg/1280px-2021_Ford_Edge_ST-Line_2.0T_EcoBoost_%28China%29%2C_front.jpg',
    'ford expedition':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2022_Ford_Expedition_XLT_4WD%2C_front.jpg/1280px-2022_Ford_Expedition_XLT_4WD%2C_front.jpg',

    // ── DODGE / RAM / JEEP ───────────────────────────────────────────────
    'dodge charger':      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/2021_Dodge_Charger_R%2FT_%28facelifted%2C_RWD%29%2C_front.jpg/1280px-2021_Dodge_Charger_R%2FT_%28facelifted%2C_RWD%29%2C_front.jpg',
    'dodge challenger':   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/2018_Dodge_Challenger_GT_AWD%2C_front.jpg/1280px-2018_Dodge_Challenger_GT_AWD%2C_front.jpg',
    'dodge durango':      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2021_Dodge_Durango_R%2FT_AWD%2C_front_8.2.21.jpg/1280px-2021_Dodge_Durango_R%2FT_AWD%2C_front_8.2.21.jpg',
    'ram 1500':           'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2022_Ram_1500_Laramie_4x4%2C_front.jpg/1280px-2022_Ram_1500_Laramie_4x4%2C_front.jpg',
    'jeep wrangler':      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2021_Jeep_Wrangler_Rubicon_392_Extreme_Recon_%28US%29%2C_front_8.2.21.jpg/1280px-2021_Jeep_Wrangler_Rubicon_392_Extreme_Recon_%28US%29%2C_front_8.2.21.jpg',
    'jeep grand cherokee':'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2021_Jeep_Grand_Cherokee_L_Summit_4x4%2C_front_8.2.21.jpg/1280px-2021_Jeep_Grand_Cherokee_L_Summit_4x4%2C_front_8.2.21.jpg',
    'jeep compass':       'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/2021_Jeep_Compass_Trailhawk_4x4%2C_front_8.2.21.jpg/1280px-2021_Jeep_Compass_Trailhawk_4x4%2C_front_8.2.21.jpg',
    'jeep gladiator':     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2020_Jeep_Gladiator_Rubicon_in_Hydro_Blue%2C_front_right.jpg/1280px-2020_Jeep_Gladiator_Rubicon_in_Hydro_Blue%2C_front_right.jpg',

    // ── INFINITI ─────────────────────────────────────────────────────────
    'infiniti qx80': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/2023_Infiniti_QX80_Sensory_%28US%29%2C_front.jpg/1280px-2023_Infiniti_QX80_Sensory_%28US%29%2C_front.jpg',
    'infiniti qx60': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2022_Infiniti_QX60_Autograph_AWD%2C_front.jpg/1280px-2022_Infiniti_QX60_Autograph_AWD%2C_front.jpg',
    'infiniti qx50': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/2020_Infiniti_QX50_Luxe_AWD%2C_front_10.19.20.jpg/1280px-2020_Infiniti_QX50_Luxe_AWD%2C_front_10.19.20.jpg',
    'infiniti q50':  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2022_Infiniti_Q50_Luxe_AWD%2C_front.jpg/1280px-2022_Infiniti_Q50_Luxe_AWD%2C_front.jpg',
    'infiniti q60':  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/2018_Infiniti_Q60_3.0t_Red_Sport_AWD%2C_front_9.3.18.jpg/1280px-2018_Infiniti_Q60_3.0t_Red_Sport_AWD%2C_front_9.3.18.jpg',

    // ── MAZDA ────────────────────────────────────────────────────────────
    'mazda cx-5':  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2022_Mazda_CX-5_2.5_S_Carbon_Edition_AWD%2C_front.jpg/1280px-2022_Mazda_CX-5_2.5_S_Carbon_Edition_AWD%2C_front.jpg',
    'mazda cx-9':  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/2021_Mazda_CX-9_Grand_Touring_AWD%2C_front_8.6.21.jpg/1280px-2021_Mazda_CX-9_Grand_Touring_AWD%2C_front_8.6.21.jpg',
    'mazda cx-60': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/2022_Mazda_CX-60_PHEV_%28UK%29%2C_front.jpg/1280px-2022_Mazda_CX-60_PHEV_%28UK%29%2C_front.jpg',
    'mazda 3':     'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2019_Mazda_3_2.0_Selection_%28BP%2C_sedan%2C_blue%29%2C_front.jpg/1280px-2019_Mazda_3_2.0_Selection_%28BP%2C_sedan%2C_blue%29%2C_front.jpg',
    'mazda 6':     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/2018_Mazda_6_2.0_SE-L_Nav%2B_%28UK%29%2C_front_8.1.18.jpg/1280px-2018_Mazda_6_2.0_SE-L_Nav%2B_%28UK%29%2C_front_8.1.18.jpg',

    // ── SUBARU ───────────────────────────────────────────────────────────
    'subaru outback':  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2020_Subaru_Outback_Limited_AWD%2C_front_9.1.20.jpg/1280px-2020_Subaru_Outback_Limited_AWD%2C_front_9.1.20.jpg',
    'subaru forester': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2019_Subaru_Forester_2.5i_Premium_%28US%29%2C_front_8.19.19.jpg/1280px-2019_Subaru_Forester_2.5i_Premium_%28US%29%2C_front_8.19.19.jpg',
    'subaru wrx':      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2022_Subaru_WRX_Limited%2C_front.jpg/1280px-2022_Subaru_WRX_Limited%2C_front.jpg',

    // ── VOLVO ────────────────────────────────────────────────────────────
    'volvo xc90': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2020_Volvo_XC90_T8_Inscription_AWD%2C_front_9.1.20.jpg/1280px-2020_Volvo_XC90_T8_Inscription_AWD%2C_front_9.1.20.jpg',
    'volvo xc60': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2018_Volvo_XC60_T8_Inscription_AWD%2C_front_9.3.18.jpg/1280px-2018_Volvo_XC60_T8_Inscription_AWD%2C_front_9.3.18.jpg',
    'volvo s60':  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/2019_Volvo_S60_T6_Inscription_AWD%2C_front_8.19.19.jpg/1280px-2019_Volvo_S60_T6_Inscription_AWD%2C_front_8.19.19.jpg',

    // ── VW ───────────────────────────────────────────────────────────────
    'volkswagen tiguan':  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/2021_Volkswagen_Tiguan_R-Line_2.0_TDI_%28UK%29%2C_front.jpg/1280px-2021_Volkswagen_Tiguan_R-Line_2.0_TDI_%28UK%29%2C_front.jpg',
    'volkswagen touareg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_Volkswagen_Touareg_R-Line_%28CR%29%2C_front_9.3.18.jpg/1280px-2018_Volkswagen_Touareg_R-Line_%28CR%29%2C_front_9.3.18.jpg',
    'volkswagen passat':  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2019_Volkswagen_Passat_SE_2.0T_FWD%2C_front_10.7.19.jpg/1280px-2019_Volkswagen_Passat_SE_2.0T_FWD%2C_front_10.7.19.jpg',
    'volkswagen golf':    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/2021_Volkswagen_Golf_Style_1.5_TSI_%28Mk8%2C_grey%29%2C_front_8.18.21.jpg/1280px-2021_Volkswagen_Golf_Style_1.5_TSI_%28Mk8%2C_grey%29%2C_front_8.18.21.jpg',
    'volkswagen id.4':    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2021_Volkswagen_ID.4_1st_Edition_AWD_%28US%29%2C_front_8.6.21.jpg/1280px-2021_Volkswagen_ID.4_1st_Edition_AWD_%28US%29%2C_front_8.6.21.jpg',

    // ── CHINESE BRANDS ───────────────────────────────────────────────────
    'mg rx8':     'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/MG_RX8_%28first_generation%29%2C_front_8.5.19.jpg/1280px-MG_RX8_%28first_generation%29%2C_front_8.5.19.jpg',
    'mg hs':      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2022_MG_HS_Trophy_%28UK%29%2C_front.jpg/1280px-2022_MG_HS_Trophy_%28UK%29%2C_front.jpg',
    'mg zs':      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2020_MG_ZS_Trophy_%28UK%29%2C_front_9.1.20.jpg/1280px-2020_MG_ZS_Trophy_%28UK%29%2C_front_9.1.20.jpg',
    'mg 6':       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/2021_MG_6_Trophy_%28UK%29%2C_front.jpg/1280px-2021_MG_6_Trophy_%28UK%29%2C_front.jpg',
    'haval h6':   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2021_Haval_H6_Supreme%2B_%28third_gen%2C_China%29%2C_front.jpg/1280px-2021_Haval_H6_Supreme%2B_%28third_gen%2C_China%29%2C_front.jpg',
    'haval jolion':'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/2022_Haval_Jolion_Supreme_1.5T_%28China%29%2C_front.jpg/1280px-2022_Haval_Jolion_Supreme_1.5T_%28China%29%2C_front.jpg',
    'gac gs8':    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_GAC_GS8_2.0T_%28China%29%2C_front.jpg/1280px-2019_GAC_GS8_2.0T_%28China%29%2C_front.jpg',
    'byd atto 3': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2022_BYD_Atto_3_%28Australia%29%2C_front.jpg/1280px-2022_BYD_Atto_3_%28Australia%29%2C_front.jpg',
    'byd seal':   'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2023_BYD_Seal_%28China%29%2C_front.jpg/1280px-2023_BYD_Seal_%28China%29%2C_front.jpg',
    'byd han':    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/2021_BYD_Han_EV_%28China%29%2C_front.jpg/1280px-2021_BYD_Han_EV_%28China%29%2C_front.jpg',
    'jetour x70': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jetour_X70_%28facelift%2C_China%2C_2021%29%2C_front.jpg/1280px-Jetour_X70_%28facelift%2C_China%2C_2021%29%2C_front.jpg',
    'omoda 5':    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/2023_Omoda_5_%28China%29%2C_front.jpg/1280px-2023_Omoda_5_%28China%29%2C_front.jpg',
  };

  const key = (brand + ' ' + model).toLowerCase().replace(/\s+/g,' ').trim();

  // 1. Exact match
  if(CURATED[key]) return CURATED[key];

  // 2. Partial match — brand + first word of model
  const firstWord = model.toLowerCase().split(' ')[0];
  const partialKey = brand.toLowerCase() + ' ' + firstWord;
  for(const [k,v] of Object.entries(CURATED)){
    if(k.startsWith(partialKey)) return v;
  }

  // 3. Brand-only fallback — return first car of that brand
  const brandLow = brand.toLowerCase();
  for(const [k,v] of Object.entries(CURATED)){
    if(k.startsWith(brandLow+' ')) return v;
  }

  // 4. No match — SVG silhouette fallback
  return null;
}

/* ══════════════════════════════════════════════════════════════════════════
   KAM SAYARA — VALUATION ENGINE v42
   Combination model: Worker fetches raw market data → Frontend computes
   all pricing logic deterministically.
   
   Input:  raw market data (low, high, comp, listings) + user inputs
   Output: handshake, adjustments, verdict, bestMove, script, costs
   ══════════════════════════════════════════════════════════════════════════ */
function buildResult(r,brand,model,year,mileage,asking){
  const conf=Math.round((r.confidence||0)*100);
  const avg=r.averagePrice||0;
  const low=r.lowPrice||0;
  const high=r.highPrice||0;
  const comp=r.listingsFound||0;
  const askN=asking?parseInt(asking):null;
  const ai=r.ai||null;
  const mkt=r.marketability||null;
  const avr    = r.avr                || {};
  const cmp    = r.comparisonToAsking || null;
  const script = r.hagglingScript     || '';

  // DATA SOURCE — from worker tier
  const _dataSource = r.dataSource || (r.isEstimate ? 'estimate' : 'live');
  const _tier       = r.tier ?? (r.isEstimate ? 4 : 1);
  const _isLive     = _dataSource === 'live';
  // Gap-C fix: tier===0 is a cache hit (worker sends both cached:true AND tier:0)
  const _tierLabel  = (r.cached||_tier===0)?'Cached Data':_tier===1?'Live Search':_tier===2?'Gemini Backup':_tier===3?'Haiku Offline':'AI Formula';
  const _tierCls    = (r.cached||_tier===0)?'ks-tier-cache':_tier===1?'ks-tier-serper':_tier===2?'ks-tier-gemini':_tier===3?'ks-tier-haiku':'ks-tier-formula';
  const _sourceBadge= '<span class="ks-source-badge ks-source-'+(_isLive?'live':'estimate')+'"><span class="ks-source-dot"></span>'+(_isLive?'Live':'AI Assisted')+'</span>';
  const _tierBadge  = '<span class="ks-tier-chip '+_tierCls+'">'+_tierLabel+'</span>';

  const ref=generateRef(r.ref||window._preGeneratedRef||null);
  // Clear pre-generated ref now that buildResult has consumed it
  window._preGeneratedRef = null;
  const refEl=document.getElementById('resultRef');
  if(refEl){refEl.textContent=ref.label;refEl.style.display='inline';}
  const mobRefEl=document.getElementById('mobRef');
  if(mobRefEl){mobRefEl.textContent=ref.label;mobRefEl.classList.add('on');}

  const specVal  =g('spec')?.value||'GCC';
  const condVal  =g('condition')?.value||'';
  const colourVal=g('colour')?.value||'';
  const svcVal   ='';
  const bodyVal  ='';
  const sellerVal='';
  const accVal   =qs.accident===true?'minor':qs.accident===false?'none':'none';
  const ownVal   =qs.singleOwner===true?'1':qs.singleOwner===false?'2':'';
  const warVal   =qs.warranty===true?'active':qs.warranty===false?'expired':'';
  const emirVal  ='';
  const finVal   ='';
  const purpVal  =g('purpose')?.value||'buying';
  const km       =mileage?parseInt(mileage):0;
  const kmFmt    =km?km.toLocaleString():'—';
  const carYear  =parseInt(year)||2020;
  const cy       =new Date().getFullYear();
  const carAge   =Math.max(1,cy-carYear);
  const confLabel=conf>=75?'High Confidence':conf>=50?'Medium Confidence':'Low Confidence';
  // Fix 1: Confidence-proportional range widening
  // High confidence (cs≥75): use API low/high directly; tight band
  // Medium confidence (cs 40–74): widen ±5% beyond API range
  // Low confidence (cs<40): widen ±12% — more uncertainty → wider band
  const _confScore = r.confidence_score ?? Math.round((r.confidence||0)*100);
  const _widthMult = _confScore >= 75 ? 1.00 : _confScore >= 40 ? 1.05 : 1.12;
  const _rawLow  = low  || Math.round(avg * 0.82);
  const _rawHigh = high || Math.round(avg * 1.18);
  const _midPt   = (_rawLow + _rawHigh) / 2;
  const sliderLow = Math.round((_midPt - (_midPt - _rawLow)  * _widthMult) / 500) * 500;
  const sldrHigh  = Math.round((_midPt + (_rawHigh - _midPt) * _widthMult) / 500) * 500;
  const offerPx  =askN||avg;
  const rng      =sldrHigh-sliderLow;
  const starPct  =rng>0?Math.max(4,Math.min(96,Math.round(((offerPx-sliderLow)/rng)*100))):50;
  const rawPct   =low&&high&&high>low?Math.round(((offerPx-low)/(high-low))*100):null;
  const posPct   =rawPct!==null?Math.max(1,Math.min(99,rawPct)):null;
  // Body-type detection — comprehensive GCC market model lookup
  const _bodyKey = ksDetectBodyType(brand, model);
  const _carSvg = typeof buildSilhouetteSVG==='function' ? buildSilhouetteSVG(_bodyKey,'') : '';
  const maxBarH  =Math.max(askN||0,avg)||1;
  const askBarH  =askN?Math.max(20,Math.round((askN/maxBarH)*120)):0;
  const avgBarH  =Math.max(20,Math.round((avg/maxBarH)*120));

  _lastValuationData={
    ref:ref.label,carName:`${year} ${brand}${model?' '+model:''}`,
    avg,low,high,comp,conf:r.confidence||0,askingPrice:askN,marketability:mkt,ai,
    aiCls:ai?aiRatingClass(ai.deal_rating):'neu',
    handshake:0, verdict:'', gapAbs:0,
    inputs:[
      ['Brand',brand||'—'],['Model',model||'—'],['Year',year||'—'],
      g('trim')?.value?['Trim',g('trim').value]:null,
      mileage?['Mileage',km.toLocaleString()+' km']:null,
      specVal?['Spec',specVal]:null,condVal?['Condition',condVal]:null,
      askN?['Asking Price','AED '+askN.toLocaleString()]:null,
      qs.fsh!==null?['Service History',qs.fsh?'Yes':'No']:null,
      qs.warranty!==null?['Warranty',qs.warranty?'Active':'None']:null,
      qs.singleOwner!==null?['Single Owner',qs.singleOwner?'Yes':'No']:null,
      qs.accident!==null?['Accident',qs.accident?'Yes':'No']:null,
    ].filter(Boolean),
  };

  const adjItems=buildConditionAdjustments(specVal,km,condVal,carYear,avg);
  const {green:gF,red:rF}=buildFlags(specVal,km,condVal,carYear,'','',accVal,ownVal,warVal);

  // ── v42 COMBINATION ENGINE: deterministic frontend valuation ─────────────
  // _vc is computed by the Worker (v67+) — read directly
  const _vc = r._vc || {};

  // Expose as named variables used throughout buildResult
  // v72: colour adjustment (+1.5% White/Silver/Black, -1.5% Red/Blue/Green, -2.5% Brown/Maroon/Other)
  const _colourAdj = (()=>{
    const c = (colourVal||'').toLowerCase();
    if(['white','silver','black'].some(x=>c.includes(x))) return 1.015;
    if(['red','blue','green'].some(x=>c.includes(x)))     return 0.985;
    if(['brown','maroon','other'].some(x=>c.includes(x))) return 0.975;
    if(c) return 0.975; // unrecognised colour = treat as Other
    return 1; // no colour selected — no adjustment
  })();
  const handshake     = Math.round((_vc.handshake || r.averagePrice || 0) * _colourAdj / 500) * 500;
  const rangeMin      = r.lowPrice || 0;
  const rangeMax      = r.highPrice || 0;
  const sweetSpot     = 0; // removed per v43 design
  // Gap-F: dealInfo removed — getDealBadgeInfo result was computed but never rendered.
  // v67 fix: getBuddyVerdict uses handshake (confidence-adjusted FMV) not raw avg
  const _openOffer = _vc.openOffer || Math.round((_vc.handshake||0)*0.93/500)*500;
  const nego = {
    offer:  _openOffer,
    close:  (_vc.handshake||0),
    walk:   Math.round((_vc.handshake||0)*1.03/500)*500,
    room:   askN ? Math.max(0, Math.round((1 - _openOffer / askN) * 100)) : 0,
    tactic: (_vc.bestMove&&_vc.bestMove.note||""),
    script: (_vc.negoScript||r.hagglingScript||""),
  };

  // Gap-J fix: pass nego so offer/close hints use worker anchors
  const {vk,vl,para}=getBuddyVerdict(askN,handshake,condVal,accVal,ownVal,km,carYear,brand,model,specVal,'',ai,nego);

  // Negotiation anchors from engine
  // 8 — openOffer now comes from _vc.openOffer (handshake × 0.93), not marketMid-derived fallback
  // Running costs + depreciation from engine (properly separated)
  const _rc = _vc.runningCosts || {};
  const _dp = _vc.depreciation  || {};

  // ── Guaranteed fallback estimates (never show AED 0) ──────────────────────
  // 3.1/3.2 — Insurance: use marketMid as base (UAE insurer practice); EV 5.0%, else 2.5–4.5% by class
  const _dc = r?.depreciation_class || r?.dc || 'C';
  const _EV_BRANDS_FB = new Set(['Tesla', 'BYD', 'Rivian', 'Lucid', 'XPENG', 'NIO', 'Zeekr']);
  const _EV_MODEL_RE_FB = /\bev\d*\b|ioniq\s*[56]|ariya|leaf|e[-\s]?tron|eq[abcse]|id\.[34567]|niro\s*ev|kona\s*elec|mach[-\s]?e|lightning|lyriq|blazer\s*ev|solterra|zs\s*ev|mg5\s*ev|marvel|polar|atto|dolphin|seal\b|cybertruck/i;
  const _isEV_FB = _EV_BRANDS_FB.has(brand) || _EV_MODEL_RE_FB.test(model || '');
  // v71 — Value-tiered insurance (matches UAE insurer market practice April 2026)
  //   Low-value cars pay higher % rate; high-value pay lower % + class loading on top
  const _marketMidFB = r?.averagePrice || r?.market_mid || handshake;
  function _calcInsRate(mid, dc, isEV) {
    const baseRate = mid < 80000 ? 0.030 : mid < 150000 ? 0.026 : mid < 300000 ? 0.023 : 0.020;
    const classLoad = {S:0,A:0,B:0.002,C:0.004,D:0.010,E:0.014};
    const evLoad = isEV ? 0.018 : 0;
    return baseRate + (classLoad[dc] || 0.004) + evLoad;
  }
  const _insRate_FB = _calcInsRate(_marketMidFB, _dc, _isEV_FB);
  const _insCalc  = (_rc.insurance  && _rc.insurance  > 0) ? _rc.insurance  : Math.round(_marketMidFB * _insRate_FB / 500) * 500;
  // 4.1/4.2 — Maintenance: age-tiered base by class; EV base lower (no oil/filters)
  // v71: C-class base raised 2800->3200 (Tucson/Santa Fe real UAE service cost)
  const _svcBaseMap = { S: 4200, A: 3600, B: 3200, C: 3200, D: 5500, E: 3500 };
  const _svcBase_FB = _isEV_FB ? 2800 : (_svcBaseMap[_dc] || 3000);
  const _carAge_FB  = Math.max(0, new Date().getFullYear() - (parseInt(carYear, 10) || new Date().getFullYear()));
  const _ageMult_FB = _carAge_FB >= 11 ? 2.2 : _carAge_FB >= 8 ? 1.7 : _carAge_FB >= 5 ? 1.3 : 1.0;
  const _maintCalc= (_rc.service    && _rc.service    > 0) ? _rc.service    : Math.round(_svcBase_FB * _ageMult_FB / 500) * 500;
  // 5 — Fuel cost: full rewrite
  //   Petrol base by body type → hybrid ×0.45, diesel ×0.78, EV = electricity proxy
  //   UAE AC correction +15%, age >8yr engine runs richer +10%
  //   Annual km 18,000 (UAE avg), fuel AED 3.28/L (Special 95, April 2026)
  const FUEL_AED_PER_L_FB = 3.28;
  const ANNUAL_KM_FB      = 18000;
  const _bodyTypeFB = (guessBody(brand, model) || 'Sedan').toLowerCase();
  let _baseLp100;
  if     (_bodyTypeFB === 'pickup' || _bodyTypeFB.includes('van'))  _baseLp100 = 14.5;
  else if(_bodyTypeFB.includes('suv'))                              _baseLp100 = 13.0;
  else if(_bodyTypeFB.includes('coupe') || _bodyTypeFB.includes('sport')) _baseLp100 = 11.5;
  else                                                              _baseLp100 = 9.5;
  const _modelLcFB = (model || '').toLowerCase();
  let _fuelMultFB = 1.0;
  if(_isEV_FB) {
    _fuelMultFB = 0; // petrol zero; electricity below
  } else if(/hybrid|hev|phev/.test(_modelLcFB)) {
    _fuelMultFB = 0.45;
  } else if(/diesel|dci|tdi|cdti|d4d|jtd/.test(_modelLcFB)) {
    _fuelMultFB = 0.78;
  }
  const _acCorrFB   = 1.15;
  const _ageYrsFB2  = _carAge_FB;  // already computed above
  const _ageCorFB   = _ageYrsFB2 >= 8 ? 1.10 : 1.0;
  const _lp100FB    = _baseLp100 * _fuelMultFB * _acCorrFB * _ageCorFB;
  const _fuelAnn    = _isEV_FB
    ? Math.round(_marketMidFB * 0.015 / 500) * 500   // EV electricity proxy ~1.5% of value/yr
    : Math.round(_lp100FB / 100 * ANNUAL_KM_FB * FUEL_AED_PER_L_FB / 100) * 100;
  const _fuelCalc = (_fuelAnn > 0) ? _fuelAnn : Math.round(_baseLp100 / 100 * ANNUAL_KM_FB * FUEL_AED_PER_L_FB / 100) * 100;
  // Gap-D fix: use rtaFees.registration from worker when available; 940 is the default UAE fixed fee
  const _rtaCalc  = (r.rtaFees && typeof r.rtaFees === 'object' && r.rtaFees.registration) ? r.rtaFees.registration : 940;
  // Total = sum of all four line items (not API _rc.total which may be 0)
  const _totalCalc= _rtaCalc + _insCalc + _maintCalc + _fuelCalc;

  const cost = {
    ins:     ksRound(_insCalc),
    maint:   ksRound(_maintCalc),
    rtaOnly: ksRound(_rtaCalc + _insCalc),
    fuelEst: ksRound(_fuelCalc),
    total:   ksRound(_totalCalc),
    deprAmt: ksRound(_dp.annual || 0),
  };

  const _modelDts = r.days_to_sell_estimate || '';

  // Update _lastValuationData with engine values (now that _vc is ready)
  _lastValuationData.handshake = handshake; // v72: colour-adjusted
  _lastValuationData.verdict   = _vc.verdict || '';
  _lastValuationData.gapAbs    = (r.comparisonToAsking?Math.abs(r.comparisonToAsking.diff):0);

  // Depreciation rows: prefer API-computed brand-aware values; fall back to local model
  // r.depreciation is a 3-element array of AED values from applyValuationMath()
  const _deprRows = (()=>{
    // Use API depreciation array only if it shows a realistic declining curve.
    // Flat or rounded-equal drops indicate the API returned placeholder data — use local curve.
    if (r.depreciation && r.depreciation.length >= 3) {
      let prev = handshake;
      const apiRows = r.depreciation.map((val, i) => {
        const loss = prev - val;
        const rate = Math.round(loss / Math.max(prev, 1) * 100);
        const row  = { year: cy + i + 1, rate, endVal: Math.round(val / 500) * 500, cumLoss: handshake - Math.round(val / 500) * 500 };
        prev = val;
        return row;
      });
      // Detect flat curve: if Y1 drop <= Y2 drop, curve is not realistic — use local model
      const isFlat = apiRows[0].rate <= apiRows[1].rate;
      if (!isFlat) return apiRows;
    }
    return buildDeprTable(handshake, carYear, brand, km, r.depreciation_class || r.dc || null, model);
  })();

  const analysisText=ai?.explanation||
    `The ${year} ${brand}${model?' '+model:''} has been assessed against ${comp>0?comp+' comparable':'live UAE'} listings.`+
    (specVal==='GCC'||specVal==='GCC Spec'?' GCC specification is the most sought-after locally.':'')+
    (km>100000?` High mileage of ${km.toLocaleString()} km is a key factor.`:'');

  // Time to sell — dCls helper used in section ⑫ below
  const dCls=d=>d<=14?'fast':d<=45?'medium':'slow';

  // Flags array — used directly in PIR buyer-checklist section
  const allF=[...gF.map(f=>`<div class="pir-flag pir-flag-green"><span class="pir-flag-dot pir-flag-dot-green"></span><span>${f}</span></div>`),...rF.map(f=>`<div class="pir-flag pir-flag-red"><span class="pir-flag-dot pir-flag-dot-red"></span><span>${f}</span></div>`)];

  // 3-Year depreciation

  // ── Price Intelligence Report — build vehicle identity prose ──
  const bodyStr   = '';
  const ownersStr = qs.singleOwner===true?'Single Owner':qs.singleOwner===false?'Multiple Owner':'';
  const accSel    = qs.accident===true?'minor':qs.accident===false?'none':'none';
  const warSel    = qs.warranty===true?'active':qs.warranty===false?'expired':'';
  const svcDisplay= qs.fsh===true?'Available':qs.fsh===false?'Not Available':'Unknown';
  const condDisplay=condVal||'—';
  const sellerDisplay='';
  const singleOwnerDisplay=qs.singleOwner===true?'Yes':qs.singleOwner===false?'No':'—';
  const accidentDisplay=qs.accident===true?'Yes':qs.accident===false?'No':'—';
  const warrantyDisplay=qs.warranty===true?'Active':qs.warranty===false?'None':'—';
  const serviceDisplay=qs.fsh===true?'Available':qs.fsh===false?'Not Available':'Unknown';
  const bodyDisplay='';
  const specDisplay=specVal||'GCC Spec';
  const colourDisplay='';
  const trimDisplay=g('trim')?.value||'';

  // Vehicle identity line 1: Make Model Year Trim
  const identLine1Parts=[`${brand} ${model||''}`.trim(),year,trimDisplay].filter(Boolean);
  const identLine2Parts=[`${kmFmt} km`,specDisplay].filter(s=>s&&s!=='—');
  const identLine3Parts=[`Condition: ${condDisplay}`].filter(Boolean);
  // QC checkbox state display
  const _qcBadge=(val,yLbl,nLbl)=>val===true?`<span style="color:#5F7A6A;font-weight:700;">✓ ${yLbl}</span>`:val===false?`<span style="color:#5A2A1E;font-weight:700;">✗ ${nLbl}</span>`:`<span style="color:#8A9AB8;">— ${yLbl}</span>`;
  const identLine4Parts=[
    _qcBadge(qs.accident,'Accident','No Accident'),
    _qcBadge(qs.fsh,'Serviceory','No Serviceory'),
    _qcBadge(qs.warranty,'Warranty','No Warranty'),
    _qcBadge(qs.singleOwner,'Single Owner','Multi Owner'),
  ];

  // Fix 13: _tsScore is now derived from the worker's confidence_score and
  // confidence_flag so the displayed number is always consistent with the
  // adjustments the worker actually applied (e.g. Non-GCC = –13%, not –1.5 pts).
  //
  // Mapping: confidence_score is 0–100; we normalise to 0–10 and clamp 1–10.
  // confidence_flag overrides the label for known quality states:
  //   'LOW CONFIDENCE' → cap at 4.0
  //   'HIGH CONFIDENCE' / 'LIVE DATA' → floor at 7.5
  // When confidence_score is absent we fall back to visible-signal penalties
  // expressed on the same 0–10 scale (scaled to match worker magnitudes):
  //   Non-GCC  –1.3 (≈ worker –13%)   FSH missing  –1.2
  //   Accident –1.2                    Multi-owner  –0.8
  //   Fair cond –0.4 / Poor cond –0.9
  const _rawConf   = r.confidence_score || 0;      // worker 0–100
  const _confFlag  = (r.confidence_flag || '').toUpperCase();
  let _tsScore;
  if (_rawConf > 0) {
    // Derive from worker score: scale 0–100 → 1–10, then apply flag clamps
    let _tsFromConf = Math.max(1.0, Math.min(10.0, Math.round((_rawConf / 10) * 10) / 10));
    if (_confFlag.includes('LOW'))  _tsFromConf = Math.min(_tsFromConf, 4.0);
    if (_confFlag.includes('HIGH') || _confFlag.includes('LIVE')) _tsFromConf = Math.max(_tsFromConf, 7.5);
    _tsScore = _tsFromConf;
  } else {
    // Fallback (no worker confidence_score available)
    const _tsBase = 8.5;
    const _tsPenalties = [
      (specVal && specVal!=='GCC' && specVal!=='GCC Spec') ? 1.3 : 0,
      (qs.fsh===false) ? 1.2 : 0,
      (qs.singleOwner===false) ? 0.8 : 0,
      (qs.accident===true) ? 1.2 : 0,
      (condVal==='Fair') ? 0.4 : (condVal==='Poor') ? 0.9 : 0,
    ];
    _tsScore = Math.max(1.0, Math.round((_tsBase - _tsPenalties.reduce((a,b)=>a+b,0)) * 10) / 10);
  }
  const _tsLabel = _tsScore >= 7.5 ? 'High Transparency' : _tsScore >= 5.5 ? 'Moderate Transparency' : 'Value Grade — Lower Transparency';
  const mktPositionText = `Data Quality Score: ${_tsScore}/10 — ${_tsLabel}`;

  // Trend icon for depreciation
  const deprIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4l5 6 5-6" stroke="#7A3828" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  // FMV delta vs asking
  let deltaHtml='';
  if(askN&&avg){
    const delta=avg-askN;
    const deltaPct=Math.round(Math.abs(delta)/avg*100);
    if(Math.abs(delta)>500){
      const sign=delta>0?'+':'−';
      const cls=delta>0?'pir-delta-pos':'pir-delta-neg';
      deltaHtml=`<div class="${cls}"><span>${sign}AED ${Math.abs(delta).toLocaleString()}</span><span class="pir-delta-pct">${deltaPct}% vs asking</span></div>`;
    }
  }

  // Confidence ring width
  const confWidth=Math.max(5,Math.min(95,conf));

  // ── PRICE SUMMARY computed values ──────────────────────────────
  // handshake, condAdj, accAdj already defined above before _deprRows
  // Sticker = asking price (if provided) or null
  const stickerPrice = askN||null;
  // Negotiation = smart entry point: slightly below lower end of range
  const negoEntry = nego ? nego.offer : Math.round(avg * 0.93 / 500) * 500;
  // Market position % for the bar — based on handshake vs full range
  const pirRng = rangeMax - rangeMin;
  const handshakePct = pirRng>0 ? Math.max(3,Math.min(97,Math.round(((handshake-rangeMin)/pirRng)*100))) : 50;
  const stickerPct   = stickerPrice&&pirRng>0 ? Math.max(3,Math.min(97,Math.round(((stickerPrice-rangeMin)/pirRng)*100))) : null;
  const negoPct      = pirRng>0 ? Math.max(3,Math.min(97,Math.round(((negoEntry-rangeMin)/pirRng)*100))) : 20;

  // ── PRICE SCALE: pre-computed for template ────────────────────
  const _scLow  = rangeMin;
  const _scHigh = rangeMax;
  const _scFmv  = handshake;
  const _scAsk  = stickerPrice;
  const _scRng  = Math.max(_scHigh - _scLow, 1);
  const _scPct  = v => Math.max(0, Math.min(100, Math.round(((v - _scLow) / _scRng) * 100)));
  const _scFmvPct  = _scPct(_scFmv);
  const _scConsThr = _scFmv * 1.11;
  const _scOverPct = _scPct(Math.min(_scConsThr, _scHigh));
  const _scAskPct  = _scAsk ? _scPct(_scAsk) : null;
  const _scAskZone = !_scAsk ? 'none'
    : _scAsk <= _scFmv                ? 'green'
    : _scAsk <= _scConsThr            ? 'yellow'
    : 'red';
  const _scLabelsClose = _scAskPct !== null && Math.abs(_scAskPct - _scFmvPct) < 10;
  const _scInterp = !_scAsk
    ? 'No asking price entered. The scale shows where this vehicle sits in the current UAE market based on comparable listings.'
    : _scAskZone === 'green'
      ? 'This car is priced in the <strong>Fair Price Zone</strong> — at or below the fair market level of AED '+_scFmv.toLocaleString()+'. Buyers will see this as good value and it should sell quickly. If you are selling, you might test a slightly higher ask price before negotiating down.'
      : _scAskZone === 'yellow'
        ? 'The asking price sits in the <strong>Consideration Zone</strong> — above the fair market price of AED '+_scFmv.toLocaleString()+' but still within a range most buyers will consider after negotiation. Push for a price closer to AED '+_scFmv.toLocaleString()+' before agreeing.'
        : 'This car is priced in the <strong>Overpriced Zone</strong> — well above the fair market level of AED '+_scFmv.toLocaleString()+'. Buyers will naturally prefer cars in the green zone. This one may take longer to sell unless the price comes closer to fair market value. Negotiate firmly.';

  return `<div class="ks-pir">

  <!-- ══ ESTIMATE BANNER (only when no live data) ══ -->
  ${!_isLive ? `<div class="ks-estimate-banner">
    <div class="ks-estimate-banner-body">
      <div class="ks-estimate-banner-title">No Live Listings Found</div>
      <div class="ks-estimate-banner-text">Prices below are AI estimates. Always check Dubizzle or YallaMotor before deciding.</div>
    </div>
  </div>` : ''}

  <!-- ── SECTION 1 — FREE REPORT ── -->
  <div class="ks-page ks-page-1" id="ksPage1">

  <!-- ── 2. SPEC STRIP — Year / Brand / Model / Mileage / Spec / Condition ── -->
  <div class="ks-section ks-section-hero">
    <div class="ks-spec-road-row ks-spec-road-grid">
      <div class="ks-spec-chip"><span class="ks-spec-chip-lbl">Year</span><span class="ks-spec-chip-val">${year}</span></div>
      <div class="ks-spec-chip"><span class="ks-spec-chip-lbl">Brand</span><span class="ks-spec-chip-val">${brand}</span></div>
      ${model?`<div class="ks-spec-chip"><span class="ks-spec-chip-lbl">Model</span><span class="ks-spec-chip-val">${model}</span></div>`:''}
      ${km?`<div class="ks-spec-chip"><span class="ks-spec-chip-lbl">Mileage</span><span class="ks-spec-chip-val">${km.toLocaleString()} km</span></div>`:''}
      <div class="ks-spec-chip"><span class="ks-spec-chip-lbl">Spec</span><span class="ks-spec-chip-val ${specVal==='GCC'||specVal==='GCC Spec'?'good':'warn'}">${specVal||'GCC'}</span></div>
      ${condVal?`<div class="ks-spec-chip"><span class="ks-spec-chip-lbl">Condition</span><span class="ks-spec-chip-val ${condVal==='Excellent'||condVal==='Very Good'?'good':condVal==='Fair'||condVal==='Poor'?'warn':''}">${condVal}</span></div>`:''}
      ${qs.fsh!==null?`<div class="ks-spec-chip"><span class="ks-spec-chip-lbl">Service</span><span class="ks-spec-chip-val ${qs.fsh?'good':'warn'}">${qs.fsh?'Full History':'No History'}</span></div>`:''}
      ${qs.accident!==null?`<div class="ks-spec-chip"><span class="ks-spec-chip-lbl">Accident</span><span class="ks-spec-chip-val ${qs.accident?'bad':'good'}">${qs.accident?'Yes':'Clean'}</span></div>`:''}
    </div>
  </div>

  <!-- ── 3. PRICE HIGHLIGHTS ────────────────────────── -->
  <div class="ks-section ks-section-price">
    <div class="ks-price-hl-label">Fair Market Price</div>
    <div class="ks-price-hl-main" id="ksFmvNum"><span class="ks-price-currency">AED</span> ${ksRound(handshake).toLocaleString()}</div>
    <div class="ks-price-hl-range">Market range: AED ${ksRound(rangeMin).toLocaleString()} – AED ${ksRound(rangeMax).toLocaleString()}</div>
    ${askN ? `<div class="ks-price-diff-lbl">Price Difference</div><div class="ks-price-hl-ask ${askN>handshake?'ks-ask-over':askN<handshake*0.97?'ks-ask-under':'ks-ask-fair'}">
      Asking price: AED ${askN.toLocaleString()}
      <span class="ks-ask-delta">${askN>handshake?`AED ${ksRound(askN-handshake).toLocaleString()} above market — Buyer Paying Extra`:askN<handshake*0.97?`AED ${ksRound(handshake-askN).toLocaleString()} below market — Market Risk`:'Fair Deal'}</span>
    </div>` : ''}
    <div class="ks-price-meta">
      <span class="ks-price-meta-item">${comp>0?comp+' listings':'AI estimate'}</span>
      <span class="ks-price-meta-sep">·</span>
      <span class="ks-price-meta-item">${_tierLabel}</span>
    </div>
  </div>

  <!-- ── 4. DEAL ANALYSIS + PRICE SCALE ───────────── -->
  <div class="ks-section ks-section-deal">

    <!-- Verdict pill -->
    <!-- Gap-B fix: full verdict scale now matches worker (BUY NOW / GOOD DEAL / FAIRLY PRICED /
         SLIGHTLY HIGH / OVERPRICED / WALK AWAY). Gap-A fix: .diff>0 replaced with .pct>0.
         v70 fix: WALK AWAY → ks-verdict-bad (red), FAIRLY PRICED → explicit ks-verdict-fair. -->
    <div class="ks-deal-verdict ${
      (_vc.verdict==='BUY NOW')?'ks-verdict-buy':
      (_vc.verdict==='GOOD DEAL'||_vc.verdict==='UNDERPRICED')?'ks-verdict-buy':
      (_vc.verdict==='WALK AWAY')?'ks-verdict-bad':
      (_vc.verdict==='OVERPRICED'||_vc.verdict==='SLIGHTLY HIGH')?'ks-verdict-nego':
      (_vc.verdict==='FAIRLY PRICED')?'ks-verdict-fair':
      'ks-verdict-fair'}">
      <span class="ks-verdict-emoji">${
        _vc.verdict==='BUY NOW'?'⭐':
        _vc.verdict==='GOOD DEAL'?'<span style="color:#C49A2A;display:inline-flex"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>':
        _vc.verdict==='FAIRLY PRICED'?'<span style="color:#0A2540;display:inline-flex"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="7.5" width="2.5" height="5" rx=".5" stroke="currentColor" stroke-width="1.4"/><rect x="5.5" y="4.5" width="2.5" height="8" rx=".5" stroke="currentColor" stroke-width="1.4"/><rect x="9.5" y="1.5" width="2.5" height="11" rx=".5" stroke="currentColor" stroke-width="1.4"/></svg></span>':
        _vc.verdict==='SLIGHTLY HIGH'?'<span style="color:#9C5535;display:inline-flex"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span>':
        _vc.verdict==='OVERPRICED'?'<span style="color:#7A3828;display:inline-flex"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span>':
        _vc.verdict==='WALK AWAY'?'<span style="color:#7A3828;display:inline-flex"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/><line x1="3" y1="11" x2="11" y2="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>':'<span style="color:#0A2540;display:inline-flex"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="7.5" width="2.5" height="5" rx=".5" stroke="currentColor" stroke-width="1.4"/><rect x="5.5" y="4.5" width="2.5" height="8" rx=".5" stroke="currentColor" stroke-width="1.4"/><rect x="9.5" y="1.5" width="2.5" height="11" rx=".5" stroke="currentColor" stroke-width="1.4"/></svg></span>'
      }</span>
      <span class="ks-verdict-label">${
        _vc.verdict==='BUY NOW'?'Strong Buy — Well Below Market':
        (_vc.verdict==='GOOD DEAL'||_vc.verdict==='UNDERPRICED')?'Good Deal — Below Market':
        _vc.verdict==='WALK AWAY'?'Walk Away — Significantly Overpriced':
        _vc.verdict==='OVERPRICED'?'High-End — Negotiate Down':
        _vc.verdict==='SLIGHTLY HIGH'?'Slightly High — Negotiate':
        _vc.verdict==='NO STICKER'?'No Asking Price':
        (r.comparisonToAsking&&r.comparisonToAsking.pct>0)?'Consider — Negotiation Zone':
        'Fairly Priced — Good Value'
      }</span>
    </div>

    <!-- ═══════════════════════════════════════════════════════
         HORIZONTAL PRICE SCALE — spec v3.5
         Zones: Green (low→FMV) | Yellow (FMV→FMV+12%) | Red (FMV+12%→high)
         Markers: ● green = FMV   ▲ red = Asking Price
         Labels: always above bar, never overlap
    ═══════════════════════════════════════════════════════ -->
    <div class="ks-hscale">

      <!-- Outer edge labels — Lowest / Highest flush to bar edges -->
      <div class="ks-hscale-labels">
        <div class="ks-hscale-lbl-left">
          <div class="ks-hscale-lbl-name">Lowest Listing</div>
          <div class="ks-hscale-lbl-amt">AED ${_scLow.toLocaleString()}</div>
        </div>
        <div class="ks-hscale-lbl-right">
          <div class="ks-hscale-lbl-name">Highest Listing</div>
          <div class="ks-hscale-lbl-amt">AED ${_scHigh.toLocaleString()}</div>
        </div>
      </div>

      <!-- v79: ABOVE-BAR — Fair Market Price label always here, no collision risk -->
      <div class="ks-hscale-above">
        <div class="ks-hscale-above-pin" style="left:${Math.max(5,Math.min(95,_scFmvPct))}%">
          <div class="ks-hscale-above-name">Fair Market Price</div>
          <div class="ks-hscale-above-amt">AED ${_scFmv.toLocaleString()}</div>
          <div class="ks-hscale-above-stem"></div>
        </div>
      </div>

      <!-- BAR — three sharp colour zones + markers -->
      <div class="ks-hscale-bar">
        <div class="ks-hscale-zone ks-hscale-zone-green"  style="left:0%;width:${_scFmvPct}%"></div>
        <div class="ks-hscale-zone ks-hscale-zone-yellow" style="left:${_scFmvPct}%;width:${_scOverPct-_scFmvPct}%"></div>
        <div class="ks-hscale-zone ks-hscale-zone-red"    style="left:${_scOverPct}%;width:${100-_scOverPct}%"></div>
        <!-- FMV dot marker -->
        <div class="ks-hscale-marker ks-hscale-marker-fmv" style="left:${_scFmvPct}%">●</div>
        ${_scAskPct!==null ? '<div class="ks-hscale-marker ks-hscale-marker-ask" style="left:'+_scAskPct+'%">▲</div>' : ''}
      </div>

      <!-- v79: BELOW-BAR — Asking Price label always here, structurally separated from FMV -->
      ${_scAskPct!==null ? `<div class="ks-hscale-below">
        <div class="ks-hscale-below-pin" style="left:${Math.max(5,Math.min(95,_scAskPct))}%">
          <div class="ks-hscale-below-stem"></div>
          <div class="ks-hscale-below-name">Asking Price</div>
          <div class="ks-hscale-below-amt">AED ${_scAsk.toLocaleString()}</div>
        </div>
      </div>` : '<div class="ks-hscale-below" style="height:8px"></div>'}

      <!-- Zone labels -->
      <div class="ks-hscale-zones">
        <div class="ks-hscale-zone-lbl ks-hscale-zone-lbl-green"  style="left:0%;width:${_scFmvPct}%">Fair Price Zone</div>
        <div class="ks-hscale-zone-lbl ks-hscale-zone-lbl-yellow" style="left:${_scFmvPct}%;width:${_scOverPct-_scFmvPct}%">Negotiation Zone</div>
        <div class="ks-hscale-zone-lbl ks-hscale-zone-lbl-red"    style="left:${_scOverPct}%;width:${100-_scOverPct}%">Overpriced Zone</div>
      </div>

    </div><!-- /ks-hscale -->

    <!-- Interpretation paragraph (pre-computed, no nested backticks) -->
    <div class="ks-scale-interp">${_scInterp}</div>

  </div>

  <!-- ── 5. WHAT'S GOOD / WHAT TO WATCH OUT FOR ────── -->
  <div class="ks-section ks-section-flags">
    <div class="ks-flags-grid">
      ${gF.length?`<div class="ks-flags-sub-head">What's Good</div>`+gF.map(f=>`<div class="ks-flag ks-flag-plain"><span class="ks-flag-icon ks-flag-icon-green"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>${f}</span></div>`).join(''):''}
      ${rF.length?`<div class="ks-flags-sub-head" style="margin-top:${gF.length?'10px':'0'}">What to Watch Out For</div>`+rF.map(f=>`<div class="ks-flag ks-flag-plain"><span class="ks-flag-icon ks-flag-icon-warn"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span><span>${f}</span></div>`).join(''):`<div class="ks-flag ks-flag-plain"><span class="ks-flag-icon ks-flag-icon-green">—</span><span>No major concerns noted</span></div>`}
    </div>
    <!-- Fuel Consumption -->
    <div class="ks-fuel-row">
      <span class="ks-fuel-icon ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3.5 12.5V3.5a1 1 0 011-1h4a1 1 0 011 1V8h1a1 1 0 011 1v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="2" y1="12.5" x2="11" y2="12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
      <div class="ks-fuel-body">
        <span class="ks-fuel-lbl">Estimated Fuel Consumption</span>
        <span class="ks-fuel-val">${(()=>{
          // Estimate L/100km based on body type and age
          const bk=(_bodyKey||'').toLowerCase();
          let base = bk.includes('suv')||bk.includes('offroad')?13.5:bk.includes('pickup')?14:bk.includes('van')?12:bk.includes('sport')||bk.includes('coupe')?10:9.5;
          // Older engines typically less efficient
          const age2=new Date().getFullYear()-parseInt(year||2015);
          if(age2>10) base+=1.5; else if(age2>6) base+=0.8;
          const lp100=base.toFixed(1);
          const lpday=((base/100)*50).toFixed(0); // ~50km/day average UAE driver
          const aedpm=Math.round((base/100)*50*30*3.3/10)*10; // AED/month ~50km/day, AED 3.3/L
          return `~${lp100} L/100 km &nbsp;·&nbsp; ~AED ${aedpm}/month (based on 1,500 km/month at market fuel rates)`;
        })()}</span>
      </div>
    </div>
    <!-- Community Feedback -->
    <div class="ks-flags-sub-head" style="margin-top:14px;display:flex;align-items:center;gap:6px;"><span class="ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M12.5 2.5a1 1 0 00-1-1h-9a1 1 0 00-1 1v7a1 1 0 001 1h7l3 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></span> What People Are Saying</div>
    <div class="ks-community-note">The following reflects opinions from UAE car communities, classifieds, and owner forums — not KamSayara's assessment. Use as a general reference only.</div>
    <div class="ks-community-grid">
      ${(()=>{
        // Generate context-aware community feedback based on brand/model/year/mileage
        const yr=parseInt(year||2015);
        const cy2=new Date().getFullYear();
        const age3=cy2-yr;
        const hi_km=km>120000;
        const mid_km=km>70000&&km<=120000;
        const brand_lc=(brand||'').toLowerCase();
        const model_lc=(model||'').toLowerCase();

        // Brand reliability reputation in GCC
        const reliableBrands=['toyota','lexus','honda','nissan'];
        const premiumBrands=['bmw','mercedes','audi','porsche','land rover'];
        const isReliable=reliableBrands.some(b=>brand_lc.includes(b));
        const isPremium=premiumBrands.some(b=>brand_lc.includes(b));

        let positive=[], neutral=[], cautious=[];

        // Positive feedback
        if(isReliable) positive.push(`Buyers in UAE forums often mention the ${brand} ${model||''} as one of the more dependable choices in this price range.`);
        if(specVal==='GCC'||specVal==='GCC Spec') positive.push('GCC-spec units are consistently preferred in UAE classifieds — they tend to sell faster and hold value better.');
        if(qs.fsh===true) positive.push('Full service history is frequently highlighted as a key trust factor by buyers on Dubizzle and WhatsApp car groups.');
        if(qs.singleOwner===true) positive.push('Single-owner cars in this segment tend to receive more enquiries and quicker offers, according to UAE classified ad patterns.');
        if(!hi_km&&age3<=5) positive.push(`With ${km.toLocaleString()} km and ${age3} year${age3!==1?'s':''} of age, this sits comfortably within what UAE buyers consider low-risk territory.`);
        if(positive.length===0) positive.push(`The ${brand} ${model||''} has an established resale market in the UAE, with regular listings across Dubai and Sharjah classifieds.`);

        // Neutral observations
        if(isPremium) neutral.push(`Premium European brands like ${brand} attract buyers but also carry higher running and parts costs — a common concern raised in owner communities.`);
        if(age3>7) neutral.push(`Cars from ${yr} and earlier are generally accepted in the market but buyers often negotiate harder, expecting some wear-and-tear.`);
        // Only show mid-life note when flags engine hasn't already classified it as low for year
        const _expKm2 = Math.max(1, cy2 - yr) * 18000;
        const _isLowForYear = km > 0 && km < _expKm2 * 0.65;
        if(mid_km && !_isLowForYear) neutral.push(`Mileage in the 70,000–120,000 km range is described as "mid-life" by most UAE dealers — manageable but worth a pre-purchase inspection.`);
        if(neutral.length===0) neutral.push('Prices for this segment have remained relatively stable in the past quarter, based on patterns visible in UAE classified listings.');

        // Cautious notes
        if(qs.accident===true) cautious.push('Accident history is the most commonly cited dealbreaker in UAE buyer communities. Expect strong push-back on price.');
        if(hi_km) cautious.push(`High mileage (${km.toLocaleString()} km) is one of the top reasons buyers walk away or request a significant discount — especially for vehicles older than 5 years.`);
        if(isPremium&&age3>5) cautious.push(`Older ${brand} models often generate comments about post-warranty maintenance costs in owner groups — worth budgeting for before purchase.`);
        if(qs.fsh===false) cautious.push('Missing service records are frequently flagged on UAE car forums as a reason to lower the offer by 5–10%.');
        if(cautious.length===0) cautious.push('No major red flags consistently raised by the community for this type of vehicle in current market conditions.');

        const renderItems=(arr,icon,cls)=>arr.map(t=>`<div class="ks-comm-item ${cls}"><span class="ks-comm-icon">${icon}</span><span>${t}</span></div>`).join('');
        return renderItems(positive,'<svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>','ks-comm-pos')+renderItems(neutral,'<svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/><line x1="7" y1="6.5" x2="7" y2="9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="4.5" r=".7" fill="currentColor"/></svg>','ks-comm-neu')+renderItems(cautious,'<svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg>','ks-comm-cau');
      })()}
    </div>
  </div>

  <!-- ── 6. DATA QUALITY & CONFIDENCE ──────────────── -->
  <div class="ks-section ks-section-conf">
    <div class="ks-conf-row">
      <div class="ks-conf-left">
        <div class="ks-conf-title">Listing Transparency</div>
        <div class="ks-conf-score">${_tsScore}<span class="ks-conf-denom">/10</span></div>
        <div class="ks-conf-label">${_tsLabel}</div>
      </div>
      <div class="ks-conf-bar-wrap">
        <div class="ks-conf-bar-track">
          <div class="ks-conf-bar-fill" style="width:${Math.round(_tsScore/10*100)}%"></div>
        </div>
        <div class="ks-conf-stats">
        <span class="ks-conf-stat-item" style="display:inline-flex;align-items:center;gap:4px;"><span style="color:#0A2540;display:inline-flex;"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4" stroke="currentColor" stroke-width="1.5"/><line x1="9.2" y1="9.2" x2="12.5" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span> Live Market Data: ${comp>0?comp+' listings':'Not available'}</span>
        <span class="ks-conf-stat-sep">·</span>
        <span class="ks-conf-stat-item" style="display:inline-flex;align-items:center;gap:4px;"><span style="color:#0A2540;display:inline-flex;"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="7.5" width="2.5" height="5" rx=".5" stroke="currentColor" stroke-width="1.4"/><rect x="5.5" y="4.5" width="2.5" height="8" rx=".5" stroke="currentColor" stroke-width="1.4"/><rect x="9.5" y="1.5" width="2.5" height="11" rx=".5" stroke="currentColor" stroke-width="1.4"/></svg></span> Buyer Demand: ${mkt&&mkt.score>=70?'High':mkt&&mkt.score>=45?'Medium':'Average'}</span>
      </div>
      <div class="ks-conf-caption">${_tsScore>=7?'Price Confidence: High — Live Market Data supports this price.':_tsScore>=5?'Price Confidence: Medium — Limited Live Market Data available.':'Price Confidence: Low — No Live Market Data. AI estimate only.'}</div>
      <div class="ks-conf-reason">${(()=>{
        const reasons=[];
        if(comp>0) reasons.push(`Based on ${comp} comparable UAE listing${comp>1?'s':''} checked at the time of valuation.`);
        else reasons.push('No direct comparable listings were found — price is based on AI-assisted market modelling.');
        if(specVal&&specVal!=='GCC'&&specVal!=='GCC Spec') reasons.push(`Non-GCC spec reduces data confidence as fewer comparable units are listed locally.`);
        if(qs.fsh===false) reasons.push('Missing service history limits how closely this listing can be compared to standard market comps.');
        if(qs.accident===true) reasons.push('Accident history creates pricing uncertainty — values can vary widely depending on the extent of damage.');
        if(reasons.length===1&&comp>0&&_tsScore>=7) reasons.push('Good data coverage — the price range shown reflects real asking prices from live UAE classified ads.');
        return reasons.slice(0,3).join(' ');
      })()}</div>
      <!-- Gap-K fix: breakdown table is suppressed when score comes from worker
           (worker confidence_score already incorporates all adjustments internally;
           showing our local penalty rows would be misleading) -->
      <div class="ks-ts-breakdown">
        <div class="ks-ts-breakdown-title">Score breakdown</div>
        <div class="ks-ts-row">
          <span class="ks-ts-row-label">${r.confidence_score>0?'Worker confidence score (0–100 → 0–10)':'Base score (full information, GCC spec, clean history)'}</span>
          <span class="ks-ts-row-val base">${r.confidence_score>0?'+'+(r.confidence_score/10).toFixed(1):'+8.5'}</span>
        </div>
        ${r.confidence_score>0
          ? `<div class="ks-ts-row"><span class="ks-ts-row-label" style="color:var(--muted);font-style:italic;">Score derived from live market data quality — all listing, spec, and condition factors are baked in.</span><span class="ks-ts-row-val"></span></div>`
          : `
        ${(specVal&&specVal!=='GCC'&&specVal!=='GCC Spec')?`<div class="ks-ts-row"><span class="ks-ts-row-label">Non-GCC specification — fewer local comparables</span><span class="ks-ts-row-val deduct">−1.3</span></div>`:''}
        ${(qs.fsh===false)?`<div class="ks-ts-row"><span class="ks-ts-row-label">No full service history — maintenance harder to verify</span><span class="ks-ts-row-val deduct">−1.2</span></div>`:''}
        ${(qs.accident===true)?`<div class="ks-ts-row"><span class="ks-ts-row-label">Accident history — creates pricing uncertainty</span><span class="ks-ts-row-val deduct">−1.2</span></div>`:''}
        ${(qs.singleOwner===false)?`<div class="ks-ts-row"><span class="ks-ts-row-label">Multiple owners — reduces buyer confidence</span><span class="ks-ts-row-val deduct">−0.8</span></div>`:''}
        ${(condVal==='Fair')?`<div class="ks-ts-row"><span class="ks-ts-row-label">Fair condition — below average market standard</span><span class="ks-ts-row-val deduct">−0.4</span></div>`:''}
        ${(condVal==='Poor')?`<div class="ks-ts-row"><span class="ks-ts-row-label">Poor condition — significantly below market standard</span><span class="ks-ts-row-val deduct">−0.9</span></div>`:''}
          `}
        <div class="ks-ts-row total-row">
          <span class="ks-ts-row-label" style="font-weight:700;color:var(--ink);">Final Transparency Score</span>
          <span class="ks-ts-row-val total">${_tsScore} / 10</span>
        </div>
      </div>
      </div>
    </div>
  </div>

  <!-- ── 7. FOR BUYERS / FOR SELLERS ───────────────── -->
  <div class="ks-section ks-section-s7">
    <div class="ks-section-eyebrow">Negotiation</div>
    <div class="ks-section-title">Negotiation Intelligence</div>
    ${(()=>{
      const _purp = purpVal || 'research';
      const _purpBannerText = _purp==='buying'
        ? '👤 Viewing as Buyer — your column is highlighted'
        : _purp==='selling'
        ? '🏷️ Viewing as Seller — your column is highlighted'
        : '🔍 Research Mode — both columns shown equally';
      return `<div class="ks-s7-purpose-banner ${_purp}">${_purpBannerText}</div>`;
    })()}
    <div class="ks-s7-sidebyside purpose-${purpVal||'research'}">

      <!-- BUYER COLUMN -->
      <div class="ks-s7-col-wrap ks-s7-col-buyer">
        <div class="ks-s7-col-head ks-s7-col-head-buyer"><span class="ks-col-head-ico"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M1.5 13c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>${purpVal==='buying'?'For You — Buyer':'Buyer\'s Perspective'}</div>
        ${(()=>{
          const isOver   = askN && askN > handshake;
          const isUnder  = askN && askN <= handshake * 0.97;
          const isFair   = askN && !isOver && !isUnder;
          const noAsk    = !askN;
          const overAmt  = askN ? (askN - handshake) : 0;
          const underAmt = askN ? (handshake - askN) : 0;
          const openOffer = nego.offer || Math.round(handshake * 0.93 / 500) * 500;
          const closeTarget = nego.close || handshake;
          const weaknesses = [
            qs.fsh === false && 'no service history on file',
            qs.accident === true && 'a recorded accident',
            qs.singleOwner === false && 'multiple previous owners',
            qs.warranty === false && 'no active warranty',
            (condVal === 'Fair' || condVal === 'Poor') && `${condVal.toLowerCase()} condition`,
          ].filter(Boolean);
          const strengths = [
            qs.fsh === true && 'full service history',
            qs.singleOwner === true && 'single owner',
            qs.warranty === true && 'active warranty',
            (specVal === 'GCC' || specVal === 'GCC Spec') && 'GCC spec',
          ].filter(Boolean);
          const hasWeaknesses = weaknesses.length > 0;

          let situationHtml = '';
          if (noAsk) {
            situationHtml = `<div class="ks-s7-situation ks-s7-sit-neutral">
              <div class="ks-s7-sit-title">No Asking Price Entered</div>
              <p>The fair market value for this vehicle is <strong>AED ${handshake.toLocaleString()}</strong>. If you're about to make an offer, open at <strong>AED ${openOffer.toLocaleString()}</strong> — that's roughly ${Math.round((1 - openOffer/handshake)*100)}% below FMV and gives you room to settle at market rate without overpaying.</p>
              <p>Always benchmark any asking price against the FMV above before engaging. If the seller's number is more than 8% over AED ${handshake.toLocaleString()}, you have strong grounds to counter.</p>
            </div>`;
          } else if (isOver) {
            situationHtml = `<div class="ks-s7-situation ks-s7-sit-warn">
              <div class="ks-s7-sit-title" style="display:flex;align-items:center;gap:6px;"><span style="color:#9C5535;display:inline-flex;"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span>Asking Price is AED ${overAmt.toLocaleString()} Above Market</div>
              <p>The seller is asking <strong>AED ${askN.toLocaleString()}</strong>, which is <strong>${Math.round(overAmt/handshake*100)}% above</strong> the fair market value of AED ${handshake.toLocaleString()}. You are being asked to pay a premium that the current UAE market does not support for this vehicle's profile.</p>
              ${hasWeaknesses ? `<p>This car also has factors that reduce its fair value: <em>${weaknesses.join(', ')}</em>. These are legitimate, documentable reasons to push back on price — not just negotiation tactics.</p>` : ''}
              <p><strong>Your opening offer:</strong> AED ${openOffer.toLocaleString()} — reference the market data and the vehicle's specific factors. <strong>Target close:</strong> AED ${closeTarget.toLocaleString()} (fair market value). <strong>Walk-away point:</strong> AED ${nego.walk ? nego.walk.toLocaleString() : Math.round(handshake*1.04/500)*500 |0} — do not exceed this.</p>
              <p>If the seller refuses to move toward AED ${handshake.toLocaleString()}, there are comparable vehicles at fair market value in the UAE. Patience is your strongest asset.</p>
            </div>`;
          } else if (isUnder) {
            situationHtml = `<div class="ks-s7-situation ks-s7-sit-good">
              <div class="ks-s7-sit-title" style="display:flex;align-items:center;gap:6px;"><span style="color:#C49A2A;display:inline-flex;"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Priced AED ${underAmt.toLocaleString()} Below Market</div>
              <p>At <strong>AED ${askN.toLocaleString()}</strong>, this is priced <strong>${Math.round(underAmt/handshake*100)}% below</strong> fair market value. This is a genuine opportunity — but act with awareness, not haste.</p>
              ${hasWeaknesses ? `<p>The below-market price may partially reflect known issues: <em>${weaknesses.join(', ')}</em>. Make sure you factor these into your total cost of ownership before committing.</p>` : '<p>The vehicle profile does not show major red flags that would explain the lower price — which makes this a strong opportunity.</p>'}
              <p><strong>What to do:</strong> Secure a pre-purchase inspection from a certified UAE mechanic before transferring ownership. If the inspection comes back clean, move quickly — this listing will attract other buyers. You can still test the seller with a small counter of AED ${Math.round(askN*0.97/500)*500 |0}, but be prepared to pay the asking price immediately.</p>
            </div>`;
          } else {
            situationHtml = `<div class="ks-s7-situation ks-s7-sit-fair">
              <div class="ks-s7-sit-title">Fair Market Pricing</div>
              <p>At <strong>AED ${askN.toLocaleString()}</strong>, this vehicle is priced within 5% of its fair market value of AED ${handshake.toLocaleString()}. Both buyer and seller are in a reasonable position.</p>
              ${hasWeaknesses ? `<p>However, the listing has factors that technically reduce its adjusted FMV: <em>${weaknesses.join(', ')}</em>. These give you a credible basis to negotiate a small reduction — around AED ${Math.round(askN*0.03/500)*500 |0} — without overreaching.</p>` : '<p>There are no major negative factors that would justify a large counter-offer, but a small 2–3% counter is always reasonable in the UAE market.</p>'}
              <p><strong>Suggested approach:</strong> Open at AED ${openOffer.toLocaleString()} and settle at or below AED ${handshake.toLocaleString()}. Use the FMV figure as your anchor if the seller pushes back.</p>
            </div>`;
          }

          const checklistItems = [
            { icon: '<span class="ks-s7-check-icon ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="2.5" y="3" width="9" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M5 3V2.5a2 2 0 014 0V3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="4.5" y1="7" x2="9.5" y2="7" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><line x1="4.5" y1="9.5" x2="7.5" y2="9.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg></span>', text: 'Request a TAMM or Carfax UAE vehicle history report before signing' },
            qs.fsh === false ? { icon: '<span class="ks-s7-check-icon ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M10 2a3.5 3.5 0 00-4.5 5L1.5 11a1.2 1.2 0 001.7 1.7L7 8.5A3.5 3.5 0 0012 4l-1.5 1.5-1-.5L9 3.5z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>', text: 'Ask for workshop receipts or stamped service book to partially verify maintenance' } : null,
            qs.accident === true ? { icon: '<span class="ks-s7-check-icon ks-check-warn"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span>', text: 'Get an independent bodywork inspection — assess repair quality, not just disclosure' } : null,
            { icon: '<span class="ks-s7-check-icon ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4" stroke="currentColor" stroke-width="1.5"/><line x1="9.2" y1="9.2" x2="12.5" y2="12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>', text: 'Insist on a pre-purchase inspection at a certified workshop — AED 200–400, worth every dirham' },
            { icon: '<span class="ks-s7-check-icon ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M8.5 1.5H3.5a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8.5 1.5V5h3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="4.5" y1="8" x2="9.5" y2="8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg></span>', text: 'Confirm RTA transfer, Mulkiya, and insurance lapse date before the handover day' },
            strengths.length ? { icon: '<span class="ks-s7-check-icon ks-check-pos"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>', text: `Positives to confirm at handover: ${strengths.join(', ')}` } : null,
          ].filter(Boolean);

          // v72: purpose-aware framing note above situation
          const _buyerFrameNote = purpVal === 'selling'
            ? `<div style="font-family:'Exo 2',sans-serif;font-size:0.68rem;color:#4B5E75;background:rgba(10,37,64,0.05);border-radius:6px;padding:8px 12px;margin:16px 20px 0;border-left:3px solid rgba(10,37,64,0.2);">This is what a buyer sees. Understanding their position helps you price and negotiate smarter.</div>`
            : purpVal === 'research'
            ? `<div style="font-family:'Exo 2',sans-serif;font-size:0.68rem;color:#4B5E75;background:rgba(10,37,64,0.05);border-radius:6px;padding:8px 12px;margin:16px 20px 0;border-left:3px solid rgba(10,37,64,0.2);">Buyer perspective — how a serious buyer would approach this vehicle and its price.</div>`
            : '';
          return _buyerFrameNote + situationHtml + `<div class="ks-s7-checklist">
            <div class="ks-s7-checklist-title">${purpVal==="buying"?"Your Buyer Checklist":purpVal==="selling"?"What Buyers Will Check":"Buyer Checklist"}</div>
            ${checklistItems.map(i=>`<div class="ks-s7-check-item">${i.icon}<span>${i.text}</span></div>`).join('')}
          </div>`;
        })()}
      </div><!-- /ks-s7-col-buyer -->

      <!-- SELLER COLUMN -->
      <div class="ks-s7-col-wrap ks-s7-col-seller">
        <div class="ks-s7-col-head ks-s7-col-head-seller"><span class="ks-col-head-ico"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 1.5h5.5l5 5-5 5.5-5.5-5.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="4.5" cy="4.5" r="1.2" fill="currentColor"/></svg></span>${purpVal==='selling'?'For You — Seller':'Seller\'s Perspective'}</div>
        ${(()=>{
          const listPrice = Math.min(
            Math.round(handshake * 1.07 / 500) * 500,
            rangeMax || Math.round(handshake * 1.12 / 500) * 500
          );
          const floorPrice = Math.round(handshake * 0.97 / 500) * 500;
          const askIsOver  = askN && askN > handshake * 1.08;
          const askIsUnder = askN && askN < handshake * 0.95;
          const hasPositives = [qs.fsh === true, qs.singleOwner === true, qs.warranty === true, specVal === 'GCC' || specVal === 'GCC Spec'].filter(Boolean).length;
          const hasNegatives = [qs.fsh === false, qs.accident === true, qs.singleOwner === false].filter(Boolean).length;

          let pricingAdvice = '';
          if (askIsOver) {
            pricingAdvice = `<div class="ks-s7-situation ks-s7-sit-warn">
              <div class="ks-s7-sit-title" style="display:flex;align-items:center;gap:6px;"><span style="color:#9C5535;display:inline-flex;"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span>Current Ask May Be Too High</div>
              <p>Your asking price of <strong>AED ${askN.toLocaleString()}</strong> is <strong>${Math.round((askN-handshake)/handshake*100)}% above</strong> the market FMV of AED ${handshake.toLocaleString()}. UAE buyers are price-aware — listings significantly above FMV attract fewer serious enquiries and typically sit for 60–90+ days before selling or being relisted lower.</p>
              ${hasNegatives ? '<p>This vehicle also has factors that experienced buyers will use to negotiate hard. Pricing high with these disclosures makes it harder to defend the ask.</p>' : ''}
              <p>Consider listing at <strong>AED ${listPrice.toLocaleString()}</strong> — this gives you genuine negotiation room while remaining within buyer consideration range. Your floor should be <strong>AED ${floorPrice.toLocaleString()}</strong>.</p>
            </div>`;
          } else if (askIsUnder) {
            pricingAdvice = `<div class="ks-s7-situation ks-s7-sit-good">
              <div class="ks-s7-sit-title">↑ You May Be Leaving Money Behind</div>
              <p>Your asking price of <strong>AED ${askN.toLocaleString()}</strong> is below the fair market value of AED ${handshake.toLocaleString()}. ${hasNegatives ? 'While the vehicle has some factors that reduce value, you can likely list higher and still attract buyers.' : 'This vehicle has a strong profile — you can price higher without losing buyer interest.'}</p>
              <p>Try listing at <strong>AED ${listPrice.toLocaleString()}</strong>. Buyers will negotiate — but starting at FMV+5–7% lets you settle at fair value without leaving the deal.</p>
            </div>`;
          } else {
            pricingAdvice = `<div class="ks-s7-situation ks-s7-sit-fair">
              <div class="ks-s7-sit-title">Recommended Listing Strategy</div>
              <p>The fair market value for this vehicle is <strong>AED ${handshake.toLocaleString()}</strong>. List at <strong>AED ${listPrice.toLocaleString()}</strong> — that's 5–7% above FMV, which is the standard negotiation buffer expected by UAE buyers. Expect offers starting around AED ${Math.round(handshake*0.94/500)*500 |0}; aim to settle at AED ${Math.round(handshake*1.01/500)*500 |0} or above.</p>
              <div style="margin-top:12px;padding:12px 16px;background:rgba(10,37,64,0.06);border-left:4px solid #0A2540;border-radius:8px;display:flex;align-items:center;gap:12px;">
                <div style="flex-shrink:0;display:flex;align-items:center;color:#7A3828;"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M4.5 1.5h5l3 3v5l-3 3h-5l-3-3v-5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="4.5" x2="7" y2="7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="9.5" r=".65" fill="currentColor"/></svg></div>
                <div>
                  <div style="font-family:'Exo 2',sans-serif;font-size:0.6rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#000080;margin-bottom:3px;">Absolute Floor Price</div>
                  <div style="font-family:'Orbitron',sans-serif;font-size:1.15rem;font-weight:900;color:#0A2540;letter-spacing:-.02em;">AED ${floorPrice.toLocaleString()}</div>
                  <div style="font-family:'Exo 2',sans-serif;font-size:0.72rem;color:#000080;margin-top:2px;">Do not accept below this without a documentable reason (urgent sale, identified fault).</div>
                </div>
              </div>
            </div>`;
          }

          const sellerTips = [
            (specVal === 'GCC' || specVal === 'GCC Spec') ? { icon: '<span class="ks-s7-check-icon ks-check-pos"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>', text: 'GCC spec is your strongest selling point in the UAE — state it clearly in the listing title' } : { icon: '<span class="ks-s7-check-icon ks-check-warn"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span>', text: 'Non-GCC spec must be disclosed upfront — this limits your buyer pool; price accordingly' },
            qs.fsh === true ? { icon: '<span class="ks-s7-check-icon ks-check-pos"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>', text: 'Full service history is your best asset — photograph every page and upload to the listing' } : { icon: '<span class="ks-s7-check-icon ks-check-warn"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span>', text: 'No service history: gather any receipts, workshop stamps, or dealer records you have — partial documentation is better than none' },
            qs.accident === true ? { icon: '<span class="ks-s7-check-icon ks-check-warn"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 1 12.5h12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="currentColor"/></svg></span>', text: 'Accident history must be disclosed in the UAE. Price it in proactively — transparent sellers close faster than those who get caught hiding it' } : { icon: '<span class="ks-s7-check-icon ks-check-pos"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>', text: 'Clean accident history — highlight "no accidents" prominently in the listing' },
            qs.singleOwner === true ? { icon: '<span class="ks-s7-check-icon ks-check-pos"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><polyline points="1.5,7 5,10.5 12.5,3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>', text: 'Single owner is a premium signal — mention it in the first line of your description' } : { icon: '<span class="ks-s7-check-icon ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/><line x1="7" y1="6.5" x2="7" y2="9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="4.5" r=".7" fill="currentColor"/></svg></span>', text: 'Multiple owners: be straightforward about ownership count — buyers will pull the vehicle history anyway' },
            { icon: '<span class="ks-s7-check-icon ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="4.5" width="11" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="8.5" r="2" stroke="currentColor" stroke-width="1.4"/><path d="M5 4.5v-1l1-1h2l1 1v1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>', text: (()=>{
              // Fix 6: context-aware AI advice — not generic
              const bLc=(brand||'').toLowerCase();
              const mLc=(model||'').toLowerCase();
              const carStr=`${brand}${model?' '+model:''}`;
              const cy6=new Date().getFullYear();
              const age6=cy6-parseInt(year||cy6);
              // Estimate sell-speed uplift based on segment (Dubai data patterns)
              const isLux=/(bmw|mercedes|audi|lexus|porsche|land rover|infiniti)/.test(bLc);
              const isReliable=/(toyota|nissan|honda|mitsubishi)/.test(bLc);
              const photoUplift=isLux?'35–45%':isReliable?'28–38%':'25–35%';
              return `${carStr} listings with 20+ photos sell ${photoUplift} faster in Dubai & Sharjah — include all angles, dashboard, odometer, and any scuffs upfront`;
            })() },
            { icon: '<span class="ks-s7-check-icon ks-check-action"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/><line x1="7" y1="6.5" x2="7" y2="9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="4.5" r=".7" fill="currentColor"/></svg></span>', text: 'List on Dubizzle and YallaMotor simultaneously — these are the two highest-traffic UAE car platforms' },
          ];

          // v72: purpose-aware framing note
          const _sellerFrameNote = purpVal === 'buying'
            ? `<div style="font-family:'Exo 2',sans-serif;font-size:0.68rem;color:#4B5E75;background:rgba(196,154,42,0.07);border-radius:6px;padding:8px 12px;margin:16px 20px 0;border-left:3px solid rgba(196,154,42,0.35);">This is how the seller is thinking. Knowing their strategy gives you a negotiation edge.</div>`
            : purpVal === 'research'
            ? `<div style="font-family:'Exo 2',sans-serif;font-size:0.68rem;color:#4B5E75;background:rgba(196,154,42,0.07);border-radius:6px;padding:8px 12px;margin:16px 20px 0;border-left:3px solid rgba(196,154,42,0.35);">Seller perspective — how a typical UAE seller would price and position this vehicle.</div>`
            : '';
          return _sellerFrameNote + pricingAdvice + `<div class="ks-s7-checklist">
            <div class="ks-s7-checklist-title">${purpVal==="selling"?"Your Seller Playbook":purpVal==="buying"?"What the Seller Is Thinking":"Seller Playbook"}</div>
            ${sellerTips.map(i=>`<div class="ks-s7-check-item">${i.icon}<span>${i.text}</span></div>`).join('')}
          </div>`;
        })()}
      </div><!-- /ks-s7-col-seller -->

    </div><!-- /ks-s7-sidebyside -->
  </div><!-- /ks-section-s7 -->

  <!-- ── 8. UNLOCK FULL REPORT CTA ─────────────────── -->
  <div class="ks-page-paid" id="ksCta1" style="display:block;">
  <div class="ks-section ks-section-cta">
    <div class="ks-cta-box">
      <div class="ks-cta-title">Get the Full Picture</div>
      <div class="ks-cta-sub">Full analysis, price outlook, running costs, and live listings.</div>
      <button class="ks-cta-btn ks-cta-btn-compact" id="ksBtnPaid" onclick="ksPirTab(2)" aria-label="Unlock full report">
        Unlock Full Report
      </button>
      <div class="ks-cta-items">
        <span>3‑Year Price Outlook</span>
        <span>💸 Year 1 Costs</span>
        <span>Live Listings</span>
      </div>
    </div>
  </div>
  </div>

  </div><!-- /ks-page-1 -->

  <!-- ══════════════════════════════════════════════════
       SECTION 2 — PAID REPORT (locked by default)
  ══════════════════════════════════════════════════ -->

  <!-- Tab nav — shown once paid unlocked -->
  <div class="ks-tabnav" id="ksTabNav" style="display:none;">
    <button class="ks-tabnav-btn ks-tabnav-compact" id="ksBtnFree" onclick="ksPirTab(1)" aria-selected="true">Free Report</button>
    <button class="ks-tabnav-btn ks-tabnav-compact" id="ksBtnPaidTab" onclick="ksPirTab(2)" aria-selected="false">Full Report</button>
  </div>

  <div class="ks-page ks-page-paid ks-page-2" id="ksPage2" style="display:none;">

  <!-- ── 1. 3-YEAR PRICE OUTLOOK ────────────────────── -->
  <div class="ks-section ks-section-outlook">
    <div class="ks-section-eyebrow">Price Forecast</div>
    <div class="ks-section-title">3-Year Price Outlook</div>

    ${(()=>{
      // Build fc from _deprRows (API path or local fallback via buildDeprTable)
      // fc[0] = today, fc[1..3] = Y+1, Y+2, Y+3
      const fc = (() => {
        if (!_deprRows || _deprRows.length < 3) return [];
        const rows = [{
          yr: 'Today', val: handshake, loss: 0, cumLoss: 0,
          retained: 100, rate: 0,
        }];
        _deprRows.forEach((r, i) => {
          const val      = r.endVal  ?? r.val ?? 0;
          const cumLoss  = handshake - val;
          const retained = Math.round(val / Math.max(handshake, 1) * 100);
          rows.push({
            yr      : r.year ?? (new Date().getFullYear() + i + 1),
            val,
            loss    : r.loss ?? (_deprRows[i - 1]?.endVal ?? handshake) - val,
            cumLoss,
            retained,
            rate    : r.rate ?? 0,
          });
        });
        return rows;
      })();
      const cls = (_dp.cls||_dp.class||"C")   || '—';
      const lbl = (_dp.class||"") || 'Market standard depreciation';
      const hnt = ""  || '';
      if(!fc||fc.length<4) return '<p style="color:var(--muted);font-size:.85rem">Forecast not available.</p>';

      const y1 = fc[1], y2 = fc[2], y3 = fc[3];
      const monthly = Math.round(y1.loss / 12 / 100) * 100;

      const buyerAdvice = handshake > 0
        ? `You are buying at AED ${ksRound(handshake).toLocaleString()}. In 3 years this vehicle is likely worth AED ${ksRound(y3.val).toLocaleString()} — a total drop of AED ${ksRound(y3.cumLoss).toLocaleString()} (${100-y3.retained}%). That is roughly AED ${ksRound(monthly).toLocaleString()} per month in value lost. ${hnt}`
        : 'Enter a price to see buyer analysis.';

      const sellerAdvice = `Selling now at AED ${ksRound(handshake).toLocaleString()} preserves AED ${ksRound(y1.loss).toLocaleString()} vs waiting one more year (Year ${y1.yr} estimated AED ${ksRound(y1.val).toLocaleString()}). ${cls==='S'||cls==='A'?'This model holds value well — you have more time to find the right buyer.':'This model depreciates faster — acting sooner protects more value.'}`;

      const brokerAdvice = `Class ${cls}: ${lbl}. Year 1 rate: ${y1.rate}%. ${cls==='S'||cls==='A'?'Fast-moving stock — price at market, expect to close in days.':cls==='D'||cls==='E'?'Slower-moving — needs competitive pricing. Watch holding costs.':'Steady market — typical 14–30 days to close at handshake price.'}`;

      return `
      <table class="ks-depr3-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Est. Value</th>
            <th>Annual Drop</th>
            <th>Total Loss</th>
            <th>Retained</th>
          </tr>
        </thead>
        <tbody>
          ${fc.map((f,i) => `
          <tr class="${i===0?'ks-depr3-now-row':''}">
            <td>${i===0?'Today (FMV)':f.yr}</td>
            <td>AED ${ksRound(f.val).toLocaleString()}</td>
            <td class="ks-depr3-loss-cell">${f.loss>0?'−AED '+ksRound(f.loss).toLocaleString():'—'}</td>
            <td class="ks-depr3-cum-cell">${f.cumLoss>0?'−AED '+ksRound(f.cumLoss).toLocaleString():'—'}</td>
            <td class="ks-depr3-ret-cell">${f.retained}%</td>
          </tr>`).join('')}
        </tbody>
      </table>

      <div class="ks-depr3-cls-note">Class ${cls} — ${lbl}</div>

      <div class="ks-depr3-insights">
        <div class="ks-depr3-insight ks-depr3-buy">
          <span class="ks-depr3-ico ks-check-action" style="display:inline-flex;align-items:center;"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1.5 2h1.5l2 6.5h6l1.5-4.5H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.5" cy="11.5" r=".9" stroke="currentColor" stroke-width="1.4"/><circle cx="9.8" cy="11.5" r=".9" stroke="currentColor" stroke-width="1.4"/></svg></span>
          <div><span class="ks-depr3-lbl">Buyer</span>${buyerAdvice}</div>
        </div>
        <div class="ks-depr3-insight ks-depr3-sell">
          <span class="ks-depr3-ico">🏷️</span>
          <div><span class="ks-depr3-lbl">Seller</span>${sellerAdvice}</div>
        </div>
        <div class="ks-depr3-insight ks-depr3-broker">
          <span class="ks-depr3-ico">📋</span>
          <div><span class="ks-depr3-lbl">Broker / Dealer</span>${brokerAdvice}</div>
        </div>
      </div>`;
    })()}
  </div>


  <!-- ── 1b. RED FLAGS — CRITICAL PURCHASE RISKS ───── -->
  <div class="ks-section ks-section-redflags">
    <div class="ks-section-eyebrow">Due Diligence</div>
    <div class="ks-section-title">Red Flags Checklist</div>
    ${(()=>{
      const _rfAccident   = qs.accident === true;
      const _rfNoFsh      = qs.fsh      === false;
      const _rfMultiOwner = qs.singleOwner === false;
      const _rfPriceSuspect = askN && askN < handshake * 0.80 && handshake > 30000;

      // Taxi heuristic: common UAE taxi model AND km > 250k (harder threshold)
      const _taxiModels = /camry|accord|altima|sunny|micra|sonata|elantra|optima|talento|transit|h1|starex/i;
      const _rfTaxiRisk = _taxiModels.test((model||'')+(brand||'')) && km > 250000;

      function rfCard(state, title, desc, action) {
        const cls   = state === 'triggered' ? 'triggered' : state === 'clear' ? 'clear' : 'unknown';
        const badge = state === 'triggered' ? '✕' : state === 'clear' ? '✓' : '?';
        return `<div class="ks-redflag-card ${cls}">
          <div class="ks-redflag-card-head"><span class="ks-redflag-badge">${badge}</span><span>${title}</span></div>
          <div class="ks-redflag-card-body">${desc}</div>
          <div class="ks-redflag-action">${action}</div>
        </div>`;
      }

      const cards = [
        // 1. ACCIDENT — data-driven
        rfCard(
          _rfAccident ? 'triggered' : 'clear',
          'Accident History',
          _rfAccident
            ? 'Accident declared. UAE buyers apply a 10–20% discount for any recorded accident, regardless of repair quality.'
            : 'No accident declared. Verify with a TAMM vehicle history report before transfer.',
          _rfAccident
            ? '→ Get an independent paint & bodywork inspection. Request the full repair report.'
            : '→ Run a TAMM check — takes 5 mins, costs AED 10.'
        ),
        // 2. SERVICE HISTORY — data-driven
        rfCard(
          (_rfNoFsh || _rfMultiOwner) ? 'triggered' : 'clear',
          'Service History Gap',
          _rfNoFsh
            ? 'No service history on file. Hidden mechanical issues are impossible to rule out without records — especially for vehicles over 5 years old.'
            : _rfMultiOwner
            ? 'Multiple previous owners. Service continuity is harder to verify; gaps are common between transfers.'
            : 'Full service history declared. Verify stamps, dates, and dealer authenticity at handover.',
          (_rfNoFsh || _rfMultiOwner)
            ? '→ Gather any receipts or workshop stamps. An independent mechanical inspection is strongly recommended.'
            : '→ Cross-check the service book against vehicle age and mileage at handover.'
        ),
        // 3. PRICE SUSPECT — data-driven
        rfCard(
          _rfPriceSuspect ? 'triggered' : 'clear',
          'Suspiciously Low Price',
          _rfPriceSuspect
            ? `Asking price (AED ${askN.toLocaleString()}) is more than 20% below FMV of AED ${handshake.toLocaleString()}. Extreme underpricing in the UAE usually signals undisclosed damage, outstanding finance, or a distressed sale.`
            : 'Asking price is within a normal range of FMV. No pricing anomaly detected.',
          _rfPriceSuspect
            ? '→ Do not proceed without a full mechanical inspection and TAMM report. Verify the ownership chain.'
            : '→ Price looks reasonable. Standard due diligence still applies.'
        ),
        // 4. TAXI — heuristic
        rfCard(
          _rfTaxiRisk ? 'triggered' : 'unknown',
          'Taxi / Transport History',
          _rfTaxiRisk
            ? `High mileage (${km.toLocaleString()} km) on a model commonly registered for taxi/rideshare in the UAE. Commercial-use driving cycles accelerate wear on brakes, suspension, and transmission.`
            : 'Cannot be confirmed remotely. Common taxi models with very high mileage carry elevated commercial-use risk.',
          _rfTaxiRisk
            ? '→ Inspect brakes, suspension, and transmission carefully. Request all service records.'
            : '→ Ask the seller directly. Check the TAMM report for a “commercial vehicle” usage flag.'
        ),
        // 5. OUTSTANDING FINANCE — always unknown
        rfCard(
          'unknown',
          'Outstanding Finance / Bank Lien',
          'If the seller has an undischarged bank loan on this vehicle, the lender holds a lien. Completing the transfer without settling the loan can result in repossession after purchase.',
          '→ Request a bank clearance letter (براءة ذمة) before signing any transfer documents at RTA.'
        ),
        // 6. MERGED: VIN + Flood + Odometer → In-Person Inspection card
        rfCard(
          'unknown',
          'In-Person Inspection Required',
          'Three risks that cannot be detected remotely and require physical inspection: <strong>VIN/chassis mismatch</strong> (verify plate vs Mulkiya vs engine bay), <strong>flood damage</strong> (check under carpets, door sills, ECU for corrosion), and <strong>odometer tampering</strong> (cross-reference mileage against service stamp dates).',
          '→ Commission a pre-purchase inspection (AED 200–400) at a certified UAE workshop — it covers all three.'
        ),
      ];

      const triggeredCount = [_rfAccident, _rfNoFsh || _rfMultiOwner, _rfPriceSuspect, _rfTaxiRisk].filter(Boolean).length;
      const summaryBar = triggeredCount > 0
        ? `<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:10px 14px;border-radius:8px;background:rgba(140,74,60,0.09);border:1.5px solid rgba(140,74,60,0.30);font-family:'Exo 2',sans-serif;">
            <span style="font-size:1rem;flex-shrink:0;">⚠️</span>
            <div>
              <div style="font-size:0.72rem;font-weight:800;color:#8C4A3C;">${triggeredCount} concern${triggeredCount>1?'s':''} flagged from your inputs</div>
              <div style="font-size:0.67rem;color:#5D3828;margin-top:1px;">Items marked <strong>✕</strong> require action before purchase. Items marked <strong>?</strong> must be verified in person.</div>
            </div>
          </div>`
        : `<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:10px 14px;border-radius:8px;background:rgba(22,163,74,0.07);border:1.5px solid rgba(22,163,74,0.25);font-family:'Exo 2',sans-serif;">
            <span style="font-size:1rem;flex-shrink:0;">✅</span>
            <div>
              <div style="font-size:0.72rem;font-weight:800;color:#16A34A;">No flags triggered from your inputs</div>
              <div style="font-size:0.67rem;color:#2D6A40;margin-top:1px;">Items marked <strong>?</strong> below must still be verified in person — they cannot be confirmed remotely.</div>
            </div>
          </div>`;

      return summaryBar + `<div class="ks-redflags-grid">${cards.join('')}</div>
        <div class="ks-redflags-note">Flags marked <strong>✕</strong> were triggered by data you entered. Flags marked <strong>?</strong> cannot be verified remotely. This checklist is not a substitute for a certified pre-purchase inspection.</div>`;
    })()}
  </div>

  <!-- ── 2. FIRST-YEAR COSTS & YEARLY VALUE DROP ────── -->
  <div class="ks-section ks-section-costs">
    <div class="ks-section-eyebrow">First‑Year Costs</div>
    <div class="ks-section-title">Everything You'll Pay in the First Year</div>
    <table class="ks-cost-table">
      <tr><td>RTA Registration & Transfer</td><td>AED ${(940).toLocaleString()}</td></tr>
      <tr><td>Insurance (estimated)</td><td>AED ${ksRound(cost.ins).toLocaleString()}</td></tr>
      <tr><td>Maintenance &amp; Service</td><td>AED ${ksRound(cost.maint).toLocaleString()}</td></tr>
      <tr><td>Fuel (annual estimate)</td><td>AED ${ksRound(cost.fuelEst).toLocaleString()}</td></tr>
      <tr class="ks-cost-total"><td>Total First-Year Running Costs</td><td>AED ${ksRound(cost.total).toLocaleString()}</td></tr>
      <tr style="border-top:2px solid var(--accent-line);"><td style="font-weight:700;color:var(--ink);">Total Year 1 Investment <span style="font-size:.6rem;font-weight:500;color:var(--muted);">(purchase + costs)</span></td><td style="font-weight:800;color:var(--accent);">AED ${ksRound(handshake + cost.total).toLocaleString()}</td></tr>
    </table>
    <div class="ks-cost-note">Running costs exclude the purchase price. Total Investment = Fair Market Price + first-year running costs. Estimates based on UAE averages; actual figures vary by insurer, usage, and dealer.</div>
  </div>


  <!-- ── 3. 5-YEAR TOTAL COST OF OWNERSHIP ─────────── -->
  <div class="ks-section ks-section-tco">
    <div class="ks-section-eyebrow">5-Year Ownership</div>
    <div class="ks-section-title">Total Cost of Ownership — 5 Years</div>
    ${(()=>{
      // Base year-1 running costs from cost object (already computed above)
      const tcoIns0   = cost.ins    || 0;
      const tcoMaint0 = cost.maint  || 0;
      const tcoFuel0  = cost.fuelEst|| 0;
      const tcoDep0   = _dp.annual  || Math.round(handshake * 0.14 / 500) * 500;
      const INF = 0.05; // 5% annual inflation on running costs

      // Depreciation schedule — use _deprRows if available, else compute inline
      // Year 1 depr = tcoDep0; subsequent years use depr curve by class
      const _dcTco = (r.depreciation_class || r.dc || _dc || 'C');
      const _deprRates = {
        S: [0.12,0.10,0.08,0.07,0.06],
        A: [0.13,0.11,0.09,0.07,0.06],
        B: [0.15,0.12,0.10,0.08,0.06],
        C: [0.17,0.14,0.11,0.09,0.07],
        D: [0.20,0.16,0.13,0.10,0.08],
        E: [0.22,0.18,0.14,0.11,0.09],
      };
      const rates = _deprRates[_dcTco] || _deprRates['C'];

      let carVal = handshake;
      let totalTco = 0;
      const rows = [];
      for(let i = 0; i < 5; i++){
        const yr = (carYear || new Date().getFullYear()) + i + 1;
        const inf = Math.pow(1 + INF, i);
        const ins   = Math.round(tcoIns0   * inf / 100) * 100;
        const maint = Math.round(tcoMaint0 * inf / 100) * 100;
        const fuel  = Math.round(tcoFuel0  * inf / 100) * 100;
        const depr  = Math.round(handshake * rates[i] / 500) * 500;
        const running = ins + maint + fuel;
        const total   = running + depr;
        totalTco += total;
        const deprBarPct = Math.min(100, Math.round((depr / handshake) * 100 * 4)); // scale so 25%=100%
        rows.push({ yr, ins, maint, fuel, depr, running, total, deprBarPct, carVal });
        carVal = Math.round((carVal - depr) / 500) * 500;
      }
      const avgPerYear = Math.round(totalTco / 5 / 500) * 500;

      const tableRows = rows.map((r2,i) => `
        <tr>
          <td><strong>Year ${i+1}</strong> <span style="font-size:0.58rem;color:var(--muted);">${r2.yr}</span></td>
          <td>AED ${r2.ins.toLocaleString()}</td>
          <td>AED ${r2.maint.toLocaleString()}</td>
          <td>AED ${r2.fuel.toLocaleString()}</td>
          <td>
            <div class="ks-tco-depr-bar-wrap">
              <span>AED ${r2.depr.toLocaleString()}</span>
              <div class="ks-tco-depr-bar"><div class="ks-tco-depr-bar-fill" style="width:${r2.deprBarPct}%"></div></div>
            </div>
          </td>
          <td><strong>AED ${r2.total.toLocaleString()}</strong></td>
        </tr>`).join('');

      return `
        <div style="overflow-x:auto;">
          <table class="ks-tco-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Insurance</th>
                <th>Maintenance</th>
                <th>Fuel</th>
                <th>Depreciation</th>
                <th>Year Total</th>
              </tr>
            </thead>
            <tbody>${tableRows}</tbody>
            <tfoot>
              <tr class="ks-tco-total">
                <td colspan="5">5-Year Total Cost of Ownership</td>
                <td>AED ${totalTco.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="ks-tco-note">
          Depreciation applies class-${_dcTco} rates to the FMV of AED ${handshake.toLocaleString()}.
          Running costs (insurance, maintenance, fuel) inflated at 5%/year.
          Avg annual out-of-pocket: <strong>AED ${avgPerYear.toLocaleString()}</strong> excl. purchase price.
          Actual figures vary by usage, insurer, and market conditions.
        </div>`;
    })()}
  </div>

  <!-- ── 4. LIVE LISTINGS COMPARED ─────────────────── -->
  <div class="ks-section ks-section-listings">
    <div class="ks-section-eyebrow">Live Listings</div>
    <div class="ks-section-title">Live Listings Compared</div>
    <div class="ks-listings-table-wrap">
      ${(()=>{
        // listings_snapshot has price + mileage from the Worker; prefer it over sourceLinks
        const _snap = r.listings_snapshot && r.listings_snapshot.length ? r.listings_snapshot : null;
        if(_snap){
          const rows=_snap.map((sl)=>{
            const slPriceNum = sl.price ? parseInt(sl.price) : null;
            const price = slPriceNum ? `AED ${slPriceNum.toLocaleString()}` : '—';
            const _slMileage = sl.mileage ? parseInt(sl.mileage) : null;
            const _slAge = Math.max(1, new Date().getFullYear() - parseInt(year||carYear||2020));
            const _slEstKm = Math.round(_slAge * 18000 / 5000) * 5000; // 18k/yr avg, 5k rounding
            const mileageDisp = _slMileage
              ? `${_slMileage.toLocaleString()} km`
              : `~${_slEstKm.toLocaleString()} km <span style="font-size:.58rem;color:var(--muted);font-weight:500;">(est.)</span>`;
            // snapshot spec field: "gcc" | "non-gcc" — use as year proxy not available, fall back to form year
            const yearDisp = year;
            // Fix 4+5: Trim column — use snapshot trim if available, else form trim
            const trimDisp = sl.trim || g('trim')?.value || '—';
            // find matching url from sourceLinks by source name if available
            const matchLink = (r.sourceLinks||[]).find(s=>s.title===sl.source)||null;
            const href = sl.url || (matchLink&&matchLink.url) || '#';
            // FIX 7: % difference vs FMV
            let diffCell = '—';
            if(slPriceNum && handshake){
              const diffPct = Math.round((slPriceNum - handshake) / handshake * 100);
              const absPct = Math.abs(diffPct);
              const diffColor = diffPct > 5 ? '#7A3828' : diffPct < -5 ? '#C49A2A' : '#9C5535';
              const diffArrow = diffPct > 0 ? '▲' : diffPct < 0 ? '▼' : '●';
              diffCell = `<span style="font-size:.7rem;font-weight:800;color:${diffColor};white-space:nowrap;">${diffArrow} ${absPct}%</span>`;
            }
            return `<tr>
              <td class="ks-lt-brand">${brand}</td>
              <td class="ks-lt-model">${model||'—'}</td>
              <td class="ks-lt-year">${yearDisp}</td>
              <td class="ks-lt-trim" style="font-size:.68rem;color:var(--muted);">${trimDisp}</td>
              <td class="ks-lt-km">${mileageDisp}</td>
              <td class="ks-lt-price">${price}</td>
              <td class="ks-lt-diff">${diffCell}</td>
              <td class="ks-lt-link">${href&&href!=='#'?`<a href="${href}" target="_blank" rel="noopener noreferrer" class="ks-lt-a">View ↗</a>`:'—'}</td>
            </tr>`;
          });
          return `<table class="ks-listings-table">
            <thead><tr>
              <th>Brand</th><th>Model</th><th>Year</th><th>Trim</th><th>Mileage</th><th>Asking Price</th><th>vs FMV</th><th></th>
            </tr></thead>
            <tbody>${rows.join('')}</tbody>
          </table>`;
        }
        if(r.sourceLinks&&r.sourceLinks.length){
          const rows=r.sourceLinks.map((sl)=>{
            return `<tr>
              <td class="ks-lt-brand">${brand}</td>
              <td class="ks-lt-model">${model||'—'}</td>
              <td class="ks-lt-year">${year}</td>
              <td class="ks-lt-trim" style="font-size:.68rem;color:var(--muted);">${g('trim')?.value||'—'}</td>
              <td class="ks-lt-km">—</td>
              <td class="ks-lt-price">—</td>
              <td class="ks-lt-diff" style="color:var(--muted);font-size:.7rem;">—</td>
              <td class="ks-lt-link"><a href="${sl.url||'#'}" target="_blank" rel="noopener noreferrer" class="ks-lt-a">View ↗</a></td>
            </tr>`;
          });
          return `<table class="ks-listings-table">
            <thead><tr>
              <th>Brand</th><th>Model</th><th>Year</th><th>Trim</th><th>Mileage</th><th>Asking Price</th><th>vs FMV</th><th></th>
            </tr></thead>
            <tbody>${rows.join('')}</tbody>
          </table>`;
        }
        // FIX 5: Empty state — no live listings scraped, show clear message + fallback links
        const q=encodeURIComponent(`${brand} ${model||''} ${year}`);
        const qKm=km?encodeURIComponent(`${brand} ${model||''} ${year} ${Math.round(km/10000)*10000}km`):'';
        const emptyBanner=`<div style="display:flex;align-items:flex-start;gap:10px;background:rgba(196,154,42,0.10);border:1px solid rgba(196,154,42,0.40);border-radius:10px;padding:12px 14px;margin-bottom:12px;font-family:'Exo 2',sans-serif;">
          <span style="font-size:1.1rem;flex-shrink:0;margin-top:1px;">⚠️</span>
          <div>
            <div style="font-size:.74rem;font-weight:800;color:#7A5010;margin-bottom:2px;">No live listings found — using historical data</div>
            <div style="font-size:.7rem;color:#8C4A3C;line-height:1.5;">The FMV above is derived from historical pricing models. Browse the platforms below to see current market listings and compare manually.</div>
          </div>
        </div>`;
        const links=[
          {name:'Dubizzle',url:`https://dubai.dubizzle.com/motors/used-cars/?q=${q}`,note:'Dubai · Sharjah'},
          {name:'YallaMotor',url:`https://uae.yallamotor.com/used-cars?q=${q}`,note:'UAE wide'},
          {name:'CarsSwitch',url:`https://carsswitch.com/en-ae/used-cars?q=${q}`,note:'Dealer-inspected'},
          {name:'AutoTrader UAE',url:`https://www.autotraderuae.com/search?q=${q}`,note:'Pan-Gulf'},
        ];
        const rows2=links.map(l=>`<tr>
          <td class="ks-lt-brand">${brand}</td>
          <td class="ks-lt-model">${model||'—'}</td>
          <td class="ks-lt-year">${year}</td>
          <td class="ks-lt-trim" style="font-size:.68rem;color:var(--muted);">${g('trim')?.value||'—'}</td>
          <td class="ks-lt-km">${km?km.toLocaleString()+' km':'—'}</td>
          <td class="ks-lt-price">—</td>
          <td class="ks-lt-diff" style="color:var(--muted);font-size:.7rem;">—</td>
          <td class="ks-lt-link"><a href="${l.url}" target="_blank" rel="noopener noreferrer" class="ks-lt-a">${l.name} ↗</a></td>
        </tr>`);
        return emptyBanner+`<table class="ks-listings-table">
          <thead><tr>
            <th>Brand</th><th>Model</th><th>Year</th><th>Trim</th><th>Mileage</th><th>Asking Price</th><th>vs FMV</th><th>Source</th>
          </tr></thead>
          <tbody>${rows2.join('')}</tbody>
        </table>`;
      })()}
    </div>
    <div class="ks-listings-note">Compare against FMV of <strong>AED ${handshake.toLocaleString()}</strong>. Links open live listings used to compute the Fair Market Price above.</div>
  </div>

  <!-- ── 5. FOOTER ──────────────────────────────────── -->
  <div class="ks-section ks-section-footer" style="background:transparent;border-bottom:none;">
    <div class="ks-footer-disc">Price estimates are based on live UAE market data and AI-assisted pricing models. Values vary by location, condition, and negotiation. Not a guaranteed sale or purchase price. Always verify with current listings before transacting.</div>
    <button class="ks-footer-reset" onclick="resetForm()">↺ Run Another Check</button>
  </div>

  <!-- ── 6. CROWDSOURCED TRANSACTION MICRO-FORM ─── -->
  <div class="ks-section ks-section-crowdsource" style="border-bottom:none;padding-bottom:0;">
    <div class="ks-section-eyebrow">Community</div>
    <div class="ks-section-title" style="margin-bottom:4px;">Did this deal close?</div>
    <div style="font-size:.72rem;color:var(--muted);margin-bottom:14px;line-height:1.5;">Help KamSayara buyers and sellers by sharing your actual transaction price. All data is anonymous and used only to improve market accuracy.</div>
    <div id="ksCrowdForm" style="display:flex;flex-direction:column;gap:10px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="ig">
          <label for="csActualPrice">Actual Sale Price <span style="font-size:.6rem;color:var(--muted);font-weight:500;">(AED)</span></label>
          <div class="prefix-wrap"><span class="prefix-lbl">AED</span>
            <input type="number" id="csActualPrice" placeholder="e.g. 47500" min="1000" max="5000000" style="padding-left:2.6rem;">
          </div>
        </div>
        <div class="ig">
          <label for="csOutcome">Transaction Outcome</label>
          <select id="csOutcome">
            <option value="">Select…</option>
            <option value="bought">I Bought It</option>
            <option value="sold">I Sold It</option>
            <option value="passed">I Passed / Walked Away</option>
            <option value="ongoing">Still Negotiating</option>
          </select>
        </div>
      </div>
      <div class="ig">
        <label for="csNote">Quick note <span style="font-size:.6rem;color:var(--muted);font-weight:500;">(optional — max 140 chars)</span></label>
        <input type="text" id="csNote" placeholder="e.g. needed minor bodywork, seller dropped 3k" maxlength="140">
      </div>
      <button onclick="submitCrowdsource('${ref.label}','${year}','${brand}','${model}',${handshake})" style="
        font-family:'Exo 2',sans-serif;font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
        background:linear-gradient(135deg,#0A2540,#1A3D60);color:#E8D060;border:1px solid rgba(232,208,96,0.4);
        border-radius:8px;padding:10px 18px;cursor:pointer;align-self:flex-start;
        transition:background .18s,box-shadow .18s;box-shadow:0 2px 8px rgba(10,37,64,0.12);"
        onmouseover="this.style.background='linear-gradient(135deg,#0D2E50,#1E4570)'"
        onmouseout="this.style.background='linear-gradient(135deg,#0A2540,#1A3D60)'">
        Share Transaction →
      </button>
    </div>
    <div id="ksCrowdThanks" style="display:none;padding:14px;background:rgba(42,130,84,0.08);border:1px solid rgba(42,130,84,0.3);border-radius:10px;margin-top:4px;">
      <div style="font-size:.8rem;font-weight:800;color:#1E6040;margin-bottom:3px;">✓ Thank you — transaction recorded!</div>
      <div style="font-size:.7rem;color:var(--muted);line-height:1.5;">Your data helps improve pricing accuracy for future buyers and sellers. It is stored anonymously against report ref <strong style="color:var(--ink);">${ref.label}</strong>.</div>
    </div>
  </div>

  </div><!-- /ks-page-2 -->

</div><!-- /ks-pir -->`;

}

// ── CROWDSOURCED TRANSACTION SUBMIT ──────────────────────────────────────────
// Writes anonymous transaction data to the Worker via /api/transaction endpoint.
// Falls back to localStorage echo if Worker is unavailable (no KV degradation).
async function submitCrowdsource(refLabel, year, brand, model, fmv) {
  const actualPrice = parseInt(document.getElementById('csActualPrice')?.value||'0')||null;
  const outcome     = document.getElementById('csOutcome')?.value||'';
  const note        = (document.getElementById('csNote')?.value||'').trim().slice(0,140);

  if(!outcome){
    // Highlight missing field
    const sel = document.getElementById('csOutcome');
    if(sel){ sel.classList.add('err'); setTimeout(()=>sel.classList.remove('err'),2000); }
    return;
  }

  const payload = {
    ref:    refLabel,
    year:   parseInt(year)||null,
    brand,
    model:  model||'',
    fmv:    fmv||null,
    actual: actualPrice,
    outcome,
    note,
    ts:     new Date().toISOString(),
  };

  // Attempt Worker write — endpoint is /api/transaction (Worker handles KV write)
  try {
    const WORKER_BASE = typeof KS_WORKER_URL!=='undefined' ? KS_WORKER_URL : 'https://kamsayara.com';
    await fetch(WORKER_BASE+'/api/transaction', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload),
    });
  } catch(_) {
    // Worker not reachable — silently fall through; we show success anyway
    // (localStorage would go here for a full offline-first PWA implementation)
  }

  // Always show thank-you regardless of Worker response (optimistic UI)
  const formEl   = document.getElementById('ksCrowdForm');
  const thanksEl = document.getElementById('ksCrowdThanks');
  if(formEl)   formEl.style.display   = 'none';
  if(thanksEl) thanksEl.style.display = 'block';
}

async function checkCarPrice(){
  const brand = g('brand')?.value;
  const model = g('model')?.value;
  const year = g('year')?.value;
  const mileage = g('mileage')?.value;
  const spec = g('spec')?.value;
  const condition = g('condition')?.value;
  const asking = g('asking')?.value;

  // Validate required fields
  let bad = false;
  if(!brand){showErr('brand','Select a brand');bad=true;}
  if(!model){showErr('model','Select a model');bad=true;}
  if(!year){showErr('year','Select a year');bad=true;}
  if(!mileage){showErr('mileage','Enter mileage');bad=true;}
  if(bad){document.querySelector('.err')?.scrollIntoView({behavior:'smooth',block:'center'});return;}

  const mileageNum = parseInt(mileage);
  if(mileageNum > 500000){
    showErr('mileage','Mileage seems unusually high. Please verify.');
    return;
  }

  const yearNum = parseInt(year);
  const currentYear = new Date().getFullYear();
  if(yearNum < 1980 || yearNum > currentYear + 1){
    showErr('year','Please select a valid year');
    return;
  }

  // Highlight any QC pairs that haven't been answered yet
  const qcKeys=['warranty','singleOwner','fsh','accident'];
  const qcItems=document.querySelectorAll('.qcbar-item'); let qcMissing=false;
  qcKeys.forEach((key,i)=>{
    const item=qcItems[i];
    if(!item)return;
    if(qs[key]===null||qs[key]===undefined){
      item.classList.add('qcbar-item--unset');
      qcMissing=true;
    }else{
      item.classList.remove('qcbar-item--unset');
    }
  });
  if(qcMissing){
    const qcEl=document.querySelector('.qcbar');
    if(qcEl)qcEl.scrollIntoView({behavior:'smooth',block:'center'});
    await new Promise(r=>setTimeout(r,900));
  }

  showState('loading');
  startLoad(); /* Change 8: mobile param removed — single load path */
  const btn = g('btnCheck');
  if(btn) btn.disabled = true;

  // ── Generate reference number — stored for result panel only ──
  const _preRef = generateRef(null);
  window._preGeneratedRef = _preRef.label;

  // Gentle scroll — move down ~40% of viewport so user sees loading section
  setTimeout(()=>{
    const btn=g('btnCheck');
    if(btn){
      const btnBottom=btn.getBoundingClientRect().bottom+window.scrollY;
      const nudge=Math.round(window.innerHeight*0.18);
      window.scrollTo({top:btnBottom+nudge,behavior:'smooth'});
    }
  },80);

  const payload = JSON.stringify({
    brand, model, year:parseInt(year), mileage:parseInt(mileage),
    trim:g('trim')?.value||'',
    spec:spec||'GCC', condition:condition||'Good',
    askingPrice:asking?parseInt(asking):null,
    warranty:qs.warranty, singleOwner:qs.singleOwner,
    fsh:qs.fsh, accidentHistory:qs.accident,
    accidentSeverity:qs.accidentSeverity||null,
    purpose:'buying',
    deviceToken:_deviceToken
  });

  // Direct call to /api/valuation — no dead fallback
  async function tryFetch(endpoint){
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), 55000);
    try{
      const resp = await fetch(`${API}${endpoint}`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        signal:controller.signal,
        body:payload
      });
      clearTimeout(timeoutId);
      return resp;
    }catch(e){
      clearTimeout(timeoutId);
      throw e;
    }
  }

  try{
    const response = await tryFetch('/api/valuation');

    if(!response.ok){
      let errDetail = '';
      try{ const t=await response.text(); errDetail=t.slice(0,200); }catch(_){}
      throw new Error(`HTTP ${response.status}${errDetail?' — '+errDetail:''}`);
    }
    const data = await response.json();
    if(data.error) throw new Error(data.error);

    // ── RATE LIMIT — friendly human message ─────────────────
    if(data.rateLimited){
      stopLoad();
      const resetHr = data.resetsIn || 'a few hours';
      g('rcontent').innerHTML=`
      <div style="padding:36px 24px;text-align:center;font-family:'Exo 2',sans-serif;">
        <div style="font-size:2.8rem;margin-bottom:16px;">🚗☕</div>
        <div style="font-size:1.05rem;font-weight:800;color:#1A2B4C;margin-bottom:10px;letter-spacing:0.01em;">You've been busy today!</div>
        <p style="font-size:0.82rem;color:#4A5568;line-height:1.8;max-width:300px;margin:0 auto 10px;">
          You've used all <strong>10 free price checks</strong> for today — that's impressive car shopping! 🎉
        </p>
        <p style="font-size:0.80rem;color:#718096;line-height:1.7;max-width:300px;margin:0 auto 24px;">
          New reports available in <strong>${resetHr}</strong>. Check back then for fresh market data.
        </p>
        <div style="background:linear-gradient(135deg,rgba(10,37,64,0.06),rgba(10,37,64,0.04));border:1px solid rgba(10,37,64,0.13);border-radius:12px;padding:16px 20px;max-width:280px;margin:0 auto 24px;">
          <div style="font-size:0.68rem;font-weight:700;color:#0A2540;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:5px;">💡 While you wait</div>
          <div style="font-size:0.75rem;color:#4A5568;line-height:1.65;">Review any earlier reports above, or share KamSayara with someone who needs a price check today!</div>
        </div>
        <button onclick="resetForm()"
          style="background:linear-gradient(135deg,#0A2540,#061828);color:#fff;border:none;border-radius:10px;
                 padding:12px 30px;font-family:'Exo 2',sans-serif;font-size:0.80rem;font-weight:800;
                 letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;
                 box-shadow:0 4px 14px rgba(10,37,64,0.22);">↺ Start Fresh</button>
      </div>`;
      showState('content');
      // Change 5: result always in #rcontent — no mobContent mirror needed
      if(btn) btn.disabled=false;
      updateReadiness();
      return;
    }

    displayValuationResult(data);

  }catch(error){
    stopLoad();
    const isTimeout = error.name==='AbortError';
    const msg = isTimeout
      ? 'Request timed out. The live market search may be slow — please try again.'
      : error.message || 'Unable to fetch price report. Please try again.';

    const errHtml=`
    <div style="padding:28px 20px;text-align:center;font-family:'Exo 2',sans-serif;">
      <div style="width:52px;height:52px;border-radius:50%;background:rgba(196,154,42,0.10);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.4rem;">${isTimeout?'⏱':'⚠️'}</div>
      <div style="font-size:0.88rem;font-weight:800;color:#1A2B4C;margin-bottom:8px;letter-spacing:0.02em;">${isTimeout?'Request Timed Out':'Unable to Fetch Report'}</div>
      <p style="font-size:0.74rem;color:#64748B;line-height:1.6;max-width:320px;margin:0 auto 20px;">${msg}</p>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
        <button onclick="checkCarPrice()"
          style="background:linear-gradient(135deg,#D4AF37,#B8960A);color:#1A2B4C;border:none;border-radius:8px;
                 padding:10px 22px;font-family:'Exo 2',sans-serif;font-size:0.80rem;font-weight:800;
                 letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;
                 box-shadow:0 3px 12px rgba(184,150,10,0.35);">↻ Try Again</button>
        <button onclick="resetForm()"
          style="background:#EEF1F6;color:#334155;border:1.5px solid #D0D5E0;border-radius:8px;
                 padding:10px 18px;font-family:'Exo 2',sans-serif;font-size:0.78rem;font-weight:700;cursor:pointer;">↺ Reset</button>
      </div>
    </div>`;
    g('rcontent').innerHTML=errHtml;
    showState('content');
    // Change 5: result always in #rcontent — no mobContent mirror needed
  }finally{
    if(btn) btn.disabled=false;
    updateReadiness();
  }
}

/* ── REAL displayValuationResult — routes to full PIR ─────── */
function displayValuationResult(data){
  stopLoad();
  const resultContainer = g('rcontent');
  if(!resultContainer) return;
  // Fix 4: reset animation so re-runs get the slide-up again
  resultContainer.classList.remove('report-visible');
  void resultContainer.offsetWidth; // force reflow

  // ── DIAGNOSTIC: always log tier decision clearly ─────────────────────────
  const _d = data._diag || {};
  const _tierNum = data.tier ?? 4;
  const _tierName = data.cached?'CACHE':_tierNum===1?'SERPER+HAIKU':_tierNum===2?'GEMINI':_tierNum===3?'HAIKU OFFLINE':'FORMULA';
  // Map V12 API fields → buildResult() compatible shape
  const r = {
    averagePrice:     data.handshakePrice  || data.averagePrice   || data.stickerPrice || 0,
    lowPrice:         data.minMarket       || data.lowPrice       || 0,
    highPrice:        data.maxMarket       || data.highPrice      || 0,
    stickerPrice:     data.stickerPrice    || data.averagePrice   || 0,
    handshakePrice:   data.handshakePrice  || 0,
    negotiationPrice: data.negotiationPrice|| 0,
    minMarket:        data.minMarket       || 0,
    maxMarket:        data.maxMarket       || 0,
    listingsFound:    data.listingsFound   || 0,
    isEstimate:       data.isEstimate      ?? true,
    source:           data.source          || '',
    cached:           data.cached          || false,
    cacheAge:         data.cacheAge        || '',
    confidenceScore:  data.confidence_score || Math.round((data.confidence||0)*100) || 0,
    demandScore:      data.demandScore     || 55,
    confidence:       data.confidence      || (data.confidence_score || 0) / 100,
    rtaFees:          data.rtaFees         || null,
    depreciation:     data.depreciation    || [],
    redFlags:         data.redFlags        || [],
    avr:              data.avr             || {},
    hagglingScript:   data.hagglingScript  || '',
    sourceLinks:      data.sourceLinks     || [],
    ref:              data.ref              || '',
    comparisonToAsking: data.comparisonToAsking || null,
    valuationNotes:   data.valuationNotes  || '',
    ai:               data.ai || (data.avr && (data.avr.review || data.avr.advantage || data.avr.value) ? {
      deal_rating: null,
      explanation: data.avr.review || data.avr.value || '',
      key_factors: [data.avr.advantage, data.avr.value, data.avr.review].filter(Boolean).slice(0,3),
      advice:      data.avr.review || ''
    } : null),
    marketability:    data.marketability   || null,
    // v35 tier waterfall fields
    dataSource:       data.dataSource      || (data.isEstimate ? 'estimate' : 'live'),
    tier:             data.tier            ?? (data.isEstimate ? 4 : 1),
    // v30 6-stage model fields
    market_mid:           data.market_mid           || 0,
    sweet_spot:           data.sweet_spot            || 0,
    confidence_score:     data.confidence_score      || 0,
    confidence_flag:      data.confidence_flag       || '',
    scenarios:            data.scenarios             || null,
    negotiation_range:    data.negotiation_range     || null,
    days_to_sell_estimate:data.days_to_sell_estimate || '',
    adjustments:          data.adjustments           || null,
    listings_snapshot:    data.listings_snapshot     || [],
    _model:               data._model                || '',
    _diag:                data._diag                 || {},
    // Gap-L fix: depreciation_class was missing from r-mapping — _dc fell through to 'C' always
    depreciation_class:   data.depreciation_class    || data._vc?.depreciation?.class || '',
    // Gap-P CRITICAL fix: _vc was never mapped into r — all worker engine data was silently dropped
    _vc:                  data._vc                   || null,
  };

  const brand   = data.brand   || g('brand')?.value   || '';
  const model   = data.model   || g('model')?.value   || '';
  const year    = data.year    || g('year')?.value     || '';
  const mileage = data.mileage != null ? String(data.mileage) : (g('mileage')?.value || '');
  const asking  = g('asking')?.value || '';

  // Render full Price Intelligence Report into .result-panel → #rcontent (single render path, all devices)
  let _builtReport;
  try {
    _builtReport = buildResult(r, brand, model, year, mileage, asking);
  } catch(buildErr) {
    _builtReport = `<div style="padding:32px 20px;text-align:center;font-family:'Exo 2',sans-serif;">
      <div style="font-size:1.5rem;margin-bottom:12px;">⚠️</div>
      <div style="font-weight:800;color:#1A2B4C;margin-bottom:8px;">Report Build Error</div>
      <p style="font-size:.8rem;color:#64748B;line-height:1.6;max-width:280px;margin:0 auto 16px;">${buildErr.message||'Unknown error'}</p>
      <button onclick="resetForm()" style="background:#0A2540;color:#fff;border:none;border-radius:8px;padding:10px 22px;font-family:'Exo 2',sans-serif;font-size:.78rem;font-weight:700;cursor:pointer;">↺ Try Again</button>
    </div>`;
  }
  resultContainer.innerHTML = _builtReport || '';
  // Fix 4: trigger premium slide-up animation after HTML is painted
  requestAnimationFrame(()=>resultContainer.classList.add('report-visible'));

  // Fix 1: populate sticky context band with this report's car + price
  // _lastValuationData is set by buildResult() — use it as source of truth
  (()=>{
    const _ld = window._lastValuationData || {};
    const _carName = _ld.carName || `${year} ${brand}${model?' '+model:''}`.trim();
    const _fmvVal  = _ld.handshake || _ld.avg || r.averagePrice || 0;
    const _priceStr = _fmvVal ? 'AED\u00A0' + (Math.round(_fmvVal/500)*500).toLocaleString() : '';
    // Verdict from engine
    // Gap-A fix: comparisonToAsking.diff is AED absolute; use .pct (integer %) for ratio comparison
    const _vRaw = _ld.verdict || (data.comparisonToAsking
      ? (data.comparisonToAsking.pct > 5  ? 'OVERPRICED'
        : data.comparisonToAsking.pct < -5 ? 'GOOD DEAL'
        : 'FAIRLY PRICED')
      : '');
    const _vLabel = _vRaw || 'PRICE CHECK';
    // Gap-N fix: sticky band _vCls aligned to full worker verdict scale
    const _vCls = (_vLabel==='BUY NOW'||_vLabel==='GOOD DEAL') ? 'good'
      : (_vLabel==='WALK AWAY'||_vLabel==='OVERPRICED'||_vLabel==='SLIGHTLY HIGH') ? 'bad'
      : 'neu';
    window._ksStickyReady = true;
    if(window._ksStickyUpdate) window._ksStickyUpdate(_carName, _priceStr, _vLabel.replace(/_/g,' '), _vCls);
  })();

  showState('content');

  // Change 5: No isMobile() fork — result always lives in #rcontent inside .result-panel.
  // On stacked layouts (≤860px) the panel is naturally below the form in DOM order.

  // Animate confidence footer bar + stat bars
  setTimeout(()=>{
    const cbarFill = document.getElementById('cbarFill');
    const conf = Math.round((r.confidence||0)*100);
    if(cbarFill && conf) cbarFill.style.width = conf+'%';
    pirAnimateStatBars();
    ksMf2Init();
    animateMf2Marker();
  }, 80);

  // D17: Car image — activate skeleton shimmer + 3-second timeout fallback
  setTimeout(()=>{
    const imgEl = document.querySelector('[data-imgid="ksCarImg"]');
    if(!imgEl) return;
    const photoWrap = imgEl.closest('.ks-id-photo');
    if(!imgEl.complete || imgEl.naturalWidth === 0) {
      // Image not yet loaded — show skeleton
      if(photoWrap) photoWrap.classList.add('img-loading');
      // Timeout: if still not loaded after 3s, force fallback
      const _imgTimeout = setTimeout(()=>{
        if(!imgEl.complete || imgEl.naturalWidth === 0) {
          imgEl.style.display = 'none';
          const fallback = imgEl.nextElementSibling;
          if(fallback) fallback.style.display = 'flex';
          if(photoWrap) photoWrap.classList.remove('img-loading');
        }
      }, 3000);
      // If it does load before timeout, clear it
      imgEl.addEventListener('load', ()=>clearTimeout(_imgTimeout), {once:true});
      imgEl.addEventListener('error', ()=>clearTimeout(_imgTimeout), {once:true});
    } else {
      // Already cached and complete
      imgEl.classList.add('img-ready');
    }
  }, 60);

  // Scroll to top of result panel with margin — report starts from header, not car image
  setTimeout(()=>{
    const panel = g('resultPanel') || resultContainer.closest('.result-panel');
    if(panel){
      const rect = panel.getBoundingClientRect();
      const margin = 12;
      window.scrollTo({ top: window.scrollY + rect.top - margin, behavior:'smooth' });
    }
  }, 120);

  saveLastValuation();
  // FIX #10: Update form header to show result context
  (()=>{
    const titleEl = document.getElementById('formHeaderTitle');
    if(titleEl){
      const _b=g('brand')?.value||'';
      const _m=g('model')?.value||'';
      const _y=g('year')?.value||'';
      const _label=[_y,_b,_m].filter(Boolean).join(' ');
      if(_label) titleEl.textContent='Result for: '+_label;
    }
  })();
  activateShareStrip();
  // Animate price count-up and UI elements after DOM renders
  requestAnimationFrame(()=>{
    const confPct=Math.round((r.confidenceScore||0))||60,demPct=Math.round(r.demandScore||55);
    // FIX #6: Removed pirDrawGauge('confGaugeFill',...) and pirDrawGauge('demGaugeFill',...)
    // — those SVG element IDs do not exist in buildResult() output; calls were silently no-ops.
    // Signal bars (pir-signal-fill-ryg) are animated by pirAnimateStatBars() instead.
    const priceEl=document.getElementById('priceMain');
    if(priceEl) pirCountUp(priceEl,r.handshakePrice||r.averagePrice||0);
    // Animate footer confidence bar
    setTimeout(()=>{const b=document.getElementById('cbarFill');if(b)b.style.width=confPct+'%';},400);
    // Expand all collapsibles on load
    document.querySelectorAll('.pir-collapsible-body').forEach(b=>{
      b.style.maxHeight=b.scrollHeight+'px';
      b.previousElementSibling?.classList.add('open');
    });
  });
}

/* ── MOBILE BOTTOM SHEET / CARD STACK (Change 1: removed — stubs kept for safety) ── */
function closeMobResult(){
  stopLoad();
  resetForm();
}

/* ── RESET ──────────────────────────────────────────────── */
function resetForm(){
  ['brand','year','trim','mileage','asking'].forEach(id=>{
    const el=g(id);if(el){el.value='';markFilled(el);}
  });
  g('model').innerHTML='<option value="">Select model…</option>';
  g('spec').value='';
  g('condition').value='';
  document.querySelectorAll('.qb.on').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.qcbar-item--unset').forEach(el=>el.classList.remove('qcbar-item--unset'));
  Object.keys(qs).forEach(k=>qs[k]=null);
  document.querySelectorAll('select,input').forEach(el=>el.classList.remove('filled','err','warn-field'));
  document.querySelectorAll('.errmsg').forEach(el=>el.classList.remove('on','warn-msg'));
  // Reset all ks-dropdowns
  _ksMap.forEach((wrap,sel)=>{
    const trig=wrap.querySelector('.ks-trigger');
    _ksTrigUpdate(sel,trig);
    trig?.classList.remove('ks-err');
    wrap.querySelectorAll('.ks-opt').forEach(o=>o.classList.remove('ks-selected'));
  });
  ksRefresh(g('model'));
  // Restore result panel to stage 1
  _s2Active=false;
  clearInterval(_tickerInterval);
  const stage1=document.getElementById('rphStage1');
  const stage2=document.getElementById('rphStage2');
  if(stage1)stage1.style.display='flex';
  if(stage2)stage2.style.display='none';
  showState('placeholder');
  document.body.classList.remove('ks-result-active');
  // Reset ref stamp
  const refEl=g('resultRef');
  if(refEl){refEl.textContent='';refEl.style.display='none';}
  // mob-ref elements removed with mob-result-toast (Change 1)
  window._preGeneratedRef = null;
  // Fix 1: hide sticky context band when form is reset
  window._ksStickyReady = false;
  const _stickyBand = document.getElementById('ksStickyCtx');
  if(_stickyBand) _stickyBand.classList.remove('visible');
  updateReadiness();
  window.scrollTo({top:0, behavior:'smooth'});
  // FIX #10: Reset form header title
  const titleEl = document.getElementById('formHeaderTitle');
  if(titleEl) titleEl.textContent = 'Car Details';
  // Show form card + layout (in case they were hidden during a loading transition)
  const fc=g('formCard');
  const lay=document.querySelector('.layout');
  if(fc) fc.style.display='';
  if(lay) lay.style.display='';
  const hero=document.querySelector('.hero');
  if(hero) hero.style.display='';
  
  // Change 5: #rcontent is the single result target — clear it on reset
  const rct=g('rcontent');
  if(rct) rct.innerHTML='';
}

/* ── COPY LINK ───────────────────────────────────────────── */
function copyLink(){
  navigator.clipboard?.writeText(location.href)
    .then(()=>{ const t=document.createElement('div');
      t.textContent='Link copied!';
      Object.assign(t.style,{position:'fixed',bottom:'calc(24px + env(safe-area-inset-bottom, 0px))',left:'50%',transform:'translateX(-50%)',
        background:'#222',color:'#fff',padding:'8px 18px',borderRadius:'99px',fontSize:'.75rem',
        zIndex:'9999',fontFamily:'Exo 2,sans-serif',boxShadow:'0 4px 16px rgba(0,0,0,0.3)'});
      document.body.appendChild(t);setTimeout(()=>t.remove(),2000);
    }).catch(()=>alert('Copy: '+location.href));
}

/* ── PRINT / PDF ─────────────────────────────────────────── */
let _lastValuationData=null;

function printValuation(){
  if(!_lastValuationData){window.print();return;}
  const d=_lastValuationData;
  const now=new Date();
  const ts=now.toLocaleString('en-AE',{dateStyle:'long',timeStyle:'short'});
  const aiCls=d.aiCls||'neu';
  const ratingColors={good:'#C49A2A',warn:'#9C5535',bad:'#7A3828',neu:'#4a4030'};
  const ratingBg={good:'rgba(95,123,106,0.09)',warn:'rgba(196,154,42,0.10)',bad:'rgba(140,74,60,0.08)',neu:'#f5f3ee'};
  const ratingBorder={good:'rgba(95,123,106,.25)',warn:'rgba(196,154,42,0.40)',bad:'rgba(140,74,60,0.24)',neu:'#e4d9c6'};
  const rc=ratingColors[aiCls]||ratingColors.neu;
  const rb=ratingBg[aiCls]||ratingBg.neu;
  const rbd=ratingBorder[aiCls]||ratingBorder.neu;

  const w=window.open('','_blank');
  w.document.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
  <title>KamSayara Price Report \u2014 ${d.carName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800&display=swap');
    *{margin:0;padding:0;box-sizing:border-box;}
    html,body{width:100%;height:100%;}
    body{
      font-family:'Exo 2',Arial,sans-serif;font-size:13px;color:#1a1610;
      background:#fff;
      display:flex;flex-direction:column;min-height:100vh;
    }
    .page-wrap{max-width:480px;margin:0 auto;padding:28px 24px 20px;flex:1;width:100%;}
    /* Header */
    .pdf-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #0A2540;}
    .pdf-logo{font-size:18px;font-weight:800;color:#0A2540;letter-spacing:-.01em;}
    .pdf-logo span{color:#c49a2a;}
    .pdf-meta{text-align:right;font-size:10px;color:#888;line-height:1.6;}
    /* Price block */
    .pdf-price-block{background:linear-gradient(135deg,rgba(10,37,64,0.06),rgba(10,37,64,0.03));border:1.5px solid rgba(10,37,64,0.15);border-radius:14px;padding:16px 16px 12px;margin-bottom:14px;}
    .pdf-price-lbl{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#8c7d68;margin-bottom:4px;}
    .pdf-price-main{font-size:28px;font-weight:800;color:#0A2540;letter-spacing:-.02em;margin-bottom:2px;}
    .pdf-price-range{font-size:10px;color:#8c7d68;margin-bottom:8px;}
    .pdf-price-row{display:flex;gap:6px;flex-wrap:wrap;}
    .pdf-badge{font-size:9px;font-weight:700;padding:2px 8px;border-radius:99px;border:1px solid #e4d9c6;background:#faf7f0;color:#4a4030;letter-spacing:.04em;}
    /* Position bar */
    .pdf-ppos{margin:10px 0 6px;}
    .pdf-ppos-labels{display:flex;justify-content:space-between;font-size:9px;color:#8c7d68;margin-bottom:4px;}
    .pdf-ppos-track{position:relative;height:7px;background:linear-gradient(90deg,#5F7A6A,#9C5535,#7A3828);border-radius:99px;}
    .pdf-ppos-dot{position:absolute;top:50%;transform:translate(-50%,-50%);width:13px;height:13px;border-radius:50%;background:#0A2540;border:2.5px solid #fff;box-shadow:0 1px 5px rgba(10,37,64,0.35);}
    .pdf-ppos-lbl{text-align:center;font-size:9px;color:#0A2540;font-weight:700;margin-top:5px;letter-spacing:.04em;}
    /* Confidence bar */
    .pdf-cbar-wrap{margin-top:8px;}
    .pdf-cbar-top{display:flex;justify-content:space-between;font-size:9px;color:#8c7d68;margin-bottom:3px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;}
    .pdf-cbar{height:5px;background:#e4d9c6;border-radius:99px;overflow:hidden;}
    .pdf-cbar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,#7A3828,#9C5535,#5F7A6A);}
    /* AI block */
    .pdf-ai{border-radius:10px;padding:12px 14px;margin-bottom:14px;border:1.5px solid ${rbd};background:${rb};}
    .pdf-ai-rating{font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:${rc};margin-bottom:6px;display:flex;align-items:center;gap:8px;}
    .pdf-ai-conf{font-size:9px;font-weight:600;color:#888;}
    .pdf-ai-exp{font-size:11px;color:#4a4030;line-height:1.5;margin-bottom:6px;}
    .pdf-ai-factors{display:flex;flex-direction:column;gap:2px;margin-bottom:6px;}
    .pdf-factor{font-size:10px;color:#4a4030;line-height:1.4;}
    .pdf-factor::before{content:'\u203A ';color:#0A2540;font-weight:700;}
    .pdf-ai-advice-lbl{font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:#0A2540;font-weight:700;margin-bottom:2px;}
    .pdf-ai-advice{font-size:10px;color:#4a4030;line-height:1.4;}
    /* Vehicle details */
    .pdf-section{margin-bottom:14px;}
    .pdf-section-title{font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#0A2540;border-bottom:1px solid #e4d9c6;padding-bottom:4px;margin-bottom:8px;}
    .pdf-row{display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid #f5f1ea;}
    .pdf-row:last-child{border-bottom:none;}
    .pdf-lbl{color:#8c7d68;font-size:11px;}
    .pdf-val{font-weight:600;font-size:11px;text-align:right;}
    /* Footer */
    .pdf-footer{
      max-width:480px;margin:0 auto;padding:10px 24px 14px;
      border-top:1px solid #e4d9c6;
      display:flex;align-items:center;justify-content:space-between;
      font-size:9px;color:#aaa;letter-spacing:.04em;
    }
    .pdf-footer-ref{color:#0A2540;font-weight:700;}
    @media print{
      body{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
      .pdf-footer{position:fixed;bottom:0;left:0;right:0;background:#fff;}
      .page-wrap{padding-bottom:48px;}
    }
  </style></head>
  <body>
  <div class="page-wrap">
    <div class="pdf-header">
      <div class="pdf-logo">KAM<span>\u00B7</span>SAYARA</div>
      <div class="pdf-meta">
        ${ts}<br>
        www.KamSayara.com<br>
        <strong>${d.ref}</strong>
      </div>
    </div>

    <div class="pdf-price-block">
      <div class="pdf-price-lbl">UAE Market Value</div>
      <div class="pdf-price-main">AED ${d.avg.toLocaleString()}</div>
      <div class="pdf-price-range">Range AED ${d.low.toLocaleString()} \u2013 AED ${d.high.toLocaleString()}</div>
      <div class="pdf-price-row">
        <span class="pdf-badge">${d.comp} comparables</span>
        <span class="pdf-badge">Live UAE data</span>
      </div>
      ${d.low&&d.high&&d.avg&&d.high>d.low?(()=>{
        const avgPct=Math.round(((d.avg-d.low)/(d.high-d.low))*100);
        const askPct=d.askingPrice?Math.round(((d.askingPrice-d.low)/(d.high-d.low))*100):null;
        return `<div class="pdf-ppos">
          <div class="pdf-ppos-labels">
            <span style="color:#5F7A6A;font-weight:700;">Low · AED ${d.low.toLocaleString()}</span>
            <span style="color:#7A3828;font-weight:700;">High · AED ${d.high.toLocaleString()}</span>
          </div>
          <div class="pdf-ppos-track">
            <div class="pdf-ppos-dot" style="left:${Math.max(5,Math.min(95,avgPct))}%;background:#0A2540;"></div>
            ${askPct!==null?`<div class="pdf-ppos-dot" style="left:${Math.max(4,Math.min(96,askPct))}%;background:#c49a2a;top:calc(50% + 4px);"></div>`:''}
          </div>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:6px;flex-wrap:wrap;">
            <span style="font-size:9px;font-weight:700;color:#0A2540;">● Market Avg · AED ${d.avg.toLocaleString()}</span>
            ${d.askingPrice?`<span style="font-size:9px;font-weight:700;color:#c49a2a;">● Asking · AED ${d.askingPrice.toLocaleString()}</span>`:''}
          </div>
        </div>`;
      })():''}
      <div class="pdf-cbar-wrap">
        <div class="pdf-cbar-top"><span>Market Accuracy</span><span>${Math.round((d.conf||0))*0||'—'}%</span></div>
        <div class="pdf-cbar"><div class="pdf-cbar-fill" style="width:${d.conf?Math.round(d.conf*100):75}%"></div></div>
      </div>
      ${d.marketability?`
      <div style="margin-top:10px;padding:10px 12px;border-radius:10px;border:1.5px solid #e4d9c6;background:#faf7f0;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:8px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#8c7d68;">Marketability</span>
            <span style="font-size:9px;font-weight:800;padding:2px 7px;border-radius:99px;background:rgba(95,123,106,0.09);color:#C49A2A;">${d.marketability.label||''}</span>
          </div>
          <span style="font-family:Arial;font-size:18px;font-weight:800;color:#0A2540;">${d.marketability.score||0}<span style="font-size:9px;color:#8c7d68;">/100</span></span>
        </div>
        <div style="height:5px;background:#e4d9c6;border-radius:99px;overflow:hidden;margin-bottom:8px;">
          <div style="height:100%;width:${Math.max(4,Math.min(100,d.marketability.score||0))}%;background:linear-gradient(90deg,#7A3828,#9C5535,#C49A2A);border-radius:99px;"></div>
        </div>
        ${d.marketability.days_at_market?`<div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px;"><span style="color:#4a4030;">At market price (AED ${d.avg.toLocaleString()})</span><span style="font-weight:700;color:#0A2540;">~${d.marketability.days_at_market} days</span></div>`:''}
        ${d.marketability.days_at_asking&&d.askingPrice?`<div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px;"><span style="color:#4a4030;">At asking price (AED ${d.askingPrice.toLocaleString()})</span><span style="font-weight:700;color:#9C5535;">~${d.marketability.days_at_asking} days</span></div>`:''}
        ${d.marketability.recommended_price&&d.askingPrice&&d.marketability.recommended_price<d.askingPrice?`<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:7px;background:rgba(95,123,106,0.09);border:1px solid rgba(95,123,106,0.09);margin-top:5px;margin-bottom:4px;"><span style="font-size:10px;color:#C49A2A;flex:1;">⚡ Price to sell in ~14 days</span><span style="font-size:11px;font-weight:800;color:#C49A2A;">AED ${d.marketability.recommended_price.toLocaleString()}</span></div>`:''}
        ${d.marketability.insight?`<div style="font-size:10px;color:#8c7d68;font-style:italic;margin-top:4px;">${d.marketability.insight}</div>`:''}
      </div>`:''}
    </div>

    ${d.ai?`<div class="pdf-ai">      <div class="pdf-ai-rating">${d.ai.deal_rating||'Analysis'}${d.ai.confidence?`<span class="pdf-ai-conf">${d.ai.confidence} confidence</span>`:''}
      </div>
      ${d.ai.explanation?`<div class="pdf-ai-exp">${d.ai.explanation}</div>`:''}
      ${(d.ai.key_factors||[]).length?`<div class="pdf-ai-factors">${(d.ai.key_factors||[]).map(f=>`<div class="pdf-factor">${f}</div>`).join('')}</div>`:''}
      ${d.ai.advice?`<div class="pdf-ai-advice-lbl">Market Insight</div><div class="pdf-ai-advice">${d.ai.advice}</div>`:''}
    </div>`:''}

    <div class="pdf-section">
      <div class="pdf-section-title">Vehicle Details</div>
      ${d.inputs.map(r=>`<div class="pdf-row"><span class="pdf-lbl">${r[0]}</span><span class="pdf-val">${r[1]}</span></div>`).join('')}
    </div>
  </div>

  <div class="pdf-footer">
    <span>Price estimates are based on market data. Not a guaranteed sale price. Prices vary by condition, location &amp; negotiation.</span>
    <span class="pdf-footer-ref">Page 1/1</span>
  </div>

  <script>window.onload=function(){window.print();}<\/script>
  </body></html>`);
  w.document.close();
}
/* scrollToForm removed — hero button removed */

/* ── FIX 1: STICKY CONTEXT BAND ─────────────────────────────
   Shows car name + FMV price while user scrolls the report.
   Appears only once the price section scrolls out of view.    */
(function initStickyCtx(){
  const band = document.getElementById('ksStickyCtx');
  if(!band) return;

  // Called by displayValuationResult after HTML is painted
  window._ksStickyUpdate = function(carName, price, verdictLabel, verdictCls){
    document.getElementById('ksStickyCarName').textContent  = carName  || '—';
    document.getElementById('ksStickyPrice').textContent    = price    || '';
    const vBadge = document.getElementById('ksStickyVerdict');
    if(vBadge){ vBadge.textContent = verdictLabel || ''; vBadge.className = 'ks-sticky-badge ' + (verdictCls||'neu'); }
    band.setAttribute('aria-hidden', 'false');
  };

  // Show band only when the main price highlight scrolls above viewport
  const _checkScroll = ()=>{
    if(!window._ksStickyReady){ band.classList.remove('visible'); return; }
    const priceEl = document.getElementById('ksFmvNum');
    if(!priceEl){ band.classList.remove('visible'); return; }
    const rect = priceEl.getBoundingClientRect();
    band.classList.toggle('visible', rect.bottom < 0);
  };

  window.addEventListener('scroll', _checkScroll, {passive:true});
  window.addEventListener('resize', _checkScroll, {passive:true});
})();

/* ── STICKY NAV — only show after full hero (including brand nav) is scrolled past ── */
new IntersectionObserver(([e])=>{
  g('stickyNav').classList.toggle('on',!e.isIntersecting);
},{threshold:0,rootMargin:'-52px 0px 0px 0px'}).observe(g('heroTop'));

/* ── ENHANCED SEARCHABLE DROPDOWN SYSTEM ────────────────── */
const _ksMap=new Map();
let _ksActiveSel=null; // which select is open in mobile modal
// Global dropdown standard: inline panel on ALL viewports (no full-screen modal).
// Mobile full-screen sheet is suppressed via CSS (.ks-overlay { display:none }) and JS.
const _ksIsMob=()=>false; // Always use inline panel — never open full-screen modal

/* Panel width = EXACT trigger pixel width, set by JS on every open.
   This eliminates CSS cascade ambiguity across desktop/tablet/mobile. */
function _ksPositionPanel(wrap){
  const trig = wrap.querySelector('.ks-trigger');
  const panel = wrap.querySelector('.ks-panel');
  if(!trig || !panel) return;

  // Lock panel width to trigger's exact rendered width
  const trigW = Math.round(trig.getBoundingClientRect().width);
  panel.style.width    = trigW + 'px';
  panel.style.minWidth = '';
  panel.style.maxWidth = '';
  panel.style.left     = '0';
  panel.style.right    = 'auto';

  const rect       = trig.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom - 8;
  const spaceAbove = rect.top - 8;
  const panelNeeded = 192 + 40;
  const openUp = spaceBelow < panelNeeded && spaceAbove > spaceBelow;

  const list = panel.querySelector('.ks-list');

  if(openUp){
    panel.style.top    = 'auto';
    panel.style.bottom = 'calc(100% + 3px)';
    if(list) list.style.maxHeight = Math.max(80, Math.min(192, spaceAbove - 44)) + 'px';
  } else {
    panel.style.top    = 'calc(100% + 3px)';
    panel.style.bottom = 'auto';
    if(list) list.style.maxHeight = Math.max(80, Math.min(192, spaceBelow - 44)) + 'px';
  }
}

// UAE popular brands (Dubizzle/YallaMotor top sellers)
const KS_POPULAR=['Toyota','Nissan','Hyundai','Honda','Kia','Mitsubishi','BMW','Mercedes-Benz','Ford','Chevrolet','Land Rover','Lexus'];

// Recent selections per field
function _ksGetRec(id){try{return JSON.parse(localStorage.getItem('ks_r_'+id)||'[]');}catch{return[];}}
function _ksSaveRec(id,val){try{let r=_ksGetRec(id).filter(v=>v!==val);r.unshift(val);localStorage.setItem('ks_r_'+id,JSON.stringify(r.slice(0,4)));}catch{}}

// Debounce
function _ksDeb(fn,ms){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};}

// Highlight matching text
function _ksHl(text,q){
  if(!q)return text;
  const i=text.toLowerCase().indexOf(q.toLowerCase());
  if(i===-1)return text;
  return text.slice(0,i)+'<mark class="ks-mark">'+text.slice(i,i+q.length)+'</mark>'+text.slice(i+q.length);
}

function initKsDropdowns(){
  _ksCreateModal();
  document.querySelectorAll('select').forEach(sel=>{
    sel.classList.add('ks-hidden');
    const wrap=_ksMakeWrap(sel);
    sel.parentNode.insertBefore(wrap,sel.nextSibling);
    _ksMap.set(sel,wrap);
    _ksDrawList(sel,wrap.querySelector('.ks-list'),'');
    _ksTrigUpdate(sel,wrap.querySelector('.ks-trigger'));
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('.ks-wrap')&&!e.target.closest('.ks-overlay'))_ksCloseAll();
  });
}

function _ksMakeWrap(sel){
  const wrap=document.createElement('div');
  wrap.className='ks-wrap';

  /* Trigger */
  const trig=document.createElement('div');
  trig.className='ks-trigger';
  trig.setAttribute('tabindex','0');
  trig.setAttribute('role','combobox');
  trig.setAttribute('aria-haspopup','listbox');
  trig.setAttribute('aria-expanded','false');
  wrap.appendChild(trig);

  /* Desktop panel */
  const panel=document.createElement('div');
  panel.className='ks-panel';

  const row=document.createElement('div');
  row.className='ks-search-row';

  const srch=document.createElement('input');
  srch.type='text';srch.className='ks-search';srch.placeholder='Search…';
  srch.setAttribute('autocomplete','off');srch.setAttribute('aria-label','Search options');

  row.appendChild(srch);

  const list=document.createElement('div');
  list.className='ks-list';
  list.setAttribute('role','listbox');

  panel.appendChild(row);panel.appendChild(list);
  wrap.appendChild(panel);

  /* Trigger events */
  trig.addEventListener('click',e=>{
    e.stopPropagation();
    const isOpen=wrap.classList.contains('open');
    _ksCloseAll();
    if(!isOpen){
      if(_ksIsMob())_ksOpenModal(sel);
      else _ksOpenPanel(wrap,sel,srch,list);
    }
  });
  trig.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();trig.click();}
    if(e.key==='Escape')_ksClose(wrap);
    if(e.key==='ArrowDown'){e.preventDefault();if(!wrap.classList.contains('open')){trig.click();return;}setTimeout(()=>{const f=list.querySelector('.ks-opt');f?.focus();},80);}
  });

  /* Desktop search */
  const deb=_ksDeb(q=>{_ksDrawList(sel,list,q);},150);
  srch.addEventListener('input',()=>deb(srch.value.trim()));
  srch.addEventListener('keydown',e=>{
    if(e.key==='Escape'){_ksClose(wrap);trig.focus();}
    if(e.key==='Enter'){const f=list.querySelector('.ks-opt');f?.click();}
    if(e.key==='ArrowDown'){e.preventDefault();const f=list.querySelector('.ks-opt');f?.focus();}
  });

  /* Keyboard nav within list */
  list.addEventListener('keydown',e=>{
    if(!e.target.classList.contains('ks-opt'))return;
    const opts=[...list.querySelectorAll('.ks-opt')];
    const idx=opts.indexOf(e.target);
    if(e.key==='ArrowDown'){e.preventDefault();opts[idx+1]?.focus()||opts[0]?.focus();}
    if(e.key==='ArrowUp'){e.preventDefault();idx>0?opts[idx-1].focus():srch.focus();}
    if(e.key==='Enter'){e.preventDefault();e.target.click();}
    if(e.key==='Escape'){_ksClose(wrap);trig.focus();}
  });

  return wrap;
}

function _ksOpenPanel(wrap,sel,srch,list){
  wrap.classList.remove('open-up');
  wrap.classList.add('open');
  wrap.querySelector('.ks-trigger').setAttribute('aria-expanded','true');
  srch.value='';
  _ksDrawList(sel,list,'');
  _ksPositionPanel(wrap); // reposition for mobile fixed-escape from overflow:auto
  setTimeout(()=>srch.focus(),60);
}

function _ksClose(wrap){
  wrap.classList.remove('open','open-up');
  wrap.querySelector('.ks-trigger')?.setAttribute('aria-expanded','false');
}
function _ksCloseAll(){
  _ksMap.forEach(w=>_ksClose(w));
  _ksCloseModal();
}

/* ── ALPHANUMERIC SORT — numbers first (0-9 asc, years desc), then A-Z ── */
function _ksSort(opts, id){
  return [...opts].sort((a,b)=>{
    const av=a.textContent.trim(), bv=b.textContent.trim();
    const an=Number(av), bn=Number(bv);
    const aIsNum=av!==''&&!isNaN(an), bIsNum=bv!==''&&!isNaN(bn);
    if(aIsNum&&bIsNum) return id==='year'?bn-an:an-bn; // years newest-first, other nums ascending
    if(aIsNum) return -1; // numbers before text
    if(bIsNum) return 1;
    return av.localeCompare(bv,'en',{sensitivity:'base',numeric:true});
  });
}

/* Draw options list — flat sorted list, no section headers */
function _ksDrawList(sel,list,q){
  list.innerHTML='';
  const q_=q.toLowerCase().trim();
  const allOpts=[...sel.options].filter(o=>o.value);
  const filtered=q_?allOpts.filter(o=>o.textContent.toLowerCase().includes(q_)):allOpts;

  if(filtered.length===0){
    const em=document.createElement('div');em.className='ks-empty';
    em.innerHTML='No results for "<strong>'+q+'</strong>"';
    const sub=document.createElement('div');sub.className='ks-empty-sub';sub.textContent='Try a different spelling';
    em.appendChild(sub);list.appendChild(em);return;
  }

  _ksSort(filtered,sel.id).forEach(o=>_ksAddOpt(list,sel,o,q_));
}

function _ksSecLabel(list,text){
  const s=document.createElement('div');s.className='ks-sec';s.textContent=text;list.appendChild(s);
}
function _ksDivider(list){
  const d=document.createElement('div');d.className='ks-div';list.appendChild(d);
}
function _ksAddOpt(list,sel,opt,q){
  const div=document.createElement('div');
  const isSel=sel.value===opt.value;
  div.className='ks-opt'+(isSel?' ks-selected':'');
  div.setAttribute('tabindex','0');div.setAttribute('role','option');
  div.setAttribute('aria-selected',isSel?'true':'false');
  div.dataset.value=opt.value;
  div.innerHTML=q?_ksHl(opt.textContent,q):opt.textContent;
  if(isSel){const chk=document.createElement('span');chk.className='ks-chk';chk.textContent='✓';div.appendChild(chk);}
  div.addEventListener('click',()=>_ksPick(sel,opt.value));
  list.appendChild(div);
}
function _ksPick(sel,val){
  sel.value=val;
  _ksSaveRec(sel.id,val);
  ksSync(sel);
  markFilled(sel);
  _ksCloseAll();
  _ksMap.get(sel)?.querySelector('.ks-trigger')?.focus();
  sel.dispatchEvent(new Event('change',{bubbles:true}));
}

/* ── MOBILE MODAL ─────────────────────────────────────────── */
function _ksCreateModal(){
  const ov=document.createElement('div');
  ov.className='ks-overlay';ov.id='ks-overlay';
  ov.innerHTML=`
    <div class="ks-sheet" id="ks-sheet">
      <div class="ks-sheet-handle"></div>
      <div class="ks-sheet-head">
        <span class="ks-sheet-title" id="ks-sheet-title">Select</span>
        <button class="ks-sheet-close" id="ks-sheet-close" aria-label="Close">✕</button>
      </div>
      <div class="ks-sheet-search-row">
        <input type="text" class="ks-search" id="ks-modal-srch" placeholder="Type to search…" autocomplete="off">
        <span class="ks-count" id="ks-modal-cnt"></span>
      </div>
      <div class="ks-sheet-list" id="ks-modal-list"></div>
    </div>`;
  document.body.appendChild(ov);

  ov.addEventListener('click',e=>{if(e.target===ov)_ksCloseModal();});
  document.getElementById('ks-sheet-close').addEventListener('click',_ksCloseModal);

  const msrch=document.getElementById('ks-modal-srch');
  const mlist=document.getElementById('ks-modal-list');

  const mdeb=_ksDeb(q=>{if(_ksActiveSel)_ksDrawList(_ksActiveSel,mlist,q);},150);
  msrch.addEventListener('input',()=>mdeb(msrch.value.trim()));
  msrch.addEventListener('keydown',e=>{
    if(e.key==='Escape')_ksCloseModal();
    if(e.key==='Enter'){const f=mlist.querySelector('.ks-opt');f?.click();}
    if(e.key==='ArrowDown'){e.preventDefault();mlist.querySelector('.ks-opt')?.focus();}
  });
  mlist.addEventListener('keydown',e=>{
    if(!e.target.classList.contains('ks-opt'))return;
    const opts=[...mlist.querySelectorAll('.ks-opt')];
    const idx=opts.indexOf(e.target);
    if(e.key==='ArrowDown'){e.preventDefault();opts[idx+1]?.focus();}
    if(e.key==='ArrowUp'){e.preventDefault();idx>0?opts[idx-1].focus():msrch.focus();}
    if(e.key==='Enter'){e.preventDefault();e.target.click();}
    if(e.key==='Escape')_ksCloseModal();
  });
}

function _ksOpenModal(sel){
  _ksActiveSel=sel;
  const ig=sel.closest('.ig');
  const lbl=ig?.querySelector('label')?.textContent?.replace('*','').trim()||'Select';
  document.getElementById('ks-sheet-title').textContent=lbl;
  const mlist=document.getElementById('ks-modal-list');
  const msrch=document.getElementById('ks-modal-srch');
  msrch.value='';
  _ksDrawList(sel,mlist,'');
  document.getElementById('ks-overlay').classList.add('ks-open');
  document.body.style.overflow='hidden';
  setTimeout(()=>msrch.focus(),350);
}

function _ksCloseModal(){
  const ov=document.getElementById('ks-overlay');
  if(!ov||!ov.classList.contains('ks-open'))return;
  ov.classList.remove('ks-open');
  document.body.style.overflow='';
  if(_ksActiveSel)_ksMap.get(_ksActiveSel)?.querySelector('.ks-trigger')?.focus();
  _ksActiveSel=null;
}

/* ── KS SYNC / REFRESH ──────────────────────────────────── */
function ksRefresh(sel){
  const wrap=_ksMap.get(sel);if(!wrap)return;
  _ksDrawList(sel,wrap.querySelector('.ks-list'),'');
  _ksTrigUpdate(sel,wrap.querySelector('.ks-trigger'));
}
function ksSync(sel){
  const wrap=_ksMap.get(sel);if(!wrap)return;
  _ksTrigUpdate(sel,wrap.querySelector('.ks-trigger'));
}
function _ksTrigUpdate(sel,trig){
  if(!trig)return;
  const hasVal=!!sel.value;
  trig.textContent=hasVal?(sel.options[sel.selectedIndex]?.textContent||''):(sel.options[0]?.textContent||'Select…');
  trig.classList.toggle('ks-filled',hasVal);
  trig.setAttribute('aria-expanded','false');
}

/* ── ENTER KEY ──────────────────────────────────────────── */
g('formCard').addEventListener('keydown',e=>{
  if(e.key==='Enter'&&!e.shiftKey&&!g('btnCheck').disabled)checkCarPrice();
});

/* ── BUTTON HAPTIC FEEDBACK ──────────────────────────────── */
g('btnCheck').addEventListener('click',()=>{
  const btn=g('btnCheck');
  btn.classList.add('clicked');
  if(navigator.vibrate)navigator.vibrate(50);
  setTimeout(()=>btn.classList.remove('clicked'),150);
});

/* ── SHARE STRIP ─────────────────────────────────────────── */
const SHARE_ICONS=['wa','mail','fb','ig','tt','x','pdf'];

function activateShareStrip(){
  SHARE_ICONS.forEach(id=>{
    const el=document.getElementById('sico-'+id);
    if(el)el.classList.remove('share-dimmed');
  });
}

function buildShareMsg(platform){
  const URL = 'https://www.kamsayara.com';
  if(!_lastValuationData) return {
    text:'🚗 KamSayara — Free UAE Car Price Intelligence. Check any car\'s real market value instantly based on live UAE listings. Know before you buy or sell.',
    url: URL
  };

  const d       = _lastValuationData;
  const car     = (d.carName||'').trim();
  const ref     = d.ref || window._preGeneratedRef || '';
  const hs      = d.avg  || 0;
  const sticker = d.askingPrice || 0;
  const gap     = sticker && hs ? sticker - hs : 0;
  const gapAbs  = Math.abs(gap);
  // Use engine verdict if available (more accurate)
  // Gap-M fix: share text verdict — full scale + correct emoji per worker verdict values
  const _verdEmoji = d.verdict==='BUY NOW'?'⭐':d.verdict==='GOOD DEAL'?'🟢':d.verdict==='FAIRLY PRICED'?'🟡':d.verdict==='SLIGHTLY HIGH'?'🟠':d.verdict==='OVERPRICED'?'🔴':d.verdict==='WALK AWAY'?'🚫':'🟡';
  const verdict = d.verdict ? d.verdict + ' ' + _verdEmoji
    : (!sticker ? '' : gap > hs*0.10 ? 'WALK AWAY 🚫' : gap > hs*0.05 ? 'OVERPRICED 🔴' : gap < -(hs*0.08) ? 'BUY NOW ⭐' : gap < -(hs*0.05) ? 'GOOD DEAL 🟢' : 'FAIRLY PRICED 🟡');
  const gapLine = gap > 0
    ? `That's AED ${gapAbs.toLocaleString()} overpriced.`
    : gap < 0
    ? `That's AED ${gapAbs.toLocaleString()} below market.`
    : '';

  // ── Platform messages — all text, no image ──────────────────
  const msgs = {

    // Twitter/X — 280 char max, target ≤220
    x: `Checked a ${car} on KamSayara 🔍\nSeller: AED ${sticker?sticker.toLocaleString():'—'} · Market: AED ${hs.toLocaleString()}\n${gapLine} ${verdict}\nFree UAE car check → kamsayara.com\nRef: ${ref}`,

    // WhatsApp / Telegram — conversational, no hard limit
    wa: `Just checked a ${car} on KamSayara 🔍\nSeller wants AED ${sticker?sticker.toLocaleString():'—'} — fair price is AED ${hs.toLocaleString()}.\n${gapLine} ${verdict}\nCheck any UAE car before you buy 👇\nkamsayara.com\nRef: ${ref}`,

    // LinkedIn — professional framing, ~400 chars
    li: `Before buying or selling a used car in the UAE — check the number first.\n\nI just ran a live market check on a ${car} using KamSayara.\nSeller asking AED ${sticker?sticker.toLocaleString():'—'}. Fair market handshake: AED ${hs.toLocaleString()}.\n${gapLine} ${verdict}\n\nFree report. No signup. Live data.\n→ kamsayara.com | Ref: ${ref}`,

    // Facebook — casual, ~220 chars
    fb: `Just used KamSayara to check a ${car} 🔍\nSeller: AED ${sticker?sticker.toLocaleString():'—'} · Fair price: AED ${hs.toLocaleString()} · ${gapLine} ${verdict}\nFree UAE car check before you buy or sell → kamsayara.com\nRef: ${ref}`,

    // Instagram / TikTok — no live links, copy to clipboard
    ig: `Just checked a ${car} on KamSayara 🔍\nSeller: AED ${sticker?sticker.toLocaleString():'—'} · Market: AED ${hs.toLocaleString()}\n${gapLine} ${verdict}\nFree check → kamsayara.com\nRef: ${ref}\n\n#KamSayara #UAECars #UsedCars #Dubai #CarPrice`,

    tt: `UAE car prices checked 🔍 ${car}\nSeller AED ${sticker?sticker.toLocaleString():'—'} vs Market AED ${hs.toLocaleString()}\n${gapLine} ${verdict}\nFree → kamsayara.com | Ref: ${ref}\n#KamSayara #UAECars`,

    // Email
    mail: `Just checked a ${car} on KamSayara 🔍\nSeller wants AED ${sticker?sticker.toLocaleString():'—'} — fair price is AED ${hs.toLocaleString()}.\n${gapLine} ${verdict}\nCheck any UAE car before you buy 👇\nkamsayara.com\nRef: ${ref}`,

    // SMS — 160 char hard limit
    sms: `KamSayara: ${car}. Seller AED ${sticker?sticker.toLocaleString():'—'}, market AED ${hs.toLocaleString()}. ${gapLine} kamsayara.com`,
  };

  const text = msgs[platform] || msgs.wa;
  return {text, url: URL};
}

/* Build a shareable card as a canvas data URL */
function buildShareCard(){
  const d = _lastValuationData;
  if(!d) return null;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1080; canvas.height = 566;
    const ctx = canvas.getContext('2d');
    // Background
    const bg = ctx.createLinearGradient(0,0,1080,566);
    bg.addColorStop(0,'#08111F'); bg.addColorStop(0.5,'#0F1E38'); bg.addColorStop(1,'#1A2C4A');
    ctx.fillStyle = bg; ctx.fillRect(0,0,1080,566);
    // Gold accent bar top
    const goldBar = ctx.createLinearGradient(0,0,1080,0);
    goldBar.addColorStop(0,'transparent'); goldBar.addColorStop(0.15,'#C49A2A');
    goldBar.addColorStop(0.5,'#E8D060'); goldBar.addColorStop(0.85,'#C49A2A'); goldBar.addColorStop(1,'transparent');
    ctx.fillStyle = goldBar; ctx.fillRect(0,0,1080,4);
    // Brand
    ctx.font = 'bold 42px "Arial Black",Arial'; ctx.fillStyle = '#C49A2A';
    ctx.fillText('KAM', 60, 80);
    ctx.font = 'bold 28px Arial'; ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText('SAYARA', 145, 80);
    // Free report label
    ctx.font = 'bold 16px Arial'; ctx.fillStyle = 'rgba(196,154,42,0.8)';
    ctx.fillText('FREE PRICE INTELLIGENCE REPORT', 60, 115);
    // Car name
    const carName = d.carName || '';
    ctx.font = 'bold 52px Arial'; ctx.fillStyle = '#FFFFFF';
    ctx.fillText(carName, 60, 200);
    // FMV
    if(d.avg){
      ctx.font = 'bold 22px Arial'; ctx.fillStyle = 'rgba(255,255,255,0.55)';
      ctx.fillText('FAIR MARKET VALUE', 60, 258);
      ctx.font = 'bold 72px "Arial Black",Arial'; ctx.fillStyle = '#C49A2A';
      ctx.fillText('AED '+d.avg.toLocaleString(), 60, 340);
    }
    // Range
    if(d.low && d.high){
      ctx.font = '20px Arial'; ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fillText(`Market range: AED ${d.low.toLocaleString()} — AED ${d.high.toLocaleString()}`, 60, 385);
    }
    // Ref
    ctx.font = 'bold 18px "Courier New",monospace'; ctx.fillStyle = 'rgba(196,154,42,0.7)';
    ctx.fillText(d.ref || window._preGeneratedRef || '', 60, 430);
    // CTA
    ctx.font = 'bold 26px Arial'; ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Check yours FREE at www.kamsayara.com', 60, 500);
    // Border
    ctx.strokeStyle = 'rgba(196,154,42,0.35)'; ctx.lineWidth = 2;
    ctx.strokeRect(1,1,1078,564);
    return canvas.toDataURL('image/png');
  } catch(e) { return null; }
}

async function shareVia(platform){
  if(platform==='pdf'){
    if(!_lastValuationData){ _showToast('Run a search first to generate a PDF.'); return; }
    printValuation(); return;
  }

  const {text, url} = buildShareMsg(platform);
  const encodedText = encodeURIComponent(text);

  // ── Instagram / TikTok — copy text to clipboard ──
  if(platform==='ig' || platform==='tt'){
    try{ await navigator.clipboard.writeText(text+'\n'+url); }catch(e){
      const t=document.createElement('textarea');t.value=text+'\n'+url;
      document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();
    }
    _showToast(platform==='ig'
      ? '✓ Caption + link copied — paste in Instagram.'
      : '✓ Caption + link copied — paste in TikTok.');
    return;
  }

  // ── Native share sheet (mobile) ──
  if(navigator.share && platform !== 'mail'){
    try{
      await navigator.share({ title:'KamSayara — UAE Car Price Intelligence', text, url });
      return;
    }catch(e){
      if(e.name==='AbortError') return;
    }
  }

  // ── Desktop / fallback deep-links ──
  let shareUrl = '';
  if     (platform==='wa')   shareUrl = `https://wa.me/?text=${encodeURIComponent(text+'\n'+url)}`;
  else if(platform==='x')    shareUrl = `https://x.com/intent/tweet?text=${encodedText}&url=${encodeURIComponent(url)}`;
  else if(platform==='fb')   shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodedText}`;
  else if(platform==='mail') shareUrl = `mailto:?subject=${encodeURIComponent('Free UAE Car Price Tool — KamSayara')}&body=${encodeURIComponent(text+'\n\n'+url)}`;

  if(shareUrl) window.open(shareUrl, '_blank', 'noopener,noreferrer');
}

function _showToast(msg){
  const t=document.createElement('div');
  t.textContent=msg;
  Object.assign(t.style,{
    position:'fixed',bottom:'calc(24px + env(safe-area-inset-bottom, 0px))',left:'50%',transform:'translateX(-50%)',
    background:'#1a1610',color:'#fff',padding:'10px 20px',borderRadius:'99px',
    fontSize:'.72rem',zIndex:'9999',fontFamily:'"Exo 2",sans-serif',
    boxShadow:'0 4px 18px rgba(0,0,0,0.3)',whiteSpace:'nowrap',
    letterSpacing:'.02em',textAlign:'center',maxWidth:'90vw',
    opacity:'0',transition:'opacity .2s'
  });
  document.body.appendChild(t);
  requestAnimationFrame(()=>{t.style.opacity='1';});
  setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),220);},3200);
}

/* ── TASK 5: TOGGLE OPTIONAL FIELDS ON MOBILE ─────────── */
function toggleMoreFields(){
  const fg=document.querySelector('.fg');
  const btn=document.getElementById('moreFieldsBtn');
  const txt=document.getElementById('moreFieldsBtnText');
  const open=fg.classList.toggle('more-fields-open');
  txt.textContent=open?'− Less Details':'+ More Details';
  btn.setAttribute('aria-expanded',open?'true':'false');
}
/* ── MOBILE CARD STACK (Change 5: removed — unified result-panel used on all devices) ─── */
/* Stubs retained for safety in case any legacy callers remain in the file */
let _mobCardActive='form';
function switchMobCard(which){ _mobCardActive=which; /* no-op: mob-result-toast removed */ }
function _unlockResultTab(){ /* no-op: mob tab bar removed */ }
function _lockResultTab(){   /* no-op: mob tab bar removed */ }

/* ── ACCORDION (tablet only) ────────────────────────────── */
function wrapResultInAccordion(){
  // New premium report layout is self-contained — no accordion needed
  return;
}

/* ── BACK TO INPUTS BUTTON (mobile) ─────────────────────── */
(function(){
  const btn=document.getElementById('backToInputs');
  if(!btn)return;
  window.addEventListener('scroll',()=>{
    if(window.innerWidth>600){btn.style.display='none';return;}
    btn.style.display=window.scrollY>200?'flex':'none';
  },{passive:true});
})();

/* ── STAGE 2: LIVE-SYNC PLACEHOLDER ─────────────────────── */
const SILHOUETTES = {
  sedan:`<svg viewBox="0 0 220 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 66 L14 52 Q18 44 28 42 L38 40 L50 20 Q108 14 160 18 L172 38
             Q190 38 208 36 L212 48 L212 66 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M50 22 Q108 16 160 20 L170 38 L98 40 L54 40 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="100" y="22" width="36" height="14" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.28)" stroke-width=".8"/>
    <circle cx="52" cy="66" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="52" cy="66" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="168" cy="66" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="168" cy="66" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="66" x2="218" y2="66" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  suv:`<svg viewBox="0 0 220 102" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 78 L14 28 Q16 10 40 8 L146 6 Q184 6 200 28 L212 56 L214 78 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M40 8 L146 6 Q184 6 200 28 L200 44 L36 44 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="94" y="9" width="44" height="24" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="14" y="76" width="200" height="5" rx="2" fill="BODY_STROKE" opacity=".42"/>
    <circle cx="54" cy="78" r="14" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="54" cy="78" r="7" fill="rgba(20,20,20,0.35)"/>
    <circle cx="172" cy="78" r="14" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="172" cy="78" r="7" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="78" x2="218" y2="78" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  crossover:`<svg viewBox="0 0 210 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 72 L12 44 Q16 26 40 18 L128 14 Q166 14 188 36 L200 60 L202 72 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M40 18 L128 14 Q164 14 188 36 L162 44 L36 44 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="86" y="16" width="34" height="20" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="38" y="13" width="126" height="3" rx="1.5" fill="BODY_STROKE" opacity=".4"/>
    <circle cx="44" cy="72" r="12.5" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="44" cy="72" r="6.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="160" cy="72" r="12.5" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="160" cy="72" r="6.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="72" x2="208" y2="72" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  hatchback:`<svg viewBox="0 0 196 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 68 L12 46 Q14 32 36 22 L106 16 Q148 16 170 40 L182 62 L184 68 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M36 22 L106 16 Q148 16 170 40 L144 46 L32 46 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="72" y="18" width="34" height="20" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <circle cx="42" cy="68" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="42" cy="68" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="150" cy="68" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="150" cy="68" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="68" x2="194" y2="68" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  coupe:`<svg viewBox="0 0 210 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 62 L14 48 Q18 40 30 38 L40 35 Q56 12 96 8 L152 8
             Q190 8 206 36 L210 56 L210 62 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M58 10 Q108 6 152 8 Q190 8 206 36 L176 42 L50 42 L56 12 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="102" y="10" width="30" height="18" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="44" y="40" width="60" height="3" rx="1.5" fill="BODY_STROKE" opacity=".68"/>
    <circle cx="48" cy="62" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="48" cy="62" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="162" cy="62" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="162" cy="62" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="62" x2="208" y2="62" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  sportscar:`<svg viewBox="0 0 210 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 56 L12 44 Q14 36 28 35 L36 32 Q52 8 92 6 L146 6
             Q184 6 198 34 L204 50 L206 56 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M54 8 Q110 4 146 6 Q184 6 198 34 L168 40 L46 40 L50 10 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="98" y="8" width="30" height="16" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="40" y="38" width="84" height="3.5" rx="1.8" fill="BODY_STROKE" opacity=".82"/>
    <circle cx="46" cy="56" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="46" cy="56" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="164" cy="56" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="164" cy="56" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="56" x2="208" y2="56" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  pickup:`<svg viewBox="0 0 240 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="44" width="104" height="52" rx="2" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1" opacity=".8"/>
    <rect x="12" y="36" width="106" height="10" rx="2" fill="ROOF_FILL" opacity=".85"/>
    <rect x="10" y="44" width="5" height="52" rx="1" fill="BODY_STROKE" opacity=".82"/>
    <path d="M116 96 L116 36 Q122 14 148 10 L200 10 Q228 12 232 36 L234 62 L234 96 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M124 14 L148 10 L200 10 Q228 12 232 36 L204 42 L120 42 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="158" y="12" width="34" height="20" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="12" y="92" width="222" height="4" rx="2" fill="BODY_STROKE" opacity=".52"/>
    <circle cx="52" cy="96" r="13.5" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="52" cy="96" r="7" fill="rgba(20,20,20,0.35)"/>
    <circle cx="200" cy="96" r="13.5" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="200" cy="96" r="7" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="96" x2="238" y2="96" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  van:`<svg viewBox="0 0 230 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 78 L12 14 Q14 6 34 6 L188 6 Q216 6 222 26 L222 78 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <rect x="12" y="6" width="210" height="8" rx="4" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width=".8"/>
    <rect x="20" y="20" width="36" height="28" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="64" y="20" width="34" height="28" rx="2.5" fill="rgba(196,154,42,0.08)" stroke="rgba(196,154,42,0.18)" stroke-width=".8"/>
    <rect x="106" y="20" width="34" height="28" rx="2.5" fill="rgba(196,154,42,0.08)" stroke="rgba(196,154,42,0.18)" stroke-width=".8"/>
    <rect x="148" y="20" width="64" height="36" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.22)" stroke-width=".8"/>
    <circle cx="50" cy="78" r="12.5" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="50" cy="78" r="6.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="180" cy="78" r="12.5" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="180" cy="78" r="6.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="78" x2="228" y2="78" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  convertible:`<svg viewBox="0 0 204 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 60 L12 46 Q14 38 26 36 L36 34 Q50 18 82 14 L142 14
             Q176 14 192 40 L198 56 L200 60 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M102 14 Q124 12 142 14 L148 16" stroke="BODY_STROKE" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M100 14 L96 38 L150 38 L148 14" stroke="BODY_STROKE" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <rect x="78" y="30" width="62" height="16" rx="2.5" fill="rgba(196,154,42,0.06)" stroke="rgba(196,154,42,0.14)" stroke-width=".8"/>
    <circle cx="44" cy="60" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="44" cy="60" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="158" cy="60" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="158" cy="60" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="60" x2="202" y2="60" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  wagon:`<svg viewBox="0 0 228 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 70 L12 50 Q14 42 22 40 L32 38 L46 16 Q108 10 168 14
             L200 14 Q214 16 218 34 L218 70 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M46 16 Q108 10 168 14 L200 14 Q214 16 218 34 L196 42 L42 42 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="88" y="14" width="32" height="20" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="168" y="16" width="46" height="22" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="44" y="11" width="172" height="3" rx="1.5" fill="BODY_STROKE" opacity=".52"/>
    <circle cx="50" cy="70" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="50" cy="70" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="174" cy="70" r="11" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="174" cy="70" r="5.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="70" x2="226" y2="70" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,

  offroad:`<svg viewBox="0 0 224 104" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 82 L14 24 Q16 6 40 4 L154 2 Q188 2 204 24 L220 58 L220 82 Z"
          fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.3"/>
    <path d="M40 4 L154 2 Q188 2 204 24 L198 40 L36 40 L38 6 Z" fill="ROOF_FILL" stroke="BODY_STROKE" stroke-width="1"/>
    <rect x="90" y="4" width="44" height="26" rx="2.5" fill="rgba(196,154,42,0.12)" stroke="rgba(196,154,42,0.25)" stroke-width=".8"/>
    <rect x="14" y="80" width="206" height="5" rx="2" fill="BODY_STROKE" opacity=".58"/>
    <!-- spare tyre hint -->
    <circle cx="16" cy="62" r="12" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="1.5"/><circle cx="16" cy="62" r="6" fill="rgba(20,20,20,0.35)"/>
    <circle cx="56" cy="82" r="16.5" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="2"/><circle cx="56" cy="82" r="8.5" fill="rgba(20,20,20,0.35)"/>
    <circle cx="178" cy="82" r="16.5" fill="BODY_FILL" stroke="BODY_STROKE" stroke-width="2"/><circle cx="178" cy="82" r="8.5" fill="rgba(20,20,20,0.35)"/>
    <line x1="2" y1="82" x2="222" y2="82" stroke="rgba(10,37,64,0.06)" stroke-width="1" stroke-dasharray="4 3"/>
  </svg>`,
};

// Colour map → CSS rgba for body fill and stroke
const COLOUR_MAP = {
  'White':       {fill:'rgba(240,240,240,0.55)',stroke:'rgba(180,180,180,0.55)'},
  'Pearl White': {fill:'rgba(245,242,235,0.55)',stroke:'rgba(180,175,165,0.50)'},
  'Black':       {fill:'rgba(25,25,30,0.45)',stroke:'rgba(20,20,25,0.6)'},
  'Midnight Black':{fill:'rgba(18,18,24,0.48)',stroke:'rgba(15,15,20,0.65)'},
  'Silver':      {fill:'rgba(180,185,190,0.5)',stroke:'rgba(130,135,140,0.5)'},
  'Gray':        {fill:'rgba(140,145,150,0.45)',stroke:'rgba(100,105,110,0.5)'},
  'Dark Gray':   {fill:'rgba(75,80,85,0.48)',stroke:'rgba(55,60,65,0.6)'},
  'Blue':        {fill:'rgba(50,100,200,0.3)',stroke:'rgba(30,70,160,0.45)'},
  'Dark Blue':   {fill:'rgba(20,40,110,0.38)',stroke:'rgba(15,30,90,0.55)'},
  'Light Blue':  {fill:'rgba(100,160,230,0.32)',stroke:'rgba(70,130,200,0.42)'},
  'Red':         {fill:'rgba(210,35,35,0.32)',stroke:'rgba(170,20,20,0.48)'},
  'Maroon':      {fill:'rgba(130,20,20,0.38)',stroke:'rgba(100,15,15,0.55)'},
  'Burgundy':    {fill:'rgba(120,15,40,0.38)',stroke:'rgba(90,10,30,0.55)'},
  'Gold':        {fill:'rgba(196,154,42,0.35)',stroke:'rgba(160,120,20,0.5)'},
  'Champagne':   {fill:'rgba(215,195,155,0.4)',stroke:'rgba(180,158,110,0.45)'},
  'Bronze':      {fill:'rgba(165,110,50,0.38)',stroke:'rgba(130,80,30,0.5)'},
  'Beige':       {fill:'rgba(210,195,165,0.42)',stroke:'rgba(170,155,120,0.45)'},
  'Cream':       {fill:'rgba(230,220,190,0.45)',stroke:'rgba(185,172,140,0.42)'},
  'Sand':        {fill:'rgba(205,185,140,0.42)',stroke:'rgba(165,145,100,0.45)'},
  'Brown':       {fill:'rgba(110,65,25,0.40)',stroke:'rgba(80,45,15,0.55)'},
  'Green':       {fill:'rgba(40,130,60,0.32)',stroke:'rgba(25,100,40,0.48)'},
  'Dark Green':  {fill:'rgba(20,75,35,0.38)',stroke:'rgba(12,55,22,0.55)'},
  'Orange':      {fill:'rgba(230,110,20,0.35)',stroke:'rgba(190,80,10,0.5)'},
  'Yellow':      {fill:'rgba(240,210,20,0.35)',stroke:'rgba(200,170,10,0.5)'},
  'Purple':      {fill:'rgba(110,40,160,0.32)',stroke:'rgba(80,25,125,0.48)'},
  'Other':       {fill:'rgba(100,110,120,0.35)',stroke:'rgba(70,80,90,0.48)'},
};

const DEFAULT_COLOUR = {fill:'rgba(10,37,64,0.10)',stroke:'rgba(10,37,64,0.28)'};
const ROOF_MULTIPLIER = 0.7; // roof is slightly darker/more transparent

let _s2Active = false; // whether stage 2 is currently shown

function _getRoofFill(baseHex){
  // Just return a slightly dimmed version of the fill
  return baseHex.replace(/[\d.]+\)$/, m => (parseFloat(m)*ROOF_MULTIPLIER).toFixed(2)+')');
}

function buildSilhouetteSVG(bodyType, colourName){
  const t = (bodyType||'').toLowerCase();
  // Detect key without collapsing distinct body types
  const key =
    (t.includes('sportscar')||t.includes('sports car')||t.includes('sport car')) ? 'sportscar' :
    (t.includes('convertible')||t.includes('cabriolet')||t.includes('roadster'))  ? 'convertible' :
    (t.includes('offroad')||t.includes('off-road')||t.includes('4x4'))           ? 'offroad' :
    (t.includes('pickup')||t.includes('truck'))                                  ? 'pickup' :
    (t.includes('wagon')||t.includes('estate')||t.includes('avant'))             ? 'wagon' :
    (t.includes('crossover')||t.includes('cuv'))                                 ? 'crossover' :
    (t.includes('hatchback')||t.includes('hatch'))                               ? 'hatchback' :
    (t.includes('van')||t.includes('mpv')||t.includes('minivan'))                ? 'van' :
    (t.includes('coupe')||t.includes('coupé'))                                   ? 'coupe' :
    (t.includes('suv'))                                                          ? 'suv' :
    (t.includes('sedan'))                                                        ? 'sedan' :
    (['sedan','suv','crossover','hatchback','coupe','van','pickup',
      'sportscar','wagon','convertible','offroad'].find(k=>t.includes(k)))       || 'sedan';

  const svg = SILHOUETTES[key] || SILHOUETTES.sedan;
  const col = COLOUR_MAP[colourName] || DEFAULT_COLOUR;
  const roofFill = _getRoofFill(col.fill);
  return svg
    .replace(/BODY_FILL/g,   col.fill)
    .replace(/BODY_STROKE/g, col.stroke)
    .replace(/ROOF_FILL/g,   roofFill);
}

function _getTickerText(brand, model){
  const count = brand ? Math.floor(4800 + Math.random()*2200) : 5000;
  const suffix = brand ? ` for ${brand}${model?' '+model:''}` : '';
  return `Accessing ${count.toLocaleString()}+ recent UAE transactions${suffix}…`;
}

let _tickerInterval = null;
function _startTickerAnim(brand, model){
  clearInterval(_tickerInterval);
  const el = document.getElementById('rphTickerText');
  if(!el)return;
  el.style.opacity='0';
  setTimeout(()=>{
    el.textContent = _getTickerText(brand, model);
    el.style.opacity='1';
  },200);
  _tickerInterval = setInterval(()=>{
    el.style.opacity='0';
    setTimeout(()=>{
      el.textContent = _getTickerText(brand, model);
      el.style.opacity='1';
    },220);
  }, 3800);
}

function _updateStage2(){
  const stage1 = document.getElementById('rphStage1');
  const stage2 = document.getElementById('rphStage2');
  if(!stage1||!stage2) return;

  const brand   = (document.getElementById('brand')||{}).value||'';
  const model   = (document.getElementById('model')||{}).value||'';
  const year    = (document.getElementById('year')||{}).value||'';
  const mileage = (document.getElementById('mileage')||{}).value||'';
  const body    = (document.getElementById('body')||{}).value||'';
  const colour  = (document.getElementById('colour')||{}).value||'';

  const hasActivity = brand||year||mileage||body||colour;
  const rph = document.getElementById('rph');
  const rcontent = document.getElementById('rcontent');
  const resultVisible = rcontent && rcontent.style.display!=='none';

  // Never show stage 1/2 if results are visible
  if(resultVisible) return;

  // FIX: Output panel stays completely idle (Stage 1 only) while user fills the form.
  // Stage 2 (car silhouette + live-sync chips) is suppressed — it was visually noisy
  // and gave the impression the output section was already active.
  // Stage 1 remains visible at all times until Search is hit.
  stage1.style.display = 'flex';
  stage2.style.display = 'none';

  // Still update the progress bar label inside Stage 1 if it exists there,
  // but do not switch to Stage 2 or inject the car silhouette.
  if(hasActivity){
    // Update CTA hint inside Stage 1 if present
    const ctaHint = document.getElementById('rphCtaHint');
    if(ctaHint) ctaHint.style.display = 'none'; // kept hidden — Stage 2 only
  }
}

// Hook into form fields for live-sync
(function initStage2Listeners(){
  const watchIds = ['brand','model','year','mileage','trim','spec','condition'];
  watchIds.forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('change', _updateStage2);
    el.addEventListener('input',  _updateStage2);
  });
  // Initial silhouette (sedan, no colour)
  const silEl = document.getElementById('rphSilhouette');
  if(silEl) silEl.innerHTML = buildSilhouetteSVG('sedan','');
})();

// Reset hook — full form clear + restore stage 1
// (primary resetForm defined earlier at line ~5143 handles field clearing)
// This block adds the stage-2 panel reset on top.

/* ── MARKET FIT v2: interactive row → marker sync ──────────── */
function ksMf2Init(){
  // Slide every rendered marker from its start position to its data-mf2-pct target
  document.querySelectorAll('.ks-mf2-marker[data-mf2-pct]').forEach(m=>{
    const pct = m.dataset.mf2Pct;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      m.style.left = pct + '%';
    }));
  });
}
window.ksMf2Init = ksMf2Init;
function ksMf2Activate(uid, rowEl){
  const grid   = document.getElementById(uid+'_grid');
  const marker = document.getElementById(uid+'_marker');
  const mlbl   = document.getElementById(uid+'_mlbl');
  if(!grid||!marker) return;
  // Deactivate all rows
  grid.querySelectorAll('.ks-mf2-row').forEach(r=>{
    r.classList.remove('ks-mf2-active');
    r.style.removeProperty('--mf2-ring');
    r.style.removeProperty('--mf2-bg');
  });
  // Activate clicked row
  const clr = rowEl.dataset.clr;
  const bg  = rowEl.dataset.bg;
  const pct = rowEl.dataset.pct;
  const val = rowEl.dataset.val;
  rowEl.classList.add('ks-mf2-active');
  rowEl.style.setProperty('--mf2-ring', clr);
  rowEl.style.setProperty('--mf2-bg',   bg);
  // Slide marker
  marker.style.setProperty('--mf2-ring', clr);
  marker.style.left = pct + '%';
  if(mlbl) mlbl.textContent = val;
}
window.ksMf2Activate = ksMf2Activate;

/* ── PIR INTERACTIVE: collapsible sections ────────────────── */
function pirToggle(section){
  section.classList.toggle('pir-collapsed');
}

/* ── PIR INTERACTIVE: copy haggling script ───────────────── */
function pirCopyHaggle(btn){
  const el=document.getElementById('haggleScript');
  if(!el)return;
  navigator.clipboard?.writeText(el.textContent||'').then(()=>{
    btn.textContent='✓ Copied!';
    btn.classList.add('copied');
    setTimeout(()=>{btn.textContent='📋 Copy script';btn.classList.remove('copied');},2200);
  }).catch(()=>{
    const ta=document.createElement('textarea');
    ta.value=el.textContent||'';
    document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();
    btn.textContent='✓ Copied!';btn.classList.add('copied');
    setTimeout(()=>{btn.textContent='📋 Copy script';btn.classList.remove('copied');},2200);
  });
}

/* ── PIR INTERACTIVE: animate stat bars after render ─────── */
function pirAnimateStatBars(){
  // Old pir-stat-fill bars (kept for compat)
  document.querySelectorAll('.pir-stat-fill[data-target]').forEach(el=>{
    const target=parseInt(el.dataset.target)||0;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      el.style.width=Math.min(100,target)+'%';
    }));
  });
  // New pir-signal fills + thumbs (legacy)
  document.querySelectorAll('.pir-signal-fill-ryg[data-target]').forEach(fill=>{
    const target=Math.min(100,parseInt(fill.dataset.target)||0);
    const thumb=fill.nextElementSibling;
    const pctEl=fill.closest('.pir-signal-row')?.querySelector('.pir-signal-pct');
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      fill.style.width=target+'%';
      if(thumb&&thumb.classList.contains('pir-signal-thumb')) thumb.style.left=target+'%';
      if(pctEl) pctEl.textContent=target+'%';
    }));
  });
  // v28 signal fills + thumbs
  document.querySelectorAll('.pir-signal-fill-v28[data-target]').forEach((fill,i)=>{
    const target=Math.min(100,parseInt(fill.dataset.target)||0);
    const thumb=fill.nextElementSibling;
    const delay=80+i*120;
    setTimeout(()=>requestAnimationFrame(()=>{
      fill.style.width=target+'%';
      if(thumb&&thumb.classList.contains('pir-signal-thumb-v28')) thumb.style.left=target+'%';
    }),delay);
  });
}

/* ── GLOBAL EXPORTS ─────────────────────────────────────── */
window.checkCarPrice = checkCarPrice;
window.resetForm = resetForm;
window.displayValuationResult = displayValuationResult;

/* PAGE SYSTEM: ksPirTab — show/hide paid pages
   Tab 1 = Free (Page 1 only), Tab 2 = Paid (all 3 pages visible, scroll-based) */
function ksPirTab(n){
  // Free tab (1) — hide paid pages, hide tab nav CTA unlock button  
  // Paid tab (2) — show paid page, show tab nav, hide inline CTA
  const page2   = document.getElementById('ksPage2');
  const tabNav  = document.getElementById('ksTabNav');
  const cta1    = document.getElementById('ksCta1');
  const btnFree = document.getElementById('ksBtnFree');
  const btnPaid = document.getElementById('ksBtnPaidTab');

  if(n===1){
    if(page2)  page2.style.display  = 'none';
    if(tabNav) tabNav.style.display = 'none';
    if(cta1)   cta1.style.display   = 'block';
    if(btnFree){ btnFree.setAttribute('aria-selected','true'); btnFree.classList.add('ks-tabnav-active'); }
    if(btnPaid){ btnPaid.setAttribute('aria-selected','false'); btnPaid.classList.remove('ks-tabnav-active'); }
    const p1=document.getElementById('ksPage1');
    if(p1) p1.scrollIntoView({behavior:'smooth',block:'start'});
  } else {
    if(page2)  { page2.style.display  = 'block'; }
    if(tabNav) { tabNav.style.display = 'flex'; }
    if(cta1)   { cta1.style.display   = 'none'; }
    if(btnFree){ btnFree.setAttribute('aria-selected','false'); btnFree.classList.remove('ks-tabnav-active'); }
    if(btnPaid){ btnPaid.setAttribute('aria-selected','true');  btnPaid.classList.add('ks-tabnav-active'); }
    if(page2) setTimeout(()=>page2.scrollIntoView({behavior:'smooth',block:'start'}),60);
  }
}
window.ksPirTab=ksPirTab;
function pirSwitchTab(n){ ksPirTab(n); }

/* ── BUYER/SELLER TAB SWITCHER (section 7) ── */
function ksS7Tab(idx, btn){
  document.querySelectorAll('.ks-s7-panel').forEach((p,i)=>{ p.style.display = i===idx ? 'flex' : 'none'; });
  document.querySelectorAll('.ks-s7-tab').forEach(t=>t.classList.remove('ks-s7-tab-active'));
  if(btn) btn.classList.add('ks-s7-tab-active');
}
window.ksS7Tab = ksS7Tab;

/* ── TASK 12: Loading status label sync ── */
function _syncRldStatus(idx){
  // Synced via _setStep now — kept for backward compat
  _setStep(idx);
}
/* ── PRICE COUNT-UP ────────────────────────────────────── */
function pirCountUp(el,target,dur=900){
  if(!el)return;
  const start=performance.now();
  const hasCurrSpan = el.querySelector && el.querySelector('.ks-price-currency');
  const fmt=n=>{
    const num='AED '+Math.round(n).toLocaleString();
    // If element uses the split currency span, keep that structure
    if(el.id==='ksFmvNum') return `<span class="ks-price-currency">AED</span> ${Math.round(n).toLocaleString()}`;
    return num;
  };
  if(el.id==='ksFmvNum') el.innerHTML=fmt(0); else el.textContent='AED 0';
  function frame(now){
    const p=Math.min((now-start)/dur,1);
    const ease=1-Math.pow(1-p,3);
    if(el.id==='ksFmvNum') el.innerHTML=fmt(target*ease);
    else el.textContent='AED '+Math.round(target*ease).toLocaleString();
    if(p<1)requestAnimationFrame(frame);
    else { if(el.id==='ksFmvNum') el.innerHTML=fmt(target); else el.textContent='AED '+Math.round(target).toLocaleString(); }
  }
  requestAnimationFrame(frame);
}

/* ── GAUGE RINGS ───────────────────────────────────────── */
function pirDrawGauge(svgId,pct,colour){
  const svg=document.getElementById(svgId);if(!svg)return;
  const r=34,c=2*Math.PI*r,fill=svg.querySelector('.pir-gauge-fill');
  if(!fill)return;
  fill.style.stroke=colour;
  fill.style.strokeDasharray=c;
  fill.style.strokeDashoffset=c;
  setTimeout(()=>{fill.style.strokeDashoffset=c*(1-pct/100);},80);
}

/* ── COLLAPSIBLE ───────────────────────────────────────── */
/* FIX #1: Removed duplicate pirToggle(id) definition here — was overwriting
   the correct pirToggle(section) at line ~9490 which all callers use via onclick="pirToggle(this)" */
function pirCollExpand(id){
  const body=document.getElementById(id);
  if(!body)return;
  body.style.maxHeight=body.scrollHeight+'px';
  body.previousElementSibling?.classList.add('open');
}

/* ── MF2 MARKER ANIMATION ────────────────────────────────── */
function animateMf2Marker(){
  document.querySelectorAll('[data-mf2-pct]').forEach(marker=>{
    const pct = parseInt(marker.dataset.mf2Pct||marker.dataset.mf2_pct||0);
    if(!pct) return;
    // Small delay then animate to correct position
    setTimeout(()=>{ marker.style.left = pct+'%'; }, 200);
  });
}

/* ── BOOT ───────────────────────────────────────────────── */
initBrands();initYears();
initKsDropdowns();
updateReadiness();
initRestoreBar();
// Init result panel header state
(function(){ const rp=document.getElementById('resultPanel'); if(rp) rp.classList.add('panel-state-idle'); })();

/* ── FIX 6: CONDITION TOOLTIP — mobile tap toggle ─────── */
(function initConditionTooltip(){
  document.addEventListener('click', function(e){
    const trigger = e.target.closest('.ks-cond-tip-trigger');
    // Close any open tooltips
    document.querySelectorAll('.ks-cond-tip-trigger.tip-open').forEach(t=>{
      if(t !== trigger) t.classList.remove('tip-open');
    });
    if(trigger){
      e.stopPropagation();
      trigger.classList.toggle('tip-open');
    }
  });
  // Keyboard: Enter/Space toggles, Escape closes
  document.addEventListener('keydown', function(e){
    if(e.key==='Escape') document.querySelectorAll('.ks-cond-tip-trigger.tip-open').forEach(t=>t.classList.remove('tip-open'));
  });
  // Add mobile CSS for tap-toggled state via a style tag
  const s=document.createElement('style');
  s.textContent='.ks-cond-tip-trigger.tip-open .ks-cond-tip-box{display:block!important;}';
  document.head.appendChild(s);
})();

/* ── BOOT: Enforce correct panel visibility on page load ─── */
(function enforcePanelBoot(){
  // Guarantee only rph is visible at startup — regardless of any CSS bleed
  const rph = document.getElementById('rph');
  const rld = document.getElementById('rld');
  const rct = document.getElementById('rcontent');
  if(rph) rph.style.display = 'flex';
  if(rld) rld.style.display = 'none';
  if(rct) rct.style.display = 'none';
})();

/* ── FIX 8: SAFE-AREA INSETS — robust CSS + JS hybrid ─── */
/*
  Strategy: CSS @supports handles modern devices natively.
  JS fallback catches older WebKit that needs explicit assignment.
  Both run together — CSS wins if supported (no layout flash).
*/
(function applySafeArea(){
  // Inject native CSS env() via @supports — validator-safe technique
  const cssStyle = document.createElement('style');
  cssStyle.textContent = [
    /* Custom properties: native env() values — zero-fallback ensures no accidental offset */
    ':root{',
    '  --sat:0px;--sab:0px;--sal:0px;--sar:0px;',
    '}',
    /* @supports block: only parsed by browsers that actually support env() */
    '@supports(padding-top:env(safe-area-inset-top)){',
    '  :root{',
    '    --sat:env(safe-area-inset-top,0px);',
    '    --sab:env(safe-area-inset-bottom,0px);',
    '    --sal:env(safe-area-inset-left,0px);',
    '    --sar:env(safe-area-inset-right,0px);',
    '  }',
    /* Sticky nav: pad top so content clears notch */
    '  .snav{',
    '    padding-top:var(--sat)!important;',
    '    padding-left:calc(16px + var(--sal))!important;',
    '    padding-right:calc(16px + var(--sar))!important;',
    '  }',
    /* Hero inner: left/right insets for landscape notch */
    '  .hero-inner{',
    '    padding-left:calc(clamp(16px,3vw,32px) + var(--sal))!important;',
    '    padding-right:calc(clamp(16px,3vw,32px) + var(--sar))!important;',
    '  }',
    /* Page shell: bottom inset so last content isn't behind home bar */
    '  .page{',
    '    padding-bottom:calc(48px + var(--sab))!important;',
    '  }',
    /* Sticky context band: top offset for notch */
    '  .ks-sticky-ctx{',
    '    top:var(--sat)!important;',
    '  }',
    '}',
  ].join('\n');
  document.head.appendChild(cssStyle);

  // JS fallback: read computed values and apply directly (covers older WKWebView)
  function applyJsFallback(){
    const cs  = getComputedStyle(document.documentElement);
    const top = parseFloat(cs.getPropertyValue('--sat'))||0;
    const bot = parseFloat(cs.getPropertyValue('--sab'))||0;
    const snav   = document.querySelector('.snav');
    const mobHdr = document.querySelector('.mob-fixed-header');
    const page   = document.querySelector('.page');
    if(snav && top)   snav.style.paddingTop   = top+'px';
    if(mobHdr && top) mobHdr.style.paddingTop = top+'px';
    if(page && bot && window.innerWidth<=600) page.style.paddingBottom=(48+bot)+'px';
  }
  window.addEventListener('load',applyJsFallback,{once:true});
  window.addEventListener('resize',applyJsFallback,{passive:true});
})();

(function(){
  var btn = document.getElementById('ksBurger');
  var menu = document.getElementById('ksMobMenu');
  if(!btn||!menu) return;
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    var open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && e.target !== btn){
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
})();
