type IntersectionHandler = (entry: IntersectionObserverEntry) => void

interface ElementIntersectionObservers {
    [key: string]: IntersectionObserver
}

/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap<Element, IntersectionHandler>()

/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap<
    Element | Document,
    ElementIntersectionObservers
>()

const fireObserverCallback = (entry: IntersectionObserverEntry) => {
    observerCallbacks.get(entry.target)?.(entry)
}

const fireAllObserverCallbacks: IntersectionObserverCallback = (entries) => {
    entries.forEach(fireObserverCallback)
}

function initIntersectionObserver({
    root,
    ...options
}: IntersectionObserverInit): IntersectionObserver {
    const lookupRoot = root || document

    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {})
    }
    const rootObservers = observers.get(lookupRoot)!

    const key = JSON.stringify(options)

    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(
            fireAllObserverCallbacks,
            { root, ...options }
        )
    }

    return rootObservers[key]
}

export function observeIntersection(
    element: Element,
    options: IntersectionObserverInit,
    callback: IntersectionHandler
) {
    const rootInteresectionObserver = initIntersectionObserver(options)

    observerCallbacks.set(element, callback)
    rootInteresectionObserver.observe(element)

    return () => {
        observerCallbacks.delete(element)
        rootInteresectionObserver.unobserve(element)
    }
}
