import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
import { useActions } from '../hooks/useAction';
// import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import { useTypedSelector } from '../hooks/useTypedSelector';
// useSelector same as mapPropsToState (Used in class based component)

const RepoList: React.FC = () => {
    const [term, setTerm] = useState('');
    // const dispatch = useDispatch();
    const { searchRepos } = useActions();

    const {data, error, loading} = useTypedSelector((state) => state.repos);

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