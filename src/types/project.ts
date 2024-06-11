export interface Project {
    startDate?: string,
    endDate?:string,
    title: string;
    projectDetail: string;
    role: string;
    stack: string[];
    participantsNum?: number;
    output?:string;
    content: string[];
    link?:string;
    gitHub?:string;
    blog?:string;
}