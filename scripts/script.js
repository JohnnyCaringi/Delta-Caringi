$( document ).ready(function() {

    $("#submit").click(function(){
        let name = $('#name').val()
        /*
        Takes the length, first letter, and last letter of a name for
        a unique enough value. Then we modulus it by 5 so this number
        determines which of the 5 animals you are
        */
        let animal = (name.length * name.charCodeAt(0) * name.charCodeAt(name.length-1)) % 5;
        alert(animal);
    });

});