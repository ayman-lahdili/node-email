// const BullMQ = require('bullmq');
// export const queue = new BullMQ('email-sending');

// const DEFAULT_REMOVE_CONFIG = {
// 	removeOnComplete: {
// 		age: 3600,
// 	},
// 	removeOnFail: {
// 		age: 24 * 3600,
// 	},
// };

// export async function addJobToQueue(data) {
// 	return queue.add('job', data, DEFAULT_REMOVE_CONFIG);
// }