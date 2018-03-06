layui.use(['form','layer','jquery'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer
        $ = layui.jquery;
    $(".loginBody .seraph").click(function(){
        layer.msg("这只是做个样式，至于功能，你见过哪个后台能这样登录的？还是老老实实的找管理员去注册吧",{
            time:5000
        });
    })
    
  	
    //表单输入效果
    $(".loginBody .input-item").click(function(e){
        e.stopPropagation();
        $(this).addClass("layui-input-focus").find(".layui-input").focus();
    })
    $(".loginBody .layui-form-item .layui-input").focus(function(){
        $(this).parent().addClass("layui-input-focus");
    })
    $(".loginBody .layui-form-item .layui-input").blur(function(){
        $(this).parent().removeClass("layui-input-focus");
        if($(this).val() != ''){
            $(this).parent().addClass("layui-input-active");
        }else{
            $(this).parent().removeClass("layui-input-active");
        }
    })
    /*
     * 
     *  验证码切换 
     *  给图片地址加个时间戳，每次点击改变后面的参数
     * 
     * 
     * */
    function changeCode(url){
    	var url =  url;
    	var timestamp = (new Date()).valueOf();
    	var urlurl;
    	if(url.indexOf("?") > 0){ //地址后面有参数
    		urlurl = url + "&"+timestamp;
    	}else{
    		urlurl = url + "?"+timestamp;
    	}
    	return urlurl;
    }
    
    $(".yzmCode").click(function(){
		var u =  changeCode("http://localhost:3002/captcha");
		$(this).eq(0).attr("src",u)
		
    })
})