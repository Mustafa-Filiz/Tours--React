import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
    const [lessInfo, setLessInfo] = useState(true);

    // const handleInfo = () => {
    //     return lessInfo === tour.info.slice(0, 200) ? setLessInfo(tour.info) : setLessInfo(tour.info.slice(0, 200))
    // }

    return (
        <article className="single-tour">
            <img src={tour.image} alt={tour.name} />
            <footer>
                <div className="tour-info">
                    <h4>{tour.name}</h4>
                    <h4 className="tour-price">${tour.price}</h4>
                </div>
                <p>
                    {lessInfo ? `${tour.info.slice(0, 200)}...` : tour.info}
                    <button onClick={() => setLessInfo(!lessInfo)}>{lessInfo ? "Show Less" : "Read More"}</button>
                </p>

                <button className="delete-btn" onClick={(e) => removeTour(tour.id, e)}>not interested</button>
            </footer>
        </article>
    );
};

export default Tour;
