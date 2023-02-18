import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

function Images(props) {
  const { data } = props;

  // items show in a current page 
  const [currentItems, setCurrentItems] = useState([]);

  // total page
  const [pageCount, setPageCount] = useState(0);

  // index of first item in a current page 
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    // index of the last item in a current page 
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, data]); // each time each of these change useEffect executed

  const handlePageClick = (event) => {
    console.log('event.selected: ', event.selected, 'item perpage: ', itemsPerPage, 'result :', (event.selected * itemsPerPage) % data.length, 'page cpunt', pageCount);

    // caculate the first index in a current Page
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
        <div className="images">
            {
                currentItems.map((image, index) => {
                    console.log('check image: ', image);
                    return (
                        <div className="image" key={index}>
                            <img src={image.url} alt={image.title}/>
                            <p style={{color: 'black'}}>{image.title}</p>
                        </div>
                    )
                })
            }
        </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-prev'
        nextLinkClassName='page-next'
        activeLinkClassName='active'
        disabledLinkClassName='disable'
        forcePage={0}
      />
    </>
  );
}

export default Images;
