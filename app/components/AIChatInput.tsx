import React from "react";
import { SendIcon } from "lucide-react";

export function AIChatInput({
  input,
  handleInputChange,
  handleSubmit,
  placeholder,
}: {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        className="flex-grow px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={input}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <SendIcon className="w-5 h-5" />
      </button>
    </form>
  );
}