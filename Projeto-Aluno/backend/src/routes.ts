import {Router, request, response, Request, Response} from 'express';
import { cadAluno } from './controller/AlunoController'
import { consultarAlunos } from './controller/AlunoController'
import { consultarAluno } from './controller/AlunoController'
import { alterarDados } from './controller/AlunoController'
import { matricularAluno } from './controller/AlunoController'
import { deletarAluno } from './controller/AlunoController'

const routes =  Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({message: 'Calma Bebe'})
})

routes.post('/alunos', cadAluno)
routes.get('/alunos', consultarAlunos)
routes.get('/alunos/:id', consultarAluno)
routes.put('/alunos/:id', alterarDados)
routes.patch('/alunos/:id', matricularAluno)
routes.delete('/alunos/:id', deletarAluno)

export default routes