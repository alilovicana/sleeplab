import { createContext } from "react";

const INITIAL_STATE = {
    searchValue: '',
    setSearchValue: () => {}
};
export const SearchContext = createContext(INITIAL_STATE);