## 🍄 이벤트 전파
- 브라우저에서 요소에 대한 event가 발생하면 해당 요소에 할당된 handler가 동작하게 됩니다.
- handler가 동작하면서 Bubbling과 Capturing이 발생하게 됩니다.

![버블링 캡처링 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FspQ8n%2FbtrEPcNtKDB%2FEp7S2Ld36WTRWx4d2khW01%2Fimg.png)

### 🍄 버블링
    🌱 bubbling은 특정 요소에서 event가 발생했을 때 상위 요소로 event가 전파되는 것을 의미합니다.
    🌱 HTML요소는 트리 형식으로 랜딩페이지에서 <Body />가 최상위 요소가 됩니다. 
    🌱 그 밑으로 자식 요소들이 있게 됩니다.
    🌱 브라우저는 이벤트를 하위 컴포넌트에서 상위 컴포넌트로 전파시키는 방식을 뜻합니다.

### 캡처링
    🌱 bubbling은 특정 요소에서 event가 발생했을 때 하위 요소로 event가 전파되는 것을 의미합니다.
    🌱 즉, 이벤트가 발생한 element부터 자식들에게 순차적으로 이벤트가 전파되는 방식입니다.

### 🍄 Event 중단방법 (4가지)

    1️⃣ event.preventDefault()
- 🌱 event.preventDeafult()는 이벤트의 기본 동작을 중단시킵니다.
- 🌱 html의 태그들 중에서 a 태그 같은 경우엔 지정한 링크로 페이지를 이동하는데 이러한 동작을 중단시킵니다.

👉 a 태그의 href 속성이 중단되어 페이지 이동이 일어나지 않지만, bubbling이 발생하여 이벤트 전파는 그대로 일어납니다.

    2️⃣ event.stopPropagation()

- 🌱 event.stopPropagation()은 이벤트 전파를 중단시킵니다. 
- 🌱 bubbling 이나 capturing을 막아야하는 경우에 사용합니다.

👉 이벤트 전파가 중단되어 버블링이 발생하지 않지만 target의 기본 동작과 다른 event handler의 동작까지 막아주지는 않습니다. 

👉 따라서 target에 다른 event handler가 걸려있거나 기본 동작이 있는 경우에는 그대로 동작하게 됩니다.

    3️⃣ event.stopImmediatePropagation()

- 🌱 event.stopImmediatePropagation()은 이벤트 전파를 중단시키고 다른 event handler의 동작도 막아줍니다. 
- 🌱 따라서 target이 기본 동작을 가지고 있는 경우에 기본 동작만 일어나게 됩니다.

👉 event.stopImmediatePropagation()은 이벤트 전파를 중단하고 같은 target에 걸린 다른 handler의 동작도 중단시킵니다.

    4️⃣ return false

- 🌱 return false는 onclick handler에 사용했을 경우에 대하여 event.preventDefault()를 사용한 것과 같은 동작을 합니다. 
- 🌱 따라서 이벤트 전파는 발생하지만 기본 동작은 중단되게 됩니다.



