# 1. Utiljin
Utiljin is a utility function created by Jinyong-Lee  

<br>

# 2. Installation
you can install local or globally  

<br>

#### install utiljin local    
```
npm install utiljin 
```

#### install utiljin globally  
```
npm install -g utiljin
```

<br>

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

<br>

2. makeDummyNumberArray_fromNumber
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

<br>

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

<br>

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

<br>

5. getFixedNumber
```
/** change the number of decimal places
* @param  {number}  num   변경할 숫자
* @param  {number}  fixed 소숫점 자릿수
* @return  {string}
*/
Utiljin.getFixedNumber(10,2);
=> "10.00"
```

<br>

6. isFindString
```
/** Returns true if foundStr is in str, false otherwise
* 
* @param  {string}  str
* @param  {string}  findedStr
* @return  {boolean}
*/
Utiljin.isFindString("karaoke","oke");
=> true
Utiljin.isFindString("jinyong","jacky");
=> false
```

<br>

7. renderPrice
```
/** Change the number to Korean Won
*
* @param  {string | number}  param_price 
* @return  {string} 
*/
Utiljin.renderPrice("107,000,000");
=> 1억 700만
Utiljin.renderPrice(470000000);
=> 4억 7천만
```

<br>


8. createDummyData
```
/** Function to use to populate temporary data

* @param  {number}  lengthNumber
* @param  {number}  rangeNumber
* @param  {number}  decimalPoint
* @return  {Array<number>}
*/
Utiljin.createDummyData(10,5,3);
=> [0.695, 0.42, 2.12, 4.751, 2.95, 1.499, 3.555, 1.263, 2.137, 1.188]
Utiljin.createDummyData(10,5,0);
=> [4, 4, 1, 3, 2, 5, 5, 3, 2, 3]
```

<br>


9. createDummyData_noRandom
```
/**   Function to use to populate temporary data (without random values)

* @param  {Array<number>}  arr
* @param  {number}  num
* @return  {string}
*/
Utiljin.createDummyData_noRandom(10,5);
=> [5, 4, 3, 2, 1, 0, -1, -2, -3, -4]
Utiljin.createDummyData_noRandom(10,10);
=> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

<br>

10. bubbleSort
```
/**   bubbleSort

* @param  {Array<number>}  array
* @return  {Array<number>}
*/
Utiljin.bubbleSort([13,15,6,8,10]);
=> [6, 8, 10, 13, 15]
Utiljin.bubbleSort([5,2,4,1,3]);
=> [1, 2, 3, 4, 5]
```

<br>

11. selectionSort
```
/**   selectionSort

* @param  {Array<number>}  array
* @return  {Array<number>}
*/
Utiljin.selectionSort([13,15,6,8,10]);
=> [6, 8, 10, 13, 15]
Utiljin.selectionSort([5,2,4,1,3]);
=> [1, 2, 3, 4, 5]
```

<br>

12. averagePair
```
/**  true if the average of the two selected numbers in the array matches the second argument (expression 2 below) false if not matched (expression 1 below)

* @param  {Array<number>}  arr
* @param  {number}  num
* @return  {boolean}
*/
Utiljin.averagePair([1,2,3,4,5],1);
=> false
Utiljin.averagePair([1,2,3,4,5],2);
=> true
```

<br>

13. getDatetime
```
/** Get Now Time

* @return  {string}
*/
Utiljin.getDatetime();
=> '22-04-05  15 : 05 : 25' (now time)
```

<br>

14. getDateTimePrevMonth_fromBaseTime
```
/** Function to get the date of the previous month from the base date

* @param  {number}  param_month
* @param  {string}  baseDate?
* @returns  {string}
*/
Utiljin.getDateTimePrevMonth_fromBaseTime(4);
=> '2021-12' (now time : 2022-04)
Utiljin.getDateTimePrevMonth_fromBaseTime(10, "2022-01");
=> '2021-03'
```


<br>

15. toHex
```
/** convert number to hexadecimal

*
* @param  {number}  num
* @returns  {string}
*/
Utiljin.toHex(100);
=> '64'
Utiljin.toHex(1000);
=> '3e8'
```


<br>

16. deleteCharFromString
```
/** If the character that is the second argument exists in the first argument string, it is removed.

* @param  {string}  param_string
* @param  {string}  param_char
* @returns  {string}
*/
Utiljin.deleteCharFromString("leejinyong","e")
=> 'ljinyong'
```

<br>


17. factorial
```
/** factorial.

* @param  {number}  num
* @returns  {number}
*/
Utiljin.factorial(5);
=> 120
Utiljin.factorial(10);
=> 3628800
```


<br>


18. fibonaci
```
/** fibonaci.

* @param  {number}  num
* @returns  {number}
*/
Utiljin.factorial(10);
=> 55
Utiljin.factorial(100);
=> 354224848179262000000
```

<br>

19. gcd
```
/**  get Greatest Common Divisor

* @param {number} minNum
* @param {number} maxNum
* @returns {number}
*/
Utiljin.gcd(8,12);
=>  4
Utiljin.gcd(20,10);
=> 10
```

<br>

20. lcm
```
/**  get Least Common Multiple.

* @param  {Array<number>}  arr
* @returns  {number}
*/
Utiljin.lcm([330, 75, 450, 225]);
=> 4950
Utiljin.lcm([1,2,3,4,5,6,7,8,9]);
=> 2520
Utiljin.lcm([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
=> 360360
```

<br>

# 4. Bug Report

> If you find some problem, contact me dhzl3332@gmail.com 


## keyword

<span  style="color: red">Util</span>  <span  style="color: red">Typescript</span> <span  style="color: red">Javascript</span>
