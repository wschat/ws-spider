module.exports={
	appPath:'',
	entryName:"parse", // 默认入口方法名称
	baseUrlName:"baseUrl", // 起始链接 变量名称
	limit:50, // 并发量
	delay:1800, //延迟(取该值以内的一个随机数) 单位：ms
	debug:true,
	timeout:6000, //超时 单位：ms
	retryCount:3, // 重试次数
	method:'get',
	charset:'utf-8',
	events:{
		taskPush:'ws-task-push', // 新增task事件
		waitTaskPush:'ws-wait-task-push', //重试任务
		_fetch:'ws-event-fetch', // 解析
	}
}
