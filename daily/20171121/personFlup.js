(function(e){
	//定义一个对象，保存不同检测人群要检测的独有项目和所必须使用的特殊药物
	var stateOfIllnessDetail={};
	//为对象stateOfIllnessDetail 赋值
	//属性data保存独有的检测项目
	//属性append保存必须使用的药物
	stateOfIllnessDetail.gxy={data:`<h4>高血压检测项目</h4><div class="row"><div class="col2"><label for="">心率</label><div class="left"><input type="text"></div><div><span>次/分钟</span></div></div><div class="col1"><label for="">摄盐情况</label><div class="left"><div class="select"><input type="text"></div><dl></dl></div></div><div class="col1"><label for="">目标摄盐情况</label><div class="left"><div class="select"><input type="text"></div><dl></dl></div></div></div><div class="row"><div class="col6"><label for=""><span style="float: left;">辅助检查</span><button>常用语引用</button></label><div class="left"><textarea style="min-height: 70px;"></textarea></div></div></div>`};
	stateOfIllnessDetail.tnb={data:`<h4>糖尿病检测项目</h4><div class="row"><div class="col1"><label for="">足背动脉搏动</label><div class="left"><div class="select"><input type="text"></div><dl></dl></div></div><div class="col2"><label for="">主食</label><div class="left"><input type="text"></div><div><span>克/天</span></div></div><div class="col2"><label for="">目标主食</label><div class="left"><input type="text"></div><div><span>克/天</span></div></div></div><div class="row"><div class="col2"><label for=""><span>*<span>空腹血糖值</label><div class="left"><input type="text"></div><div><span>mmol/L</span></div></div><div class="col2"><label for="">糖化血红蛋白</label><div class="left"><input type="text"></div><div><span>%</span></div></div><div class="col1"><label for="">检查日期</label><div class="left"><input type="text"></div></div><div class="col1"><label for="">低血糖反应</label><div class="left"><div class="select"><input type="text"></div><dl></dl></div></div></div>`,append:`<div class="row"><div class="col1"><label for="">胰岛素</label><div class="left"><input type="text" id="ydszl" name="ydszl" autocomplete="off"></div></div><div class="col3"><label for="">用法用量</label><div class="left"><input type="text"></div></div></div>`}
	
	var disease=['gxy','tnb'];
	var _personFlupHypertension={
		init:function(){console.log(stateOfIllnessDetail.tnb.data)
			var html="";var appendHtml="";
			for(var key of disease){
				var obj=stateOfIllnessDetail[key];
					html+=obj.data;
					appendHtml+=obj.append;
				}
			}
			$("#printPage #content .stateOfIllness").html(html);
			$("#medical").html(appendHtml);
		}
	}
	e.personFlupHypertension=_personFlupHypertension;
})(window);
$(function(){
	personFlupHypertension.init();
});
