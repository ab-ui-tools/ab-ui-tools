import net from 'net';

export const checkPort = (nextPort: number): Promise<number> =>
  new Promise(resolve => {
    const server = net.createServer().listen(nextPort, 'localhost');

    server.on('listening', function () {
      resolve(nextPort);
      server.close();
    });

    server.on('error', err => {
      if ((err as unknown as { code: string }).code === 'EADDRINUSE') {
        void checkPort(nextPort + 1).then(resolve);
      }
    });
  });
