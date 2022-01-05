import express from "express";
import { createUser , getusers, getUser, deleteUser, updateUser} from "../controllers/users.js";


const router=express.Router();


router.get('/', getusers);
router.post('/',createUser);
router.get('/:id',getUser );
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser)


export default router;