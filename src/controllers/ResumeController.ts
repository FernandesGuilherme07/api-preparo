import Resume from "../models/Resume";
import { CrudModule } from "../modules/CrudModule";

export const createResume = CrudModule("create", Resume);
export const getAllResumes = CrudModule("get", Resume);
export const findResumeById = CrudModule("getById", Resume);
export const removeResume = CrudModule("delete", Resume);
export const updateResume = CrudModule("update", Resume);
