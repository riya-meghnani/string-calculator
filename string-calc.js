export function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    else {
        if (numbers.startsWith('//')) {
            numbers = numbers.split('//;').join();
        }
        let no = numbers.split(/[\n,;]+/);
        if (no.length == 1) {
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