import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail';
import renderer from 'react-test-renderer';
import React from 'react';

describe('The Question Detail Component',()=>{
    describe('The Container Element',()=>{
        describe('mapStateToProps', ()=>{
            it('Should map the state to props correctly', ()=>{
                const appState = {
                    questions:[{question_id:42}]
                };
                const ownProps = {
                    question_id: 42
                };
                const componentState = mapStateToProps(appState, ownProps);
                expect(componentState).toEqual({question_id:42});
            });
        });
    });

    describe('The display element', ()=>{
        it('Should not regress', ()=>{
            const tree = renderer.create(
                <QuestionDetailDisplay
                    titile="THANKS!"
                    body="43"
                    answer_count={0}
                    tags={['hitchhiking']}
                />
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });

});
