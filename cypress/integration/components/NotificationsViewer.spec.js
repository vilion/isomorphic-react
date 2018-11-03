import NotificationsViewer from '../../../src/components/NotificationsViewer';
import NotificationsService from '../../../src/services/NotificationsService';
import React from 'react'
import { mount } from 'cypress-react-unit-test'

describe('The notification viewer', ()=>{
    before(async()=>{
         cy.stub(NotificationsService, 'GetNotifications', ()=>{}).returns({count:5})
    });
    it('should displays correct number of notifications', async ()=>{
       mount(<NotificationsViewer/>)
       cy.get('.notifications').should('have.text', '5 Notifications Awaiting!')
    });
});
