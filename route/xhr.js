var data = require("../controller/data"),
	util = require("../controller/util");

module.exports = function wrap(app){
	// app.get("/info",
	// 	util.xhr,
	// 	data.infoList,
	// 	function(req,res){
	// 
	// 	});
	// 
	// app.get("/message",
	// 	util.xhr,
	// 	data.messageList,
	// 	function(req,res){
	// 
	// 	});
	
	
	app.get("/column/:id/get",
		data.columnById,
		function(req,res){
			var column = req.result.data("column");
			res.send(column)
		}
	)

	app.get("/user/:id/get",
		util.xhr,
		data.userById,
		function(req,res){
			res.send(req.user);
		});
	
	app.get("/reply/:id",
		util.xhr,
		data.replyById,
		function(req,res){
			res.send(req.reply);
		})

	app.get("/refresh_num",
		util.refreshValidatNum,
		data.validatNumPng,
		function(req,res){
			res.send(req.result.data("validatNumPng"));
		})
		
}