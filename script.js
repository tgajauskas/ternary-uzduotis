// 1. 

var manoVardas = 'Tomas'; 

var vardoIlgis = manoVardas.length < 5 ? 'Short Name' : 'Long Name';
console.log(vardoIlgis);

// 2. 

var clientAge = 28; 
var legalAge = 18;

var arGaliVairuoti = clientAge >= legalAge ? 'Can Drive' : "Can't drive";
console.log(arGaliVairuoti);

// 3. 

var clientAge2 = -1; 

var arGaliVairuoti2 = clientAge2 < 0 || clientAge2 > 120 ? 'Invalid Age' : clientAge2 >= legalAge ? 'Can Drive' : "Can't drive";
console.log(arGaliVairuoti2); // legalAge kintamasis yra antroje uzduotyje, imu si var is tenais

// 4.

var phone = 'iPhone'; 

var arNaudojaIphone = phone === 'iPhone' ? true : false;
console.log(arNaudojaIphone);