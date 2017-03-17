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

   var primives = array(name, origin, surname, school, formation);
   console.log(primitives.lenght);

  /**
   * Opdracht 3: Arrays push
   * Maak een lege array aan
   * push er een string in
   */

   var emptyArray = new array();
   emptyArray.push("formation");

  /**
   * Opdracht 4: Array splice
   * Maak een array aan en vul hem met namen
   * Gooi de naam op de 1e plek weg
   * Gooi de naam op de 3e plek weg
   */

   var names = array("yanick","asky","kyle","serges","assignon");
   names.shift();
   var namesToString = names.toString();
   var namesArr = namesToString.split(",");
   str_replace(nameArr, nameArr[2], "");

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

   function division(a,b)
   {

      console.log(a/b);

   }


   function min(a,b)
   {

      console.log(a-b);

   }


   function multiply(a,b)
   {

      console.log(a*b);

   }

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

    var student : function showName(myName)
    {

        console.log(myName);

    }


  /**
   * Opdracht 9: Functions, objects
   * Maak een object genaamd 'student'
   * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
   */


    var student2 = {

         function showName(){}

    }

  /**
   * Opdracht 10: Arrays & for loops
   * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
   * Schrijf een for loop om alle namen in de Array te laten zien
   */

   var students = array("yanick","shaif","stijn","coen","koen","tommy","amin","wesly","quinten","karahan");

   for (var i = 0; i < student.length; i++) {

       var studentArr = students[i];
       console.log(studentArr);

   }



}
