const { spawn } = require('child_process');

const script = process.argv[2] || 'start';
const majorVersion = parseInt(process.versions.node.split('.')[0], 10);
const args = [];

// Node 17+ uses OpenSSL 3.0 which requires the legacy provider for Webpack 4 MD4 hashing.
// Node < 17 does not have or support this flag and will throw "bad option: --openssl-legacy-provider".
if (majorVersion >= 17) {
  args.push('--openssl-legacy-provider');
}

try {
  const scriptPath = require.resolve(`react-scripts/scripts/${script}.js`);
  args.push(scriptPath, ...process.argv.slice(3));

  const child = spawn(process.execPath, args, {
    stdio: 'inherit',
    env: process.env,
  });

  child.on('error', (err) => {
    console.error(`Failed to execute react-scripts ${script}:`, err);
    process.exit(1);
  });

  child.on('close', (code) => {
    process.exit(code !== null ? code : 0);
  });
} catch (err) {
  console.error(`Could not find react-scripts/scripts/${script}.js:`, err);
  process.exit(1);
}
