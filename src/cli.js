import fs from 'fs-extra';
import path from 'path';

export async function cli(args) {
  await fs.copy(
    path.join(__dirname, '..', 'templates', 'makefile'),
    path.join(process.env.PWD, 'makefile')
  );
}
