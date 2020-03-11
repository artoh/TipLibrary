import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import db from './tips';


describe('tips', () => {

    let mock = new MockAdapter(axios);

    it('returns response when create() is called', done => {
        const newTip = { title: 'test tip', link: 'www.tip.com' };

        mock.onPost('/api/tips').reply(201, newTip);

        db.create(newTip).then(response => {
            expect(response).toEqual(newTip);
            done();
        });
    });

    it('returns list of tips when getAll() is called', done => {
        const tipList = {
            1: {
                title: 'test tip 1',
                link: 'www.tip1.com'
            },
            2: {
                title: 'test tip 2',
                link: 'www.tip2.com'
            }
        };

        mock.onGet('/api/tips').reply(200, tipList);

        db.getAll().then(response => {
            expect(response).toEqual(tipList);
            done();
        });
    });
});