type LookupType<T, I> = T extends string & keyof I ? T : never;
type PossiblyLookup = Record<string, unknown>;

export type { LookupType, PossiblyLookup };
