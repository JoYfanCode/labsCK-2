/** Part 1 - START **/
/** 1. Перейдите на сайт: https://nodejs.org */
/** 2. Установите программу без дополнительных телодвижений (просто тыкайте далее) */
/** 3. После установки откройте консоль и введите "npm --help".
 * Если всё хорошо, то сработает консольная программа пакетного менеджера от Node.JS.
 * */
/** 4. Создайте пустой проект в вашей IDE (Желательно Visual Studio Code или JetBrains WebStorm). */
/** 5. Откройте командную строку в папке с проектом, наберите команду: "npm init" */
/** 6. Установите следующие пакеты с помощью данных команд:
 * "npm install -g typescript"
 * "npm install @types/node --save-dev"
 * */
/** 7. Наберите команду в командную строку: "tsc --init" */
/** 8. В появившимся файле tsconfig.json замените содержимое на ниже написанное:
 * {
 *   "compilerOptions": {
 *     "composite": true,
 *     "outDir": "./dist",
 *     "rootDir": "src",
 *     "declaration": true,
 *     "noImplicitAny": true,
 *     "esModuleInterop": true,
 *     "module": "commonjs",
 *     "target": "es6",
 *     "types": [
 *       "node"
 *     ],
 *     "lib": [
 *       "es6",
 *       "dom"
 *     ]
 *   },
 *   "exclude": [
 *     "node_modules",
 *     "dist"
 *   ]
 * }
 * */
/** 9. Создайте файл с расширением .ts и напишите простой скрипт, выводящий алерт с Hello, world. */
/** 10. В консоли наберите команду tsc --build для сборки файлов проекта.
 * После успешной компиляции вы сможете найти и запустить файл .js из папки dist */
/** Part 1 - END **/
/** Part 2 - START **/
declare function someSimpleFunc(p1: string): string;
declare let someArrowFunc: (p1: string) => string;
declare const resSimpleFunc: string;
declare const resArrowFunc: string;
/** Part 2 - END **/
/** Part 3 - START **/
declare function makeId(len: number): string;
declare const firstName: string;
declare let lastName: string;
declare const middleName: string;
declare const passport: any;
declare let age: number;
declare const allData: unknown;
/** Part 3 - END **/
/** Part 4 - START **/
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const data: ToJsonStringify;
declare const jsonStringify: string;
declare const someObject: any;
/** Part 4 - END **/
/**
 * Дана квадратная матрица (двумерный массив) размера MxM, заполненная нулями.
 * Необходимо заменить элементы матрицы единицами в шахматном порядке.
 * Причём, если M нечётное, то левый верхний элемент начинается с 1, иначе с 0.
 * Примеры:
 *
 * 5х5
 * 0  0  0  0  0    1  0  1  0  1
 * 0  0  0  0  0    0  1  0  1  0
 * 0  0  0  0  0 -> 1  0  1  0  1
 * 0  0  0  0  0    0  1  0  1  0
 * 0  0  0  0  0    1  0  1  0  1
 *
 * 6х6
 * 0  0  0  0  0  0    0  1  0  1  0  1
 * 0  0  0  0  0  0    1  0  1  0  1  0
 * 0  0  0  0  0  0 -> 0  1  0  1  0  1
 * 0  0  0  0  0  0 -> 1  0  1  0  1  0
 * 0  0  0  0  0  0    0  1  0  1  0  1
 * 0  0  0  0  0  0    1  0  1  0  1  0
 **/
declare function getChessDesk(m: number): number[][];
declare const desk5: number[][];
declare const desk6: number[][];
