import emailjs from "@emailjs/browser";

export const sendEmail = (form) => {
  return emailjs.sendForm(
    "chandan5533",
    "template_h16fg8a",
    form,
    {
      publicKey: "xNVGLlLmj3SSLN5Kg",
    }
  );
};