
let person02=function(){
	function Person(id,name,age){
		this.id = id;
		this.name = name;
		this.age = age;
	}
	
	Person.prototype.eat = function(){
		
	}
	
	Person.prototype.work = function(){
		
	}	
	
	Person.prototype.setAge = function(age){
		if(age<0 || age>150){
			alert("亲，年龄不合法！");
			return;
		}
		this.age = age;
	}
	
	
	Person.prototype.getAge = function(){
		return this.age;
	}
	
	let p1 = new Person("","",0);	
	return {
		id:p1.id,
		name:p1.name,
		setAge:p1.setAge,
		getAge:p1.getAge
	}
}();
