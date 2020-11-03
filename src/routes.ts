import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld (request: Request,response: Response) {
    const user = createUser({
        email: 'juliareinaldi@outlook.com',
        password: '123',
        techs: ['Node', 'React', 'ReactNative', { title: 'JavaScript', experience: 100}],
    })
    console.log(user.email)
    return response.json({ message: 'Hello World' })
}