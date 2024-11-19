export async function POST(req) {
  const { message } = await req.json();

  let responseMessages = []; // Array to hold multiple messages

  // Respond with options when the user says "Hello" or "Hi"
  if (
    message.toLowerCase().includes("hello") ||
    message.toLowerCase().includes("hi")
  ) {
    const initialResponse = {
      text: "Hi there! What would you like to know?",
      sender: "bot",
      options: [
        {
          text: "Destination Wedding",
          link: "https://www.thepunarnava.com/destination-wedding/",
        },
        {
          text: "Rooms and Suites",
          link: "https://www.thepunarnava.com/Room-suites",
        },
        { text: "Activities", link: "https://www.thepunarnava.com/activities" },
        { text: "Facilities", link: "https://www.thepunarnava.com/facilities" },
        { text: "Dining", link: "https://www.thepunarnava.com/dining" },
      ],
    };

    const followUpMessage = {
      text: "For more details, you can also call us or mail us.",
      sender: "bot",
      options: [
        { text: "Call +91 7217011476", link: "tel:+91 7217011476" },
        {
          text: "Mail reservation@thepunarnava.com",
          link: "mailto:reservation@thepunarnava.com",
        },
      ],
    };

    responseMessages.push(initialResponse, followUpMessage);
  } else {
    // Default response for unrecognized messages
    responseMessages.push({
      text: "Sorry, I do not understand that.",
      sender: "bot",
    });
  }

  return new Response(JSON.stringify(responseMessages), {
    headers: { "Content-Type": "application/json" },
  });
}
