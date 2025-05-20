interface ModelStructures {
  "App\\Models\\Item": {
    id: number;
    name: string;
    reference: string;
  };
  "App\\Models\\Contact": {
    id: number;
    property?: number;
    firstName: string;
    lastName: string;
  };
}

export type { ModelStructures };
