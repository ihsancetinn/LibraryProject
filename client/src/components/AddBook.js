import React from 'react'

const AddBook = ({ book, handleChange, addBook }) => {
    return (
        <div>
            <div className='container w-50 mt-5 border border-secondary'>
                <form style={{ padding: "20px 20px 10px 20px" }}>
                    <div className="form-floating mb-3">
                        <input type="text"
                            value={book.bookName}
                            onChange={handleChange}
                            name="bookName"
                            className="form-control"
                            id="floatingInput"
                            placeholder="bookName" />
                        <label for="floatingInput">Book Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            value={book.author}
                            onChange={handleChange}
                            name="author"
                            className="form-control"
                            id="floatingInput"
                            placeholder="author" />
                        <label for="floatingInput">Author</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number"
                            name="quantity"
                            value={book.quantity}
                            onChange={handleChange}
                            className="form-control"
                            id="floatingInput"
                            placeholder="quantity" />
                        <label for="floatingInput">Quantity</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select"
                            name="department"
                            value={book.department}
                            onChange={handleChange}
                            id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Departments</option>
                            <option value="History & Criticism">History & Criticism</option>
                            <option value="Religious">Religious</option>
                            <option value="Music">Music</option>
                            <option value="Study & Teaching">Study & Teaching</option>
                            <option value="Classic">Classic</option>
                        </select>
                        <label for="floatingSelect">Select</label>
                    </div>
                    <div className="form-floating mb-3" >
                        <textarea className="form-control" name="comments" value={book.comments} onChange={handleChange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <button type="button" onClick={addBook} className="btn btn-primary mb-3">Add Book</button>
                </form>
            </div>
        </div>
    )
}

export default AddBook;