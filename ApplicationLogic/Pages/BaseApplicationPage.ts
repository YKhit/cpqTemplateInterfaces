export class BaseApplicationPage {
    async Delay (time: number) {
        const delay = new Promise(resolve => setTimeout(resolve, time));
        return delay;
    };
};
