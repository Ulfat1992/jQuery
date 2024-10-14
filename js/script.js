/*==============jq=============*/
$(document).ready(function(){
	//ex1
	//alert("HELLO")
	//ex2
	/*$('button').on('click',function(){
		alert("HELLO");
	});*/
	//ex3
	$('.c_p').on('click',function(){
		$(this).hide();
	});
	//ex4
	$('#btnh').on('click',function(){
       $('.lorem').hide();
	});
	$('#btns').on('click',function(){
       $('.lorem').show();
	});
	//ex5
	$('#btnt').on('click',function(){
       $('.lorem1').toggle();
    }); 
    //ex6
    $('#btnfo').on('click',function(){
       $('.lorem2').fadeOut();
	});
	$('#btnfi').on('click',function(){
       $('.lorem2').fadeIn();
	});
	//ex7
	$('#btnft').on('click',function(){
       $('.lorem3').fadeToggle();
    }); 
    //ex8
	$('#btnftg').on('click',function(){
       $('.lorem4').fadeToggle(2000);
    }); 
    //ex9
    $('#btn').on('click',function(){
       $('.lrm').fadeOut("fast");
	});
	$('#btn1').on('click',function(){
       $('.lrm').fadeIn("slow");
	});
	//ex10
	$('.c_p1').on('click',function(){
		$(this).slideUp();
	});
	//ex11
	$('#panel').on('click',function(){
      $('#hw').slideToggle("slow");
	});
	//ex12
	$('#ch').on('click',function(){
     $('#pic').slideDown(1000);
	});
	//ex13
	$( '#go' ).on( 'click', function() {
      $( '#block' ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
     }, 1500 );
    });
    //ex14
    $('#start').on('click',function(){
     var div = $("#box");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
    //ex15
    $('#btn3').on('click',function(){
      $('#p1,#p2').append("<b>Append Text.</b>");
    });
    $('#btn2').on('click',function(){
      $('ol').append(" <li>Append Text</li> ");
    });
    //ex16
    $('#btn4').on('click',function(){
    	$('p').remove(".test, .demo");
    });
    //ex17
    $('#btn5').on('click',function(){
     alert("Text: " + $("#tst").text());
    });
    $('#btn6').on('click',function(){
      alert("HTML:" + $("#tst").html());
    });
    //ex18
    $('#btn7').on('click',function(){
     $('#test1').text("HELLO WORLD!!");
    });
    $('#btn8').on('click',function(){
     $('#test2').html("<b>HELLO WORLD!!</b>");
    });
    $('#btn9').on('click',function(){
     $('#test3').val("Dolly Duck");
    });
    //ex19
	$('#panel2').on('click',function(){
      $('#hw2').slideUp(5000);
	});
	$('#stop').on('click',function(){
		$('#hw2').stop();
	});
	//ex20
	$('#cm').on('click',function(){
    $("#p4").css("color", "red").slideUp(5000).slideDown(5000);
    });
    //ex21
    $('#b_gec').on('click',function(){
     $('#h1').load("demo_test.txt");
    });
    //ex22
    $('#b1').on('click',function(){
    	$('#d1').fadeIn();
    	$('#d2').fadeIn("slow");
    	$('#d3').fadeIn(3000);
    });
    //ex23
    $('#b2').on('click',function(){
    	$('#d4').fadeOut();
    	$('#d5').fadeOut("slow");
    	$('#d6').fadeOut(3000);
    });
    //ex24
    $('#b3').on('click',function(){
    	$('#d7').fadeToggle();
    	$('#d8').fadeToggle("slow");
    	$('#d9').fadeToggle(3000);
    });
    //ex25
    $('#b4').on('click',function(){
    	$('#d11').fadeTo("slow",0.15);
    	$('#d12').fadeTo("slow",0.4);
    	$('#d13').fadeTo("slow",0.7);
    });
    //ex26
    $('#b_gle').on('click',function(){
        $('a').attr("href","https://ulfatjahan.xyz/foodlover/");
    });
    //ex27
    $('#be1').on('click',function(){
       $('#emo').attr("src","images/happy.png");
    });
    $('#be2').on('click',function(){
       $('#emo').attr("src","images/sad.png");
    });
})