var currentValue = 20;
var gold = 0;
var total_gain = 0;
var total_loss = 0;
var text = '{"map1":"cave","map2":"house","map3":"goldmine","map4":"casino"}';
var obj = JSON.parse(text);

$(document).ready(function() {

    $('#reset, #reset2, #reset3').click(function(){
    	currentValue = 20;
    	gold = 0;
    	$('#attempts').text(currentValue);
    	$('#gold').text(gold);
      $('#log, #log-gained, #log-losses').html('');
      $('#total-gains, #total-loss').text('0');
      $("#ninja").animate({left: '0%'});
    });


    $('#cave').click(function(){
      var now = new Date(Date.now());
      var date_now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      
      currentValue--;
      cave_random = 5;
      newgold = gold + cave_random;
      gold = newgold;


      var arr = [];
      arr.push(total_gain);
      arr = jQuery.map( arr, function( n ) {
        return total_gain =  n + cave_random;
      });
      $("#total-gains").text(arr);
      $('#loot-cave').modal('show');
      $("#ninja").animate({left: '20%'}); //animation of ninja
      $('#attempts').text(currentValue); //show # of attempts left
      $('#gold').text(newgold).removeClass().addClass("gained"); //add class on gold
      $('#log, #log-gained').append('<p class="log-cave gained">Ninja looted a ' + obj.map1 + ' at ' + date_now + ' and gained ' + cave_random + ' golds.</p>'); //write on log
      $(".log, .log-losses, .log-gained").animate({ scrollTop: $(document).height() }, "slow"); //scroll always on bottom
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

        var arr = [];
        arr.push(total_gain);
        arr = jQuery.map( arr, function( n ) {
          return total_gain =  n + house_random;
        });
        $("#total-gains").text(arr);
        $('#loot-house').modal('show');
        $("#ninja").animate({left: '40%'});
  			$('#attempts').text(currentValue);
  			$('#gold').text(newgold);
        $('<p class="' + class_caller + '">Ninja looted a ' + obj.map2 + ' at ' + date_now + ' and ' + class_caller + ' ' + house_random + ' golds.</p>').appendTo('#log, ' + tab + '').addClass(''+ class_caller +'');
        $(".log, .log-losses, .log-gained").animate({ scrollTop: $(document).height() }, "slow");
        
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

        var arr = [];
        arr.push(total_gain);
        arr = jQuery.map( arr, function( n ) {
          return total_gain =  n + goldmine_random;
        });
        $("#total-gains").text(arr);
        $('#loot-goldmine').modal('show');
        $("#ninja").animate({left: '65%'});
  			$('#attempts').text(currentValue);
  			$('#gold').text(newgold);
        $('<p class="' + class_caller + '">Ninja looted a ' + obj.map3 + ' at ' + date_now + ' and ' + class_caller + ' ' + goldmine_random + ' golds.</p>').appendTo('#log, ' + tab + '').addClass(''+ class_caller +'');
        $(".log, .log-losses, .log-gained").animate({ scrollTop: $(document).height() }, "slow");
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
          var arr = [];
          arr.push(total_gain);
          arr = jQuery.map( arr, function( n ) {
            return total_gain =  n + casino_random;
          });
          $("#total-gains").text(arr);
        }
        else{
          class_caller = "losses";
          tab = "#log-losses";
          casino_random = Math.floor(Math.random()*(-40+50-1)-50); //(max-min+1)+min
          $("#gold").removeClass().addClass('losses');
          var arr = [];
          arr.push(total_loss);
          arr = jQuery.map( arr, function( n ) {
            return total_loss =  n + casino_random;
          });
          $("#total-loss").text(arr);
        }

  			currentValue--;
  			newgold = gold + casino_random;
  			gold = newgold;
        $('#loot-casino').modal('show');
        $("#ninja").animate({left: '80%'});
  			$('#attempts').text(currentValue);
  			$('#gold').text(newgold);
        $('<p class="' + class_caller + '">Ninja looted a ' + obj.map4 + ' at ' + date_now + ' and ' + class_caller + ' ' + casino_random + ' golds.</p>').appendTo('#log, ' + tab + '').addClass(''+ class_caller +'');
        $(".log, .log-losses, .log-gained").animate({ scrollTop: $(document).height() }, "slow");
    });


    $('#house, #cave, #goldmine, #casino').click(function() {
      if (currentValue <= 0) {
        if (gold >= 250) {
          $('#modal-you-won').modal('show');
        }
        else{
          $('#modal-no-more-tries').modal('show');
        }
          $('.stat').html('<p>Gold: <b>' + gold + '</b></p>');
          $('.total-gain-stat').html('<p>Total golds gained: <b>' + total_gain + '</b></p>');
          $('.total-loss-stat').html('<p>Total golds lost: <b>' + total_loss + '</b></p>');
      }
      else{
        //somethingss
      }
    });

});

