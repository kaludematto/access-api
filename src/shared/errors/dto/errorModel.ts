export class ErrorModel {
    status: number;
    message: string;
    data?: any;

    constructor(status: number, message: string, data?: any) {
        this.status = status;
        this.message = message;
        this.data = data || null;
    }

    public getStatus(): number {
        return this.status;
    }

    public getMessage(): string {
        return this.message;
    }

    public getData(): any {
        return this.data;
    }
}
