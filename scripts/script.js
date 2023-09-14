/*
Name: spiritFinder
Input: Someone's name
Output: A "Spirit Number"
Description: Does math involving a name to give a "Spirit Number"
             which can later be used to find a Spirit Animal.
*/
function spiritFinder(name){
    spiritNumber = (name.length * name.charCodeAt(0)) % 5;

    return spiritNumber;
}

$( document ).ready(function() {

    $("#submit").click(function(){
        let name = $('#name').val()

        let animal = spiritFinder(name);
        alert(animal);
    });

});