export const sendVerificationCode = async (email) => {
  try {
    // Make a request to your backend API to send the verification code
    const response = await fetch("/api/send-verification-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to send verification code");
    }

    // If the request is successful, return the response data
    return await response.json();
  } catch (error) {
    throw new Error("Failed to send verification code");
  }
};
