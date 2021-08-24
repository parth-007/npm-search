import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
import { useActions } from '../hooks/useAction';
import { useSelector } from 'react-redux';
// useSelector same as mapPropsToState (Used in class based component)

const RepoList: React.FC = () => {
    const [term, setTerm] = useState('');
    // const dispatch = useDispatch();
    const { searchRepos } = useActions();

    const {data, erorr, loading} = useSelector((state) => state.repos);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // dispatch(actionCreators.searchRepos(term)); 
        searchRepos(term);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button> Search </button>
            </form>
        </div>
    );
}

export default RepoList;