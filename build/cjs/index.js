exports.default = class CJSGmailService {
    constructor(options) {
        this.instance = import('../service.js').then((GmailService) => {
            return new GmailService.default(options);
        });
    }
    async before(...args) {
        const instance = await this.instance;
        return instance.before(...args);
    }
};
