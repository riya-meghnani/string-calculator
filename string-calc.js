export function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    else {
        if (numbers.startsWith('//')) {
            numbers = numbers.split('//;').join();
        }
        let no = numbers.split(/[\n,;]+/);
        if (no.find(num => parseInt(num) < 0)) {
            throw new Error('Negative number is not allowed');
        }
        else if (no.length == 1 && !isNaN(parseInt(no[0], 10))) {
            return 1
        }
        else {
            return no.reduce((acc, element) => {
                const num = parseInt(element, 10);
                if (!isNaN(num)) { 
                    return acc + num;
                }
                return acc;
            }, 0);
        
        }
    }
}