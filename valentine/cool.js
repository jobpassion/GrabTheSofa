var ques = [{q:'Q.1:The famous painter', a:'达芬奇'},{q:'Q.2:A man,who is the most handsome', a:'贾金平'},{q:'Q.3:Which keyword is used to statement a function', a:'function'},{q:'Q.4:In which year was China founded', a:'1949'},{q:'Q.5:A fruit, you eat recently', a:'banana'},{q:'Q.6:Who said love you', a:'贾金平'}];
var welcome = 'welcomewelcomewelcomewelcome';
var quesIndex;
var flag = false;
function clearInput(inp){
	for(var i=0; i<inp.value.length; i++){
		e = $.Event('keypress');
		e.charCode = 8;
		$(inp).trigger('keypress', {charCode:8});
	}
}

function inputType(input,text, cb){
			var input = input,
				s = text.split('').reverse(),
				len = s.length-1,
				e = $.Event('keypress');
			
			var	initInterval = setInterval(function(){
					if( s.length ){
						var c = s.pop();
						fancyInput.writer(c, input, len-s.length).setCaret(input);
						input.value += c;
						//e.charCode = c.charCodeAt(0);
						//input.trigger(e);
						
					}
					else {clearInterval(initInterval);
						$('#finput').click(function(){
							//clearInput(input);
							$('#finput').unbind('click');
							fancyInput.fillText("", input);
							$('#finput').val("");
							//$('#finput').fancyInput();
							if(cb){
								cb();
							}
						})
					}
			},150);
}

function r_init(){
setTimeout(function(){

   var b = jQuery("<div id='tt' />");
   
		$('body').append(b);
   
		$('#tt').avgrund({
			height: 'auto',
			width: 1200,
			holderClass: 'custom',
			showClose: false,
			closeByEscape: true, // enables closing popup by 'Esc'..
			closeByDocument: true, // ..and by clicking document itself
			showCloseText: 'close',
			onBlurContainer: '.container',
			onLoad: function (elem) {
				
			},
			template: "<input id='finput' type='text' ></div><div>    <textarea></textarea></div>"
		});
		$('#tt').trigger('click');
		setTimeout(function(){
			$('#finput').fancyInput();
			
			/*var input = $('#finput').val('')[0],
				s = 'type something... ✌'.split('').reverse(),
				len = s.length-1,
				e = $.Event('keypress');
			
			var	initInterval = setInterval(function(){
					if( s.length ){
						var c = s.pop();
						fancyInput.writer(c, input, len-s.length).setCaret(input);
						input.value += c;
						//e.charCode = c.charCodeAt(0);
						//input.trigger(e);
						
					}
					else {clearInterval(initInterval);
						$('#finput').click(function(){
							//fancyInput.fillText("", input);
							clearInput(input);
							$('#finput').unbind('click');
						})
					}
			},150);*/
			function displayNext(){
				inputType($('#finput').val('')[0], ques[quesIndex].q + ' ✎', null);
			}
			
			if(0 == quesIndex){
			
			inputType($('#finput').val('')[0], "Happy Valentine's Day  ◕｡◕   ", function(){
							fancyInput.fillText("", $('#finput').val('')[0]);
							$('#finput').val("");//
							inputType($('#finput').val('')[0], 'Then, let us answer some questions', function(){
								
								
								inputType($('#finput').val('')[0], ' to celebrate the "Valentine\'s Day"  (-__-)b', function(){
									fancyInput.fillText("", $('#finput').val('')[0]);
									$('#finput').val("");//
									inputType($('#finput').val('')[0], 'Come up ◕‿◕｡ ', displayNext);
								});
							});
			});
			}else{
				displayNext();
			}
			
			$('#finput').keyup(function(){
				console.log($('#finput').val());
				if(ques[quesIndex].a == $('#finput').val()){
				
					fancyInput.fillText("", $('#finput').val('')[0]);
					$('#finput').val("");//
					if(quesIndex < ques.length - 1){
						inputType($('#finput').val('')[0], 'Yes, you are right ✌', function(){
							inputType($('#finput').val('')[0], 'then go to the next . . .', displayNext);
						});
					}
					else{
						function end(){
							fancyInput.fillText("", $('#finput').val('')[0]);
							$('#finput').val("");//
							inputType($('#finput').val('')[0], 'Congratulations.Love you, prety girl ✌', end);
						}
						end();
					}
					quesIndex++;
					chrome.storage.local.set({volentineIndex:quesIndex});
				}
			});
			$('.avgrund-popin').css('width', '800px');
			$('.avgrund-overlay').css('z-index', 9999);
			$('.avgrund-popin').css('z-index', 9999);
			$('.avgrund-popin').css('background', '-webkit-radial-gradient(#205983, #0A2742)');
			$('.avgrund-popin').css('background', 'radial-gradient(#205983, #0A2742)');
		}, 100);
}, 1000);
}



					//chrome.storage.local.set({volentineIndex:0});

chrome.storage.local.get('volentineIndex', function(newsVar){
	quesIndex = newsVar['volentineIndex'];
	if(null == quesIndex){
		quesIndex = 0;
	}
	if(quesIndex < ques.length)
		r_init();
});