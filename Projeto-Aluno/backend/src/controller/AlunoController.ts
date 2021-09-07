import { getRepository } from 'typeorm';
import {Alunos} from '../entity/Aluno';
import { Request, Response } from 'express';

export const cadAluno = async (request: Request,response: Response) => {
    const aluno = await getRepository(Alunos).save(request.body)
    return response.json(aluno)
}

export const consultarAlunos = async(request: Request, response: Response) => {
    const alunos = await getRepository(Alunos).find()
    return response.json(alunos)
}

export const consultarAluno = async (request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).findOne(id)
    return response.json(aluno)
}

export const alterarDados = async (request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).update(id, request.body)
    
    if (aluno.affected === 1) {
        const atualizarAluno = await getRepository(Alunos).findOne(id)
        return response.json(atualizarAluno)
    } else {
        return response.json(404).json({
            message: 'Aluno Não Encontrado'
        })
    }
}

export const matricularAluno =async (request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).update(id, {
        matriculado: true,
    })

    if (aluno.affected === 1){
        const alunoMatricula = await getRepository(Alunos).findOne(id)
        return response.json(alunoMatricula)
    } else {
        return response.json(404).json({message: 'Tarefa não encontrada'})
    }
}

export const deletarAluno = async (request: Request, response: Response) =>{
    const {id} = request.params
    const aluno = await getRepository(Alunos).delete(id)

    if (aluno.affected === 1) {
        return response.status(200).json({ message: 'Tarefa excluida com sucesso'})
    } else {
        return response.status(404).json({ message: 'Tarefa não encontrada'})
    }
}

