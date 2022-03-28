## 나머지 매개변수, 전개 구문(Rest parameters, Spread syntax)

- ... 👈이렇게 점 세개로 사용합니다.
```javascript
    //인수전달

    function showName(name){
        console.log(name);
    };
    showName('jj');
    //여기에서 만약 이름을 하나 더 전달하게 된다면??
    showName('jj','riri');
    // 에러는 발생 x riri는 안찍힐 뿐.
```
- arguments
    - 함수로 넘어 온 모든 인수에 접근 할 수 있다.
    - 함수내에서 이용 가능한 지역변수이다.
    - length / index Array 형태의 객체이다.
    - 배열의 내장 메서드가 없다.( forEach, map)
    - 화살표 함수에서 사용 x

    ```javascript

    function showName(name){
        console.log(arguments.length);
        console.log(arguments[0]);
        console.log(arguments[1]);
    };
    showName('jj','riri');
    //2
    // 'jj'
    // 'riri'
    
    ```

- Rest parameters
     - ( 주의 ) 항상 마지막에 있어야 된다.

```javascript

    function showName(...names){
        console.log(names);
    };
    showName();
    showName('jj');
    showName('jj','riri');
    //[]
    // ['jj']
    // ['jj','riri']
    
```
```javascript
    /**************************
    * 나머지 매개변수
    * 전달 받은 모든 수를 더해야함 ! 
    **************************/
    function add(...numbers){
        let result =0;
        numbers.forEach(
            num => result+=num
        );
        console.log(result);
    };
    add(1,2,3);
    add(1,2,3,4,5,6,7,8,9,10);
    //6
    // 55
```
```javascript
    /**************************
    * 나머지 매개변수
    * user 객체를 만들어 주는 생성자 함수 
    **************************/
    function User(name,age,...skills){
        this.name =name;
        this.age =age;
        this.skills =skills;
    };
    const user1 = new User('jj',30,'html','css');
    const user2 = new User('riri',20,'html','css','javascript');
    const user3 = new User('uu',28,'javascript','react','english');
    

    console.log(user1); 
    // age: 30 , name: "jj", skills: ['html','css']
    console.log(user2);
     // age: 20 , name: "riri", skills: ['html','css','javascript']
    console.log(user3);
     // age: 28 , name: "uu", skills: ['javascript','react','english']
```

- 전개 구문(Spread syntax) 
```javascript
     /**********************
     *배열
     ***********************/
     let arr1=[1,2,3];
     let arr2=[4,5,6];
     let result =[...arr1,...arr2];
     console.log(result); // [1,2,3,4,5,6]

     let result2 =[0,...arr1,...arr2,7,8,9];
     console.log(result2); // [0,1,2,3,4,5,6,7,8,9]
```
```javascript
     /**********************
     *복제
     ***********************/
     let user ={name:'jj',age:30};
     let user2 ={...user};
     user.name="riri";
     console.log(user.name); //"jj"
     console.log(user2.name); //"riri"
```
```javascript
     /**********************
     * arr1을 [4,5,6,1,2,3]으로
     ***********************/
     let arr1 =[1,2,3];
     let arr2 =[4,5,6];

     arr2.reverse().forEach(num => {
         arr1.unshift(num);
     });
     console.log(arr1);
     //[4,5,6,1,2,3]

     /*******************************
     * arr1을 [4,5,6,1,2,3]으로 전개구문
     *******************************/
     let arr1 =[1,2,3];
     let arr2 =[4,5,6];

     arr1=[...arr2,...arr1];
     console.log(arr1);
     //[4,5,6,1,2,3]


```