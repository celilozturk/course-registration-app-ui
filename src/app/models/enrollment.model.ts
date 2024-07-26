import { CandidateModel } from "./candidate.model";
import { CourseModel } from "./course.model";

export class EnrollmentModel{
    id?:number;
    courseId?:number;
    candidateId?:number;
    isApproved?:boolean;
    course?:CourseModel;
    candidate?:CandidateModel;
}