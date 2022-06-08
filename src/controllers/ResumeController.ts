import Resume from "../models/Resume";
import { CrudModule } from "../modules/CrudModule";

export const createResume = CrudModule("create", Resume);
export const getAllResumes = CrudModule("get", Resume);
export const findResumeById = CrudModule("getById", Resume, "resume_Id");
export const removeResume = CrudModule("delete", Resume, "resume_Id");
export const updateResume = CrudModule("update", Resume, "resume_Id");
