
window.addEventListener("load", function(){


  /**
   * Uitleg van deze opdrachten:
   * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
   * Je mag me bij elke opdracht om hulp vragen
   * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
   */

  /**
   * Opdracht 1: primitives
   * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
   *
   * 5 variabelen met daarin een string
   * 5 variabelen met daarin een number
   * 5 variabelen met daarin een boolean
   *
   * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
   * van Media Development producten (apps, sites, etc.)
   * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
   */

    var  name = "assignon";
    var origin = "togo";
    var surname = "yanick";
    var school = "Media college";
    var formation = "Media developer";
    alert(name);

    var age = 21;
    var originPopulation = 6000000;
    var netherland_population= 13000000;
    var worldPopulation= 6000000000000;
    var dayOfMonth = 365;


  /**
   * Opdracht 2: Arrays
   * Bedenk 3 arrays en vul ze met primitives
   * console.log de lengte van de arrays
   *
   * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
   */

   var primitives = new Array();
   primitives.push('name', 'origin', 'surname', 'school', 'formation');
   console.log(primitives.lenght);

  /**
   * Opdracht 3: Arrays push
   * Maak een lege array aan
   * push er een string in
   */

   var emptyArray = new Array();
   emptyArray.push("formation");
   console.log(emptyArray);

  /**
   * Opdracht 4: Array splice
   * Maak een array aan en vul hem met namen
   * Gooi de naam op de 1e plek weg
   * Gooi de naam op de 3e plek weg
   */

   /*var names = new Array("yanick","asky","kyle","serges","assignon");
   names.shift();
   var namesToString = names.toString();
   var namesArr = namesToString.split(",");
   str_replace(nameArr, nameArr[2], "");*/

  /**
   * Opdracht 5: Objects
   * Maak van 10 objecten uit je dagelijkse leven een object
   *
   * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
   */

   var object = {

      name : "yanick",
      surname : "asky",
      age : 20,
      street : "louwesweg",
      roomNumber : 110,
      mobileMerk : "Black berry",
      computerMerk : "Lenovo",
      mouseMerk : "rapoo",
      liveAlone : "yes",
      brother : "Arnold"


   }

   console.log(object.name);


  /**
   * Opdracht 6: Functions
   * Bedenk 4 functies die handig zouden kunnen zijn
   * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
   * console.log( value * multiplier)
   */

   function addition(a,b)
   {

      console.log(a+b);

   }

   addition(2,9);

   function division(a,b)
   {

      console.log(a/b);

   }

   division(2,9);


   function min(a,b)
   {

      console.log(a-b);

   }

   min(2,9);


   function multiply(a,b)
   {

      console.log(a*b);

   }

   multiply(2,9);

  /**
   * Opdracht 7: Function & objects
   * Maak een functie die een firstName en lastName verwacht als parameter
   * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
   * roep deze functie aan en console.log() de waarde
   */

  /**
   * Opdracht 8: Functions, objects
   * Maak een object genaamd 'student'
   * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'

   */

  /*  var student = function showName(myName)
    {

        console.log(myName);

    }*/


  /**
   * Opdracht 9: Functions, objects
   * Maak een object genaamd 'student'
   * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
   */


  /*  var student2 = {

         function showName(){}

    }*/

  /**
   * Opdracht 10: Arrays & for loops
   * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
   * Schrijf een for loop om alle namen in de Array te laten zien
   */

   var students =["yanick","shaif","stijn","coen","koen","tommy","amin","wesly","quinten","karahan"];

   for (var i = 0; i < students.length; i++) {

       var studentArr = students[i];
       console.log(studentArr);

   }





/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

 console.log((Math.random()*5)+0);
 console.log((Math.random()*10)+1);
 console.log((Math.random()*40)+30);
 console.log((Math.random()*100)+(-100));

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */

/*console.log('De naam van een gebruiker sla ik op in een:', { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',{ array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',{ array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',{ array : false, object : false, primitive : false });

console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',{ array : false, object : false, primitive : false });*/

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

 let organisation = "Microsoft";
 let residence = "USA";
 let director = "Bill Gate";
 let co_director = "unkwon";



/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
/*console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');*/

console.log("Je gebruikt de keyword let als je een variabele specifiek in een block scope wil gebruiken");
console.log("Je gebruikt de keyword const als je wil dat je type van je gedeclareerde variabele niet verandert.")

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */

 var me = {

    naam: "Yanick",
    leeftijd: 21,
    lengt: 1.50,

    family : new Array()


 }
 me.family.push("papa","maman","broer","zus");

 alert(me.naam);
 alert(me.family[0]);

 })
