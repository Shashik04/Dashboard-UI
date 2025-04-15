// import React, { useState, useEffect } from "react";

// function RandomUser() {
//   // const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then((response) => response.json())
//   //     .then((data) => setUser(data.results[0]))
//   //     .catch((error) => console.error("Error fetching users", error)); // Corrected error handling
//   //   // Store the first user from the results array
//   // }, []);

//   return (
//     <div>
//       {user ? ( // Ensure data is available before rendering
//         <div>
//           <h2>
//             {user.name.first} {user.name.last}
//           </h2>
//           <p>Email: {user.email}</p>
//           <img src={user.picture.large} alt="User Avatar" />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default RandomUser;
