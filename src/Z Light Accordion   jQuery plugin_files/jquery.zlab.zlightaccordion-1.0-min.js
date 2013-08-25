eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(l($,V,1k){$.20.1Z=l(1g){g 2=$.1R({1c:\'1A%\',1a:\'0\',D:\'12\',10:\'X\',s:\'U\',Q:1N,G:1P,1l:\'1W\',1i:\'#n\',1f:\'#M\',1e:\'1M\',1d:\'0\',y:1b,A:\'#M\',19:\'#M\',B:\'#n\',14:\'#n\',13:\'#1S\',11:\'#n\',Z:\'1t\',Y:\'1U\',S:\'#1s\',P:\'23.18\',16:\'1T.18\',t:\'1L\'},1g);g 4=f.1V(\'1X\'),$R=$(\'R\'),$L=$(\'L\');1u f.1H(l(){g $f=$(f),K=$f.T(\'5\'),j,8=\'W\',i=\'X\',I=\'H\',r=\':1v\',h=\' \'+2.Z+\' \'+2.Y+\' \'+2.S+\'  \',q;(!2.y===1b)?q=\'7-u: E(6/C/\'+2.y+\');\':q=\'\';g 15=$(\'<N 21="22/6">	#\'+4+\'{17: \'+2.1c+\';24-17:\'+2.1a+\';} #\'+4+\' > .25{1p:\'+2.1d+\';1q-1r:\'+2.1e+\';1o:\'+2.1l+\'; \'+q+\' 7-3: \'+2.1i+\';3: \'+2.1f+\'; } #\'+4+\' > .9{p-1w:\'+h+\';p-1x:\'+h+\';p-1y:\'+h+\';} #\'+4+\' > .9 > 5{7-3: \'+2.19+\' ;p-1z:\'+h+\';} #\'+4+\' > .9 > 5 > e{7-3: \'+2.13+\'; 3: \'+2.11+\' ;} #\'+4+\' > .9 > 5 > 1B, #\'+4+\' > .9 > 5 > 1C, #\'+4+\' > .9 > 5 > 1D, #\'+4+\' > .9 > 5 > 1E, #\'+4+\' > .9 > 5 > 1F, #\'+4+\' > .9 > 5 > 1G{7-u: E(6/C/\'+2.P+\'); 3: \'+2.14+\' ;} #\'+4+\'  .m{7-u: E(6/C/\'+2.16+\') !1I;}</N>\');$(\'L > 1J\').1K(15);x(2.10===\'H\'){W(2.s){w\'U\':j=\'0\';v;w\'1O\':j=\'-1\';v;w 2.s:j=2.s-1;v};K.1Q(j).6(\'7-3\',2.A).T(\'e\').b(8,I).o(c,c).1h().F().z(r).6(\'3\',2.B).1j(\'m\')};K.z(r).H(2.D+\'.1Y\',l(){g $d=$(f),a=$d.k(\'e\');l J($d,a){$d.1j(\'m\').6(\'3\',2.B).k(\'e\').o(c,c).1h(2.Q,2.t).b(8,I).F().1m(\'5\').6(\'7-3\',2.A).k(\'5\').6(\'7-3\',\'\').z(r).1n(\'m\').6(\'3\',\'\').k(\'e\').o(c,c).O(2.G,2.t).b(8,i)};x(2.D===\'12\'){(a.b(8)===i||!a.b(8))?J($d,a):$d.1n(\'m\').6(\'3\',\'\').k(\'e\').o(c,c).O(2.G,2.t).b(8,i).F().1m(\'5\').6(\'7-3\',\'\')}26{x(a.b(8)===i||!a.b(8)){J($d,a)}}})})}})(27,V,1k);',62,132,'||setting|color|getAttrVal|li|css|background|d_switch|zl_acc|zl_div|data|true|self|div|this|var|style_border_li|d_off|active_number|siblings|function|zl_img_switch|474747|stop|border|ifImg|d_header|activeNumber|easingEffect|image|break|case|if|iconHeaderUrl|children|activeSectionBcolor|sectionActiveTextColor|img|handler|url|end|foldingSpeed|on|d_on|fufEvents|zl_li|html|fff|style|slideUp|iconSwitchUrl|deploymentSpeed|body|borderColor|find|first|window|switch|off|borderStyle|borderWidth|activeSwitch|contentColor|click|contentBcolor|sectionTextColor|styleAccordion|iconSwitchUrl2|width|png|sectionBcolor|accordionMinWidth|false|accordionWidth|headerPadding|headerFontSize|headerColor|options|slideDown|headerBcolor|addClass|document|headerHeight|parent|removeClass|height|padding|font|size|dcdcdc|1px|return|header|left|right|bottom|top|50|h1|h2|h3|h4|h5|h6|each|important|head|append|easeOutExpo|18px|1000|last|500|eq|extend|fafafa|ch_down|solid|attr|auto|id|zl_handler|zLightAccordion|fn|type|text|ch_right|min|zl_header|else|jQuery'.split('|'),0,{}));
var titles = ["abc","我有沙发", "旅行日记", "碎言碎语", "新人报道", "亲子空间"];
var total = 0;
$(document).ready(function(){

function excuteIndex(){
			var _t = [];
			for(var i=0; i<jobs.length; i++){
				_t.push('news' + i);
			}
			chrome.storage.local.get(_t, function(newsVar){
			
			for(var index=0; index<jobs.length; index++){
				var news = newsVar['news' + index];
				if(null != news && news.length > 0){
				var str = '<li style="background-color: rgb(39, 39, 39);"><h4 class="zl_img_switch" style="color: rgb(255, 255, 255);">' + jobs[index].title + '&nbsp;(' + news.length + ')</h4><div href="' + jobs[index].url + '" style="display: block;">';
					//sendAlert();
					for(var i=0; i<news.length; i++){
						str += news[i];
					}
					str += '</div></li>';
					$('.zl_acc').html($('.zl_acc').html()+str);
				total += news.length;
				}
				chrome.storage.local.remove('news' + index);
			}
			$('a').addClass('xst');
				$('a').click(function(obj){
					var url = $(obj.target).attr('href');
					if(url.indexOf('/') != 0 && url.indexOf('http') != 0){
						url = '/' + url;
					}
					var domain = $(obj.target).parent().attr('href');
					domain = domain.replace(/(https?:\/\/[^\/]*).*/g, '$1');
					if(url.indexOf('http') == -1){
						url = domain + url;
					}
					chrome.tabs.create({url:url, active:true});
					//alert($(obj.target).closest('h4'));
					var str = $(obj.target).parent().parent().children('h4').html();
					var cur = str.substring(str.lastIndexOf('(') + 1, str.lastIndexOf(')')) * 1 - 1;
					$(obj.target).parent().parent().children('h4').html(str.substring(0, str.lastIndexOf('(')) + "(" + cur + ")");
					$(obj.target).remove();
					total--;
					if(0 == total){
						window.close();
					}
					return false;
				});

				
				
				$('#zl_wrapper2').zLightAccordion({
					activeSwitch: 'on',
					//activeNumber: '0',
					accordionWidth : '100%',
					headerBcolor: '#4D3636',
					headerColor: '#fff',
					headerPadding: '15px',
					activeSectionBcolor: '#272727',
					sectionBcolor: '#171717',
					sectionActiveTextColor: '#fff',
					sectionTextColor: '#404040',
					contentBcolor: '#373737',
					contentColor: '#868686',
					borderColor: '#0f0f0f',
					iconHeaderUrl: 'question.png',
					//handler: 'mouseenter'
				});
	});
}
var jobs = []
chrome.storage.local.get(['jobs'], function(res){
	if(null != res.jobs){
		jobs = res.jobs;
	}
excuteIndex();
});
	

});




