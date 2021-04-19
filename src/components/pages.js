import React from "react"

export const Pages = ({pageno, setPageNo, isLoadingData}) => {       
    const handlePageIncrease = () => {
        console.log("inr page");
        if (pageno === 1000) {
        }
        else if (!isLoadingData) {
            setPageNo((prevpage) => prevpage + 1)
        }
    }

    const handlePageDecrease = () => {
                console.log("deacr page");

        if (pageno === 1) {
        }
        else if (!isLoadingData){
            setPageNo(pageno - 1)
        }
    }

    return(
        <div>
            <i className="fas fa-arrow-left" onClick={() => handlePageDecrease()}></i>
            <h4 onClick={() => setPageNo(1)}>Page No: 1</h4>
            <h4>Page No:{pageno}</h4>
            <i className="fas fa-arrow-right" onClick={() => handlePageIncrease()}></i>     
        </div>

    )
}