import NotificationsViewer from '../NotificationsViewer';
import React from 'react';
import renderer from 'react-test-renderer';
import delay from 'redux-saga';


jest.mock('../../services/NotificationsService');


const notificationsService = require('../../services/NotificationsService').default;

describe('The notification viewer', ()=>{
    beforeAll(async()=>{
         notificationsService.__setCount(5);
    });
    it('should displays correct number of notifications', async ()=>{
       const tree = renderer.create(
           <NotificationsViewer/>
           )

       await delay();
       const instance = tree.root;
       const component = instance.findByProps({className:'notifications'});
       const actualText = component.children[0];
       expect(actualText).toEqual('5 Notifications Awaiting!');
    });
});
