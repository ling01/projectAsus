//require(["m03"]);的意思相当于 <script src="m03.js"></script>，即把m03.js引入到当前js文件中。

require(["m03"],function(m03){
	m03.m03func();
});
