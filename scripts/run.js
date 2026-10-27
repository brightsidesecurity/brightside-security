const crypto = require('crypto');

// Webpack 4 (used by react-scripts 3.x) uses MD4 for hashing.
// OpenSSL 3.0+ in Node 17+ disables MD4 by default, causing ERR_OSSL_EVP_UNSUPPORTED.
// Some Node builds (such as CloudLinux alt-nodejs, minimal builds, or Node < 17)
// do NOT recognize the '--openssl-legacy-provider' CLI flag and crash with:
// "node: bad option: --openssl-legacy-provider".
//
// By monkey-patching crypto.createHash in-process, MD4 is transparently redirected
// to sha256 with NO CLI flags required, working seamlessly across all Node versions and platforms.
const origCreateHash = crypto.createHash;
crypto.createHash = function (algorithm, options) {
  if (algorithm === 'md4') {
    return origCreateHash.call(crypto, 'sha256', options);
  }
  try {
    return origCreateHash.call(crypto, algorithm, options);
  } catch (err) {
    if (err && err.code === 'ERR_OSSL_EVP_UNSUPPORTED') {
      return origCreateHash.call(crypto, 'sha256', options);
    }
    throw err;
  }
};

const script = process.argv[2] || 'start';

// Hosts such as Vercel/Netlify set CI=true, which makes react-scripts fail the
// build on any ESLint warning. Don't treat warnings as errors in production builds.
if (script === 'build') {
  process.env.CI = 'false';
}

// Remove the script name argument ('build', 'start', etc.) so react-scripts sees expected argv
process.argv.splice(2, 1);

try {
  require(`react-scripts/scripts/${script}.js`);
} catch (err) {
  console.error(`Failed to execute react-scripts ${script}:`, err);
  process.exit(1);
}
