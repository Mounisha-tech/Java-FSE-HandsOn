function BookDetails() {

    const books = [

        {
            id: 1,
            name: "React Basics",
            author: "Jordan Walke",
            price: 500
        },

        {
            id: 2,
            name: "Java Programming",
            author: "James Gosling",
            price: 700
        }

    ];

    return (

        <div>

            <h2>Book Details</h2>

            <ul>

                {

                    books.map(book => (

                        <li key={book.id}>
                            <b>{book.name}</b><br />
                            Author : {book.author}<br />
                            Price : ₹{book.price}
                            <br /><br />
                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BookDetails;