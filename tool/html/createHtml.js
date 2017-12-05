(function(e){
	var JsonFormat=function(str){
		str=str.split("&");
		var datas={};
		for(var data of str){
			data=data.split("=");
			if(!data[1]){
				alert("不能为空");
				return false;
			}
			datas[data[0]]=decodeURIComponent(data[1],true);
		}
		return datas;
	}
	var element=$("#content");
	var _createHtml={
		init:function(){
			var module=$("#col>div");
			var html='';
			for(i=0;i<module.length;i++){
				var name=module[i].id;
				html+=`<option label="${name}" value="${name}" />`;
			}
			$("#moduleCol").html(html);
			
			module=$("#row>div");
			html='';
			for(i=0;i<module.length;i++){
				name=module[i].id;
				html+=`<option label="${name}" value="${name}" />`;
			}
			$("#moduleRow").html(html);
		},
		appendRow:function(){
			var formData=JsonFormat($('#addRow').serialize());
			if(!formData)return;
			var html=$("#"+formData.mod).html();
			html=html.trimRight();
			element.append(html);
		},
		appendCol:function(){
			var formData=JsonFormat($('#addCol').serialize());
			if(!formData)return;
			var html=$("#"+formData.mod).html();
			for(var key in formData){
				html=html.replace("{"+key+"}",formData[key])
			}
			html=html.trimRight();
			element.find(".row:last-child").append(html);
		},
		deleteRow:function(){
			element.find(".row:last-child").remove();
		},
		deleteCol:function(){
			element.find(".row:last-child>div:last-child").remove();
		}
	}
	e.createHtml=_createHtml;
})(window);
$(function(){
	createHtml.init();
});