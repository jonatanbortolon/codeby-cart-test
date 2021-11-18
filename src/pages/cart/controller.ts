/**
 * Hooks
 */
import fetcher from "../../api/fetcher";

/**
 * Api
 */
import useApi from "../../hooks/useApi";

const useController = () => {
  const { data, loading, error } = useApi("", fetcher);

  return {
    items: (data?.items as Array<any>) || [],
    totalizers: (data?.totalizers as Array<any>) || [],
    loading: loading,
    error: error,
  };
};

export default useController;
