export default function ContactUs() {
  return (
    <div className="h-full relative sm:my-16 py-16 lg:mx-40">
      <div>
        <h2 className={"text-3xl font-bold text-neutral-900"}>
          {"Contact us"}
        </h2>
        <p className={"text-xl leading-10 text-neutral-900"}>
          {
            "Request an audit or ask a question. We don't just read code, we read your messages too."
          }
        </p>
      </div>
      <div className="grid grid-cols-2 gap-16 mt-16 w-full">
        <SectionContact />
        <p className="cols-span-1 text-xl">
          {/* Alternatively, you can reach us at:{" "}
          <strong>hello AT electisec DOT dev</strong> <br />
          <br /> If you are interested in becoming a contributor to Electisec,{" "}
          <br />
          email us with your thoughts and <br /> we’ll send you an invite to our
          community.
          <br />
          <br />
          See you around ? 🚀 */}
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";

import type { ReactElement } from "react";

function SectionContact(): ReactElement {
  const [isDisabled, set_isDisabled] = useState(false);
  const [isBusy, set_isBusy] = useState(false);
  const [response, set_Response] = useState("");

  return (
    <section
      id={"contact"}
      aria-label={"contact"}
      className={"col-span-1 items-center space-x-8"}
    >
      <div>
        <div>
          <form
            id={"contact-form"}
            onSubmit={(e): void => {
              e.preventDefault();
              if (isBusy || isDisabled) {
                return;
              }
              set_isBusy(true);
              set_isDisabled(true);
              try {
                const name = (e.target as any).name.value;
                const tguser = (e.target as any).tguser.value;
                const protocol = (e.target as any).protocol.value;
                const website = (e.target as any).website.value;
                const date = (e.target as any)?.date?.value || "Not specified";
                const github =
                  (e.target as any)?.github?.value || "Not specified";
                const message = (e.target as any).message.value;
                axios
                  .post("@/api/contact", {
                    name,
                    tguser,
                    protocol,
                    date,
                    github,
                    website,
                    message,
                  })

                  .then((): void => {
                    set_Response(
                      "Thank you for your message. We will get back to you as soon as possible!"
                    );
                  })
                  .catch((): void => {
                    set_Response(
                      "We are sorry, but something went wrong. Please try again later."
                    );
                  })
                  .finally((): void => {
                    (document.getElementById("contact-form") as any)?.reset?.();
                    set_isBusy(false);
                    setTimeout((): void => {
                      set_isDisabled(false);
                    }, 10000);
                  });
              } catch (error) {
                console.error(error);
                set_Response(
                  "We are sorry, but something went wrong. Please try again later."
                );
              }
            }}
            className={"flex flex-col space-y-4 md:space-y-8"}
          >
            <div
              className={
                "flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0"
              }
            >
              <label className={"flex flex-col"}>
                <p className={"pb-1 text-xs text-neutral-500"}>
                  {"Your name*"}
                </p>
                <input
                  className={"border-none bg-neutral-200"}
                  type={"text"}
                  name={"name"}
                  required
                />
              </label>
              <label className={"flex flex-col"}>
                <p className={"pb-1 text-xs text-neutral-500"}>
                  {"Your Telegram username*"}
                </p>
                <input
                  className={"border-none bg-neutral-200"}
                  type={"text"}
                  name={"tguser"}
                  required
                />
              </label>
            </div>
            <label className={"flex flex-col"}>
              <p className={"pb-1 text-xs text-neutral-500"}>
                {"Protocol name*"}
              </p>
              <input
                className={"border-none bg-neutral-200"}
                type={"text"}
                name={"protocol"}
                required
              />
            </label>
            <label className={"flex flex-col"}>
              <p className={"pb-1 text-xs text-neutral-500"}>
                {"Website URL*"}
              </p>
              <input
                className={"border-none bg-neutral-200"}
                type={"url"}
                name={"website"}
                required
              />
            </label>

            <label className={"flex flex-col"}>
              <p className={"pb-1 text-xs text-neutral-500"}>
                {"Preferred audit completion date"}
              </p>
              <input
                className={"border-none bg-neutral-200"}
                name={"date"}
                type={"date"}
                min={new Date().toISOString().split("T")[0]}
              />
            </label>

            <label className={"flex flex-col"}>
              <p className={"pb-1 text-xs text-neutral-500"}>
                {"Github repo link"}
              </p>
              <input
                className={"border-none bg-neutral-200"}
                name={"github"}
                type={"url"}
              />
            </label>

            <label className={"flex flex-col"}>
              <p className={"pb-1 text-xs text-neutral-500"}>
                {"Scope and additional information"}
              </p>
              <textarea
                className={"border-none bg-neutral-200"}
                name={"message"}
                rows={4}
              />
            </label>

            <button
              disabled={isDisabled}
              className="px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700"
            >
              {"Send request"}
            </button>
          </form>
          <h2>{response}</h2>
        </div>
      </div>
    </section>
  );
}
