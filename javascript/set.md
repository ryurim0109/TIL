## setTimout / setInterval

- setTimout 일정 시간이 지난 후 함수를 실행한다.
- clearTimeout 예정된 작업을 없앤다.
```javascript

    function fn(){
        console.log(3)
    };
    setTimeout(fn, 3000); //3초
/********************************
* 위 코드는 아래와 같음
*********************************/
 
    const tId=setTimeout(function{
        console.log(3)
    }, 3000);
/********************************
* 중단하려면
*********************************/

    clearTimeout(tId);
```


- setInterval 일정 시간을 기준으로 함수를 반복한다. 계속 반복시행
```javascript

    function showName(name){
        console.log(name)
    };
    const tId =setInterval(showName,3000,"JJ");
/********************************
* 중단하려면
*********************************/
    clearInterval(tId)

```