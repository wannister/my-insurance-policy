export interface User {
    id: number,
    policyNumber: number;
    startDate: Date;
    endDate: Date;
    description: string;
    firstName: string;
    surName: string;
    dateBirth: Date;
    isEdit: boolean;
}

export const UserSchema = {
    policyNumber: "text",
    startDate: "text",
    endDate: "text",
    description: "text",
    firstName: "text",
    surName: "text",
    dateBirth: "text",
    isEdit: "isEdit"
}