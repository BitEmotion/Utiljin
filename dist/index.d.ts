/** 파라미터로 들어간 숫자 만큼 배열의 요소가 생김(0부터 1, 2,3... 식으로)
 * @param {number} length
 * @return {Array<number>}
 */
declare const makeDummyNumberArray: (length: number) => Array<number>;
/** 첫번째 파라미터로 들어간 숫자 만큼 배열의 요소가 생김
 *  두번째 파라미터에서 시작 숫자를 정함
 *  length가 5 fromNumber 7이면 (7, 8, 9, 10, 11)
 *  length가 3 fromNumber 12이면 (12, 13, 14)
 * @param {number} length
 * @param {number} fromNumber
 * @return {Array<number>}
 */
declare const makeDummyNumberArray_fromNumber: (length: number, fromNumber: number) => Array<number>;
/** 파라미터로 넣은 숫자 범위 안에서 랜덤한 숫자를 가져온다
 * @param {number} num
 * @return {number}
 */
declare const getRandomNumber: (num: number) => number;
/** 3자리숫자마다 ,(콤마)를 넣는다
 * @param {number} num
 * @return {string}
 */
declare const getCommaNumber: (num: number | string) => string;
/**
 * @param {number} num
 * @param {number} fixed
 * @return {string}
 */
declare const getFixedNumber: (num: number, fixed: number) => string;
/**  isFindString
 *  str 안에 findedStr가 있으면 true
 *                       없으면 false
 * @param {string} str
 * @param {string} findedStr
 * @return {boolean}
 */
declare const isFindString: (str: string, findedStr: string) => boolean;
/** renderPrice
 *
 * @param {string | number} param_price    107,000,000
 * @return {string}                       => 1억 700만
 */
declare const renderPriceWon: (param_price: string | number) => string;
/** 임시 데이터를 채우기 위해 사용할 함수 */
/** createDummyData
 * @param {number} lengthNumber
 * @param {number} rangeNumber
 * @param {number} decimalPoint
 * @return {Array<number>}
 */
declare const createDummyData: (lengthNumber: number, rangeNumber: number, decimalPoint: number) => Array<number>;
/** 임시 데이터를 채우기 위해 사용할 함수 */
/** createDummyData
 * @param {Array<number>} arr
 * @param {number} num
 * @return {string}
 */
declare const createDummyData_noRandom: (lengthNumber: number, startNumber: number) => Array<number>;
declare const getDatetime: (param_date?: string | undefined) => string;
/**
 *
 * @param {number} param_month
 * @param {string} baseDate
 * @returns {string}
 */
declare const getDateTimePrevMonth_fromBaseTime: (param_month: number, baseDate?: string | undefined) => string;
/**
 *
 * @param {number} param_month
 * @param {string} baseDate
 * @returns {string}
 */
declare const getDateTimePrevMonth_fromBaseTime_type2: (param_month: number, baseDate?: string | undefined) => string;
/** averagePair
 * @param {Array<number>} arr
 * @param {number} num
 * @return {boolean}
 */
declare const averagePair: (arr: Array<number>, num: number) => boolean;
declare const compareTriplets: (aArr: Array<number>, bArr: Array<number>) => Array<number>;
/** 숫자를 16진수로 변경
 *
 * @param {number} n
 * @returns {string}
 */
declare const toHex: (n: number) => string;
/**
 *
 * @param {string} param_string
 * @param {string} param_char
 * @returns {string}
 */
declare const deleteCharFromString: (param_string: string, param_char: string) => string;
declare const diagonalDifference: (arr: Array<any>) => number;
/**

 * @param {number} num
 * @returns {number}
 */
declare const factorial: (num: number) => number;
/** fibonaci
 *
 * @param {number} num
 * @returns {number}
 */
declare const fibonaci: (num: number) => number;
/**
 *
 * @param minNum
 * @param maxNum
 * @returns
 */
declare const gcd: (minNum: number, maxNum: number) => number;
declare const hanoi: (n: number, from: number, to: number) => void;
declare const hanoi_noRecursive: (n: number, from: number, by: number, to: number) => void;
declare const getAllSubsets: (theArray: Array<any>) => any;
declare const infixToPostfix: (param_str: string) => string;
/**
 *
 * @param {Array<number>} arr
 * @returns {number}
 */
declare const lcm: (arr: Array<number>) => number;
declare const linearSearch: (arr: Array<number>, num: number) => number;
declare const makePermanum: (n: number) => number;
declare const permute: (permutation: Array<number>) => number[][];
declare const repeatString: (str: string, n: number) => string;
declare const simpleArraySum: (arr: Array<number>) => number;
declare const transposeMatrix: (arr: Array<Array<number>>) => number[][];
/**
 * change the name of the extension
 * @param {string} name
 * @param {string} extName
 * @return {string}
 */
declare const changeExtName: (name: string, extName: string) => string;
/** 버블 정렬
 * @param {Array<number>} array
 * @return {Array<number>}
 */
declare const bubbleSort: (array: Array<number>) => Array<number>;
/** 선택 정렬
 * @param {Array<number>} array
 * @return {Array<number>}
 */
declare const selectionSort: (array: Array<number>) => Array<number>;
export { makeDummyNumberArray, makeDummyNumberArray_fromNumber, getRandomNumber, getCommaNumber, getFixedNumber, isFindString, renderPriceWon, averagePair, compareTriplets, toHex, diagonalDifference, deleteCharFromString, factorial, fibonaci, gcd, hanoi, hanoi_noRecursive, getAllSubsets, infixToPostfix, lcm, linearSearch, makePermanum, permute, repeatString, simpleArraySum, transposeMatrix, changeExtName, createDummyData, createDummyData_noRandom, bubbleSort, selectionSort, getDatetime, getDateTimePrevMonth_fromBaseTime, getDateTimePrevMonth_fromBaseTime_type2 };
