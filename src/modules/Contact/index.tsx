import React, { useState, FormEvent } from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact us
          </h2>
          <p className="text-xl text-gray-600">
            Request an audit or ask a question. We don't just read code, we read your messages too.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative Contact</h3>
              <p className="text-gray-600 space-y-2">
                You can reach us at:{" "}
                <span className="font-medium">hello AT electisec DOT dev</span>
                <br /><br />
                If you are interested in becoming a contributor to Electisec,
                email us with your thoughts and we'll send you an invite to our
                community.
                <br /><br />
                See you around! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FormData {
  name: string;
  tguser: string;
  protocol: string;
  website: string;
  date?: string;
  github?: string;
  message: string;
}

function ContactForm() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isBusy || isDisabled) return;
    
    setIsBusy(true);
    setIsDisabled(true);
    
    try {
      const form = e.currentTarget;
      const formData: FormData = {
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        tguser: (form.elements.namedItem('tguser') as HTMLInputElement).value,
        protocol: (form.elements.namedItem('protocol') as HTMLInputElement).value,
        website: (form.elements.namedItem('website') as HTMLInputElement).value,
        date: (form.elements.namedItem('date') as HTMLInputElement)?.value || "Not specified",
        github: (form.elements.namedItem('github') as HTMLInputElement)?.value || "Not specified",
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponse("Thank you for your message. We will get back to you as soon as possible!");
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setResponse("We are sorry, but something went wrong. Please try again later.");
    } finally {
      setIsBusy(false);
      setTimeout(() => setIsDisabled(false), 10000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your name*
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telegram username*
            </label>
            <input
              type="text"
              name="tguser"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Protocol name*
          </label>
          <input
            type="text"
            name="protocol"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Website URL*
          </label>
          <input
            type="url"
            name="website"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred audit completion date
          </label>
          <input
            type="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Github repo link
          </label>
          <input
            type="url"
            name="github"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Scope and additional information
          </label>
          <textarea
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-darkgreen 
              ${isDisabled 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700'
              }`}
          >
            {isBusy ? 'Sending...' : 'Send request'}
          </button>
        </div>

        {response && (
          <div className={`mt-4 p-4 rounded-md ${
            response.includes("sorry") 
              ? "bg-red-50 text-red-700"
              : "bg-green-50 text-green-700"
          }`}>
            {response}
          </div>
        )}
      </form>
    </div>
  );
}