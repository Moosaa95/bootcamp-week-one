const handler = {
    get: function(obj, prop) {
        if (prop === 'id') {
            //throw an error if id is being accessed
            throw new Error('cannot access private key')
        } else if (!(prop in obj)) {
            return prop.split('_').map(function(part) {
                return obj[part].toUpperCase()
            }).join(' ')
        } else {
            return obj[prop];
        }
    },
    set: function(obj, prop, value) {
        if (value < obj['age']) {
            throw new Error('You are too young to work with us')
        } else {
            obj[prop] = value
        }
    }

}


const Staff = {
    id: 1,
    first: 'Angela',
    last: 'Jikwoyi',
    age: 30
}

const proxyStaff = new Proxy(Staff, handler)

console.log(proxyStaff.first_last);