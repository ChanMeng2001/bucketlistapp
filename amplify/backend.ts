import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

// link the authentication, data, and storage resources in your Amplify backend configuration
defineBackend({
  auth,
  data,
  storage,
});
