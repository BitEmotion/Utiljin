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
declare const nullToZero: (param_nullAble: null | string) => string;
declare const nullToOne: (param_nullAble: null | string) => string;
/**
 * @param {number} num
 * @return {number}
 */
declare const getRandomNumber: (num: number) => number;
/**
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
/** str 안에 findedStr가 있으면 true
 *                       없으면 false
 * @param {string} str
 * @param {string} findedStr
 * @return {boolean}
 */
declare const isFindString: (str: string, findedStr: string) => boolean;
declare const renderPrice: (param_price: string | number) => string;
declare const averagePair: (arr: Array<number>, num: number) => boolean;
declare const compareTriplets: (aArr: Array<number>, bArr: Array<number>) => Array<number>;
declare const toHex: (n: number) => string;
declare const deleteCharFromString: (param_string: string, param_char: string) => string;
declare const diagonalDifference: (arr: Array<any>) => number;
declare const factorial: (n: number) => number;
declare const fibonaci: (x: number) => number;
declare const fibonaci_norecursive: (x: number) => number;
declare const gcd: (minNum: number, maxNum: number) => number;
declare const hanoi: (n: number, from: number, to: number) => void;
declare const hanoi_noRecursive: (n: number, from: number, by: number, to: number) => void;
declare const getAllSubsets: (theArray: Array<any>) => any;
declare const infixToPostfix: (param_str: string) => string;
declare const lcm: (arr: Array<number>) => number;
declare const linearSearch: (arr: Array<number>, num: number) => number;
declare const makePermanum: (n: number) => number;
declare const permute: (permutation: Array<number>) => number[][];
declare const repeatString: (str: string, n: number) => string;
declare const simpleArraySum: (arr: Array<number>) => number;
declare const transposeMatrix: (arr: Array<Array<number>>) => number[][];
export { makeDummyNumberArray, makeDummyNumberArray_fromNumber, nullToZero, nullToOne, getRandomNumber, getCommaNumber, getFixedNumber, isFindString, renderPrice, averagePair, compareTriplets, toHex, diagonalDifference, deleteCharFromString, factorial, fibonaci, fibonaci_norecursive, gcd, hanoi, hanoi_noRecursive, getAllSubsets, infixToPostfix, lcm, linearSearch, makePermanum, permute, repeatString, simpleArraySum, transposeMatrix };
