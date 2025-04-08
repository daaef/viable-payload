"use server";
import { redirect } from "next/navigation";

// Server Action
export async function sendForm(prevState: any, formData: FormData) {
  "use server";

  let redirectOnSuccess = false;
  try {
    const requestBody = new URLSearchParams({
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      "00NSo000001B7f7": formData.get("subject") as string,
      "00NSo000001B7gjMAC": formData.get("comments") as string,
      "00NSo000001BZ9x": formData.get("receiveNewsletter") as string,
      oid: process.env.CONTACT_US_LEAD_OID as string,
      retURL: process.env.CONTACT_US_LEAD_RETURN_URL as string,
      lead_source: process.env.CONTACT_US_LEAD_SOURCE as string,
      // DEBUG MODE
      debug: process.env.CONTACT_US_DEBUG_MODE as string,
      debugEmail: process.env.CONTACT_US_DEBUG_EMAIL as string,
    });
    console.debug("POSTing values", requestBody);
    const response = await fetch(
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D7Q00000B3Uqr",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: requestBody,
      },
    );
    console.debug(response.status);
    console.debug(response.statusText);

    redirectOnSuccess = response.status === 200;
  } catch (error) {
    console.error("Error:", error);
    return {
      message: "Could not submit contact form, please try again later.",
    };
  }
  if (redirectOnSuccess) {
    redirect("/submit-text");
  } else {
    // Alert message with error
    return {
      message: "Could not submit contact form, please try again later.",
    };
  }
}
