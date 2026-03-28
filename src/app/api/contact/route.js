export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Contact form data received:", body);

    const { name, phone, email, message } = body;

    if (!name || !phone || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Form submitted successfully.",
        data: {
          name,
          phone,
          email,
          message,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);

    return Response.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}