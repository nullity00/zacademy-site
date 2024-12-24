interface ContactFormData {
  name: string;
  tguser: string;
  protocol: string;
  website: string;
  date?: string;
  github?: string;
  message: string;
}

export const sendContactForm = async (formData: ContactFormData) => {
  try {
    const message = `
<b>New Audit Request</b>
-------------------------------------------------------------------
<b>Name:</b> ${formData.name}
<b>Telegram username:</b> ${formData.tguser}
<b>Protocol:</b> ${formData.protocol}
<b>Preferred audit completion date:</b> ${formData.date || 'Not specified'}
<b>Website:</b> ${formData.website}
<b>Github repo link:</b> ${formData.github || 'Not specified'}
<b>Additional information:</b> ${formData.message}
-------------------------------------------------------------------`;

    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server error:', errorData);
      throw new Error(errorData.error || 'Failed to send message');
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error; // Re-throw to handle in the component
  }
};