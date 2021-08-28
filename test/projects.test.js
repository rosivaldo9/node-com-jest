
const request = require('supertest');

const app = require('../src/app');

describe('projects', ()=>{
    it('checks if project with Novo projeto as title and Diego as owner is created', async ()=>{
        const response = await request(app)
        .post('/projects')
        .send({
            title: 'Novo projeto',
            owner: 'Diego',
        });
        expect(response.body).toEqual({
            title: 'Novo projeto',
            owner: 'Diego',
        })
    });
    it('gg g hookkj ', async ()=>{
        await request(app)
        .post('/projects')
        .send({
            title: 'Novo projeto',
            owner: 'Diego',
        });

        const response = await request(app).get('/projects');

        expect(response.body).toEqual(
            expect.arrayContaining([
                {
                title: 'Novo projeto',
                owner: 'Diego',
                }
            ])
        )
    })
})

