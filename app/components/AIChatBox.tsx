import React from "react";
import { useChat } from "ai/react";
import { AIChatInput } from "./AIChatInput";
import { AIChatMessages } from "./AIChatMessages";

export function AIChatBox() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto stretch">
      <h2 className="text-2xl font-bold mb-4">Project Management Assistant</h2>
      <AIChatMessages messages={messages} />
      <AIChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        placeholder="Ask about project management, tasks, or team coordination..."
      />
    </div>
  );
}