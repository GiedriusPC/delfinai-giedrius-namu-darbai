/* masyvai basic + */

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

/* 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.*/

console.log(`---masyvai-basic---1`);

let array = [...Array(30)].map(a => random(5, 25))
console.log(`Masyvas: ` + array);


/* 2. Naudodamiesi 1 uždavinio masyvu: */
/* a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10; */

console.log(`---masyvai-basic-2a---`);

console.log(array.filter(a => a > 10));


/* b. Raskite didžiausią masyvo reikšmę ir jos indeksą; */

console.log(`---masyvai-basic-2b---`);

console.log(`Masyvas: ` + array + `\nDidžiausia reikšmė:${Math.max(...array)}\n indeksas:${array.indexOf(Math.max(...array))}`);


/* c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą; */

console.log(`---masyvai-basic-2c---`);

console.log(`Suma: ` + array.filter(a => a % 2 === 0).reduce((a,b) => a + b));


/* d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas; */

console.log(`---masyvai-basic-2d---`);

let minus = array.map((a, i) => a - i)
console.log(minus);


/* e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39; */

console.log(`---masyvai-basic-2e---`);

let minus2 = minus.concat([...Array(10)].map(a => random(5, 25)))
console.log(minus2);


/* f. Iš masyvo elementų sukurkite du naujus masyvus. 
Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę); */ 

console.log(`---masyvai-basic-2f---`);

let poriniai = minus2.filter((a, i) => i % 2 === 0)
let neporiniai = minus2.filter((a, i) => !(i % 2 === 0))
console.log(`Poriniai: ` + poriniai);
console.log(`Neporiniai: ` + neporiniai);

/* g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15; */

console.log(`---masyvai-basic-2g---`);

console.log(minus.filter((a, i) => i % 2 === 0).map(a => a > 15 ? 0 : a));


/* h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10; */

console.log(`---masyvai-basic-2h---`);

console.log(minus.findIndex(a => a > 10));


/* 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. 
Suskaičiuokite kiek yra kiekvienos raidės. */

console.log(`---masyvai-basic-3---`);

const letters = ['A', 'B', 'C', 'D'];
	
	let arr = [...Array(200)].map(_ => letters[rand(0, 3)]);
	console.log(arr);
	
	let countA = 0;
	let countB = 0;
	let countC = 0;
	let countD = 0;
	
	for (let letter of arr) {
	    if (letter === 'A') {
	        countA += 1;
	    };
	    if (letter === 'B') {
	        countB += 1;
	    };
	    if (letter === 'C') {
	        countC += 1;
	    };
	    if (letter === 'D') {
	        countD += 1;
	    }
	};
	
	console.log(`A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`);

/* 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. 
Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote. */

console.log(`---masyvai-basic-4---`);

let arr1 = [...Array(200)].map(_ => letters[rand(0, 3)]);
let arr2 = [...Array(200)].map(_ => letters[rand(0, 3)]);
let arr3 = [...Array(200)].map(_ => letters[rand(0, 3)]);
	
	
	let blend = [];
	for (let i = 0; i < arr1.length; i++) {
	    blend.push(arr1[i] + arr2[i] + arr3[i])
	};
	
	console.log(blend);
	
	const unComb = {};
	
	for (let value of blend) {
	    if (unComb[value]) {
	        unComb[value]++
	    } else {unComb[value] = 1}
	};
	console.log(unComb);
	

/* 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis). */

console.log(`---masyvai-basic-5---`);

const array1 = [];
	while (array1.length < 100) {
	  const number = rand(100, 999);
	  if (array1.indexOf(number) === -1) {
	    array1.push(number);
	  }
	}
	const array2 = [];
	while (array2.length < 100) {
	  const number = rand(100, 999);
	  if (array2.indexOf(number) === -1) {
	    array2.push(number);
	  }
	}
	console.log(array1);
	console.log(array2);

/* 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve. */

console.log(`---masyvai-basic-6---`);

let numbers = [];
	for (let i = 0; i < array1.length; i++) {
	    if (!array2.includes(array1[i])) {
	        numbers.push(array1[i])
	    }
	};
	
	console.log(numbers);
	
/* 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose. */

/* 8. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo. */

/* 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: 
Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
Trečias, pirmo ir antro suma. 
Ketvirtas- antro ir trečio suma. 
Penktas trečio ir ketvirto suma ir t.t. */





/* masyvai */

/* 1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai); */

/* 2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą; */

/* 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą; */

/* 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio; */

/* 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra; */

/* 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes; */

/* 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30; */

/* 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. 
Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus); */

/* 9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, 
kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais; */

/* 10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: 
['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']; */

/* 11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę; */

/* 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' 
ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20; */

/* 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau; */

/* 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, 
kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999; */

/* 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio; */

/* 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom 
( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500); */

/* 17. Patikrinti ar ką nors laimėjote. 
Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų. */

/* 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: 
['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai; */





/* Javasript tarpinio žinių patikrinimo testas #1 */

/* Duotas toks vardų masyvas:
const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė']; */

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];


/* 1. Sukurkite masyvą cats iš 10 elementų, kurių reikšmės atsitiktiniai skaičiai nuo 2 iki 12;
Sukurkite masyvą owners iš 10 elementų, kurių reikšmės atsitiktiniai vardai iš masyvo girls. 
Vardai gali kartotis. Masyvus atspausdinkite su console.log(); */

console.log(`---test1---1---`);

const cats = [...Array(10)].map(_ => rand(2, 12));
const owners = [...Array(10)].map(_ => girls[rand(0, 8)])
	
console.log(cats, owners);

/* 2. Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo narių sumą). 
Sumuokite tik tas katinukų reikšmes, kurios be liekanos dalijasi iš 3. Rezultatą atspausdinkite su console.log(); */

console.log(`---test1---2---`);

console.log(cats.length);
console.log(cats);
console.log(cats.filter(n => !(n % 3)));


/* 3. Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o pridėkite papildomai, o neužrašykite ant mergaitės!) pridėkite vardą 'Nausėda'. 
Masyvas po pridėjimo turi turėti 11 elementų; */

console.log(`---test1---3---`);

owners.unshift('Nausėda');
console.log(owners);


/* 4. Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas, sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats), 
naudodami masyvus cats ir owners pagal taisyklę: 
pirmai mergaitei iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats masyvo, 
antrai - antras ir t.t. Atkreipkite dėmesį, kad pirma mergaitė owners masyve yra ne pirmas elementas su indeksu 0 (pirmas yra 'Nausėda'), o antrasis su indeksu 1. 
Pirmas katinukų skaičius cats masyve yra standartiškai su indeksu 0. Masyvą atspausdinkite su console.log(); */

console.log(`---test1---4---`);

let catOwners = [];
	for (let i = 0; i < owners.length; i++) {
	    catOwners.push(`${owners[i]} has ${cats[i]} cats}`)
	}

console.log(catOwners);

/* 5. Suraskite vieną (tik vieną) vardą owners masyve, kuris kartojasi (nesvarbu kiek kartų) ir jį atspausdinkite su console.log(). */

console.log(`---test1---5---`);

for (let name of owners) {
    for (let i = 0; i < owners.length; i++) {
       if (name === owners[i + 1]) {
           console.log(name);
           break;
       }
       break;
    }
}

