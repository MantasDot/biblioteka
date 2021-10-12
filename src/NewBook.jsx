import { useState } from "react";

function NewBook({ addBook }) {
  const [tittle, settittle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [pages, setPages] = useState("");

  const control = (e, what) => {
    switch (what) {
      case "tittle":
        settittle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "pages":
        setPages(e.target.value);
        break;
    }
  };

  const insert = () => {
    addBook({
      tittle: tittle,
      author: author,
      category: category,
      pages: pages,
    });
    settittle("");
    setAuthor("");
    setCategory("");
    setPages("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card m-3">
              <div className="card-body">
                <h5 className="card-tittle">New Book</h5>
                <div className="form-group">
                  <label>tittle</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "tittle")}
                    value={tittle}
                  />
                  <small className="form-text text-muted">
                    Enter new book tittle
                  </small>
                </div>
                <div className="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "author")}
                    value={author}
                  />
                  <small className="form-text text-muted">
                    Enter author name
                  </small>
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "category")}
                    value={category}
                  />
                  <small className="form-text text-muted">
                    Enter books category
                  </small>
                </div>
                <div className="form-group">
                  <label>Pages</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "pages")}
                    value={pages}
                  />
                  <small className="form-text text-muted">
                    Enter books page count
                  </small>
                </div>
                <button type="button" className="btn btn-info" onClick={insert}>
                  Add Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewBook;
