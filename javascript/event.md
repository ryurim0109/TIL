## ๐ ์ด๋ฒคํธ ์ ํ
- ๋ธ๋ผ์ฐ์ ์์ ์์์ ๋ํ event๊ฐ ๋ฐ์ํ๋ฉด ํด๋น ์์์ ํ ๋น๋ handler๊ฐ ๋์ํ๊ฒ ๋ฉ๋๋ค.
- handler๊ฐ ๋์ํ๋ฉด์ Bubbling๊ณผ Capturing์ด ๋ฐ์ํ๊ฒ ๋ฉ๋๋ค.

![๋ฒ๋ธ๋ง ์บก์ฒ๋ง ์ด๋ฏธ์ง](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FspQ8n%2FbtrEPcNtKDB%2FEp7S2Ld36WTRWx4d2khW01%2Fimg.png)

### ๐ ๋ฒ๋ธ๋ง
    ๐ฑ bubbling์ ํน์  ์์์์ event๊ฐ ๋ฐ์ํ์ ๋ ์์ ์์๋ก event๊ฐ ์ ํ๋๋ ๊ฒ์ ์๋ฏธํฉ๋๋ค.
    ๐ฑ HTML์์๋ ํธ๋ฆฌ ํ์์ผ๋ก ๋๋ฉํ์ด์ง์์ <Body />๊ฐ ์ต์์ ์์๊ฐ ๋ฉ๋๋ค. 
    ๐ฑ ๊ทธ ๋ฐ์ผ๋ก ์์ ์์๋ค์ด ์๊ฒ ๋ฉ๋๋ค.
    ๐ฑ ๋ธ๋ผ์ฐ์ ๋ ์ด๋ฒคํธ๋ฅผ ํ์ ์ปดํฌ๋ํธ์์ ์์ ์ปดํฌ๋ํธ๋ก ์ ํ์ํค๋ ๋ฐฉ์์ ๋ปํฉ๋๋ค.

### ์บก์ฒ๋ง
    ๐ฑ bubbling์ ํน์  ์์์์ event๊ฐ ๋ฐ์ํ์ ๋ ํ์ ์์๋ก event๊ฐ ์ ํ๋๋ ๊ฒ์ ์๋ฏธํฉ๋๋ค.
    ๐ฑ ์ฆ, ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ element๋ถํฐ ์์๋ค์๊ฒ ์์ฐจ์ ์ผ๋ก ์ด๋ฒคํธ๊ฐ ์ ํ๋๋ ๋ฐฉ์์๋๋ค.

### ๐ Event ์ค๋จ๋ฐฉ๋ฒ (4๊ฐ์ง)

    1๏ธโฃ event.preventDefault()
- ๐ฑ event.preventDeafult()๋ ์ด๋ฒคํธ์ ๊ธฐ๋ณธ ๋์์ ์ค๋จ์ํต๋๋ค.
- ๐ฑ html์ ํ๊ทธ๋ค ์ค์์ a ํ๊ทธ ๊ฐ์ ๊ฒฝ์ฐ์ ์ง์ ํ ๋งํฌ๋ก ํ์ด์ง๋ฅผ ์ด๋ํ๋๋ฐ ์ด๋ฌํ ๋์์ ์ค๋จ์ํต๋๋ค.

๐ a ํ๊ทธ์ href ์์ฑ์ด ์ค๋จ๋์ด ํ์ด์ง ์ด๋์ด ์ผ์ด๋์ง ์์ง๋ง, bubbling์ด ๋ฐ์ํ์ฌ ์ด๋ฒคํธ ์ ํ๋ ๊ทธ๋๋ก ์ผ์ด๋ฉ๋๋ค.

    2๏ธโฃ event.stopPropagation()

- ๐ฑ event.stopPropagation()์ ์ด๋ฒคํธ ์ ํ๋ฅผ ์ค๋จ์ํต๋๋ค. 
- ๐ฑ bubbling ์ด๋ capturing์ ๋ง์์ผํ๋ ๊ฒฝ์ฐ์ ์ฌ์ฉํฉ๋๋ค.

๐ ์ด๋ฒคํธ ์ ํ๊ฐ ์ค๋จ๋์ด ๋ฒ๋ธ๋ง์ด ๋ฐ์ํ์ง ์์ง๋ง target์ ๊ธฐ๋ณธ ๋์๊ณผ ๋ค๋ฅธ event handler์ ๋์๊น์ง ๋ง์์ฃผ์ง๋ ์์ต๋๋ค. 

๐ ๋ฐ๋ผ์ target์ ๋ค๋ฅธ event handler๊ฐ ๊ฑธ๋ ค์๊ฑฐ๋ ๊ธฐ๋ณธ ๋์์ด ์๋ ๊ฒฝ์ฐ์๋ ๊ทธ๋๋ก ๋์ํ๊ฒ ๋ฉ๋๋ค.

    3๏ธโฃ event.stopImmediatePropagation()

- ๐ฑ event.stopImmediatePropagation()์ ์ด๋ฒคํธ ์ ํ๋ฅผ ์ค๋จ์ํค๊ณ  ๋ค๋ฅธ event handler์ ๋์๋ ๋ง์์ค๋๋ค. 
- ๐ฑ ๋ฐ๋ผ์ target์ด ๊ธฐ๋ณธ ๋์์ ๊ฐ์ง๊ณ  ์๋ ๊ฒฝ์ฐ์ ๊ธฐ๋ณธ ๋์๋ง ์ผ์ด๋๊ฒ ๋ฉ๋๋ค.

๐ event.stopImmediatePropagation()์ ์ด๋ฒคํธ ์ ํ๋ฅผ ์ค๋จํ๊ณ  ๊ฐ์ target์ ๊ฑธ๋ฆฐ ๋ค๋ฅธ handler์ ๋์๋ ์ค๋จ์ํต๋๋ค.

    4๏ธโฃ return false

- ๐ฑ return false๋ onclick handler์ ์ฌ์ฉํ์ ๊ฒฝ์ฐ์ ๋ํ์ฌ event.preventDefault()๋ฅผ ์ฌ์ฉํ ๊ฒ๊ณผ ๊ฐ์ ๋์์ ํฉ๋๋ค. 
- ๐ฑ ๋ฐ๋ผ์ ์ด๋ฒคํธ ์ ํ๋ ๋ฐ์ํ์ง๋ง ๊ธฐ๋ณธ ๋์์ ์ค๋จ๋๊ฒ ๋ฉ๋๋ค.



