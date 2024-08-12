interface Book {
    author?:string;
    pages:number;
};


const ok1: Book = {
    author:'Maqsood',
    pages:20,
};

const missing1: Book={
    pages:30
}