## Stack

```javascript
let stack = [];
stack.push('1');
stack.push('2');
stack.push('3');

console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
```

1. stack 사이즈를 알 수 있는 function

```javascript
return stack.length();
```

2. stack이 공백인지 알 수 있는 것

```javascript
return stack.length() === 0;
```

3. stack의 제일 마지막 index에 있는 값을 가져오는 것.(pop이랑 다르게 그 값은 없어지지 않음)

```javascript
return stack[stack.length() - 1];
```

## Queue

```javascript
let queue = [];
queue.push('1');
queue.push('2');
queue.push('3');

[1, 2, 3, ''] <= queue[i] == queue[front], i is the frist index of an array
<= queue[queue.length-1] == queue[rear]
console.log(queue.shift());
// 1, [2, 3] <= queue[front] == 2, queue[rear] == 3
console.log(queue.shift());
// 2, [3] <= queue[front] == 3, queue[rear] == 3
console.log(queue.shift())
// 3, [] <= queue[front] == 'error'
```

1. queue의 size

```javascript
return queue.rear - 1;
```

2. queue가 공백인지 알 수 있는 방법

```javascript
return front === rear;
```

3. queue의 배열이 full이다. queue의 크기는 10으로 가정했다. <br/>
   그렇다면... queue 내에 값의 개수가 10개로 꽉 채워졌는지
   어떻게 알 수 있을까...? (front, rear를 사용해서, %)

```javascript
return (rear + 1) % 10 == front;
```

4. queue의 맨 첫번째 값을 가져오는 것

```javascript
return queue[front];
```
