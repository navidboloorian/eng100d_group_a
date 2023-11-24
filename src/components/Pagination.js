import './Pagination.css';

const Pagination = ({setCurrentPage, currentPage, numPages, setQuizFinished}) => {
    const goToPage = (offset) => {
        if(offset === -1 && currentPage !== 0) {
            setCurrentPage(currentPage + offset);
        }
        else if (offset === 1 && currentPage !== numPages - 1) {
            setCurrentPage(currentPage + offset);
        }
    }

    return (
        <div id = "pagination-buttons">
            {
                currentPage !== 0 ? 
                    <button id="previous-button" onClick={() => goToPage(-1)}>Previous</button> 
                    : 
                    <></>
            }
            {
                currentPage !== numPages - 1 ? 
                    <button id="next-button" onClick={() => goToPage(1)}>Next</button> 
                    : 
                    <button id="next-button" onClick={() => setQuizFinished(true)}>Finish</button> 
            }
        </div>
    );
}

export default Pagination;