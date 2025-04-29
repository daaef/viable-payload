"use client";

import React from "react";

export default function JoinUsText({ content }: { content: string[] }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="italic sm:not-italic px-2 mt-3 ml-5">
        Would you like to help preserve and regenerate nature in the most
        efficient and innovative ways?
      </p>
      {!isExpanded && <span className="inline sm:hidden">...</span>}
      <p className="italic sm:not-italic px-2 ml-5">
        <span className={isExpanded ? "inline" : "hidden sm:inline"}>
          Are you able to self-motivate and bring tasks to completion?
        </span>
      </p>
      {!isExpanded && (
        <button
          onClick={handleToggle}
          className="ml-1 text-[var(--green-600-rgb)] underline mt-2 sm:hidden"
        >
          Read More
        </button>
      )}

      <div className={`text-base ${isExpanded ? "block" : "hidden sm:block"}`}>
        <p className="italic my-2 px-3 sm:px-0">
          Join us to achieve our mission and create positive change in our
          community and beyond. We are always looking for talent to help us on
          our mission.
        </p>
        <p className="italic my-2 px-3 sm:px-0">
          There are 3 levels of participation: entrance, medium and expert. We
          have task based and role based openings.
        </p>
        <p className="italic px-3 sm:px-0">We are looking for people who:</p>
        <ul className="list-disc list-inside ml-4 mt-1 italic px-3 py-3 sm:ml-0 sm:px-0">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
