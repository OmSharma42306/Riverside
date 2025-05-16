import express from 'express'
import userRouter from "../routes/user"
import recordingRouter from "../routes/recordings";

const router = express.Router();

router.use('/user',userRouter);
router.use('/recordings',recordingRouter)

export default router;
