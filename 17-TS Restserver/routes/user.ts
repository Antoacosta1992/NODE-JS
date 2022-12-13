import { Router } from 'express';
import { getUser, getUsers, postUser, putUser, deleteUser } from '../controllers/users';


const routes = Router();


routes.get('/',       getUsers );
routes.get('/:id',    getUser );
routes.post('/',      postUser );
routes.put('/:id',    putUser );
routes.delete('/:id', deleteUser );



export default routes;