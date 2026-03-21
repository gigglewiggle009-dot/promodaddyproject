export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Contact form data received:", body);

    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !service) {
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
          service,
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