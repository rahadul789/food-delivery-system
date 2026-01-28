// import { useEffect, useState } from "react";
// import { getSocket } from "../services/socket";

// export const useLiveTracking = (orderId) => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     const socket = getSocket();

//     socket.emit("joinOrderRoom", { orderId });

//     socket.on("liveLocation", (data) => {
//       console.log("📍 Received location:", data);
//       setLocation({
//         latitude: data.lat,
//         longitude: data.lng,
//       });
//     });

//     return () => {
//       socket.emit("leaveOrderRoom", { orderId });
//       socket.off("liveLocation");
//     };
//   }, [orderId]);

//   return location;
// };
