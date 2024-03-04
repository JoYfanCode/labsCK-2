var laba5;
(function (laba5) {
    const data = [];
    const record = (param) => {
        data.push(param);
        console.log('Record: ' + param + ' added!');
    };
    function remove() {
        data.pop();
        console.log('Record removed!');
    }
    let index = 0;
    let interval = setInterval(() => {
        record(index);
        index++;
        setTimeout(() => {
            remove();
        }, 10000);
    }, 10000);
    setTimeout(() => {
        clearInterval(interval);
    }, 60000);
    function extFunction(x) {
        console.log(x);
        return (y) => console.log(x + y);
    }
    const intFunction = extFunction("Hello ");
    intFunction("World");
})(laba5 || (laba5 = {}));
/*Дополните код таким образом, чтобы вызов метода
record выполнялся каждые 10 секунд до истечения 1
минуты, при этом каждая запись должна удаляться
после добавления через 10 секунд */ 
