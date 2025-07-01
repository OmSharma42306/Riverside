import { Queue } from 'bullmq';
import {connection} from '../lib/redis_connection';


export const mergeQueue = new Queue('merge-queue',{connection});



