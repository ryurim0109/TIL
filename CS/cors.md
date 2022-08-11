# CORS(Cross-Origin Resource Sharing)

<aside>
🐥 CORS(교차 출처 공유)는 브라우저가 리소스 로드를 허용해야 하는 자체가 아닌 다른 출처를 서버가 나타낼 수 있도록 하는 HTTP 헤더 기반 메커니즘 입니다.
Origin은 scheme, host, port로 이루어진 도메인입니다. (IE의 경우 port를 비교하지 않음)

</aside>

```
https://www.naver.com/

① scheme : https
② host: www.naver.com
③ port: null (공개되지 않음)
```

현재 `① 자신이 속한 출처(Origin)`를 기준으로 `② 다른 출처(Origin)`에 API를 요청하게 되면 브라우저에서 이 요청으로 넘어오는 경과가 안전한지 판단하게 되는데,

응답을 보내는 출처가 `① 자신이 속한 출처`가 아닌, `② 다른 출처`여도 서로 예상되는 출처라면 요청에 대해 허용해주는 응답 헤더를 보내, 브라우저가 응답 결과를 보여줍니다.

이를 CORS(Cross Origin Resource Sharing)이라 합니다.

### 🙄 **왜 브라우저가 CORS 요청을 처리하나요?**

---

모든 서버들이 다 CORS를 인지하지는 않기 때문입니다.

결과적으로 브라우저는 거부했다고 하더라도, 서버는 처리해버리는 결과가 생길 수 있기 때문에 서버가 안전하게 요청을 주고받을 수 있도록 브라우저에서 해당 요청(CORS)을 처리합니다.

### 🙄 **실제 요청에서는 어떻게 처리하나요?**

---

CORS는 다른 Origin에 대한 요청을 허용하는 정책입니다.

같은 Origin에서 http 통신을 하는 경우 알아서 cookie가 request header에 들어가지만, 교차 출처로 요청하는 상황에서는 그렇지 않습니다.

Origin이 다른 http 통신에서는 request header에 쿠키가 자동으로 들어가기 않기 때문에 서버에게 또는 클라이언트에게 내가 어떤 요청을 보내는 지 알려줄 필요가 있습니다.

```jsx
프론트 > WithCredentials: true

서버 > Access-Control-Allow-Credentials: true
```

### CORS에 대한 문제 해결

---

서버쪽에서 response header에 Access-Control 관련 설정을 해주어야 된다. 프론트에서 해결하는 방법도 있지만, 이것은 일반적인 방법이 아니기 때문이다.

```jsx
Access-Control-Allow-Origin: <https://foo.example>
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

### **Access-Control-Allow-Origin**

- 현재 서비스하고 있는 웹사이트의 origin 이나 리버스 프록시 같은 서버를 통할 경우 해당 프록시 서버의 origin 을 입력하는 게 바람직하다.

### **Access-Control-Allow-Methods**

- _를 입력하지 말고, 명시적으로 선언해주어야 된다. Chrome 만 서비스할거라고 하면 크게 상관은 없지만 보통 대부분의 서비스들은 다양한 웹브라우저 환경을 고려해야한다. 하지만 위와같이 생각보다 많은 브라우저 및 환경에서 _ 를 해당 헤더에 쓰는걸 허락하지 않는다.

### **Access-Control-Allow-Headers**

- 이 키값에 대한 값으로 \* 를 썼을때는 두가지 문제가 있다. 첫번째로 위에 언급한 브라우저 호환성 이슈 문제가 있다.

![https://miro.medium.com/max/1400/0*97cq1hNBLFCAnfLa.jpg](https://miro.medium.com/max/1400/0*97cq1hNBLFCAnfLa.jpg)

두번째로 한가지 예외가 있다. 보통 로그인한 회원의 인증용도로 많이 쓰이는 Authorization Header는 \*(와일드카드) 항목에 포함되지 않는다. 그래서 해당 Authorization 헤더를 쓰고 싶으면 **반드시 명시적으로 선언해줘야한다.**

### **Access-Control-Max-Age(초단위)**

- 굳이 지정하지 않아도 브라우저 마다 default값으로 가지지않고 브라우저가 가지고 있는 값보다 지정한 Access-Control-Max-Age 값이 클경우 해당 값을 따르게 됩니다.
