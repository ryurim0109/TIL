## π νλ‘ν νμμ μ΄ν΄

- μλ°μ€ν¬λ¦½νΈλ ν΄λμ€λΌλ κ°λμ΄ μμ΅λλ€.
- κ·Έλμ κΈ°μ‘΄μ κ°μ²΄λ₯Ό λ³΅μ¬νμ¬ μλ‘μ΄ κ°μ²΄λ₯Ό μμ±νλ νλ‘ν νμ κΈ°λ°μ μΈμ΄μλλ€.
- νλ‘ν νμ κΈ°λ° μΈμ΄λ κ°μ²΄ μνμΈ νλ‘ν νμμ μ΄μ©νμ¬ μλ‘μ΄ κ°μ²΄λ₯Ό λ§λ€μ΄λλλ€.
- μμ±λ κ°μ²΄ μ­μ λ λ€λ₯Έ κ°μ²΄μ μνμ΄ λ  μ μμ΅λλ€.
- νλ‘ν νμμ κ°μ²΄λ₯Ό νμ₯νκ³  κ°μ²΄ μ§ν₯μ μΈ νλ‘κ·Έλλ°μ ν  μ μκ² ν΄μ€λλ€.
- νλ‘ν νμμ  κ°μ²΄λ₯Ό μ°Έμ‘°νλ prototype μμ±κ³Ό κ°μ²΄ λ©€λ²μΈ protoμμ±μ΄ μ°Έμ‘°νλ μ¨μ λ§ν¬κ° μμ΅λλ€.

### π μμ, νλ‘ν νμ prototype
    π©βπ» μ½μμ°½μ μλπ__proto__ μ΄κ²μ νλ‘ν νμμ΄λΌκ³  νλ€.
    π©βπ» proto λ μμ±λ κ°μ²΄(new) λλ json κ°μ²΄μ μ‘΄μ¬νλ€. 
    π©βπ» μ¦, μμ κ°μ²΄λ₯Ό λνλ΄λ μμ±μ΄λ€.
    π©βπ» prototype(__proto__μ type)μ μλ°μ€ν¬λ¦½νΈ μμ±μν¨μ(ν΄λμ€)μ μμ± λλ λ©μλλ₯Ό μΆκ°ν λ μ¬μ©νλ μμ±μ΄λ€. 
    π©βπ» κ°μ²΄μμ±μ prototypeμ ν΅ν΄ μ μλ μμ± λλ λ©μλλ new λ₯Ό ν΅ν΄ κ°μ²΄μμ±μ κ³΅μ νλ€.
    π©βπ» μλ°μ€ν¬λ¦½νΈ κ°μ²΄λ Prototypeμ΄λΌλ λ΄λΆ νλ‘νΌν°κ° μ‘΄μ¬νλ€.
    π©βπ» κ±°μ λͺ¨λ  κ°μ²΄κ° μμ± μμ μ μ΄ νλ‘νΌν°μ nullμ΄ μλ κ°μ΄ ν λΉλλ€.
```javascript
    const user={
        name:"riri"
    }
    user.name // "riri"
    user.hasOwnProperty('name'); // true
    user.hasOwnProperty('age'); // false


```
### π ν¨μμ κ°μ²΄μ λ΄λΆ κ΅¬μ‘°

- μλ°μ€ν¬λ¦½νΈμμλ ν¨μλ₯Ό μ μνκ³ , νμ±λ¨κ³μ λ€μ΄κ°λ©΄ λ΄λΆμ μΌλ‘ μνλλ μμμ΄ μμ΅λλ€. 
- ν¨μ λ©€λ²λ‘ prototypeμμ±μ΄ μμ΅λλ€.
- μ΄ μμ±μ λ€λ₯Έ κ³³μ μμ±λ ν¨μμ΄λ¦μ νλ‘ν νμ κ°μ²΄λ₯Ό μ°Έμ‘°ν©λλ€.
- νλ‘ν νμ κ°μ²΄ λ©€λ²μΈ constructorμμ±μ ν¨μλ₯Ό μ°Έμ‘°νλ λ΄λΆ κ΅¬μ‘°λ₯Ό κ°μ§λλ€.

### π νλ‘ν νμ κ°μ²΄λ? 

- ν¨μλ₯Ό μ μνλ©΄ λ€λ₯Έ κ³³μ μμ±λλ νλ‘ν νμ κ°μ²΄λ μμ μ΄ λ€λ₯Έ κ°μ²΄μ μνμ΄ λλ κ°μ²΄μλλ€. 
- λͺ¨λ  κ°μ²΄λ νλ‘ν νμ κ°μ²΄μ μ κ·Όν  μ μμ΅λλ€.
- νλ‘ν νμ κ°μ²΄λ λμ μΌλ‘ λ°νμ λ©€λ²λ₯Ό μΆκ°ν  μ μμ΅λλ€. 
- κ°μ μνμ λ³΅μ¬λ‘ μμ±λ λͺ¨λ  κ°μ²΄λ μΆκ°λ λ©€λ²λ₯Ό μ¬μ©ν  μ μμ΅λλ€.

### π νλ‘ν νμμ΄λ?

- μλ°μ€ν¬λ¦½νΈμμ κΈ°λ³Έ λ°μ΄ν° νμμ μ μΈν λͺ¨λ  κ²μ΄ κ°μ²΄μλλ€.
- κ°μ²΄κ° λ§λ€μ΄μ§κΈ° μν΄μλ μμ μ λ§λλ λ° μ¬μ©λ μνμΈ νλ‘ν νμ κ°μ²΄λ₯Ό μ΄μ©νμ¬ κ°μ²΄λ₯Ό λ§λ­λλ€.
- μ΄λ λ§λ€μ΄μ§ κ°μ²΄ μμ π__proto__(λΉνμ€) μμ±μ΄ μμ μ λ§λ€μ΄λΈ μνμ μλ―Ένλ νλ‘ν νμ κ°μ²΄λ₯Ό μ°Έμ‘°νλ μ¨κ²¨μ§ λ§ν¬κ° μμ΅λλ€.
- μ΄ μ¨κ²¨μ§ λ§ν¬λ₯Ό νλ‘ν νμμ΄λΌκ³  ν©λλ€.