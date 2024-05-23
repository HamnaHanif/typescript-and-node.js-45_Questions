var personName = "Hamna Hanif";
//LowerCase :
console.log(personName.toLowerCase());
//UpperCase :
console.log(personName.toUpperCase());
//TitleCase :
console.log(personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
