import React, { useContext, useState } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { useRouter } from "next/router";
import { AppContext } from "../../pages/_app";

const Search = ({ height }) => {
  const { isLoading, toggleLoading } = useContext(AppContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (loading) return; // Prevent multiple requests

    const fields = Array.from(event.currentTarget.elements);
    const username = fields.find((field) => field.name === "username")?.value;

    if (username && !hasWhiteSpaceText(username)) {
      setLoading(true);
      toggleLoading(true);
      router.push(`/user/${username}`);
    }
  };

  const hasWhiteSpaceText = (text) => {
    return /\s/g.test(text);
  };

  return (
    <form
      className={`flex items-center max-w-[300px] w-full ${height}`}
      onSubmit={handleOnSubmit}
    >
      <input
        type="text"
        name="username"
        placeholder="Search Username"
        className="dark:bg-dark-color dark:text-white px-2 outline-none border-2 border-purple-400 rounded-l-md focus:shadow-bs3 w-full h-full"
      />
      <button
        aria-label="search"
        type="submit"
        className="bg-purple-mid text-white h-full px-2 md:px-4 rounded-r-md"
      >
        {isLoading ? (
          <div className="animate-spin">
            <FaSpinner />
          </div>
        ) : (
          <FaSearch />
        )}
      </button>
    </form>
  );
};

export default Search;
