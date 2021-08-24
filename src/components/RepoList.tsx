import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { actionCreators } from '../state';

const RepoList: React.FC = () => {
    const [term, setTerm] = useState('');
    // const dispatch = useDispatch();
    const { searchRepos } = useActions();

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