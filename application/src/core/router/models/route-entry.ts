import { Nillable } from '@utils/nil/nillable';

export class RouteEntry<RouteName, RoutePath> {
  public constructor(
    private readonly data: {
      name: RouteName;
      parts: RoutePath[];
      title?: Nillable<string>;
    }
  ) {}

  public get route(): RouteName {
    return this.data.name;
  }

  public get parts(): RoutePath[] {
    return this.data.parts;
  }

  public get title(): Nillable<string> {
    return this.data.title;
  }
}
