import { OpportunitiesModel } from "../models/Opportunities";
import { CrudModule } from "../modules/CrudModule";

export const createOpportunitie = CrudModule("create", OpportunitiesModel);
export const getAllOpportunitieByUserId = CrudModule("get", OpportunitiesModel);
export const getAllOpportunitie = CrudModule("get", OpportunitiesModel);
export const findOpportunitieById = CrudModule("getById", OpportunitiesModel);
export const removeOpportunitie = CrudModule("delete", OpportunitiesModel);
export const updateOpportunitie = CrudModule("update", OpportunitiesModel);
