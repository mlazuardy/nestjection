import { QueryBuilder } from "../../orm";

export interface BaseRelationOptions {
    /** relation property name */
    as?: string | symbol;

    /** local key on model table */
    from?: string;

    /** foreign key on related table */
    to?: string;

    filter?: (query: QueryBuilder<any>) => void
}