
//HOOKUI 动态js 仅限使用2024-12-29 19:25:40 之后版本使用
function handleLoadPackage(loadPackageParam) {
AccessManager.setAllowAll(true);
log.toast("COMMON_AAAJS:"+loadPackageParam.packageName);
log.v("COMMON_JS-AAFF->"+loadPackageParam.packageName);  

XposedBridge.hookMethod("android.view.View", "onTouchEvent", function(param, phase) {
    if (phase === "before") {
		
		log.v("before");
		var Arrays = Packages.java.util.Arrays;
		let xparam= param.getArguments();
		log.v(xparam);
		    let args = param.getArguments();
       log.v("onTouchEvent 调用前 ,ARG LEN:"+Arrays.toString(args));
    
     // args[0] = "Modified Arg";
      param.setArguments(args);
	    log.v("onTouchEvent 调用前 ,--------"+args.length);
    } else if (phase === "after") {
        log.v("onTouchEvent 调用堆栈"+ log.getStackTraceString());
    }
});



return false;
}