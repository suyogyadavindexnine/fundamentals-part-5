function getTheTitles(books){
    let booktitles = [];
    books.forEach(element => {
        booktitles.push(element.title);
    });
    return booktitles;
}

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

console.log(`Book Titles : ${getTheTitles(books)}`);