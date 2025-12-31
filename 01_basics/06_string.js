let firstName = "Hardik"

let lastName = new String("Gupta");

// console.log(firstName + lastName);    //------------Old practice
// console.log(`My name is ${firstName} ${lastName}`);  //-----new practice(place holder)

let gName = new String('Hardik')

// console.log(gName[0])
// console.log(gName.__proto__)
//                     //  -----------------there are varoius method of the string
// console.log(gName.length)
// console.log(gName.toUpperCase())
// console.log(gName.charAt(9))
// console.log(gName.indexOf('k'))

// console.log(gName.substring(0,4))    //------>connot take the negative value
// console.log(gName.slice(-4,3))       //------>negative value indicate to start in reverse

let newString = "    HA  rdik    "
// console.log(newString)
// console.log(newString.trim())    //------>remove space from staring and ending

let url = "https://hardikg.netlify.app"
// console.log(url.replace('app','com'))  //----> replace with another

// console.log(url.includes('app'));   //-------> check for the given word is present or not

let str = 'hardik gupta-psit kanpur'
// console.log(str.split(' '))    //----> convert the string into array based on given seperator