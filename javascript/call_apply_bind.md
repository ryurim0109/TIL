## call, apply, bind
- 함수 호출 방식과 관계없이 this를 지정할 수 있음.
- call
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

 showThisName(); // window.name
 showThisName.call(riri); // riri

```