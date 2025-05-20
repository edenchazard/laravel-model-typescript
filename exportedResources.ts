interface ResourceStructures {
  "App\\Resources\\Item": {
    id: number;
    name: string;
    reference: string;
  };
  "App\\Resources\\Contact": {
    id: number;
    property?: number;
    firstName: string;
    lastName: string;
  };
}

export type { ResourceStructures };
