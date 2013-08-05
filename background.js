// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var min = 1;
var max = 5;
var current = min;


function query1(index,re, url){
	if(url.indexOf('?')== -1){
		url += '?';
	}
	$.ajax({url:url + "&testran=" + Math.random(),timeout:3000,success:function(html){
		//var re = /<th class="common">\s*<em>.*<\/em>\s*(<a.*>.*<\/a>)/g;
		var r = "";   
		var results = [];
		while(r = re.exec(html)) {   
			results.push(r[2].replace(/&amp;/g, "&"));
		}  
		chrome.storage.local.get('his' + index, function(res){
			console.log(index);
			var his1 = res['his' + index];
			if(null == his1){
				his1 = [];
			}
			var tmp = [];
			for(var i=0; i<results.length; i++){
				var tmp_md5 = hex_md5(results[i]);
				for(var j=0; j<his1.length; j++){
					if(his1[j] == tmp_md5){
						tmp_md5 = null;
						break;
					}
				}
				if(null != tmp_md5){
					tmp.push(results[i]);
					his1.unshift(tmp_md5);
				}
			}
			his1.splice(100);
			var tmpObj = {};
			tmpObj['his'+index] = his1;
			chrome.storage.local.set(tmpObj);
			chrome.storage.local.get('news' + index, function(newsVar){
				var news = newsVar['news' + index];
				if(null == news){
					news = [];
				}
				console.log(news);
				news = tmp.concat(news);
				var tmpObj = {};
				tmpObj['news'+index] = news;
				chrome.storage.local.set(tmpObj);
			});
		});
	}});
}
//alert(hex_md5("abcdef"));
var notification;
function sendAlert(count){
	if(notification){
		notification.close();
		//return;
	}
	notification = webkitNotifications.createNotification(
	  'alert.png',  // icon url - can be relative
	  '有新提示',  // notification title
	  '一共有新提示' + count + '个'  // notification body text
	);
	notification.show();
	notification.onclick = function(){
//		setTimeout(function(){
		if(null != notification)
			notification.close();
			//
		var w = window.open ('about:blank', 'newwindow' + Math.random(), 'height=414, width=399, top=' + (window.screen.height- 414) + ', left=' + (window.screen.width - 399) + ', toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no');
//		}, 1000);
		//alert(1);
		w.location.href = 'Z Light Accordion   jQuery plugin.htm';
		
		
	};
	notification.onclose = function(){
	
	};
	/*setTimeout(function(){
		if(notification)
		notification.close();
//		alert(notification);
	}, 5000);*/
}

var newsCount = 0;
var getCount = 0;


var intervalTimer = setInterval(function(){
	//sendAlert();
	var arrNews = [];
	for(var i=0; i<jobs.length; i++){
		arrNews.push('news' + i);
	}
			chrome.storage.local.get(arrNews, function(newsVar){
				for(var index=0; index<jobs.length; index++){
					var news = newsVar['news' + index];
					if(null != news){
						newsCount += news.length;
					}
				}
					if(newsCount > 0)
						sendAlert(newsCount);
					newsCount = 0;
			});
	
	
}, 10000);
setInterval(function(){
	
	chrome.storage.local.get(['init', 'jobs'], function(res){
		// if(null == res.init){
			jobs = [];
		if(null == res.init){
			// jobs.push({url:'http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=51&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'我有沙发',active:true});
			// jobs.push({url:'http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=62&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'旅行日记',active:true});
			// jobs.push({url:'http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=39&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'碎言碎语',active:true});
			// jobs.push({url:'http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=2&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'新人报道',active:true});
			// jobs.push({url:'http://www.haitaozj.com/forum.php?mod=forumdisplay&fid=48&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'亲子空间',active:true});
			// chrome.storage.local.set({init:true, jobs:jobs});
		}else{
			jobs = res.jobs;
		}
		
		query();
	});
}, 30000);
var jobs = [];
chrome.storage.local.get(['init', 'jobs'], function(res){
	// if(null == res.init){
		jobs = [];
	if(null == res.init){
		jobs.push({url:'http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=51&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'我有沙发',active:true});
		jobs.push({url:'http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=62&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'旅行日记',active:true});
		jobs.push({url:'http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=39&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'碎言碎语',active:true});
		jobs.push({url:'http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=2&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'新人报道',active:true});
		jobs.push({url:'http://www.haitaozj.com/forum.php?mod=forumdisplay&fid=48&filter=author&orderby=dateline', regexp:'/<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*<\\/a>)/g', title:'亲子空间',active:true});
		chrome.storage.local.set({init:true, jobs:jobs});
	}else{
		jobs = res.jobs;
	}
	
	query();
});
function query(){
	for(var i=0; i<jobs.length; i++){
		if(jobs[i].active == true && null != jobs[i].active && null !=  jobs[i].regexp && null != jobs[i].title)
			query1(i, new RegExp(jobs[i].regexp, 'g'), jobs[i].url);
	}

// query1(1,/<tbody id=\"normalthread.*\s*<tr>\s*.*\s*.*\s*.*\s*.*\s*.*\s*<th class="(common|new)">\s*.*(<a.*>.*<\/a>)/g, "http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=51&filter=author&orderby=dateline&testran=" + Math.random());
// query1(2,/<tbody id=\"normalthread.*\s*<tr>\s*.*\s*.*\s*.*\s*.*\s*.*\s*<th class="(common|new)">\s*.*(<a.*>.*<\/a>)/g, "http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=62&filter=author&orderby=dateline&testran=" + Math.random());

// query1(3,/<tbody id=\"normalthread.*\s*<tr>\s*.*\s*.*\s*.*\s*.*\s*.*\s*<th class="(common|new)">\s*.*(<a.*>.*<\/a>)/g, "http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=39&filter=author&orderby=dateline&testran=" + Math.random());
// query1(4,/<tbody id=\"normalthread.*\s*<tr>\s*.*\s*.*\s*.*\s*.*\s*.*\s*<th class="(common|new)">\s*.*(<a.*>.*<\/a>)/g, "http://www.sfkkkkkkkkk.com/forum.php?mod=forumdisplay&fid=2&filter=author&orderby=dateline&testran=" + Math.random());


// query1(5,/<tbody id=\"normalthread.*\s*<tr>\s*.*\s*.*\s*.*\s*.*\s*.*\s*<th class="(common|new)">\s*.*(<a.*>.*<\/a>)/g, "http://www.haitaozj.com/forum.php?mod=forumdisplay&fid=48&filter=author&orderby=dateline&testran=" + Math.random());

}
