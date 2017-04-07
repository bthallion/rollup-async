// Returns a string that you should listen to.

import ben from './ben';

const tellTheTruth = async () => {
    const useRollup = await ben.shouldUseRollup();
    return `Rollup is awesome: ${useRollup}`;
};

export default tellTheTruth;
