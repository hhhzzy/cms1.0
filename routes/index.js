module.exports = function(app){
	app.get('/',function(req,res){
		res.redirect("main")
	})
	app.use('/main',require("./main.js"));//首页
	app.use('/login',require("./login.js"));  //登录
	app.use('/quit',require("./quit.js"));  //退出
	app.use('/articleList',require("./article/articleList.js"));  //文章列表
	app.use('/articleAdd',require("./article/articleAdd.js"));  //文章详细也
	app.use('/articleDelete',require("./article/articleDelete.js"));  //文章删除
	app.use('/articleUpdate',require("./article/articleUpdate.js"));  //文章修改
	app.use('/articleImgUpload',require("./article/articleImgUpload.js"));  //文章图片上传
	app.use('/userInfo',require("./user/userInfo.js"));  //用户信息页面
	app.use('/captcha',require("./captcha.js")); //验证码
	app.use('/imgUpload',require("./img/imgUpload.js")); //头像上传
	app.use('/address',require("./address.js")); //城市数据
}

