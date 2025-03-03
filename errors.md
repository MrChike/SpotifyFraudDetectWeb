```bash
mrchike@practice:~/code/contributions/spotify$ npm run dev

> spotify-clone@0.1.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- info Loaded env from /home/mrchike/code/contributions/spotify/.env
- event compiled client and server successfully in 6.4s (306 modules)
- wait compiling...
- wait compiling /middleware (client and server)...
- event compiled client and server successfully in 23.1s (489 modules)
- wait compiling /(site)/page (client and server)...
- warn ./node_modules/ws/lib/buffer-util.js
Module not found: Can't resolve 'bufferutil' in '/home/mrchike/code/contributions/spotify/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/buffer-util.js
./node_modules/ws/lib/receiver.js
./node_modules/ws/wrapper.mjs
./node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
./node_modules/@supabase/realtime-js/dist/main/index.js
./node_modules/@supabase/supabase-js/dist/main/index.js
./node_modules/@supabase/auth-helpers-shared/dist/index.js
./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
./actions/getSongsByUserId.ts
./app/layout.tsx

./node_modules/ws/lib/validation.js
Module not found: Can't resolve 'utf-8-validate' in '/home/mrchike/code/contributions/spotify/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/validation.js
./node_modules/ws/lib/receiver.js
./node_modules/ws/wrapper.mjs
./node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
./node_modules/@supabase/realtime-js/dist/main/index.js
./node_modules/@supabase/supabase-js/dist/main/index.js
./node_modules/@supabase/auth-helpers-shared/dist/index.js
./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
./actions/getSongsByUserId.ts
./app/layout.tsx

./node_modules/ws/lib/buffer-util.js
Module not found: Can't resolve 'bufferutil' in '/home/mrchike/code/contributions/spotify/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/buffer-util.js
./node_modules/ws/lib/websocket.js
./node_modules/ws/index.js
./node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
./node_modules/@supabase/realtime-js/dist/main/index.js
./node_modules/@supabase/supabase-js/dist/main/index.js
./node_modules/@supabase/auth-helpers-shared/dist/index.js
./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
./providers/SupabaseProvider.tsx

./node_modules/ws/lib/validation.js
Module not found: Can't resolve 'utf-8-validate' in '/home/mrchike/code/contributions/spotify/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/validation.js
./node_modules/ws/lib/websocket.js
./node_modules/ws/index.js
./node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
./node_modules/@supabase/realtime-js/dist/main/index.js
./node_modules/@supabase/supabase-js/dist/main/index.js
./node_modules/@supabase/auth-helpers-shared/dist/index.js
./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
./providers/SupabaseProvider.tsx
- wait compiling...
- warn ./node_modules/ws/lib/buffer-util.js
Module not found: Can't resolve 'bufferutil' in '/home/mrchike/code/contributions/spotify/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/buffer-util.js
./node_modules/ws/lib/receiver.js
./node_modules/ws/wrapper.mjs
./node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
./node_modules/@supabase/realtime-js/dist/main/index.js
./node_modules/@supabase/supabase-js/dist/main/index.js
./node_modules/@supabase/auth-helpers-shared/dist/index.js
./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
./actions/getSongsByUserId.ts
./app/layout.tsx

./node_modules/ws/lib/validation.js
Module not found: Can't resolve 'utf-8-validate' in '/home/mrchike/code/contributions/spotify/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/validation.js
./node_modules/ws/lib/receiver.js
./node_modules/ws/wrapper.mjs
./node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
./node_modules/@supabase/realtime-js/dist/main/index.js
./node_modules/@supabase/supabase-js/dist/main/index.js
./node_modules/@supabase/auth-helpers-shared/dist/index.js
./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
./actions/getSongsByUserId.ts
./app/layout.tsx

./node_modules/ws/lib/buffer-util.js
Module not found: Can't resolve 'bufferutil' in '/home/mrchike/code/contributions/spotify/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/buffer-util.js
./node_modules/ws/lib/websocket.js
./node_modules/ws/index.js
./node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
./node_modules/@supabase/realtime-js/dist/main/index.js
./node_modules/@supabase/supabase-js/dist/main/index.js
./node_modules/@supabase/auth-helpers-shared/dist/index.js
./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
./providers/SupabaseProvider.tsx

./node_modules/ws/lib/validation.js
Module not found: Can't resolve 'utf-8-validate' in '/home/mrchike/code/contributions/spotify/node_modules/ws/lib'

Import trace for requested module:
./node_modules/ws/lib/validation.js
./node_modules/ws/lib/websocket.js
./node_modules/ws/index.js
./node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
./node_modules/@supabase/realtime-js/dist/main/index.js
./node_modules/@supabase/supabase-js/dist/main/index.js
./node_modules/@supabase/auth-helpers-shared/dist/index.js
./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
./providers/SupabaseProvider.tsx
{
  message: 'TypeError: fetch failed',
  details: 'TypeError: fetch failed\n' +
    '    at node:internal/deps/undici/undici:13178:13\n' +
    '    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)',
  hint: '',
  code: ''
}
TypeError: fetch failed
TypeError: fetch failed
{
  message: 'TypeError: fetch failed',
  details: 'TypeError: fetch failed\n' +
    '    at node:internal/deps/undici/undici:13178:13\n' +
    '    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)',
  hint: '',
  code: ''

mrchike@practice:~/code/contributions/spotify$ npm install bufferutil utf-8-validate
npm error code ERR_SSL_CIPHER_OPERATION_FAILED
npm error 4068EA8E33780000:error:1C800066:Provider routines:ossl_gcm_stream_update:cipher operation failed:../deps/openssl/openssl/providers/implementations/ciphers/ciphercommon_gcm.c:325:
npm error
npm error A complete log of this run can be found in: /home/mrchike/.npm/_logs/2025-03-03T12_55_14_612Z-debug-0.log

mrchike@practice:~/code/contributions/spotify$ npm config set registry http://registry.npmjs.org/
mrchike@practice:~/code/contributions/spotify$ npm install bufferutil utf-8-validate
npm notice Beginning October 4, 2021, all connections to the npm registry - including for package installation - must use TLS 1.2 or higher. You are currently using plaintext http to connect. Please visit the GitHub blog for more information: https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/

added 3 packages in 8s

157 packages are looking for funding
  run `npm fund` for details
```