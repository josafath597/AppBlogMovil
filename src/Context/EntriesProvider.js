import PropTypes from 'prop-types';
import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import axiosServices from '../Api/Axios';

export const EntriesContext = createContext();

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([]);
  const [baseEntries, setBaseEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getEntries = async () => {
      setIsLoading(true);
      const { data } = await axiosServices.get('/getEntries');
      setBaseEntries(data.posts);
      setEntries(data.posts);
    };
    getEntries();
  }, []);

  const memoizedSetEntries = useCallback(setEntries, []);
  const memoizedSetBaseEntries = useCallback(setBaseEntries, []);
  const memoizedSetIsLoading = useCallback(setIsLoading, []);

  const contextValue = useMemo(
    () => ({
      entries,
      baseEntries,
      isLoading,
      setEntries: memoizedSetEntries,
      setBaseEntries: memoizedSetBaseEntries,
      setIsLoading: memoizedSetIsLoading,
    }),
    [
      entries,
      baseEntries,
      isLoading,
      memoizedSetEntries,
      memoizedSetBaseEntries,
      memoizedSetIsLoading,
    ],
  );

  return (
    <EntriesContext.Provider value={contextValue}>
      {children}
    </EntriesContext.Provider>
  );
}

EntriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
