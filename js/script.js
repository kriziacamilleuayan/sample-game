var currentValue = 20;
var gold = 0;
var newgold;
var house_rndm;
var cave_random;
var goldmine_random;
var casino_random;
var class_caller;
var tab;
var map = ["cave", "house", "goldmine", "casino"];

var clicked = $.cookie('clicked');

$(document).ready(function() {

    $('#reset, #reset2, #reset3').click(function(){
    	currentValue = 20;
    	gold = 0;
    	$('#attempts').text(currentValue);
    	$('#gold').text(gold);
      $('#log, #log-gained, #log-losses').html('');
    });

    $('#cave').click(function(){
      var now = new Date(Date.now());
      var date_now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      
      currentValue--;
      cave_random = 5;
      newgold = gold + cave_random;
      gold = newgold;
      $("#ninja").animate({left: '200px'});
      $('#attempts').text(currentValue);
      $('#gold').text(newgold).removeClass().addClass("gained");
      $('#log, #log-gained').append('<p class="log-cave gained">Ninja looted a ' + map[0] + ' at ' + date_now + ' and gained ' + cave_random + ' golds.</p>');

    });

    $('#house').click(function(){
        var now = new Date(Date.now());
        var date_now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  			var prob = Math.floor(Math.random()*(10-1+1)+1);
        
        if (prob <= 8){
            class_caller = "gained";
            tab = "#log-gained";
            house_random = 10;
            $("#gold").removeClass().addClass('gained');
        }
        else{
            class_caller = "got"; //class and string in <p> if ninja got 0
            tab = "#log-zero";
            house_random = 0;
            $("#gold").removeClass().addClass('black');
        }

        currentValue--;
  			newgold = gold + house_random;
  			gold = newgold;
        $("#ninja").animate({left: '500px'});
  			$('#attempts').text(currentValue);
  			$('#gold').text(newgold);
        $('<p class="' + class_caller + '">Ninja looted a ' + map[1] + ' at ' + date_now + ' and ' + class_caller + ' ' + house_random + ' golds.</p>').appendTo('#log, ' + tab + '').addClass(''+ class_caller +'');
    });

    $('#goldmine').click(function(){
        var now = new Date(Date.now());
        var date_now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        var prob = Math.floor(Math.random()*(10-1+1)+1);

        if(prob <= 8){
          class_caller = "gained";
          tab = "#log-gained";
          goldmine_random = Math.floor(Math.random()*(25-1+1)+1); //(max-min+1)+min
          $("#gold").removeClass().addClass('gained');
        }
        else{
          class_caller = "got";
          tab = "#log-zero";
          goldmine_random = 0;
          $("#gold").removeClass().addClass('black');
        }

  			currentValue--;
  			newgold = gold + goldmine_random;
  			gold = newgold;
        $("#ninja").animate({left: '750px'});
  			$('#attempts').text(currentValue);
  			$('#gold').text(newgold);
        $('<p class="' + class_caller + '">Ninja looted a ' + map[2] + ' at ' + date_now + ' and ' + class_caller + ' ' + goldmine_random + ' golds.</p>').appendTo('#log, ' + tab + '').addClass(''+ class_caller +'');

  			// $('#log, #log-gained').append('<p class="log-goldmine gained">You looted a ' + map[2] + ' at ' + date_now + ' and gained ' + goldmine_random + ' golds.</p>');
  			
    });

    $('#casino').click(function(){
        var now = new Date(Date.now());
        var date_now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        var prob = Math.floor(Math.random()*(10-1+1)+1);

        if(prob <= 5){
          class_caller = "gained";
          tab = "#log-gained";
          casino_random = Math.floor(Math.random()*(50-40+1)+40); //(max-min+1)+min
          $("#gold").removeClass().addClass('gained');
        }
        else{
          class_caller = "losses";
          tab = "#log-losses";
          casino_random = Math.floor(Math.random()*(-40+50+1)-50); //(max-min+1)+min
          $("#gold").removeClass().addClass('losses');
        }

  			currentValue--;
  			newgold = gold + casino_random;
  			gold = newgold;
        $("#ninja").animate({left: '1050px'});
  			$('#attempts').text(currentValue);
  			$('#gold').text(newgold);
        $('<p class="' + class_caller + '">Ninja looted a ' + map[3] + ' at ' + date_now + ' and ' + class_caller + ' ' + casino_random + ' golds.</p>').appendTo('#log, ' + tab + '').addClass(''+ class_caller +'');
    });


    $('#house, #cave, #goldmine, #casino').click(function() {
      if (currentValue <= 0) {
        if (gold >= 250) {
          $('#modal-you-won').modal('show');
          $('#stat').html('<p>Gold: <b>' + gold + '</b></p>');
        }
        else{
          $('#modal-no-more-tries').modal('show');
          $('#stat').html('<p>Gold: <b>' + gold + '</b></p>');
        }
      }
      else{
        //somethingss
      }
    });
 


  // $('#btn-log-house').click(function(){
  // 		$(".log-casino, .log-casino2, .log-goldmine, .log-cave").hide();
  // 		$(".log-house").show();
  // })
  // $('#btn-log-cave').click(function(){
  // 		$(".log-casino, .log-casino2, .log-goldmine, .log-house").hide();
  // 		$(".log-cave").show();
  // })
  // $('#btn-log-casino').click(function(){
  // 		$(".log-house, .log-goldmine, .log-cave").hide();
  // 		$(".log-casino, .log-casino2").show();
  // })
  // $('#btn-log-goldmine').click(function(){
  // 		$(".log-casino, .log-casino2, .log-house, .log-cave").hide();
  // 		$(".log-goldmine").show();
  // })
  // $('#btn-log-all').click(function(){
  // 		$(".log-casino, .log-casino2, .log-goldmine, .log-cave, .log-house").show();
  // })

});