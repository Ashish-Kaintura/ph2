// src\app\api\room\[id]\route.js
import { rooms } from '../route';

export async function GET(req, { params }) {
  try {
    console.log('Request params:', params); // Log params to check if they are passed correctly
    const { id } = params;
    
    // Convert id to number as the room id is a number
    const roomId = parseInt(id, 10);
    console.log('Parsed room ID:', roomId); // Log parsed room ID
    
    if (isNaN(roomId)) {
      console.error('Invalid room ID'); // Log invalid ID error
      return new Response(JSON.stringify({ message: 'Invalid room ID' }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Find the room with the matching id
    const room = rooms.find(item => item.id === roomId);
    console.log('Found room:', room); // Log found room
    
    if (room) {
      return new Response(JSON.stringify(room), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      console.error('Room not found'); // Log room not found error
      return new Response(JSON.stringify({ message: 'Room not found' }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error('Error fetching room:', error); // Log the error
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
