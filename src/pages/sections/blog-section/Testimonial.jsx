import { useState } from "react";
import usersData from "../../../data/usersData";

const ITEMS_PER_PAGE = 3; 

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleUsers = usersData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextUsers = () => {
    if (startIndex + ITEMS_PER_PAGE < usersData.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const prevUsers = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="testimonial-container">
      <button className="nav-button" onClick={prevUsers} disabled={startIndex === 0}>
        &lt;
      </button>
  
      <ul className="testimonial-list">
        {visibleUsers.map((user) => (
          <li key={user.id} className="testimonial-item">
            <div className="testimonial-card">
              <img src={user.image.src} alt={`${user.name}'s photograph`} className="users-image" />
              <div className="user-info">
                <p className="user-name">{user.name}</p>
                <p className="user-age">{user.age} years old</p>
                <p className="user-qualification">{user.qualification}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
  
      <button className="nav-button" onClick={nextUsers} disabled={startIndex + ITEMS_PER_PAGE >= usersData.length}>
        &gt;
      </button>
    </div>
  );
  
};

export default Testimonial;



