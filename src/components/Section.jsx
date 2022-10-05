import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "../styles/section.css";
import axios from "axios";

const baseURL = `https://swapi.dev/api/starships/?page=1`;

export const Section = () => {
  const [naves, setNaves] = useState();
  const [pageId, setPageId] = useState(1);
  const [urlPage, setUrlPage] = useState(baseURL)

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setNaves(response.data.results);
    });
  }, [urlPage]);

  if (!naves) return null;

//******************PAGINACIÓN********************** */
  const handlePageClick = (data) => {
    setPageId(data.selected +1);
    let enlace = `https://swapi.dev/api/starships/?page=${pageId}`;
    setUrlPage(enlace);
  };
  console.log(pageId)

//************************************************** */
  
  const mapeaNaves = naves.map((item, i) => {
    let url = item.url.split("/");
    let id = url[5];

    return (
      <div key={i} className="muestra-naves">
        <Link to={`/naves/${id}`}>
          <div className="naves-name">{item.name.toUpperCase()}</div>
          <div className="naves-model">{item.model}</div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div>{mapeaNaves}</div>;
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};
