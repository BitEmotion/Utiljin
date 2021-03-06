"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateTimePrevMonth_fromBaseTime_type2 = exports.getDateTimePrevMonth_fromBaseTime = exports.getDatetime = exports.selectionSort = exports.bubbleSort = exports.createDummyData_noRandom = exports.createDummyData = exports.changeExtName = exports.transposeMatrix = exports.simpleArraySum = exports.repeatString = exports.permute = exports.makePermanum = exports.linearSearch = exports.lcm = exports.infixToPostfix = exports.getAllSubsets = exports.hanoi_noRecursive = exports.hanoi = exports.gcd = exports.fibonaci = exports.factorial = exports.deleteCharFromString = exports.diagonalDifference = exports.toHex = exports.compareTriplets = exports.averagePair = exports.renderPriceWon = exports.isFindString = exports.getFixedNumber = exports.getCommaNumber = exports.getRandomNumber = exports.makeDummyNumberArray_fromNumber = exports.makeDummyNumberArray = void 0;
/** 파라미터로 들어간 숫자 만큼 배열의 요소가 생김(0부터 1, 2,3... 식으로)
 * @param {number} length
 * @return {Array<number>}
 */
const makeDummyNumberArray = (length) => {
    return Array.from({ length }, (_, v) => v);
};
exports.makeDummyNumberArray = makeDummyNumberArray;
/** 첫번째 파라미터로 들어간 숫자 만큼 배열의 요소가 생김
 *  두번째 파라미터에서 시작 숫자를 정함
 *  length가 5 fromNumber 7이면 (7, 8, 9, 10, 11)
 *  length가 3 fromNumber 12이면 (12, 13, 14)
 * @param {number} length
 * @param {number} fromNumber
 * @return {Array<number>}
 */
const makeDummyNumberArray_fromNumber = (length, fromNumber) => {
    return Array.from({ length }, (_, v) => v + fromNumber);
};
exports.makeDummyNumberArray_fromNumber = makeDummyNumberArray_fromNumber;
/** 파라미터로 넣은 숫자 범위 안에서 랜덤한 숫자를 가져온다
 * @param {number} num
 * @return {number}
 */
const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};
exports.getRandomNumber = getRandomNumber;
/** 3자리숫자마다 ,(콤마)를 넣는다
 * @param {number} num
 * @return {string}
 */
const getCommaNumber = (num) => {
    if (!num) {
        return "0";
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
exports.getCommaNumber = getCommaNumber;
/**
 * @param {number} num
 * @param {number} fixed
 * @return {string}
 */
const getFixedNumber = (num, fixed) => {
    return num.toFixed(fixed);
};
exports.getFixedNumber = getFixedNumber;
/**  isFindString
 *  str 안에 findedStr가 있으면 true
 *                       없으면 false
 * @param {string} str
 * @param {string} findedStr
 * @return {boolean}
 */
const isFindString = (str, findedStr) => {
    if (str.indexOf(findedStr) != -1) {
        return true;
    }
    else {
        return false;
    }
};
exports.isFindString = isFindString;
/** renderPrice
 *
 * @param {string | number} param_price    107,000,000
 * @return {string}                       => 1억 700만
 */
const renderPriceWon = (param_price) => {
    const setWon = (pWon) => {
        var won = (pWon + "").replace(/,/g, "");
        var arrWon = ["원", "만", "억", "조", "경", "해", "자", "양", "구", "간", "정"];
        var changeWon = "";
        var pattern = /(-?[0-9]+)([0-9]{4})/;
        while (pattern.test(won)) {
            won = won.replace(pattern, "$1,$2");
        }
        var arrCnt = won.split(",").length - 1;
        for (var ii = 0; ii < won.split(",").length; ii++) {
            if (arrWon[arrCnt] == undefined) {
                break;
            }
            var tmpwon = 0;
            for (let i = 0; i < won.split(",")[ii].length; i++) {
                var num1 = won.split(",")[ii].substring(i, i + 1);
                tmpwon = tmpwon + Number(num1);
            }
            if (tmpwon > 0) {
                changeWon += won.split(",")[ii] + arrWon[arrCnt];
            }
            arrCnt--;
        }
        return changeWon;
    };
    if (typeof param_price == "string" && param_price.indexOf("-") == 0) {
        // console.log("param_price",param_price);
        const param_price_한글 = setWon(param_price.replace("-", ""));
        return "-" + param_price_한글.replace("억0", "억").replace("억", "억 ");
    }
    else {
        const param_price_한글 = setWon(param_price);
        return param_price_한글.replace("억0", "억").replace("억", "억 ");
    }
};
exports.renderPriceWon = renderPriceWon;
/** 임시 데이터를 채우기 위해 사용할 함수 */
/** createDummyData
 * @param {number} lengthNumber
 * @param {number} rangeNumber
 * @param {number} decimalPoint
 * @return {Array<number>}
 */
const createDummyData = (lengthNumber, rangeNumber, decimalPoint) => {
    const newArr = Array.from({ length: lengthNumber }, (_, v) => v + 1);
    const newArr_mapped = newArr.map(val => {
        return parseFloat((Math.random() * rangeNumber).toFixed(decimalPoint));
    });
    return newArr_mapped;
};
exports.createDummyData = createDummyData;
/** 임시 데이터를 채우기 위해 사용할 함수 */
/** createDummyData
 * @param {Array<number>} arr
 * @param {number} num
 * @return {string}
 */
const createDummyData_noRandom = (lengthNumber, startNumber) => {
    const newArr = Array.from({ length: lengthNumber }, (_, v) => startNumber - v);
    return newArr;
};
exports.createDummyData_noRandom = createDummyData_noRandom;
const getDatetime = (param_date) => {
    let date;
    if (param_date) {
        date = new Date(param_date);
    }
    else {
        date = new Date();
    }
    // date Object를 받아오고
    let year = date.getFullYear();
    // 연도를 받아오고
    let month = date.getMonth();
    // 달을 받아옴
    let clockDate = date.getDate();
    // 요일은 숫자형태로 리턴되기때문에 미리 배열을 만듬.
    let hours = date.getHours();
    // 시간을 받아오고
    let minutes = date.getMinutes();
    // 분도 받아오고.
    let seconds = date.getSeconds();
    // 초 받아옴
    return `${year.toString().substring(2, 4)}-${month + 1 < 10
        ? `0${month + 1}`
        : month + 1}-${clockDate < 10
        ? `0${clockDate} `
        : clockDate} ` +
        `${hours < 10
            ? `0${hours}`
            : hours} : ${minutes < 10
            ? `0${minutes}`
            : minutes} : ${seconds < 10
            ? `0${seconds}`
            : seconds}`;
};
exports.getDatetime = getDatetime;
/**
 *
 * @param {number} param_month
 * @param {string} baseDate
 * @returns {string}
 */
const getDateTimePrevMonth_fromBaseTime = (param_month, baseDate) => {
    let date;
    if (baseDate) {
        date = new Date(baseDate);
    }
    else {
        date = new Date();
    }
    let clockDate = new Date(date.getFullYear(), date.getMonth() - param_month, date.getDate());
    let year = clockDate.getFullYear();
    let month = clockDate.getMonth();
    return `${year.toString()}-${month + 1 < 10
        ? `0${month + 1}`
        : month + 1}`;
};
exports.getDateTimePrevMonth_fromBaseTime = getDateTimePrevMonth_fromBaseTime;
/**
 *
 * @param {number} param_month
 * @param {string} baseDate
 * @returns {string}
 */
const getDateTimePrevMonth_fromBaseTime_type2 = (param_month, baseDate) => {
    let date;
    if (baseDate) {
        date = new Date(baseDate);
    }
    else {
        date = new Date();
    }
    let clockDate = new Date(date.getFullYear(), date.getMonth() - param_month, date.getDate());
    let year = clockDate.getFullYear();
    let month = clockDate.getMonth();
    return `${year.toString()}${month + 1 < 10
        ? `0${month + 1}`
        : month + 1}`;
};
exports.getDateTimePrevMonth_fromBaseTime_type2 = getDateTimePrevMonth_fromBaseTime_type2;
/** averagePair
 * @param {Array<number>} arr
 * @param {number} num
 * @return {boolean}
 */
const averagePair = (arr, num) => {
    let left = 0;
    let right = 1;
    let result = [];
    while (right < arr.length) {
        if (arr[left] < arr[right]) {
            result.push([arr[left], arr[right]]);
            if (right + 1 == arr.length) {
                left++;
                right = left + 1;
            }
            else {
                right++;
            }
        }
        else if (arr[left] == arr[right]) {
            result.push([arr[left], arr[right]]);
            if (right + 1 == arr.length) {
                left++;
                right = left + 1;
            }
            else {
                right++;
            }
        }
    }
    return result.map(r => r.reduce((sum, v) => (sum + v), 0) / 2).includes(num);
};
exports.averagePair = averagePair;
const compareTriplets = (aArr, bArr) => {
    let length = aArr.length;
    let aWard = 0, bWard = 0;
    while (length != 0) {
        if (aArr[length - 1] > bArr[length - 1]) {
            aWard++;
        }
        else if (aArr[length - 1] < bArr[length - 1]) {
            bWard++;
        }
        length--;
    }
    return [aWard, bWard];
};
exports.compareTriplets = compareTriplets;
/** 숫자를 16진수로 변경
 *
 * @param {number} n
 * @returns {string}
 */
const toHex = (n) => {
    if (n < 16)
        return '0' + n.toString(16);
    return n.toString(16);
};
exports.toHex = toHex;
/**
 *
 * @param {string} param_string
 * @param {string} param_char
 * @returns {string}
 */
const deleteCharFromString = (param_string, param_char) => {
    let ret_string = param_string;
    if (ret_string.indexOf(param_char) != -1) {
        do {
            const index = ret_string.indexOf(param_char);
            const firstHash = ret_string.slice(0, index);
            const lastHash = ret_string.slice(index + 1, ret_string.length);
            ret_string = firstHash + lastHash;
        } while (ret_string.indexOf(param_char) != -1);
    }
    return ret_string;
};
exports.deleteCharFromString = deleteCharFromString;
const diagonalDifference = (arr) => {
    let length = arr.length;
    let a = 0, b = 0;
    let count = 0;
    while (length != 0) {
        a += arr[length - 1][length - 1];
        b += arr[length - 1][count];
        length--;
        count++;
    }
    return Math.abs(a - b);
};
exports.diagonalDifference = diagonalDifference;
/**

 * @param {number} num
 * @returns {number}
 */
const factorial = (num) => {
    if (num == 1) {
        return 1;
    }
    let prev = num;
    while (num > 1) {
        prev = prev * (num - 1);
        num--;
    }
    return prev;
};
exports.factorial = factorial;
// const fibonaci = (x: number): number => {
//   if(x < 3) return 1;
//   return fibonaci(x-1) + fibonaci(x-2);
// };
// 스택을 활용한 반복
/** fibonaci
 *
 * @param {number} num
 * @returns {number}
 */
const fibonaci = (num) => {
    const stack = [];
    let i = 0;
    let lastIndex = num - 1;
    while (i <= lastIndex) {
        if (i < 2) {
            stack.push(1);
        }
        else {
            stack.push(stack[i - 1] + stack[i - 2]);
        }
        i++;
    }
    return stack.pop() || 0;
};
exports.fibonaci = fibonaci;
/**
 *
 * @param minNum
 * @param maxNum
 * @returns
 */
const gcd = (minNum, maxNum) => {
    let ret_answer = 0;
    let prev = {
        minNum: 0,
        maxNum: 0
    };
    const stack = [];
    stack.push({
        minNum,
        maxNum
    });
    while (prev = stack.pop()) {
        const { minNum: _minNum, maxNum: _maxNum } = prev;
        if ((_minNum % _maxNum) == 0) {
            ret_answer = _maxNum;
            break;
        }
        stack.push({
            minNum: _maxNum,
            maxNum: _minNum % _maxNum
        });
    }
    return ret_answer;
};
exports.gcd = gcd;
const hanoi = (n, from, to) => {
    if (n >= 1) {
        const temp = 6 - from - to;
        hanoi(n - 1, from, temp);
        console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
        hanoi(n - 1, temp, to);
    }
};
exports.hanoi = hanoi;
const hanoi_noRecursive = (n, from, by, to) => {
    const stack = [];
    while (1) {
        while (n > 1) {
            stack.push(to);
            stack.push(by);
            stack.push(from);
            stack.push(n);
            n--;
            stack.push(to);
            to = by;
            //@ts-ignore
            by = stack.pop();
        }
        console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
        if (stack.length) {
            //@ts-ignore
            n = stack.pop();
            //@ts-ignore
            from = stack.pop();
            //@ts-ignore
            by = stack.pop();
            //@ts-ignore
            to = stack.pop();
            console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
            n--;
            stack.push(from);
            from = by;
            //@ts-ignore
            by = stack.pop();
        }
        else {
            break;
        }
    }
};
exports.hanoi_noRecursive = hanoi_noRecursive;
const getAllSubsets = (theArray) => {
    return theArray.reduce((subsets, value) => {
        return subsets.concat(subsets.map((set) => [value, ...set]));
    }, [[]]);
};
exports.getAllSubsets = getAllSubsets;
const infixToPostfix = (param_str) => {
    const stack = [];
    let i = 0;
    let newStr = '';
    while (i < param_str.length) {
        if (parseInt(param_str[i])) {
            newStr = newStr.concat(param_str[i]);
        }
        else {
            let temp;
            switch (param_str[i]) {
                case '+':
                case '-':
                    if (stack.length == 0) {
                        stack.push(param_str[i]);
                        break;
                    }
                    for (let i = 0; i < stack.length; i++) {
                        temp = stack.pop();
                        newStr = newStr.concat(temp);
                    }
                    stack.push(param_str[i]);
                    break;
                case '*':
                case '/':
                    if (stack.length == 0) {
                        stack.push(param_str[i]);
                        break;
                    }
                    temp = stack.pop();
                    if (temp == '*' || temp == '/') {
                        newStr = newStr.concat(temp);
                    }
                    else {
                        stack.push(temp);
                    }
                    stack.push(param_str[i]);
                    break;
            }
        }
        i++;
    }
    for (let i = 0; i < stack.length + 2; i++) {
        newStr = newStr.concat(stack.pop());
    }
    return newStr;
};
exports.infixToPostfix = infixToPostfix;
// 반복문을 활용한 최소공배수 구하기 no recursive
/**
 *
 * @param {Array<number>} arr
 * @returns {number}
 */
const lcm = (arr) => {
    //calculate array`s index minMax
    let minNum = 100;
    let maxNum = 0;
    arr.forEach(el => {
        if (el > maxNum) {
            maxNum = el;
        }
        if (el < minNum) {
            minNum = el;
        }
    });
    // 배열 요소의 가장 큰 값을 기준으로 잡는다. (위의 minNum maxNum 활용)
    // 기준 maxNum에 i 배수로 곱해나간다
    // 기준 maxNum에 i 배수로 곱한다음 maxNum에 잡아놓고
    // 기준 maxNum을 제외한 나머지 원소들을 k 배수해서 maxNum과 값이 같은지 비교한다. 
    // 비교한 값이 같으면 answerNumCount값을 ++한다.
    // i 배수로 곱해진 maxNum과 나머지 k 배수한 배열 요소 값들이 전부 똑같은 시점의 maxNum이 최소공배수다.
    // 그 시점은 다른말로 하면 인자로 들어온 배열의 갯수와 answerNumCount값이 같아지는 지점이다.
    const originMaxNum = maxNum;
    const answerNum = arr.length;
    let i = 1;
    loop1: while (true) {
        let answerNumCount = 0;
        loop2: for (let j = 0; j < arr.length; j++) {
            let loop2TempNum;
            loop3: for (let k = Math.floor(maxNum / arr[j]); k < maxNum; k++) {
                //원소가 1일 경우
                if (arr[j] == 1) {
                    continue loop2;
                }
                loop2TempNum = arr[j] * k;
                if (loop2TempNum == maxNum) {
                    answerNumCount++;
                    continue loop2;
                }
                if (loop2TempNum > maxNum) {
                    maxNum = originMaxNum * i;
                    i++;
                    continue loop1;
                }
            }
            if (maxNum / arr[j] == maxNum) {
                answerNumCount++;
                continue loop2;
            }
            maxNum = originMaxNum * i;
            i++;
            continue loop1;
        }
        if (answerNum == answerNumCount) {
            break;
        }
        maxNum = originMaxNum * i;
        i++;
    }
    return maxNum;
};
exports.lcm = lcm;
const linearSearch = (arr, num) => {
    let count = 0;
    while (count < arr.length) {
        if (num == arr[count]) {
            return count;
        }
        else {
            count++;
        }
    }
    return -1;
};
exports.linearSearch = linearSearch;
const makePermanum = (n) => {
    let a = 1, b = 1;
    while (n-- != 0) {
        a *= 2;
    }
    while (a-- != 0) {
        b *= 2;
    }
    return b + 1;
};
exports.makePermanum = makePermanum;
const permute = (permutation) => {
    const permutationLength = permutation.length;
    let result = [permutation.slice()], c = new Array(permutationLength).fill(0), i = 1, k, p;
    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            c[i]++;
            i = 1;
            result.push(permutation.slice());
        }
        else {
            c[i] = 0;
            i++;
        }
    }
    return result;
};
exports.permute = permute;
const repeatString = (str, n) => {
    let result = '';
    while (n) {
        if (n % 2 === 1) {
            result += str;
        }
        if (n > 1) {
            str += str;
        }
        n >>= 1;
    }
    return result;
};
exports.repeatString = repeatString;
const simpleArraySum = (arr) => {
    return arr.reduce((sum, i) => {
        return sum + i;
    }, 0);
};
exports.simpleArraySum = simpleArraySum;
const transposeMatrix = (arr) => {
    const retArr = [];
    const temp = [];
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            temp.push(arr[j][i]);
        }
        retArr.push(temp.concat());
        let t = temp.length;
        while (t-- != 0) {
            temp.pop();
        }
    }
    return retArr;
};
exports.transposeMatrix = transposeMatrix;
/**
 * change the name of the extension
 * @param {string} name
 * @param {string} extName
 * @return {string}
 */
const changeExtName = (name, extName) => {
    const ret_extName = name.slice(0, name.indexOf(".") + 1) + extName;
    return ret_extName;
};
exports.changeExtName = changeExtName;
/** 버블 정렬
 * @param {Array<number>} array
 * @return {Array<number>}
 */
const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; ++i) {
        for (let j = 0; j < array.length - i - 1; ++j) {
            let temp;
            if (array[j] > array[j + 1]) {
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};
exports.bubbleSort = bubbleSort;
/** 선택 정렬
 * @param {Array<number>} array
 * @return {Array<number>}
 */
const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; ++i) {
        let MIN_NUM = 999999999;
        let findedIndex = 0;
        let temp;
        for (let j = i; j < array.length; ++j) {
            if (array[j] < MIN_NUM) {
                MIN_NUM = array[j];
                findedIndex = j;
            }
        }
        temp = array[i];
        array[i] = MIN_NUM;
        array[findedIndex] = temp;
    }
    return array;
};
exports.selectionSort = selectionSort;
