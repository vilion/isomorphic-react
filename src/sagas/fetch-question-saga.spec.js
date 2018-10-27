import { handleFetchQuestion } from './fetch-question-saga'
import fetch from 'isomorphic-fetch'

describe('handleFetch', () => {

    beforeAll(()=>{
        fetch.setValue([{question_id:42}])
    });

    it('return correct value', async ()=>{
        const gen = handleFetchQuestion({question_id:42});
        const {value} = await gen.next();
        expect(fetch).toBeCalledWith('/api/questions/42');
        expect(value).toEqual([{question_id:42}]);
    });
});
