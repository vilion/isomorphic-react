let __value = [{question_id:42}];
const mockFetch = jest.fn(()=>{return __value;})
mockFetch.setValue = v => __value = v;
export default mockFetch;
