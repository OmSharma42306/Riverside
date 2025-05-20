import express from 'express'
import userRouter from "../routes/user"
import recordingRouter from "../routes/recordings";
import sessionRouter from "../routes/host"
const router = express.Router();

router.use('/user',userRouter);
router.use('/recordings',recordingRouter)
router.use('/sessions',sessionRouter);

export default router;
