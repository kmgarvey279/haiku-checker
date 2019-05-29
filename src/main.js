import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import { HaikuCreator } from './../src/haikucreator.js';


$().ready(function(){
  $("form#createHaiku").submit(function(event){
    event.preventDefault();
    var inputtedLine1 = document.getElementById("line1").value;
    var inputtedLine2 = document.getElementById("line2").value;
    var inputtedLine3 = document.getElementById("line3").value;

    var newHaiku = new HaikuCreator(inputtedLine1, inputtedLine2, inputtedLine3);
    var result = newHaiku.checkHaiku();

    $(".haikuResult").show();

    $("#result1").text(inputtedLine1);
    $("#result2").text(inputtedLine2);
    $("#result3").text(inputtedLine3);

    $("#result").text(result);
  })

});
