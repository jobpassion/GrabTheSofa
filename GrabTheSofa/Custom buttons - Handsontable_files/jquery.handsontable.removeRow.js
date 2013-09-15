(function($) {
	"use strict";

	/**
	 * Handsontable RemoveRow extension. See `demo/buttons.html` for example
	 * usage See `.../test/jasmine/spec/extensions/removeRowSpec.js` for tests
	 */
	Handsontable.PluginHooks.add('beforeInitWalkontable', function(
			walkontableConfig) {
		var instance = this;

		if (instance.getSettings().removeRowPlugin) {

			var getButton = function(td) {
				return $(td).parent('tr').find('th.htRemoveRow').eq(0).find(
						'.btn');
			};

			instance.rootElement.on('mouseover', 'tbody th, tbody td',
					function() {
						getButton(this).show();
					});
			instance.rootElement.on('mouseout', 'tbody th, tbody td',
					function() {
						getButton(this).hide();
					});

			instance.rootElement.addClass('htRemoveRow');

			/**
			 * rowHeaders is a function, so to alter the actual value we need to
			 * alter the result returned by this function
			 */
			var baseRowHeaders = walkontableConfig.rowHeaders;
			walkontableConfig.rowHeaders = function() {

				var newRowHeader = function(row, elem) {
					var child, div;
					while (child = elem.lastChild) {
						elem.removeChild(child);
					}
					elem.className = 'htNoFrame htRemoveRow';
					if (row > -1) {
						div = document.createElement('div');
						div.className = 'btn';
						div.appendChild(document.createTextNode('x'));
						elem.appendChild(div);

						$(div).on('mouseup', function() {
							instance.alter("remove_row", row);
						});
					}
				};

				return Array.prototype.concat.call([], newRowHeader,
						baseRowHeaders());
			};

		}
	});
})(jQuery);

function colorHighlighter(item) {
	if (item == '<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*</a>)') {
		return 'Discuz论坛类';
	} else if (item == '()threadlist_text.*\\s*(<a.*</a>)') {
		return '百度贴吧';
	} else if (item == '<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*<em>.*</em>.*(<a.*>.*</a>)') {
		return 'Discuz论坛类(管理员用)';
	}
}
var _init = false;
$('document')
		.ready(
				function() {
					var container = $("#example1");

					container
							.handsontable({
								minSpareRows : 1,
								contextMenu : false,
								autoWrapRow : true,
								colWidths : [ 55, 80, 80, 80, 80, 80, 80 ],
								stretchH : 'all',
								scrollV : 'auto',
								scrollH : 'auto',
								colHeaders : [ "启用", "标题", "Url",
										"regexp(不懂请保持默认)" ],
								outsideClickDeselects : false,
								removeRowPlugin : true,
								afterInit : function() {
									_init = true;

								},
								afterChange : function(changes) {
									if (!_init)
										return;
									var _data = container.data('handsontable')
											.getData();
									console.log(_data);
									// var _jobs = [];
									// for(var i=0; i<_data.length; i++){
									// if(null == _data[i][0] || "" ==
									// _data[i][0] ||null == _data[i][1] || ""
									// == _data[i][1] ||null == _data[i][2] ||
									// "" == _data[i][2] ||null == _data[i][3]
									// || "" == _data[i][3])
									// continue;
									// _jobs.push({url:_data[i][2],
									// regexp:_data[i][3], title:_data[i][1],
									// active:_data[i][0]});
									// $('#msg').html('saved. ')
									// }
									// alert(_data.length);
									chrome.storage.local.set({
										init : true,
										jobs : _data
									});
									chrome.storage.local.set({
										dirty : true
									});
								},

								columns : [
										{
											data : "active",
											type : 'checkbox',
										},
										{
											data : "title",
											type : 'text'
										},
										{
											data : "url",
											type : 'text'
										},
										{
											data : "regexp",
											type : {
												editor : Handsontable.AutocompleteEditor
											},
											source : [
													'<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*.*(<a.*>.*</a>)',
													'()threadlist_text.*\\s*(<a.*</a>)',
													'<tbody id=\\"normalthread.*\\s*<tr>\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*.*\\s*<th class="(common|new)">\\s*<em>.*</em>.*(<a.*>.*</a>)' ],
											highlighter : colorHighlighter,
											strict : false
										} ]
							});

					var data = [];

					chrome.storage.local.get([ 'init', 'jobs' ], function(res) {
						if (null == res.init) {
							// if(true){
						} else {
							// for(var i=0; i<res.jobs.length; i++){
							// var tmp = [];
							// tmp.push(res.jobs[i].active);
							// tmp.push(res.jobs[i].title);
							// tmp.push(res.jobs[i].url);
							// tmp.push(res.jobs[i].regexp);
							// data.push(tmp);
							// }
							console.log(data);
							container.handsontable("loadData", res.jobs);
						}

					});

					$("button#selectFirst").on('click', function() {
						container.handsontable("selectCell", 0, 0);
					});

					$("input#rowHeaders").change(function() {
						container.handsontable("updateSettings", {
							rowHeaders : $(this).is(':checked')
						});
					});

					$("input#colHeaders").change(function() {
						container.handsontable("updateSettings", {
							colHeaders : $(this).is(':checked')
						});
					});

					$('#save').click(function() {

					})

				});