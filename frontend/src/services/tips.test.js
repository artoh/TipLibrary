import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import tipService from './tips';


describe('tips', () => {

    let mock = new MockAdapter(axios);

    let newTip = { id: '5e6fb7551ecf2116b88dc017', title: 'test tip 1', link: 'www.tip1.com' };
    let newTip2 = { id: '5e69cfe35cc3450017e58280', title: 'test tip 2', link: 'www.tip2.com' };

    let tipList = { 1: newTip, 2: newTip2 };


    it('returns created tip when create() is successfully called', done => {
        mock.onPost('/api/tips').reply(201, newTip);

        tipService.create(newTip).then(response => {
            expect(response).toEqual(newTip);
            done();
        });
    });

    it('returns list of tips when getAll() is succesfully called', done => {
        mock.onGet('/api/tips').reply(200, tipList);

        tipService.getAll().then(response => {
            expect(response).toEqual(tipList);
            done();
        });
    });

    it('returns updated tip when update() is successfully called', done => {
        let tipId = newTip.id;
        let updatedTip = {
            id: tipId,
            title: "edit title",
            link: "edit link"
        };

        mock.onPut(`/api/tips/${tipId}`).reply(200, updatedTip);

        tipService.update(tipId, updatedTip).then(response => {
            expect(response).toEqual(updatedTip);
            done();
        });
    });

    it('returns deleted tip when deleteTip() is successfully called', done => {
        let tipId = newTip.id;
   
        mock.onDelete(`/api/tips/${tipId}`).reply(200, newTip);

        tipService.deleteTip(tipId).then(response => {
            expect(response).toEqual(newTip);
            done();
        });
    });


});