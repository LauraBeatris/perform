import { useLocation } from 'react-router-dom';

// A custom hook that builds on useLocation to parse
// the query string for you.
export default function useQuery() {
    return new URLSearchParams(useLocation().search);
}
