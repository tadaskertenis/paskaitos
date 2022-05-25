// Susikurkite objektų konstruktorių naudojant new pavadinimu 
// Book, kuris galės kurti objektus, kurie turės šias 
// savybes (properties): name, author, year ir metodus 
// (naudojant prototype), kurių vienas parašys pavadinima 
// ir autorių, o kitas parodys knygos amžių (senumą).

function Book(name, author, year) {
    this.name1 = name;
    this.author1 = author;
    this.year1 = year; 
}

Book.prototype.setAuthorName = function (){
    return `${this.name1}, ${this.author1}`;
}


Book.prototype.setYear = function (){
    let dabar = new Date ();
    let age = dabar.getFullYear() - this.year1;
    return age;
}

let book = new Book('Seselis', 'jonas', 1990); 
console.log(book.setAuthorName());








