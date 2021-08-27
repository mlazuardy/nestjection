import { BelongsToOptions } from "../../interfaces";
import { BelongsToRelation } from "../../orm";
import { addRelation, getPreparedRelationOptions } from "../../storages/relation.storage";
import { ModelClass } from "../../types";

export function BelongsTo(modelClass: ModelClass, options?: BelongsToOptions): Function {
    return (target: any, propertyKey: string) => {
        const belongsToOptions: BelongsToOptions = getPreparedRelationOptions(options);

        if (!belongsToOptions.as) belongsToOptions.as = propertyKey;

        addRelation(target, new BelongsToRelation(target, modelClass, belongsToOptions));
    }
}