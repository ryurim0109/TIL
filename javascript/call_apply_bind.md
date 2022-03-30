## call, apply, bind
- 함수 호출 방식과 관계없이 this를 지정할 수 있음.
- call : 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정한다.
```javascript
 const jj ={
     name: "JJ",
 };
 const riri ={
     name: "riri",
 };

 function showThisName(){
     console.log(this.name);
 };

 showThisName(); // window.name ""
 showThisName.call(riri); // riri

 function update(birthYear,occupation){
     this.birthYear =birthYear;
     this.occupation=occupation;
 };
 update.call(riri, 1995, 'backsu');
 console.log(riri); //{name:"riri",birthYear:1995,occupation:"backsu"}

```
- apply : 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
- call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.

```javascript
 const riri ={
     name: "riri",
 };

 function showThisName(){
     console.log(this.name);
 };

 function update(birthYear,occupation){
     this.birthYear =birthYear;
     this.occupation=occupation;
 };
 update.apply(riri, [1995, 'backsu']);
 console.log(riri); //{name:"riri",birthYear:1995,occupation:"backsu"}

```

```javascript
 const nums =[3,10,1,6,4];
 const minNum=Math.min(...nums); //1
 const manNum=Math.max(...nums); //10

 const min=Math.min.apply(null,nums) //1
 const max=Math.max.apply(null,nums) //10

```

- bind : 함수의 this값을 영구히 바꿀 수 있다.
```javascript
 const user ={
     name: "riri",
     showName: function(){
         console.log(`hello, ${this.name}`)
     },
 }; 

 user.showName();// hello, riri

 let fn = user.showname;
 fn(); // hello,
 fn.call(user); // hello, riri
 fn.apply(user); // hello, riri

 let boundFn =fn.bind(user);
 boundFn(); // hello, riri
```