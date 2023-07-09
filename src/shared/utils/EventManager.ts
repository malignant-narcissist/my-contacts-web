interface IEventManager<
  S extends string = string,
  L extends Function = Function,
> {
  listenersMap: Map<S, Set<L>>;
  on(eventKey: S, listener: L): void;
  emit(eventKey: S, payload: unknown): void;
  removeListener(eventKey: S, listener: L): void;
}

abstract class AbstractEventManager<
  S extends string = string,
  L extends Function = Function,
> implements IEventManager<S, L>
{
  protected _listenersMap: Map<S, Set<L>>;

  constructor() {
    this._listenersMap = new Map();
  }

  abstract get listenersMap(): typeof this._listenersMap;
  abstract set listenersMap(value: typeof this._listenersMap);

  abstract on(eventKey: S, listener: L): void;
  abstract emit(eventKey: S, payload: unknown): void;
  abstract removeListener(eventKey: S, listener: L): void;
}

class EventManager<
  S extends string = string,
  L extends Function = Function,
> extends AbstractEventManager<S, L> {
  get listenersMap(): Map<S, Set<L>> {
    return this._listenersMap;
  }

  set listenersMap(value: Map<S, Set<L>>) {
    this._listenersMap = value;
  }

  on(eventKey: S, listener: L): void {
    if (!this.listenersMap.has(eventKey)) {
      const listeners = new Set<L>();

      this.listenersMap.set(eventKey, listeners);
    }

    this.listenersMap.get(eventKey)?.add(listener);
  }

  emit(eventKey: S, payload: unknown): void {
    this.listenersMap.get(eventKey)?.forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(eventKey: S, listenerToRemove: L): void {
    this.listenersMap.get(eventKey)?.delete(listenerToRemove);
  }
}

export { EventManager };
