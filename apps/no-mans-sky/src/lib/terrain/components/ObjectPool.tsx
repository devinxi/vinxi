export class ObjectPoolImpl<T> {
  pool: Record<any, any[]> = {};
  active: Record<string, any> = {};
}
// function retireChunks(chunks: Record<string, TerrainChunkParams>) {
//   for (let c of chunks) {
//     if (!(c.width in pool)) {
//       this._pool[c.chunk._params.width] = [];
//     }
//     c.chunk.Hide();
//     this._pool[c.chunk._params.width].push(c.chunk);
//   }
// }

export function ObjectPool<T>({
  children,
  type,
  getParams,
  impl,
  pool
}: {
  children: React.ReactNode;
  type: React.ElementType;
  getParams: (props: T) => any;
  impl: any;
  pool: ObjectPoolImpl<T>;
}) {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        let chunkElement = child as React.ReactElement;
        if (chunkElement.type === type) {
          console.log(child);
          let mesh;

          if (pool.active[chunkElement.key!]) {
            mesh = pool.active[chunkElement.key!];
          } else {
            let param = getParams(chunkElement.props);
            if (!(param in pool.pool)) {
              pool.pool[param] = [];
            }

            if (pool.pool[param].length > 0) {
              mesh = pool.pool[param].pop();
            } else {
              mesh = new impl();
            }
          }

          pool.active[chunkElement.key!] = mesh!;

          let Component = type;
          return <Component key={chunkElement.key} object={mesh} {...chunkElement.props} />;
        }
        return null;
      })}
    </>
  );
}
