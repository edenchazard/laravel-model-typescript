import type { PossiblyLookup, LookupType } from "./types";
import type { ModelStructures } from "./exportedModels";
import type { ResourceStructures } from "./exportedResources";

function createLookup<Structure>() {
  type CreateLookupType<T> = LookupType<T, Structure>;

  return class Lookup {
    public static of<T>(type: CreateLookupType<T>, lookup: PossiblyLookup) {
      return lookup as Structure[typeof type];
    }

    public static collection<T>(
      type: CreateLookupType<T>,
      lookups: PossiblyLookup[]
    ) {
      return lookups.map((lookup) => this.of(type, lookup));
    }
  };
}

const Model = createLookup<ModelStructures>();
const Resources = createLookup<ResourceStructures>();

export { Model, Resources };
