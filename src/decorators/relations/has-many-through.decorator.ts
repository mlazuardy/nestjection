import { HasManyThroughOptions } from "../../interfaces";
import { HasManyThroughRelation } from "../../orm";
import { addRelation } from "../../storages/relation.storage";
import { ModelClass } from "../../types";

export function HasManyThrough(modelClass: ModelClass, throughTableOrOptions: string | HasManyThroughOptions): Function;

export function HasManyThrough(modelClass: ModelClass, throughTableOrOptions: string | HasManyThroughOptions): Function {
    return (target: any, propertyKey: string) => {
        let hasManyThroughOptions: any = {};

        if (typeof throughTableOrOptions === 'string') {
            hasManyThroughOptions.through = throughTableOrOptions;
        } else {
            hasManyThroughOptions = throughTableOrOptions;
        }

        hasManyThroughOptions.as = propertyKey;

        addRelation(target, new HasManyThroughRelation(target, modelClass, hasManyThroughOptions))
    }
}