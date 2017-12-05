(function(e){
	//定义页面主题,页面表格格式
	var index=null,pageTableFormat={};
	var _jbbb={
		//页面初始化
		init:function(e){
			index=e;
			pageTableFormat.gxy=[];
			var data=getData();
			$("#table tbody").html(getHTML(data));
			
		},
		//获取表格内容
		getHTML:function(datas){
			var html="";
			for(var data of datas){
				html+=`<tr>`;
				for(var key of pageTableFormat)
					html+=`<td>${datas[key]}</td>`;
				html+=`</tr>`;
			}
			return html;
		},
		//获取数据信息
		getData:function(){
			var data="";
			return data;
		}
	}
	e.jbbb=_jbbb;
})(window)

