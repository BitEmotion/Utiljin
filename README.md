# 1. Utiljin
Utiljin is a utility function created by Jinyong-Lee

# 2. Installation
you can install local or globally
## install utiljin local
npm install utiljin
## install utiljin globally
npm install -g typescript

# 3. Function list
0. Import
```
const Utiljin = require("utiljin");
```

1. makeDummyNumberArray
```
/**  Array elements are created as many as the number entered as parameters (from 0 to 1, 2, 3...)
* @param  {number}  length
* @return  {Array<number>}
*/

Utiljin.makeDummyNumberArray(10);
=> [0,1,2,3,4,5,6,7,8,9]
Utiljin.makeDummyNumberArray(15);
=> [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
```

2. makeDummyNumberArray
```
/** Array elements are created as many as the number entered as the first parameter.
* Set the starting number in the second parameter
* length가 5 fromNumber 7이면 (7, 8, 9, 10, 11)
* length가 3 fromNumber 12이면 (12, 13, 14)
* @param  {number}  length
* @param  {number}  fromNumber
* @return  {Array<number>}
*/
Utiljin.makeDummyNumberArray_fromNumber(5, 7)
=> [7, 8, 9, 10, 11]
Utiljin.makeDummyNumberArray_fromNumber(3, 12)
=> [12, 13, 14]
```

3. getRandomNumber
```
/**   
Get a random number within the range of numbers entered as a parameter.
* @param  {number}  num
* @return  {number}
*/
Utiljin.getRandomNumber(100)
=> 57 (random number from 0 to 100)
```

4. getCommaNumber
```
/**   
Insert a , (comma) for every 3 digits
* @param  {number}  num
* @return  {string}
*/
Utiljin.getCommaNumber(1000000000)
=> "1,000,000,000"
```

5. getFixedNumber
```
/** 숫자의 소숫점 자릿수를 변경한다
* @param  {number}  num   변경할 숫자
* @param  {number}  fixed 소숫점 자릿수
* @return  {string}
*/
Utiljin.getFixedNumber(10,2);
=> "10.00"
```

6. isFindString
```
/** isFindString
* str 안에 findedStr가 있으면 true, 없으면 false 리턴
* @param  {string}  str
* @param  {string}  findedStr
* @return  {boolean}
*/
Utiljin.getFixedNumber("karaoke","oke");
=> true
```


# Bug Report

> If you fine some ploblem, contact me dhzl3332@gmail.com 
